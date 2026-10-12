"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  Share2, Code, Smartphone, Palette, Layers, Video,
  CheckCircle, ArrowRight,
  TrendingUp, BarChart3, Globe, Zap, Monitor,
  Star, Cpu, Sparkles,
} from "lucide-react";

/* ──────────────────────────────────────────
   SERVICE DATA  (social media first)
────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    id:  "social-media",
    title: "SOCIAL MEDIA\nMARKETING",
    image: "/services/social-media-new.jpg",
    tagline: "Widespread Exposure & Engagement",
    description:
      "We promise to give you excellent social media marketing so that your company receives more widespread exposure — turning followers into loyal customers.",
    icon: Share2,
    accent: "#e35c24",
    dark:   "#1a0a02",
    features: [
      "Targeted Meta & Google Campaigns",
      "Audience Growth & Engagement Strategy",
      "Content Calendars & Viral Copywriting",
      "Performance Analytics & ROI Reports",
    ],
    tags: ["Meta Ads", "Instagram", "TikTok", "Analytics"],
    cta: "Explore Campaigns",
    floats: [
      { icon: TrendingUp, label: "+340%",   sub: "Avg Reach",      color: "#e35c24", pos: { top: "8%",  right: "-8%" } },
      { icon: BarChart3,  label: "12.8%",   sub: "Engagement",     color: "#f97316", pos: { top: "55%", left:  "-10%" } },
      { icon: Star,       label: "50K+",    sub: "Followers/mo",   color: "#fbbf24", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "social",
  },
  {
    num: "02",
    id:  "logo-design",
    title: "LOGO\nDESIGN",
    image: "/services/logo-design-new.jpg",
    tagline: "First Impression & Brand Identity",
    description:
      "Logo is the first impression of your business. It will help you to spread the word about your company and your goals — crafted to last.",
    icon: Palette,
    accent: "#f59e0b",
    dark:   "#181200",
    features: [
      "Vector & Scalable Brand Marks",
      "Full Identity Color Palettes & Typography",
      "Print & Digital Ready Formats",
      "Comprehensive Style Guidelines",
    ],
    tags: ["Illustrator", "Figma", "SVG Vector", "Brand Identity"],
    cta: "Our Works",
    floats: [
      { icon: Star,     label: "5-Star",   sub: "Rated Design",  color: "#f59e0b", pos: { top: "8%",  right: "-8%" } },
      { icon: Sparkles, label: "100%",     sub: "Satisfaction",  color: "#fbbf24", pos: { top: "55%", left: "-10%" } },
      { icon: Palette,  label: "∞",        sub: "Revisions",     color: "#f97316", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "logo",
  },
  {
    num: "03",
    id:  "web-development",
    title: "WEB\nDEVELOPMENT",
    image: "/services/web-development-new.jpg",
    tagline: "High Performance & Tailored Results",
    description:
      "To give you the greatest results, we use web developers with plenty of experience — ultra-fast, SEO-optimised, and beautiful on every device.",
    icon: Code,
    accent: "#3b82f6",
    dark:   "#020c1e",
    features: [
      "Ultra-Fast Next.js & React Frameworks",
      "Interactive 3D Elements & Animations",
      "Tailwind CSS Responsive Architecture",
      "SEO, Security & Speed Optimized",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    cta: "View Web Solutions",
    floats: [
      { icon: Zap,     label: "99/100",  sub: "PageSpeed",     color: "#3b82f6", pos: { top: "8%",  right: "-8%" } },
      { icon: Globe,   label: "Global",  sub: "CDN Delivery",  color: "#60a5fa", pos: { top: "55%", left: "-10%" } },
      { icon: Monitor, label: "100%",   sub: "Responsive",    color: "#93c5fd", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "web",
  },
  {
    num: "04",
    id:  "app-development",
    title: "APP\nDEVELOPMENT",
    image: "/services/app-development.png",
    tagline: "Valuable Pricing & Modern Tech",
    description:
      "We develop high quality apps with the latest technologies based on your requirements for a fair and valuable price — iOS & Android, one codebase.",
    icon: Smartphone,
    accent: "#a855f7",
    dark:   "#0d0018",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Smooth 60FPS Native UI/UX Design",
      "Secure Cloud Backend Integration",
      "App Store & Google Play Publishing",
    ],
    tags: ["React Native", "Flutter", "iOS", "Android"],
    cta: "Discover Apps",
    floats: [
      { icon: Smartphone, label: "iOS+",   sub: "Android Ready",  color: "#a855f7", pos: { top: "8%",  right: "-8%" } },
      { icon: Zap,        label: "60fps",  sub: "Smooth UI",      color: "#c084fc", pos: { top: "55%", left: "-10%" } },
      { icon: Cpu,        label: "Cloud",  sub: "Backend API",    color: "#e879f9", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "app",
  },
  {
    num: "05",
    id:  "graphic-design",
    title: "GRAPHIC\nDESIGN",
    image: "/services/graphic-design.png",
    tagline: "Visual Communication & Impact",
    description:
      "A graphic design company that ensures your message or idea is successfully communicated through stunning visual appearance and impactful design.",
    icon: Layers,
    accent: "#22c55e",
    dark:   "#00130a",
    features: [
      "Marketing Banners & Visual Campaigns",
      "Corporate Stationery & Print Collateral",
      "Packaging & Merchandise Graphics",
      "High-Conversion Digital Ad Creatives",
    ],
    tags: ["Photoshop", "Illustrator", "UI/UX Mockups", "Print"],
    cta: "See Design Portfolio",
    floats: [
      { icon: Layers,   label: "Print+",  sub: "Digital Ready", color: "#22c55e", pos: { top: "8%",  right: "-8%" } },
      { icon: Star,     label: "4K",      sub: "Resolution",    color: "#4ade80", pos: { top: "55%", left: "-10%" } },
      { icon: Sparkles, label: "Fast",    sub: "Turnaround",    color: "#86efac", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "graphic",
  },
  {
    num: "06",
    id:  "video-editing",
    title: "VIDEO\nEDITING",
    image: "/services/video-editing.png",
    tagline: "Cinematic Quality & Tailored Service",
    description:
      "We use video editors with the greatest experience to deliver 4K cinematic production — motion graphics, social reels, and audio mastering.",
    icon: Video,
    accent: "#ec4899",
    dark:   "#180010",
    features: [
      "4K Cinematic Post-Production & Color Grading",
      "Motion Graphics & 3D Title Sequences",
      "High-Paced Social Reels & Shorts",
      "Audio Mastering & Sound Design",
    ],
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion"],
    cta: "Watch Showreels",
    floats: [
      { icon: Video,    label: "4K HDR",  sub: "Cinematic",      color: "#ec4899", pos: { top: "8%",  right: "-8%" } },
      { icon: Zap,      label: "Fast",    sub: "Delivery",       color: "#f472b6", pos: { top: "55%", left: "-10%" } },
      { icon: Star,     label: "Award",   sub: "Winning Style",  color: "#fb7185", pos: { bottom: "8%", right: "-6%" } },
    ],
    visual: "video",
  },
];

/* ──────────────────────────────────────────
   Big service visual  (right panel)
────────────────────────────────────────── */
function ServiceVisual({ svc }: { svc: typeof SERVICES[0] }) {
  const Icon = svc.icon;
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Outer glow disc */}
      <div
        className="absolute rounded-full blur-[100px] opacity-25 pointer-events-none"
        style={{ width: 500, height: 500, backgroundColor: svc.accent }}
      />

      {/* Main card */}
      <motion.div
        key={svc.id}
        initial={{ scale: 0.82, opacity: 0, rotateY: -18 }}
        animate={{ scale: 1,    opacity: 1, rotateY: 0   }}
        exit   ={{ scale: 0.82, opacity: 0, rotateY:  18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 900 }}
      >
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            width:  360,
            height: 440,
            background: `linear-gradient(145deg, ${svc.dark} 0%, #060608 60%)`,
            border: `1px solid ${svc.accent}40`,
            boxShadow: `0 0 0 1px ${svc.accent}20, 0 30px 80px rgba(0,0,0,0.9), 0 0 80px ${svc.accent}25`,
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(${svc.accent} 1px,transparent 1px),linear-gradient(90deg,${svc.accent} 1px,transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg,transparent,${svc.accent},transparent)` }}
          />

          {/* Number + tag */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
            <span
              className="text-[9px] font-black tracking-[0.25em] px-2.5 py-1 rounded-full uppercase"
              style={{ background: `${svc.accent}20`, border: `1px solid ${svc.accent}50`, color: svc.accent }}
            >
              SERVICE {svc.num}
            </span>
            <span className="text-3xl font-black opacity-10 text-white">{svc.num}</span>
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating orbit ring */}
            <motion.div
              className="absolute rounded-full border-dashed border"
              style={{ width: 230, height: 230, borderColor: `${svc.accent}30` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner orbit ring */}
            <motion.div
              className="absolute rounded-full border"
              style={{ width: 165, height: 165, borderColor: `${svc.accent}20` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulse rings */}
            {[1, 2].map((p) => (
              <motion.div
                key={p}
                className="absolute rounded-full"
                style={{ border: `2px solid ${svc.accent}`, width: 110, height: 110 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.4, delay: p * 1.2, repeat: Infinity }}
              />
            ))}

            {/* Icon box */}
            <div
              className="relative z-10 flex items-center justify-center rounded-2xl"
              style={{
                width: 96, height: 96,
                background: `${svc.accent}18`,
                border: `2px solid ${svc.accent}50`,
                boxShadow: `0 0 50px ${svc.accent}35, inset 0 0 25px ${svc.accent}12`,
              }}
            >
              <Icon style={{ color: svc.accent, width: 44, height: 44 }} strokeWidth={1.4} />
            </div>

            {/* Orbit dots */}
            {[0, 1, 2, 3].map((d) => {
              const angle = (d / 4) * Math.PI * 2;
              return (
                <motion.div
                  key={d}
                  className="absolute rounded-full"
                  style={{
                    width: 8, height: 8,
                    backgroundColor: svc.accent,
                    left: `calc(50% + ${Math.cos(angle) * 80}px - 4px)`,
                    top:  `calc(50% + ${Math.sin(angle) * 80}px - 4px)`,
                    boxShadow: `0 0 10px ${svc.accent}`,
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, delay: d * 0.5, repeat: Infinity }}
                />
              );
            })}
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-black text-white text-sm mb-1">{svc.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {svc.tags.slice(0, 3).map((t, ti) => (
                <span
                  key={ti}
                  className="text-[9px] font-bold px-2 py-0.5 rounded"
                  style={{ background: `${svc.accent}18`, border: `1px solid ${svc.accent}30`, color: svc.accent }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat badges */}
      {svc.floats.map((f, fi) => {
        const FIcon = f.icon;
        return (
          <motion.div
            key={fi}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit   ={{ opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.2 + fi * 0.12, duration: 0.5, type: "spring" }}
            className="absolute flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 backdrop-blur-xl"
            style={{
              ...f.pos,
              background: "rgba(10,10,16,0.85)",
              border: `1px solid ${f.color}35`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.7), 0 0 15px ${f.color}20`,
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${f.color}20`, boxShadow: `0 0 12px ${f.color}40` }}
            >
              <FIcon style={{ color: f.color, width: 14, height: 14 }} />
            </div>
            <div>
              <p className="text-xs font-black text-white leading-none">{f.label}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{f.sub}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ──────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────── */
export default function ScrollTimelineServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Map overall scroll 0→1 to service index float 0→N */
  const serviceFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, SERVICES.length]
  );

  useMotionValueEvent(serviceFloat, "change", (v) => {
    const i = Math.min(Math.floor(v), SERVICES.length - 1);
    setActiveIdx(i);
  });

  const svc = SERVICES[activeIdx];

  return (
    /* ── Outer track: N × 100vh — scroll happens here ── */
    <div
      ref={containerRef}
      id="services"
      style={{ height: `${SERVICES.length * 100}vh` }}
    >
      {/* ── Sticky viewport: always 100vh, pinned to top ── */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>

        {/* Animated background */}
        <motion.div
          key={`bg-${activeIdx}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            background: `radial-gradient(ellipse 60% 60% at 65% 50%, ${svc.accent}0f 0%, transparent 70%), #07070a`,
          }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />

        {/* ── Layout: left text | right visual ── */}
        <div className="relative z-10 h-full flex flex-col justify-end lg:justify-normal lg:flex-row pt-20 pb-12 sm:pb-14 lg:py-0">

          {/* ─ MOBILE TOP IMAGE (top part image) ─ */}
          <div className="lg:hidden w-full flex items-center justify-center pb-2 px-5 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-img-${activeIdx}`}
                initial={{ opacity: 0, scale: 0.94, y: -10 }}
                animate={{ opacity: 1, scale: 1,    y: 0 }}
                exit   ={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[360px] h-[190px] sm:h-[230px] rounded-2xl overflow-hidden border"
                style={{
                  borderColor: `${svc.accent}55`,
                  boxShadow: `0 14px 40px rgba(0,0,0,0.85), 0 0 35px ${svc.accent}25`,
                }}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 360px, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-[#07070a]/20 to-transparent" />

                {/* Accent border ring */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${svc.accent}40` }}
                />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${svc.accent}30`,
                      border: `1px solid ${svc.accent}60`,
                      color: svc.accent,
                    }}
                  >
                    SERVICE {svc.num}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {activeIdx + 1} / {SERVICES.length}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white tracking-wide truncate max-w-[70%]">
                    {svc.tagline}
                  </span>
                  <span
                    className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 border border-white/10"
                    style={{ color: svc.accent }}
                  >
                    {svc.tags[0]}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─ LEFT VERTICAL PROGRESS RAIL ─ */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-3 pl-8 pr-4 py-12 shrink-0">
            <div className="flex flex-col items-center gap-2">
              {SERVICES.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <motion.div
                    className="rounded-full transition-all duration-500"
                    animate={{
                      width:  activeIdx === i ? 10 : 6,
                      height: activeIdx === i ? 10 : 6,
                      backgroundColor: activeIdx === i ? s.accent : "rgba(255,255,255,0.15)",
                      boxShadow: activeIdx === i ? `0 0 10px ${s.accent}` : "none",
                    }}
                  />
                  {i < SERVICES.length - 1 && (
                    <div
                      className="w-px"
                      style={{
                        height: 28,
                        background: i < activeIdx
                          ? `linear-gradient(to bottom, ${SERVICES[i].accent}60, ${SERVICES[i+1].accent}30)`
                          : "rgba(255,255,255,0.08)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ─ LEFT (DESKTOP) / BOTTOM (MOBILE) TEXT PANEL ─ */}
          <div className="flex-initial lg:flex-1 flex flex-col justify-start lg:justify-center px-5 sm:px-8 lg:px-10 xl:px-16 w-full lg:max-w-[52%] pt-1 pb-1 sm:py-0">

            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIdx}`}
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0,   filter: "blur(0px)" }}
                exit   ={{ opacity: 0, x:  40, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 sm:space-y-4 lg:space-y-6"
              >
                {/* Service number badge (Desktop) */}
                <div className="hidden lg:flex items-center gap-2.5 sm:gap-3">
                  <div
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase"
                    style={{
                      background: `${svc.accent}15`,
                      border: `1px solid ${svc.accent}40`,
                      color: svc.accent,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: svc.accent }}
                    />
                    SERVICE {svc.num}
                  </div>
                  {/* Progress fraction */}
                  <span className="text-[11px] sm:text-xs font-bold text-slate-500">
                    {activeIdx + 1} / {SERVICES.length}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-black leading-[1.05] tracking-tight text-white"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 4rem)",
                    fontFamily: "var(--font-montserrat, sans-serif)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {svc.title.split("\n")[0]}{" "}
                  <span style={{ color: svc.accent }}>
                    {svc.title.split("\n")[1]}
                  </span>
                </h2>

                {/* Tagline */}
                <p
                  className="text-xs sm:text-sm font-bold tracking-wide uppercase"
                  style={{ color: `${svc.accent}bb` }}
                >
                  {svc.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-md line-clamp-2 sm:line-clamp-none">
                  {svc.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-1.5 sm:space-y-2.5">
                  {svc.features.map((f, fi) => (
                    <motion.li
                      key={fi}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + fi * 0.08, duration: 0.4 }}
                      className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle
                        className="shrink-0"
                        style={{ color: svc.accent, width: 15, height: 15 }}
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
                  <a
                    href="#contactus"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                    style={{
                      backgroundColor: svc.accent,
                      boxShadow: `0 0 20px ${svc.accent}50, 0 4px 14px rgba(0,0,0,0.4)`,
                    }}
                  >
                    {svc.cta}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="#contactus"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    Get a Quote
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint (only on first service) */}
            {activeIdx === 0 && (
              <motion.div
                className="mt-4 sm:mt-10 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex flex-col gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-4 sm:w-5 h-[2px] rounded-full"
                      style={{ backgroundColor: svc.accent }}
                      animate={{ scaleX: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest">
                  Scroll to explore
                </span>
              </motion.div>
            )}
          </div>

          {/* ─ RIGHT VISUAL PANEL ─ */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative pr-12">
            <AnimatePresence mode="wait">
              <ServiceVisual key={`visual-${activeIdx}`} svc={svc} />
            </AnimatePresence>
          </div>

        </div>

        {/* ── Bottom progress bar ── */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
          <motion.div
            className="h-full"
            style={{
              width:      `${((activeIdx + 1) / SERVICES.length) * 100}%`,
              background: `linear-gradient(90deg, ${SERVICES[0].accent}, ${svc.accent})`,
              boxShadow:  `0 0 12px ${svc.accent}80`,
              transition: "width 0.5s ease, background 0.5s ease",
            }}
          />
        </div>

        {/* ── Bottom service nav pills ── */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 max-w-[95vw] px-2 overflow-x-auto no-scrollbar">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500 text-[8px] sm:text-[9px] font-black uppercase tracking-wider overflow-hidden shrink-0"
              style={{
                height: 20,
                padding: activeIdx === i ? "0 8px" : "0 4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: activeIdx === i ? s.accent : "rgba(255,255,255,0.06)",
                color:           activeIdx === i ? "#000" : "rgba(255,255,255,0.3)",
                boxShadow:       activeIdx === i ? `0 0 14px ${s.accent}70` : "none",
                maxWidth:        activeIdx === i ? 120 : 16,
                border:          `1px solid ${activeIdx === i ? s.accent : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {activeIdx === i ? s.id.replace("-", " ").toUpperCase() : <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: s.accent, display: "inline-block", opacity: 0.5 }} />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
