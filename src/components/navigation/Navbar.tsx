// Components
import CallToAction from './CallToAction'
import Image from 'next/image'
import Link from './core/Link'
import NextLink from 'next/link'
import Menu from './Menu'
import MenuButton from '../input/core/MenuButton'
// Animation
import { useCycle } from 'framer-motion'
// Config
import { NAV } from '@/modules/navigation/config'
import { logoAlt } from '@/modules/data-display/config'

/**
 * The main navbar of the application
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
        <div className='max-w-9xl h-24 px-[5%] md:px-[7%] md:py-4 lg:py-5 mx-auto flex justify-between items-center'>
          <NextLink href={NAV.home.href} onClick={closeToggle}>
            <Image
              src='/images/d55psg-logomark-bg.svg'
              alt={logoAlt}
              className='w-auto h-12'
              width={48}
              height={48}
              priority
            />
          </NextLink>

          {[NAV.solutions, NAV.strategy, NAV.why].map(({ children, href }, key) => {
            return (
              <Link href={href} key={key}>
                {children}
              </Link>
            )
          })}

          <div className='hidden lg:block'>
            <CallToAction theme='secondary' />
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
