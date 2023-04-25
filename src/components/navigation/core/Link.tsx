// Components
import NextLink from 'next/link'
// Types
import type { LinkProps } from '@/types/navigation'

/**
 * A simple link using for navigation
 * @returns The Link component
 */
const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink
      className='hidden md:block font-unineue-bold text-sm text-zinc-800 hover:text-primary transition-colors'
      href={href}
    >
      {children}
    </NextLink>
  )
}

export default Link
