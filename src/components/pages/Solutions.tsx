// Components
import ServiceCard from '@/components/data-display/ServiceCard'

/** Hero description */
const services = Object.freeze([
  {
    heading: 'Consultoría y asesoría de negocios',
    description: 'Ofrecemos servicios de consultoría y asesoría empresarial para ayudarte a optimizar la estrategia de tu negocio, mejorar la eficiencia operativa y desarrollar soluciones innovadoras que te permitan crecer y prosperar en el mercado.'
  },
  {
    heading: 'Planeación y desarrollo de modelos de negocio',
    description: 'Nuestros servicios de planeación y desarrollo de modelos de negocio te ayudarán a definir tu propuesta de valor, identificar oportunidades de mercado y diseñar un modelo de negocio efectivo y sostenible que te permita alcanzar tus objetivos empresariales.'
  },
  {
    heading: 'Planeación y desarrollo de estrategias de negocio',
    description: 'Ofrecemos servicios de planeación y desarrollo de estrategias empresariales que te ayudarán a definir tus objetivos, identificar oportunidades y desarrollar planes de acción concretos para lograr el éxito en el mercado.'
  },
  {
    heading: 'Coaching empresarial',
    description: 'Nuestros servicios de coaching empresarial te brindarán el apoyo y la orientación personalizada que necesitas para mejorar tus habilidades de liderazgo, gestión y toma de decisiones, y ayudarte a lograr tus objetivos empresariales.'
  },
  {
    heading: 'Investigación estratégica de mercado',
    description: 'Ofrecemos servicios de investigación de mercado personalizados para ayudarte a comprender mejor a tus clientes, identificar oportunidades de mercado y desarrollar estrategias de marketing efectivas.'
  },
  {
    heading: 'Segunda opinión experta',
    description: 'Nuestros servicios de segunda opinión experta te proporcionarán una evaluación independiente y objetiva de cualquier aspecto de tu negocio, ayudándote a validar o cuestionar decisiones importantes y a tomar medidas efectivas para optimizar el rendimiento empresarial.'
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
        <div className='md:w-xl space-y-2'>
          <p className='text-sky-700'>
            Nuestras soluciones
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
          {services.map(({ heading, description }, key) => (
            <ServiceCard heading={heading} description={description} key={key} />
          ))}
        </div>
      </div>
    </section>
  )
}
