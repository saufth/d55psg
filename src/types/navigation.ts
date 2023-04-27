import { Parent } from './layout'

/** Link properties */
export interface LinkProps extends Parent<string> {
  /** Reference to redirect */
  href: string
}

/** Used for navigation configuration */
export interface Navigable {
  /** Navigation section properties */
  [key: string]: LinkProps
}
