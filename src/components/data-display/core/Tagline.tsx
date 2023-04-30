// Types
import type { Parent } from '@/types/layout'

/** A simple tagline component */
export default function Tagline ({ children }: Parent<string>) {
  return (
    <p className='text-sky-700 text-[18px]'>
      {children}
    </p>
  )
}
