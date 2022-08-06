import { Flex, Spacer, Text } from '@chakra-ui/react'

export function ChName() {
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
