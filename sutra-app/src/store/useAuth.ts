import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'
import { useStore } from './useStore'

interface AuthState {
  user: User | null
  session: Session | null
  loading: boolean
  initialized: boolean

  initialize: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<string | null>
  signUpWithEmail: (email: string, password: string) => Promise<string | null>
  signInWithGoogle: () => Promise<string | null>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<string | null>
  updatePassword: (password: string) => Promise<string | null>
  updateDisplayName: (name: string) => Promise<string | null>
  updateAvatar: (dataUrl: string) => Promise<string | null>
  syncToCloud: () => Promise<void>
  syncFromCloud: () => Promise<void>
}

// Wait for zustand persist to rehydrate before syncing
function waitForStoreRehydration(): Promise<void> {
  return new Promise((resolve) => {
    const state = useStore.getState()
    // If store already has non-default data, it's rehydrated
    if (Object.keys(state.readingCounts).length > 0 || state.favorites.length > 0 || state.counterRecords.length > 0) {
      resolve()
      return
    }
    // Otherwise wait a tick for persist to restore
    const unsub = useStore.subscribe((s) => {
      if (Object.keys(s.readingCounts).length > 0 || s.favorites.length > 0 || s.counterRecords.length > 0) {
        unsub()
        resolve()
      }
    })
    // Fallback: if store is genuinely empty, resolve after 500ms
    setTimeout(() => { unsub(); resolve() }, 500)
  })
}

export const useAuth = create<AuthState>()((set, get) => ({
  user: null,
  session: null,
  loading: false,
  initialized: false,

  initialize: async () => {
    if (!supabase) {
      set({ initialized: true })
      return
    }
    const { data: { session } } = await supabase.auth.getSession()
    set({ session, user: session?.user ?? null, initialized: true })

    if (session?.user) {
      await waitForStoreRehydration()
      await get().syncFromCloud()
    }

    supabase.auth.onAuthStateChange(async (_event, session) => {
      set({ session, user: session?.user ?? null })
      if (session?.user) {
        await waitForStoreRehydration()
        await get().syncFromCloud()
      }
    })
  },

  signInWithEmail: async (email, password) => {
    if (!supabase) return '后端未配置'
    set({ loading: true })
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    set({ loading: false })
    if (error) return error.message
    await get().syncFromCloud()
    return null
  },

  signUpWithEmail: async (email, password) => {
    if (!supabase) return '后端未配置'
    set({ loading: true })
    const { error } = await supabase.auth.signUp({ email, password })
    set({ loading: false })
    if (error) return error.message
    await get().syncToCloud()
    return null
  },

  signInWithGoogle: async () => {
    if (!supabase) return '后端未配置'
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) return error.message
    return null
  },

  signOut: async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    set({ user: null, session: null })
  },

  resetPassword: async (email) => {
    if (!supabase) return '后端未配置'
    set({ loading: true })
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/#/reset-password`,
    })
    set({ loading: false })
    if (error) return error.message
    return null
  },

  updatePassword: async (password) => {
    if (!supabase) return '后端未配置'
    set({ loading: true })
    const { error } = await supabase.auth.updateUser({ password })
    set({ loading: false })
    if (error) return error.message
    return null
  },

  updateDisplayName: async (name) => {
    if (!supabase) return '后端未配置'
    const { error } = await supabase.auth.updateUser({ data: { display_name: name } })
    if (error) return error.message
    // Also persist in store settings via sync
    useStore.setState({ displayName: name })
    await get().syncToCloud()
    return null
  },

  updateAvatar: async (dataUrl) => {
    if (!supabase) return '后端未配置'
    const { error } = await supabase.auth.updateUser({ data: { avatar_data: dataUrl } })
    if (error) return error.message
    useStore.setState({ avatarData: dataUrl })
    await get().syncToCloud()
    return null
  },

  syncToCloud: async () => {
    if (!supabase) return
    const user = get().user
    if (!user) return

    const store = useStore.getState()
    const payload = {
      user_id: user.id,
      reading_counts: store.readingCounts,
      reading_records: store.readingRecords,
      favorites: store.favorites,
      counter_records: store.counterRecords,
      settings: {
        fontSize: store.fontSize,
        fontChoice: store.fontChoice,
        showPinyin: store.showPinyin,
        themeColor: store.themeColor,
        customColor: store.customColor,
        darkMode: store.darkMode,
        displayName: store.displayName,
        avatarData: store.avatarData,
      },
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase
      .from('user_data')
      .upsert(payload, { onConflict: 'user_id' })

    if (error) {
      console.error('syncToCloud error:', error)
    } else {
      useStore.setState({ lastSyncAt: new Date().toISOString() })
    }
  },

  syncFromCloud: async () => {
    if (!supabase) return
    const user = get().user
    if (!user) return

    const { data, error } = await supabase
      .from('user_data')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (error) console.error('syncFromCloud fetch error:', error)

    if (!data) {
      // First time login — push local data to cloud
      await get().syncToCloud()
      return
    }

    const store = useStore.getState()
    const cloudCounts = (data.reading_counts || {}) as Record<string, number>
    const localCounts = store.readingCounts
    const mergedCounts: Record<string, number> = { ...localCounts }
    for (const [key, val] of Object.entries(cloudCounts)) {
      mergedCounts[key] = Math.max(mergedCounts[key] || 0, val)
    }

    const cloudReadingRecords = (data.reading_records || []) as typeof store.readingRecords
    const localTimes = new Set(store.readingRecords.map((r) => r.completedAt))
    const mergedReadingRecords = [
      ...store.readingRecords,
      ...cloudReadingRecords.filter((r) => !localTimes.has(r.completedAt)),
    ]

    const cloudCounterRecords = (data.counter_records || []) as typeof store.counterRecords
    const localCounterTimes = new Set(store.counterRecords.map((r) => r.completedAt))
    const mergedCounterRecords = [
      ...store.counterRecords,
      ...cloudCounterRecords.filter((r) => !localCounterTimes.has(r.completedAt)),
    ]

    const settings = data.settings as Record<string, unknown> | null

    useStore.setState({
      readingCounts: mergedCounts,
      readingRecords: mergedReadingRecords,
      favorites: (data.favorites as string[]) || store.favorites,
      counterRecords: mergedCounterRecords,
      ...(settings && {
        fontSize: (settings.fontSize as number) || store.fontSize,
        fontChoice: (settings.fontChoice as typeof store.fontChoice) || store.fontChoice,
        showPinyin: settings.showPinyin !== undefined ? (settings.showPinyin as boolean) : store.showPinyin,
        themeColor: (settings.themeColor as typeof store.themeColor) || store.themeColor,
        customColor: (settings.customColor as string) || store.customColor,
        darkMode: settings.darkMode !== undefined ? (settings.darkMode as boolean) : store.darkMode,
        displayName: (settings.displayName as string) || store.displayName,
        avatarData: (settings.avatarData as string) || store.avatarData,
      }),
    })

    // Push merged data back to cloud
    await get().syncToCloud()
  },
}))
