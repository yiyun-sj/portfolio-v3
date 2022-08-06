import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export function Name() {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])
  return (
    <Text
      fontFamily='sans-serif'
      fontWeight='bold'
      fontSize={isMobileDevice ? 60 : 92}
      lineHeight={1}
      textColor='white'
      textAlign='center'
    >
      YIYUN JIA
    </Text>
  )
}
