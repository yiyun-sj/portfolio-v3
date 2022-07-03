import { Box, Button } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'
import { useRouter } from 'next/router'

export default function SeeMore() {
  const router = useRouter()
  const [isClose, toggleOpen] = useCycle(true, false)
  const handleSeeMore = () => {
    toggleOpen()
    setTimeout(() => {
      router.push('/hi')
    }, 750)
  }
  return (
    <Box
      as={motion.div}
      position='absolute'
      bottom={0}
      right={0}
      w={32}
      h={12}
      m={4}
      shadow='0 0 20px white'
      borderRadius='md'
      overflow='hidden'
      animate={
        isClose
          ? {}
          : {
              width: '100%',
              height: '100%',
              margin: 0,
              backgroundColor: 'white',
              transition: { duration: 0.75 },
            }
      }
    >
      {isClose && (
        <Button onClick={handleSeeMore} w={32} h={12} overflow='hidden'>
          See More
        </Button>
      )}
    </Box>
  )
}
