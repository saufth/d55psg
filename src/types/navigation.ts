import { Parent } from './layout'

/** Link properties */
export interface LinkProps extends Parent<string> {
  /** Reference to redirect */
  href: string
}
