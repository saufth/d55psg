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
  /** Image to use on the showcase */
  image: string
  /** Invert the order of content */
  reverse?: boolean
}
