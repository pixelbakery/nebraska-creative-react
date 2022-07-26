import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Footer, Header, Nav } from '@modules/index'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}

      <QueryClientProvider client={client}>
        <div className='flex w-full'>
          <Nav />
          <div className='w-full px-8 lg:px-4'>
            <div className='min-h-screen py-12'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
