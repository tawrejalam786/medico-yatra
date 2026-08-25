"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../../../data/georgia";
import SectionTitle from "../shared/SectionTitle";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Initially sirf 4 FAQs show hongi
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  const handleShowLess = () => {
    setShowAll(false);

    // Agar hidden FAQ open hai to first FAQ open kar do
    if (open >= 4) {
      setOpen(0);
    }

    document
      .getElementById("faq")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Georgia MBBS — frequently asked questions."
          text="Twenty questions from the supplied brief, kept compact with an accordion so the section does not become a huge mobile scroll."
          center
        />

        <div className="mt-9 space-y-3">
          {visibleFaqs.map(([q, a], i) => {
            const active = open === i;

            return (
              <article
                key={q}
                className={`overflow-hidden rounded-[22px] border bg-white transition ${
                  active
                    ? "border-[#0263CC]/20 shadow-[0_12px_35px_rgba(2,99,204,.08)]"
                    : "border-slate-100 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                >
                  <span className="text-sm font-black text-slate-900 sm:text-base">
                    {q}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition ${
                      active
                        ? "bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white"
                        : "bg-[#EEF7FF] text-[#0263CC]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        active ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-5 text-sm leading-7 text-slate-600 sm:px-5">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        {faqs.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() =>
                showAll ? handleShowLess() : setShowAll(true)
              }
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(2,99,204,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(2,99,204,.3)]"
            >
              {showAll ? "Show Less" : `Load More (${faqs.length - 4})`}

              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}