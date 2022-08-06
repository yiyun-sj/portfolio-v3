import { Box } from '@chakra-ui/react'
import { useGLTF } from '@react-three/drei'
import { motion, useCycle } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import HomeCanvas from './HomeCanvas'
import ViewerControl from './ViewerControl'

export function Room() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isLoading, toggleLoading] = useCycle(false, true)
  const [height, setHeight] = useState<string | number>('100vh')

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

  useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener('resize', () => setHeight(window.innerHeight))
    return window.removeEventListener('resize', () =>
      setHeight(window.innerHeight)
    )
  }, [])

  const handleMaximize = () => {
    if (!isOpen) handleToggleOpen()
  }

  return (
    <Box
      as={motion.div}
      onClick={handleMaximize}
      overflow='hidden'
      boxShadow='0 0 40px white'
      borderRadius='50%'
      backgroundColor='#030106'
      animate={
        isOpen
          ? {
              position: 'fixed',
              width: '100%',
              height,
              borderRadius: 0,
              top: 0,
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
  )
}

useGLTF.preload('/Desk.glb')
