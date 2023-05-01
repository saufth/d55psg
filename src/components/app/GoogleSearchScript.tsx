// Components
import Script from 'next/script'
// Config
import { baseUrl, organizationSlogan } from '@/modules/app/config'

/** Google seach scheme */
const googleSearchSchema = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}#organization`,
      name: `${organizationSlogan}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}#website`,
      url: `${baseUrl}`,
      name: `${organizationSlogan}`,
      publisher: {
        '@id': `${baseUrl}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl}#webpage`,
      url: `${baseUrl}`,
      name: `${organizationSlogan}`,
      about: {
        '@id': `${baseUrl}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
} as const

/**
 * Add the website JSON ID schema for Google Search to the script of this layout
 * @returns A Javascript object for dangerouslySetInnerHTML
 */
const addWebsiteJsonId = () => {
  return {
    __html: JSON.stringify(googleSearchSchema)
  }
}

/**
 * Script for structured data for google seacrh
 * @returns Script component for structured data for google seacrh
 */
export default function GSearchSquemaScript () {
  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={addWebsiteJsonId()}
      id='WebSite'
    />
  )
}
