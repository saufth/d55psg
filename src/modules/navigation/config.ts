// Config
import { organizationAlt } from '../app/config'
// Types
import type { LinkProps, Navigable } from '@/types/navigation'

/** The main navigation configuration of the application */
export const NAV: Readonly<Navigable> = Object.freeze({
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
})

/** The navigation configuration list */
export const NAV_LIST: Readonly<LinkProps[]> = Object.freeze(Object.values(NAV))

/** The link to action properties */
export const linkToAction: Readonly<LinkProps> = Object.freeze(NAV.contact)

/** The aria label for navigation directories */
export const navAriaLabel = `${organizationAlt} directorio`
