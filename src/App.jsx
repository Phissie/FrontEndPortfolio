import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { RGBA_ASTC_10x10_Format } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/*const loader = new THREE.FontLoader();

loader.load('./fonts/Ditsa Calista_DEMO_Regular.json', (font) => {
    const geometry = new THREE.TextGeometry("Fisayo Fagade", {
      font: font,
      size: 6,
      height: 2,
  })
    const textMesh = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ color: cd853f}),
      new THREE.MeshPhongMaterial({color: a52a2a})
  ]) 
} );
*/

function Strawberry({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(
    "/beautifulstrawberryglb-transformed.glb"
  );
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.01),
      (data.rY += 0.01),
      (data.rZ += 0.01)
    );
    ref.current.position.set(data.x * width, (data.y += 0.015), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.Strawberry.geometry}
      material={nodes.Strawberry.material}
      geometry={nodes.defaultMaterial001.geometry}
      material={nodes.defaultMaterial001.material}
      geometry={nodes.defaultMaterial002.geometry}
      material={nodes.defaultMaterial002.material}
      position={[0, -0.12, 0]}
    />
  );
}

export default function App({ count = 190, depth = 80 }) {
  return (
    <>
      <h1
        style={{
          position: "absolute",
          color: "#630011",
          top: "200px",
          fontSize: "62px",
          zIndex: "100",
          margin: "0 auto",
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        Fisayo Fagade
      </h1>
      <Canvas gl={{ alpha: false }} camera={{ fov: 45 }}>
        <color attach="background" args={["#ffe4e1"]} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          {Array.from({ length: count }, (_, i) => (
            <Strawberry key={i} z={-(i / count) * depth} />
          ))}
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.5}
              bokehScale={12}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}
/* put the the different components in the same code but this is very computationally intensive as it is really high. 
To manage it, you need to take into consideration that your mac has a lack of GPU. The interactivity will get harder. MAKE SURE YOU LIMIT YOUR EXPECTATIONS OF HOW WELL IT BE DONE WELL.
HAVE ONLY ONE BUTTON ON THE STRAWBERRY PAGE, ON THE SECOND PAGE, YOU WILL HAVE PROBABLY LESS THINGS.
You need lighting, motion, etc*/
