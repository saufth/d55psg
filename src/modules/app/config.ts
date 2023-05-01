// Types
import type { HeaderListConfig } from '@/types/data-dislay'

/** Node enviroment mode */
export const env = process.env.NODE_ENV

/** The base URL of the aplication */
export const baseUrl = process.env.HOST

/** The name of the organization */
export const organization = 'D55'

/** The alternative name of the organization */
export const organizationAlt = 'D55PSG'

/** The slogan of the organization */
export const slogan = 'Profesional Service Group'

/** The nam and slogan of the organization */
export const organizationSlogan = `${organization} ${slogan}`

/** The head desciption of the application */
export const description = 'Escala tu empresa al siguiente nivel con estrategias y tácticas innovadoras'

/** The email of the organizacion */
export const email = 'contacto@d55psg.com'

/** Organization services */
export const SERVICES: HeaderListConfig = {
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
}

/** Organization values */
export const VALUES: HeaderListConfig = {
  excellence: {
    heading: 'Excelencia',
    description: 'Nos esforzamos por alcanzar la excelencia en todo lo que hacemos, desde la calidad de nuestro trabajo hasta el servicio al cliente.'
  },
  integrity: {
    heading: 'Integridad',
    description: 'Actuamos con honestidad y ética en todas las relaciones comerciales y personales.'
  },
  innovation: {
    heading: 'Innovación',
    description: 'Buscamos export constantemente nuevas soluciones y métodos creativos para superar los desafíos y las expectativas del mercado.'
  },
  commitment: {
    heading: 'Compromiso con el cliente',
    description: 'Estamos dedicados a proporcionar el mejor servicio posible a nuestros clientes, ofreciendo soluciones personalizadas y orientadas a resultados.'
  },
  teamwork: {
    heading: 'Trabajo en equipo',
    description: 'Valoramos y respetamos las contribuciones de cada miembro del equipo, trabajando juntos para alcanzar objetivos compartidos.'
  },
  responsability: {
    heading: 'Responsabilidad social',
    description: 'Nos preocupamos por el impacto ambiental y social de nuestras operaciones y nos comprometemos a ser una empresa socialmente responsable.'
  },
  growth: {
    heading: 'Crecimiento personal y profesional',
    description: 'Nos comprometemos a proporcionar un ambiente de trabajo que promueva el crecimiento personal y profesional de nuestros empleados.'
  }
}

/** The copyright of the application */
export const copyright = `Copyright ${new Date().getFullYear()} ${organizationSlogan}. All rights reserved.`

/** The keyword list of the application */
export const KEYWORDS: ReadonlyArray<string> = [
  organization,
  'd55psg group',
  'd55 professional service group',
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
]

/** The keyword list as string */
export const keywords = String(KEYWORDS)

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
      name: `${organizationSlogan}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: `${baseUrl}`,
      name: `${organizationSlogan}`,
      publisher: {
        '@id': `${baseUrl}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}#webpage`,
      url: `${baseUrl}`,
      name: `${organizationSlogan}`,
      about: {
        '@id': `${baseUrl}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
} as const
