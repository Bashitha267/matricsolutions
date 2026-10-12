"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  FileCheck,
  Cpu,
  Mail,
  Phone,
  Sparkles,
  Shield,
  Clock,
  Compass,
} from "lucide-react";
import TiltCard from "./3d/TiltCard";

export default function AboutSection() {
  const companySpecs = [
    {
      label: "Based Country",
      val: "Sri Lanka / Australia",
      icon: Globe2,
      sub: "Dual Headquarters Global Operations",
    },
    {
      label: "Business Registration",
      val: "ABN 76 645 745 526",
      icon: FileCheck,
      sub: "Officially Registered & Verified",
    },
    {
      label: "Nature",
      val: "Tech company",
      icon: Cpu,
      sub: "Digital Solutions & Software",
    },
    {
      label: "Direct Email",
      val: "info@matrixdigitalsolution.com",
      icon: Mail,
      sub: "24-Hour Rapid Response",
      isLink: true,
      href: "mailto:info@matrixdigitalsolution.com",
    },
    {
      label: "Direct Phone",
      val: "+61426060353",
      icon: Phone,
      sub: "Australian & Global Inquiries",
      isLink: true,
      href: "tel:+61426060353",
    },
  ];

  return (
    <section id="aboutus" className="relative py-28 bg-[#090a0f] overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-radial from-[#e35c24]/15 via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-radial from-[#215387]/20 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold tracking-widest text-[#e35c24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
            ABOUT <span className="text-[#e35c24]">US</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-orange-400/90 tracking-widest uppercase">
            MATRIX DIGITAL SOLUTION TECH COMPANY
          </p>
        </div>

        {/* 2-Column Layout: Text Narrative & 3D Interactive Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0f1016]/80 border border-white/10 backdrop-blur-xl relative shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#e35c24] to-transparent" />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Welcome to{" "}
                <span className="text-[#e35c24]">MATRIX DIGITAL SOLUTION</span>,
              </h3>

              {/* Exact Copy from Original Website */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                Your premier destination for comprehensive digital solutions in Australia and Sri Lanka.
                Specializing in web development, graphic design, logo design, social media marketing, and app development.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Our team of experts is dedicated to delivering exceptional results tailored to your unique needs.
                With a strong focus on branding, we ensure that each project we undertake not only meets but exceeds
                your expectations. Our specialists in each sector bring a wealth of experience and creativity, ensuring
                that your brand stands out in a competitive market.
              </p>

              <div className="p-4 rounded-xl bg-orange-500/10 border-l-4 border-[#e35c24]">
                <p className="text-sm sm:text-base font-semibold text-white italic">
                  &ldquo;Discover the difference with MATRIX DIGITAL SOLUTION, where innovation meets expertise.&rdquo;
                </p>
              </div>

              {/* Core Strengths */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-center">
                <div className="p-2">
                  <div className="text-2xl font-black text-[#e35c24]">100%</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Tailored Results</div>
                </div>
                <div className="p-2 border-x border-white/10">
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Service & Support</div>
                </div>
                <div className="p-2">
                  <div className="text-2xl font-black text-[#e35c24]">2 Hubs</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">LK & AU</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Company Meta Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="space-y-4">
              {companySpecs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <TiltCard
                    key={idx}
                    intensity={10}
                    className="bg-[#12131b]/80 border border-white/10 hover:border-orange-500/40 p-5 backdrop-blur-xl transition-all duration-300"
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[#e35c24] shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {item.label}
                          </div>
                          {item.isLink ? (
                            <a
                              href={item.href}
                              className="text-base sm:text-lg font-bold text-white hover:text-[#e35c24] transition-colors"
                            >
                              {item.val}
                            </a>
                          ) : (
                            <div className="text-base sm:text-lg font-bold text-white">
                              {item.val}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="hidden sm:block text-right">
                        <span className="text-xs font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#e35c24]">
                  Need Custom Digital Architecture?
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Talk directly with our development specialists
                </p>
              </div>
              <a
                href="#contactus"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-black bg-[#e35c24] hover:bg-[#ff7738] transition-colors shrink-0 shadow-[0_0_15px_rgba(227,92,36,0.3)]"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
