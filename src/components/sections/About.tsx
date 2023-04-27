// Components
import Showcase from '../data-display/Showcase'
// Types
import type { HeaderProps, ShowcaseProps } from '@/types/data-dislay'

/** About component props */
export interface AboutProps extends HeaderProps {
  /** Section id */
  id?: string
  /** Section showcases */
  showcases: ShowcaseProps[]
}

/**
 * A section using for show cases about something
 * @see {@link AboutProps} for props specifications
 * @param AboutProps About section component props
 * @returns About section component
 */
export default function About ({ id, heading, description, showcases }: AboutProps) {
  return (
    <section id={id} className='max-w-9xl px-[5%] mx-auto py-32'>
      <div className='px-10 lg:px-[9%]'>
        <header className='space-y-2'>
          <p className='text-sky-700'>
            {description ? <p>{description}</p> : null}
          </p>
          <h2>{heading}</h2>
        </header>
        <div className='mt-24 md:mt-36 space-y-20 md:space-y-32'>
          {showcases.map((showcase, key) => (
            <Showcase
              heading={showcase.heading}
              descriptions={showcase.descriptions}
              image={showcase.image}
              reverse={key % 2 !== 0}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
