// Components
import Image from 'next/image'
import Label from '../data-display/Label'
// Config
import { organization, description } from '@/modules/app/config'

/** Hero description */
const heroDescription = 'Desarrollamos estrategias y tácticas productivas y autosustentables a corto, mediano y largo plazo.'
/** Hero image alternative info */
const imageHeroAlt = `${organization} hero image`

/**
* The hero section component
* @returns The Hero component
*/
export default function Hero () {
  return (
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
              <Label>
                D55 Professional Services Group
              </Label>
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
  )
}
