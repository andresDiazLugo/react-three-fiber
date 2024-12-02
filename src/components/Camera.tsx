import { PerspectiveCamera } from '@react-three/drei'
export default function Camera() {
  return (
    <PerspectiveCamera
     makeDefault 
     fov={60}
     position={[-20,20,20]} />
  )
}
