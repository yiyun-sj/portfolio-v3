import { Flex, Spinner, Stack, Text } from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Music: NextPage = () => {
  const [isLoading, toggleIsLoading] = useCycle(false, true)

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name='description' content='404 Not Found' />
      </Head>

      <Flex
        position='absolute'
        w='100%'
        h='100%'
        align='center'
        justify='center'
      >
        {isLoading ? (
          <Spinner color='white' size='xl' />
        ) : (
          <Stack>
            <Text fontWeight='bold' fontSize={36} textColor='white'>
              404: Page Not Found
            </Text>
            <Link href='/'>
              <Text
                fontSize={18}
                textColor='blue.200'
                onClick={() => toggleIsLoading()}
                cursor='pointer'
                _hover={{ textColor: 'white' }}
              >
                Here&lsquo;s the way home
              </Text>
            </Link>
          </Stack>
        )}
      </Flex>
    </>
  )
}

export default Music
