// Components
import Script from 'next/script'
// React
import { useEffect } from 'react'
// Router
import { useRouter } from 'next/router'

/** Google analitycs tacking id */
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

/**
 * Add the current page path configuration to google analytics
 * @param url The current page path
 */
const addPageView = (url: any) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

/**
 * Google analytics scripts
 * @returns The GoogleAnalyticsScript component
 */
export default function GoogleAnalyticsScript () {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => { addPageView(url) }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => { router.events.off('routeChangeComplete', handleRouteChange) }
  }, [router.events])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}
