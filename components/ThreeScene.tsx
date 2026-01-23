"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Environment } from "@react-three/drei";
import CameraModel from "./Models/CameraModel";

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* Scroll controller */}
        <ScrollControls pages={4} damping={0.25}>
          <CameraModel />
        </ScrollControls>

        {/* Environment reflection */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
