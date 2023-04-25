// Components
import Image from 'next/image'

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage() {
  return (
    <>
      <div className='w-full px-[5%] mt-24 mb-24 md:mb-6'>
        <div className='w-full rounded-[30px] bg-blue-100'>
          <div className='w-full h-16 md:h-20 px-6 flex items-center'>
            Loem ipsum
          </div>
          <div className='max-w-9xl pt-10 pb-44 md:pb-10 md:pt-[8%] px-10 lg:px-[9%] flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-16 rounded-[30px] bg-gradient-to-t from-slate-200 via-blue-50 to-blue-50'>
            <div className='w-full md:w-1/2 h-full relative'>
              <Image
                src='/images/hero.jpg'
                alt='D55PSG hero image'
                className='w-full h-auto absolute top-8 md:-top-28 rounded-[24px] md:rounded-2xl'
                width={620}
                height={467}
                priority
              />
            </div>
            <div className='w-full md:w-1/2 mt-4 space-y-2'>
              <div className='text-blue-600'>
                Profrsional Service Group
              </div>
              <h1>
                Scale strategically with enterprise consulting and advisory services for world’s leading brands
              </h1>
              <div className='md:hidden pt-6 md:pt-8 text-primary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, cumque earum similique optio tenetur magni error excepturi accusantium voluptatem hic fugit quibusdam incidunt velit ex commodi nostrum aspernatur consequatur dicta.
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:flex justify-end'>
          <div className='w-1/2 py-8 pl-8 pr-16 text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, cumque earum similique optio tenetur magni error excepturi accusantium voluptatem hic fugit quibusdam incidunt velit ex commodi nostrum aspernatur consequatur dicta.
          </div>
        </div>
      </div>
    </>
  )
}
