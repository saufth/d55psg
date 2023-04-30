// Components
import About from '@/components/sections/About'
import Tagline from '@/components/data-display/core/Tagline'
import Image from 'next/image'
import ServiceCard from '@/components/data-display/ServiceCard'
// Config
import { description } from '@/modules/app/config'
import {
  SOLUTIONS_CONFIG,
  VALUES_CONFIG,
  heroDescription,
  imageHeroAlt
} from '@/modules/pages/config/home'

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
                  alt={imageHeroAlt}
                  className='w-full h-auto absolute top-6 md:top-0 rounded-[24px] md:rounded-3xl'
                  width={620}
                  height={467}
                  priority
                />
              </div>
              <div className='w-full md:w-1/2 lg:mt-12 space-y-3'>
                <Tagline>
                  D55 Professional Services Group
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
          <header className='md:w-xl space-y-2'>
            <Tagline>
              Nuestras soluciones
            </Tagline>
            <h2>
              D55 esta orientado a generar propuestas de valor para sus clientes. Nuestro ideal es
              convertirnos en un aliado estratégico que sea determinante en la rentabilidad y el
              éxito de sus empresas.
            </h2>
          </header>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
            {SOLUTIONS_CONFIG.map((solution, key) => (
              <ServiceCard
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
        description='Nuestros valores'
        showcases={VALUES_CONFIG}
      />
    </>
  )
}
