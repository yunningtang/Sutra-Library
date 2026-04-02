import { useNavigate, useParams } from 'react-router-dom'
import { manifest } from '../data/manifest'
import { useStore } from '../store/useStore'
import { IconBack, IconHeart, IconHeartFilled, IconScroll, IconNote, IconInfo } from '../components/Icons'
import './SutraDetailPage.css'

export default function SutraDetailPage() {
  const { sutraId } = useParams<{ sutraId: string }>()
  const navigate = useNavigate()
  const readingCounts = useStore((s) => s.readingCounts)
  const toggleFavorite = useStore((s) => s.toggleFavorite)
  const favorites = useStore((s) => s.favorites)

  const sutra = manifest.find((s) => s.id === sutraId)
  if (!sutra) return <div className="detail-page">经文未找到</div>

  const count = readingCounts[sutra.id] || 0
  const isFav = favorites.includes(sutra.id)

  return (
    <div className="detail-page">
      <div className="detail-top-bar">
        <button className="back-btn press-scale" onClick={() => navigate('/')}>
          <IconBack size={18} />
          <span>返回</span>
        </button>
        <button
          className={`fav-btn press-scale ${isFav ? 'fav-active' : ''}`}
          onClick={() => toggleFavorite(sutra.id)}
        >
          {isFav ? <IconHeartFilled size={18} color="var(--theme)" /> : <IconHeart size={18} />}
        </button>
      </div>

      <div className="detail-header">
        <h1 className="detail-name">{sutra.name}</h1>
        <div className="detail-translator">{sutra.translatorFull}</div>
      </div>

      {count > 0 && (
        <div className="detail-count-wrap">
          <span className="detail-count-number">{count}</span>
          <span className="detail-count-label">部已诵</span>
        </div>
      )}

      <button
        className="start-reading-btn"
        onClick={() => navigate(`/read/${sutra.id}`)}
      >
        开始念诵
      </button>

      <div className="detail-links">
        <button className="detail-link-btn" onClick={() => navigate(`/read/${sutra.id}`)}>
          <span className="link-icon-wrap"><IconScroll size={16} /></span>
          <span>经文全文</span>
        </button>
        <button className="detail-link-btn" disabled>
          <span className="link-icon-wrap"><IconNote size={16} /></span>
          <span>词汇注释</span>
        </button>
        <button className="detail-link-btn" disabled>
          <span className="link-icon-wrap"><IconInfo size={16} /></span>
          <span>关于此经</span>
        </button>
      </div>
    </div>
  )
}
