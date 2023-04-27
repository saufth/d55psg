// Components
import ServiceCard from '@/components/data-display/ServiceCard'
import { ServiceCardProps } from '@/types/data-dislay'
// Config
import { organization } from '@/modules/app/config'
// Types
import type { Dimensionable } from '@/types/sizing'

/** The size of the image */
const IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 620,
  height: 467
})

const SERV_HEADINGS = Object.freeze({
  consulting: 'Consultoría y asesoría de negocios',
  model: 'Planeación y desarrollo de modelos de negocio',
  strategy: 'Planeación y desarrollo de estrategias de negocio',
  coaching: 'Coaching empresarial',
  study: 'Investigación estratégica de mercado',
  opinion: 'Segunda opinión experta'
})

/** Hero description */
const SERVICES: Readonly<ServiceCardProps[]> = Object.freeze([
  {
    heading: SERV_HEADINGS.consulting,
    description: 'Ofrecemos servicios de consultoría y asesoría empresarial para ayudarte a optimizar la estrategia de tu negocio, mejorar la eficiencia operativa y desarrollar soluciones innovadoras que te permitan crecer y prosperar en el mercado.',
    image: {
      name: 'consulting.jpg',
      alt: `${organization} ${SERV_HEADINGS.consulting}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERV_HEADINGS.model,
    description: 'Nuestros servicios de planeación y desarrollo de modelos de negocio te ayudarán a definir tu propuesta de valor, identificar oportunidades de mercado y diseñar un modelo de negocio efectivo y sostenible que te permita alcanzar tus objetivos empresariales.',
    image: {
      name: 'business-model.jpg',
      alt: `${organization} ${SERV_HEADINGS.model}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERV_HEADINGS.strategy,
    description: 'Ofrecemos servicios de planeación y desarrollo de estrategias empresariales que te ayudarán a definir tus objetivos, identificar oportunidades y desarrollar planes de acción concretos para lograr el éxito en el mercado.',
    image: {
      name: 'business-strategy.jpg',
      alt: `${organization} ${SERV_HEADINGS.strategy}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERV_HEADINGS.coaching,
    description: 'Nuestros servicios de coaching empresarial te brindarán el apoyo y la orientación personalizada que necesitas para mejorar tus habilidades de liderazgo, gestión y toma de decisiones, y ayudarte a lograr tus objetivos empresariales.',
    image: {
      name: 'coaching.jpg',
      alt: `${organization} ${SERV_HEADINGS.coaching}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERV_HEADINGS.study,
    description: 'Ofrecemos servicios de investigación de mercado personalizados para ayudarte a comprender mejor a tus clientes, identificar oportunidades de mercado y desarrollar estrategias de marketing efectivas.',
    image: {
      name: 'market-study.jpg',
      alt: `${organization} ${SERV_HEADINGS.study}`,
      ...IMG_SIZE
    }
  },
  {
    heading: SERV_HEADINGS.opinion,
    description: 'Nuestros servicios de segunda opinión experta te proporcionarán una evaluación independiente y objetiva de cualquier aspecto de tu negocio, ayudándote a validar o cuestionar decisiones importantes y a tomar medidas efectivas para optimizar el rendimiento empresarial.',
    image: {
      name: 'second-opinion.jpg',
      alt: `${organization} ${SERV_HEADINGS.opinion}`,
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
          <p className='text-sky-700'>
            Nuestras soluciones
          </p>
          <h2>
            Nuestras soluciones están orientadas a generar valor mientras nos convertimos en
            un aliado estratégico que determine la rentabilidad y el éxito de las empresas de
            nuestros clientes.
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
