import { Box, Text } from '@chakra-ui/react'

export default function NameRole() {
  return (
    <Box position='absolute' top={0} left={0} m={4} textColor='white'>
      <Text
        fontFamily='sans-serif'
        fontWeight='bold'
        fontSize={88}
        lineHeight={1}
      >
        YIYUN JIA
      </Text>
      <Text fontFamily='sans-serif' fontWeight='bold' fontSize={36}>
        SOFTWARE DEVELOPER
      </Text>
    </Box>
  )
}
