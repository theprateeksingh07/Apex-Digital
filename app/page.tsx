"use client";

/* ============================================================
   IMPORTS
============================================================ */

import CameraScene from "@/components/CameraScene";
import { useState, useRef } from "react";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ============================================================
   AURORA BACKGROUND
============================================================ */

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[30%] -left-[20%] w-[900px] h-[900px] bg-purple-500/25 rounded-full blur-[220px]" />
      <div className="absolute top-[20%] -right-[25%] w-[800px] h-[800px] bg-blue-500/25 rounded-full blur-[220px]" />
    </div>
  );
}

/* ============================================================
   NAVBAR (EXPANDS ON SCROLL)
============================================================ */

function Navbar() {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 120], ["90%", "100%"]);
  const radius = useTransform(scrollY, [0, 120], ["9999px", "0px"]);
  const top = useTransform(scrollY, [0, 120], ["1rem", "0rem"]);

  return (
    <motion.nav
      style={{ width, borderRadius: radius, top }}
      className="fixed left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10">
        <span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Apex Digital
        </span>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="ml-2 rounded-full px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-black font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============================================================
   HERO LOGO ANIMATION
============================================================ */

function AnimatedLogo() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const apexX = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const digitalX = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <div ref={ref} className="flex justify-center mb-12">
      <motion.div style={{ scale }} className="flex gap-5 text-6xl font-bold">
        <motion.span
          style={{ x: apexX }}
          className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Apex
        </motion.span>
        <motion.span
          style={{ x: digitalX }}
          className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Digital
        </motion.span>
      </motion.div>
    </div>
  );
}

/* ============================================================
   SERVICES DATA (SINGLE SOURCE OF TRUTH)
============================================================ */

const services = [
  {
    title: "Content Creation",
    description:
      "Elevate your visibility with high-performance SEO strategies. We combine technical precision with AI-enhanced keyword research to secure top-tier rankings, drive organic traffic, and turn search intent into sustainable business growth.",
    image: "/services/content.jpg",
  },
  {
    title: "Web Development",
    description:
      "We don't just build websites; we engineer high-performance, user-centric platforms designed for growth with flawless responsiveness and security.",
    image: "/services/web.jpg",
  },
  {
    title: "App Development",
    description:
      "Future-ready mobile apps with AI personalization, 5G optimization, and immersive AR/VR experiences.",
    image: "/services/app.jpg",
  },
  {
    title: "Social Media Handling",
    description:
      "End-to-end account management from AI-scheduled posting to real-time community engagement, ensuring growth 24/7.",
    image: "/services/social.jpg",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <main className="relative bg-black text-white overflow-hidden">
      <AuroraBackground />
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <AnimatedLogo />
        <p className="text-gray-400 max-w-2xl mb-10">
          We help startups and small businesses build a strong, modern digital
          identity.
        </p>
        <MagneticButton>Get in Touch</MagneticButton>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-semibold mb-16">What We Do</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT — SERVICE CARDS */}
          <div className="space-y-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 cursor-pointer"
              >
                <h3 className="text-xl font-medium">{service.title}</h3>

                {/* Hover popup description */}
                <AnimatePresence>
                  {activeService === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-4 text-gray-400 text-sm leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>


          {/* RIGHT — 3D CAMERA */}
            <div className="sticky top-32 h-[520px] flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <CameraScene />
              </div>
            </div>

          
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="py-32 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Build a Strong Digital Presence?
        </h2>
        <MagneticButton>Get in Touch</MagneticButton>
      </section>
    </main>
  );
}
