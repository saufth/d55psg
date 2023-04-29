// Types
import type { HeaderProps, ShowcaseProps } from './data-dislay'

/** About component props */
export interface AboutProps extends HeaderProps {
  /** Section id */
  id: string
  /** Section showcases */
  showcases: Readonly<ShowcaseProps[]>
}
