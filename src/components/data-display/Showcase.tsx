// Types
import type { ShowcaseProps } from '@/types/data-dislay'
import Image from 'next/image'

/**
 * Using to show a image with a heading and descriptions
 * @see {@link ShowcaseProps} for props specifications
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase (
  {
    heading,
    descriptions,
    image,
    reverse
  }: ShowcaseProps
) {
  const containerReverseStyle = reverse ? 'md:flex-row-reverse' : ''
  const imageSrc = `/images/sections/${image}`

  return (
    <div className={`h-auto md:h-sm flex flex-col-reverse md:flex-row md:gap-x-20 gap-y-5 md:gap-y-0 ${containerReverseStyle}`}>
      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full h-full flex flex-col md:justify-center gap-y-4'>
          <div className='space-y-2 text-center md:text-left'>
            <h3 className='text-sky-700'>
              {heading}
            </h3>
            <div className='space-y-3 sm:space-y-4'>
              {descriptions.map((description, key) => (
                <p className='text-base md:text-lg' key={key}>
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full'>
          <Image
            src={imageSrc}
            alt='D55PSG service image'
            className='w-full h-auto rounded-[24px] md:rounded-3xl'
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  )
}
