// Components
import NextLink from 'next/link'
// Config
import { THEME } from '@/modules/theme/config'
// Types
import type { LinkProps } from '@/types/navigation'
import type { Themeable } from '@/types/theme'
// Styles
import styles from '@/styles/Button.module.css'

/** The link button component properties */
interface LinkButtonProps extends LinkProps, Themeable {}

/**
 * A simple themeable link button for navigation
 * @see {@link LinkButtonProps} for props specification
 * @param LinkButtonProps The component props
 * @returns The LinkButton component
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
