import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Room from '../components/Home/Room'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Student and Software Developer' />
      </Head>

      <Room />

      <Box position='absolute' top={0} left={0} m={4} textColor='white'>
        <Text
          fontFamily='sans-serif'
          fontWeight='bold'
          fontSize={88}
          lineHeight={1}
        >
          YIYUN JIA
        </Text>
        <Text fontFamily='sans-serif' fontWeight='bold' fontSize={36}>
          SOFTWARE DEVELOPER
        </Text>
      </Box>
    </>
  )
}

export default Home
