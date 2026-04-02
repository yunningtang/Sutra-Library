import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { IconClose, IconCheck } from '../components/Icons'
import type { SutraData, GlossaryItem } from '../data/types'
import './ReadingPage.css'

export default function ReadingPage() {
  const { sutraId } = useParams<{ sutraId: string }>()
  const navigate = useNavigate()
  const { fontSize, showPinyin, showProgress, setFontSize, togglePinyin, toggleProgress, completeReading, readingCounts } = useStore()

  const [sutra, setSutra] = useState<SutraData | null>(null)
  const [showToolbar, setShowToolbar] = useState(true)
  const [showFontPanel, setShowFontPanel] = useState(false)
  const [glossaryPopup, setGlossaryPopup] = useState<{
    item: GlossaryItem | null
    pinyin: string | null
    char: string
    x: number
    y: number
  } | null>(null)
  const [completed, setCompleted] = useState(false)
  const [atBottom, setAtBottom] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const startTimeRef = useRef(Date.now())
  const contentRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<number | null>(null)

  useEffect(() => {
    if (sutraId === 'pglm') {
      import('../data/pglm').then((mod) => setSutra(mod.pglm))
    }
  }, [sutraId])

  useEffect(() => {
    let lastY = 0
    const handleScroll = () => {
      const y = window.scrollY
      if (y > lastY && y > 60) setShowToolbar(false)
      if (y < lastY) setShowToolbar(true)
      lastY = y

      const docH = document.documentElement.scrollHeight
      const winH = window.innerHeight
      const maxScroll = docH - winH
      if (maxScroll > 0) setScrollProgress(Math.min(y / maxScroll, 1))
      if (y + winH >= docH - 50) {
        setAtBottom(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCharDown = useCallback(
    (char: string, pinyin: string | null, e: React.PointerEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      longPressTimer.current = window.setTimeout(() => {
        if (!sutra) return
        const match = sutra.glossary.find((g) => g.chars.includes(char))
        setGlossaryPopup({
          item: match || null,
          pinyin,
          char,
          x: rect.left + rect.width / 2,
          y: rect.top - 8,
        })
      }, 300)
    },
    [sutra]
  )

  const handleCharUp = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }, [])

  const handleComplete = () => {
    const duration = Math.floor((Date.now() - startTimeRef.current) / 1000)
    completeReading(sutraId!, duration)
    setCompleted(true)
  }

  const handleClose = () => {
    navigate(-1)
  }

  const currentCount = readingCounts[sutraId!] || 0
  const fontSizes = [18, 20, 22, 24, 26]

  if (!sutra) {
    return (
      <div className="reading-page loading-page">
        <div className="loading-dots">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
        </div>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="reading-page completion-page">
        <div className="completion-icon">
          <IconCheck size={48} color="var(--theme)" />
        </div>
        <div className="completion-text">诵读圆满</div>
        <div className="completion-count">第 {currentCount} 部</div>
        <button className="completion-btn" onClick={handleClose}>
          返回
        </button>
      </div>
    )
  }

  return (
    <div className="reading-page" onClick={() => { setGlossaryPopup(null); setShowFontPanel(false) }}>
      {/* Toolbar */}
      <div className={`reading-toolbar ${showToolbar ? 'visible' : 'hidden'}`}>
        <button className="toolbar-btn press-scale" onClick={handleClose}>
          <IconClose size={16} />
        </button>
        <div className="toolbar-title">{sutra.name}</div>
        <div className="toolbar-right">
          <button
            className={`toolbar-btn toolbar-text-btn ${showProgress ? 'toolbar-btn-active' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleProgress() }}
            title="显示进度"
          >
            %
          </button>
          <button
            className={`toolbar-btn toolbar-text-btn ${showPinyin ? 'toolbar-btn-active' : ''}`}
            onClick={(e) => { e.stopPropagation(); togglePinyin() }}
          >
            拼
          </button>
          <button
            className="toolbar-btn toolbar-text-btn"
            onClick={(e) => { e.stopPropagation(); setShowFontPanel(!showFontPanel) }}
          >
            Aa
          </button>
        </div>
      </div>

      {/* Progress bar — always visible at top */}
      {showProgress && (
        <div className="reading-progress-bar">
          <div className="reading-progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      )}

      {/* Font size panel */}
      {showFontPanel && (
        <div className="font-panel" onClick={(e) => e.stopPropagation()}>
          {fontSizes.map((size) => (
            <button
              key={size}
              className={`font-panel-item ${fontSize === size ? 'active' : ''}`}
              onClick={() => { setFontSize(size); setShowFontPanel(false) }}
            >
              {size}px
            </button>
          ))}
        </div>
      )}

      {/* Sutra content */}
      <div className="reading-content" ref={contentRef}>
        <div className="reading-meta">
          <div className="reading-meta-title">{sutra.name}</div>
          <div className="reading-meta-translator">{sutra.translator}</div>
        </div>

        {sutra.sections.map((section) => (
          <div key={section.id} className="reading-section">
            {section.paragraphs.map((para) => (
              <div key={para.id} className="reading-paragraph">
                {para.label && (
                  <div className="paragraph-label">{para.label}</div>
                )}
                <div
                  className={`char-grid ${showPinyin ? 'with-pinyin' : ''}`}
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {para.chars.map((c, i) => (
                    <span
                      key={i}
                      className="char-unit"
                      onPointerDown={(e) => handleCharDown(c.char, c.pinyin, e)}
                      onPointerUp={handleCharUp}
                      onPointerCancel={handleCharUp}
                    >
                      {showPinyin && c.pinyin && (
                        <span className="char-pinyin">{c.pinyin}</span>
                      )}
                      <span className="char-han">{c.char}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="reading-footer">
        {atBottom && (
          <button className="complete-btn" onClick={handleComplete}>
            <IconCheck size={16} />
            <span>完成诵读</span>
          </button>
        )}
      </div>

      {/* Glossary popup */}
      {glossaryPopup && (
        <div
          className="glossary-popup"
          style={{
            left: Math.min(Math.max(glossaryPopup.x, 100), window.innerWidth - 100),
            top: glossaryPopup.y,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glossary-word">
            {glossaryPopup.item ? glossaryPopup.item.chars : glossaryPopup.char}
            <span className="glossary-pinyin-inline">
              {glossaryPopup.item ? glossaryPopup.item.pinyin : glossaryPopup.pinyin}
            </span>
          </div>
          {glossaryPopup.item && (
            <>
              <div className="glossary-category">{glossaryPopup.item.category}</div>
              <div className="glossary-definition">{glossaryPopup.item.definition}</div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
