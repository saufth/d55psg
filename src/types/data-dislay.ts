// Types
import { Parent } from './layout'
import type { Dimensionable, SizeProps } from './sizing'

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
  /** Header tagline */
  tagline?: string
}

/** Used for header list */
export type HeaderList = Record<string, HeaderProps>

/** Used for header list configuration */
export type HeaderListConfig = Readonly<Record<string, Readonly<HeaderProps>>>

/** Image properties */
export interface ImageProps extends Dimensionable {
  /** The image name and extention */
  name: string
  /** The image alternative information */
  alt: string
}

/** The Card component porperties */
export interface CardProps extends HeaderProps {
  /** The image properties */
  image: Readonly<ImageProps>
}

/** Showcase component props */
export interface ShowcaseProps extends CardProps {
  /** Invert the order of content */
  reverse?: boolean
}

/** The tagline componen props */
export type TaglineProps = Parent<string> & SizeProps
