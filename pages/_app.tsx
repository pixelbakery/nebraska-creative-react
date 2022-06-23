import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Footer, Header } from '@modules/index'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <QueryClientProvider client={client}>
        <>
          <Component {...pageProps} />
        </>
      </QueryClientProvider>

      <Footer />
    </>
  )
}

export default MyApp
