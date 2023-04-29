// Components
import NextLink from 'next/link'
// Config
import { THEME } from '@/modules/theme/config'
// Types
import type { LinkButtonProps } from '@/types/navigation'
// Styles
import styles from '@/styles/Button.module.css'

/**
 * A simple themeable link button for navigation
 * @see {@link LinkButtonProps} for props specification
 * @param LinkButtonProps The component props
 * @returns The LinkButton component
 * @default theme 'primary'
 */
export default function LinkButton ({ children, href, theme = THEME.primary }: LinkButtonProps) {
  const themeStyle = theme === THEME.secondary ? styles.btn__secondary : styles.btn__primary
  const btnStyle = `${styles.btn} ${themeStyle}`

  return (
    <NextLink href={href}>
      <div className={btnStyle}>
        {children}
      </div>
    </NextLink>
  )
}
