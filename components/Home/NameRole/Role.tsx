import { Text } from '@chakra-ui/react'
import { useIsMobile } from '../../../hooks'

export function Role() {
  const { isMobile } = useIsMobile()

  return (
    <Text
      fontFamily='sans-serif'
      fontWeight='bold'
      fontSize={isMobile ? 32 : 36}
      textColor='white'
      textAlign='center'
    >
      STUDENT{isMobile ? <br /> : ' - '}
      DEVELOPER{isMobile ? <br /> : ' - '}
      MUSICIAN
    </Text>
  )
}
