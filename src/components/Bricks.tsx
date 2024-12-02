import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber"
import * as THREE from "three"
export default function Bricks() {
  const stone = useLoader(TextureLoader, './block/stone.png')
  stone.minFilter = THREE.NearestFilter;
  stone.magFilter = THREE.NearestFilter;

  return (
    <mesh position={[0, 0, 0]}>
    {/* Es la herramienta que deicide la forma de tu objeto. En este caso, estas eligiendo un cubo, los numeros del cubo representan (ancho, alto y profundidad) */}
    <sphereGeometry args={[1,16,16]}/>
    {/*Esta etiqueta es como la pintura que pones sobre tu cubo para darle color*/}
    <meshMatcapMaterial map={stone} />
  </mesh>
  )
}
