"use client";

import { motion, useScroll, useTransform } from "framer-motion";


export default function SpiralOrb() {
  const { scrollY } = useScroll();

  /* Slow parallax movement */
  const y = useTransform(scrollY, [0, 1200], [0, -120]);
  const rotate = useTransform(scrollY, [0, 1200], [0, 40]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[5]
        flex
        items-center
        justify-center
      "
    >
      {/* Outer spiral */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="
          w-[520px]
          h-[520px]
          rounded-full
          border border-white/10
          blur-[0.3px]
          relative
        "
      >
        {/* Inner spiral ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="
            absolute inset-10
            rounded-full
            border border-purple-400/20
          "
        />

        {/* Core glow */}
        <div
          className="
            absolute
            inset-24
            rounded-full
            bg-gradient-to-tr
            from-purple-500/20
            to-cyan-400/20
            blur-[40px]
          "
        />
      </motion.div>
    </motion.div>
  );
}
