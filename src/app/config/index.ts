// Types
import type { Language, Translatable } from '../../types/app'

/** Node enviroment mode */
export const env = process.env.NODE_ENV

/** The base URL of the aplication */
export const baseUrl = process.env.HOST

/** The name of the organization */
export const organization = 'D55PSG'

/** The head desciption of the application */
export const descriptionConfig: Translatable = {
  es: 'Professional Service Group',
  en: 'Professional Service Group'
}

/** The keyword list of the application */
export const keywordList = [
  'd55psg',
  'd55psg group',
  'd55psg professional service group',
  'professional service group',
  'd55psg servicios profecionales',
  'soluciones empresariales'
]

/** The keyword list as string */
export const keywords = String(keywordList)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter = '@d55psg'

/** Google seach scheme */
export const googleSearchSchema = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: `${organization}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: `${baseUrl}`,
      name: `${organization}`,
      publisher: {
        '@id': `${baseUrl}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}#webpage`,
      url: `${baseUrl}`,
      name: `${organization}`,
      about: {
        '@id': `${baseUrl}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
}

/** The initial state of the language application */
export const languageInitialState: Language = 'es'
