"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../../../data/georgia";
import SectionTitle from "../shared/SectionTitle";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Georgia MBBS — frequently asked questions." text="Twenty questions from the supplied brief, kept compact with an accordion so the section does not become a huge mobile scroll." center />
        <div className="mt-9 space-y-3">
          {faqs.map(([q, a], i) => {
            const active = open === i;
            return (
              <article key={q} className={`overflow-hidden rounded-[22px] border bg-white transition ${active ? "border-[#0263CC]/20 shadow-[0_12px_35px_rgba(2,99,204,.08)]" : "border-slate-100 shadow-sm"}`}>
                <button type="button" onClick={() => setOpen(active ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5">
                  <span className="text-sm font-black text-slate-900 sm:text-base">{q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition ${active ? "bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white" : "bg-[#EEF7FF] text-[#0263CC]"}`}><ChevronDown className={`h-4 w-4 transition ${active ? "rotate-180" : ""}`} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .24 }}>
                      <p className="px-4 pb-5 text-sm leading-7 text-slate-600 sm:px-5">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
