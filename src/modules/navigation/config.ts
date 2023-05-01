// Config
import { organizationAlt } from '../app/config'
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
  strategy: {
    children: 'Valores',
    href: '/#values'
  },
  why: {
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
export const navAriaLabel = `${organizationAlt} directorio`
