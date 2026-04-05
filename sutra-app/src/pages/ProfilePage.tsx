import { useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type ThemeColor, type FontChoice } from '../store/useStore'
import { useAuth } from '../store/useAuth'
import { manifest } from '../data/manifest'
import { IconUser, IconSun, IconMoon } from '../components/Icons'
import './ProfilePage.css'

const CROP_SIZE = 240
const OUT_SIZE = 128

function formatSyncTime(iso: string): string {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  const min = Math.floor(diff / 60000)
  if (min < 1) return '刚刚同步'
  if (min < 60) return `${min}分钟前同步`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}小时前同步`
  return `${Math.floor(hr / 24)}天前同��`
}

// === Avatar Crop Modal ===
function CropModal({ src, onConfirm, onCancel }: {
  src: string
  onConfirm: (dataUrl: string) => void
  onCancel: () => void
}) {
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number } | null>(null)

  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight })
  }

  const baseScale = naturalSize
    ? Math.max(CROP_SIZE / naturalSize.w, CROP_SIZE / naturalSize.h)
    : 1
  const totalScale = baseScale * zoom
  const displayW = (naturalSize?.w ?? CROP_SIZE) * totalScale
  const displayH = (naturalSize?.h ?? CROP_SIZE) * totalScale

  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: offset.x, oy: offset.y }
  }
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return
    setOffset({
      x: dragRef.current.ox + e.clientX - dragRef.current.sx,
      y: dragRef.current.oy + e.clientY - dragRef.current.sy,
    })
  }
  const handlePointerUp = () => { dragRef.current = null }

  const handleConfirm = () => {
    if (!naturalSize) return
    const imgLeft = (CROP_SIZE - displayW) / 2 + offset.x
    const imgTop = (CROP_SIZE - displayH) / 2 + offset.y
    const srcX = Math.max(0, -imgLeft / totalScale)
    const srcY = Math.max(0, -imgTop / totalScale)
    const srcW = Math.min(CROP_SIZE / totalScale, naturalSize.w - srcX)
    const srcH = Math.min(CROP_SIZE / totalScale, naturalSize.h - srcY)

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = OUT_SIZE
      canvas.height = OUT_SIZE
      const ctx = canvas.getContext('2d')!
      ctx.beginPath()
      ctx.arc(OUT_SIZE / 2, OUT_SIZE / 2, OUT_SIZE / 2, 0, Math.PI * 2)
      ctx.clip()
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, OUT_SIZE, OUT_SIZE)
      onConfirm(canvas.toDataURL('image/jpeg', 0.85))
    }
    img.src = src
  }

  return (
    <div className="crop-modal">
      <div className="crop-hint">拖动调整位置</div>
      <div
        className="crop-area"
        style={{ width: CROP_SIZE, height: CROP_SIZE }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <img
          src={src}
          alt=""
          onLoad={onImgLoad}
          draggable={false}
          style={{
            width: displayW,
            height: displayH,
            left: (CROP_SIZE - displayW) / 2 + offset.x,
            top: (CROP_SIZE - displayH) / 2 + offset.y,
          }}
        />
      </div>
      <input
        className="crop-slider"
        type="range"
        min={1}
        max={3}
        step={0.05}
        value={zoom}
        onChange={(e) => setZoom(Number(e.target.value))}
      />
      <div className="crop-buttons">
        <button className="crop-btn crop-btn-cancel" onClick={onCancel}>取消</button>
        <button className="crop-btn crop-btn-confirm" onClick={handleConfirm}>确认</button>
      </div>
    </div>
  )
}

// === About Modal ===
function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="install-modal" onClick={onClose}>
      <div className="install-content" onClick={(e) => e.stopPropagation()}>
        <div className="install-title">关于经库</div>
        <div className="about-body">
          <div className="about-row">
            <span className="about-row-label">版本</span>
            <span className="about-row-value">1.0</span>
          </div>
          <div className="about-row">
            <span className="about-row-label">开发者</span>
            <span className="about-row-value">Yunning Tang</span>
          </div>
          <div className="about-row about-row-last">
            <span className="about-row-label">联系</span>
            <a className="about-row-link" href="mailto:tangyunning27@gmail.com">tangyunning27@gmail.com</a>
          </div>
        </div>
        <button className="install-close-btn" onClick={onClose}>知道了</button>
      </div>
    </div>
  )
}

// === PWA Install Guide Modal ===
function InstallGuide({ onClose }: { onClose: () => void }) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)

  return (
    <div className="install-modal" onClick={onClose}>
      <div className="install-content" onClick={(e) => e.stopPropagation()}>
        <div className="install-title">添加到主屏幕</div>
        {isIOS ? (
          <div className="install-steps">
            <div className="install-step">
              <span className="step-num">1</span>
              <span>使用 <b>Safari</b> 打开本页面</span>
            </div>
            <div className="install-step">
              <span className="step-num">2</span>
              <span>点击底部 <b>分享按钮</b> ⎙</span>
            </div>
            <div className="install-step">
              <span className="step-num">3</span>
              <span>选择 <b>"添加到主屏幕"</b></span>
            </div>
          </div>
        ) : isAndroid ? (
          <div className="install-steps">
            <div className="install-step">
              <span className="step-num">1</span>
              <span>使用 <b>Chrome</b> 打开本页面</span>
            </div>
            <div className="install-step">
              <span className="step-num">2</span>
              <span>点击右上角 <b>⋮ 菜单</b></span>
            </div>
            <div className="install-step">
              <span className="step-num">3</span>
              <span>选择 <b>"添加到主屏幕"</b></span>
            </div>
          </div>
        ) : (
          <div className="install-steps">
            <div className="install-step">
              <span className="step-num">1</span>
              <span>使用 Chrome 或 Edge 打开</span>
            </div>
            <div className="install-step">
              <span className="step-num">2</span>
              <span>点击地址栏右侧 <b>安装图标</b></span>
            </div>
          </div>
        )}
        <button className="install-close-btn" onClick={onClose}>知道了</button>
      </div>
    </div>
  )
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
  const lastSyncAt = useStore((s) => s.lastSyncAt)

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
  const [cropSrc, setCropSrc] = useState<string | null>(null)
  const [showInstall, setShowInstall] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setCropSrc(reader.result as string)
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const handleCropConfirm = useCallback(async (dataUrl: string) => {
    await updateAvatar(dataUrl)
    setCropSrc(null)
  }, [updateAvatar])

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
            onChange={handleAvatarFileChange}
          />
          <div className="profile-card-body">
            {editingName ? (
              <div className="name-edit-row">
                <input
                  className="name-edit-input"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleNameSave() }}
                  onBlur={() => setTimeout(handleNameSave, 150)}
                  placeholder="昵称"
                  autoFocus
                  maxLength={20}
                />
                <button className="name-edit-save" onClick={handleNameSave}>保存</button>
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
            <div className="profile-card-meta">
              {userDisplayName && <span>{user.email}</span>}
              {lastSyncAt && (
                <>
                  {userDisplayName && <span className="meta-dot">·</span>}
                  <span>{formatSyncTime(lastSyncAt)}</span>
                </>
              )}
            </div>
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

      {/* 1. 阅读设置 — 最常调整 */}
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
        </div>
      </div>

      {/* 2. 外观 — 偶尔调整 */}
      <div className="profile-section">
        <div className="section-title">外观</div>
        <div className="section-card">
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

      {/* 3. 诵读记录 — 信息展示 */}
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

      {/* 4. 更多 — 低频操作 */}
      <div className="profile-section">
        <div className="section-title">更多</div>
        <div className="section-card">
          <button className="setting-item setting-link" onClick={() => setShowInstall(true)}>
            <span className="setting-label">添加到主屏幕</span>
            <span className="setting-arrow">›</span>
          </button>
          <button className="setting-item setting-link" onClick={() => setShowAbout(true)}>
            <span className="setting-label">关于经库</span>
            <span className="setting-arrow">›</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {cropSrc && (
        <CropModal
          src={cropSrc}
          onConfirm={handleCropConfirm}
          onCancel={() => setCropSrc(null)}
        />
      )}
      {showInstall && <InstallGuide onClose={() => setShowInstall(false)} />}
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
    </div>
  )
}
