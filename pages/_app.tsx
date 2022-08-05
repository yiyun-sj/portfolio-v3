import { ChakraProvider } from '@chakra-ui/react'
import { useGLTF } from '@react-three/drei'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

useGLTF.preload('/Desk.glb')

export default MyApp
