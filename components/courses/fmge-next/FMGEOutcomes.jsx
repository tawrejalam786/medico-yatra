"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Info,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

const studentA = [
  {
    stage: "Year 1–4 of MBBS",
    icon: BookOpen,
    title: "University Coursework",
    description:
      "Focused entirely on university coursework; no FMGE-specific preparation.",
  },
  {
    stage: "Final Year",
    icon: Clock3,
    title: "The Pressure Builds",
    description:
      "Realises the scale of FMGE content; attempts to cover 4 years of material in a few months.",
  },
  {
    stage: "Post-graduation",
    icon: GraduationCap,
    title: "Exam Under Pressure",
    description:
      "Sits FMGE under pressure, with foundational subjects studied 4+ years earlier significantly faded.",
  },
  {
    stage: "If unsuccessful",
    icon: Repeat2,
    title: "Another Attempt",
    description:
      "Repeats the exam, losing months or years, alongside the emotional cost of uncertainty.",
  },
];

const studentB = [
  {
    stage: "Year 1–2 of MBBS",
    icon: BookOpen,
    title: "Build The Foundation",
    description:
      "Foundational subjects reinforced in FMGE-aligned format, alongside university coursework, while still fresh.",
  },
  {
    stage: "Year 3–4",
    icon: Target,
    title: "Progressive Integration",
    description:
      "Para-clinical and clinical subjects integrated progressively, with regular practice tests.",
  },
  {
    stage: "Final Year",
    icon: CalendarDays,
    title: "Intensive Revision",
    description:
      "Intensive revision builds on years of consistent preparation — not a standing start.",
  },
  {
    stage: "Post-graduation",
    icon: CheckCircle2,
    title: "Ready To Sit FMGE",
    description:
      "Sits FMGE with genuine readiness, built over the full course rather than crammed at the end.",
  },
];

