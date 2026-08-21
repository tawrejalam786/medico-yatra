"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CalendarClock,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const pillars = [
  {
    id: "timing",
    number: "01",
    icon: CalendarClock,
    title: "Timing",
    description:
      "Content retained close to when you first learned it vs. content relearned under exam pressure years later.",
    accent: "blue",
    image: "/images/fmge/fmge-timing.png",
  },
  {
    id: "confidence",
    number: "02",
    icon: Brain,
    title: "Confidence",
    description:
      "Genuine familiarity with the FMGE question pattern, built over years, vs. encountering the format for the first time under stress.",
    accent: "teal",
    image: "/images/fmge/fmge-confidence.png",
  },
  {
    id: "momentum",
    number: "03",
    icon: TrendingUp,
    title: "Career Momentum",
    description:
      "Clearing on your first attempt and moving directly into the next stage of your career vs. losing months or years to repeated attempts.",
    accent: "blue",
    image: "/images/fmge/fmge-career.png",
  },
  {
    id: "family",
    number: "04",
    icon: UsersRound,
    title: "Family Peace of Mind",
    description:
      "Parents who understand exactly how licensing is being handled, rather than worrying silently throughout your six years abroad.",
    accent: "teal",
    image: "/images/fmge/fmge-family.png",
  },
];

const accentClasses = {
  blue: {
    icon: "bg-[#EAF3FF] text-[#0263CC]",
    line: "from-[#0263CC] to-[#4DA5EC]",
    number: "text-[#0263CC]/10",
    glow: "bg-[#0263CC]/10",
  },

  teal: {
    icon: "bg-[#E8FAFB] text-[#02A7BB]",
    line: "from-[#02A7BB] to-[#4DA5EC]",
    number: "text-[#02A7BB]/10",
    glow: "bg-[#02A7BB]/10",
  },
};

export default function WhyComparisonMatters() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7FAFD] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(2,99,204,0.08),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(2,167,187,0.07),transparent_30%)]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Animated left glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0263CC]/8 blur-3xl"
        />

        {/* Animated right glow */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#02A7BB]/8 blur-3xl"
        />

        {/* =====================================================
            DECORATIVE ORBIT
        ====================================================== */}

        <svg
          className="absolute left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-[#0263CC]/[0.045] lg:block"
          viewBox="0 0 520 520"
          fill="none"
          aria-hidden="true"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="220"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 9"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "260px 260px",
            }}
          />

          <motion.circle
            cx="260"
            cy="260"
            r="155"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 8"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "260px 260px",
            }}
          />

          <circle
            cx="260"
            cy="260"
            r="5"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-3 py-1.5 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0263CC]">
              <Sparkles className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0263CC] sm:text-xs">
              Beyond Exam Preparation
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[#071A49] sm:text-4xl lg:text-[46px] lg:tracking-[-1.8px]">
            It&apos;s Not Just Exam Content —
            <span className="mt-1 block bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              It&apos;s Timing, Confidence &amp; Career Momentum
            </span>
          </h2>

          {/* Intro */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A passing score is not the only thing at stake. A realistic view
            of FMGE preparation weighs:
          </p>
        </motion.div>

        {/* =================================================
            PILLARS
        ================================================== */}

        <div className="relative mt-10 sm:mt-12">
          {/* Center connector */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[72%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0263CC]/10 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const styles = accentClasses[pillar.accent];

              return (
                <motion.article
                  key={pillar.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div className="relative h-full min-h-[330px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_15px_45px_rgba(15,70,120,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0263CC]/15 hover:shadow-[0_25px_65px_rgba(15,70,120,0.14)] sm:p-6">
                    {/* =================================================
                        BACKGROUND IMAGE
                    ================================================== */}

                    <div className="pointer-events-none absolute inset-0 z-0">
                      {/* Image */}
                      <img
                        src={pillar.image}
                        alt=""
                        className="absolute bottom-0 right-0 h-[78%] w-[78%] object-cover object-center opacity-[0.85] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.13] group-hover:grayscale-0"
                      />

                      {/* Main white overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/55" />

                      {/* Image fade */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,transparent_0%,rgba(255,255,255,0.92)_72%)]" />

                      {/* Bottom image fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/70 to-transparent" />
                    </div>

                    {/* =================================================
                        TOP GRADIENT
                    ================================================== */}

                    <div
                      className={`absolute left-0 right-0 top-0 z-30 h-[3px] bg-gradient-to-r ${styles.line}`}
                    />

                    {/* =================================================
                        TOP RIGHT GLOW
                    ================================================== */}

                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 z-10 h-40 w-40 rounded-full ${styles.glow} opacity-60 blur-3xl transition-transform duration-700 group-hover:scale-125`}
                    />

                    {/* =================================================
                        LARGE NUMBER
                    ================================================== */}

                    <span
                      className={`pointer-events-none absolute right-4 top-2 z-10 text-[70px] font-black leading-none ${styles.number}`}
                    >
                      {pillar.number}
                    </span>

                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div className="relative z-20">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon} shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:rotate-2`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="relative z-20 mt-6">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#071A49]">
                        {pillar.title}
                      </h3>

                      {/* Accent line */}
                      <div
                        className={`mt-3 h-[2px] w-9 bg-gradient-to-r ${styles.line} transition-all duration-500 group-hover:w-14`}
                      />

                      <p className="mt-4 max-w-[290px] text-sm leading-6 text-slate-600">
                        {pillar.description}
                      </p>
                    </div>

                    {/* =================================================
                        BOTTOM IMAGE GLOW
                    ================================================== */}

                    <div
                      className={`pointer-events-none absolute -bottom-10 -right-10 z-10 h-36 w-36 rounded-full ${styles.glow} opacity-30 blur-3xl transition-all duration-700 group-hover:scale-125`}
                    />

                    {/* =================================================
                        PREMIUM BORDER GLOW ON HOVER
                    ================================================== */}

                    <div
                      className={`pointer-events-none absolute inset-0 z-10 rounded-[26px] opacity-0 ring-1 ring-inset transition-opacity duration-500 group-hover:opacity-100 ${
                        pillar.accent === "blue"
                          ? "ring-[#0263CC]/15"
                          : "ring-[#02A7BB]/15"
                      }`}
                    />
                  </div>

                  {/* =================================================
                      CONNECTOR DOT
                  ================================================== */}

                  {index < pillars.length - 1 && (
                    <div className="absolute -right-2 top-1/2 z-40 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white lg:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]/40" />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =================================================
            BOTTOM TAKEAWAY
        ================================================== */}

      </div>

      {/* =====================================================
          BOTTOM DECORATIVE WAVE
      ====================================================== */}

      <svg
        className="absolute bottom-0 left-0 w-full translate-y-[1px]"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 52C180 30 300 25 480 40C650 54 760 62 930 42C1110 20 1260 18 1440 38V70H0V52Z"
          fill="white"
        />
      </svg>
    </section>
  );
}