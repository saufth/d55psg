/** Arrow function type without params */
export type Action<R = void> = () => R

/** Arrow function type with params */
export type ActionParam<P, R = void> = (param: P) => R

/** Used to define an action property with params */
export interface ActionableParam<P, R = void> {
  /** The action to perform */
  action?: ActionParam<P, R>
}

/** Used to define an action property */
export interface Actionable<R = void> {
  /** The action to perform */
  action?: Action<R>
}
