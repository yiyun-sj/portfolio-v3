import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ChName, ContactIcons, Name, Role, Room } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Student and Software Developer' />
      </Head>

      <Flex
        position='absolute'
        w='100%'
        h='100%'
        align='center'
        direction='column'
        justify='space-evenly'
      >
        <Name />
        <Flex
          direction='row'
          align='center'
          justify='space-between'
          width='100%'
        >
          <ChName />
          <Room />
          <ContactIcons />
        </Flex>
        <Role />
      </Flex>
    </>
  )
}

export default Home
