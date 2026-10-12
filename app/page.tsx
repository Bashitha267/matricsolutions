import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialMediaShowcase from "@/components/SocialMediaShowcase";
import ServicesSection from "@/components/ServicesSection";
import DNAProjectCarousel from "@/components/DNAProjectCarousel";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white selection:bg-[#e35c24] selection:text-white relative">
      <Navbar />
      <Hero />
      <SocialMediaShowcase />
      <ServicesSection />
      <DNAProjectCarousel />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
