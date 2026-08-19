"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  CalendarDays,
  Layers3,
  UserRoundCheck,
  ArrowUpRight,
} from "lucide-react";

const trustItems = [
  {
    number: "01",
    icon: Laptop,
    title: "100% Online",
    description: "Attend from anywhere in the world",
    accent: "Global access",
    color: "#0263CC",
    soft: "#EFF6FF",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Step-Aligned Classes",
    description: "Structured around Step 1, Step 2 CK & Step 3",
    accent: "Live + structured",
    color: "#7C3AED",
    soft: "#F5F3FF",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Curriculum Bridging",
    description: "Designed for non-US-modelled MBBS programmes",
    accent: "Built for MBBS abroad",
    color: "#02A7BB",
    soft: "#ECFEFF",
  },
  {
    number: "04",
    icon: UserRoundCheck,
    title: "ECFMG & Match Basics",
    description: "Mentorship as your US pathway develops",
    accent: "Beyond exam prep",
    color: "#EA580C",
    soft: "#FFF7ED",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-[#02A7BB]/5 blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0263CC]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0263CC]">
                Built Around Your Journey
              </span>
            </div>

            <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-[#071C2C] sm:text-3xl">
              More than coaching.
              <span className="text-[#0263CC]">
                {" "}
                A USMLE-ready structure.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500 lg:text-right">
            Designed specifically for students balancing an MBBS-abroad
            degree with long-term US practice ambitions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div
                  className="
                    relative h-full overflow-hidden rounded-[22px]
                    border border-slate-200
                    bg-white
                    p-5
                    shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]
                  "
                  style={{
                    "--card-color": item.color,
                    "--card-soft": item.soft,
                  }}
                >
                  {/* Hover background */}
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    "
                    style={{
                      background: `linear-gradient(
                        145deg,
                        ${item.soft} 0%,
                        #ffffff 55%,
                        #ffffff 100%
                      )`,
                    }}
                  />

                  {/* Top colored corner glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-10 -top-10
                      h-28 w-28 rounded-full
                      opacity-0 blur-2xl
                      transition-opacity duration-500
                      group-hover:opacity-70
                    "
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">

                    {/* Top row */}
                    <div className="flex items-center justify-between">

                      {/* Icon */}
                      <div
                        className="
                          flex h-12 w-12 items-center justify-center
                          rounded-[15px]
                          transition-all duration-500
                          group-hover:scale-105
                          group-hover:shadow-lg
                        "
                        style={{
                          backgroundColor: item.soft,
                          color: item.color,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      {/* Number */}
                      <span
                        className="
                          rounded-full px-2.5 py-1
                          text-[9px] font-bold
                          tracking-[0.15em]
                          transition-all duration-500
                        "
                        style={{
                          backgroundColor: item.soft,
                          color: item.color,
                        }}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* Accent */}
                    <div
                      className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: item.color,
                      }}
                    >
                      {item.accent}
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-[17px] font-semibold text-[#071C2C]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 min-h-[42px] text-[13px] leading-5 text-slate-500">
                      {item.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-slate-400">
                        Medico Yatra
                      </span>

                      <div
                        className="
                          flex h-7 w-7 items-center justify-center
                          rounded-full
                          transition-all duration-500
                        "
                        style={{
                          backgroundColor: item.soft,
                          color: item.color,
                        }}
                      >
                        <ArrowUpRight
                          size={14}
                          className="
                            transition-transform duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom animated line */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[3px] w-0
                      transition-all duration-500
                      group-hover:w-full
                    "
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

          <span className="text-[11px] text-slate-400">
            Designed for students studying MBBS abroad
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

          <span className="text-[11px] text-slate-400">
            From pre-clinical years onward
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />
        </motion.div>
      </div>
    </section>
  );
}