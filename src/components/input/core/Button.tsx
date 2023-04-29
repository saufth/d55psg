// Config
import { BUTTON_TYPES } from '@/modules/input/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { ButtonProps } from '@/types/input'
// Styles
import styles from '@/styles/Button.module.css'

/**
 * A simple themeable button component
 * @see {@link ButtonProps} for props specification
 * @param ButtonProps The component props
 * @returns The Button component
 * @default type 'button'
 * @default theme 'primary'
 */
export default function Button ({
  children,
  action,
  type = BUTTON_TYPES.button,
  theme = THEME.primary
}: ButtonProps) {
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
