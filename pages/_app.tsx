import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Footer, Nav } from '@modules/index'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }: AppProps) {
  const plausibleConfig = {
    domain: 'nebraska-creative.com',
    trackOutboundLinks: true,
    trackLocalhost: process.env.NODE_ENV !== 'production',
    selfHosted: true,
    customDomain: 'https://analytics.jordy.world',
    enabled: true,
  }

  return (
    <>
      <PlausibleProvider {...plausibleConfig}>
        <div className='flex w-full'>
          <Nav />
          <div className='w-full px-8 lg:px-4'>
            <div className='min-h-screen py-12'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </div>
      </PlausibleProvider>
    </>
  )
}

export default MyApp
