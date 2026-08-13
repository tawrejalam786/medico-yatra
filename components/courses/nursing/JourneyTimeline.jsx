"use client";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Building2, FileText, Globe2, GraduationCap, HeartHandshake, Search, Plane, UserRound } from "lucide-react";
import SectionCard from "./SectionCard";

const journey = [
  ["01", "Understand", "Your Goals", Search],
  ["02", "Book Free", "Counselling", UserRound],
  ["03", "Profile", "Evaluation", BadgeCheck],
  ["04", "University", "Shortlist", Building2],
  ["05", "Offer Letter", "& Admission", FileText],
  ["06", "Visa", "& Travel", Plane],
  ["07", "Study", "Abroad", BookOpen],
  ["08", "License &", "Build Career", GraduationCap],
  ["09", "Settle &", "Grow with Family", HeartHandshake]
];

export default function JourneyTimeline() {
  return (
    <SectionCard className="mt-6 sm:mt-8 lg:mt-10">
      <div className="text-center">
        <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-blue-600 sm:text-[10px]">
          Your roadmap
        </span>
        <h2 className="mt-1 text-lg font-black sm:text-xl lg:text-2xl">
          Your Nursing Journey with Medico Yatra
        </h2>
      </div>

      {/* Horizontal Scroll on Mobile, Grid on Desktop */}
      <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-6 lg:grid lg:grid-cols-9 lg:gap-1 lg:overflow-visible">
        {journey.map(([num, title, sub, Icon], i) => (
          <motion.div 
            key={num} 
            whileHover={{ y: -3 }} 
            className="relative min-w-[100px] snap-center text-center sm:min-w-[112px] lg:min-w-0"
          >
            <div className="relative mx-auto grid size-10 place-items-center rounded-full border border-blue-200 bg-blue-50 text-blue-600 sm:size-11">
              <Icon size={16} className="sm:size-[18px]" />
              {i < journey.length - 1 && (
                <span className="absolute left-[calc(100%+3px)] hidden h-px w-8 bg-blue-200 lg:block" />
              )}
            </div>
            <b className="mt-1.5 block text-[8px] leading-tight sm:mt-2 sm:text-[9px]">{title}</b>
            <span className="block text-[8px] text-slate-500 sm:text-[9px]">{sub}</span>
          </motion.div>
        ))}
      </div>

      {/* Scroll Hint for Mobile */}
      <p className="mt-3 text-center text-[8px] text-slate-400 sm:text-[9px] lg:hidden">
        ← Swipe to see all steps →
      </p>
    </SectionCard>
  );
}