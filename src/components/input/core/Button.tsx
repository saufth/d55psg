// Config
import { THEME } from '@/modules/theme/config'
// Types
import type { Actionable } from '@/types/input'
import type { Parent } from '@/types/layout'
import type { Themeable } from '@/types/theme'
// Styles
import styles from '@/styles/Button.module.css'

/** The link button component properties */
interface ButtonProps extends Parent<string>, Actionable, Themeable {}

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
    <button onClick={action}>
      <div className={btnStyle}>
        {children}
      </div>
    </button>
  )
}
