"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Ear,
  Lightbulb,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We listen first.",
    description:
      "A counsellor understands your goals, marks, budget and questions — no script, no pressure.",
    icon: Ear,

    // Dark premium blue
    bg: "bg-[#0757A5]",
    hoverBg: "group-hover:bg-[#064D94]",
    iconBg: "bg-white/10",
    accent: "text-[#9BD7FF]",
  },
  {
    number: "02",
    title: "We share an honest plan.",
    description:
      "Suitable courses, countries and a realistic licensing pathway — including the risks.",
    icon: Lightbulb,

    // Dark brand teal
    bg: "bg-[#087F8C]",
    hoverBg: "group-hover:bg-[#07747F]",
    iconBg: "bg-white/10",
    accent: "text-[#9EF1E8]",
  },
  {
    number: "03",
    title: "You decide, in your own time.",
    description:
      "No badgering. We're here when you're ready.",
    icon: UserRoundCheck,

    // Dark maroon
    bg: "bg-[#6B2638]",
    hoverBg: "group-hover:bg-[#5D2031]",
    iconBg: "bg-white/10",
    accent: "text-[#FFC1CF]",
  },
];

const WhatHappensNext = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFD] py-10 sm:py-10 lg:py-10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#0263CC]/8 blur-[120px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#02A7BB]/7 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0263CC] sm:text-sm">
              No surprises
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-[#092B4C] sm:text-4xl lg:text-[48px] lg:leading-[1.1]">
            What happens{" "}
            <span className="text-[#0263CC]">
              after you reach out?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            A simple, human process. You get clarity without feeling pressured
            to make a decision.
          </p>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}
        <div className="relative mt-12 sm:mt-14 lg:mt-16">

          {/* Desktop connecting line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[50px]
              hidden
              h-px
              bg-gradient-to-r
              from-[#0263CC]/30
              via-[#02A7BB]/30
              to-[#6B2638]/30
              lg:block
            "
          />

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Glow behind card */}
                  <div
                    className="
                      absolute
                      -inset-1
                      rounded-[30px]
                      opacity-0
                      blur-xl
                      transition-all
                      duration-500
                      group-hover:opacity-30
                    "
                    style={{
                      background:
                        index === 0
                          ? "#0263CC"
                          : index === 1
                          ? "#02A7BB"
                          : "#6B2638",
                    }}
                  />

                  {/* =================================================
                      FULL DARK CARD
                  ================================================= */}
                  <div
                    className={`
                      relative
                      min-h-[350px]
                      overflow-hidden
                      rounded-[30px]
                      ${step.bg}
                      ${step.hoverBg}
                      p-6
                      text-white
                      shadow-[0_20px_45px_rgba(15,23,42,0.16)]
                      transition-all
                      duration-500
                      group-hover:shadow-[0_28px_65px_rgba(15,23,42,0.24)]
                      sm:p-7
                      lg:min-h-[370px]
                      lg:p-8
                    `}
                  >

                    {/* Large circle decoration */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        border
                        border-white/10
                        transition-transform
                        duration-700
                        group-hover:scale-125
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-white/[0.04]
                      "
                    />

                    {/* Bottom glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-24
                        -left-16
                        h-44
                        w-44
                        rounded-full
                        bg-white/[0.06]
                        blur-2xl
                        transition-transform
                        duration-700
                        group-hover:scale-125
                      "
                    />

                    {/* =================================================
                        TOP
                    ================================================= */}
                    <div className="relative flex items-center justify-between">

                      <div>
                        <p
                          className={`
                            text-[11px]
                            font-extrabold
                            tracking-[0.2em]
                            ${step.accent}
                          `}
                        >
                          STEP {step.number}
                        </p>
                      </div>

                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          ${step.iconBg}
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-[-5deg]
                        `}
                      >
                        <Icon
                          size={25}
                          strokeWidth={1.8}
                          className={step.accent}
                        />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}
                    <div className="relative mt-8">

                      <h3 className="max-w-sm text-[24px] font-extrabold leading-[1.2] tracking-tight sm:text-[27px]">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                        {step.description}
                      </p>
                    </div>

                    {/* =================================================
                        BOTTOM
                    ================================================= */}
                    <div className="absolute bottom-7 left-6 right-6 sm:left-7 sm:right-7 lg:left-8 lg:right-8">

                      <div className="mb-5 h-px bg-white/10" />

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-8 rounded-full bg-white/70 transition-all duration-500 group-hover:w-12`}
                          />

                          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />

                          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                        </div>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop arrow */}
                  {index < steps.length - 1 && (
                    <div
                      className="
                        absolute
                        -right-[21px]
                        top-[30px]
                        z-30
                        hidden
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        shadow-md
                        lg:flex
                      "
                    >
                      <ArrowRight
                        size={15}
                        className="text-slate-400"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HONEST PROMISE
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            relative
            mx-auto
            mt-8
            max-w-4xl
            overflow-hidden
            rounded-[24px]
            bg-[#092B4C]
            p-5
            text-white
            shadow-[0_18px_45px_rgba(9,43,76,0.15)]
            sm:mt-10
            sm:p-6
          "
        >
          <div className="absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#02A7BB]/15 blur-2xl" />

          <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Check
                size={21}
                className="text-[#8EDFFF]"
                strokeWidth={2.5}
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-extrabold sm:text-base">
                Honest promise
              </p>

              <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
                We'd rather give you the right advice than a hard sell. That's
                the Medico Yatra way.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold text-white/60 sm:block">
              No pressure
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatHappensNext;