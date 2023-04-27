// Components
import CallToAction from '../navigation/CallToAction'
import Image from 'next/image'
import NextLink from 'next/link'
// Config
import { logoAlt } from '@/modules/data-display/config'
import { NAV_LIST } from '@/modules/navigation/config'
import { organization } from '@/modules/app/config'

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  // Config
  const copyright = `Copyright 2023 ${organization} Contable. All rights reserved.`

  return (
    <footer className='max-w-9xl px-5 md:px-10 pt-8 pb-12 mx-auto flex flex-col-reverse md:flex-col gap-y-8 border-t border-zinc-300'>
      <div className='w-full mx-auto flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-y-8'>
        <div className='underline text-lg md:text-2xl'>
          <NextLink
            href='mailto:contacto@d55psg.com'
            target='_blank'
            rel='noreferrer'
          >
            contacto@d55psg.com
          </NextLink>
        </div>
        <div className='md:hidden'>
          <CallToAction />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 text-xs md:text-sm text-center md:text-left text-primary'>
          <NextLink href='/'>
            <Image
              src='/images/d55psg-logomark-bg.svg'
              alt={logoAlt}
              width={36}
              height={36}
            />
          </NextLink>
          {copyright}
        </div>
      </div>
      <nav className='w-full flex flex-col md:flex-row justify-between gap-4 text-sm text-center text-zinc-600'>
        {NAV_LIST.map((navItem, key) => (
          <NextLink
            className='last:hidden last:md:block'
            href={navItem.href}
            key={key}
          >
            {navItem.children}
          </NextLink>
        ))}
      </nav>
    </footer>
  )
}
