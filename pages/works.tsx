import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaRegCircle } from 'react-icons/fa'
import { useIsMobile } from '../hooks'

const experiences = [
  {
    key: 'perkup',
    title: 'Fullstack Developer',
    subtitle: '@ PerkUp',
    url: 'https://www.perkupapp.com/',
    color: 'blue.200',
    description:
      'PerkUp is an employee recognition software where I worked as a fullstack developer in TypeScript ReactJS and Go among other technologies. Notable features I led and developed are a Slack integration notification system and an entire gifting experience with data powered by a headless CMS.',
  },
  {
    key: 'cfmta',
    title: 'CFM 101 Teaching Assistant',
    subtitle: '@ University of Waterloo',
    color: 'yellow.200',
    description:
      'After a high-achieving term in the CFM101 class, I was invited to work as a Teaching Assitant (TA) for the following offering of the class. As a TA, I redesigned and future-proofed a python-based financial analysis assignment. As well, I proposed to and developed a documentation/resource website for future students of the course.',
  },
  {
    key: 'planit',
    title: 'Project: Plan-It',
    subtitle: 'WIP',
    color: 'green.200',
    description:
      'Plan-It is a personal project of mine, in-development with a friend, aimed to provide a platform (both web with NextJS and mobile with React Native) for large groups of people to easily schedule hangouts and meetings through comparing their provided schedules and identifying the least-conflicting times.',
  },
  {
    key: 'portfolio',
    title: 'Portfolio: Yiyun-Sj',
    subtitle: 'This website!',
    color: 'red.200',
    description:
      'This website is the third version of my portfolio, and a small showcase of some of the frontend technologies I found cool and am exploring. Examples are the ThreeJS/R3F model in the homepage, made using Blender, the component (ChakraUI) and animation (Framer Motion) libraries used throughout this website. Additionally, this is my exploration of server-side rendering using NextJS.',
  },
  {
    key: 'vidlytics',
    title: 'Project: Vidlytics',
    subtitle: '@ TO Hacks 2022',
    url: 'https://to-hacks-22.web.app/',
    color: 'purple.200',
    description:
      "Vidlytics was a hackathon project in a group of two, led by me as the fullstack developer. This 24-hour project, contributed 90% by myself, leverages Assembly AI, Cohere NLP, Firebase, Agora, and Evergreen UI to provide a video call experience that replaces unopened cameras with live emoji feedback and records engagement/emotional data for the call owner by classifying the participants' speech-to-text in realtime.",
  },
  {
    key: 'cfmgroup',
    title: 'Project: Risky Portfolio',
    subtitle: '@ CFM 101',
    url: 'https://github.com/yiyun-sj/Risky-Portfolio/',
    color: 'teal.200',
    description:
      'Risky Portfolio is the final 3-person group project of the CFM101 class, where our group was tasked to write an algorithm to indentify the riskiest portfolio of stocks in a given list. The project was completed in a Jupyter Notebook, with Markdown explanation of each algorithm design decision. Bonus: this project includes multi-threading computations in python.',
  },
]

const Works: NextPage = () => {
  const { isMobile } = useIsMobile()
  return (
    <>
      <Head>
        <title>Works - Yiyun Jia</title>
        <meta name='description' content='About Me' />
      </Head>

      <Flex p={8} align='stretch' justify='center' direction='column'>
        {experiences.map(
          ({ key, title, subtitle, url, color, description }, i) => (
            <Flex
              key={key}
              align='stretch'
              direction={!(i % 2) || isMobile ? 'row' : 'row-reverse'}
              gap={4}
            >
              {!isMobile && <Box flex={1} />}
              <Flex direction='column' align='center' gap={2}>
                <Box
                  w={1}
                  flex={1}
                  backgroundColor='white'
                  bgGradient={!i ? 'linear(to-t, white, #030106)' : undefined}
                />
                <Icon as={FaRegCircle} w={8} h={8} color={color} />
                <Box
                  w={1}
                  flex={1}
                  backgroundColor='white'
                  bgGradient={
                    i === experiences.length - 1
                      ? 'linear(to-b, white, #030106)'
                      : undefined
                  }
                />
              </Flex>
              <Stack
                alignItems={!(i % 2) || isMobile ? 'start' : 'end'}
                textAlign={!(i % 2) || isMobile ? 'start' : 'end'}
                flex={1}
                py={8}
              >
                <Heading as='h3' size='md' textColor={color}>
                  {title}
                </Heading>
                <Heading as='h4' size='xs' textColor='white'>
                  {subtitle}
                </Heading>
                <Text textColor='white' maxW={512}>
                  {description}
                </Text>
                {url && (
                  <Link href={url} isExternal>
                    <Button
                      size='xs'
                      backgroundColor={color}
                      textColor='blackAlpha.800'
                    >
                      Visit!
                    </Button>
                  </Link>
                )}
              </Stack>
            </Flex>
          )
        )}
      </Flex>
    </>
  )
}

export default Works
