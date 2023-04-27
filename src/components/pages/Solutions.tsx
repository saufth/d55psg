// Components
import ServiceCard from '@/components/data-display/ServiceCard'
import { ServiceCardProps } from '@/types/data-dislay'

/** Hero description */
const services: Readonly<ServiceCardProps[]> = Object.freeze([
  {
    heading: 'Consultoría y asesoría de negocios',
    description: 'Ofrecemos servicios de consultoría y asesoría empresarial para ayudarte a optimizar la estrategia de tu negocio, mejorar la eficiencia operativa y desarrollar soluciones innovadoras que te permitan crecer y prosperar en el mercado.',
    image: 'consulting.jpg'
  },
  {
    heading: 'Planeación y desarrollo de modelos de negocio',
    description: 'Nuestros servicios de planeación y desarrollo de modelos de negocio te ayudarán a definir tu propuesta de valor, identificar oportunidades de mercado y diseñar un modelo de negocio efectivo y sostenible que te permita alcanzar tus objetivos empresariales.',
    image: 'business-model.jpg'
  },
  {
    heading: 'Planeación y desarrollo de estrategias de negocio',
    description: 'Ofrecemos servicios de planeación y desarrollo de estrategias empresariales que te ayudarán a definir tus objetivos, identificar oportunidades y desarrollar planes de acción concretos para lograr el éxito en el mercado.',
    image: 'business-strategy.jpg'
  },
  {
    heading: 'Coaching empresarial',
    description: 'Nuestros servicios de coaching empresarial te brindarán el apoyo y la orientación personalizada que necesitas para mejorar tus habilidades de liderazgo, gestión y toma de decisiones, y ayudarte a lograr tus objetivos empresariales.',
    image: 'coaching.jpg'
  },
  {
    heading: 'Investigación estratégica de mercado',
    description: 'Ofrecemos servicios de investigación de mercado personalizados para ayudarte a comprender mejor a tus clientes, identificar oportunidades de mercado y desarrollar estrategias de marketing efectivas.',
    image: 'market-study.jpg'
  },
  {
    heading: 'Segunda opinión experta',
    description: 'Nuestros servicios de segunda opinión experta te proporcionarán una evaluación independiente y objetiva de cualquier aspecto de tu negocio, ayudándote a validar o cuestionar decisiones importantes y a tomar medidas efectivas para optimizar el rendimiento empresarial.',
    image: 'second-opinion.jpg'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </header>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
          {services.map((service, key) => (
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
