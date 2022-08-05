/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body2: THREE.Mesh
    Body2_1: THREE.Mesh
    Cube000: THREE.Mesh
    Cube000_1: THREE.Mesh
    Cube000_2: THREE.Mesh
    Cube000_3: THREE.Mesh
    Cube041: THREE.Mesh
    Cube041_1: THREE.Mesh
    Cube041_2: THREE.Mesh
    Cube041_3: THREE.Mesh
    HSeatPan: THREE.Mesh
    HSeatPan_1: THREE.Mesh
    HSeatPan_2: THREE.Mesh
    HSeatPan_3: THREE.Mesh
    HSeatPan_4: THREE.Mesh
    Monitor: THREE.Mesh
    ['G-__555564']: THREE.Mesh
    ['G-__555564_1']: THREE.Mesh
    Big_Buttons001: THREE.Mesh
    Big_Buttons001_1: THREE.Mesh
    Big_Buttons001_2: THREE.Mesh
  }
  materials: {
    ['Plastic - Matte (Black)']: THREE.MeshStandardMaterial
    ['Aluminum - Brushed Linear']: THREE.MeshStandardMaterial
    body: THREE.MeshStandardMaterial
    ['Black Metal']: THREE.MeshPhysicalMaterial
    ['White Light']: THREE.MeshStandardMaterial
    ['Matte White']: THREE.MeshStandardMaterial
    ['body.001']: THREE.MeshStandardMaterial
    ['Black Metal.001']: THREE.MeshPhysicalMaterial
    ['White Light.001']: THREE.MeshStandardMaterial
    ['Matte White.001']: THREE.MeshStandardMaterial
    ['HMI-G1 (Graphite1']: THREE.MeshStandardMaterial
    ['HMI- BK (Black)1']: THREE.MeshStandardMaterial
    ['*6']: THREE.MeshStandardMaterial
    ['HMI-G1 (Graph1']: THREE.MeshStandardMaterial
    ['HMI- 3Q01 (Graph1']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    anta_simplicia_cenere: THREE.MeshStandardMaterial
    Big_Buttons: THREE.MeshStandardMaterial
    Small_Buttons: THREE.MeshStandardMaterial
    Chassis: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/Desk.glb') as GLTFResult
  return (
    <group ref={group} position={[0, -0.8, 0]} {...props} dispose={null}>
      <group
        name='Stand_Body'
        position={[0.89048868, 0.88499993, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.01}
      >
        <mesh
          name='Body2'
          castShadow
          receiveShadow
          geometry={nodes.Body2.geometry}
          material={materials['Plastic - Matte (Black)']}
        />
        <mesh
          name='Body2_1'
          castShadow
          receiveShadow
          geometry={nodes.Body2_1.geometry}
          material={materials['Aluminum - Brushed Linear']}
        />
      </group>
      <group
        name='Yamaha_HS5_R'
        position={[0.89999998, 0.88616633, 0.89999998]}
        rotation={[Math.PI, -1.13446396, Math.PI]}
      >
        <mesh
          name='Cube000'
          castShadow
          receiveShadow
          geometry={nodes.Cube000.geometry}
          material={materials.body}
        />
        <mesh
          name='Cube000_1'
          castShadow
          receiveShadow
          geometry={nodes.Cube000_1.geometry}
          material={materials['Black Metal']}
        />
        <mesh
          name='Cube000_2'
          castShadow
          receiveShadow
          geometry={nodes.Cube000_2.geometry}
          material={materials['White Light']}
        />
        <mesh
          name='Cube000_3'
          castShadow
          receiveShadow
          geometry={nodes.Cube000_3.geometry}
          material={materials['Matte White']}
        />
      </group>
      <group
        name='Yamaha_HS5_L'
        position={[0.89999998, 0.8870495, -0.89999998]}
        rotation={[0, -1.13446404, 0]}
      >
        <mesh
          name='Cube041'
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials['body.001']}
        />
        <mesh
          name='Cube041_1'
          castShadow
          receiveShadow
          geometry={nodes.Cube041_1.geometry}
          material={materials['Black Metal.001']}
        />
        <mesh
          name='Cube041_2'
          castShadow
          receiveShadow
          geometry={nodes.Cube041_2.geometry}
          material={materials['White Light.001']}
        />
        <mesh
          name='Cube041_3'
          castShadow
          receiveShadow
          geometry={nodes.Cube041_3.geometry}
          material={materials['Matte White.001']}
        />
      </group>
      <group
        name='Chair'
        position={[0, 0.50323933, 0]}
        rotation={[0.00279077, 1.08711624, -0.00158417]}
      >
        <mesh
          name='HSeatPan'
          castShadow
          receiveShadow
          geometry={nodes.HSeatPan.geometry}
          material={materials['HMI-G1 (Graphite1']}
        />
        <mesh
          name='HSeatPan_1'
          castShadow
          receiveShadow
          geometry={nodes.HSeatPan_1.geometry}
          material={materials['HMI- BK (Black)1']}
        />
        <mesh
          name='HSeatPan_2'
          castShadow
          receiveShadow
          geometry={nodes.HSeatPan_2.geometry}
          material={materials['*6']}
        />
        <mesh
          name='HSeatPan_3'
          castShadow
          receiveShadow
          geometry={nodes.HSeatPan_3.geometry}
          material={materials['HMI-G1 (Graph1']}
        />
        <mesh
          name='HSeatPan_4'
          castShadow
          receiveShadow
          geometry={nodes.HSeatPan_4.geometry}
          material={materials['HMI- 3Q01 (Graph1']}
        />
      </group>
      <mesh
        name='Monitor'
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials['Material.010']}
        position={[0.32444215, 0.72931647, 0.03871876]}
      />
      <group
        name='Table'
        position={[0.5, 0.72999996, 0]}
        rotation={[-Math.PI, 9e-8, -Math.PI]}
      >
        <mesh
          name='G-__555564'
          castShadow
          receiveShadow
          geometry={nodes['G-__555564'].geometry}
          material={materials.Material}
        />
        <mesh
          name='G-__555564_1'
          castShadow
          receiveShadow
          geometry={nodes['G-__555564_1'].geometry}
          material={materials.anta_simplicia_cenere}
        />
      </group>
      <group
        name='Keyboard'
        position={[0.55000001, 0.72931701, 0]}
        rotation={[Math.PI / 2, 3e-8, Math.PI / 2]}
        scale={0.10019965}
      >
        <mesh
          name='Big_Buttons001'
          castShadow
          receiveShadow
          geometry={nodes.Big_Buttons001.geometry}
          material={materials.Big_Buttons}
        />
        <mesh
          name='Big_Buttons001_1'
          castShadow
          receiveShadow
          geometry={nodes.Big_Buttons001_1.geometry}
          material={materials.Small_Buttons}
        />
        <mesh
          name='Big_Buttons001_2'
          castShadow
          receiveShadow
          geometry={nodes.Big_Buttons001_2.geometry}
          material={materials.Chassis}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Desk.glb')
