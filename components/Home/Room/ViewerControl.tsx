import {
  ChevronDownIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons'
import { Box, IconButton, Kbd, Stack, Text } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'
import { useIsMobile } from '../../../hooks'

export default function ViewerControl({
  handleMinify,
  isShown,
}: {
  handleMinify: () => void
  isShown: boolean
}) {
  const [isOpen, toggleOpen] = useCycle(true, false)
  const { isMobile } = useIsMobile()

  if (!isShown) return null
  return (
    <>
      <IconButton
        aria-label='Toggle Viewer Open'
        icon={<SmallCloseIcon />}
        variant='ghost'
        onClick={() => handleMinify()}
        position='absolute'
        top={0}
        left={0}
        m={4}
        shadow='0 0 20px white'
        borderRadius='20px'
        bg='white'
      />
      {!isMobile && (
        <Box
          as={motion.div}
          position='absolute'
          top={0}
          right={0}
          m={4}
          shadow='0 0 20px white'
          rounded='md'
          bg='white'
          overflow='hidden'
          animate={
            isOpen
              ? { width: 'max-content', height: 'max-content' }
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

              <Stack p={4} pt={0} whiteSpace='nowrap'>
                <Text>
                  Angle: <Kbd>left click</Kbd> + <Kbd>drag</Kbd>
                </Text>
                <Text>
                  Position: <Kbd>right click</Kbd> + <Kbd>drag</Kbd>
                </Text>
                <Text>
                  Zoom: <Kbd>scroll wheel</Kbd>
                </Text>
                <Text>
                  Minify: <Kbd>escape</Kbd>
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
      )}
    </>
  )
}
