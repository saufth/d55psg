// Types
import { Parent } from './layout'
import type { Dimensionable, SizeProps } from './sizing'

/** Generic key and value list type */
export interface List<T> {
  /** Item list */
  [key: string]: T
}

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
  /** Header tagline */
  tagline?: string
}

/** Header list */
export type HeaderList = List<HeaderProps>

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
  image: ImageProps
}

/** Showcase component props */
export interface ShowcaseProps extends CardProps {
  /** Invert the order of content */
  reverse?: boolean
}

/** The tagline componen props */
export type TaglineProps = Parent<string> & SizeProps
