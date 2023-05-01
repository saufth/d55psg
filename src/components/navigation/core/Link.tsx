// Components
import NextLink from 'next/link'
// Config
import { SIZES } from '@/modules/sizing/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { LinkProps } from '@/types/navigation'
import { SizeStyleConfig } from '@/types/sizing'
import { ThemeStyleConfig } from '@/types/theme'

/** The link size style configuration */
const linkSizeStyles: SizeStyleConfig = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-xl'
}

/** The link theme style configuration */
const linkThemeStyles: ThemeStyleConfig = {
  primary: 'text-sky-700 hover:text-sky-500',
  secondary: 'text-zinc-700 hover:text-sky-500'
}

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
