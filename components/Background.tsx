import { MeshReflectorMaterial } from '@react-three/drei'

export default function Background() {
  return (
    <>
      <fog attach='fog' args={['#eeeeee', 1, 50]} />
      <color attach='background' args={['#eeeeee']} />
      <mesh
        position={[0, -0.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        scale={3}
      >
        <planeGeometry args={[200, 200]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='#101010'
          metalness={0.5}
          mirror={0}
        />
      </mesh>
      <ambientLight intensity={0.1} />
      <spotLight penumbra={1} position={[-2, 1, 0]} intensity={0.75} />
      <spotLight penumbra={1} position={[3, 6, 0]} intensity={0.4} />
    </>
  )
}
