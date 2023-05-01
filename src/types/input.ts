// Types
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

/** Used for button types configuration */
export type ButtonTypesConfig = Readonly<Record<ButtonTypes, ButtonTypes>>

/** The link button component properties */
export interface ButtonProps extends Parent<string>, Actionable, Themeable {
  /** The button type */
  type?: ButtonTypes
}

/** Open-Closed state property */
export type OCState = 'open' | 'closed'

/** Used for Open-Closed state configuration */
export type OCStateConfig = Readonly<Record<OCState, OCState>>
