// Types
import type { List } from './data-dislay'

/** Used to define a size property */
export type Size = 'sm' | 'md' | 'lg'

/** Used for size configuration */
export type SizeList = List<Size>

/** Define width and height properties  */
export interface Dimensionable {
  /** Width property */
  width: number
  /** Height property */
  height: number
}
