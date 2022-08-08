import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react'
import { useIsMobile, useWindowHeight } from '../../../hooks'

const basicInfos = [
  {
    title: 'Status',
    titleDesc: 'Student',
    description:
      "👋 Hiya! I'm a second year Computing and Financial Management student at the University of Waterloo.",
  },
  {
    title: 'Career',
    titleDesc: 'Developer',
    description:
      '💻 My main focus career-wise currently is software-related work, with the most experience full-stack web-development.',
  },
  {
    title: 'Main Hobby',
    titleDesc: 'Music',
    description:
      '🎧 During my free time, I sing and songwrite and make covers (occassionally) on YouTube. As well, I enjoy playing violin among other instruments with my friends.',
  },
]

export function ProfileCard() {
  const { height } = useWindowHeight()
  const { isMobile } = useIsMobile()

  return (
    <Box
      w={isMobile ? '100%' : (((height ?? 720) - 128) / 4) * 3}
      p={3}
      backgroundColor='white'
      rounded='lg'
      boxShadow='inset 0 0 0 12px #BEE3F8'
      style={{ aspectRatio: '3/4' }}
    >
      <Flex
        gap={4}
        px={4}
        py={3}
        direction='column'
        overflowY='scroll'
        style={{ aspectRatio: '3/4' }}
      >
        <Flex justify='space-between'>
          <Text fontWeight='bold'>Yiyun/Sam Jia</Text>
          <Text fontWeight='bold'>贾奕鋆</Text>
        </Flex>
        <AspectRatio w='100%' ratio={4 / 3}>
          <Image
            src='/profile.jpg'
            alt='Profile picture'
            objectFit='cover'
            padding={1}
            boxShadow='inset 0 0 0 4px #BEE3F8'
          />
        </AspectRatio>
        <Accordion
          allowMultiple={isMobile ? false : true}
          defaultIndex={isMobile ? [0] : basicInfos.map((_, i) => i)}
        >
          {basicInfos.map(({ title, titleDesc, description }) => (
            <AccordionItem key={title}>
              <h2>
                <AccordionButton>
                  <Text flex={1} textAlign='left'>
                    <b>{title}:</b> {titleDesc}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text pl={4}>{description}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Box>
  )
}
