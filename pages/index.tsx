import { Box } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import HomeCanvas from '../components/Home/HomeCanvas'
import ViewerControl from '../components/Home/ViewerControl'

const Home: NextPage = () => {
  // const router = useRouter()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const handleMinify = () => {
    // setTimeout(() => {
    //   router.push('/hi')
    // }, 750)
  }
  const handleMaximize = () => {
    if (!isOpen) toggleOpen()
  }
  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) toggleOpen()
    },
    [isOpen, toggleOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [onEscape])

  return (
    <div>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Student and Software Developer' />
        <link rel='icon' href='/favicon.ico' />
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
          zIndex={5}
          shadow={isOpen ? '' : '0 0 40px white'}
          animate={
            isOpen
              ? { width: '100%', height: '100vh' }
              : {
                  width: 'clamp(100px, 15vw, 400px)',
                  aspectRatio: '1',
                  cursor: 'pointer',
                  borderRadius: '50%',
                }
          }
        >
          <HomeCanvas isOpen={isOpen} />
          {isOpen && <ViewerControl />}
        </Box>
      </Box>
    </div>
  )
}

export default Home
