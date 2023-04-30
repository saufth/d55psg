// Components
import Image from 'next/image'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

/**
 * Used to show a image with a header
 * @see {@link ShowcaseProps} for props specifications
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase ({ heading, description, image, reverse }: ShowcaseProps) {
  const containerReverseStyle = reverse ? 'md:flex-row-reverse' : ''
  const imageSrc = `/images/sections/${image.name}`

  return (
    <article className={`h-auto md:h-sm flex flex-col-reverse md:flex-row md:gap-x-20 gap-y-5 md:gap-y-0 ${containerReverseStyle}`}>
      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full h-full flex flex-col md:justify-center gap-y-4'>
          <header className='space-y-2 text-center md:text-left'>
            <h3 className='text-sky-700'>
              {heading}
            </h3>
            {description ? <p className='text-base md:text-lg'>{description}</p> : null}
          </header>
        </div>
      </div>

      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full'>
          <Image
            src={imageSrc}
            alt={image.alt}
            className='w-full h-auto rounded-[24px] md:rounded-3xl'
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </article>
  )
}
