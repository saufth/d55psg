// Components
import Image from 'next/image'
// Types
import type { CardProps } from '@/types/data-dislay'

/**
 * A simple card component
 * @see {@link CardProps} for props specification
 * @param CardProps The component props
 * @returns The Card component
 */
export default function Card ({ heading, description, image }: CardProps) {
  const imageSrc = `/images/sections/${image.name}`

  return (
    <div className='w-full space-y-8'>
      <Image
        src={imageSrc}
        alt={image.alt}
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
