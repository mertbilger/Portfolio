/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Among USer: Kahlia Bayani (https://sketchfab.com/bayanikahlia)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-office-f1236a3f2f2f456dae6a865f4ed49012
Title: 3D Office
*/

import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Computer(props) {
  const { nodes, materials } = useGLTF('/computer/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.27, 0.04, 0.11]} rotation={[-0.01, 0.91, 0.02]} scale={0}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_1} position={[0, 1.53, 132.24]} rotation={[-Math.PI / 2, 0, 0]} scale={17.41} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_2} position={[0, -135.14, 445.04]} rotation={[-Math.PI / 2, 0, 0]} scale={17.41} />
      </group>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0.02, -0.23, 0.3]} rotation={[-3.12, -0.3, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.material_3} position={[-0.06, -0.23, 0.13]} rotation={[-3.14, -0.3, 3.14]} scale={0.05} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material_4} position={[0.01, 0.01, 0.1]} rotation={[0.03, 0.3, -0.02]} scale={0.03} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.material_5} position={[-0.11, 0.01, 0.11]} rotation={[-0.42, 0.08, 0.08]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
