"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Palette,
  Share2,
  Code,
  Smartphone,
  Layers,
  Video,
  ArrowRight,
} from "lucide-react";

const servicesList = [
  {
    name: "Logo Design",
    href: "#services",
    icon: Palette,
    desc: "First impression branding & identity",
  },
  {
    name: "Social Media Marketing",
    href: "#services",
    icon: Share2,
    desc: "Targeted outreach & widespread exposure",
  },
  {
    name: "Web Development",
    href: "#services",
    icon: Code,
    desc: "Custom high-speed Next.js web applications",
  },
  {
    name: "App Development",
    href: "#services",
    icon: Smartphone,
    desc: "iOS & Android high-performance apps",
  },
  {
    name: "Graphic Design",
    href: "#services",
    icon: Layers,
    desc: "Visual storytelling & impactful graphics",
  },
  {
    name: "Video Editing",
    href: "#services",
    icon: Video,
    desc: "High quality cinematic & promotional edits",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070a]/85 backdrop-blur-xl border-b border-orange-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative h-12 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Group-18.png"
                alt="Matrix Digital Solution"
                fill
                priority
                className="object-contain filter drop-shadow-[0_2px_12px_rgba(227,92,36,0.3)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#hero"
              className="text-sm font-medium text-slate-200 hover:text-[#e35c24] transition-colors relative py-1"
            >
              Home
            </Link>

            <Link
              href="#aboutus"
              className="text-sm font-medium text-slate-200 hover:text-[#e35c24] transition-colors relative py-1"
            >
              About Us
            </Link>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-[#e35c24] transition-colors py-2 focus:outline-none"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#e35c24]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-[#0f1016]/95 backdrop-blur-2xl border border-orange-500/25 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(227,92,36,0.15)] z-50"
                  >
                    <div className="space-y-1">
                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-500/10 border border-transparent hover:border-orange-500/20 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#e35c24] group-hover:bg-[#e35c24] group-hover:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-100 group-hover:text-[#e35c24] transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#reviews"
              className="text-sm font-medium text-slate-200 hover:text-[#e35c24] transition-colors py-1"
            >
              Reviews
            </Link>

            <Link
              href="#contactus"
              className="text-sm font-medium text-slate-200 hover:text-[#e35c24] transition-colors py-1"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#services"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-sm text-black bg-[#e35c24] hover:bg-[#ff7738] transition-all duration-300 shadow-[0_0_20px_rgba(227,92,36,0.4)] hover:shadow-[0_0_30px_rgba(227,92,36,0.7)] hover:scale-105 active:scale-95"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-[#e35c24] hover:border-orange-500/30 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#07070a]/95 backdrop-blur-2xl border-b border-orange-500/20 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <Link
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-100 hover:text-[#e35c24] border-b border-white/5"
              >
                Home
              </Link>
              <Link
                href="#aboutus"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-100 hover:text-[#e35c24] border-b border-white/5"
              >
                About Us
              </Link>

              {/* Services Sublist */}
              <div className="py-2 border-b border-white/5">
                <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold">
                  Our Services
                </span>
                <div className="grid grid-cols-1 gap-2 mt-2 pl-2">
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-slate-300 hover:text-[#e35c24] py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-100 hover:text-[#e35c24] border-b border-white/5"
              >
                Reviews
              </Link>

              <Link
                href="#contactus"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-100 hover:text-[#e35c24] border-b border-white/5"
              >
                Contact Us
              </Link>

              <div className="pt-2">
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-sm text-black bg-[#e35c24] shadow-[0_0_20px_rgba(227,92,36,0.4)]"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
