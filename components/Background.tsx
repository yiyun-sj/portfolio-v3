export default function Background() {
  return (
    <>
      <fog attach='fog' args={['#555555', 10, 50]} />
      <color attach='background' args={['#555555']} />
      <mesh
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
        scale={3}
      >
        <planeGeometry args={[200, 200]} />
        <meshPhongMaterial color='f4d1ff' shininess={0} />
      </mesh>
    </>
  )
}
