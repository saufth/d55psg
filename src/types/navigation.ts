// Types
import type { Actionable } from './input'
import type { Parent } from './layout'
import type { Themeable } from './theme'
import type { Size } from './sizing'

/** Specifes where to open the linked document */
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top' | 'framename'

/** Specifies the relationship between the current document and the linked document */
export type LinkRel = 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

/** Link properties */
export interface LinkProps extends Parent<string>, Themeable {
  /** Reference to redirect */
  href: string
  /** Link target property */
  target?: LinkTarget
  /** Link rel property */
  rel?: LinkRel
  /** Link resize property */
  size?: Size
  /** Underline the link text */
  underline?: boolean
}

/** Used for navigation configuration */
export type NavConfig = Readonly<Record<string, Readonly<LinkProps>>>

/** The link button component properties */
export interface LinkButtonProps extends LinkProps, Themeable {}

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}
