import { Dimensionable } from './sizing'

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
}

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
