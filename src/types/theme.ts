import type { Size } from './sizing'

/** Application themes */
export type Theme = 'primary' | 'secondary'

/** Aplication theme variants */
export type ThemeVariant = 'simple' | 'filled' | 'outlined'

/** Define a theme and it variant */
export interface Themeable {
  /** Theme property */
  theme?: Theme
  /** Variant property */
  variant?: ThemeVariant
  /** Size property */
  size?: Size
}
