import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { IconBack, IconCheck } from '../components/Icons'
import type { SutraData, GlossaryItem, SutraChar } from '../data/types'
import './ReadingPage.css'

/* Quote-binding: group chars so quotes never separate from adjacent text */
const OPEN_Q = /[\u201c\u2018]/
const CLOSE_Q = /[\u201d\u2019]/
const TRAIL_PUNCT = /[。！？]/

interface CharGroup { chars: SutraChar[]; nowrap: boolean; key: number }

function groupChars(chars: SutraChar[]): CharGroup[] {
  const groups: CharGroup[] = []
  let i = 0
  while (i < chars.length) {
    // Opening quote + next char → nowrap
    if (OPEN_Q.test(chars[i].char) && i + 1 < chars.length) {
      groups.push({ chars: [chars[i], chars[i + 1]], nowrap: true, key: i })
      i += 2
      continue
    }
    // Content char followed by [end-punct...] + closing quote → nowrap
    if (!CLOSE_Q.test(chars[i].char)) {
      let j = i + 1
      while (j < chars.length && TRAIL_PUNCT.test(chars[j].char)) j++
      if (j < chars.length && CLOSE_Q.test(chars[j].char)) {
        groups.push({ chars: chars.slice(i, j + 1), nowrap: true, key: i })
        i = j + 1
        continue
      }
    }
    groups.push({ chars: [chars[i]], nowrap: false, key: i })
    i++
  }
  return groups
}

export default function ReadingPage() {
  const { sutraId } = useParams<{ sutraId: string }>()
  const navigate = useNavigate()
  const { fontSize, showPinyin, showProgress, darkMode, setFontSize, togglePinyin, toggleDarkMode, completeReading, readingCounts, hasSeenLongPressHint, hasSeenToolbarHint, dismissLongPressHint, dismissToolbarHint, readingPositions, saveReadingPosition } = useStore()

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
  const [toastText, setToastText] = useState<string | null>(null)

  const startTimeRef = useRef(Date.now())
  const contentRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<number | null>(null)
  const savePositionTimer = useRef<number | null>(null)

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

  // Restore scroll position
  useEffect(() => {
    if (sutra && sutraId && readingPositions[sutraId]) {
      requestAnimationFrame(() => {
        window.scrollTo(0, readingPositions[sutraId])
      })
    }
  }, [sutra, sutraId, readingPositions])

  // Long-press hint toast (one-time)
  useEffect(() => {
    if (sutra && !hasSeenLongPressHint) {
      const timer = setTimeout(() => {
        setToastText('长按文字可查看释义')
        dismissLongPressHint()
        setTimeout(() => setToastText(null), 2500)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [sutra, hasSeenLongPressHint, dismissLongPressHint])

  // Toolbar hint flag
  const toolbarHintShown = useRef(false)

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
          if (!toolbarHintShown.current && !hasSeenToolbarHint) {
            toolbarHintShown.current = true
            dismissToolbarHint()
            setToastText('点击屏幕可显示工具栏')
            setTimeout(() => setToastText(null), 2500)
          }
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
        // Throttled position save (every 2s)
        if (sutraId && !savePositionTimer.current) {
          savePositionTimer.current = window.setTimeout(() => {
            saveReadingPosition(sutraId, window.scrollY)
            savePositionTimer.current = null
          }, 2000)
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

  const encouragements = ['功德圆满', '善哉善哉', '精进修行', '回向众生']

  const handleComplete = () => {
    const duration = Math.floor((Date.now() - startTimeRef.current) / 1000)
    completeReading(sutraId!, duration)
    setCompleted(true)
    if (navigator.vibrate) navigator.vibrate([50, 50, 100])
  }

  const handleReplay = () => {
    startTimeRef.current = Date.now()
    setCompleted(false)
    setAtBottom(false)
    setScrollProgress(0)
    window.scrollTo(0, 0)
  }

  const handleClose = () => {
    navigate(-1)
  }

  const currentCount = readingCounts[sutraId!] || 0
  const fontSizeOptions = [
    { size: 16, label: '小' },
    { size: 20, label: '标准' },
    { size: 24, label: '大' },
    { size: 28, label: '特大' },
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
    const encouragement = encouragements[currentCount % encouragements.length]
    return (
      <div className="reading-page completion-page">
        <div className="completion-icon">
          <IconCheck size={48} color="var(--theme)" />
        </div>
        <div className="completion-text">{encouragement}</div>
        <div className="completion-count">第 {currentCount} 部</div>
        <div className="completion-actions">
          <button className="completion-btn-primary" onClick={handleReplay}>
            再诵一遍
          </button>
          <button className="completion-btn" onClick={handleClose}>
            返回
          </button>
        </div>
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
        <div className="toolbar-title" />
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
          <button
            className={`toolbar-icon-btn ${darkMode ? 'toolbar-btn-active' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleDarkMode() }}
            aria-label="夜间模式"
          >
            {darkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
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
                  {groupChars(para.chars).map((group) => {
                    const renderChar = (c: SutraChar, key: number) => {
                      if (showPinyin && c.pinyin) {
                        return (
                          <ruby
                            key={key}
                            className="char-ruby"
                            onPointerDown={(e) => handleCharDown(c.char, c.pinyin, e)}
                            onPointerUp={handleCharUp}
                            onPointerCancel={handleCharUp}
                          >
                            {c.char}<rt>{c.pinyin}</rt>
                          </ruby>
                        )
                      }
                      return (
                        <span
                          key={key}
                          className="char-plain"
                          onPointerDown={(e) => handleCharDown(c.char, c.pinyin, e)}
                          onPointerUp={handleCharUp}
                          onPointerCancel={handleCharUp}
                        >
                          {c.char}
                        </span>
                      )
                    }
                    if (group.nowrap) {
                      return (
                        <span key={group.key} className="char-q">
                          {group.chars.map((c, ci) => renderChar(c, ci))}
                        </span>
                      )
                    }
                    return renderChar(group.chars[0], group.key)
                  })}
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

      {/* Toast hint */}
      {toastText && (
        <div className="reading-toast">{toastText}</div>
      )}

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
