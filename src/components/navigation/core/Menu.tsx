// Components
import CallToAction from './CallToAction'
import NextLink from 'next/link'
// Hooks
import useDimensions from '../../../modules/sizing/hooks/useDimensions'
// Animation
import { motion } from 'framer-motion'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Actionable } from '@/types/input'

/** Menu component props */
export interface MenuProps extends Actionable {
  /** Menu status */
  isOpen: boolean
}

/** Background animation variants */
const backgroundVariants = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/** Nav animation variants */
const navVariants = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/**
 * The main menu of application
 * @returns Menu component
 */
const Menu = ({ isOpen, action }: MenuProps) => {
  // Animation
  const { width } = useDimensions()

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={width}
    >
      <motion.nav
        aria-label='Keyperspot directorio'
        className='w-full h-screen md:pt-24 fixed top-0 left-0 z-60 overflow-hidden grid place-content-center gap-y-5 md:gap-y-6 text-center'
        variants={navVariants}
      >
        <span className='font-unineue-book text-sm md:text-base text-primary'>
          Menu
        </span>

        {[NAV.home, NAV.solutions, NAV.strategy, NAV.why].map((option, key) => (
          <div className='text-3xl md:text-4xl' onClick={action} key={key}>
            <NextLink href={option.href}>
              {option.children}
            </NextLink>
          </div>
        ))}

        <div className='flex justify-center' onClick={action}>
          <CallToAction theme='secondary' />
        </div>
      </motion.nav>

      <motion.div
        className='w-full h-screen fixed top-0 z-50 bg-white'
        variants={backgroundVariants}
      />
    </motion.div>
  )
}

export default Menu
