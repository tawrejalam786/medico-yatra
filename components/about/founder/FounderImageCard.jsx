"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  ShieldPlus,
} from "lucide-react";

import FloatingStat from "./FloatingStat";

export default function FounderImageCard() {
  return (

    

    <div className="relative mx-auto w-full max-w-[560px]">

      {/* Glow */}

      <div className="absolute -inset-10 rounded-[60px] bg-[#0263CC]/15 blur-[80px]" />

      {/* Layer 1 */}

      <div className="absolute inset-0 translate-x-5 -translate-y-5 rounded-[42px] border border-white/50 bg-white/20 backdrop-blur-xl" />

      {/* Layer 2 */}

      <div className="absolute inset-0 translate-x-2 -translate-y-2 rounded-[42px] border border-white/70 bg-white/40 backdrop-blur-xl" />

      {/* Main Card */}

      <motion.div
        whileHover={{
          rotateY: 5,
          rotateX: -3,
          scale: 1.02,
        }}
        transition={{ duration: .4 }}
        className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white/60 backdrop-blur-2xl shadow-[0_40px_80px_rgba(2,99,204,.18)]"
      >

        {/* World Map */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url('/images/about/world-map-dots.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blue Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/10 via-transparent to-[#4DA5EC]/10" />

        {/* Founder */}

        <div className="relative h-[700px]">

          <Image
            src="/images/young-doctor-getting-ready-work.jpg"
            alt="Founder"
            fill
            priority
            className="object-cover object-bottom"
          />

          {/* Bottom Gradient */}

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0263CC]/20 to-transparent" />

          {/* Founder Badge */}

          <div className="absolute bottom-2 left-8 rounded-full bg-white/90 px-6 py-3 backdrop-blur-xl shadow-xl">

            <span className="font-semibold text-[#0263CC]">
              Founder & CEO
            </span>

          </div>

        </div>

       
      </motion.div>

      {/* Floating Cards */}

      <FloatingStat
        icon={GraduationCap}
        value="100+"
        label="Universities"
        className="absolute right-[-30px] top-44"
      />

      <FloatingStat
        icon={ShieldPlus}
        value="5000+"
        label="Students"
        className="absolute left-[-30px] top-12"
      />

      <FloatingStat
        icon={Stethoscope}
        value="15+"
        label="Countries"
        className="absolute bottom-16 left-[-30px]"
      />
    </div>
    
  );
}