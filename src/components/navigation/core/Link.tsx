// Components
import NextLink from 'next/link'
// Types
import type { LinkProps } from '@/types/navigation'

/**
 * A simple link for navigation
 * @returns The Link component
 */
export default function Link ({ children, href }: LinkProps) {
  return (
    <NextLink
      className='font-unineue-bold text-sm text-zinc-800 hover:text-primary transition-colors'
      href={href}
    >
      {children}
    </NextLink>
  )
}
