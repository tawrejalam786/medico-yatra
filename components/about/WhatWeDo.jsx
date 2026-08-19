"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Plane,
  Stethoscope,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Course & Country",
    description:
      "We help you choose the right course and country based on your goals, profile, and priorities.",
    icon: Compass,
    tag: "CHOOSE",
  },
  {
    number: "02",
    title: "University & Admission",
    description:
      "From university selection to application and admission, we guide you through the process.",
    icon: GraduationCap,
    tag: "ADMIT",
  },
  {
    number: "03",
    title: "Study & Prepare",
    description:
      "We stay connected through your education and help you prepare for the next professional step.",
    icon: BookOpen,
    tag: "PREPARE",
  },
  {
    number: "04",
    title: "Licensing & Career",
    description:
      "The relationship continues beyond graduation with licensing and career guidance.",
    icon: Stethoscope,
    tag: "PROGRESS",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#061c34] py-10 text-white sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-[-120px] h-[420px] w-[420px] rounded-full bg-[#0263CC]/25 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#02A7BB]/15 blur-[140px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#69dce5]">
                <Plane size={16} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#69dce5]">
                What We Do
              </span>
            </div>

            <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.045em] sm:text-[50px] lg:text-[62px]">
              End-to-end.
              <br />
              <span className="text-[#69dce5]">
                All the way to your career.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-[700px] text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
              Choosing a healthcare course is only the beginning. Our support
              is designed around the complete journey — from the first
              decision to the professional path that follows.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#02A7BB]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                One journey · four stages
              </span>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            JOURNEY MAP
        ======================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">

          {/* =====================================================
              DESKTOP FLIGHT PATH
          ====================================================== */}

          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[105px] hidden lg:block">

            <svg
              viewBox="0 0 1000 160"
              className="h-[160px] w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                d="M35 110 C180 15 285 150 430 70 C565 0 650 140 760 60 C830 10 900 55 965 25"
                stroke="url(#journeyGradient)"
                strokeWidth="2"
                strokeDasharray="5 7"
                vectorEffect="non-scaling-stroke"
              />

              <defs>
                <linearGradient
                  id="journeyGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#0263CC" />
                  <stop offset="50%" stopColor="#02A7BB" />
                  <stop offset="100%" stopColor="#69dce5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* =====================================================
              MOBILE VERTICAL PATH
          ====================================================== */}

          <div className="pointer-events-none absolute bottom-8 left-[28px] top-8 w-px bg-gradient-to-b from-[#0263CC]/40 via-[#02A7BB]/50 to-[#69dce5]/10 lg:hidden" />

          {/* =====================================================
              JOURNEY ITEMS
          ====================================================== */}

          <div className="grid gap-5 lg:grid-cols-4 lg:gap-6">
            {journey.map((item, index) => (
              <JourneyNode
                key={item.number}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="rounded-[24px] border border-white/8 bg-white/[0.035] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#02A7BB]/10 text-[#69dce5]">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white/90">
                  The admission letter isn't the finish line.
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  It's where the next part of the journey begins.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-[24px] border border-[#02A7BB]/15 bg-[#02A7BB]/5 px-6 py-5">
            <div className="text-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#69dce5]">
                Our commitment
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                With you beyond admission.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   JOURNEY NODE
================================================================ */

function JourneyNode({
  number,
  title,
  description,
  icon: Icon,
  tag,
  index,
}) {
  return (
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group relative lg:pt-2"
    >
      {/* =====================================================
          DESKTOP NODE
      ====================================================== */}

      <div className="relative z-10 mb-8 hidden justify-center lg:flex">
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#69dce5]/20 bg-[#061c34] shadow-[0_0_0_10px_rgba(2,167,187,0.035)]"
        >
          {/* glow */}

          <div className="absolute inset-2 rounded-full bg-[#0263CC]/15 blur-md transition-all duration-300 group-hover:bg-[#02A7BB]/25" />

          <Icon
            size={24}
            className="relative text-[#69dce5]"
          />

          {/* number */}

          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[8px] font-bold text-[#0263CC] shadow-lg">
            {number}
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          MOBILE NODE
      ====================================================== */}

      <div className="absolute left-0 top-5 z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[5px] border-[#061c34] bg-[#0263CC] lg:hidden">
        <Icon size={18} className="text-white" />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#69dce5] text-[7px] font-bold text-[#061c34]">
          {number}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="ml-[78px] rounded-[24px] border border-white/8 bg-white/[0.035] p-5 transition-all duration-300 group-hover:border-[#02A7BB]/20 group-hover:bg-white/[0.055] lg:ml-0 lg:min-h-[285px] lg:p-6">
        
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.2em] text-[#69dce5]">
            {tag}
          </span>

          <ArrowRight
            size={14}
            className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#69dce5]"
          />
        </div>

        <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-white/45">
          {description}
        </p>

        {/* bottom line */}

        <div className="mt-7 flex items-center gap-2">
          <span className="h-px flex-1 bg-white/8 transition-colors group-hover:bg-[#02A7BB]/20" />

          <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-colors group-hover:bg-[#69dce5]" />
        </div>
      </div>
    </motion.div>
  );
}