// Components
import About from '@/components/sections/About'
import Card from '@/components/data-display/Card'
import Image from 'next/image'
import Tagline from '@/components/data-display/core/Tagline'
// Config
import {
  SERVICES,
  VALUES,
  description,
  organizationAlt,
  organizationSlogan
} from '@/modules/app/config'
// Types
import type { Dimensionable } from '@/types/sizing'
import type { CardProps, ShowcaseProps } from '@/types/data-dislay'

/** The hero header description */
export const heroDescription = 'Desarrollamos estrategias y tácticas productivas y autosustentables a corto, mediano y largo plazo.'

/** The solution image size */
export const SOLUTION_IMG_SIZE: Readonly<Dimensionable> = {
  width: 620,
  height: 467
}

/** The solutions section configuration */
export const SOLUTIONS_CONFIG: ReadonlyArray<Readonly<CardProps>> = [
  {
    ...SERVICES.consulting,
    image: {
      name: 'consulting.jpg',
      alt: `${organizationAlt} ${SERVICES.consulting.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.model,
    image: {
      name: 'business-model.jpg',
      alt: `${organizationAlt} ${SERVICES.model.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.strategy,
    image: {
      name: 'business-strategy.jpg',
      alt: `${organizationAlt} ${SERVICES.strategy.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.coaching,
    image: {
      name: 'coaching.jpg',
      alt: `${organizationAlt} ${SERVICES.coaching.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.study,
    image: {
      name: 'market-study.jpg',
      alt: `${organizationAlt} ${SERVICES.study.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  },
  {
    ...SERVICES.opinion,
    image: {
      name: 'second-opinion.jpg',
      alt: `${organizationAlt} ${SERVICES.opinion.heading}`,
      ...SOLUTION_IMG_SIZE
    }
  }
]
/** The size of the image */
export const VALUES_IMG_SIZE: Readonly<Dimensionable> = {
  width: 500,
  height: 500
}

/** Our values section configuration */
export const VALUES_CONFIG: ReadonlyArray<Readonly<ShowcaseProps>> = [
  {
    ...VALUES.excellence,
    image: {
      name: 'excellence.svg',
      alt: `${organizationAlt} ${VALUES.excellence.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.integrity,
    image: {
      name: 'integrity.svg',
      alt: `${organizationAlt} ${VALUES.integrity.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.innovation,
    image: {
      name: 'innovation.svg',
      alt: `${organizationAlt} ${VALUES.innovation.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.commitment,
    image: {
      name: 'commitment.svg',
      alt: `${organizationAlt} ${VALUES.commitment.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.teamwork,
    image: {
      name: 'teamwork.svg',
      alt: `${organizationAlt} ${VALUES.teamwork.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.responsability,
    image: {
      name: 'responsability.svg',
      alt: `${organizationAlt} ${VALUES.responsability.heading}`,
      ...VALUES_IMG_SIZE
    }
  },
  {
    ...VALUES.growth,
    image: {
      name: 'growth.svg',
      alt: `${organizationAlt} ${VALUES.growth.heading}`,
      ...VALUES_IMG_SIZE
    }
  }
]

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  return (
    <>
      <section className='w-full mt-24 mb-52 sm:mb-96 md:mb-6'>
        <div className='max-w-8xl mx-auto px-[4%]'>
          <div className='bg-blue-100 rounded-[30px]'>
            <div className='w-full h-16 md:h-20 px-6 flex items-center' />
            <div className='w-full pt-10 pb-28 md:pb-10 md:pt-[8%] px-10 lg:px-[9%] flex flex-col-reverse md:flex-row gap-10 md:gap-12 lg:gap-16 rounded-[30px] bg-gradient-to-t from-blue-100 via-sky-50 to-sky-50'>
              <div className='w-full md:w-1/2 h-0 lg:h-40 relative'>
                <Image
                  src='/images/sections/hero.jpg'
                  alt={organizationSlogan}
                  className='w-full h-auto absolute top-6 md:top-0 rounded-[24px] md:rounded-3xl'
                  width={620}
                  height={467}
                  priority
                />
              </div>
              <div className='w-full md:w-1/2 lg:mt-12 space-y-3'>
                <Tagline>
                  {organizationSlogan}
                </Tagline>
                <h1>
                  {description}
                </h1>
                <p className='md:hidden pt-6 md:pt-8'>
                  {heroDescription}
                </p>
              </div>
            </div>
          </div>
          <div className='hidden md:flex justify-end'>
            <p className='w-1/2 py-8 pl-8 pr-16'>
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section id='solutions' className='px-[4%] py-32 mt-32 bg-zinc-50'>
        <div className='px-10 lg:px-[9%] flex flex-col lg:flex-row gap-y-20 lg:gap-x-20'>
          <header className='md:w-xl space-y-3'>
            <Tagline>
              Nuestras soluciones
            </Tagline>
            <h2>
              D55 esta orientado a generar propuestas de valor para sus clientes. Nuestro
              ideal es convertirnos en un aliado estratégico que sea determinante en la
              rentabilidad y el éxito de sus empresas.
            </h2>
          </header>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
            {SOLUTIONS_CONFIG.map((solution, key) => (
              <Card
                heading={solution.heading}
                description={solution.description}
                image={solution.image}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>

      <About
        id='values'
        heading='En D55, nuestros valores son la brújula que guía nuestro día a día. Te presentamos los más importantes para nosotros.'
        tagline='Nuestros valores'
        showcases={VALUES_CONFIG}
      />
    </>
  )
}
