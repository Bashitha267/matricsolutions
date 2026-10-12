"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Phone,
  Globe2,
  FileCheck,
  Shield,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Subtle bottom orange glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#e35c24]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block relative h-12 w-48">
              <Image
                src="/Group-18.png"
                alt="Matrix Digital Solution"
                fill
                className="object-contain filter drop-shadow-[0_2px_10px_rgba(227,92,36,0.3)]"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your premier destination for comprehensive digital solutions in Australia and Sri Lanka. Specializing in high-performance web development, mobile apps, bespoke branding, and viral social media marketing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <FileCheck className="w-3.5 h-3.5 text-[#e35c24]" />
                ABN: 76 645 745 526
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Globe2 className="w-3.5 h-3.5 text-[#e35c24]" />
                AU & LK Hubs
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#hero" className="hover:text-[#e35c24] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#aboutus" className="hover:text-[#e35c24] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-[#e35c24] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="#contactus" className="hover:text-[#e35c24] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#e35c24] transition-colors">
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@matrixdigitalsolution.com"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#e35c24] group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">info@matrixdigitalsolution.com</span>
              </a>
              <a
                href="tel:+61426060353"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#e35c24] group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm">+61426060353</span>
              </a>
              <div className="pt-2 text-xs text-slate-500">
                24/7 client response time guaranteed.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            &copy; 2026 <strong className="text-slate-200">Matrix Digital Solution</strong>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:text-white transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e35c24] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
