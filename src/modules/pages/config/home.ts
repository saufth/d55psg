// Config
import { SERVICES, VALUES, organization } from '../../app/config'
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
export const VALUES_CONFIG: Readonly<ShowcaseProps[]> = Object.freeze([
  {
    heading: VALUES.excellence.heading,
    description: VALUES.excellence.description,
    image: {
      name: 'excellence.svg',
      alt: `${organization} ${VALUES.excellence.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.integrity.heading,
    description: VALUES.integrity.description,
    image: {
      name: 'integrity.svg',
      alt: `${organization} ${VALUES.integrity.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.innovation.heading,
    description: VALUES.innovation.description,
    image: {
      name: 'innovation.svg',
      alt: `${organization} ${VALUES.innovation.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.commitment.heading,
    description: VALUES.commitment.description,
    image: {
      name: 'commitment.svg',
      alt: `${organization} ${VALUES.commitment.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.teamwork.heading,
    description: VALUES.teamwork.description,
    image: {
      name: 'teamwork.svg',
      alt: `${organization} ${VALUES.teamwork.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.responsability.heading,
    description: VALUES.responsability.description,
    image: {
      name: 'responsability.svg',
      alt: `${organization} ${VALUES.responsability.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    heading: VALUES.growth.heading,
    description: VALUES.growth.description,
    image: {
      name: 'growth.svg',
      alt: `${organization} ${VALUES.growth.heading}`,
      ...VALUES_IMG_SIZE
    }
  }
])
