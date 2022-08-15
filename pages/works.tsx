import { Box, Flex, Icon, Skeleton, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaRegCircle } from 'react-icons/fa'
import { useIsMobile } from '../hooks'

const Works: NextPage = () => {
  const { isMobile } = useIsMobile()
  const staticList = [1, 2]
  return (
    <>
      <Head>
        <title>Works - Yiyun Jia</title>
        <meta name='description' content='About Me' />
      </Head>

      <Flex p={8} align='stretch' justify='center' direction='column'>
        {staticList.map((item, i) => (
          <Flex
            key={item}
            align='stretch'
            direction={!(i % 2) || isMobile ? 'row' : 'row-reverse'}
            gap={4}
          >
            <Box flex={1} />
            <Flex direction='column' align='center' gap={2}>
              <Box
                w={1}
                flex={1}
                backgroundColor='white'
                bgGradient={!i ? 'linear(to-t, white, #030106)' : undefined}
              />
              <Icon
                as={FaRegCircle}
                w={8}
                h={8}
                color='white'
                _hover={{ color: 'blue.200' }}
              />
              <Box
                w={1}
                flex={1}
                backgroundColor='white'
                bgGradient={
                  i === staticList.length - 1
                    ? 'linear(to-b, white, #030106)'
                    : undefined
                }
              />
            </Flex>
            <Stack
              alignItems={!(i % 2) || isMobile ? 'start' : 'end'}
              flex={1}
              py={8}
            >
              <Skeleton w={60} h={8}></Skeleton>
              <Skeleton w={60} h={8}></Skeleton>
              <Skeleton w={60} h={8}></Skeleton>
            </Stack>
          </Flex>
        ))}
      </Flex>
    </>
  )
}

export default Works
