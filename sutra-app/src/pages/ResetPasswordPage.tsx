import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/useAuth'
import { IconCheck } from '../components/Icons'
import './LoginPage.css'

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const { updatePassword, loading } = useAuth()
  const [password, setPassword] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async () => {
    setError('')
    if (!password) {
      setError('请输入新密码')
      return
    }
    if (password.length < 6) {
      setError('密码至少需要6位')
      return
    }
    if (password !== confirmPw) {
      setError('两次密码不一致')
      return
    }
    const err = await updatePassword(password)
    if (err) {
      setError(err)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="login-page">
        <div className="sent-content">
          <div className="sent-icon-wrap">
            <IconCheck size={32} color="var(--theme)" />
          </div>
          <h2 className="sent-title">密码已重置</h2>
          <p className="sent-desc">新密码设置成功，请使用新密码登录</p>
          <button className="submit-btn" style={{ marginTop: 24 }} onClick={() => navigate('/login')}>
            去登录
          </button>
        </div>
      </div>
    )
  }

  const strength = password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
    ? 'strong' : password.length >= 6 ? 'medium' : password.length > 0 ? 'weak' : null

  return (
    <div className="login-page">
      <div className="login-hero">
        <h1 className="login-title">设置新密码</h1>
        <p className="login-desc">请输入你的新密码</p>
      </div>
      <div className="login-form">
        <div className="form-fields">
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="新密码（至少6位）"
            autoComplete="new-password"
            autoFocus
          />
          {strength && (
            <div className={`password-strength ${strength}`}>
              <div className="strength-bar"><div className="strength-fill" /></div>
              <span className="strength-label">
                {strength === 'weak' ? '弱' : strength === 'medium' ? '中' : '强'}
              </span>
            </div>
          )}
          <input
            className="form-input"
            type="password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            placeholder="确认新密码"
            autoComplete="new-password"
          />
        </div>
        {error && <div className="login-error">{error}</div>}
        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? '...' : '确认重置'}
        </button>
      </div>
    </div>
  )
}
