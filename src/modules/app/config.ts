/** Node enviroment mode */
export const env = process.env.NODE_ENV

/** The base URL of the aplication */
export const baseUrl = process.env.HOST

/** The name of the organization */
export const organization = 'D55PSG'

/** The head desciption of the application */
export const description = 'Escala tu empresa al siguiente nivel con estrategias y tácticas innovadoras'

/** The keyword list of the application */
export const KEYWORDS = Object.freeze([
  'd55psg',
  'd55psg group',
  'd55psg professional service group',
  'professional service group',
  'business consulting',
  'business consulting services',
  'consultoria de negocios',
  'servicios de consultoria de negocios',
  'business strategy',
  'business strategy services',
  'estrategias de negocios',
  'servicios de estrategias de negocios',
  'market research',
  'market research services',
  'investigacion de mercado',
  'servicios de investigacion de mercado',
  'strategic business planning',
  'strategic business planning services',
  'planeacion estrategica de negocios',
  'servicios de planeacion estrategica de negocios',
  'business consulting',
  'business consulting services',
  'asesoria de negocios',
  'servicios de asesoria de negocios',
  'business coaching',
  'business coaching services',
  'coaching de negocios',
  'coaching empresarial',
  'servicios de coaching empresarial'
])

/** The keyword list as string */
export const keywords = String(KEYWORDS)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter = '@d55psg'

/** Google seach scheme */
export const googleSearchSchema = Object.freeze({
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
})
