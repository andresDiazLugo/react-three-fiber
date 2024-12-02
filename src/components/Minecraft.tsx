import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import * as THREE from "three";

interface GLTFResult extends THREE.Object3D {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
}

export function Minecraft(props: GroupProps) {
  const { nodes, materials } = useGLTF('./minecraft/Minecraft.gltf') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pisso.geometry} material={materials.Chisel} castShadow receiveShadow />
      <mesh geometry={nodes.rejilla.geometry} material={materials.Block_1} castShadow receiveShadow />
      <mesh geometry={nodes.cubos_musgo.geometry} material={materials.Musgo} castShadow receiveShadow />
      <mesh geometry={nodes.cubo_ladrillo.geometry} material={materials.Pared2} castShadow receiveShadow />
      <mesh geometry={nodes.barril_1.geometry} material={materials.block_3} castShadow receiveShadow />
      <mesh geometry={nodes.cubo_sincel.geometry} material={materials.Caja} castShadow receiveShadow />
      <mesh geometry={nodes.pozo_cubo.geometry} material={materials.Caja} castShadow receiveShadow />
      <mesh geometry={nodes.chest_1.geometry} material={materials['Caja 2']} castShadow receiveShadow />
      <mesh geometry={nodes.chest_2.geometry} material={materials['Caja 2']} castShadow receiveShadow />
      <mesh geometry={nodes.antorchas.geometry} material={materials.Antorcha} castShadow receiveShadow />
      <mesh geometry={nodes.barril_2.geometry} material={materials.block_3} castShadow receiveShadow />
      <group position={[0, -2, 0]}>
        <mesh geometry={nodes.Cube296.geometry} material={materials.block_4_1} castShadow receiveShadow />
        <mesh geometry={nodes.Cube296_1.geometry} material={materials.block_4} castShadow receiveShadow />
      </group>
      <mesh geometry={nodes.Cube122.geometry} material={materials.Tronco_Tapa} castShadow receiveShadow />
      <mesh geometry={nodes.Cube122_1.geometry} material={materials.Tronco} castShadow receiveShadow />
      <mesh geometry={nodes.Cube176.geometry} material={materials.HornoTop} castShadow receiveShadow />
      <mesh geometry={nodes.Cube176_1.geometry} material={materials.HornoParedes} castShadow receiveShadow />
      <mesh geometry={nodes.Cube176_2.geometry} material={materials.Horno} castShadow receiveShadow />
      <mesh geometry={nodes.Cube186.geometry} material={materials['table front']} castShadow receiveShadow />
      <mesh geometry={nodes.Cube186_1.geometry} material={materials.Mesa} castShadow receiveShadow />
      <mesh geometry={nodes.Cube194.geometry} material={materials.block_4_1} castShadow receiveShadow />
      <mesh geometry={nodes.Cube194_1.geometry} material={materials.block_4} castShadow receiveShadow />
      <mesh geometry={nodes.Cube266.geometry} material={materials.musgo_2} castShadow receiveShadow />
      <mesh geometry={nodes.Cube266_1.geometry} material={materials.flores} castShadow receiveShadow />
    </group>
  );
}

useGLTF.preload('./minecraft/Minecraft.gltf');