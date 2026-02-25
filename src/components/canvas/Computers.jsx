// Computers.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./gaming_pc/scene.gltf");

  return (
    <mesh>

      <ambientLight intensity={0.3} />

      <hemisphereLight intensity={0.6} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={15} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
