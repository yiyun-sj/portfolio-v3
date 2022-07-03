import {
  BakeShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Suspense } from 'react'
import { isMobile } from 'react-device-detect'
import Background from '../components/Background'
import Model from '../components/Desk'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yiyun Jia</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Canvas
          style={{ height: '100vh' }}
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <PerspectiveCamera
            makeDefault
            position={isMobile ? [-5.5, 1, 0] : [-2, 1, 0]}
            fov={50}
            far={1000}
            near={0.1}
          />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls maxPolarAngle={Math.PI / 2} />
          <BakeShadows />
        </Canvas>
      </div>
    </div>
  )
}

export default Home
