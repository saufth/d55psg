/** Header props */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description?: string
}

/** Showcase component props */
export interface ShowcaseProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  descriptions: string[]
  /** The mage name and extention */
  image: string
  /** Invert the order of content */
  reverse?: boolean
}

/** The ServiceCard component porperties */
export interface ServiceCardProps extends HeaderProps {
  /** Service card image name and extention */
  image: string
}
