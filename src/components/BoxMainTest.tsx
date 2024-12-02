import { TextureLoader } from 'three';
import { useLoader } from "@react-three/fiber"
import * as THREE from "three"
export default function BoxMainTest() {
  // useLoader: carga una textura(una imagen) desde la ruta especificada
  const stone = useLoader(TextureLoader, './bricks/basecolor.jpg')
  // stone: La textura base de la superficie(basecolor) de un ladrillo
  // stone.minFilter y stone.magFilter: configura el filtro de minificacion y magnificación de la textura cargada. THREE.NearestFilter se usa para aplicar un filtro simple que es rapido pero menos detallado. Esto es util para cuando las texturas se aplican a objectos pequeños o se encuentran a grandes distancias.
    stone.minFilter = THREE.NearestFilter
    stone.magFilter = THREE.NearestFilter;
  // normalMap: Mapa de normales, usado para simular detalles adicionales en la superficie sin aumentar la geometria real.
    const normalMap = useLoader(TextureLoader, './bricks/normal.jpg')
  // aomap: Mapa de oclusion ambiental, ayuda a mejorar la iluminacion y la sombra en las areas mas profundas del modelo
    const aoMap = useLoader(
      TextureLoader,
      './bricks/ao.jpg'
    )
  
  // roughnessMap: Mapa de rugosidad, determina cuan suave o rugosa sera la superficie del material
    const roughnessMap = useLoader(
      TextureLoader,
      './bricks/roughness.jpg'
    )
  // disMap: mapa de desplazamiento, usado para modificiar fisicamente la geometria del objeto, dando la apariencia de mas detalles sin agregar mas vertices
    const disMap = useLoader(
      TextureLoader,
      './bricks/displacement.png'
    )
  return (
    <mesh position={[0, 0, 0]}
    >
     {/* Es la herramienta que deicide la forma de tu objeto. En este caso, estas eligiendo un cubo, los numeros del cubo representan (ancho, alto y profundidad) */}
     <boxGeometry args={[2, 2, 2, 120, 120, 120]} />
     {/*Esta etiqueta es como la pintura que pones sobre tu cubo para darle color*/}
     <meshStandardMaterial
      map={stone} 
      normalMap={normalMap}
      aoMap={aoMap}
      roughnessMap={roughnessMap}
      displacementMap={disMap}
      displacementScale={0.00}
      />
   </mesh>
  )
}
