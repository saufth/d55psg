// Components
// eslint-disable-next-line import/no-restricted-paths
import GoogleSearchScript from './GoogleSearchScript'
// eslint-disable-next-line import/no-restricted-paths
import GoogleAnalyticsScript from './GoogleAnalyticsScript'
import Footer from '@/components/sections/Footer'
import Head from 'next/head'
import Navbar from '@/components/sections/Navbar'
// Config
import {
  author,
  baseUrl,
  coverImageUrl,
  description,
  keywords,
  organizationAlt,
  organizationSlogan,
  themeColor,
  twitter
} from '../../modules/app/config'
// Types
import type { Parent } from '../../types/layout'

/**
 * The main application layout
 * @see {@link Parent} for props specification
 * @param Parent The component props
 * @returns the AppLayout component
 */
export default function AppLayout ({ children } : Parent) {
  const title = `${organizationSlogan} – ${organizationAlt}`

  return (
    <>
      <Head>
        <meta http-equiv='content-language' content='en-mx' />
        <title>{title}</title>
        <link rel='canonical' href={baseUrl} />
        <meta name='author' content={author} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='theme-color' content={themeColor} />
        <meta name='robots' content='index, follow' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organizationSlogan} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organizationSlogan} />
        <meta property='og:image' content={coverImageUrl} />
        <meta property='og:image:secure_url' content={coverImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        {twitter !== ''
          ? (
            <>
              <meta name='twitter:card' content='summary_large_image' />
              <meta name='twitter:title' content={organizationSlogan} />
              <meta name='twitter:description' content={description} />
              <meta name='twitter:site' content={twitter} />
              <meta name='twitter:image' content={coverImageUrl} />
            </>
            )
          : null}
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <GoogleSearchScript />
      <GoogleAnalyticsScript />
    </>
  )
}
