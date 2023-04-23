// Global store
import { create as createStore } from 'zustand'
// Config
import { languageInitialState } from '../config'
// Types
import type { Language, LanguageState } from '../../types/app'

/** Language store hook */
export const useLanguageStore = createStore<LanguageState>((set) => ({
  lang: languageInitialState,
  change: (lang: Language) => set(() => ({ lang }))
}))
