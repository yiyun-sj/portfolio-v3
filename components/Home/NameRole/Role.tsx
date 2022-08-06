import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export function Role() {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])
  return (
    <Text
      fontFamily='sans-serif'
      fontWeight='bold'
      fontSize={isMobileDevice ? 32 : 36}
      textColor='white'
      textAlign='center'
    >
      STUDENT {isMobileDevice ? <br /> : '- '}
      DEVELOPER {isMobileDevice ? <br /> : '- '}
      MUSICIAN
    </Text>
  )
}
