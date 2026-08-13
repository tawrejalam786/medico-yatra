"use client";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Globe2, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";

const items = [
  [TrendingUp, "High Demand", "Nurses needed globally"],
  [BriefcaseBusiness, "Better Salaries", "Earn in top currencies"],
  [Globe2, "Global Mobility", "Work in multiple countries"],
  [HeartHandshake, "Family Settlement", "Bring your loved ones"],
  [GraduationCap, "Career Growth", "Specialize & grow"]
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:rounded-3xl sm:grid-cols-2 lg:grid-cols-5">
        {items.map(([Icon, title, sub], i) => (
          <motion.div 
            key={title} 
            whileHover={{ y: -2 }} 
            className={`flex items-center gap-2.5 p-3.5 sm:gap-3 sm:p-4 lg:p-5 ${i < items.length - 1 ? "border-b sm:border-b-0 sm:border-r lg:border-r border-slate-100 last:border-b-0" : ""}`}
          >
            <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 sm:size-10 sm:rounded-2xl">
              <Icon size={17} className="sm:size-[19px]" />
            </div>
            <div>
              <b className="block text-[11px] font-extrabold sm:text-xs">{title}</b>
              <span className="text-[9px] text-slate-500 sm:text-[10px]">{sub}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}