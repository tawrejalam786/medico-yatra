"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Clock3,
  FileQuestion,
  UsersRound,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: BookOpenCheck,
    title: "The Curriculum Gap",
    description:
      "University coursework may not align fully with FMGE subject weightage and clinical emphasis, leaving gaps students may not realise.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Starting Too Late",
    description:
      "Waiting until the final year can mean relearning early subjects under pressure instead of building preparation gradually.",
  },
  {
    number: "03",
    icon: FileQuestion,
    title: "Limited FMGE Exposure",
    description:
      "FMGE has its own question style and difficulty level. Without regular timed practice, the format can feel unfamiliar.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "No Structured Cohort",
    description:
      "Studying abroad can create distance from India's FMGE ecosystem, making it easier to fall behind without structured support.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Variable Pass Rates",
    description:
      "FMGE outcomes vary by destination and university — another reason early, structured preparation matters.",
  },
];

export default function WhyStudentsStruggle() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(2,99,204,0.07),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(2,167,187,0.06),transparent_30%)]" />

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

        {/* Decorative circles */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-[#0263CC]/5 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#02A7BB]/5 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F3F8FF] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0263CC] sm:text-xs">
              Know The Challenge
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-extrabold leading-tight tracking-[-1.2px] text-[#071A49] sm:text-4xl lg:text-[35px]"
          >
            The Honest Part —
            <span className="block">
              Why FMGE Catches Many Students{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                Off Guard
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base"
          >
            Understanding these common challenges is the first step toward
            building a more structured FMGE preparation journey.
          </motion.p>
        </div>

        {/* =====================================================
            REASON CARDS
        ====================================================== */}
        <div className="relative mt-12">
          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[#0263CC]/15 to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`
                    group relative overflow-hidden rounded-2xl border
                    bg-white/90 p-5
                    shadow-[0_12px_35px_rgba(7,26,73,0.06)]
                    backdrop-blur
                    transition-shadow duration-300
                    hover:shadow-[0_20px_45px_rgba(2,99,204,0.12)]
                    ${
                      index === 4
                        ? "border-[#0263CC]/20 sm:col-span-2 lg:col-span-2"
                        : "border-slate-200/80 sm:col-span-1 lg:col-span-2"
                    }
                  `}
                >
                  {/* Top glow */}
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#0263CC]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#0263CC]/50">
                      {reason.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F6FF] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative mt-5">
                    <h3 className="text-base font-extrabold text-[#071A49] sm:text-[17px]">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-slate-500 sm:text-[13px]">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="relative mt-5 flex items-center gap-2">
                    <span className="h-1 w-7 rounded-full bg-[#0263CC]/20 transition-all duration-300 group-hover:w-11 group-hover:bg-[#0263CC]" />

                    <ArrowUpRight className="h-3.5 w-3.5 text-[#0263CC]/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0263CC]" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM HONEST MESSAGE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-[#0263CC]/10 bg-[#F7FAFF] px-4 py-4 sm:items-center sm:px-5"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#0263CC] shadow-sm">
            <BarChart3 className="h-4 w-4" />
          </div>

          <p className="text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-5">
            <span className="font-bold text-[#071A49]">
              The key takeaway:
            </span>{" "}
            Early, structured and consistent preparation can help students
            understand the FMGE pattern before the pressure of graduation
            arrives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}