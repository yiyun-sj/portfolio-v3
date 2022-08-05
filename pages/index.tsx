import { Box, Text } from '@chakra-ui/react'
import { useGLTF } from '@react-three/drei'
import { motion, useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import HomeCanvas from '../components/Home/HomeCanvas'
import ViewerControl from '../components/Home/ViewerControl'

export async function getStaticProps() {
  useGLTF.preload('/Desk.glb')
  return {}
}

const Home: NextPage = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [isLoading, toggleLoading] = useCycle(false, true)

  const handleToggleOpen = useCallback(() => {
    toggleLoading()
    toggleOpen()
    setTimeout(() => {
      toggleLoading()
    }, 1)
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
    <>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Student and Software Developer' />
      </Head>

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

      <Box position='absolute' top={0} left={0} m={4} textColor='white'>
        <Text
          fontFamily='sans-serif'
          fontWeight='bold'
          fontSize={88}
          lineHeight={1}
        >
          YIYUN JIA
        </Text>
        <Text fontFamily='sans-serif' fontWeight='bold' fontSize={36}>
          SOFTWARE DEVELOPER
        </Text>
      </Box>
    </>
  )
}

export default Home
