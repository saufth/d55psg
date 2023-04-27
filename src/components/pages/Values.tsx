// Components
import About from '@/components/sections/About'
// Config
import { organization } from '@/modules/app/config'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'
import type{ Dimensionable } from '@/types/sizing'

/** The size of the image */
const IMG_SIZE: Readonly<Dimensionable> = Object.freeze({
  width: 500,
  height: 500
})

/** Our values section configuration */
const VALUES: Readonly<ShowcaseProps[]> = Object.freeze([
  {
    heading: 'Excelencia',
    description: 'Nos esforzamos por alcanzar la excelencia en todo lo que hacemos, desde la calidad de nuestro trabajo hasta el servicio al cliente.',
    image: {
      name: 'excellence.svg',
      alt: `${organization} Excelencia`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Integridad',
    description: 'Actuamos con honestidad y ética en todas las relaciones comerciales y personales.',
    image: {
      name: 'integrity.svg',
      alt: `${organization} Integridad`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Innovación',
    description: 'Buscamos constantemente nuevas soluciones y métodos creativos para superar los desafíos y las expectativas del mercado.',
    image: {
      name: 'innovation.svg',
      alt: `${organization} Innovación`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Compromiso con el cliente',
    description: 'Estamos dedicados a proporcionar el mejor servicio posible a nuestros clientes, ofreciendo soluciones personalizadas y orientadas a resultados.',
    image: {
      name: 'commitment.svg',
      alt: `${organization} Compromiso con el cliente`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Trabajo en equipo',
    description: 'Valoramos y respetamos las contribuciones de cada miembro del equipo, trabajando juntos para alcanzar objetivos compartidos.',
    image: {
      name: 'teamwork.svg',
      alt: `${organization} Trabajo en equipo`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Responsabilidad social',
    description: 'Nos preocupamos por el impacto ambiental y social de nuestras operaciones y nos comprometemos a ser una empresa socialmente responsable.',
    image: {
      name: 'responsability.svg',
      alt: `${organization} Responsabilidad social`,
      ...IMG_SIZE
    }
  },
  {
    heading: 'Crecimiento personal y profesional',
    description: 'Nos comprometemos a proporcionar un ambiente de trabajo que promueva el crecimiento personal y profesional de nuestros empleados.',
    image: {
      name: 'growth.svg',
      alt: `${organization} Crecimiento personal y profesional`,
      ...IMG_SIZE
    }
  }
])

/**
* The Values section of the application
* @returns The Values component
*/
export default function Values () {
  return (
    <>
      <About
        id='values'
        heading='En D55, nuestros valores son la brújula que guía nuestro día a día. Te presentamos los más importantes para nosotros.'
        showcases={VALUES}
      />
    </>
  )
}