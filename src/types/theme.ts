/** Application themes */
export type Theme = 'primary' | 'secondary'

/** Define a theme and it variant */
export interface Themeable {
  /** Theme property */
  theme?: Theme
}
