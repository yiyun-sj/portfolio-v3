import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, IconButton, Kbd, Stack, Text } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'
import { isMobile } from 'react-device-detect'

export default function ViewerControl() {
  const [isOpen, toggleOpen] = useCycle(true, false)
  if (isMobile) return null
  return (
    <Box
      as={motion.div}
      position='absolute'
      w={64}
      h={40}
      top={0}
      right={0}
      m={4}
      borderRadius={4}
      shadow='0 0 20px white'
      rounded='md'
      bg='white'
      overflow='hidden'
      animate={
        isOpen
          ? { padding: '8px' }
          : { width: '40px', height: '40px', borderRadius: '20px' }
      }
    >
      {isOpen ? (
        <>
          <Box display='flex' alignItems='center'>
            <IconButton
              aria-label='Toggle Viewer Control Hints'
              icon={<ChevronRightIcon />}
              variant='ghost'
              onClick={() => toggleOpen()}
            />
            <Text>Viewer Controls</Text>
          </Box>

          <Stack pl={4}>
            <Text>
              Angle: <Kbd>left click</Kbd> + <Kbd>drag</Kbd>
            </Text>
            <Text>
              Position: <Kbd>right click</Kbd> + <Kbd>drag</Kbd>
            </Text>
            <Text>
              Zoom: <Kbd>scroll wheel</Kbd>
            </Text>
          </Stack>
        </>
      ) : (
        <IconButton
          aria-label='Toggle Viewer Control Hints'
          icon={<ChevronDownIcon />}
          variant='ghost'
          onClick={() => toggleOpen()}
        />
      )}
    </Box>
  )
}
