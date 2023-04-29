// Components
import LinkButton from './core/LinkButton'
// Config
import { linkToAction } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to action component of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
export default function CallToAction ({ theme }: Themeable) {
  return (
    <LinkButton href={linkToAction.href} theme={theme}>
      {linkToAction.children}
    </LinkButton>
  )
}
