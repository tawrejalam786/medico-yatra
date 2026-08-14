"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CalendarClock,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
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
  },
  {
    id: "confidence",
    number: "02",
    icon: Brain,
    title: "Confidence",
    description:
      "Genuine familiarity with the FMGE question pattern, built over years, vs. encountering the format for the first time under stress.",
    accent: "teal",
  },
  {
    id: "momentum",
    number: "03",
    icon: TrendingUp,
    title: "Career Momentum",
    description:
      "Clearing on your first attempt and moving directly into the next stage of your career vs. losing months or years to repeated attempts.",
    accent: "blue",
  },
  {
    id: "family",
    number: "04",
    icon: UsersRound,
    title: "Family Peace of Mind",
    description:
      "Parents who understand exactly how licensing is being handled, rather than worrying silently throughout your six years abroad.",
    accent: "teal",
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

        {/* Animated ambient glow */}
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

        {/* Decorative orbit SVG */}
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
            animate={{ rotate: 360 }}
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
            animate={{ rotate: -360 }}
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
          CONTAINER
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
            <span className="block mt-1 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
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
          {/* Center connector - desktop */}
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
                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_15px_45px_rgba(15,70,120,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_65px_rgba(15,70,120,0.12)] sm:p-6">
                    {/* Top gradient */}
                    <div
                      className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${styles.line}`}
                    />

                    {/* Glow */}
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-60 blur-3xl transition-transform duration-700 group-hover:scale-125`}
                    />

                    {/* Large number */}
                    <span
                      className={`pointer-events-none absolute right-4 top-2 text-[70px] font-black leading-none ${styles.number}`}
                    >
                      {pillar.number}
                    </span>

                    {/* Icon */}
                    <div className="relative">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon} shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mt-6">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#071A49]">
                        {pillar.title}
                      </h3>

                      <div
                        className={`mt-3 h-[2px] w-9 bg-gradient-to-r ${styles.line} transition-all duration-500 group-hover:w-14`}
                      />

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="relative mt-6 flex items-center gap-2">
                      <CheckCircle2
                        className={`h-4 w-4 ${
                          pillar.accent === "blue"
                            ? "text-[#0263CC]"
                            : "text-[#02A7BB]"
                        }`}
                      />

                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                        A key part of the journey
                      </span>
                    </div>
                  </div>

                  {/* Small connector dot */}
                  {index < pillars.length - 1 && (
                    <div className="absolute -right-2 top-1/2 z-20 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white lg:flex">
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

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-[#0263CC]/10 bg-white px-4 py-4 text-center shadow-[0_10px_35px_rgba(15,70,120,0.05)] sm:mt-10 sm:px-6 sm:py-5"
        >
          <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC] sm:flex">
            <Target className="h-4 w-4" />
          </div>

          <p className="text-xs font-semibold leading-5 text-slate-600 sm:text-sm sm:leading-6">
            FMGE preparation is about more than exam content — it is about
            building a clear, confident path toward the next stage of your
            career.
          </p>
        </motion.div>
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