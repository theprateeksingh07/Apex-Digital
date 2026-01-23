"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = `${currentX}px`;
        dotRef.current.style.top = `${currentY}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "10px",        // ≈ 0.5mm
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
        zIndex: 2147483647,
        pointerEvents: "none",
        mixBlendMode: "difference", // key Orfeo trick
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
