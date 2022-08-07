import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { NavBar } from '../components/Shared'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [height, setHeight] = useState<string | number>('100vh')
  useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener('resize', () => setHeight(window.innerHeight))
    return window.removeEventListener('resize', () =>
      setHeight(window.innerHeight)
    )
  }, [])
  return (
    <ChakraProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        w='100%'
        minH={height}
        backgroundColor='#030106'
        position='relative'
        direction='column'
      >
        <NavBar />
        <Box position='relative' flexGrow={1}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}
