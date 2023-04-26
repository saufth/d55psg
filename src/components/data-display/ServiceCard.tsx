// Components
import Image from 'next/image'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/**
* A simple service card component
* @returns The ServiceCard component
*/
export default function ServiceCard ({ heading, description }: HeaderProps) {
  return (
    <div className='w-full space-y-8'>
      <Image
        src='/images/sections/hero.jpg'
        alt='D55PSG service image'
        className='w-full h-auto rounded-[24px] md:rounded-3xl'
        width={620}
        height={467}
      />
      <div className='space-y-4'>
        <div className='font-bebaspro-bold text-3xl md:text-4xl leading-none'>
          {heading}
        </div>
        <div className='text-primary md:text-base'>
          {description}
        </div>
      </div>
    </div>
  )
}
