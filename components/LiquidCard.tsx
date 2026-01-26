"use client";

import { motion } from "framer-motion";

interface LiquidCardProps {
  title: string;
  children: React.ReactNode;
}

export default function LiquidCard({ title, children }: LiquidCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group"
    >
      {/* Liquid sheen effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-liquid-sheen" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{children}</p>
      </div>
    </motion.div>
  );
}
