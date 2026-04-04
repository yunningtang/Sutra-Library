import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './store/useAuth'
import Layout from './components/Layout'
import LibraryPage from './pages/LibraryPage'
import SutraDetailPage from './pages/SutraDetailPage'
import ReadingPage from './pages/ReadingPage'
import CounterPage from './pages/CounterPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import { useStore } from './store/useStore'

const themeVars: Record<string, Record<string, string>> = {
  matcha: {
    '--theme': '#6B9E7D',
    '--theme-l': '#8FBF9E',
    '--theme-xl': '#B5D4C1',
    '--theme-bg': '#EFF6F1',
    '--theme-d': '#4A7A5C',
  },
  sky: {
    '--theme': '#7AB8D9',
    '--theme-l': '#9ECDE5',
    '--theme-xl': '#C3DFF0',
    '--theme-bg': '#EDF5FA',
    '--theme-d': '#5A9ABD',
  },
  lavender: {
    '--theme': '#A494CC',
    '--theme-l': '#BAA9DB',
    '--theme-xl': '#D4C8EC',
    '--theme-bg': '#F2EEF8',
    '--theme-d': '#8875B5',
  },
  peach: {
    '--theme': '#E8A598',
    '--theme-l': '#F0BDB3',
    '--theme-xl': '#F5D5CE',
    '--theme-bg': '#FDF2EF',
    '--theme-d': '#D4897A',
  },
  amber: {
    '--theme': '#D9A84E',
    '--theme-l': '#E4BE74',
    '--theme-xl': '#EDD5A0',
    '--theme-bg': '#FBF4E5',
    '--theme-d': '#C09038',
  },
  rose: {
    '--theme': '#D4849A',
    '--theme-l': '#E0A0B2',
    '--theme-xl': '#ECBFCC',
    '--theme-bg': '#FAEAEF',
    '--theme-d': '#B86A82',
  },
  slate: {
    '--theme': '#7A8B99',
    '--theme-l': '#99A8B4',
    '--theme-xl': '#BCC7CF',
    '--theme-bg': '#EEF1F4',
    '--theme-d': '#5E6F7E',
  },
  teal: {
    '--theme': '#5BA4A4',
    '--theme-l': '#7FBDBD',
    '--theme-xl': '#A8D4D4',
    '--theme-bg': '#ECF5F5',
    '--theme-d': '#458585',
  },
}

// Generate light/dark/bg variants from a single hex color
function hexToVars(hex: string): Record<string, string> {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const lighten = (v: number, amt: number) => Math.min(255, Math.round(v + (255 - v) * amt))
  const darken = (v: number, amt: number) => Math.round(v * (1 - amt))
  const toHex = (rv: number, gv: number, bv: number) =>
    `#${[rv, gv, bv].map((v) => v.toString(16).padStart(2, '0')).join('')}`

  return {
    '--theme': hex,
    '--theme-l': toHex(lighten(r, 0.25), lighten(g, 0.25), lighten(b, 0.25)),
    '--theme-xl': toHex(lighten(r, 0.5), lighten(g, 0.5), lighten(b, 0.5)),
    '--theme-bg': toHex(lighten(r, 0.85), lighten(g, 0.85), lighten(b, 0.85)),
    '--theme-d': toHex(darken(r, 0.2), darken(g, 0.2), darken(b, 0.2)),
  }
}

const fontFamilies: Record<string, string> = {
  serif: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', serif",
  sans: "'Nunito', 'Noto Sans SC', system-ui, sans-serif",
  system: "system-ui, -apple-system, 'PingFang SC', sans-serif",
}

function AuthInitializer() {
  const initialize = useAuth((s) => s.initialize)
  useEffect(() => { initialize() }, [initialize])
  return null
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeColor = useStore((s) => s.themeColor)
  const customColor = useStore((s) => s.customColor)
  const darkMode = useStore((s) => s.darkMode)
  const fontChoice = useStore((s) => s.fontChoice)

  useEffect(() => {
    const root = document.documentElement
    const vars =
      themeColor === 'custom'
        ? hexToVars(customColor)
        : themeVars[themeColor] || themeVars.matcha
    Object.entries(vars).forEach(([key, val]) => root.style.setProperty(key, val))

    root.style.setProperty('--font-reading', fontFamilies[fontChoice] || fontFamilies.serif)

    if (darkMode) {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
  }, [themeColor, customColor, darkMode, fontChoice])

  return <>{children}</>
}

export default function App() {
  return (
    <HashRouter>
      <AuthInitializer />
      <ThemeProvider>
        <Routes>
          <Route path="/read/:sutraId" element={<ReadingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<LibraryPage />} />
            <Route path="/sutra/:sutraId" element={<SutraDetailPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  )
}
