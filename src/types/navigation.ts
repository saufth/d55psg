// Types
import type { List } from './data-dislay'
import type { Parent } from './layout'

/** Link properties */
export interface LinkProps extends Parent<string> {
  /** Reference to redirect */
  href: string
}

/** Used for navigation configuration */
export type Navigable = List<LinkProps>
