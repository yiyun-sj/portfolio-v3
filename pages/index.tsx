import { Box } from '@chakra-ui/react'
import { motion, useCycle } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCanvas from '../components/Home/HomeCanvas'
import Minify from '../components/Home/Minify'
import NameRole from '../components/Home/NameRole'
import ViewerControl from '../components/Home/ViewerControl'

const Home: NextPage = () => {
  // const router = useRouter()
  const [isOpen, toggleOpen] = useCycle(true, false)
  const handleMinify = () => {
    toggleOpen()
    // setTimeout(() => {
    //   router.push('/hi')
    // }, 750)
  }
  const handleMaximize = () => {
    if (!isOpen) {
      toggleOpen()
    }
  }
  return (
    <div>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Student and Software Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box display='flex' justifyContent='center'>
        <Box
          as={motion.div}
          onClick={handleMaximize}
          overflow='hidden'
          animate={
            isOpen
              ? { width: '100%', height: '100vh' }
              : {
                  width: 100,
                  height: 100,
                  cursor: 'pointer',
                  borderRadius: 50,
                  y: 32,
                }
          }
        >
          <HomeCanvas />
          {isOpen && (
            <>
              <ViewerControl />
              <NameRole />
              <Minify handleMinify={handleMinify} />
            </>
          )}
        </Box>
      </Box>
    </div>
  )
}

export default Home
