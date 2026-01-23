"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CameraModel() {
  const { scene } = useGLTF("/3d/camera.glb");
  return <primitive object={scene} scale={1.2} />;
}

export default function CameraScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        {/* Soft lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Camera */}
        <CameraModel />

        {/* Temporary controls (we'll remove later) */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
