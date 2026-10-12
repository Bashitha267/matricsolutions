"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  TrendingUp,
  Users,
  Heart,
  Share2,
  BarChart3,
  Megaphone,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

/* ─── Floating stat badge ─── */
interface StatBadgeProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  delay: number;
  className?: string;
}

function StatBadge({ icon: Icon, label, value, color, delay, className = "" }: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className={`absolute backdrop-blur-xl bg-[#0f1016]/90 border border-white/10 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex items-center gap-3 cursor-default ${className}`}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${color}25`, boxShadow: `0 0 16px ${color}40` }}
      >
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div>
        <p className="text-xs text-slate-400 leading-none mb-0.5">{label}</p>
        <p className="text-sm font-black text-white leading-none">{value}</p>
      </div>
    </motion.div>
  );
}

/* ─── Feature pill ─── */
function FeaturePill({ icon: Icon, text, delay }: { icon: React.ElementType; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2.5 group"
    >
      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#e35c24] shrink-0 group-hover:bg-[#e35c24] group-hover:text-black transition-all duration-300">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{text}</span>
    </motion.div>
  );
}

export default function SocialMediaShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-driven parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rawRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const rawRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.93]);

  /* Spring smoothing */
  const y = useSpring(rawY, { stiffness: 60, damping: 18 });
  const rotateX = useSpring(rawRotateX, { stiffness: 60, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 60, damping: 18 });
  const scale = useSpring(rawScale, { stiffness: 60, damping: 18 });

  const features = [
    { icon: TrendingUp, text: "Targeted Meta & Google Campaigns" },
    { icon: Users, text: "Audience Growth & Engagement Strategy" },
    { icon: BarChart3, text: "Performance Analytics & ROI Reports" },
    { icon: Megaphone, text: "Content Calendars & Viral Copywriting" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-28 bg-[#07070a] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#e35c24]/12 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-radial from-[#215387]/15 to-transparent blur-[130px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="space-y-6 sm:space-y-8">
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] sm:text-xs font-bold tracking-widest text-[#e35c24] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#e35c24] animate-ping" />
              <span>Social Media Marketing</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-montserrat)] text-white leading-[1.08] tracking-tight">
                GROW YOUR{" "}
                <span className="bg-gradient-to-r from-[#e35c24] via-[#ff7738] to-[#ffaa7d] bg-clip-text text-transparent drop-shadow-[0_5px_25px_rgba(227,92,36,0.45)]">
                  BRAND
                </span>{" "}
                ONLINE
              </h2>
              <p className="text-sm sm:text-lg text-slate-400 leading-relaxed max-w-lg pt-1 sm:pt-2">
                We deliver excellent social media marketing so that your company receives
                more widespread exposure — turning followers into loyal customers with
                data-driven strategy and viral-worthy content.
              </p>
            </motion.div>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((f, i) => (
                <FeaturePill key={i} icon={f.icon} text={f.text} delay={0.25 + i * 0.08} />
              ))}
            </motion.div>

            {/* Stars / social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["#e35c24", "#215387", "#a855f7", "#22c55e"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#07070a] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: c, zIndex: 4 - i }}
                  >
                    {["M", "A", "R", "K"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#e35c24] fill-[#e35c24]" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Trusted by 200+ brands worldwide</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-black bg-[#e35c24] hover:bg-[#ff7738] transition-all duration-300 shadow-[0_0_25px_rgba(227,92,36,0.4)] hover:shadow-[0_0_40px_rgba(227,92,36,0.65)] hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4" />
                <span>Start a Campaign</span>
              </a>
              <a
                href="#contactus"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-md"
              >
                <span>Get a Free Audit</span>
                <ArrowRight className="w-4 h-4 text-[#e35c24]" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: 3D Scroll-Parallax Image ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Perspective wrapper */}
            <div style={{ perspective: "1000px" }} className="relative w-full max-w-[520px]">
              <motion.div
                style={{ y, rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                className="relative w-full"
              >
                {/* Main image card */}
                <motion.div
                  initial={{ opacity: 0, x: 80, rotateY: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(227,92,36,0.15)] bg-[#0c0d14]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Orange top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e35c24] via-[#ff7738] to-[#e35c24] z-20" />

                  <Image
                    src="/services/social-media.png"
                    alt="Social Media Marketing — Matrix Digital Solution"
                    width={600}
                    height={420}
                    className="w-full object-cover"
                    priority
                  />

                  {/* Dark gradient overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-transparent to-transparent" />

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <Share2 className="w-4 h-4 text-[#e35c24]" />
                      <span className="text-xs font-bold tracking-widest text-[#e35c24] uppercase">
                        Social Media Marketing
                      </span>
                    </div>
                    <p className="text-white font-bold text-base leading-snug">
                      Widespread Exposure & Engagement
                    </p>
                  </div>
                </motion.div>

                {/* ── Floating stat badges ── */}
                <StatBadge
                  icon={TrendingUp}
                  label="Avg. Reach Growth"
                  value="+340%"
                  color="#e35c24"
                  delay={0.4}
                  className="-top-3 left-2 sm:-top-6 sm:-left-8 z-20"
                />

                <StatBadge
                  icon={Heart}
                  label="Engagement Rate"
                  value="12.8%"
                  color="#ec4899"
                  delay={0.55}
                  className="top-1/3 right-2 sm:-right-10 z-20"
                />

                <StatBadge
                  icon={Users}
                  label="Followers Added"
                  value="50K+"
                  color="#22c55e"
                  delay={0.65}
                  className="-bottom-3 left-2 sm:-bottom-6 sm:left-8 z-20"
                />

                {/* Glow orb behind image */}
                <div className="absolute inset-0 -z-10 rounded-3xl blur-[60px] opacity-40 bg-gradient-to-br from-[#e35c24]/30 via-[#215387]/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
