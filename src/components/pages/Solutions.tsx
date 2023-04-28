// Components
import ServiceCard from '../data-display/ServiceCard'
import Label from '../data-display/Label'
// Config
import { organization } from '@/modules/app/config'
// Types
import type { Dimensionable } from '@/types/sizing'
import type { ServiceCardProps } from '@/types/data-dislay'

/** The size of the image */
const IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 620,
  height: 467
})

const HEADINGS = Object.freeze({
  consulting: 'Consultoría en estrategias de negocios',
  model: 'Desarrollo de modelos de negocio',
  strategy: 'Planeación y desarrollo de estrategias de negocio',
  coaching: 'Coaching empresarial',
  study: 'Investigación estratégica de mercado',
  opinion: 'Segunda opinión experta'
})

/** Hero description */
const SERVICES: Readonly<ServiceCardProps[]> = Object.freeze([
  {
    heading: HEADINGS.consulting,
    description: 'Nuestro servicio de consultoria en estrategias de negocio está diseñado para facilitar el alcance de ese objetivo deseado de forma más eficiente y productiva posible en pro de tu empresa.',
    image: {
      name: 'consulting.jpg',
      alt: `${organization} ${HEADINGS.consulting}`,
      ...IMG_SIZE
    }
  },
  {
    heading: HEADINGS.model,
    description: 'Nuestro servicio de desarrollo de modelos de negocio te ayudará a definir propuestas de valor efectivas y sostenibles que te permitan distinguirte dentro del mercado.',
    image: {
      name: 'business-model.jpg',
      alt: `${organization} ${HEADINGS.model}`,
      ...IMG_SIZE
    }
  },
  {
    heading: HEADINGS.strategy,
    description: 'Ofrecemos servicios de planeación y desarrollo de estrategias empresariales que te ayudarán a definir tus objetivos, identificar oportunidades y desarrollar planes de acción concretos para lograr el éxito en el mercado.',
    image: {
      name: 'business-strategy.jpg',
      alt: `${organization} ${HEADINGS.strategy}`,
      ...IMG_SIZE
    }
  },
  {
    heading: HEADINGS.coaching,
    description: 'Nuestros servicios de coaching empresarial te brindarán el apoyo y la orientación personalizada que necesitas para mejorar tus habilidades de liderazgo, gestión y toma de decisiones, y ayudarte a lograr tus objetivos empresariales.',
    image: {
      name: 'coaching.jpg',
      alt: `${organization} ${HEADINGS.coaching}`,
      ...IMG_SIZE
    }
  },
  {
    heading: HEADINGS.study,
    description: 'Ofrecemos servicios de investigación de mercado personalizados para ayudarte a comprender mejor a tus clientes, identificar oportunidades de mercado y desarrollar estrategias de marketing efectivas.',
    image: {
      name: 'market-study.jpg',
      alt: `${organization} ${HEADINGS.study}`,
      ...IMG_SIZE
    }
  },
  {
    heading: HEADINGS.opinion,
    description: 'Nuestros servicios de segunda opinión experta te proporcionarán una evaluación independiente y objetiva de cualquier aspecto de tu negocio, ayudándote a validar o cuestionar decisiones importantes y a tomar medidas efectivas para optimizar el rendimiento empresarial.',
    image: {
      name: 'second-opinion.jpg',
      alt: `${organization} ${HEADINGS.opinion}`,
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
          {SERVICES.map((service, key) => (
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
