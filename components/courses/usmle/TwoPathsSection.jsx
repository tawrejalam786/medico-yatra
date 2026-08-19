"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Flag,
  GraduationCap,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const latePath = [
  {
    stage: "Pre-clinical & Clinical Years",
    icon: GraduationCap,
    text: 'Focused entirely on local university coursework, with USMLE as a vague "maybe someday".',
  },
  {
    stage: "Final Year / Post-Graduation",
    icon: Clock3,
    text: "Begins USMLE preparation cold and discovers the curriculum gap between MBBS and USMLE's content emphasis.",
  },
  {
    stage: "Step 1 / Step 2 CK",
    icon: AlertTriangle,
    text: "Compressed, high-pressure preparation with foundational science content significantly faded.",
  },
  {
    stage: "ECFMG & Match",
    icon: Flag,
    text: "Approaches the Match process late, without structured guidance on competitiveness or strategy.",
  },
];

const earlyPath = [
  {
    stage: "Pre-clinical Years",
    icon: GraduationCap,
    text: "Foundational science content reinforced in a USMLE-aligned format alongside university coursework.",
  },
  {
    stage: "Clinical Years",
    icon: Route,
    text: "Clinical knowledge application aligned with Step 2 CK, with ongoing Step 1 reinforcement and vignette practice.",
  },
  {
    stage: "Final Year / Post-Graduation",
    icon: CalendarDays,
    text: "Intensive Step 1 and Step 2 CK preparation builds on consistent groundwork rather than a standing start.",
  },
  {
    stage: "ECFMG & Match",
    icon: ShieldCheck,
    text: "Certification and Match planning are considered as part of the longer-term pathway.",
  },
];

function PathCard({ item, index, type }) {
  const isEarly = type === "early";

  return (
    <motion.div
      initial={{ opacity: 0, x: isEarly ? 25 : -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="relative"
    >
      <div
        className={`
          group relative overflow-hidden rounded-[20px]
          border p-5
          transition-all duration-500
          hover:-translate-y-1
          ${
            isEarly
              ? "border-[#0263CC]/15 bg-white hover:border-[#0263CC]/30 hover:shadow-[0_18px_45px_rgba(2,99,204,0.10)]"
              : "border-slate-200 bg-white hover:border-red-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
          }
        `}
      >
        {/* Hover glow */}
        <div
          className={`
            pointer-events-none absolute -right-16 -top-16
            h-32 w-32 rounded-full blur-3xl
            opacity-0 transition-opacity duration-500
            group-hover:opacity-60
            ${
              isEarly
                ? "bg-[#0263CC]/10"
                : "bg-red-100"
            }
          `}
        />

        <div className="relative z-10 flex gap-4">
          {/* Number */}
          <div className="flex shrink-0 flex-col items-center">
            <div
              className={`
                flex h-10 w-10 items-center justify-center
                rounded-xl
                ${
                  isEarly
                    ? "bg-[#0263CC]/8 text-[#0263CC]"
                    : "bg-red-50 text-red-500"
                }
              `}
            >
              <item.icon size={18} strokeWidth={1.8} />
            </div>

            {index !== 3 && (
              <div
                className={`
                  mt-2 h-full min-h-[35px] w-px
                  ${
                    isEarly
                      ? "bg-[#0263CC]/10"
                      : "bg-red-100"
                  }
                `}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-1">
            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Stage {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="text-[15px] font-semibold text-[#071C2C]">
              {item.stage}
            </h3>

            <p className="mt-2 text-[13px] leading-5 text-slate-500">
              {item.text}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`
            absolute bottom-0 left-0 h-[2px] w-0
            transition-all duration-500
            group-hover:w-full
            ${isEarly ? "bg-[#0263CC]" : "bg-red-400"}
          `}
        />
      </div>
    </motion.div>
  );
}

export default function TwoPathsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFD] py-10 sm:py-10">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0263CC]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0263CC]">
              Illustrative Comparison
            </span>

            <span className="h-px w-7 bg-[#0263CC]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#071C2C] sm:text-4xl lg:text-[42px]">
            Two Approaches.
            <br />
            <span className="text-[#0263CC]">
              Two Very Different Paces.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            USMLE is rarely a last-minute decision that works out well.
            Starting earlier can change how preparation fits around your
            MBBS-abroad journey.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="relative mt-14">

          {/* Center connector - desktop */}
          <div className="pointer-events-none absolute left-1/2 top-28 hidden h-[calc(100%-180px)] w-px -translate-x-1/2 bg-gradient-to-b from-red-200 via-slate-200 to-[#0263CC]/30 lg:block" />

          {/* Center badge */}
          <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 lg:block">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={13} className="text-[#0263CC]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Plan Early
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

            {/* LEFT */}
            <div>
              {/* Heading */}
              <div className="mb-6 flex items-center justify-between rounded-2xl border border-red-100 bg-red-50/60 px-5 py-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-400">
                    Approach A
                  </div>

                  <h3 className="mt-1 text-lg font-semibold text-[#071C2C]">
                    Deciding Late, Without a Plan
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-400 shadow-sm">
                  <AlertTriangle size={16} />
                </div>
              </div>

              <div className="space-y-3">
                {latePath.map((item, index) => (
                  <PathCard
                    key={item.stage}
                    item={item}
                    index={index}
                    type="late"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              {/* Heading */}
              <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#0263CC]/10 bg-[#0263CC]/5 px-5 py-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0263CC]">
                    Approach B
                  </div>

                  <h3 className="mt-1 text-lg font-semibold text-[#071C2C]">
                    Planning From Pre-Clinical Years
                  </h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0263CC] shadow-sm">
                  <Check size={17} />
                </div>
              </div>

              <div className="space-y-3">
                {earlyPath.map((item, index) => (
                  <PathCard
                    key={item.stage}
                    item={item}
                    index={index}
                    type="early"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Honest framing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#0263CC]/10 bg-white px-5 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:px-7">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0263CC] to-[#02A7BB]" />

            <div className="flex gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0263CC]/8 text-[#0263CC]">
                <ShieldCheck size={17} />
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0263CC]">
                  Honest framing
                </div>

                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  Starting early can help build genuine familiarity with
                  USMLE's content and question style. This is an example
                  scenario, not a guarantee — USMLE is internationally
                  competitive, and outcomes depend on your preparation,
                  performance and a selection process beyond any coaching
                  provider's control.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <button
            className="
              group flex items-center gap-3
              rounded-full
              bg-[#0263CC]
              px-6 py-3.5
              text-sm font-semibold text-white
              shadow-[0_12px_30px_rgba(2,99,204,0.22)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#0258B5]
              hover:shadow-[0_16px_35px_rgba(2,99,204,0.28)]
            "
          >
            Start Planning My USMLE Pathway

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}