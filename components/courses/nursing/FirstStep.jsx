"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Headphones } from "lucide-react";
import SectionCard from "./SectionCard";

const points = [
  "100% Free Counselling", 
  "No Hidden Charges", 
  "Expert Guidance", 
  "End-to-End Support"
];

export default function FirstStep() {
  return (
    <SectionCard className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute -right-12 -top-12 size-32 rounded-full bg-blue-200/50 blur-2xl sm:-right-16 sm:-top-16 sm:size-40" />
      
      <div className="relative">
        <div className="grid size-11 place-items-center rounded-xl bg-white text-blue-600 shadow-sm sm:size-12 sm:rounded-2xl">
          <Headphones size={20} className="sm:size-[23px]" />
        </div>
        
        <h2 className="mt-3 text-lg font-black leading-tight sm:mt-4 sm:text-xl">
          Take the First Step Today!
        </h2>
        
        <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-xs">
          Book a free counselling session and get a personalized roadmap for your future.
        </p>
        
        <div className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
          {points.map(p => (
            <div key={p} className="flex items-center gap-2 text-[9px] font-semibold text-slate-600 sm:text-[10px]">
              <CheckCircle2 size={13} className="text-blue-600 sm:size-[14px]" />
              {p}
            </div>
          ))}
        </div>
        
        <motion.a 
          whileHover={{ x: 3 }} 
          href="#counselling" 
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-[10px] font-extrabold text-white shadow-lg shadow-blue-600/20 sm:mt-6 sm:px-5 sm:py-3 sm:text-[11px]"
        >
          Book My Free Counselling <ArrowRight size={13} className="sm:size-[14px]" />
        </motion.a>
      </div>
    </SectionCard>
  );
}