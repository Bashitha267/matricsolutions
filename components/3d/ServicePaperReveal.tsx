"use client";

import dynamic from "next/dynamic";
import React from "react";

interface ServicePaperRevealProps {
  image: string;
  alt: string;
  name: string;
  shape?: number;
  trigger?: "hover" | "click" | "inView" | "scroll";
  fold?: "none" | "half" | "thirds";
  className?: string;
  height?: number;
  isHovered?: boolean;
}

// Dynamically import the WebGL CrumpledPaperReveal component (client-only)
const CrumpledPaperReveal = dynamic(
  () => import("./CrumpledPaperReveal"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[340px] rounded-2xl bg-[#0e1017] border border-orange-500/20 flex flex-col items-center justify-center p-6 text-center animate-pulse">
        <div className="w-10 h-10 rounded-full border-2 border-[#e35c24] border-t-transparent animate-spin mb-3" />
        <span className="text-xs font-mono uppercase tracking-wider text-orange-400">Loading 3D Crumple...</span>
      </div>
    ),
  }
);

export default function ServicePaperReveal({
  image,
  alt,
  name,
  shape = 1,
  trigger = "hover",
  fold = "thirds",
  className = "",
  height = 360,
  isHovered,
}: ServicePaperRevealProps) {
  return (
    <div className={`relative w-full overflow-hidden flex flex-col items-center justify-center group ${className}`}>
      {/* 3D WebGL Crumpled Paper Reveal */}
      <div className="w-full relative flex items-center justify-center py-2">
        <CrumpledPaperReveal
          image={image}
          alt={alt}
          shape={shape}
          trigger={trigger}
          fold={fold}
          paper="#0B0C11"
          ratio="4:5"
          border="0px"
          radius="16px"
          creases={65}
          finish="satin"
          light={75}
          ballSize={135}
          shadow="rgba(227, 92, 36, 0.45)"
          isHovered={isHovered}
          style={{ width: "100%", maxWidth: 300, height: height }}
        />
      </div>

      {/* Interactive Helper Hint */}
      <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-400 group-hover:text-orange-400 transition-colors pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e35c24] animate-ping" />
        <span>Hover card or tap to unfold 3D {name}</span>
      </div>
    </div>
  );
}
