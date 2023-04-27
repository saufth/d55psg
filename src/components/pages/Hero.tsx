// Components
import Image from 'next/image'

/** Hero description */
const description = 'Desarrollamos estrategias y tacticas productivas y autosustentables a corto, mediano y largo plazo.'
/**
* The hero section component
* @returns The Hero component
*/
export default function Hero () {
  return (
    <section className='w-full px-[4%] mt-24 mb-52 sm:mb-96 md:mb-6'>
      <div className='max-w-9xl my-0 mx-auto bg-blue-100 rounded-[30px]'>
        <div className='w-full h-16 md:h-20 px-6 flex items-center' />
        <div className='w-full pt-10 pb-28 md:pb-10 md:pt-[8%] px-10 lg:px-[9%] flex flex-col-reverse md:flex-row gap-10 md:gap-12 lg:gap-16 rounded-[30px] bg-gradient-to-t from-blue-100 via-sky-50 to-sky-50'>
          <div className='w-full md:w-1/2 h-0 lg:h-40 relative'>
            <Image
              src='/images/sections/hero.jpg'
              alt='D55PSG hero image'
              className='w-full h-auto absolute top-6 md:top-0 rounded-[24px] md:rounded-3xl'
              width={620}
              height={467}
              priority
            />
            <div className='w-10 md:w-12 h-10 md:h-12 absolute md:-top-6 right-16 rotate-45 bg-primary/30 backdrop-filter backdrop-blur-lg z-20 rounded-2xl' />
            <div className='w-12 md:w-16 h-12 md:h-16 absolute -bottom-44 md:-bottom-24 -left-6 md:-left-10 rotate-12 bg-primary/30 backdrop-filter backdrop-blur-lg z-20 rounded-2xl' />
          </div>
          <div className='w-full md:w-1/2 lg:mt-12 space-y-3'>
            <p className='text-sky-700'>
              D55 Professional Services Group
            </p>
            <h1>
              Escala tu empresa al siguiente nivel con estrategias y tacticas innovadoras.
            </h1>
            <p className='md:hidden pt-6 md:pt-8'>
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className='hidden md:flex justify-end'>
        <p className='w-1/2 py-8 pl-8 pr-16'>
          {description}
        </p>
      </div>
    </section>
  )
}
