/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Canvas} from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Camera from "./components/Camera"
// import Matcap from "./components/Matcap";
import { Suspense } from "react";
// import Bricks from "./components/Bricks";
// import BoxMainTest from "./components/BoxMainTest";
import Lights from "./components/Lights";
import { Minecraft } from "./components/Minecraft";
import * as THREE from "three"
function App() {
  return (
    <div
    className="container"
    >
    {/*Es como tu espacio de trabajo, la mesa magica donde vas a construir tu escultura,sin canvas no puedes empezar a crear nada en 3D  */}
    <Canvas
    gl={{
      antialias: true,
      toneMapping: THREE.ReinhardToneMapping,
      toneMappingExposure: 1.5
    }}
    shadows={true}
    >
      <Camera/>
      <Lights/>
      {/* Es la base de la escultura, Un mesh es como el esqueleto que define la forma de tu objecto 3D */}
      {/* <mesh position={[3, 0, 0]} */}
       {/* rotation-y={Math.PI * 0.50} */}
       {/* rotation-x={Math.PI * 0.70}> */}
        {/* Es la herramienta que deicide la forma de tu objeto. En este caso, estas eligiendo un cubo, los numeros del cubo representan (ancho, alto y profundidad) */}
        {/* <boxGeometry args={[2, 2, 2]} /> */}
        {/* @ts-ignore */}
        {/*Esta etiqueta es como la pintura que pones sobre tu cubo para darle color*/}
        {/* <meshNormalMaterial flatShading={true}/> */}
      {/* </mesh> */}
      <Suspense fallback={null}>
        <Environment files={'./hdr/decor_shop_1k.hdr'}/>
        {/* <BoxMainTest/> */}
        {/* <Bricks/>
        <Matcap/> */}
        <Minecraft/>
      </Suspense> 
      <OrbitControls target={[1, 10, 0]} />
    </Canvas>
    </div>
  )
}

export default App
