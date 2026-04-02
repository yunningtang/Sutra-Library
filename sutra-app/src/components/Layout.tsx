import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IconBook, IconCounter, IconUser } from './Icons'
import './Layout.css'

const tabs = [
  { to: '/', label: '经库', Icon: IconBook, end: true },
  { to: '/counter', label: '计数', Icon: IconCounter, end: false },
  { to: '/profile', label: '我的', Icon: IconUser, end: false },
]

export default function Layout() {
  const location = useLocation()
  const [pressedIdx, setPressedIdx] = useState<number | null>(null)

  const activeIdx = tabs.findIndex((t) =>
    t.end ? location.pathname === t.to : location.pathname.startsWith(t.to)
  )

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
        {tabs.map((tab, i) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              `tab ${isActive ? 'active' : ''} ${pressedIdx === i ? 'pressing' : ''}`
            }
            onPointerDown={() => setPressedIdx(i)}
          >
            <tab.Icon size={20} className="tab-icon-svg" />
            <span className="tab-label">{tab.label}</span>
            {activeIdx === i && <span className="tab-indicator" />}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
