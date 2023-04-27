// Config
import { THEME } from '@/modules/theme/config'
// Types
import type { ButtonProps } from '@/types/input'
// Styles
import styles from '@/styles/Button.module.css'

/**
 * A simple themeable button
 * @see {@link ButtonProps} for props specification
 * @param ButtonProps The component props
 * @returns The Button component
 */
export default function Button ({ children, action, theme = THEME.primary }: ButtonProps) {
  const themeStyle = theme === THEME.secondary ? styles.btn__secondary : styles.btn__primary
  const btnStyle = `${styles.btn} ${themeStyle}`

  return (
    <button className={btnStyle} onClick={action}>
      {children}
    </button>
  )
}
