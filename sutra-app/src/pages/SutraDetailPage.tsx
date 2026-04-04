import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { manifest } from '../data/manifest'
import { useStore } from '../store/useStore'
import { IconBack, IconHeart, IconHeartFilled, IconScroll, IconNote, IconInfo } from '../components/Icons'
import type { SutraData } from '../data/types'
import './SutraDetailPage.css'

const sutraLoaders: Record<string, () => Promise<SutraData>> = {
  pglm: () => import('../data/pglm').then((m) => m.pglm),
  diamond: () => import('../data/diamond').then((m) => m.diamond),
  yaoshi: () => import('../data/yaoshi').then((m) => m.yaoshi),
  heart: () => import('../data/heart').then((m) => m.heart),
  dizang: () => import('../data/dizang').then((m) => m.dizang),
  liaozhi: () => import('../data/liaozhi').then((m) => m.liaozhi),
}

export default function SutraDetailPage() {
  const { sutraId } = useParams<{ sutraId: string }>()
  const navigate = useNavigate()
  const readingCounts = useStore((s) => s.readingCounts)
  const toggleFavorite = useStore((s) => s.toggleFavorite)
  const favorites = useStore((s) => s.favorites)

  const [activePanel, setActivePanel] = useState<'glossary' | 'about' | null>(null)
  const [sutraData, setSutraData] = useState<SutraData | null>(null)

  const sutra = manifest.find((s) => s.id === sutraId)

  useEffect(() => {
    if (sutraId && sutraLoaders[sutraId]) {
      sutraLoaders[sutraId]().then(setSutraData)
    }
  }, [sutraId])

  if (!sutra) return (
    <div className="detail-page" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--c-text-mute)', marginBottom: 20 }}>经文未找到</div>
        <button className="back-btn press-scale" onClick={() => navigate('/')}>
          <IconBack size={18} />
          <span>返回经库</span>
        </button>
      </div>
    </div>
  )

  const count = readingCounts[sutra.id] || 0
  const isFav = favorites.includes(sutra.id)

  const togglePanel = (panel: 'glossary' | 'about') => {
    setActivePanel(activePanel === panel ? null : panel)
  }

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
        <button
          className={`detail-link-btn ${activePanel === 'glossary' ? 'link-active' : ''}`}
          onClick={() => togglePanel('glossary')}
        >
          <span className="link-icon-wrap"><IconNote size={16} /></span>
          <span>词汇注释</span>
          <span className="link-arrow">{activePanel === 'glossary' ? '▾' : '▸'}</span>
        </button>
        {activePanel === 'glossary' && sutraData && (
          <div className="detail-panel">
            {sutraData.glossary.length === 0 ? (
              <div className="panel-empty">暂无词汇注释</div>
            ) : (
              <div className="glossary-list">
                {sutraData.glossary.map((item) => (
                  <div key={item.id} className="glossary-entry">
                    <div className="glossary-head">
                      <span className="glossary-chars">{item.chars}</span>
                      <span className="glossary-pinyin">{item.pinyin}</span>
                      <span className="glossary-cat">{item.category}</span>
                    </div>
                    <div className="glossary-def">{item.definition}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <button
          className={`detail-link-btn ${activePanel === 'about' ? 'link-active' : ''}`}
          onClick={() => togglePanel('about')}
        >
          <span className="link-icon-wrap"><IconInfo size={16} /></span>
          <span>关于此经</span>
          <span className="link-arrow">{activePanel === 'about' ? '▾' : '▸'}</span>
        </button>
        {activePanel === 'about' && sutraData && (
          <div className="detail-panel">
            <div className="about-section">
              <div className="about-row">
                <span className="about-label">经名</span>
                <span className="about-value">{sutraData.name}</span>
              </div>
              <div className="about-row">
                <span className="about-label">译者</span>
                <span className="about-value">{sutraData.translator}</span>
              </div>
              <div className="about-row">
                <span className="about-label">来源</span>
                <span className="about-value">{sutraData.source}</span>
              </div>
              <div className="about-row">
                <span className="about-label">正文</span>
                <span className="about-value">约 {sutra.charCount} 字</span>
              </div>
            </div>
            <div className="about-desc">{sutraData.about}</div>
          </div>
        )}
      </div>
    </div>
  )
}
