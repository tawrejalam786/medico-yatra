"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleAlert,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const differences = [
  {
    typical: "Ends at the offer letter",
    medico: "Stays through licensing & career guidance",
    icon: GraduationCap,
  },
  {
    typical: "Pushes whatever is easiest to sell",
    medico: "Matches the right course & country to you",
    icon: UserRound,
  },
  {
    typical: "Promises guarantees",
    medico: "Tells you the honest truth — risks included",
    icon: ShieldCheck,
  },
  {
    typical: "Focuses on MBBS only",
    medico: "Guides many healthcare careers + allied health",
    icon: HeartHandshake,
  },
  {
    typical: "Talks to students only",
    medico: "Treats parents as partners in the decision",
    icon: UserRound,
  },
  {
    typical: '"Trust us"',
    medico: '"Verify with us" — checkable facts',
    icon: ShieldCheck,
  },
];

export default function WhatMakesDifferent() {
  return (
    <section
      id="what-makes-us-different"
      className="relative overflow-hidden bg-[#C8DEF7] py-10 sm:py-24 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* <div className="pointer-events-none absolute top-[15%] h-[420px] w-[420px] rounded-full bg-[#0263CC]/7 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] h-[440px] w-[440px] rounded-full bg-[#02A7BB]/8 blur-[130px]" /> */}

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[820px] text-center"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              What Makes Us Different
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#09213d] sm:text-[48px] lg:text-[60px]">
            A specialist partner.
            <br />
            <span className="text-[#0263CC]">
              Not a general agency.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[690px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            Your healthcare career deserves guidance from people who
            understand that the journey does not end when an admission letter
            arrives.
          </p>
        </motion.div>

        {/* =======================================================
            COMPARISON BOARD
        ======================================================== */}

        <div className="relative mt-14 lg:mt-20">

          {/* =====================================================
              DESKTOP HEADER
          ====================================================== */}

          <div className="mb-4 hidden grid-cols-[1fr_70px_1fr] items-center gap-4 lg:grid">

            {/* Typical */}
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                The usual approach
              </p>

              <h3 className="mt-1 text-lg font-semibold text-slate-600">
                Typical agency
              </h3>
            </div>

            {/* VS */}
            <div className="flex justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-[#f5f9fd] text-[10px] font-bold text-slate-400 shadow-sm">
                VS
              </span>
            </div>

            {/* Medico */}
            <div className="relative overflow-hidden rounded-2xl bg-[#09213d] px-6 py-4 text-white shadow-[0_15px_35px_rgba(9,33,61,0.12)]">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#0263CC]/30 blur-2xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#69dce5]">
                  Our approach
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  Medico Yatra
                </h3>
              </div>
            </div>
          </div>

          {/* =====================================================
              COMPARISON ITEMS
          ====================================================== */}

          <div className="space-y-3">
            {differences.map((item, index) => {
              const Icon = item.icon;

              return (
                <ComparisonRow
                  key={index}
                  {...item}
                  Icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        {/* =======================================================
            MOBILE DIFFERENCE NOTE
        ======================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Left: typical approach
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
            Right: Medico Yatra
          </span>
        </div>

        {/* =======================================================
            HONESTY CALLOUT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[30px] bg-[#0263CC] p-6 shadow-[0_25px_65px_rgba(2,99,204,0.18)] sm:mt-20 sm:p-8 lg:p-10"
        >
          {/* Background decoration */}

          <div className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full border-[35px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 left-[30%] h-60 w-60 rounded-full bg-[#02A7BB]/20 blur-[80px]" />

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">

            {/* Icon */}

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm sm:h-16 sm:w-16">
              <CircleAlert size={25} />
            </div>

            {/* Content */}

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ce9ef]">
                Our guiding principle
              </p>

              <h3 className="mt-2 max-w-[760px] text-[24px] font-semibold leading-[1.2] tracking-[-0.025em] text-white sm:text-[30px] lg:text-[34px]">
                We'd rather lose a sale than make a promise we can't keep.
              </h3>

              <p className="mt-3 max-w-[720px] text-sm leading-6 text-white/65">
                That single principle shapes everything we do.
              </p>
            </div>

            {/* Decorative arrow */}

            <div className="hidden lg:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <ArrowRight size={20} className="text-[#9ce9ef]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM TRUST STRIP
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          <TrustStrip
            icon={<ShieldCheck size={17} />}
            title="No guarantees"
            text="We explain reality, including risks."
          />

          <TrustStrip
            icon={<HeartHandshake size={17} />}
            title="Parents included"
            text="Important decisions are shared."
          />

          <TrustStrip
            icon={<Check size={17} />}
            title="Verify with us"
            text="We encourage checkable facts."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   COMPARISON ROW
================================================================ */

function ComparisonRow({
  typical,
  medico,
  Icon,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="group grid gap-2 lg:grid-cols-[1fr_70px_1fr] lg:items-stretch lg:gap-4"
    >
      {/* =====================================================
          TYPICAL AGENCY
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white px-4 py-4 transition-all duration-300 group-hover:border-slate-300 sm:px-5 sm:py-5 lg:rounded-[22px] lg:px-6">
        <div className="flex items-start gap-3">

          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <X size={14} />
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 lg:hidden">
              Typical agency
            </p>

            <p className="text-sm font-medium leading-6 text-slate-500">
              {typical}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONNECTOR
      ====================================================== */}

      <div className="hidden items-center justify-center lg:flex">
        <div className="relative flex w-full items-center justify-center">
          <span className="absolute left-0 right-0 h-px bg-slate-200" />

          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-[#f5f9fd] text-slate-300">
            <ArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* =====================================================
          MEDICO YATRA
      ====================================================== */}

      <div className="relative overflow-hidden rounded-[20px] border border-[#0263CC]/10 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(2,99,204,0.05)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#0263CC]/20 group-hover:shadow-[0_15px_35px_rgba(2,99,204,0.09)] sm:px-5 sm:py-5 lg:rounded-[22px] lg:px-6">
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#02A7BB]/8 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start gap-3">

          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0263CC]/8 text-[#0263CC]">
            <Icon size={14} />
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0263CC] lg:hidden">
              Medico Yatra
            </p>

            <p className="text-sm font-semibold leading-6 text-[#09213d]">
              {medico}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   TRUST STRIP
================================================================ */

function TrustStrip({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 backdrop-blur-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold text-[#09213d]">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] leading-4 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}