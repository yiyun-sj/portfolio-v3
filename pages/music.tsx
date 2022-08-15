import { AspectRatio, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useIsMobile } from '../hooks'

const Music: NextPage = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <Head>
        <title>Music - Yiyun Jia</title>
        <meta name='description' content='About Me' />
      </Head>

      <Heading color='white' textAlign='center'>
        Covers:
      </Heading>
      <Flex p={8} gap={8} justifyContent='center'>
        <AspectRatio w={500} maxW='100%' ratio={16 / 9}>
          <iframe
            src='https://www.youtube.com/embed/aMyGvyxTSPI'
            title='傻子 - 林宥嘉 / Fool - Yoga Lin'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </AspectRatio>
      </Flex>
    </>
  )
}

export default Music
