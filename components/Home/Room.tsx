import { Box } from '@chakra-ui/react'
import { useGLTF } from '@react-three/drei'
import { motion, useCycle } from 'framer-motion'
import { useCallback, useEffect } from 'react'
import HomeCanvas from './HomeCanvas'
import ViewerControl from './ViewerControl'

export default function Room() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isLoading, toggleLoading] = useCycle(false, true)

  const handleToggleOpen = useCallback(() => {
    toggleLoading()
    toggleOpen()
    setTimeout(toggleLoading, 1)
  }, [toggleLoading, toggleOpen])

  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) handleToggleOpen()
    },
    [isOpen, handleToggleOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [onEscape])

  const handleMaximize = () => {
    if (!isOpen) handleToggleOpen()
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='100%'
      h='100vh'
      zIndex={-1}
      backgroundColor='#030106'
    >
      <Box
        as={motion.div}
        onClick={handleMaximize}
        overflow='hidden'
        zIndex={1}
        boxShadow='0 0 40px white'
        borderRadius='50%'
        animate={
          isOpen
            ? {
                width: '100%',
                height: '100vh',
                borderRadius: 0,
                transition: { ease: 'easeInOut' },
              }
            : {
                width: 'clamp(100px, max(15vw, 20vh), 400px)',
                height: 'clamp(100px, max(15vw, 20vh), 400px)',
                cursor: 'pointer',
                borderRadius: '50%',
                transition: { ease: 'easeInOut' },
              }
        }
      >
        {!isLoading && <HomeCanvas isOpen={isOpen} />}
        <ViewerControl handleMinify={handleToggleOpen} isShown={isOpen} />
      </Box>
    </Box>
  )
}

useGLTF.preload('/Desk.glb')
