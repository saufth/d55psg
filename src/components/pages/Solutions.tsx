// Components
import ServiceCard from '../data-display/ServiceCard'
import Label from '../data-display/Label'
// Config
import { SERVICES, organization } from '@/modules/app/config'
// Types
import type { Dimensionable } from '@/types/sizing'
import type { ServiceCardProps } from '@/types/data-dislay'

/** The size of the image */
const IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 620,
  height: 467
})

/** Hero description */
const SERVICES_CONFIG: Readonly<ServiceCardProps[]> = Object.freeze([
  {
    heading: SERVICES.consulting.heading,
    description: SERVICES.consulting.description,
    image: {
      name: 'consulting.jpg',
      alt: `${organization} ${SERVICES.consulting.heading}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERVICES.model.heading,
    description: SERVICES.model.description,
    image: {
      name: 'business-model.jpg',
      alt: `${organization} ${SERVICES.model.heading}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERVICES.strategy.heading,
    description: SERVICES.strategy.description,
    image: {
      name: 'business-strategy.jpg',
      alt: `${organization} ${SERVICES.strategy.heading}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERVICES.coaching.heading,
    description: SERVICES.coaching.description,
    image: {
      name: 'coaching.jpg',
      alt: `${organization} ${SERVICES.coaching.heading}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERVICES.study.heading,
    description: SERVICES.study.description,
    image: {
      name: 'market-study.jpg',
      alt: `${organization} ${SERVICES.study.heading}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERVICES.opinion.heading,
    description: SERVICES.opinion.description,
    image: {
      name: 'second-opinion.jpg',
      alt: `${organization} ${SERVICES.opinion.heading}`,
      ...IMG_SIZE
    }
  }
])

/**
* The solutions section component
* @returns The Solutions component
*/
export default function Solutions () {
  return (
    <section id='solutions' className='px-[4%] py-32 mt-32 bg-zinc-50'>
      <div className='px-10 lg:px-[9%] flex flex-col lg:flex-row gap-y-20 lg:gap-x-20'>
        <header className='md:w-xl space-y-2'>
          <Label>
            Nuestras soluciones
          </Label>
          <h2>
            D55 esta orientado a generar propuestas de valor para sus clientes. Nuestro ideal es
            convertirnos en un aliado estratégico que sea determinante en la rentabilidad y el
            éxito de sus empresas.
          </h2>
        </header>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
          {SERVICES_CONFIG.map((service, key) => (
            <ServiceCard
              heading={service.heading}
              description={service.description}
              image={service.image}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
