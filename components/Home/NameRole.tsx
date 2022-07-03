import { Box, Text } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'

export default function NameRole() {
  return (
    <Box
      position='absolute'
      top={0}
      left={0}
      m={4}
      textColor='white'
      textAlign={isMobile ? 'center' : 'start'}
      textShadow='0 0 10px white'
    >
      <Text
        fontFamily='sans-serif'
        fontWeight='bold'
        fontSize={isMobile ? 68 : 88}
        lineHeight={1}
      >
        YIYUN JIA
      </Text>
      <Text
        fontFamily='sans-serif'
        fontWeight='bold'
        fontSize={isMobile ? 28 : 36}
      >
        SOFTWARE DEVELOPER
      </Text>
    </Box>
  )
}
