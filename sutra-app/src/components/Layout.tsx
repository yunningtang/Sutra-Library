import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  IconBook,
  IconBookFilled,
  IconCounter,
  IconCounterFilled,
  IconUser,
  IconUserFilled,
} from './Icons'
import './Layout.css'

const tabs = [
  { to: '/', label: '经库', Icon: IconBook, IconActive: IconBookFilled, end: true },
  { to: '/counter', label: '计数', Icon: IconCounter, IconActive: IconCounterFilled, end: false },
  { to: '/profile', label: '我的', Icon: IconUser, IconActive: IconUserFilled, end: false },
]

export default function Layout() {
  const location = useLocation()
  const [pressedIdx, setPressedIdx] = useState<number | null>(null)
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

  const activeIdx = tabs.findIndex((t) =>
    t.end ? location.pathname === t.to : location.pathname.startsWith(t.to)
  )

  // Position the sliding pill under the active tab
  useEffect(() => {
    const el = tabRefs.current[activeIdx]
    if (el) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
  }, [activeIdx, location.pathname])

  useEffect(() => {
    const onResize = () => {
      const el = tabRefs.current[activeIdx]
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeIdx])

  useEffect(() => {
    if (pressedIdx !== null) {
      const timer = setTimeout(() => setPressedIdx(null), 150)
      return () => clearTimeout(timer)
    }
  }, [pressedIdx])

  return (
    <div className="layout">
      <div className="layout-content">
        <Outlet />
      </div>
      <nav className="tab-bar">
        {pill && (
          <span
            className="tab-pill"
            style={{ left: pill.left, width: pill.width }}
          />
        )}
        {tabs.map((tab, i) => {
          const isActive = activeIdx === i
          const Icon = isActive ? tab.IconActive : tab.Icon
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              className={({ isActive: active }) =>
                `tab ${active ? 'active' : ''} ${pressedIdx === i ? 'pressing' : ''}`
              }
              onPointerDown={() => setPressedIdx(i)}
            >
              <Icon size={20} className="tab-icon-svg" />
              <span className="tab-label">{tab.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}
