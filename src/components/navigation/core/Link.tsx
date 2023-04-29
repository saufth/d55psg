// Components
import NextLink from 'next/link'
// Config
import { SIZES } from '@/modules/sizing/hooks/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { LinkProps } from '@/types/navigation'

/** The link size styles configuration */
const linkSizeStyles = Object.freeze({
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-md'
})

/** The link theme styles configuration */
const linkThemeStyles = Object.freeze({
  primary: 'text-sky-700 hover:text-sky-500',
  secondary: 'text-zinc-700 hover:text-zinc-500'
})

/**
 * A simple link component for navigation
 * @see {@link LinkProps} for props specification
 * @param LinkProps The component props
 * @returns The Link component
 *
 * @default size 'md'
 * @default theme 'primary'
 */
export default function Link ({
  children,
  href,
  target,
  rel,
  size = SIZES.md,
  theme = THEME.primary,
  underline
}: LinkProps) {
  const sizeStyle = linkSizeStyles[size]
  const themeStyle = linkThemeStyles[theme]
  const textStyle = underline ? 'underline' : ''
  const linkStyle = `font-unineue-bold transition-colors ${sizeStyle} ${themeStyle} ${textStyle}`

  return (
    <NextLink
      className={linkStyle}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </NextLink>
  )
}
