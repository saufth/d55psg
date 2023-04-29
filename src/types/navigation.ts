// Types
import type { Actionable } from './input'
import type { List } from './data-dislay'
import type { Parent } from './layout'
import type { Themeable } from './theme'

/** Link properties */
export interface LinkProps extends Parent<string> {
  /** Reference to redirect */
  href: string
}

/** Used for navigation configuration */
export type Navigable = List<LinkProps>

/** The link button component properties */
export interface LinkButtonProps extends LinkProps, Themeable {}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
