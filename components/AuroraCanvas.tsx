"use client";

import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    const drawAurora = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Purple Aurora
      const grad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 200,
        height * 0.4 + Math.cos(time) * 200,
        100,
        width * 0.3,
        height * 0.4,
        800
      );
      grad1.addColorStop(0, "rgba(168,85,247,0.35)");
      grad1.addColorStop(1, "transparent");

      // Blue Aurora
      const grad2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 1.2) * 250,
        height * 0.6 + Math.sin(time * 1.2) * 250,
        100,
        width * 0.7,
        height * 0.6,
        900
      );
      grad2.addColorStop(0, "rgba(59,130,246,0.35)");
      grad2.addColorStop(1, "transparent");

      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
