"use client";

import { motion } from "framer-motion";
import AuroraCanvas from "@/components/AuroraCanvas";
import GrainOverlay from "@/components/GrainOverlay";
import MagneticButton from "@/components/MagneticButton";
import LiquidCard from "@/components/LiquidCard";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <AuroraCanvas />
      <GrainOverlay />

      {/* ================= HERO ================= */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-semibold mb-8">
            Crafting Elite Digital Experiences for Modern Brands.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12">
            We design, develop, and scale digital products that define presence,
            performance, and perception.
          </p>

          <MagneticButton>
            Start Your Digital Transformation
          </MagneticButton>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative z-20 py-32 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6"
        >
          A Premium Digital Partner
        </motion.h2>

        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
          At Apex Digital, we don’t just build websites or apps — we engineer
          digital ecosystems. Every interaction, every pixel, and every line of
          code is purposefully designed to elevate your brand and deliver
          measurable results.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative z-20 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <LiquidCard title="Website Development">
            Precision-crafted websites built for speed, security, and
            sophistication. Designed to impress. Engineered to convert.
          </LiquidCard>

          <LiquidCard title="App Development">
            Scalable, intuitive applications developed with cutting-edge
            technology to deliver seamless user experiences across platforms.
          </LiquidCard>

          <LiquidCard title="Digital Content Creation">
            High-impact visual and written content that communicates authority,
            builds trust, and strengthens brand identity.
          </LiquidCard>

          <LiquidCard title="Social Media Handling">
            Strategic social media management focused on consistency, creativity,
            and growth — backed by data and insights.
          </LiquidCard>
        </div>
      </section>

      {/* ================= WHY APEX ================= */}
      <section className="relative z-20 py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">
          Built Different. Designed to Lead.
        </h2>

        <ul className="space-y-4 text-gray-400 text-lg">
          <li>• Strategy-driven execution</li>
          <li>• Clean, high-end design aesthetics</li>
          <li>• Performance-optimized development</li>
          <li>• Brand-focused storytelling</li>
          <li>• Long-term digital scalability</li>
        </ul>

        <p className="mt-6 text-gray-500">
          We focus on quality, precision, and results — never shortcuts.
        </p>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="relative z-20 py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">
          Excellence Is Not Optional
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl">
          We believe premium brands require premium execution. From concept to
          launch, every project is handled with detail, discipline, and
          dedication.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative z-20 py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Build Something Exceptional?
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s create a digital presence that positions your brand at the top.
        </p>

        <MagneticButton>
          Get Started With Apex Digital
        </MagneticButton>

        <p className="mt-8 text-gray-500">
          📩 apex.digitalcmp@gmail.com
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-20 py-16 text-center text-gray-500">
        Apex Digital — Strategy. Design. Technology. Elevated.
      </footer>
    </main>
  );
}
