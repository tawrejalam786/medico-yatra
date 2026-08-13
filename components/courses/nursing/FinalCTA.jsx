"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plane, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl bg-slate-950 px-4 py-7 text-white shadow-2xl sm:mb-10 sm:rounded-[28px] sm:px-6 sm:py-8 lg:px-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,.7),transparent_34%),radial-gradient(circle_at_10%_90%,rgba(6,182,212,.22),transparent_30%)]" />
      
      {/* Background Image */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-25">
        <Image 
          src="/images/courses/nurse.png" 
          alt="" 
          fill 
          className="object-cover object-top" 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] font-bold sm:mb-3 sm:gap-2 sm:px-3 sm:text-[10px]">
          <Sparkles size={12} className="sm:size-[13px]" /> 
          Your global future starts here
        </div>
        
        <h2 className="text-xl font-black leading-tight sm:text-2xl lg:text-3xl xl:text-4xl">
          Your Dream. Our Guidance.{" "}
          <span className="text-blue-300">A Global Future.</span>
        </h2>
        
        <p className="mt-2.5 max-w-xl text-[11px] leading-5 text-slate-300 sm:mt-3 sm:text-xs">
          Study nursing abroad and build a respected career with better earnings, international exposure and the opportunity to grow with your family.
        </p>
        
        <motion.a 
          whileHover={{ y: -2 }} 
          href="#counselling" 
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-[10px] font-extrabold text-blue-700 sm:mt-5 sm:gap-2 sm:px-5 sm:py-3 sm:text-[11px]"
        >
          Book Free Counselling <ArrowRight size={13} className="sm:size-[14px]" />
        </motion.a>
      </div>
      
      {/* Decorative Plane Icon */}
      <Plane className="absolute bottom-6 right-[34%] hidden rotate-[-20deg] text-white/20 sm:bottom-7 lg:block" size={36} />
    </section>
  );
}