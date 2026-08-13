"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionCard from "./SectionCard";

const faqs = [
  "Is nursing abroad a good career option?",
  "Which countries are best for Indian nursing students?",
  "Can I settle abroad with my family after studying nursing?",
  "What are the eligibility criteria?",
  "Which exams are required to work abroad?",
  "How does Medico Yatra help?",
  "How much can nurses earn abroad?",
  "What is the duration of nursing courses?",
  "Does Medico Yatra guarantee jobs or PR?"
];

export default function FAQ() {
  const [active, setActive] = useState(null);
  
  return (
    <SectionCard id="faqs" className="mb-8 sm:mb-10">
      <div className="text-center">
        <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-blue-600 sm:text-[10px]">
          Need clarity?
        </span>
        <h2 className="mt-1 text-lg font-black sm:text-xl lg:text-2xl">
          Frequently Asked Questions
        </h2>
      </div>
      
      <div className="mt-5 grid gap-2 sm:mt-6 sm:gap-2.5 lg:grid-cols-2">
        {faqs.map((q, i) => (
          <button 
            key={q} 
            onClick={() => setActive(active === i ? null : i)} 
            className="text-left"
          >
            <div className={`rounded-xl border p-3 transition sm:rounded-2xl sm:p-3.5 ${
              active === i 
                ? "border-blue-200 bg-blue-50/60" 
                : "border-slate-200 bg-white hover:border-blue-100"
            }`}>
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <span className="text-[10px] font-semibold text-slate-700 sm:text-[11px]">
                  {q}
                </span>
                <ChevronDown 
                  size={14} 
                  className={`shrink-0 text-blue-600 transition sm:size-[15px] ${
                    active === i ? "rotate-180" : ""
                  }`} 
                />
              </div>
              {active === i && (
                <p className="mt-2 border-t border-blue-100 pt-2 text-[9px] leading-4 text-slate-500 sm:text-[10px]">
                  Our counsellors can explain eligibility, country-specific pathways, licensing requirements and realistic career options based on your profile.
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </SectionCard>
  );
}