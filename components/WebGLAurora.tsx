"use client";

import { useEffect, useRef } from "react";

export default function WebGLAurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const animate = () => {
      t += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      // PURPLE AURORA
      const purple = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(t) * 300,
        canvas.height * 0.4 + Math.cos(t * 1.2) * 300,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.8
      );

      purple.addColorStop(0, "rgba(168,85,247,0.65)");
      purple.addColorStop(0.5, "rgba(168,85,247,0.25)");
      purple.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = purple;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // BLUE AURORA
      const blue = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(t * 1.4) * 320,
        canvas.height * 0.6 + Math.sin(t * 1.1) * 320,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.8
      );

      blue.addColorStop(0, "rgba(59,130,246,0.6)");
      blue.addColorStop(0.5, "rgba(59,130,246,0.22)");
      blue.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = blue;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
