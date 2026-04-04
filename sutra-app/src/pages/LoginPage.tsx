import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconClose } from '../components/Icons'
import { useAuth } from '../store/useAuth'
import './LoginPage.css'

type Mode = 'login' | 'register' | 'forgot' | 'email-sent'

const emailProviders = [
  { name: 'Gmail', match: 'gmail.com', url: 'https://mail.google.com' },
  { name: 'Outlook', match: 'outlook.com', url: 'https://outlook.live.com' },
  { name: 'Outlook', match: 'hotmail.com', url: 'https://outlook.live.com' },
  { name: 'QQ邮箱', match: 'qq.com', url: 'https://mail.qq.com' },
  { name: '163邮箱', match: '163.com', url: 'https://mail.163.com' },
  { name: 'Yahoo', match: 'yahoo.com', url: 'https://mail.yahoo.com' },
  { name: 'iCloud', match: 'icloud.com', url: 'https://www.icloud.com/mail' },
]

function getEmailProviderUrl(email: string): string | null {
  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return null
  const provider = emailProviders.find((p) => domain.includes(p.match))
  return provider?.url ?? null
}

export default function LoginPage() {
  const navigate = useNavigate()
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, resetPassword, loading } = useAuth()
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [error, setError] = useState('')
  const [sentType, setSentType] = useState<'register' | 'reset'>('register')

  const handleSubmit = async () => {
    setError('')
    if (!email || !password) {
      setError('请填写邮箱和密码')
      return
    }
    if (mode === 'register' && password !== confirmPw) {
      setError('两次密码不一致')
      return
    }
    if (mode === 'register' && password.length < 6) {
      setError('密码至少需要6位')
      return
    }

    if (mode === 'login') {
      const err = await signInWithEmail(email, password)
      if (err) {
        setError(err)
      } else {
        navigate(-1)
      }
    } else {
      const err = await signUpWithEmail(email, password)
      if (err) {
        setError(err)
      } else {
        setSentType('register')
        setMode('email-sent')
      }
    }
  }

  const handleForgotSubmit = async () => {
    setError('')
    if (!email) {
      setError('请输入注册邮箱')
      return
    }
    const err = await resetPassword(email)
    if (err) {
      setError(err)
    } else {
      setSentType('reset')
      setMode('email-sent')
    }
  }

  const handleGoogleLogin = async () => {
    setError('')
    const err = await signInWithGoogle()
    if (err) setError(err)
  }

  const providerUrl = getEmailProviderUrl(email)

  // Email sent confirmation screen
  if (mode === 'email-sent') {
    return (
      <div className="login-page">
        <button className="login-close press-scale" onClick={() => navigate(-1)}>
          <IconClose size={18} />
        </button>
        <div className="sent-content">
          <div className="sent-icon">✉</div>
          <h2 className="sent-title">
            {sentType === 'register' ? '验证邮件已发送' : '重置链接已发送'}
          </h2>
          <p className="sent-desc">
            {sentType === 'register'
              ? '请查收邮箱中的验证链接以完成注册'
              : '请查收邮箱中的重置链接以设置新密码'}
          </p>
          <p className="sent-email">{email}</p>
          {providerUrl && (
            <a className="sent-open-btn" href={providerUrl} target="_blank" rel="noopener noreferrer">
              去邮箱查收
            </a>
          )}
          <button
            className="sent-back-btn"
            onClick={() => { setMode('login'); setError(''); setPassword(''); setConfirmPw('') }}
          >
            返回登录
          </button>
        </div>
      </div>
    )
  }

  // Forgot password screen
  if (mode === 'forgot') {
    return (
      <div className="login-page">
        <button className="login-close press-scale" onClick={() => navigate(-1)}>
          <IconClose size={18} />
        </button>
        <div className="login-hero">
          <h1 className="login-title">重置密码</h1>
          <p className="login-desc">输入注册邮箱，我们将发送重置链接</p>
        </div>
        <div className="login-form">
          <div className="form-fields">
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="注册邮箱"
              autoComplete="email"
              autoFocus
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button className="submit-btn" onClick={handleForgotSubmit} disabled={loading}>
            {loading ? '...' : '发送重置链接'}
          </button>
          <div className="mode-switch">
            <span>
              想起来了？
              <button className="mode-link" onClick={() => { setMode('login'); setError('') }}>返回登录</button>
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Login / Register screen
  return (
    <div className="login-page">
      <button className="login-close press-scale" onClick={() => navigate(-1)}>
        <IconClose size={18} />
      </button>

      <div className="login-hero">
        <h1 className="login-title">经库</h1>
        <p className="login-desc">随时随地，不丢失每一次修行记录</p>
      </div>

      <div className="login-form">
        {/* Google */}
        <button className="google-btn" onClick={handleGoogleLogin} disabled={loading}>
          <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>使用 Google 账号登录</span>
        </button>

        <div className="login-divider">
          <span className="divider-line" />
          <span className="divider-text">或</span>
          <span className="divider-line" />
        </div>

        {/* Email form */}
        <div className="form-fields">
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱地址"
            autoComplete="email"
          />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />
          {mode === 'register' && (
            <input
              className="form-input"
              type="password"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              placeholder="确认密码"
              autoComplete="new-password"
            />
          )}
        </div>

        {mode === 'login' && (
          <div className="forgot-row">
            <button className="forgot-link" onClick={() => { setMode('forgot'); setError('') }}>
              忘记密码？
            </button>
          </div>
        )}

        {error && <div className="login-error">{error}</div>}

        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? '...' : (mode === 'login' ? '登录' : '注册')}
        </button>

        <div className="mode-switch">
          {mode === 'login' ? (
            <span>
              没有账号？
              <button className="mode-link" onClick={() => { setMode('register'); setError('') }}>注册</button>
            </span>
          ) : (
            <span>
              已有账号？
              <button className="mode-link" onClick={() => { setMode('login'); setError('') }}>登录</button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
