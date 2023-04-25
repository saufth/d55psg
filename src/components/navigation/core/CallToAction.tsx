// Components
import NextLink from 'next/link'
// Config
import { NAV } from '@/modules/navigation/config'
import { THEME } from '@/modules/theme/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The primary call to actions of the application
 * @see {@link Themeable} for props specification
 * @param Themeable The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ theme = THEME.primary }: Themeable) => {
  const themeStyle = theme === THEME.primary
    ? 'bg-zinc-600 hover:bg-primary'
    : 'bg-blue-700 hover:bg-blue-600'

  return (
    <NextLink href={NAV.contact.href}>
      <div className={`w-44 h-10 grid place-content-center font-unineue-bold text-white tracking-wider transition-colors rounded-full ${themeStyle}`}>
        {NAV.contact.children}
      </div>
    </NextLink>
  )
}

export default CallToAction
