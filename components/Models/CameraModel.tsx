"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function CameraModel() {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
  if (!ref.current) return;

  const progress = scroll.offset;

  ref.current.rotation.y = progress * Math.PI * 2;
  ref.current.rotation.x = progress * 0.6;
  ref.current.position.z = 2 - progress * 2;
});


  return (
    <group ref={ref}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[2, 1.2, 1]} />
        <meshStandardMaterial color="#111" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Lens */}
      <mesh position={[0, 0, 0.6]}>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 32]} />
        <meshStandardMaterial
          color="#222"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
