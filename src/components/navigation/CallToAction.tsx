// Config
import { NAV } from '@/modules/navigation/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { Themeable } from '@/types/theme'
import LinkButton from './core/LinkButton'

/**
 * The primary call to actions of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
export default function CallToAction ({ theme = THEME.primary }: Themeable) {
  return (
    <LinkButton href={NAV.contact.href} theme={theme}>
      {NAV.contact.children}
    </LinkButton>
  )
}
