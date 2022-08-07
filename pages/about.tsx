import { AspectRatio, Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name='description' content='About Me' />
      </Head>

      <Flex
        position='relative'
        w='100%'
        h='100%'
        p={8}
        align='center'
        justify='center'
      >
        <AspectRatio ratio={9 / 16} w={'40%'}>
          <Box w='100%' h='100%' backgroundColor='white'>
            Sunt nulla incididunt tempor labore cupidatat qui labore
            exercitation laborum velit enim ipsum ex. Minim veniam reprehenderit
            do ullamco. Cupidatat laborum ullamco deserunt sunt reprehenderit
            proident. Officia et id culpa consequat anim in adipisicing sit ex.
            Nostrud dolore qui duis laboris. Duis ipsum sint adipisicing ipsum
            exercitation tempor. Aliqua est laboris ad et aliquip velit. Nisi
            elit nulla quis ex do amet culpa. Irure minim veniam irure excepteur
            tempor consectetur incididunt cupidatat deserunt enim in cillum.
            Irure laboris nostrud elit mollit veniam ea Lorem nostrud Lorem
            laboris officia exercitation aliquip. Aute veniam dolore voluptate
            sint nisi ullamco ex veniam velit reprehenderit elit non mollit.
          </Box>
        </AspectRatio>
      </Flex>
    </>
  )
}

export default About
