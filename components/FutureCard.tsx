"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FutureCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <section
      ref={ref}
      className="relative z-10 py-[200px] flex justify-center items-center"
    >
      <motion.div
        style={{ scale, opacity, backdropFilter: blur }}
        className="relative max-w-4xl w-full mx-6 rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/15 p-16"
      >
        <h3 className="text-4xl font-semibold mb-6">
          Building the Future of Digital Presence
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          We merge strategy, technology, and design to create digital experiences
          that feel intuitive, intelligent, and ahead of their time. Every
          system we build is scalable, adaptive, and engineered for long-term
          impact.
        </p>
      </motion.div>
    </section>
  );
}
