"use client";

import { motion } from "framer-motion";
import {
  Laptop2,
  CalendarDays,
  Target,
  UserRoundCheck,
  ArrowRight,
} from "lucide-react";

const trustItems = [
  {
    id: 1,
    icon: Laptop2,
    label: "100% online",
    description: "Attend from anywhere",
  },
  {
    id: 2,
    icon: CalendarDays,
    label: "Live classes",
    description: "Aligned to FMGE/NExT pattern",
  },
  {
    id: 3,
    icon: Target,
    label: "Year-by-year",
    description: "Structured curriculum",
  },
  {
    id: 4,
    icon: UserRoundCheck,
    label: "Faculty mentorship",
    description: "For doubt-clearing",
  },
];

export default function FMGETrustStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-5 sm:py-6 lg:py-7">
      
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#0263CC]/5 blur-3xl" />

        <div className="absolute right-[10%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#02A7BB]/5 blur-3xl" />

        <svg
          className="absolute inset-x-0 top-0 h-full w-full opacity-[0.035]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60C180 20 300 100 480 60C660 20 780 20 960 60C1140 100 1260 20 1440 60"
            stroke="#0263CC"
            strokeWidth="1"
          />

          <path
            d="M0 78C180 38 300 118 480 78C660 38 780 38 960 78C1140 118 1260 38 1440 78"
            stroke="#02A7BB"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            DESKTOP TRUST RAIL
        ====================================================== */}

        <div className="hidden lg:block">
          <div className="relative rounded-2xl border border-slate-200/80 bg-[#F8FBFF] px-6 py-5 shadow-[0_8px_35px_rgba(7,26,73,0.06)]">

            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0263CC]/20 to-transparent" />

            <div className="relative grid grid-cols-4">

              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative flex items-center justify-center"
                  >

                    {/* Divider */}
                    {index !== 0 && (
                      <div className="absolute left-0 top-1/2 h-10 -translate-y-1/2 border-l border-slate-200" />
                    )}

                    <div className="flex w-full max-w-[260px] items-center gap-3 px-6">

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 3,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0263CC]/10 bg-white text-[#0263CC] shadow-[0_5px_18px_rgba(2,99,204,0.10)]"
                      >
                        <Icon className="h-5 w-5" />

                        {/* Small accent dot */}
                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#02A7BB]" />
                      </motion.div>

                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-sm font-extrabold leading-tight text-[#071A49]">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[11px] leading-4 text-slate-500">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* =====================================================
            TABLET
        ====================================================== */}

        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-3 lg:hidden">

          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8FBFF] p-4 shadow-[0_6px_22px_rgba(7,26,73,0.05)]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0263CC] shadow-sm ring-1 ring-[#0263CC]/10">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-[#071A49]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            MOBILE — HORIZONTAL SCROLL
        ====================================================== */}

        <div className="sm:hidden">

          <div
            className="
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              pb-2
              scrollbar-none
            "
          >

            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    min-w-[265px]
                    snap-start
                    rounded-2xl
                    border
                    border-slate-200
                    bg-[#F8FBFF]
                    p-4
                    shadow-[0_6px_20px_rgba(7,26,73,0.05)]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0263CC] shadow-sm ring-1 ring-[#0263CC]/10">
                      <Icon className="h-5 w-5" />

                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#F8FBFF] bg-[#02A7BB]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-extrabold leading-tight text-[#071A49]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Mobile scroll hint */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-400">
            <span>Swipe to explore</span>
            <ArrowRight className="h-3 w-3" />
          </div>

        </div>

      </div>
    </section>
  );
}