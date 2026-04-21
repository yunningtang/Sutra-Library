import { useState, useEffect } from 'react'
import { useStore } from '../store/useStore'
import { IconClose } from '../components/Icons'
import './CounterPage.css'

type Tab = 'counter' | 'history'
type Mode = 'tap' | 'timer'

function fmt(sec: number): string {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function CounterPage() {
  const { counter, counterRecords, incrementCounter, resetCounter, setCounterTarget, saveCounterRecord, deleteCounterRecord, updateCounterRecordNote, showCounterRing } = useStore()
  const [tab, setTab] = useState<Tab>('counter')
  const [mode, setMode] = useState<Mode>('tap')
  const [showReset, setShowReset] = useState(false)
  const [showTarget, setShowTarget] = useState(false)
  const [showSave, setShowSave] = useState(false)
  const [targetInput, setTargetInput] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [pressing, setPressing] = useState(false)
  const [hitTarget, setHitTarget] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editNote, setEditNote] = useState('')
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)

  // Timer tick
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setElapsed((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const handleTimerTap = () => {
    setRunning((r) => !r)
    setPressing(true)
    if (navigator.vibrate) navigator.vibrate(10)
  }

  const handleTimerReset = () => {
    if (showReset) {
      setElapsed(0)
      setRunning(false)
      setShowReset(false)
    } else {
      setShowReset(true)
    }
  }

  const progress = Math.min(counter.count / counter.target, 1)

  const handleTap = () => {
    incrementCounter()
    setPressing(true)

    if (counter.count + 1 >= counter.target) {
      setHitTarget(true)
      if (navigator.vibrate) navigator.vibrate(100)
    } else {
      if (navigator.vibrate) navigator.vibrate(10)
    }
  }

  useEffect(() => {
    if (pressing) {
      const timer = setTimeout(() => setPressing(false), 200)
      return () => clearTimeout(timer)
    }
  }, [pressing])

  useEffect(() => {
    if (hitTarget) {
      const timer = setTimeout(() => setHitTarget(false), 800)
      return () => clearTimeout(timer)
    }
  }, [hitTarget])

  const handleReset = () => {
    if (showReset) {
      resetCounter()
      setShowReset(false)
    } else {
      setShowReset(true)
    }
  }

  const handleSetTarget = () => {
    const val = parseInt(targetInput)
    if (val > 0) {
      setCounterTarget(val)
      setShowTarget(false)
      setTargetInput('')
    }
  }

  const handleSaveRecord = () => {
    saveCounterRecord(noteInput)
    setNoteInput('')
    setShowSave(false)
  }

  const handleDelete = (realIndex: number) => {
    if (deleteConfirm === realIndex) {
      deleteCounterRecord(realIndex)
      setDeleteConfirm(null)
    } else {
      setDeleteConfirm(realIndex)
    }
  }

  const handleEditNote = (realIndex: number) => {
    if (editingIndex === realIndex) {
      updateCounterRecordNote(realIndex, editNote)
      setEditingIndex(null)
      setEditNote('')
    } else {
      setEditingIndex(realIndex)
      setEditNote(counterRecords[realIndex].note)
    }
  }

  const presetNotes = ['南无阿弥陀佛', '南无观世音菩萨', '嗡嘛呢叭咪吽', '大悲咒', '往生咒', '准提咒']
  const totalCount = counterRecords.reduce((sum, r) => sum + r.count, 0)

  return (
    <div className="counter-page">
      {/* Tabs */}
      <div className="counter-tabs" data-active={tab}>
        <span className="counter-tabs-pill" />
        <button className={`counter-tab ${tab === 'counter' ? 'active' : ''}`} onClick={() => setTab('counter')}>
          计数
        </button>
        <button className={`counter-tab ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')}>
          历史 ({counterRecords.length})
        </button>
      </div>

      {tab === 'counter' ? (
        <>
          {/* Mode switch */}
          <div className="mode-switch" data-active={mode}>
            <span className="mode-switch-pill" />
            <button
              className={`mode-switch-btn ${mode === 'tap' ? 'active' : ''}`}
              onClick={() => { setMode('tap'); setShowReset(false) }}
            >
              点按
            </button>
            <button
              className={`mode-switch-btn ${mode === 'timer' ? 'active' : ''}`}
              onClick={() => { setMode('timer'); setShowReset(false) }}
            >
              计时
            </button>
          </div>

          {mode === 'tap' ? (
            <>
              {/* Count Display */}
              <div className="counter-display">
                <span className={`counter-number ${pressing ? 'bounce' : ''} ${hitTarget ? 'hit' : ''}`}>
                  {counter.count}
                </span>
                <span className="counter-target">/ {counter.target}</span>
              </div>

              {/* Progress ring */}
              <div className="counter-ring-wrap">
                {showCounterRing && (
                  <svg className="counter-ring" viewBox="0 0 200 200">
                    <circle className="ring-bg" cx="100" cy="100" r="90" fill="none" stroke="var(--warm-alt)" strokeWidth="3" />
                    <circle className="ring-progress" cx="100" cy="100" r="90" fill="none" stroke="url(#ringGrad)" strokeWidth="4" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 90}`} strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress)}`} transform="rotate(-90 100 100)" />
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--theme-l)" />
                        <stop offset="100%" stopColor="var(--theme)" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
                <button className={`counter-circle ${pressing ? 'pressed' : ''}`} onPointerDown={handleTap}>
                  <span className="circle-label" />
                </button>
              </div>

              {/* Actions */}
              <div className="counter-actions">
                <button className={`counter-action-btn ${showReset ? 'danger' : ''}`} onClick={handleReset}>
                  {showReset ? '确定重置？' : '重置'}
                </button>
                {showReset ? (
                  <button className="counter-action-btn" onClick={() => setShowReset(false)}>取消</button>
                ) : (
                  <>
                    <button className="counter-action-btn" onClick={() => setShowTarget(true)}>目标</button>
                    {counter.count > 0 && (
                      <button className="counter-action-btn save-btn" onClick={() => setShowSave(true)}>保存</button>
                    )}
                  </>
                )}
              </div>
            </>
          ) : (
            /* Timer mode */
            <>
              <div className="counter-display">
                <span className={`timer-display ${pressing ? 'bounce' : ''}`}>{fmt(elapsed)}</span>
                <span className="timer-status">{running ? '进行中' : elapsed === 0 ? '未开始' : '已暂停'}</span>
              </div>

              <div className="counter-ring-wrap">
                <button
                  className={`counter-circle ${pressing ? 'pressed' : ''} ${running ? 'running' : ''}`}
                  onPointerDown={handleTimerTap}
                >
                  <span className="circle-label timer-label">{running ? '暂停' : elapsed === 0 ? '开始' : '继续'}</span>
                </button>
              </div>

              <div className="counter-actions">
                <button className={`counter-action-btn ${showReset ? 'danger' : ''}`} onClick={handleTimerReset}>
                  {showReset ? '确定重置？' : '重置'}
                </button>
                {showReset && (
                  <button className="counter-action-btn" onClick={() => setShowReset(false)}>取消</button>
                )}
              </div>
            </>
          )}
        </>
      ) : (
        /* History Tab */
        <div className="history-tab-content">
          {counterRecords.length === 0 ? (
            <div className="history-empty">暂无记录</div>
          ) : (
            <>
              <div className="history-total">
                <span className="history-total-number">{totalCount.toLocaleString()}</span>
                <span className="history-total-label">累计</span>
              </div>
              <div className="history-list">
                {[...counterRecords].reverse().map((rec, revIdx) => {
                  const realIndex = counterRecords.length - 1 - revIdx
                  const isDeleting = deleteConfirm === realIndex
                  const isEditing = editingIndex === realIndex
                  return (
                    <div key={realIndex} className={`history-row ${isDeleting ? 'deleting' : ''}`}>
                      <div className="history-left">
                        <div className="history-count-badge">{rec.count}</div>
                        <div className="history-detail">
                          {isEditing ? (
                            <input
                              className="history-note-input"
                              type="text"
                              value={editNote}
                              onChange={(e) => setEditNote(e.target.value)}
                              placeholder="添加备注"
                              autoFocus
                              onKeyDown={(e) => e.key === 'Enter' && handleEditNote(realIndex)}
                            />
                          ) : (
                            <>
                              {rec.note && <span className="history-note">{rec.note}</span>}
                              <span className="history-date">
                                {new Date(rec.completedAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' })}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="history-actions">
                        <button
                          className="history-edit-btn"
                          onClick={() => handleEditNote(realIndex)}
                        >
                          {isEditing ? '保存' : '备注'}
                        </button>
                        <button
                          className={`history-delete-btn ${isDeleting ? 'confirm' : ''}`}
                          onClick={() => handleDelete(realIndex)}
                        >
                          {isDeleting ? '确认' : '删除'}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* Save modal */}
      {showSave && (
        <div className="target-overlay" onClick={() => setShowSave(false)}>
          <div className="target-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="target-header">
              <span className="target-title">保存计数</span>
              <button className="target-close" onClick={() => setShowSave(false)}><IconClose size={14} /></button>
            </div>
            <div className="save-summary">
              已计 <strong>{counter.count}</strong> / {counter.target}
            </div>
            <div className="preset-notes">
              {presetNotes.map((note) => (
                <button key={note} className={`preset-btn ${noteInput === note ? 'active' : ''}`} onClick={() => setNoteInput(note)}>
                  {note}
                </button>
              ))}
            </div>
            <input className="target-input" type="text" value={noteInput} onChange={(e) => setNoteInput(e.target.value)} placeholder="添加备注（可选）" />
            <button className="target-confirm" onClick={handleSaveRecord}>保存并重置</button>
          </div>
        </div>
      )}

      {/* Target modal */}
      {showTarget && (
        <div className="target-overlay" onClick={() => setShowTarget(false)}>
          <div className="target-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="target-header">
              <span className="target-title">设定目标</span>
              <button className="target-close" onClick={() => setShowTarget(false)}><IconClose size={14} /></button>
            </div>
            <input className="target-input" type="number" value={targetInput} onChange={(e) => setTargetInput(e.target.value)} placeholder={String(counter.target)} autoFocus />
            <button className="target-confirm" onClick={handleSetTarget}>确定</button>
          </div>
        </div>
      )}
    </div>
  )
}
