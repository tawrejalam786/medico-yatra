"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Stethoscope,
  Plane,
  BookOpen,
} from "lucide-react";

export default function USMLEPathway() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-12">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0263CC]/8 blur-[110px]" />

        {/* Cyan glow */}
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#02A7BB]/10 blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,99,204,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(2,99,204,0.06) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative z-20"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F4F9FF] px-4 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
                <Globe2 size={15} />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
                Keep Your Options Open
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.12] tracking-tight text-[#071A49] sm:text-4xl lg:text-[46px]">
              Aiming for the{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                USA
              </span>{" "}
              Too?
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB]" />

            <h3 className="mt-6 max-w-xl text-xl font-bold leading-snug text-[#071A49] sm:text-2xl">
              Build the USMLE Path Alongside FMGE
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              For students who also want to keep US practice ambitions open,
              the USMLE pathway runs in parallel. Medico Yatra offers
              structured, 100% online USMLE guidance you can begin during your
              MBBS — so you&apos;re not choosing between India and the USA
              before you&apos;re ready to decide.
            </p>

            {/* Key points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Globe2,
                  text: "100% online guidance",
                },
                {
                  icon: BookOpen,
                  text: "Start during MBBS",
                },
                {
                  icon: Stethoscope,
                  text: "Structured USMLE pathway",
                },
                {
                  icon: Plane,
                  text: "Keep USA options open",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + index * 0.07,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0263CC]/8 text-[#0263CC]">
                      <Icon size={15} />
                    </span>

                    <span className="text-sm font-semibold text-[#071A49]">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="/courses/usmle"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                group mt-8 inline-flex items-center gap-3
                rounded-xl
                bg-[#0263CC]
                px-5 py-3.5
                text-sm font-bold text-white
                shadow-[0_12px_28px_rgba(2,99,204,0.22)]
                transition-all duration-300
                hover:bg-[#0759B5]
                hover:shadow-[0_16px_35px_rgba(2,99,204,0.28)]
              "
            >
              Learn About USMLE Coaching

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </motion.a>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            {/* Decorative background circle */}
            <div className="absolute right-0 top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0263CC]/10 to-[#02A7BB]/10 blur-2xl sm:h-[470px] sm:w-[470px]" />

            {/* Main visual frame */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                border border-white
                bg-gradient-to-br from-[#EAF5FF] via-white to-[#E9FBFC]
                p-4
                shadow-[0_25px_70px_rgba(7,26,73,0.12)]
                sm:p-6
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/images/fmge/usmle-pathway.png"
                  alt="Student preparing for USMLE pathway alongside MBBS"
                  width={900}
                  height={650}
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A49]/25 via-transparent to-transparent" />
              </div>

              {/* Bottom pathway bar */}
              <div className="relative z-10 -mt-5 mx-2 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_15px_35px_rgba(7,26,73,0.12)] backdrop-blur sm:mx-5 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  {/* MBBS */}
                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
                      <Stethoscope size={16} />
                    </div>

                    <p className="mt-1.5 text-[10px] font-bold text-[#071A49] sm:text-xs">
                      MBBS
                    </p>
                  </div>

                  {/* Line */}
                  <div className="h-px flex-1 bg-gradient-to-r from-[#0263CC] to-[#02A7BB]" />

                  {/* USMLE */}
                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#02A7BB]/10 text-[#02A7BB]">
                      <BookOpen size={16} />
                    </div>

                    <p className="mt-1.5 text-[10px] font-bold text-[#071A49] sm:text-xs">
                      USMLE
                    </p>
                  </div>

                  {/* Line */}
                  <div className="h-px flex-1 bg-gradient-to-r from-[#02A7BB] to-[#0263CC]" />

                  {/* USA */}
                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
                      <Globe2 size={16} />
                    </div>

                    <p className="mt-1.5 text-[10px] font-bold text-[#071A49] sm:text-xs">
                      USA Path
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CARD
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-3
                top-8
                z-20
                hidden
                rounded-2xl
                border border-white
                bg-white/95
                p-3
                shadow-[0_15px_35px_rgba(7,26,73,0.14)]
                backdrop-blur
                sm:block
                lg:-left-8
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#02A7BB]/10 text-[#02A7BB]">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#071A49]">
                    Keep Options Open
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    India + USA pathway
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small USA badge */}
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-3
                right-4
                z-20
                rounded-2xl
                border border-white
                bg-[#071A49]
                px-4
                py-3
                shadow-[0_15px_35px_rgba(7,26,73,0.20)]
                sm:right-8
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                  <Globe2 size={15} />
                </div>

                <div>
                  <p className="text-[10px] font-medium text-white/60">
                    Career Path
                  </p>

                  <p className="text-xs font-bold text-white">
                    USA Ambitions
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}