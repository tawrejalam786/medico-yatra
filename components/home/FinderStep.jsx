"use client";

import { motion } from "framer-motion";

const STEP_VARIANTS = {
  enter: {
    opacity: 0,
    x: 40,
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export default function FinderStep({
  question,
  options,
  selected,
  onSelect,
  layout = "grid",
}) {
  return (
    <motion.div
      key={question}
      variants={STEP_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {/* Question */}
      <p
        className="
          font-heading
          text-lg
          sm:text-2xl
          text-[#0F172A]
          mb-4
          sm:mb-6
          leading-snug
        "
      >
        {question}
      </p>

      {/* Options */}
      {layout === "grid" ? (
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-2
            sm:gap-3
          "
          role="listbox"
          aria-label={question}
        >
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
        <div
          className="
            flex
            flex-col
            gap-2
            sm:gap-2.5
          "
          role="listbox"
          aria-label={question}
        >
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


/* =====================================
   CAREER OPTION CARD
===================================== */

function OptionCard({
  id,
  label,
  emoji,
  selected,
  onSelect,
}) {
  return (
    <button
      role="option"
      aria-selected={selected}
      onClick={() => onSelect(id)}
      className={`
        relative
        flex
        flex-col
        items-center
        text-center
        gap-1.5
        sm:gap-2
        p-2.5
        sm:p-4
        rounded-xl
        sm:rounded-2xl
        border-2
        cursor-pointer
        transition-all
        duration-200
        font-body
        focus-visible:outline-2
        focus-visible:outline-[#0263CC]

        lg:flex-col
        lg:items-center
        lg:text-center
        lg:gap-2
        lg:p-4

        max-lg:flex-row
        max-lg:text-left
        max-lg:items-center
        max-lg:gap-2.5
        max-lg:min-h-[58px]

        ${
          selected
            ? "border-[#0263CC] bg-[#F1F7FC] shadow-md ring-2 ring-[#0263CC]/20"
            : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd] hover:shadow-sm"
        }
      `}
    >
      {/* Selected check */}
      {selected && (
        <span
          className="
            absolute
            top-1.5
            right-1.5
            sm:top-2
            sm:right-2
            w-4
            h-4
            sm:w-5
            sm:h-5
            rounded-full
            bg-[#0263CC]
            flex
            items-center
            justify-center
          "
          aria-hidden="true"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M2 5L4 7L8 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}

      {/* Icon / Emoji */}
      {emoji && (
        <span
          className="
            text-2xl
            sm:text-3xl
            lg:text-3xl
            leading-none
            shrink-0

            max-lg:w-8
            max-lg:text-center
          "
          aria-hidden="true"
        >
          {emoji}
        </span>
      )}

      {/* Label */}
      <span
        className={`
          text-xs
          sm:text-sm
          font-medium
          leading-tight

          max-lg:flex-1
          max-lg:pr-4

          ${
            selected
              ? "text-[#0263CC]"
              : "text-[#334155]"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}


/* =====================================
   BUDGET / PRIORITY ROW
===================================== */

function OptionRow({
  id,
  label,
  emoji,
  selected,
  onSelect,
}) {
  return (
    <button
      role="option"
      aria-selected={selected}
      onClick={() => onSelect(id)}
      className={`
        flex
        items-center
        gap-3
        sm:gap-4
        px-3.5
        sm:px-5
        py-2.5
        sm:py-4
        rounded-lg
        sm:rounded-xl
        border-2
        cursor-pointer
        transition-all
        duration-200
        font-body
        focus-visible:outline-2
        focus-visible:outline-[#0263CC]
        text-left

        ${
          selected
            ? "border-[#0263CC] bg-[#F1F7FC] shadow-sm ring-2 ring-[#0263CC]/15"
            : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd]"
        }
      `}
    >
      {emoji && (
        <span
          className="
            text-xl
            sm:text-2xl
            w-7
            sm:w-8
            text-center
            shrink-0
          "
          aria-hidden="true"
        >
          {emoji}
        </span>
      )}

      <span
        className={`
          font-medium
          text-xs
          sm:text-sm
          flex-1

          ${
            selected
              ? "text-[#0263CC]"
              : "text-[#334155]"
          }
        `}
      >
        {label}
      </span>

      {/* Radio-style indicator */}
      <span
        className={`
          w-4
          h-4
          sm:w-5
          sm:h-5
          rounded-full
          border-2
          flex
          items-center
          justify-center
          shrink-0
          transition-all
          duration-200

          ${
            selected
              ? "border-[#0263CC] bg-[#0263CC]"
              : "border-[#CBD5E1]"
          }
        `}
        aria-hidden="true"
      >
        {selected && (
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
        )}
      </span>
    </button>
  );
}