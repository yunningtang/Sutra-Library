import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { IconBack, IconCheck } from '../components/Icons'
import type { SutraData, GlossaryItem } from '../data/types'
import './ReadingPage.css'

export default function ReadingPage() {
  const { sutraId } = useParams<{ sutraId: string }>()
  const navigate = useNavigate()
  const { fontSize, showPinyin, showProgress, setFontSize, togglePinyin, completeReading, readingCounts } = useStore()

  const [sutra, setSutra] = useState<SutraData | null>(null)
  const [showToolbar, setShowToolbar] = useState(true)
  const [showFontPanel, setShowFontPanel] = useState(false)
  const [showToc, setShowToc] = useState(false)
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
    } else if (sutraId === 'diamond') {
      import('../data/diamond').then((mod) => setSutra(mod.diamond))
    } else if (sutraId === 'yaoshi') {
      import('../data/yaoshi').then((mod) => setSutra(mod.yaoshi))
    } else if (sutraId === 'heart') {
      import('../data/heart').then((mod) => setSutra(mod.heart))
    } else if (sutraId === 'dizang') {
      import('../data/dizang').then((mod) => setSutra(mod.dizang))
    } else if (sutraId === 'liaozhi') {
      import('../data/liaozhi').then((mod) => setSutra(mod.liaozhi))
    }
  }, [sutraId])

  // Immersive scroll: hide toolbar on scroll down, show on scroll up
  useEffect(() => {
    let lastY = 0
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (y > lastY && y > 60) {
          setShowToolbar(false)
          setShowFontPanel(false)
          setShowToc(false)
        }
        if (y < lastY) setShowToolbar(true)
        lastY = y

        const docH = document.documentElement.scrollHeight
        const winH = window.innerHeight
        const maxScroll = docH - winH
        if (maxScroll > 0) setScrollProgress(Math.min(y / maxScroll, 1))
        if (y + winH >= docH - 50) {
          setAtBottom(true)
        }
        ticking = false
      })
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
  const fontSizeOptions = [
    { size: 18, label: '小' },
    { size: 20, label: '标准' },
    { size: 22, label: '中' },
    { size: 24, label: '大' },
    { size: 26, label: '特大' },
  ]

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

  const hasToc = sutra.sections.length > 1

  const handlePageTap = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('.reading-toolbar') || target.closest('.reading-toc') || target.closest('.font-panel') || target.closest('.reading-footer') || target.closest('.glossary-popup')) return
    setGlossaryPopup(null)
    setShowFontPanel(false)
    setShowToc(false)
    setShowToolbar((v) => !v)
  }

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`section-${sectionId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowToc(false)
    }
  }

  return (
    <div className="reading-page" onClick={handlePageTap}>
      {/* Progress bar — thin line always at very top, z above toolbar */}
      {showProgress && (
        <div className="reading-progress-bar">
          <div className="reading-progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      )}

      {/* Immersive toolbar — auto-hide, frosted glass */}
      <div className={`reading-toolbar ${showToolbar ? 'visible' : 'hidden'}`}>
        <button className="toolbar-btn press-scale" onClick={handleClose} aria-label="返回">
          <IconBack size={18} />
        </button>
        <div className="toolbar-title">{sutra.name}</div>
        <div className="toolbar-right">
          {hasToc && (
            <button
              className={`toolbar-icon-btn ${showToc ? 'toolbar-btn-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setShowToc(!showToc); setShowFontPanel(false) }}
              aria-label="目录"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
                <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
                <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" />
              </svg>
            </button>
          )}
          <button
            className={`toolbar-icon-btn ${showPinyin ? 'toolbar-btn-active' : ''}`}
            onClick={(e) => { e.stopPropagation(); togglePinyin() }}
            aria-label="拼音"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 18V6h4.5a3.5 3.5 0 0 1 0 7H4" />
              <path d="M16 6v1.5c0 2.5-4 2.5-4 5 0 1.5 1 2.5 2.5 2.5s2.5-1 3-2.5" />
              <line x1="14" y1="18" x2="19" y2="18" />
            </svg>
          </button>
          <button
            className={`toolbar-icon-btn ${showFontPanel ? 'toolbar-btn-active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setShowFontPanel(!showFontPanel); setShowToc(false) }}
            aria-label="字体大小"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7V5h14v2" />
              <line x1="10" y1="5" x2="10" y2="19" />
              <line x1="7" y1="19" x2="13" y2="19" />
              <path d="M17 13v-2h7v2" />
              <line x1="20.5" y1="11" x2="20.5" y2="19" />
              <line x1="18.5" y1="19" x2="22.5" y2="19" />
            </svg>
          </button>
        </div>
      </div>

      {/* TOC panel — slides below toolbar */}
      {showToc && hasToc && (
        <div className="reading-toc" onClick={(e) => e.stopPropagation()}>
          {sutra.sections.map((section) => (
            <button
              key={section.id}
              className="toc-item"
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}

      {/* Font size panel */}
      {showFontPanel && (
        <div className="font-panel" onClick={(e) => e.stopPropagation()}>
          {fontSizeOptions.map((opt) => (
            <button
              key={opt.size}
              className={`font-panel-item ${fontSize === opt.size ? 'active' : ''}`}
              onClick={() => { setFontSize(opt.size); setShowFontPanel(false) }}
            >
              {opt.label}
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
          <div key={section.id} id={`section-${section.id}`} className="reading-section">
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
