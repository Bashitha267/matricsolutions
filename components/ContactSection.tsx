"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";
import TiltCard from "./3d/TiltCard";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "Web Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e35c24", "#ff7738", "#ffffff"],
      });
    }, 1000);
  };

  return (
    <section id="contactus" className="relative py-28 bg-[#090a0f] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold tracking-widest text-[#e35c24] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight">
            WE LOVE TO <span className="text-[#e35c24]">HEAR FROM YOU !</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We provide 24 hours service to provide you with the best output without any further delay.
            And be sure that we will be providing you a service which is worth your cost/ expense.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              intensity={10}
              className="bg-[#11121a]/90 border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              <div style={{ transform: "translateZ(25px)" }} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Direct <span className="text-[#e35c24]">Channels</span>
                </h3>
                <p className="text-sm text-slate-400">
                  Ready to transform your vision into reality? Reach out directly via our email or phone lines.
                </p>

                {/* Email Card */}
                <a
                  href="mailto:info@matrixdigitalsolution.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[#e35c24] group-hover:bg-[#e35c24] group-hover:text-black transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Email Us
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      info@matrixdigitalsolution.com
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+61426060353"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-[#e35c24] group-hover:bg-[#e35c24] group-hover:text-black transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Call / WhatsApp
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      +61426060353
                    </div>
                  </div>
                </a>

                {/* 24 Hours Service Pill */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-[#e35c24] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">24/7 Continuous Delivery</div>
                    <div className="text-xs text-orange-300">Rapid turnaround with round-the-clock specialists</div>
                  </div>
                </div>

                {/* Dual Region Support */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#e35c24]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Australia & Sri Lanka</div>
                    <div className="text-xs text-slate-400">Serving global clients with local precision</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#11121a]/95 border border-orange-500/30 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(227,92,36,0.15)] relative overflow-hidden"
            >
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    We have received your message. One of our specialists will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        service: "Web Development",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl font-semibold text-sm text-black bg-[#e35c24] hover:bg-[#ff7738] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#e35c24] focus:ring-1 focus:ring-[#e35c24] transition-all text-sm"
                      />
                    </div>

                    {/* Your Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#e35c24] focus:ring-1 focus:ring-[#e35c24] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#e35c24] focus:ring-1 focus:ring-[#e35c24] transition-all text-sm"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14151f] border border-white/10 text-white focus:outline-none focus:border-[#e35c24] focus:ring-1 focus:ring-[#e35c24] transition-all text-sm"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Video Editing">Video Editing</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Message (optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project requirements, budget, or timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#e35c24] focus:ring-1 focus:ring-[#e35c24] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-base text-black bg-[#e35c24] hover:bg-[#ff7738] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(227,92,36,0.4)] hover:shadow-[0_0_35px_rgba(227,92,36,0.6)] disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
