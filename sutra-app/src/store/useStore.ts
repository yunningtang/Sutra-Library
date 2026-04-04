import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeColor = 'matcha' | 'sky' | 'lavender' | 'peach' | 'amber' | 'rose' | 'slate' | 'teal' | 'ink' | 'custom'
export type FontChoice = 'serif' | 'sans' | 'system'

interface ReadingRecord {
  sutraId: string
  completedAt: string
  durationSeconds: number
}

interface CounterRecord {
  count: number
  target: number
  note: string
  completedAt: string
}

interface CounterState {
  count: number
  target: number
}

interface AppState {
  // Reading
  readingCounts: Record<string, number>
  readingRecords: ReadingRecord[]
  completeReading: (sutraId: string, durationSeconds: number) => void

  // Favorites
  favorites: string[]
  toggleFavorite: (sutraId: string) => void
  isFavorite: (sutraId: string) => boolean

  // Counter
  counter: CounterState
  counterRecords: CounterRecord[]
  incrementCounter: () => void
  resetCounter: () => void
  setCounterTarget: (target: number) => void
  saveCounterRecord: (note: string) => void
  deleteCounterRecord: (index: number) => void
  updateCounterRecordNote: (index: number, note: string) => void

  // Hints (one-time)
  hasSeenLongPressHint: boolean
  hasSeenToolbarHint: boolean
  dismissLongPressHint: () => void
  dismissToolbarHint: () => void

  // Reading position
  readingPositions: Record<string, number>
  saveReadingPosition: (sutraId: string, scrollY: number) => void

  // Settings
  fontSize: number
  fontChoice: FontChoice
  showPinyin: boolean
  showProgress: boolean
  showCounterRing: boolean
  themeColor: ThemeColor
  customColor: string
  darkMode: boolean
  setFontSize: (size: number) => void
  setFontChoice: (font: FontChoice) => void
  togglePinyin: () => void
  toggleProgress: () => void
  toggleCounterRing: () => void
  setThemeColor: (color: ThemeColor) => void
  setCustomColor: (hex: string) => void
  toggleDarkMode: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      readingCounts: {},
      readingRecords: [],
      completeReading: (sutraId, durationSeconds) =>
        set((state) => ({
          readingCounts: {
            ...state.readingCounts,
            [sutraId]: (state.readingCounts[sutraId] || 0) + 1,
          },
          readingRecords: [
            ...state.readingRecords,
            {
              sutraId,
              completedAt: new Date().toISOString(),
              durationSeconds,
            },
          ],
        })),

      favorites: [],
      toggleFavorite: (sutraId) =>
        set((state) => ({
          favorites: state.favorites.includes(sutraId)
            ? state.favorites.filter((id) => id !== sutraId)
            : [...state.favorites, sutraId],
        })),
      isFavorite: (sutraId) => get().favorites.includes(sutraId),

      counter: { count: 0, target: 108 },
      counterRecords: [],
      incrementCounter: () =>
        set((state) => ({
          counter: { ...state.counter, count: state.counter.count + 1 },
        })),
      resetCounter: () =>
        set((state) => ({
          counter: { ...state.counter, count: 0 },
        })),
      setCounterTarget: (target) =>
        set((state) => ({
          counter: { ...state.counter, target },
        })),
      saveCounterRecord: (note) =>
        set((state) => ({
          counterRecords: [
            ...state.counterRecords,
            {
              count: state.counter.count,
              target: state.counter.target,
              note,
              completedAt: new Date().toISOString(),
            },
          ],
          counter: { ...state.counter, count: 0 },
        })),
      deleteCounterRecord: (index) =>
        set((state) => ({
          counterRecords: state.counterRecords.filter((_, i) => i !== index),
        })),
      updateCounterRecordNote: (index, note) =>
        set((state) => ({
          counterRecords: state.counterRecords.map((r, i) =>
            i === index ? { ...r, note } : r
          ),
        })),

      hasSeenLongPressHint: false,
      hasSeenToolbarHint: false,
      dismissLongPressHint: () => set({ hasSeenLongPressHint: true }),
      dismissToolbarHint: () => set({ hasSeenToolbarHint: true }),

      readingPositions: {},
      saveReadingPosition: (sutraId, scrollY) =>
        set((state) => ({
          readingPositions: { ...state.readingPositions, [sutraId]: scrollY },
        })),

      fontSize: 20,
      fontChoice: 'serif',
      showPinyin: true,
      showProgress: true,
      showCounterRing: true,
      themeColor: 'matcha',
      customColor: '#6B9E7D',
      darkMode: false,
      setFontSize: (size) => set({ fontSize: size }),
      setFontChoice: (font) => set({ fontChoice: font }),
      togglePinyin: () => set((state) => ({ showPinyin: !state.showPinyin })),
      toggleProgress: () => set((state) => ({ showProgress: !state.showProgress })),
      toggleCounterRing: () => set((state) => ({ showCounterRing: !state.showCounterRing })),
      setThemeColor: (color) => set({ themeColor: color }),
      setCustomColor: (hex) => set({ customColor: hex, themeColor: 'custom' }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: 'sutra-app-storage' }
  )
)
