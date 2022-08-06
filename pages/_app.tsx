import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ChakraProvider,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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
        w='100vw'
        minH={height}
        backgroundColor='#030106'
        position='relative'
        direction='column'
      >
        <Flex width='100%' align='center'>
          <Image src='/logo.svg' w={8} ml={4} mt={2} alt='logo' />
          <Spacer />
          <Breadcrumb p={4} textColor='white'>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <Box position='relative' flexGrow={1}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}
