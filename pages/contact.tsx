import {
  Button,
  Flex,
  Icon,
  Input,
  Link,
  Spacer,
  Text,
  Tooltip,
  useClipboard,
  useToast,
} from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const IconList = [
  { name: 'Github', icon: FaGithub, href: 'https://github.com/yiyun-sj' },
  {
    name: 'Linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/yiyun-sj/',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/yiyun_sj/',
  },
]

const email = 's32jia@uwaterloo.ca'

const Contact: NextPage = () => {
  const [isLoading, toggleIsLoading] = useCycle(false, true)
  const { onCopy } = useClipboard(email)
  const toast = useToast()

  const onClickCopy = () => {
    onCopy()
    toast({
      position: 'top',
      title: 'Copied to Clipboard!',
      status: 'success',
      isClosable: true,
      duration: 2000,
    })
  }

  return (
    <>
      <Head>
        <title>Contacts - Yiyun Jia</title>
        <meta name='description' content='Contact me' />
      </Head>

      <Flex
        position='absolute'
        w='100%'
        h='100%'
        align='center'
        justify='center'
        direction='column'
        gap={4}
      >
        <Text fontWeight='bold' fontSize={36} textColor='white'>
          Like what you see? Say hi!
        </Text>
        <Flex gap={4}>
          <Spacer />
          {IconList.map(({ name, href, icon }) => (
            <Tooltip label={name} key={name}>
              <Link href={href} isExternal>
                <Icon
                  as={icon}
                  w={8}
                  h={8}
                  color='white'
                  _hover={{ color: 'blue.200' }}
                />
              </Link>
            </Tooltip>
          ))}
          <Spacer />
        </Flex>
        <Text color='white' textDecor='underline' fontSize={18}>
          or
        </Text>
        <Flex>
          <Input readOnly value={email} color='white' w='min-content' />
          <Button
            onClick={onClickCopy}
            fontSize={14}
            backgroundColor='blue.200'
          >
            COPY
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Contact
