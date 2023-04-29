// Types
import type { Dimensionable } from './sizing'

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

/** The ServiceCard component porperties */
export interface ServiceCardProps extends HeaderProps {
  /** The image properties */
  image: ImageProps
}

/** Showcase component props */
export interface ShowcaseProps extends ServiceCardProps {
  /** Invert the order of content */
  reverse?: boolean
}
