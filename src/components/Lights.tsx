

export default function Lights() {
  return (
    <>
    {/* directionalLight Esta es una fuente de luz direcciona lo que significa que emite luz en una direccion especifica, similar a como el sol ilumina todo de manera uniforme desde una direccion. A diferneci de otras funte de luz, como los puntuales, no tiene un orige fijo y sus rayos son paralelos. Es util para simular luz natural o solar */}
       <directionalLight
        position={[5,5,5]}
        color={'white'}
        intensity={1.4}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        />       
    {/* ambientLight Esta es una luz ambiental. A diferencia de la luz direccional, la luz ambiental no tiene una dirección específica, sino que ilumina de manera uniforme todo el entorno. Es útil para dar una iluminación suave a las áreas que no están directamente iluminadas por otras fuentes de luz. En otras palabras, la luz ambiental es una luz global que afecta a toda la escena de manera uniforme. */}
       <ambientLight intensity={0.2} color={"green"} />
    </>
  )
}
