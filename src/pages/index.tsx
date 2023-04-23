// Components
import Image from 'next/image'

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage() {
  return (
    <div className='w-full h-screen grid place-content-center'>
      <Image
        src='/images/d55psg-logo.svg'
        alt='D55PSG logotype'
        className='w-56 md:w-80'
        width={320}
        height={141.5}
      />
    </div>
  )
}
