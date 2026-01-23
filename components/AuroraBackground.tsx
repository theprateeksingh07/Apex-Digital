"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const purpleRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t = 0;

    const animate = () => {
      t += 0.002;

      if (purpleRef.current) {
        purpleRef.current.style.transform = `
          translate(
            ${Math.sin(t) * 260 - 500}px,
            ${Math.cos(t * 1.3) * 260 - 500}px
          )
        `;
      }

      if (blueRef.current) {
        blueRef.current.style.transform = `
          translate(
            ${Math.cos(t * 1.1) * 320 - 500}px,
            ${Math.sin(t) * 320 - 500}px
          )
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={purpleRef}
        className="absolute top-1/3 left-1/4 w-[1100px] h-[1100px] bg-purple-500/40 rounded-full blur-[260px]"
      />
      <div
        ref={blueRef}
        className="absolute top-2/3 right-1/4 w-[1100px] h-[1100px] bg-blue-500/35 rounded-full blur-[280px]"
      />
    </div>
  );
}
