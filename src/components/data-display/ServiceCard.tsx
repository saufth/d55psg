// Components
import { ServiceCardProps } from '@/types/data-dislay'
// Types
import Image from 'next/image'

/**
* A simple service card component
* @returns The ServiceCard component
*/
export default function ServiceCard ({ heading, description, image }: ServiceCardProps) {
  const imageSrc = `/images/sections/${image}`

  return (
    <div className='w-full space-y-8'>
      <Image
        src={imageSrc}
        alt='D55PSG service image'
        className='w-full h-auto rounded-[24px] md:rounded-3xl'
        width={620}
        height={467}
      />
      <div className='space-y-4'>
        <div className='text-3xl leading-none font-bebaspro-bold md:text-4xl'>
          {heading}
        </div>
        <div className='text-primary md:text-base'>
          {description}
        </div>
      </div>
    </div>
  )
}
