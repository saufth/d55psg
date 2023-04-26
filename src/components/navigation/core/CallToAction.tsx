// Components
import NextLink from 'next/link'
// Config
import { NAV } from '@/modules/navigation/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { Themeable } from '@/types/theme'
// Styles
import styles from '@/styles/Button.module.css'

/**
 * The primary call to actions of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
export default function CallToAction ({ theme = THEME.primary }: Themeable) {
  const themeStyle = theme === THEME.secondary ? styles.btn__secondary : styles.btn__primary
  const btnStyle = `${styles.btn} ${themeStyle}`

  return (
    <NextLink href={NAV.contact.href}>
      <div className={btnStyle}>
        {NAV.contact.children}
      </div>
    </NextLink>
  )
}
