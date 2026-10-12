"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

/* ── Project images — pure splash, no text needed ── */
const IMAGES = [
  { src: "/services/social-media-new.jpg",    alt: "Social Media Marketing" },
  { src: "/services/logo-design-new.jpg",     alt: "Logo Design" },
  { src: "/services/web-development-new.jpg", alt: "Web Development" },
  { src: "/services/app-development.png",     alt: "App Development" },
  { src: "/services/graphic-design.png",      alt: "Graphic Design" },
  { src: "/services/video-editing.png",       alt: "Video Editing" },
];

const COUNT   = IMAGES.length;

/* ── Sine-wave DNA curve math ── */
function getDNA(norm: number) {          // norm: –0.5 … +0.5
  const cos = Math.cos(norm * Math.PI * 2);
  const sin = Math.sin(norm * Math.PI * 2);
  return {
    scale:   0.50 + 0.50 * ((cos + 1) / 2),   // 0.5 → 1.0
    opacity: 0.15 + 0.85 * ((cos + 1) / 2),   // 0.15 → 1.0
    zIndex:  Math.round(10 + cos * 10),
    rotateY: -sin * 35,                         // ±35°
    y:        sin * 55,                          // vertical wave
    blur:    (1 - (cos + 1) / 2) * 6,          // 0 → 6 px
  };
}

export default function DNAProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX  = useRef<number | null>(null);
  const dragStartAct = useRef(0);
  const isDragging  = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardW = isMobile ? 240 : 320;
  const cardH = isMobile ? 320 : 420;

  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => (a + dir + COUNT) % COUNT);
  }, []);

  /* ── drag / swipe ── */
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current  = true;
    dragStartX.current  = e.clientX;
    dragStartAct.current = active;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > cardW * 0.28) {
      isDragging.current = false;
      go(dx < 0 ? 1 : -1);
    }
  };

  const onPointerUp = () => { isDragging.current = false; };

  /* ── 1-second auto scroll ── */
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging.current) {
        setActive((a) => (a + 1) % COUNT);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [active]);

  /* keyboard nav */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft")  go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-[#07070a] overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(227,92,36,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] sm:text-xs font-bold tracking-widest text-[#e35c24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            OUR PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
            OUR <span className="text-[#e35c24]">WORKS</span>
          </h2>
        </div>

        {/* ── DNA Stage ── */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          style={{ height: cardH + 80, perspective: "1100px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {IMAGES.map((img, i) => {
            /* position relative to active index */
            let diff = i - active;
            if (diff >  COUNT / 2) diff -= COUNT;
            if (diff < -COUNT / 2) diff += COUNT;

            const norm = diff / COUNT;          // –0.5 … +0.5
            if (Math.abs(norm) > 0.52) return null;

            const { scale, opacity, zIndex, rotateY, y, blur } = getDNA(norm);
            const x = diff * cardW * 0.92;
            const isCenter = diff === 0;

            return (
              <motion.div
                key={i}
                style={{
                  position:       "absolute",
                  left:           "50%",
                  top:            "50%",
                  width:          cardW,
                  height:         cardH,
                  x:              x - cardW / 2,
                  y:              y - cardH / 2,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                  filter:         `blur(${blur}px)`,
                  transformStyle: "preserve-3d",
                }}
                animate={{ x: x - cardW / 2, y: y - cardH / 2, scale, rotateY, opacity, filter: `blur(${blur}px)` }}
                transition={{ type: "spring", stiffness: 90, damping: 22, mass: 0.85 }}
                onClick={() => { if (!isCenter) setActive(i); }}
              >
                {/* Pure image card */}
                <div
                  className="w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: isCenter
                      ? "0 30px 80px rgba(0,0,0,0.95), 0 0 0 2px rgba(227,92,36,0.5), 0 0 50px rgba(227,92,36,0.2)"
                      : "0 20px 50px rgba(0,0,0,0.8)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    draggable={false}
                    sizes="320px"
                  />

                  {/* Subtle vignette only on active */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-[#e35c24]/50 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Nav ── */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#e35c24] hover:border-[#e35c24] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:           active === i ? 28 : 8,
                  height:          8,
                  backgroundColor: active === i ? "#e35c24" : "rgba(255,255,255,0.18)",
                  boxShadow:       active === i ? "0 0 10px #e35c2480" : "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#e35c24] hover:border-[#e35c24] hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
