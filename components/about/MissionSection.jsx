"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function MissionSection() {
  return (
    <section
      id="our-mission"
      className="relative overflow-hidden bg-[#061c34] py-10 text-white sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Large ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-[-100px] h-[450px] w-[450px] rounded-full bg-[#0263CC]/25 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#02A7BB]/20 blur-[140px]" />

      {/* Subtle radial pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* =========================================================
          DECORATIVE ORBIT
      ========================================================== */}

      <div className="pointer-events-none absolute right-[-130px] top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-white/8"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[65px] rounded-full border border-dashed border-[#02A7BB]/20"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[135px] rounded-full border border-white/6"
        />

        {/* Orbit points */}
        <div className="absolute left-[18%] top-[14%] h-3 w-3 rounded-full bg-[#02A7BB] shadow-[0_0_25px_rgba(2,167,187,0.8)]" />

        <div className="absolute right-[12%] top-[44%] h-2 w-2 rounded-full bg-white/70" />

        <div className="absolute bottom-[18%] left-[38%] h-2.5 w-2.5 rounded-full bg-[#4DA5EC] shadow-[0_0_20px_rgba(77,165,236,0.8)]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            TOP LABEL
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Compass size={16} className="text-[#7de3ea]" />
          </span>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7de3ea]">
              Our Mission
            </p>

            <p className="mt-0.5 text-xs text-white/40">
              Why we exist
            </p>
          </div>
        </motion.div>

        {/* =======================================================
            MAIN MISSION
        ======================================================== */}

        <div className="relative mt-12 max-w-[1000px] lg:mt-10">

          {/* Opening quote */}
          

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-[28px] font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[25px]"
          >
            To guide future healthcare
            <span className="text-[#69dce5]"> professionals</span>
            <br className="hidden md:block" />
            beyond borders —
            <br className="hidden md:block" />
            and empower them to build
            <span className="text-[#69dce5]"> ethical careers</span>
            worldwide.
          </motion.h2>
        </div>

        {/* =======================================================
            DIVIDER
        ======================================================== */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 h-px origin-left bg-gradient-to-r from-white/15 via-white/8 to-transparent lg:mt-16"
        />

        {/* =======================================================
            BOTTOM CONTENT
        ======================================================== */}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">

          {/* LEFT — SUCCESS DEFINITION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7de3ea]">
              What success means to us
            </p>

            <p className="mt-4 max-w-[650px] text-[16px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
              We measure success not by seats sold, but by students who are
              well-advised, well-prepared, and confident about their path —
              and by parents who feel informed and respected throughout.
            </p>

            <a
              href="#what-makes-us-different"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-[#69dce5]">
                See what makes us different
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#69dce5]/40 group-hover:bg-[#69dce5]/10">
                <ArrowDownRight size={15} />
              </span>
            </a>
          </motion.div>

          {/* RIGHT — VALUES */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">

            <MissionValue
              icon={<ShieldCheck size={17} />}
              title="Well-advised"
              text="Understand the full picture before deciding."
              delay={0.1}
            />

            <MissionValue
              icon={<Sparkles size={17} />}
              title="Well-prepared"
              text="Know what the journey actually requires."
              delay={0.2}
            />

            <MissionValue
              icon={<Heart size={17} />}
              title="Respected"
              text="Parents and students stay part of the conversation."
              delay={0.3}
            />
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 overflow-hidden rounded-[24px] border border-white/8 bg-white p-5 backdrop-blur-sm sm:mt-16 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#02A7BB]/10 text-blue-500">
                <Compass size={16} />
              </div>

              <div>
                <p className="text-sm font-semibold text-black">
                  Beyond the admission.
                </p>

                <p className="mt-1 text-xs leading-5 text-blue-500">
                  The mission continues through the healthcare journey.
                </p>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-white/8 sm:mx-8 sm:block" />

            <p className="text-xs font-medium  text-blue-500">
              Healthcare careers. Honest guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   MISSION VALUE
================================================================ */

function MissionValue({ icon, title, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="group rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#02A7BB]/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/15 text-[#69dce5] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-white/40">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}