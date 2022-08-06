import { Box } from '@chakra-ui/react'
import {
  BakeShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import Background from './Background'
import Model from './Desk'

export default function HomeCanvas({ isOpen }: { isOpen: boolean }) {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])
  const position = isMobileDevice
    ? ([-5.5, 1, 0] as Vector3)
    : ([-2, 1, 0] as Vector3)
  return (
    <Suspense fallback={<Box backgroundColor='white' w='100%' h='100%' />}>
      <Canvas
        style={{ height: '100%' }}
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
      >
        <Background />
        <PerspectiveCamera
          makeDefault
          position={isOpen ? position : [-3, 1, 0]}
          fov={50}
          far={1000}
          near={0.1}
        />
        <Model />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          autoRotate={!isOpen}
          enablePan={isOpen}
          enableZoom={isOpen}
          enableRotate={isOpen}
        />
        <BakeShadows />
      </Canvas>
    </Suspense>
  )
}
