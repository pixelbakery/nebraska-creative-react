import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Footer, Nav } from '@modules/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='flex w-full'>
        <Nav />
        <div className='w-full px-8 lg:px-4'>
          <div className='min-h-screen py-12'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
