// Components
import Footer from '@/components/pages/Footer'
import Hero from '@/components/pages/Hero'
import Solutions from '@/components/pages/Solutions'
import Strategy from '@/components/pages/Strategy'

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  return (
    <>
      <Hero />
      <Solutions />
      <Strategy />
      <Footer />
    </>
  )
}
