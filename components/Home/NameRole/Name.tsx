import { Text } from '@chakra-ui/react'
import { useIsMobile } from '../../../hooks'

export function Name() {
  const { isMobile } = useIsMobile()

  return (
    <Text
      fontFamily='sans-serif'
      fontWeight='bold'
      fontSize={isMobile ? 60 : 92}
      lineHeight={1}
      textColor='white'
      textAlign='center'
    >
      YIYUN JIA
    </Text>
  )
}
