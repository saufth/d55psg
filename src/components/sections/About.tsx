// Components
import Label from '../data-display/Label'
import Showcase from '../data-display/Showcase'
// Types
import type { AboutProps } from '@/types/sections'

/**
 * A section using for show cases about something
 * @see {@link AboutProps} for props specifications
 * @param AboutProps About section component props
 * @returns About section component
 */
export default function About ({ id, heading, description, showcases }: AboutProps) {
  return (
    <section id={id} className='max-w-8xl px-[5%] mx-auto py-32'>
      <div className='px-10 lg:px-[9%]'>
        <header className='space-y-2'>
          {description ? <Label>{description}</Label> : null}
          <h2>{heading}</h2>
        </header>
        <div className='mt-24 md:mt-36 space-y-20 md:space-y-32'>
          {showcases.map((showcase, key) => (
            <Showcase
              heading={showcase.heading}
              description={showcase.description}
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
