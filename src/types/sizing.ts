/** Used to define a size property */
export type Size = 'sm' | 'md' | 'lg'

/** The size properties */
export interface SizeProps {
  /** Size property */
  size?: Size
}

/** Used for size configuration */
export type SizeConfig = Readonly<Record<Size, Size>>

/** Used for size styles configuration */
export type SizeStyleConfig = Readonly<Record<Size, string>>

/** Define width and height properties  */
export interface Dimensionable {
  /** Width property */
  width: number
  /** Height property */
  height: number
}
