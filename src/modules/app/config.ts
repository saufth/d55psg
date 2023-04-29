// Types
import type { HeaderList } from '@/types/data-dislay'

/** Node enviroment mode */
export const env = process.env.NODE_ENV

/** The base URL of the aplication */
export const baseUrl = process.env.HOST

/** The name of the organization */
export const organization = 'D55PSG'

/** The head desciption of the application */
export const description = 'Escala tu empresa al siguiente nivel con estrategias y tácticas innovadoras'

/** Organization services */
export const SERVICES: HeaderList = Object.freeze({
  consulting: {
    heading: 'Consultoria en estrategias de negocio',
    description: 'Nuestro servicio de consultoria en estrategias de negocio está diseñado para facilitar el alcance de ese objetivo deseado de forma más eficiente y productiva posible en pro de tu empresa.'
  },
  model: {
    heading: 'Desarrollo de modelos de negocio',
    description: 'Nuestro servicio de desarrollo de modelos de negocio te ayudará a definir propuestas de valor efectivas y sostenibles que te permitan distinguirte dentro del mercado.'
  },
  strategy: {
    heading: 'Consultoría especializada de negocios',
    description: 'Ofrecemos servicios de consultoría y asesoría empresarial para ayudarte a optimizar la estrategia de tu negocio, mejorar la eficiencia operativa y desarrollar soluciones innovadoras que te permitan crecer y prosperar en el mercado.'
  },
  coaching: {
    heading: 'Coaching empresarial',
    description: 'Nuestros servicios de coaching empresarial te brindarán el apoyo y la orientación personalizada que necesitas para mejorar tus habilidades de liderazgo, gestión y toma de decisiones, y ayudarte a lograr tus objetivos empresariales.'
  },
  study: {
    heading: 'Investigación estratégica de mercado',
    description: 'Ofrecemos servicios de investigación de mercado personalizados para ayudarte a comprender mejor a tus clientes, identificar oportunidades de mercado y desarrollar estrategias de marketing efectivas.'
  },
  opinion: {
    heading: 'Segunda opinión experta',
    description: 'Nuestros servicios de segunda opinión experta te proporcionarán una evaluación independiente y objetiva de cualquier aspecto de tu negocio, ayudándote a validar o cuestionar decisiones importantes y a tomar medidas efectivas para optimizar el rendimiento empresarial.'
  }
})

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
