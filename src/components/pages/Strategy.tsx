// Components
import About from '@/components/sections/About'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

const showcases: ShowcaseProps[] = [
  {
    heading: 'Excelencia',
    descriptions: ['Nos esforzamos por alcanzar la excelencia en todo lo que hacemos, desde la calidad de nuestro trabajo hasta el servicio al cliente.'],
    image: 'excellence.svg'
  },
  {
    heading: 'Integridad',
    descriptions: ['Actuamos con honestidad y ética en todas las relaciones comerciales y personales.'],
    image: 'integrity.svg'
  },
  {
    heading: 'Innovación',
    descriptions: ['Buscamos constantemente nuevas soluciones y métodos creativos para superar los desafíos y las expectativas del mercado.'],
    image: 'innovation.svg'
  },
  {
    heading: 'Compromiso con el cliente',
    descriptions: ['Estamos dedicados a proporcionar el mejor servicio posible a nuestros clientes, ofreciendo soluciones personalizadas y orientadas a resultados.'],
    image: 'commitment.svg'
  },
  {
    heading: 'Trabajo en equipo',
    descriptions: ['Valoramos y respetamos las contribuciones de cada miembro del equipo, trabajando juntos para alcanzar objetivos compartidos.'],
    image: 'teamwork.svg'
  },
  {
    heading: 'Responsabilidad social',
    descriptions: ['Nos preocupamos por el impacto ambiental y social de nuestras operaciones y nos comprometemos a ser una empresa socialmente responsable.'],
    image: 'responsability.svg'
  },
  {
    heading: 'Crecimiento personal y profesional',
    descriptions: ['Nos comprometemos a proporcionar un ambiente de trabajo que promueva el crecimiento personal y profesional de nuestros empleados.'],
    image: 'growth.svg'
  }
]

/**
* The Strategy section of the application
* @returns The Strategy component
*/
export default function Strategy () {
  return (
    <>
      <About
        id='strategy'
        heading='En D55PSG, nuestros valores son fundamentales'
        description='Nuestra estrategia'
        showcases={showcases}
      />
    </>
  )
}
