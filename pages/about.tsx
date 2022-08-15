import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ProfileCard } from '../components/About'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me - Yiyun Jia</title>
        <meta name='description' content='About Me' />
      </Head>

      <Flex p={8} align='center' justify='center'>
        <ProfileCard />
      </Flex>
    </>
  )
}

export default About
