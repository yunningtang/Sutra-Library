import { useNavigate } from 'react-router-dom'
import { manifest } from '../data/manifest'
import { useStore } from '../store/useStore'
import './LibraryPage.css'

export default function LibraryPage() {
  const navigate = useNavigate()
  const readingCounts = useStore((s) => s.readingCounts)
  const favorites = useStore((s) => s.favorites)

  const favSutras = manifest.filter((s) => favorites.includes(s.id))
  const otherSutras = manifest.filter((s) => !favorites.includes(s.id))

  return (
    <div className="library-page">
      <h1 className="library-title">经库</h1>

      {/* Favorites */}
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
                  <div className="sutra-card-name">{sutra.name}</div>
                  <div className="sutra-card-meta">
                    <span className="sutra-card-translator">{sutra.translator}</span>
                    <span className="sutra-card-dot">&middot;</span>
                    <span className="sutra-card-chars">约 {sutra.charCount} 字</span>
                  </div>
                  {count > 0 && (
                    <div className="sutra-card-count">
                      <span className="count-dot" />
                      已诵 {count} 部
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Other Sutras */}
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
                  <div className="sutra-card-name">{sutra.name}</div>
                  <div className="sutra-card-meta">
                    <span className="sutra-card-translator">{sutra.translator}</span>
                    <span className="sutra-card-dot">&middot;</span>
                    <span className="sutra-card-chars">约 {sutra.charCount} 字</span>
                  </div>
                  {isAvailable && count > 0 && (
                    <div className="sutra-card-count">
                      <span className="count-dot" />
                      已诵 {count} 部
                    </div>
                  )}
                  {!isAvailable && (
                    <div className="sutra-card-coming">即将上线</div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
