import {
  BakeShadows,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Canvas, Vector3 } from '@react-three/fiber'
import { Suspense } from 'react'
import { isMobile } from 'react-device-detect'
import Model from '../Desk'
import Background from './Background'

export default function HomeCanvas({ isOpen }: { isOpen: boolean }) {
  const position = isMobile
    ? ([-5.5, 1, 0] as Vector3)
    : ([-2, 1, 0] as Vector3)
  return (
    <Canvas
      style={{ height: '100%' }}
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <PerspectiveCamera
        makeDefault
        position={isOpen ? position : [-3, 1, 0]}
        fov={50}
        far={1000}
        near={0.1}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls maxPolarAngle={Math.PI / 2} autoRotate={!isOpen} />
      <BakeShadows />
    </Canvas>
  )
}
