import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function Strawberry({ z }) {
  const ref = useRef();
  const { nodes } = useGLTF("/beautifulstrawberryglb-transformed.glb");
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
      material={nodes.defaultMaterial001.material}
      geometry={nodes.defaultMaterial002.geometry}
      position={[0, -0.12, 0]}
    />
  );
}

const StrawberryBackground = ({ count = 190, depth = 80 }) => {
  return (
    <>
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
};

export default StrawberryBackground;
