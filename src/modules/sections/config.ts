// Config
import { SERVICES, organization } from '../app/config'
// Types
import type { Dimensionable } from '@/types/sizing'
import type { ServiceCardProps, ShowcaseProps } from '@/types/data-dislay'

/** Hero description */
export const heroDescription = 'Desarrollamos estrategias y tácticas productivas y autosustentables a corto, mediano y largo plazo.'

/** Hero image alternative info */
export const imageHeroAlt = `${organization} hero image`

/** The solution image size */
export const SOLUTION_IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 620,
  height: 467
})

/** The Solutions section configuration */
export const SOLUTIONS_CONFIG: Readonly<ServiceCardProps[]> = Object.freeze([
  {
    heading: SERVICES.consulting.heading,
    description: SERVICES.consulting.description,
    image: {
      name: 'consulting.jpg',
      alt: `${organization} ${SERVICES.consulting.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    heading: SERVICES.model.heading,
    description: SERVICES.model.description,
    image: {
      name: 'business-model.jpg',
      alt: `${organization} ${SERVICES.model.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    heading: SERVICES.strategy.heading,
    description: SERVICES.strategy.description,
    image: {
      name: 'business-strategy.jpg',
      alt: `${organization} ${SERVICES.strategy.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    heading: SERVICES.coaching.heading,
    description: SERVICES.coaching.description,
    image: {
      name: 'coaching.jpg',
      alt: `${organization} ${SERVICES.coaching.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    heading: SERVICES.study.heading,
    description: SERVICES.study.description,
    image: {
      name: 'market-study.jpg',
      alt: `${organization} ${SERVICES.study.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    heading: SERVICES.opinion.heading,
    description: SERVICES.opinion.description,
    image: {
      name: 'second-opinion.jpg',
      alt: `${organization} ${SERVICES.opinion.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  }
])

/** The size of the image */
export const VALUES_IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 500,
  height: 500
})

/** Our values section configuration */
export const VALUES: Readonly<ShowcaseProps[]> = Object.freeze([
  {
    heading: 'Excelencia',
    description: 'Nos esforzamos por alcanzar la excelencia en todo lo que hacemos, desde la calidad de nuestro trabajo hasta el servicio al cliente.',
    image: {
      name: 'excellence.svg',
      alt: `${organization} Excelencia`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Integridad',
    description: 'Actuamos con honestidad y ética en todas las relaciones comerciales y personales.',
    image: {
      name: 'integrity.svg',
      alt: `${organization} Integridad`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Innovación',
    description: 'Buscamos export constantemente nuevas soluciones y métodos creativos para superar los desafíos y las expectativas del mercado.',
    image: {
      name: 'innovation.svg',
      alt: `${organization} Innovación`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Compromiso con el cliente',
    description: 'Estamos dedicados a proporcionar el mejor servicio posible a nuestros clientes, ofreciendo soluciones personalizadas y orientadas a resultados.',
    image: {
      name: 'commitment.svg',
      alt: `${organization} Compromiso con el cliente`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Trabajo en equipo',
    description: 'Valoramos y respetamos las contribuciones de cada miembro del equipo, trabajando juntos para alcanzar objetivos compartidos.',
    image: {
      name: 'teamwork.svg',
      alt: `${organization} Trabajo en equipo`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Responsabilidad social',
    description: 'Nos preocupamos por el impacto ambiental y social de nuestras operaciones y nos comprometemos a ser una empresa socialmente responsable.',
    image: {
      name: 'responsability.svg',
      alt: `${organization} Responsabilidad social`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: 'Crecimiento personal y profesional',
    description: 'Nos comprometemos a proporcionar un ambiente de trabajo que promueva el crecimiento personal y profesional de nuestros empleados.',
    image: {
      name: 'growth.svg',
      alt: `${organization} Crecimiento personal y profesional`,
      ...VALUES_IMG_SIZE
    }
  }
])
