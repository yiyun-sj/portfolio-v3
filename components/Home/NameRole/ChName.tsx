import { Flex, Spacer, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export function ChName() {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])
  if (isMobileDevice) return null
  return (
    <Flex direction='column' gap={4} padding={4}>
      <Spacer />
      <Text textColor='white' fontSize={24} w={8} textAlign='center'>
        贾<br />奕<br />鋆
      </Text>
      <Spacer />
    </Flex>
  )
}
