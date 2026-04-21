import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { manifest } from '../data/manifest'
import { useStore } from '../store/useStore'
import './LibraryPage.css'

function VisualCard({ sutra, count, index, number, onClick }: {
  sutra: typeof manifest[0]
  count: number
  index: number
  number: number
  onClick: () => void
}) {
  const isAvailable = sutra.status === 'available'
  const numStr = String(number).padStart(2, '0')
  return (
    <div
      className={`visual-card ${!isAvailable ? 'disabled' : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => isAvailable && onClick()}
    >
      <div className="visual-card-inner">
        <div className="visual-card-name">{sutra.name}</div>
      </div>
      <div className="visual-card-footer">
        <div className="visual-card-dots" />
        <div className="visual-card-number">
          <span>经</span>
          <span className="visual-card-number-dot">·</span>
          <span>{numStr}</span>
        </div>
        {count > 0 && (
          <span className="visual-card-count">诵 {count}</span>
        )}
      </div>
      {!isAvailable && <div className="visual-card-badge">即将</div>}
    </div>
  )
}

export default function LibraryPage() {
  const navigate = useNavigate()
  const readingCounts = useStore((s) => s.readingCounts)
  const favorites = useStore((s) => s.favorites)
  const [viewMode, setViewMode] = useState<'visual' | 'list'>('visual')

  const favSutras = manifest.filter((s) => favorites.includes(s.id))
  const otherSutras = manifest.filter((s) => !favorites.includes(s.id))

  return (
    <div className="library-page">
      <div className="library-header">
        <h1 className="library-title">经库</h1>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'visual' ? 'active' : ''}`}
            onClick={() => setViewMode('visual')}
            aria-label="可视化视图"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="10" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="3" y="16" width="7" height="5" rx="2" />
              <rect x="14" y="13" width="7" height="8" rx="2" />
            </svg>
          </button>
          <button
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="列表视图"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === 'visual' ? (
        /* === Visual Card View === */
        <div className="visual-view">
          {favSutras.length > 0 && (
            <div className="visual-section">
              <div className="section-label">收藏</div>
              <div className="visual-grid">
                {favSutras.map((sutra, index) => (
                  <VisualCard
                    key={sutra.id}
                    sutra={sutra}
                    count={readingCounts[sutra.id] || 0}
                    index={index}
                    number={manifest.findIndex((s) => s.id === sutra.id) + 1}
                    onClick={() => navigate(`/sutra/${sutra.id}`)}
                  />
                ))}
              </div>
            </div>
          )}
          {otherSutras.length > 0 && (
            <div className="visual-section">
              {favSutras.length > 0 && <div className="section-label">全部</div>}
              <div className="visual-grid">
                {otherSutras.map((sutra, index) => (
                  <VisualCard
                    key={sutra.id}
                    sutra={sutra}
                    count={readingCounts[sutra.id] || 0}
                    index={index}
                    number={manifest.findIndex((s) => s.id === sutra.id) + 1}
                    onClick={() => navigate(`/sutra/${sutra.id}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* === Original List View === */
        <>
          {favSutras.length > 0 && (
            <div className="favorites-section">
              <div className="section-label">收藏</div>
              <div className="sutra-list">
                {favSutras.map((sutra, index) => {
                  const count = readingCounts[sutra.id] || 0
                  return (
                    <div
                      key={sutra.id}
                      className="sutra-card"
                      style={{ animationDelay: `${index * 40}ms` }}
                      onClick={() => navigate(`/sutra/${sutra.id}`)}
                    >
                      <div className="sutra-card-header">
                        <div className="sutra-card-name">{sutra.name}</div>
                        {count > 0 && (
                          <div className="sutra-card-count">
                            <span className="count-dot" />
                            已诵 {count} 部
                          </div>
                        )}
                      </div>
                      <div className="sutra-card-meta">
                        <span className="sutra-card-translator">{sutra.translator}</span>
                        <span className="sutra-card-dot">&middot;</span>
                        <span className="sutra-card-chars">约 {sutra.charCount} 字</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {otherSutras.length > 0 && (
            <>
              {favSutras.length > 0 && <div className="section-label">全部</div>}
              <div className="sutra-list">
                {otherSutras.map((sutra, index) => {
                  const isAvailable = sutra.status === 'available'
                  const count = readingCounts[sutra.id] || 0
                  return (
                    <div
                      key={sutra.id}
                      className={`sutra-card ${!isAvailable ? 'disabled' : ''}`}
                      style={{ animationDelay: `${index * 40}ms` }}
                      onClick={() => isAvailable && navigate(`/sutra/${sutra.id}`)}
                    >
                      <div className="sutra-card-header">
                        <div className="sutra-card-name">{sutra.name}</div>
                        {isAvailable && count > 0 && (
                          <div className="sutra-card-count">
                            <span className="count-dot" />
                            已诵 {count} 部
                          </div>
                        )}
                      </div>
                      <div className="sutra-card-meta">
                        <span className="sutra-card-translator">{sutra.translator}</span>
                        <span className="sutra-card-dot">&middot;</span>
                        <span className="sutra-card-chars">约 {sutra.charCount} 字</span>
                      </div>
                      {!isAvailable && (
                        <div className="sutra-card-coming">即将上线</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
