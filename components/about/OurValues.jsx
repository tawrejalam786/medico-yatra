"use client";

import { motion } from "framer-motion";
import {
  Check,
  Eye,
  Heart,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Honesty",
    description: "No false promises. Ever.",
    icon: ShieldCheck,
    position: "left",
  },
  {
    number: "02",
    title: "Transparency",
    description: "Clear costs, clear risks, clear timelines.",
    icon: Eye,
    position: "right",
  },
  {
    number: "03",
    title: "Student-first",
    description: "The right fit for you, not the easiest sale for us.",
    icon: Heart,
    position: "left",
  },
  {
    number: "04",
    title: "Parents as partners",
    description: "You're part of every important conversation.",
    icon: Users,
    position: "right",
  },
  {
    number: "05",
    title: "Compliance",
    description:
      "NMC-recognised universities; we encourage you to verify regulations.",
    icon: Scale,
    position: "left",
  },
  {
    number: "06",
    title: "Continuity",
    description:
      "We're with you through licensing and career, not just admission.",
    icon: Check,
    position: "right",
  },
];

export default function OurValues() {
  return (
    <section
      id="our-values"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#02A7BB]/6 blur-[120px]" />

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
          className="mx-auto max-w-[760px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0263CC]/30" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0263CC]">
              Our Values
            </span>

            <span className="h-px w-8 bg-[#0263CC]/30" />
          </div>

          <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.04em] text-[#09213d] sm:text-[50px] lg:text-[61px]">
            The principles behind
            <br />
            <span className="text-[#0263CC]">every decision we make.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            These aren't words on a wall. They're the standards we use when
            helping a student choose what comes next.
          </p>
        </motion.div>

        {/* =======================================================
            DESKTOP VALUE CONSTELLATION
        ======================================================== */}

        <div className="relative mx-auto mt-16 hidden min-h-[700px] max-w-[1160px] lg:mt-20 lg:block">

          {/* Central rings */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-full border border-[#0263CC]/10" />

            <div className="absolute inset-[35px] rounded-full border border-dashed border-[#02A7BB]/15" />

            <div className="absolute inset-[72px] rounded-full bg-[#f5faff]" />

            <div className="absolute inset-[105px] rounded-full bg-white shadow-[0_20px_60px_rgba(2,99,204,0.10)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#0263CC]/8 text-[#0263CC]">
                <ShieldCheck size={20} />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0263CC]">
                Our North Star
              </span>

              <p className="mt-2 max-w-[120px] text-[17px] font-semibold leading-5 tracking-[-0.02em] text-[#09213d]">
                Trust before transaction.
              </p>
            </div>
          </motion.div>

          {/* Connecting orbit */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0263CC]/5"
          />

          {/* Value cards */}

          {values.map((value, index) => (
            <DesktopValue
              key={value.number}
              {...value}
              index={index}
            />
          ))}
        </div>

        {/* =======================================================
            MOBILE / TABLET VALUES
        ======================================================== */}

        <div className="relative mt-14 lg:hidden">

          {/* vertical spine */}

          <div className="absolute bottom-6 left-[20px] top-6 w-px bg-gradient-to-b from-[#0263CC]/20 via-[#02A7BB]/20 to-transparent" />

          <div className="space-y-4">
            {values.map((value, index) => (
              <MobileValue
                key={value.number}
                {...value}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM PRINCIPLE
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-[760px] text-center sm:mt-16"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-[#02A7BB]" />

          <p className="text-[14px] font-medium leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
            When these six principles come together, guidance becomes more
            than counselling — it becomes a relationship built to last.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   DESKTOP VALUE
================================================================ */

function DesktopValue({
  number,
  title,
  description,
  icon: Icon,
  position,
  index,
}) {
  const positions = {
    0: "left-[0%] top-[4%]",
    1: "right-[0%] top-[4%]",
    2: "left-[0%] bottom-[8%]",
    3: "right-[0%] bottom-[8%]",
    4: "left-[17%] top-[42%]",
    5: "right-[17%] top-[42%]",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: position === "left" ? -25 : 25,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`absolute ${positions[index]} w-[285px]`}
    >
      {/* connector dot */}

      <div
        className={`absolute top-[38px] h-px w-[80px] bg-gradient-to-r ${
          position === "left"
            ? "right-[-80px] from-[#0263CC]/20 to-transparent"
            : "left-[-80px] from-transparent to-[#0263CC]/20"
        }`}
      />

      <div className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_35px_rgba(9,33,61,0.045)] transition-all duration-400 hover:-translate-y-1 hover:border-[#0263CC]/20 hover:shadow-[0_20px_45px_rgba(2,99,204,0.09)]">
        
        {/* hover glow */}

        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#02A7BB]/8 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/7 text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
            <Icon size={18} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#02A7BB]">
                {number}
              </span>

              <span className="h-px w-3 bg-slate-200" />
            </div>

            <h3 className="mt-1 text-[16px] font-semibold text-[#09213d]">
              {title}
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-slate-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   MOBILE VALUE
================================================================ */

function MobileValue({
  number,
  title,
  description,
  icon: Icon,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="relative pl-12"
    >
      {/* node */}

      <div className="absolute left-0 top-5 flex h-[41px] w-[41px] items-center justify-center rounded-full border-[4px] border-white bg-[#0263CC]/8 text-[#0263CC] shadow-sm">
        <Icon size={16} />
      </div>

      {/* card */}

      <div className="group rounded-[21px] border border-slate-200 bg-white p-4 shadow-[0_8px_25px_rgba(9,33,61,0.04)] transition-all duration-300 active:scale-[0.99] sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[9px] font-bold tracking-[0.18em] text-[#02A7BB]">
              {number}
            </span>

            <h3 className="mt-1 text-[17px] font-semibold tracking-[-0.02em] text-[#09213d]">
              {title}
            </h3>

            <p className="mt-1.5 text-[13px] leading-5 text-slate-500">
              {description}
            </p>
          </div>

          <div className="mt-1 shrink-0 text-slate-200 transition-colors group-hover:text-[#0263CC]/20">
            <Check size={17} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}