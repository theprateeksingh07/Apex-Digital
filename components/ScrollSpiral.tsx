"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollSpiral() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.15, 0.15, 0]);

  return (
    <motion.div
      style={{ rotate, scale, opacity }}
      className="
        pointer-events-none
        fixed
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[900px] h-[900px]
        z-[1]
      "
    >
      {/* Spiral Ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 blur-[1px]" />

      {/* Inner Glow */}
      <div className="absolute inset-20 rounded-full border border-purple-500/20 blur-[2px]" />

      {/* Outer Glow */}
      <div className="absolute inset-[-80px] rounded-full border border-blue-500/10 blur-[3px]" />
    </motion.div>
  );
}
