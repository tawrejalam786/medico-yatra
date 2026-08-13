"use client";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpen, ClipboardCheck, GraduationCap, MapPin } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const steps = [
  ["01", "Choose", "Your Destination", MapPin],
  ["02", "Meet", "Eligibility", BadgeCheck],
  ["03", "Admission", "Support", ClipboardCheck],
  ["04", "Study", "Abroad", BookOpen],
  ["05", "Graduate", "& Prepare", GraduationCap]
];

export default function QualificationPath() {
  return (
    <SectionCard>
      <SectionHeading 
        title="Study & Qualification Pathway" 
        description="A simple roadmap from choosing a destination to preparing for your nursing career." 
      />
      <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
        {steps.map(([num, title, sub, Icon], i) => (
          <motion.div key={num} whileHover={{ y: -3 }} className="relative text-center">
            <div className="mx-auto grid size-8 place-items-center rounded-full bg-blue-600 text-[9px] font-black text-white shadow-lg shadow-blue-600/20 sm:size-9 sm:text-[10px]">
              {num}
            </div>
            <b className="mt-1.5 block text-[9px] leading-tight sm:mt-2 sm:text-[10px]">{title}</b>
            <span className="block text-[8px] text-slate-500 sm:text-[9px]">{sub}</span>
            <Icon size={12} className="mx-auto mt-1.5 text-blue-500 sm:mt-2 sm:size-[14px]" />
          </motion.div>
        ))}
      </div>
      <a 
        href="#counselling" 
        className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-xl border border-blue-200 px-3.5 py-2 text-[9px] font-extrabold text-blue-700 hover:bg-blue-50 sm:mt-5 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[10px]"
      >
        Explore Top Nursing Programs <ArrowRight size={12} className="sm:size-[13px]" />
      </a>
    </SectionCard>
  );
}