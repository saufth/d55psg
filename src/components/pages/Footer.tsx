// Components
import CallToAction from '../navigation/core/CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
// Config
import { NAV } from '@/modules/navigation/config'

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  return (
    <footer className='max-w-9xl px-5 md:px-10 pt-8 pb-12 mx-auto flex flex-col-reverse md:flex-col gap-y-8 border-t border-zinc-300'>
      <div className='w-full mx-auto flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-y-8'>
        <div className='text-xl underline'>
          <NextLink
            href='mailto:info@d55psg.com'
            target='_blank'
            rel='noreferrer'
          >
            info@d55psg.com
          </NextLink>
        </div>
        <div className='md:hidden'>
          <CallToAction />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 text-xs md:text-sm text-center md:text-left text-primary'>
          <NextLink href='/'>
            <Image
              src='/images/d55psg-logomark-bg.svg'
              alt='Taxo Contable logotype'
              width={36}
              height={36}
            />
          </NextLink>
          Copyright 2023 D55PSG Contable. All rights reserved.
        </div>
      </div>
      <nav className='w-full flex flex-col md:flex-row justify-between gap-4 text-sm text-center text-zinc-600'>
        {[NAV.home, NAV.solutions, NAV.strategy, NAV.why].map(({ children, href }, key) => (
          <NextLink href={href} key={key}>
            {children}
          </NextLink>
        ))}
        <NextLink className='hidden md:block' href={NAV.contact.href}>
          {NAV.contact.children}
        </NextLink>
      </nav>
    </footer>
  )
}
