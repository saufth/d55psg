// Types
import type { Parent } from '@/types/layout'

/** A simple label component */
export default function Label ({ children }: Parent<string>) {
  return (
    <p className='text-sky-700 text-[18px]'>
      {children}
    </p>
  )
}
