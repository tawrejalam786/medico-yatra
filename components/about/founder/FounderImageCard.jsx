"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  ShieldPlus,
  Users,
  Award,
  Target,
} from "lucide-react";

import FloatingStat from "./FloatingStat";

export default function FounderImageCard() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Outer Glow */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-[#0263CC]/20 to-[#02A7BB]/15 blur-[60px]" />

      {/* Decorative Layers - Reduced */}
      <div className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[36px] border border-white/40 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
      
      <div className="absolute inset-0 translate-x-1.5 -translate-y-1.5 rounded-[36px] border border-white/60 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md" />

      {/* Main Card with Fixed Aspect Ratio */}
      <motion.div
        whileHover={{
          scale: 1.02,
          rotateY: 3,
          rotateX: -2,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[36px] border-2 border-white/80 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-2xl shadow-[0_30px_60px_rgba(2,99,204,.25)]"
      >
        {/* World Map Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/images/about/world-map-dots.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/8 via-transparent to-[#02A7BB]/8" />

        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative aspect-[3/4] max-h-[550px] w-full">
          <Image
            src="/images/young-doctor-getting-ready-work.jpg"
            alt="Healthcare Professional - Founder"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 500px"
          />

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0263CC]/30 via-[#0263CC]/10 to-transparent" />
          
          {/* Top Gradient (subtle) */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/5 to-transparent" />
        </div>

        {/* Founder Badge - Enhanced */}
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] shadow-lg">
              <Award size={24} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-[#94A3B8]">Leadership</p>
              <p className="text-base font-bold text-[#0263CC]">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Top Right Badge - Years of Experience */}
        <div className="absolute top-6 right-6 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] px-4 py-2.5 shadow-xl">
          <p className="text-xl font-black text-white">10+</p>
          <p className="text-[10px] font-semibold text-white/90">Years Exp.</p>
        </div>
      </motion.div>

      {/* Compact Floating Stats */}
      <FloatingStat
        icon={GraduationCap}
        value="100+"
        label="Universities"
        className="absolute -right-4 sm:-right-6 top-32 scale-90 sm:scale-100"
      />

      <FloatingStat
        icon={Users}
        value="5000+"
        label="Students"
        className="absolute -left-4 sm:-left-6 top-20 scale-90 sm:scale-100"
      />

      <FloatingStat
        icon={Target}
        value="13+"
        label="Countries"
        className="absolute -left-4 sm:-left-6 bottom-24 scale-90 sm:scale-100"
      />
    </div>
  );
}