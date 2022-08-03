import { Box, Button } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'

export default function Minify({ handleMinify }: { handleMinify: () => void }) {
  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleMinify()
    },
    [handleMinify]
  )

  useEffect(() => {
    document.addEventListener('keydown', onEscape)

    return () => {
      document.removeEventListener('keydown', onEscape)
    }
  }, [onEscape])
  return (
    <Box
      position='absolute'
      bottom={0}
      right={0}
      w={32}
      h={12}
      m={4}
      shadow='0 0 20px white'
      borderRadius='md'
      overflow='hidden'
    >
      <Button onClick={handleMinify} w={32} h={12} overflow='hidden'>
        See More
      </Button>
    </Box>
  )
}
