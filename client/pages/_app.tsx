import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'
const digital = localFont({ src: '../public/fonts/Digital7-rg1mL.ttf'})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
