"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Accordion — single item (used standalone or composed into a group)
 */
export function AccordionItem({ question, answer, defaultOpen = false, index = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = `accordion-${index}`;

  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0263CC] focus-visible:outline-offset-[-2px]"
      >
        <span className="font-heading text-[#0F172A] text-lg leading-snug pr-2">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#0263CC] text-white rotate-180" : "bg-[#F1F7FC] text-[#0263CC]"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-1 text-[#475569] font-body font-light leading-relaxed text-base border-t border-[#F1F5F9]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * AccordionGroup — wraps multiple AccordionItems
 * mode: "multiple" (default) | "single" (only one open at a time)
 */
export function AccordionGroup({ items, mode = "multiple" }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (mode === "single") {
    return (
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <SingleAccordionItem
            key={item.id || i}
            question={item.question}
            answer={item.answer}
            index={i}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.id || i}
          question={item.question}
          answer={item.answer}
          index={i}
        />
      ))}
    </div>
  );
}

function SingleAccordionItem({ question, answer, index, open, onToggle }) {
  const id = `acc-single-${index}`;
  return (
    <div className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-white">
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0263CC] focus-visible:outline-offset-[-2px]"
      >
        <span className="font-heading text-[#0F172A] text-lg leading-snug pr-2">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#0263CC] text-white rotate-180" : "bg-[#F1F7FC] text-[#0263CC]"
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-1 text-[#475569] font-body font-light leading-relaxed text-base border-t border-[#F1F5F9]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
