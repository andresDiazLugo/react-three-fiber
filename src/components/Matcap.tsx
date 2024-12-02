import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber"
export default function Matcap() {
  const matcap = useLoader(TextureLoader, './matcaps/matcap5.png')
  return (
    <mesh position={[-3, 0, 0]}>
    {/* Es la herramienta que deicide la forma de tu objeto. En este caso, estas eligiendo un cubo, los numeros del cubo representan (ancho, alto y profundidad) */}
    <torusKnotGeometry args={[1,0.3,100,100]}/>
    {/*Esta etiqueta es como la pintura que pones sobre tu cubo para darle color*/}
    <meshMatcapMaterial matcap={matcap}/>
  </mesh>
  )
}
