import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type ThemeColor, type FontChoice } from '../store/useStore'
import { useAuth } from '../store/useAuth'
import { manifest } from '../data/manifest'
import { IconUser, IconSun, IconMoon } from '../components/Icons'
import './ProfilePage.css'

function resizeImage(file: File, maxSize: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let w = img.width
        let h = img.height
        if (w > h) { h = maxSize * h / w; w = maxSize }
        else { w = maxSize * w / h; h = maxSize }
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      }
      img.onerror = reject
      img.src = reader.result as string
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

const fontOptions: { id: FontChoice; label: string; sample: string }[] = [
  { id: 'serif', label: '宋体', sample: '经' },
  { id: 'sans', label: '黑体', sample: '经' },
  { id: 'system', label: '系统', sample: '经' },
]

const themeOptions: { id: ThemeColor; label: string; color: string }[] = [
  { id: 'matcha', label: '抹茶', color: '#6B9E7D' },
  { id: 'sky', label: '天空', color: '#7AB8D9' },
  { id: 'lavender', label: '薰衣草', color: '#A494CC' },
  { id: 'peach', label: '蜜桃', color: '#E8A598' },
  { id: 'amber', label: '琥珀', color: '#D9A84E' },
  { id: 'rose', label: '玫瑰', color: '#D4849A' },
  { id: 'slate', label: '岩灰', color: '#7A8B99' },
  { id: 'teal', label: '青碧', color: '#5BA4A4' },
  { id: 'ink', label: '墨黑', color: '#3A3A3A' },
]

