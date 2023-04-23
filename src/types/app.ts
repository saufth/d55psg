// Types
import type { ActionParam } from './input'

/** Application language defaults */
export type Language = 'es' // Spanish
  | 'en' // English

/** The language application state */
export interface LanguageState {
  /** The language using in the application */
  lang: Language
  /** Using for change the application language */
  change: ActionParam<Language>
}

/** Using to define content that can be translated */
export interface Translatable {
  /** The content in the Spanish language */
  es: string
  /** The content in the English language */
  en: string
}
