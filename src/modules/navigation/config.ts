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
    children: 'Estrategía',
    href: '/#strategy'
  },
  why: {
    children: 'Razón de ser',
    href: '/reason-why'
  },
  contact: {
    children: 'Contáctanos',
    href: '/contact'
  }
})

/** The navigation configuration list */
export const NAV_LIST: Readonly<LinkProps[]> = Object.freeze(Object.values(NAV))
