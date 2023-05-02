// Config
import { organizationSlogan } from '../app/config'
// Types
import type { NavConfig } from '@/types/navigation'

/** The main navigation configuration of the application */
export const NAV: NavConfig = {
  home: {
    children: 'Inicio',
    href: '/'
  },
  solutions: {
    children: 'Soluciones',
    href: '/#solutions'
  },
  values: {
    children: 'Valores',
    href: '/#values'
  },
  history: {
    children: 'Historia',
    href: '/history'
  },
  contact: {
    children: 'Contáctanos',
    href: '/contact'
  }
}

/** The navigation configuration list */
export const NAV_LIST = Object.values(NAV)

/** The link to action properties */
export const linkToAction = NAV.contact

/** The aria label for navigation directories */
export const navAriaLabel = `${organizationSlogan} directorio`
