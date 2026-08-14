"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Info,
  RefreshCw,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const examCards = [
  {
    id: "fmge",
    label: "CURRENT LICENSING EXAMINATION",
    title: "FMGE",
    fullTitle: "Foreign Medical Graduate Examination",
    icon: FileCheck2,
    accent: "blue",
    description:
      "FMGE is the licensing examination currently administered by NBEMS for Indian citizens who completed their MBBS from a foreign medical institution.",
    points: [
      "Clearing FMGE is mandatory before you can register with the NMC and practise medicine in India.",
      "There is a very small FMGE-exempt list of countries.",
    ],
  },
  {
    id: "next",
    label: "PLANNED REPLACEMENT",
    title: "NExT",
    fullTitle: "National Exit Test",
    icon: GraduationCap,
    accent: "teal",
    description:
      "NExT is a planned replacement for FMGE and the final-year licensing process for Indian medical college graduates, intended to create one unified national standard.",
    points: [
      "Its rollout has been deferred multiple times.",
      "Always verify the current official status through NMC notifications.",
    ],
  },
];

const accentStyles = {
  blue: {
    icon: "bg-[#EAF3FF] text-[#0263CC]",
    badge: "bg-[#EAF3FF] text-[#0263CC]",
    line: "from-[#0263CC] to-[#4DA5EC]",
    glow: "bg-[#0263CC]/10",
  },
  teal: {
    icon: "bg-[#E8FAFB] text-[#02A7BB]",
    badge: "bg-[#E8FAFB] text-[#02A7BB]",
    line: "from-[#02A7BB] to-[#4DA5EC]",
    glow: "bg-[#02A7BB]/10",
  },
};

export default function FMGEUnderstanding() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft radial background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(77,165,236,0.10),transparent_28%),radial-gradient(circle_at_90%_65%,rgba(2,167,187,0.08),transparent_30%)]" />

        {/* Grid */}
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

        {/* Animated blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#0263CC]/8 blur-3xl"
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
          className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#02A7BB]/8 blur-3xl"
        />

        {/* Decorative SVG */}
        <svg
          className="absolute right-[8%] top-16 hidden h-40 w-40 text-[#0263CC]/10 lg:block"
          viewBox="0 0 160 160"
          fill="none"
          aria-hidden="true"
        >
          <motion.circle
            cx="80"
            cy="80"
            r="58"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 7"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "80px 80px" }}
          />

          <motion.circle
            cx="80"
            cy="80"
            r="34"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 6"
            animate={{ rotate: -360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "80px 80px" }}
          />

          <circle cx="80" cy="80" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F5F9FF] px-3 py-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0263CC]">
              <Stethoscope className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0263CC] sm:text-xs">
              Understanding The Licensing Path
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[#071A49] sm:text-4xl lg:text-[46px] lg:tracking-[-1.8px]">
            What Is FMGE, and What Is{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              NExT?
            </span>
          </h2>
        </motion.div>

        {/* =================================================
            VISUAL CONNECTOR
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-7 hidden h-px max-w-[360px] bg-gradient-to-r from-transparent via-[#0263CC]/30 to-transparent sm:block"
        />

        {/* =================================================
            FMGE + NExT CARDS
        ================================================== */}

        <div className="relative mt-10 grid gap-5 lg:grid-cols-2 lg:gap-7">
          {examCards.map((exam, index) => {
            const Icon = exam.icon;
            const style = accentStyles[exam.accent];

            return (
              <motion.article
                key={exam.id}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -25 : 25,
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
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_55px_rgba(15,70,120,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,70,120,0.12)] sm:p-7"
              >
                {/* Card glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${style.glow} blur-3xl transition-transform duration-700 group-hover:scale-125`}
                />

                {/* Top accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${style.line}`}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${style.icon} shadow-sm`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p
                        className={`text-[9px] font-extrabold tracking-[0.16em] ${style.badge.split(" ")[1]} sm:text-[10px]`}
                      >
                        {exam.label}
                      </p>

                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-[#071A49] sm:text-3xl">
                        {exam.title}
                      </h3>
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-4xl font-black text-slate-100">
                    0{index + 1}
                  </span>
                </div>

                {/* Full title */}
                <div className="relative mt-6">
                  <p className="text-sm font-bold text-[#071A49] sm:text-base">
                    {exam.fullTitle}
                  </p>

                  <div
                    className={`mt-3 h-[2px] w-10 bg-gradient-to-r ${style.line} transition-all duration-500 group-hover:w-16`}
                  />
                </div>

                {/* Description */}
                <p className="relative mt-4 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  {exam.description}
                </p>

                {/* Points */}
                <div className="relative mt-5 space-y-3">
                  {exam.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          exam.accent === "blue"
                            ? "text-[#0263CC]"
                            : "text-[#02A7BB]"
                        }`}
                      />

                      <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =================================================
            MOBILE CONNECTOR
        ================================================== */}

        <div className="flex justify-center py-4 lg:hidden">
          <div className="flex flex-col items-center">
            <span className="h-5 w-px bg-gradient-to-b from-[#0263CC]/20 to-[#02A7BB]/40" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white text-[#0263CC] shadow-sm">
              <ArrowDown className="h-3.5 w-3.5" />
            </div>

            <span className="h-5 w-px bg-gradient-to-b from-[#02A7BB]/40 to-transparent" />
          </div>
        </div>

        {/* =================================================
            PRACTICAL MEANING
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative mt-8 overflow-hidden rounded-[26px] border border-[#0263CC]/10 bg-gradient-to-br from-[#F5F9FF] via-white to-[#F0FBFC] p-5 sm:p-7 lg:mt-10 lg:p-8"
        >
          {/* SVG line */}
          <svg
            className="pointer-events-none absolute bottom-0 right-0 h-32 w-64 text-[#0263CC]/10"
            viewBox="0 0 260 130"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 110 C50 80 80 105 125 70 C165 38 190 72 260 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 7"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </svg>

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-7">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#0263CC] shadow-[0_8px_25px_rgba(2,99,204,0.10)] ring-1 ring-[#0263CC]/10">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="max-w-4xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#0263CC] sm:text-xs">
                  What This Means Practically For You
                </span>

                <span className="h-px w-8 bg-[#0263CC]/20" />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7">
                Regardless of the exact exam format in effect when you
                graduate, the underlying requirement is the same —
                demonstrating, through a structured national exam, that your
                medical knowledge meets India&apos;s licensing standard.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            MEDICO YATRA APPROACH
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC]">
            <RefreshCw className="h-4 w-4" />
          </div>

          <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            Medico Yatra&apos;s coaching is designed to prepare you under
            either framework, and we update our curriculum as official
            guidance evolves.
          </p>

          <div className="ml-auto hidden shrink-0 items-center gap-1.5 text-[10px] font-bold text-[#0263CC] sm:flex">
            <Info className="h-3.5 w-3.5" />
            Stay Updated
          </div>
        </motion.div>
      </div>
    </section>
  );
}