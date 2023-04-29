// Types
import type { List } from './data-dislay'
import type { Parent } from './layout'
import type { Themeable } from './theme'

/** Generic arrow function type */
export type Action<P = undefined, R = void> = P extends undefined
  ? () => R
  : (param: P) => R

/** Used to define the action property to components */
export interface Actionable<P = undefined, R = void> {
  /** The action to perform */
  action?: Action<P, R>
}

/** Button types porpoerty */
export type ButtonTypes = 'button' | 'submit' | 'reset'

/** Button types list */
export type ButtonTypesList = List<ButtonTypes>

/** The link button component properties */
export interface ButtonProps extends Parent<string>, Actionable, Themeable {
  /** The button type */
  type?: ButtonTypes
}
