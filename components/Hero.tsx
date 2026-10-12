"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

/* Lazy-load both canvases — avoids SSR issues */
const ParticleNetwork = dynamic(() => import("./3d/ParticleNetwork"), { ssr: false });
const ParticleText    = dynamic(() => import("./3d/ParticleText"),    { ssr: false });

/* Services cycle in the typewriter subtitle */
const SERVICES = [
  "Web Development",
  "App Development",
  "Social Media Marketing",
  "Logo & Brand Design",
  "Graphic Design",
  "Video Editing",
];

function Typewriter() {
  const [idx, setIdx]           = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const full = SERVICES[idx];
    if (!deleting && displayed.length < full.length) {
      const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === full.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % SERVICES.length);
    }
  }, [displayed, deleting, idx]);

  return (
    <span className="text-slate-300">
      We do{" "}
      <span className="text-[#e35c24] font-semibold">
        {displayed}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0d] pt-20 pb-10 sm:pt-0 sm:pb-0"
    >
      {/* ── Full-screen particle constellation background ── */}
      <ParticleNetwork />

      {/* Dark vignette so particle text pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#0a0a0d_100%)] pointer-events-none" />

      {/* ── Centered content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-6xl mx-auto">

        {/* ── Mobile Crisp Typography Heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden text-3xl sm:text-4xl font-black uppercase tracking-tight leading-[1.12] text-white font-[family-name:var(--font-montserrat)] px-2 max-w-sm sm:max-w-md mx-auto"
        >
          WE CAN HELP YOU GROW YOUR{" "}
          <span className="text-[#e35c24] drop-shadow-[0_0_25px_rgba(227,92,36,0.6)]">
            BUSINESS
          </span>
          <span className="text-white">.</span>
        </motion.h1>

        {/* ── Desktop Interactive PARTICLE TEXT heading ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:flex w-full justify-center"
          /* pointer-events on so mouse repulsion works */
        >
          <ParticleText height={230} className="w-full" />
        </motion.div>

        {/* Orange underline accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-2 h-[3px] w-36 sm:w-52 bg-gradient-to-r from-transparent via-[#e35c24] to-transparent rounded-full"
        />

        {/* Typewriter subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-4 sm:mt-6 text-base sm:text-2xl font-medium min-h-[2rem]"
        >
          <Typewriter />
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-6 sm:mt-10"
        >
          <Link
            href="#contactus"
            className="inline-flex items-center gap-2.5 sm:gap-3 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border border-white/30 bg-transparent hover:bg-white/[0.08] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:border-[#e35c24] hover:shadow-[0_0_28px_rgba(227,92,36,0.35)] group"
          >
            <span>Contact us</span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e35c24] flex items-center justify-center shadow-[0_0_12px_rgba(227,92,36,0.6)] group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07070a] to-transparent pointer-events-none" />
    </section>
  );
}