export default function ProfilePage() {
  const readingCounts = useStore((s) => s.readingCounts)
  const fontSize = useStore((s) => s.fontSize)
  const showPinyin = useStore((s) => s.showPinyin)
  const showProgress = useStore((s) => s.showProgress)
  const themeColor = useStore((s) => s.themeColor)
  const customColor = useStore((s) => s.customColor)
  const darkMode = useStore((s) => s.darkMode)
  const fontChoice = useStore((s) => s.fontChoice)
  const setFontSize = useStore((s) => s.setFontSize)
  const setFontChoice = useStore((s) => s.setFontChoice)
  const togglePinyin = useStore((s) => s.togglePinyin)
  const showCounterRing = useStore((s) => s.showCounterRing)
  const toggleProgress = useStore((s) => s.toggleProgress)
  const toggleCounterRing = useStore((s) => s.toggleCounterRing)
  const setThemeColor = useStore((s) => s.setThemeColor)
  const setCustomColor = useStore((s) => s.setCustomColor)
  const toggleDarkMode = useStore((s) => s.toggleDarkMode)

  const displayName = useStore((s) => s.displayName)
  const avatarData = useStore((s) => s.avatarData)

  const navigate = useNavigate()
  const user = useAuth((s) => s.user)
  const signOut = useAuth((s) => s.signOut)
  const syncToCloud = useAuth((s) => s.syncToCloud)
  const syncFromCloud = useAuth((s) => s.syncFromCloud)
  const updateDisplayName = useAuth((s) => s.updateDisplayName)
  const updateAvatar = useAuth((s) => s.updateAvatar)
  const colorInputRef = useRef<HTMLInputElement>(null)
  const avatarInputRef = useRef<HTMLInputElement>(null)
  const [showColorPanel, setShowColorPanel] = useState(false)
  const [hexInput, setHexInput] = useState(customColor)
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState('')

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const dataUrl = await resizeImage(file, 128)
    await updateAvatar(dataUrl)
    e.target.value = ''
  }

  const handleNameSave = async () => {
    const trimmed = nameInput.trim()
    if (trimmed && trimmed !== displayName) {
      await updateDisplayName(trimmed)
    }
    setEditingName(false)
  }

  const userDisplayName = displayName || user?.user_metadata?.display_name || ''
  const userAvatar = avatarData || user?.user_metadata?.avatar_data || user?.user_metadata?.avatar_url || ''

  const paletteColors = [
    '#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#1ABC9C', '#3498DB',
    '#9B59B6', '#E91E63', '#795548', '#607D8B', '#34495E', '#16A085',
    '#D35400', '#C0392B', '#8E44AD', '#2980B9', '#27AE60', '#F39C12',
    '#1E90FF', '#FF6B6B', '#A29BFE', '#FD79A8', '#00CEC9', '#636E72',
  ]

  const fontSizes = [18, 20, 22, 24, 26]
  const hasRecords = Object.values(readingCounts).some((c) => c > 0)

  return (
    <div className="profile-page">
      <h1 className="profile-title">我的</h1>

      {user ? (
        <div className="profile-card">
          <button className="profile-avatar" onClick={() => avatarInputRef.current?.click()}>
            {userAvatar ? (
              <img src={userAvatar} alt="" className="avatar-img" />
            ) : (
              <IconUser size={22} color="var(--theme)" />
            )}
            <span className="avatar-edit-badge">✎</span>
          </button>
          <input
            ref={avatarInputRef}
            type="file"
            accept="image/*"
            className="avatar-input-hidden"
            onChange={handleAvatarChange}
          />
          <div className="profile-card-body">
            {editingName ? (
              <div className="name-edit-row">
                <input
                  className="name-edit-input"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleNameSave() }}
                  placeholder="输入昵称"
                  autoFocus
                  maxLength={20}
                />
                <button className="name-edit-save" onClick={handleNameSave}>✓</button>
              </div>
            ) : (
              <button
                className="profile-card-text profile-name-btn"
                onClick={() => { setNameInput(userDisplayName); setEditingName(true) }}
              >
                {userDisplayName || user.email}
                <span className="name-edit-icon">✎</span>
              </button>
            )}
            {!editingName && userDisplayName && (
              <div className="profile-card-email">{user.email}</div>
            )}
            <div className="profile-card-sub">
              <button className="profile-sync-btn" onClick={async () => { await syncFromCloud(); await syncToCloud() }}>同步数据</button>
              <span style={{ margin: '0 6px', color: 'var(--c-ink-faint)' }}>·</span>
              <button className="profile-sync-btn profile-logout-btn" onClick={signOut}>退出登录</button>
            </div>
          </div>
        </div>
      ) : (
        <button className="profile-card press-scale" onClick={() => navigate('/login')}>
          <div className="profile-avatar">
            <IconUser size={22} color="var(--c-text-mute)" />
          </div>
          <div className="profile-card-body">
            <div className="profile-card-text">未登录</div>
            <div className="profile-card-sub">登录后可同步数据</div>
          </div>
        </button>
      )}

      <div className="profile-section">
        <div className="section-title">外观</div>
        <div className="section-card">
          {/* Theme Color */}
          <div className="setting-item setting-theme">
            <span className="setting-label">主题色</span>
            <div className="theme-options">
              {themeOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`theme-dot ${themeColor === opt.id ? 'active' : ''}`}
                  style={{ '--dot-color': opt.color } as React.CSSProperties}
                  onClick={() => setThemeColor(opt.id)}
                  title={opt.label}
                >
                  {themeColor === opt.id && <span className="theme-check" />}
                </button>
              ))}
              {/* Custom color */}
              <button
                className={`theme-dot theme-custom ${themeColor === 'custom' ? 'active' : ''}`}
                style={{ '--dot-color': customColor } as React.CSSProperties}
                onClick={() => { setShowColorPanel(!showColorPanel); setHexInput(customColor) }}
                title="自定义"
              >
                <span className="custom-plus">{themeColor === 'custom' ? '' : '+'}</span>
                {themeColor === 'custom' && <span className="theme-check" />}
              </button>
              <input
                ref={colorInputRef}
                type="color"
                className="color-input-hidden"
                value={customColor}
                onChange={(e) => { setCustomColor(e.target.value); setHexInput(e.target.value) }}
              />
            </div>
            {showColorPanel && (
              <div className="color-panel">
                <div className="color-palette">
                  {paletteColors.map((c) => (
                    <button
                      key={c}
                      className={`palette-dot ${customColor === c && themeColor === 'custom' ? 'active' : ''}`}
                      style={{ background: c }}
                      onClick={() => { setCustomColor(c); setHexInput(c) }}
                    />
                  ))}
                </div>
                <div className="color-hex-row">
                  <span className="hex-hash">#</span>
                  <input
                    className="hex-input"
                    type="text"
                    maxLength={6}
                    value={hexInput.replace('#', '')}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9a-fA-F]/g, '').slice(0, 6)
                      setHexInput('#' + val)
                      if (val.length === 6) setCustomColor('#' + val)
                    }}
                    placeholder="6B9E7D"
                  />
                  <button className="hex-pick-btn" onClick={() => colorInputRef.current?.click()}>
                    取色
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <div className="setting-item">
            <span className="setting-label">
              {darkMode ? <IconMoon size={16} /> : <IconSun size={16} />}
              <span style={{ marginLeft: 8 }}>夜间模式</span>
            </span>
            <button
              className={`toggle ${darkMode ? 'on' : ''}`}
              onClick={toggleDarkMode}
              role="switch"
              aria-checked={darkMode}
            >
              <span className="toggle-knob" />
            </button>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <div className="section-title">阅读</div>
        <div className="section-card">
          <div className="setting-item">
            <span className="setting-label">字体</span>
            <div className="font-choice-options">
              {fontOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`font-choice-btn ${fontChoice === opt.id ? 'active' : ''}`}
                  onClick={() => setFontChoice(opt.id)}
                >
                  <span className={`font-sample font-sample-${opt.id}`}>{opt.sample}</span>
                  <span className="font-label">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="setting-item">
            <span className="setting-label">字号</span>
            <div className="font-size-options">
              {fontSizes.map((size) => (
                <button
                  key={size}
                  className={`font-size-btn ${fontSize === size ? 'active' : ''}`}
                  onClick={() => setFontSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="setting-item">
            <span className="setting-label">诵读进度条</span>
            <button
              className={`toggle ${showProgress ? 'on' : ''}`}
              onClick={toggleProgress}
              role="switch"
              aria-checked={showProgress}
            >
              <span className="toggle-knob" />
            </button>
          </div>

          <div className="setting-item">
            <span className="setting-label">计数进度环</span>
            <button
              className={`toggle ${showCounterRing ? 'on' : ''}`}
              onClick={toggleCounterRing}
              role="switch"
              aria-checked={showCounterRing}
            >
              <span className="toggle-knob" />
            </button>
          </div>

          <div className="setting-item">
            <span className="setting-label">默认显示拼音</span>
            <button
              className={`toggle ${showPinyin ? 'on' : ''}`}
              onClick={togglePinyin}
              role="switch"
              aria-checked={showPinyin}
            >
              <span className="toggle-knob" />
            </button>
          </div>
        </div>
      </div>

      {hasRecords && (
        <div className="profile-section">
          <div className="section-title">诵读记录</div>
          <div className="section-card">
            {manifest
              .filter((s) => readingCounts[s.id] > 0)
              .map((s) => (
                <div key={s.id} className="record-item">
                  <span className="record-name">{s.name}</span>
                  <span className="record-count">
                    <span className="record-dot" />
                    {readingCounts[s.id]} 部
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="profile-section">
        <div className="section-title">关于</div>
        <div className="section-card">
          <div className="about-item">
            <span className="about-label">经库</span>
            <span className="about-value">v1.0</span>
          </div>
          <div className="about-item">
            <span className="about-label">开发者</span>
            <span className="about-value">Yunning Tang</span>
          </div>
          <a className="about-item about-link" href="mailto:tangyunning27@gmail.com">
            <span className="about-label">联系作者</span>
            <span className="about-value">tangyunning27@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
