"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import TiltCard from "./3d/TiltCard";

interface Review {
  title: string;
  comment: string;
  name: string;
  role: string;
  rating: number;
  highlight: string;
}

const reviewsData: Review[] = [
  {
    title: "Great Support Team",
    comment:
      "Best team ever. Very flexible and will always be there for your problems. Highly recommended for web development",
    name: "John Doe",
    role: "Designer",
    rating: 5,
    highlight: "Web Development",
  },
  {
    title: "Very Powerful",
    comment:
      "Highly technical set of individuals who love to learn and grow at the same time. Thanks guys",
    name: "Debra Campbell",
    role: "Web Developer",
    rating: 5,
    highlight: "Tech Architecture",
  },
  {
    title: "Excellent Service",
    comment:
      "Exceptional communication and high quality deliverables on time. Boosted our organic outreach tremendously and gave our content wings.",
    name: "Joanne Ellis",
    role: "Content Creator",
    rating: 5,
    highlight: "Social Media & Branding",
  },
  {
    title: "Creative & Reliable",
    comment:
      "Transformative design and branding work that helped us stand out in Australia and internationally. Top notch execution!",
    name: "Lopez Eric",
    role: "Marketing Manager",
    rating: 5,
    highlight: "Graphic Design & UI",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative py-28 bg-[#07070a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#e35c24]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold tracking-widest text-[#e35c24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CLIENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
            CLIENTS <span className="text-[#e35c24]">REVIEWS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real feedback from visionary founders, creators, and business leaders we partner with worldwide.
          </p>
        </div>

        {/* 3D Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard
                intensity={12}
                className="h-full bg-[#0e0f17]/90 border border-white/10 hover:border-orange-500/40 p-6 flex flex-col justify-between group transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_rgba(227,92,36,0.15)]"
              >
                <div style={{ transform: "translateZ(25px)" }}>
                  
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-orange-500/30 group-hover:text-[#e35c24] transition-colors" />
                  </div>

                  {/* Review Heading */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Comment */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="pt-4 border-t border-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e35c24] to-[#ffaa7d] flex items-center justify-center font-bold text-black text-sm shadow-md">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.name}</div>
                      <div className="text-xs text-orange-400/90">{item.role}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
