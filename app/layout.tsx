import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matrix Digital Solution | Tech Company - Web, App & Digital Branding",
  description:
    "Your premier destination for comprehensive digital solutions in Australia and Sri Lanka. Specializing in web development, graphic design, logo design, social media marketing, and app development.",
  icons: {
    icon: "/Group-18.png",
    apple: "/Group-18.png",
  },
  keywords: [
    "Matrix Digital Solution",
    "Web Development",
    "App Development",
    "Graphic Design",
    "Logo Design",
    "Social Media Marketing",
    "Video Editing",
    "Australia",
    "Sri Lanka",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable} dark scroll-smooth`}>
      <body className="bg-[#07070a] text-slate-100 antialiased font-[family-name:var(--font-raleway)] min-h-screen selection:bg-[#e35c24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
