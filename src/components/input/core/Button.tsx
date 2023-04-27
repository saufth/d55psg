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
export default function Button ({ children, action, type, theme = THEME.primary }: ButtonProps) {
  const themeStyle = theme === THEME.primary ? styles.btn__primary : styles.btn__secondary
  const btnStyle = `${styles.btn} ${themeStyle}`

  return (
    <button onClick={action} type={type}>
      <div className={btnStyle}>
        {children}
      </div>
    </button>
  )
}
