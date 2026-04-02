import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, type ThemeColor, type FontChoice } from '../store/useStore'
import { useAuth } from '../store/useAuth'
import { manifest } from '../data/manifest'
import { IconUser, IconSun, IconMoon } from '../components/Icons'
import './ProfilePage.css'

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
  const toggleProgress = useStore((s) => s.toggleProgress)
  const setThemeColor = useStore((s) => s.setThemeColor)
  const setCustomColor = useStore((s) => s.setCustomColor)
  const toggleDarkMode = useStore((s) => s.toggleDarkMode)

  const navigate = useNavigate()
  const user = useAuth((s) => s.user)
  const signOut = useAuth((s) => s.signOut)
  const syncToCloud = useAuth((s) => s.syncToCloud)
  const colorInputRef = useRef<HTMLInputElement>(null)

  const fontSizes = [18, 20, 22, 24, 26]
  const hasRecords = Object.values(readingCounts).some((c) => c > 0)

  return (
    <div className="profile-page">
      <h1 className="profile-title">我的</h1>

      {user ? (
        <div className="profile-card">
          <div className="profile-avatar">
            <IconUser size={22} color="var(--theme)" />
          </div>
          <div className="profile-card-body">
            <div className="profile-card-text">{user.email}</div>
            <div className="profile-card-sub">
              <button className="profile-sync-btn" onClick={syncToCloud}>同步数据</button>
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
                onClick={() => colorInputRef.current?.click()}
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
                onChange={(e) => setCustomColor(e.target.value)}
              />
            </div>
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
    </div>
  )
}
