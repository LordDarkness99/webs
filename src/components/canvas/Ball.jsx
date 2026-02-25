import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 5]} intensity={1} />

      <mesh castShadow receiveShadow scale={2.75}>
        {/* 🔥 Smooth Sphere Geometry */}
        <sphereGeometry args={[1, 64, 64]} />

        {/* Smooth Material (No flatShading) */}
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
        />

        {/* Icon Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
