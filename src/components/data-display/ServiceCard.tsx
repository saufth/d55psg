// Components
import Image from 'next/image'
// Types
import type { ServiceCardProps } from '@/types/data-dislay'

/**
* A simple service card component
* @returns The ServiceCard component
*/
export default function ServiceCard ({ heading, description, image }: ServiceCardProps) {
  const imageSrc = `/images/sections/${image.name}`

  return (
    <div className='w-full space-y-8'>
      <Image
        src={imageSrc}
        alt='D55PSG service image'
        className='w-full h-auto rounded-[24px] md:rounded-3xl'
        width={image.width}
        height={image.height}
      />
      <div className='space-y-4'>
        <div className='text-3xl leading-none font-bebaspro-bold md:text-4xl'>
          {heading}
        </div>
        {description ? <div className='text-primary md:text-base'>{description}</div> : null}
      </div>
    </div>
  )
}
