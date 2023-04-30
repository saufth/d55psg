// Components
import AppLayout from '@/components/app/AppLayout'
// Types
import type { AppProps } from 'next/app'
// Styles
import '@/styles/globals.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
