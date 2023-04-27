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
