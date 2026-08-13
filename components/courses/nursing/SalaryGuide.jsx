"use client";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const salaries = [
  ["USA", "$60–85 L", "🇺🇸"], 
  ["Canada", "$45–60 L", "🇨🇦"], 
  ["UK", "$35–50 L", "🇬🇧"],
  ["Australia", "$50–65 L", "🇦🇺"], 
  ["Germany", "$30–40 L", "🇩🇪"], 
  ["Ireland", "$35–45 L", "🇮🇪"],
  ["New Zealand", "$40–55 L", "🇳🇿"], 
  ["UAE", "$25–35 L", "🇦🇪"], 
  ["Singapore", "$30–45 L", "🇸🇬"], 
  ["Saudi Arabia", "$20–30 L", "🇸🇦"]
];

export default function SalaryGuide() {
  return (
    <SectionCard id="salary">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[.62fr_1.38fr]">
        {/* Left Content Section */}
        <div>
          <SectionHeading 
            title="Nurse Salary Across 10 Countries" 
            description="Illustrative average annual ranges. Actual earnings vary by experience, location, employer and licensing." 
          />
          
          {/* Info Box */}
          <div className="mb-4 flex items-center gap-2.5 rounded-xl bg-blue-50 p-3 sm:mb-5 sm:gap-3 sm:rounded-2xl sm:p-3.5">
            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-blue-600 sm:size-10">
              <DollarSign size={17} className="sm:size-[19px]" />
            </div>
            <div>
              <b className="block text-[11px] leading-tight sm:text-xs">Make an informed decision</b>
              <span className="text-[9px] text-slate-500 sm:text-[10px]">
                Compare opportunities before you choose.
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="#counselling" 
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-blue-700 sm:px-5 sm:py-3"
          >
            View Full Salary Guide <ArrowRight size={14} className="sm:size-[15px]" />
          </a>
        </div>

        {/* Right Salary Cards Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 lg:grid-cols-5">
          {salaries.map(([country, salary, flag], i) => (
            <motion.div 
              key={country} 
              whileHover={{ y: -3 }} 
              className="rounded-xl border border-slate-200 bg-white p-2.5 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 sm:rounded-2xl sm:p-3"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl">{flag}</span>
                <b className="text-[10px] leading-tight sm:text-[11px]">{country}</b>
              </div>
              <div className="mt-2 text-[13px] font-black text-blue-700 sm:mt-3 sm:text-sm">
                {salary}
              </div>
              <span className="text-[8px] text-slate-400 sm:text-[9px]">Approx. / year</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}