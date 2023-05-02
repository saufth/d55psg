// Components
// eslint-disable-next-line import/no-restricted-paths
import GoogleSearchScript from './GoogleSearchScript'
// eslint-disable-next-line import/no-restricted-paths
import GoogleAnalyticsScript from './GoogleAnalyticsScript'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
// Types
import type { Parent } from '../../types/layout'

/**
 * The main application layout
 * @see {@link Parent} for props specification
 * @param Parent The component props
 * @returns the AppLayout component
 */
export default function AppLayout ({ children } : Required<Parent>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <GoogleSearchScript />
      <GoogleAnalyticsScript />
    </>
  )
}
