import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar } from '../components/Shared'
import { useWindowHeight } from '../hooks'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { height } = useWindowHeight()

  return (
    <ChakraProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        w='100%'
        minH={height ?? '100vh'}
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
