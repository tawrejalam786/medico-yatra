"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MessageCircleQuestion,
  Route,
  ShieldCheck,
} from "lucide-react";

const approachSteps = [
  {
    number: "01",
    label: "LISTEN",
    title: "Name the real concern.",
    description:
      "We talk openly about time, cost, licensing, and risk — not just glossy brochures.",
    icon: MessageCircleQuestion,
    accent: "blue",
  },
  {
    number: "02",
    label: "CLARIFY",
    title: "Then show a clear, honest path.",
    description:
      "A realistic plan tailored to your goals, marks, finances, and dreams.",
    icon: Route,
    accent: "cyan",
  },
  {
    number: "03",
    label: "EDUCATE",
    title: "Educate first, sell second.",
    description:
      "When you understand the full picture, the right decision becomes yours — not ours.",
    icon: BookOpenCheck,
    accent: "blue",
  },
  {
    number: "04",
    label: "PARTNER",
    title: "Be a partner, not a salesperson.",
    description:
      "We stay beside you from the first question to your first day as a professional.",
    icon: HeartHandshake,
    accent: "cyan",
  },
];

const concerns = [
  "What if my NEET attempt doesn't work out?",
  "Will a foreign degree count back home?",
  "Are we about to be misled?",
];

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#02A7BB]/6 blur-[120px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
                <Compass size={17} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0263CC]">
                Our Approach
              </span>
            </div>

            <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.04em] text-[#09213d] sm:text-[48px] lg:text-[57px]">
              We start with
              <br />
              what you're
              <br />
              <span className="text-[#0263CC]">really feeling.</span>
            </h2>
          </motion.div>

          {/* =====================================================
              INTRO / WORRIES
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-[#f8fbff] p-6 sm:p-7"
          >
            <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-[#0263CC]/5 blur-2xl" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
                Behind every enquiry
              </p>

              <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-[16px] sm:leading-8">
                There is an unspoken worry. We don't ignore those feelings or
                paper over them with hype. We bring them into the conversation
                first.
              </p>

              <div className="mt-6 space-y-2.5">
                {concerns.map((concern, index) => (
                  <motion.div
                    key={concern}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.08,
                      duration: 0.4,
                    }}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-3.5 py-3 shadow-sm"
                  >
                    <MessageCircleQuestion
                      size={15}
                      className="mt-0.5 shrink-0 text-[#0263CC]"
                    />

                    <span className="text-xs font-medium leading-5 text-slate-600">
                      {concern}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            APPROACH JOURNEY
        ======================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">

          {/* Desktop connecting line */}

          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[47px] hidden h-px bg-gradient-to-r from-[#0263CC]/15 via-[#02A7BB]/40 to-[#0263CC]/15 lg:block" />

          {/* Animated line */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[47px] hidden h-[2px] origin-left bg-gradient-to-r from-[#0263CC] via-[#02A7BB] to-[#0263CC] lg:block"
          />

          {/* =====================================================
              STEP GRID
          ====================================================== */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {approachSteps.map((step, index) => (
              <ApproachCard
                key={step.number}
                {...step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            HONESTY PRINCIPLE
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-[28px] bg-[#f1f8ff] sm:mt-16"
        >
          {/* Decorative route */}

          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[40%] lg:block">
            <svg
              viewBox="0 0 500 220"
              className="h-full w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M20 180C120 110 145 180 220 100C290 25 350 125 480 35"
                stroke="#0263CC"
                strokeWidth="1.5"
                strokeDasharray="7 8"
                opacity="0.12"
              />

              <circle
                cx="480"
                cy="35"
                r="5"
                fill="#02A7BB"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10">

            {/* Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0263CC] shadow-sm">
              <ShieldCheck size={24} />
            </div>

            {/* Text */}

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
                Our philosophy
              </p>

              <h3 className="mt-2 max-w-[700px] text-[23px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#09213d] sm:text-[29px]">
                Honesty isn't just our ethic —
                <span className="text-[#0263CC]">
                  {" "}
                  it's our advantage.
                </span>
              </h3>

              <p className="mt-3 max-w-[650px] text-sm leading-6 text-slate-500">
                In an industry full of guarantees, being truthful is the most
                reassuring thing we can offer.
              </p>
            </div>

            {/* Arrow */}

            <div className="hidden lg:flex">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white text-[#0263CC]">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            MOBILE JOURNEY INDICATOR
        ======================================================== */}

        <div className="mt-10 flex items-center justify-center gap-2 lg:hidden">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: index === 0 ? 28 : 10, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.35,
              }}
              className={`h-1.5 rounded-full ${
                index === 0
                  ? "bg-[#0263CC]"
                  : "bg-[#0263CC]/15"
              }`}
            />
          ))}
        </div>

        {/* =======================================================
            FINAL LINE
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <span className="h-px w-8 bg-slate-200" />

          <p className="text-[11px] font-medium text-slate-400">
            Listen first. Explain clearly. Guide honestly.
          </p>

          <span className="h-px w-8 bg-slate-200" />
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   APPROACH CARD
================================================================ */

function ApproachCard({
  number,
  label,
  title,
  description,
  icon: Icon,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group relative"
    >
      {/* Desktop node */}

      <div className="relative z-10 mb-5 hidden justify-center lg:flex">
        <motion.div
          whileHover={{ scale: 1.12 }}
          className="flex h-[94px] w-[94px] items-center justify-center rounded-full border-[7px] border-white bg-[#f5f9fd] shadow-[0_8px_25px_rgba(2,99,204,0.1)]"
        >
          <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white text-[#0263CC] shadow-sm transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
            <Icon size={24} />
          </div>
        </motion.div>
      </div>

      {/* Card */}

      <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(9,33,61,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0263CC]/15 group-hover:shadow-[0_18px_45px_rgba(2,99,204,0.09)] sm:p-6 lg:min-h-[285px]">

        {/* Top accent */}

        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] opacity-70" />

        {/* Mobile icon + number */}

        <div className="mb-5 flex items-center justify-between lg:hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
            <Icon size={19} />
          </div>

          <span className="text-[30px] font-semibold tracking-[-0.05em] text-slate-100">
            {number}
          </span>
        </div>

        {/* Desktop number */}

        <div className="hidden lg:block">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#0263CC]">
            {number}
          </span>
        </div>

        {/* Label */}

        <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
          {label}
        </p>

        {/* Title */}

        <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#09213d]">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-[13px] leading-6 text-slate-500">
          {description}
        </p>

        {/* Bottom indicator */}

        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 sm:left-6 sm:right-6">
          <span className="h-px flex-1 bg-slate-100 transition-all duration-300 group-hover:bg-[#0263CC]/15" />

          <CheckCircle2
            size={14}
            className="text-slate-200 transition-colors duration-300 group-hover:text-[#02A7BB]"
          />
        </div>
      </div>
    </motion.div>
  );
}