function JourneyCard({ item, index, variant }) {
  const Icon = item.icon;
  const isA = variant === "a";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isA ? -24 : 24,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative"
    >
      {/* Desktop connector */}
      <div
        className={`absolute top-8 hidden h-px w-8 bg-gradient-to-r lg:block ${
          isA
            ? "right-[-32px] from-[#0263CC]/10 to-[#0263CC]/40"
            : "left-[-32px] from-[#02A7BB]/40 to-[#02A7BB]/10"
        }`}
      />

      <div
        className={`
          relative overflow-hidden rounded-2xl border bg-white/90
          p-4 shadow-[0_12px_35px_rgba(15,55,100,0.07)]
          backdrop-blur-xl transition-all duration-300
          group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(15,55,100,0.11)]
          sm:p-5
          ${
            isA
              ? "border-[#0263CC]/10 group-hover:border-[#0263CC]/25"
              : "border-[#02A7BB]/10 group-hover:border-[#02A7BB]/25"
          }
        `}
      >
        {/* subtle top glow */}
        <div
          className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl ${
            isA ? "bg-[#0263CC]/10" : "bg-[#02A7BB]/10"
          }`}
        />

        <div className="relative flex gap-3.5">
          {/* icon */}
          <div
            className={`
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl
              ${
                isA
                  ? "bg-[#EAF3FF] text-[#0263CC]"
                  : "bg-[#E9FAF8] text-[#02A7BB]"
              }
            `}
          >
            <Icon className="h-[18px] w-[18px]" />
          </div>

          <div className="min-w-0 flex-1">
            {/* stage */}
            <div className="mb-1 flex items-center gap-2">
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${
                  isA ? "text-[#0263CC]" : "text-[#02A7BB]"
                }`}
              >
                {item.stage}
              </span>
            </div>

            <h3 className="text-sm font-extrabold leading-5 text-[#071A49] sm:text-[15px]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[11px] leading-[1.65] text-slate-500 sm:text-xs">
              {item.description}
            </p>
          </div>
        </div>

        {/* bottom progress indicator */}
        <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(45 + index * 15, 100)}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            className={`h-full rounded-full ${
              isA ? "bg-[#0263CC]/30" : "bg-[#02A7BB]/40"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

function StudentHeader({ student, variant }) {
  const isA = variant === "a";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-6"
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-11 w-11 items-center justify-center rounded-2xl
            shadow-sm
            ${
              isA
                ? "bg-[#EAF3FF] text-[#0263CC]"
                : "bg-[#E9FAF8] text-[#02A7BB]"
            }
          `}
        >
          <UserRound className="h-5 w-5" />
        </div>

        <div>
          <div
            className={`text-[10px] font-black uppercase tracking-[0.16em] ${
              isA ? "text-[#0263CC]" : "text-[#02A7BB]"
            }`}
          >
            {student.label}
          </div>

          <h3 className="mt-0.5 text-base font-extrabold text-[#071A49] sm:text-lg">
            {student.title}
          </h3>

          <p className="text-[11px] text-slate-400">
            {student.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FMGEOutcomes() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* soft radial background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(77,165,236,0.10),transparent_34%)]" />

        {/* animated blobs */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#0263CC]/[0.06] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 bottom-40 h-72 w-72 rounded-full bg-[#02A7BB]/[0.07] blur-3xl"
        />

        {/* SVG route pattern */}
        <svg
          className="absolute right-0 top-0 h-[360px] w-[500px] opacity-30"
          viewBox="0 0 500 360"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M520 20 C420 70 430 150 330 160 C240 170 280 250 160 280 C100 295 70 320 20 350"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="5 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="330"
            cy="160"
            r="5"
            fill="#0263CC"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </svg>

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0263CC]">
              <Sparkles className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC]">
              Illustrative Example
            </span>
          </motion.div>

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
            className="mt-5 text-[28px] font-extrabold leading-[1.12] tracking-[-1px] text-[#071A49] sm:text-[38px] sm:tracking-[-1.5px] lg:text-[46px]"
          >
            Two Students, Two Outcomes —
            <span className="block bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Why When You Start Matters
            </span>
          </motion.h2>

          {/* intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
          >
            FMGE isn&apos;t just about how hard you study — it&apos;s about
            when you start. Below are two illustrative journeys. They are
            examples to help you think — not predictions. Every student&apos;s
            outcome depends on their consistency, their university&apos;s
            curriculum, and their own effort.
          </motion.p>
        </div>

        {/* =================================================
            JOURNEY AREA
        ================================================== */}

        <div className="relative mt-12 lg:mt-16">
          {/* central timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B9D9F8] to-transparent lg:block" />

          {/* central top marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 lg:flex"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#F7FAFE] bg-[#071A49] shadow-[0_8px_25px_rgba(7,26,73,0.18)]">
              <Target className="h-4 w-4 text-white" />
            </div>
          </motion.div>

          {/* two columns */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* ============================================
                STUDENT A
            ============================================= */}

            <div>
              <StudentHeader
                variant="a"
                student={{
                  label: "Student A",
                  title: "Starts FMGE Prep in Final Year",
                  subtitle: "Illustrative journey",
                }}
              />

              <div className="space-y-4">
                {studentA.map((item, index) => (
                  <JourneyCard
                    key={item.stage}
                    item={item}
                    index={index}
                    variant="a"
                  />
                ))}
              </div>

              {/* A outcome label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-5 flex items-center gap-2 rounded-xl border border-[#0263CC]/10 bg-[#EAF3FF]/60 px-4 py-3"
              >
                <Info className="h-4 w-4 shrink-0 text-[#0263CC]" />

                <p className="text-[11px] leading-5 text-[#345273]">
                  Preparation begins late, creating greater pressure around
                  revision and recall.
                </p>
              </motion.div>
            </div>

            {/* ============================================
                STUDENT B
            ============================================= */}

            <div>
              <StudentHeader
                variant="b"
                student={{
                  label: "Student B",
                  title: "Starts FMGE Prep in Year 1",
                  subtitle: "Illustrative journey",
                }}
              />

              <div className="space-y-4">
                {studentB.map((item, index) => (
                  <JourneyCard
                    key={item.stage}
                    item={item}
                    index={index}
                    variant="b"
                  />
                ))}
              </div>

              {/* honest framing */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.4,
                }}
                className="mt-5 rounded-2xl border border-[#02A7BB]/15 bg-gradient-to-br from-[#ECFCFA] to-white p-4 shadow-sm sm:p-5"
              >
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#02A7BB]/10 text-[#02A7BB]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-[#071A49]">
                      Honest framing
                    </h4>

                    <p className="mt-1.5 text-[11px] leading-[1.65] text-slate-500 sm:text-xs">
                      Starting structured preparation early can help build
                      consistency and reduce last-minute pressure. This is an
                      example scenario, not a guarantee — your result depends
                      on your own effort, attendance, and engagement with the
                      material, in addition to any coaching support.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#071A49] px-5 py-6 shadow-[0_20px_55px_rgba(7,26,73,0.18)] sm:mt-16 sm:px-8 sm:py-7"
        >
          {/* CTA decorative SVG */}
          <svg
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
            viewBox="0 0 500 180"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M500 10C410 30 440 90 340 95C250 100 280 155 170 170"
              stroke="#4DA5EC"
              strokeWidth="1"
              strokeDasharray="6 7"
            />

            <circle
              cx="340"
              cy="95"
              r="5"
              fill="#02A7BB"
            />
          </svg>

          <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#4DA5EC]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8CCAFF]">
                  Start With A Plan
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white sm:text-xl">
                Build Your FMGE Preparation Journey Early
              </h3>

              <p className="mt-1 text-xs leading-5 text-white/60">
                Start My FMGE Plan From Today
              </p>
            </div>

            <Link
              href="/counselling"
              className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-xs font-extrabold text-[#0263CC] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5FAFF] sm:w-auto"
            >
              Start My FMGE Plan From Today

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* bottom disclaimer */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-[9px] leading-4 text-slate-400 sm:text-[10px]">
          Illustrative examples only. Individual outcomes depend on student
          effort, attendance, university curriculum and engagement with the
          learning material.
        </p>
      </div>
    </section>
  );
}