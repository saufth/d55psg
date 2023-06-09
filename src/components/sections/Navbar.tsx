// Components
import CallToAction from '../navigation/LinkToAction'
import Image from 'next/image'
import Link from '../navigation/core/Link'
import NextLink from 'next/link'
import Menu from '../navigation/Menu'
import MenuButton from '../input/core/MenuButton'
// Animation
import { useCycle } from 'framer-motion'
// Config
import { NAV } from '@/modules/navigation/config'
import { logoAlt } from '@/modules/data-display/config'
import { THEME } from '@/modules/theme/config'

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  // Animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-70 bg-white/60 backdrop-filter backdrop-blur'>
        <div className='max-w-8xl h-24 px-[5%] md:px-[7%] md:py-4 lg:py-5 mx-auto flex justify-between items-center'>
          <NextLink href={NAV.home.href} onClick={closeToggle}>
            <Image
              className='w-auto h-10 md:h-12'
              src='/images/logo-vertical.svg'
              alt={logoAlt}
              width={48}
              height={231.775}
              priority
            />
          </NextLink>

          {[NAV.solutions, NAV.values, NAV.history].map(({ children, href }, key) => {
            return (
              <div className='hidden lg:block' key={key}>
                <Link href={href} size='sm' theme={THEME.secondary}>
                  {children}
                </Link>
              </div>
            )
          })}

          <div className='hidden lg:block'>
            <CallToAction />
          </div>

          {isOpen
            ? (
              <div
                className='w-7 md:w-8 h-[30px] md:h-8 grid place-content-center text-4xl text-primary cursor-pointer'
                onClick={handleToggle}
              >
                X
              </div>
              )
            : <MenuButton action={handleToggle} />}
        </div>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}
