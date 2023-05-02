// Types
import type { ReactNode } from 'react'
import type { PageRoute } from './navigation'

/** Used to define a geeric parent element */
export interface Parent<T = ReactNode> {
  /** The child element of parent component */
  children?: T
}

/** The page layout properties */
export interface PageLayoutProps extends Required<Parent> {
  /** Page title */
  page: PageRoute
}
