"use client";

import { motion } from "framer-motion";

const STEP_VARIANTS = {
  enter:  { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:   { opacity: 0, x: -40, transition: { duration: 0.25, ease: "easeIn" } },
};

/**
 * FinderStep — renders one step of the Country Finder.
 *
 * Props:
 *   question  — string
 *   options   — [{ id, label, emoji? }]
 *   selected  — currently selected id or null
 *   onSelect  — (id) => void
 *   layout    — "grid" | "list" (default grid)
 */
export default function FinderStep({ question, options, selected, onSelect, layout = "grid" }) {
  return (
    <motion.div
      key={question}
      variants={STEP_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {/* Question */}
      <p className="font-heading text-xl sm:text-2xl text-[#0F172A] mb-6 leading-snug">
        {question}
      </p>

      {/* Options */}
      {layout === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" role="listbox" aria-label={question}>
          {options.map((opt) => (
            <OptionCard
              key={opt.id}
              id={opt.id}
              label={opt.label}
              emoji={opt.emoji}
              selected={selected === opt.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2.5" role="listbox" aria-label={question}>
          {options.map((opt) => (
            <OptionRow
              key={opt.id}
              id={opt.id}
              label={opt.label}
              emoji={opt.emoji}
              selected={selected === opt.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function OptionCard({ id, label, emoji, selected, onSelect }) {
  return (
    <button
      role="option"
      aria-selected={selected}
      onClick={() => onSelect(id)}
      className={`
        relative flex flex-col items-center text-center gap-2 p-4 rounded-2xl border-2 cursor-pointer
        transition-all duration-200 font-body focus-visible:outline-2 focus-visible:outline-[#0263CC]
        ${selected
          ? "border-[#0263CC] bg-[#F1F7FC] shadow-md ring-2 ring-[#0263CC]/20"
          : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd] hover:shadow-sm"
        }
      `}
    >
      {/* Selected check */}
      {selected && (
        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0263CC] flex items-center justify-center" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}

      {/* Emoji */}
      {emoji && (
        <span className="text-3xl leading-none" aria-hidden="true">{emoji}</span>
      )}

      {/* Label */}
      <span className={`text-sm font-medium leading-tight ${selected ? "text-[#0263CC]" : "text-[#334155]"}`}>
        {label}
      </span>
    </button>
  );
}

function OptionRow({ id, label, emoji, selected, onSelect }) {
  return (
    <button
      role="option"
      aria-selected={selected}
      onClick={() => onSelect(id)}
      className={`
        flex items-center gap-4 px-5 py-4 rounded-xl border-2 cursor-pointer
        transition-all duration-200 font-body focus-visible:outline-2 focus-visible:outline-[#0263CC] text-left
        ${selected
          ? "border-[#0263CC] bg-[#F1F7FC] shadow-sm ring-2 ring-[#0263CC]/15"
          : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd]"
        }
      `}
    >
      {emoji && (
        <span className="text-2xl w-8 text-center shrink-0" aria-hidden="true">{emoji}</span>
      )}
      <span className={`font-medium text-sm flex-1 ${selected ? "text-[#0263CC]" : "text-[#334155]"}`}>
        {label}
      </span>

      {/* Radio-style indicator */}
      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
          selected ? "border-[#0263CC] bg-[#0263CC]" : "border-[#CBD5E1]"
        }`}
        aria-hidden="true"
      >
        {selected && (
          <span className="w-2 h-2 rounded-full bg-white" />
        )}
      </span>
    </button>
  );
}
