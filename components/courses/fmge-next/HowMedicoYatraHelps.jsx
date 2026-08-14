"use client";

import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Activity,
  RefreshCcw,
  FileCheck2,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Country & University Counselling",
    shortTitle: "Choose With Licensing In Mind",
    description:
      "We factor FMGE outcomes and curriculum alignment into your country and university recommendation from day one — not as an afterthought.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Year 1 Onboarding",
    shortTitle: "Start Early",
    description:
      "Begin structured, FMGE-aligned coaching from your very first year abroad.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Ongoing Progress Tracking",
    shortTitle: "Know Where You Stand",
    description:
      "Regular assessments so we — and you — know exactly where gaps remain, with time to address them.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Final-Year Intensive Support",
    shortTitle: "Build On Your Preparation",
    description:
      "A dedicated revision phase building on years of consistent preparation.",
    icon: RefreshCcw,
  },
  {
    number: "05",
    title: "Post-Graduation Guidance",
    shortTitle: "Move Forward With Clarity",
    description:
      "Support navigating registration formalities once you've cleared the exam.",
    icon: FileCheck2,
  },
];

function StageCard({ stage, index }) {
  const Icon = stage.icon;
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? 35 : -35,
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
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`relative lg:w-[calc(50%-42px)] ${
        isEven ? "lg:ml-auto" : "lg:mr-auto"
      }`}
    >
      <div
        className="
          group relative overflow-hidden rounded-[24px]
          border border-slate-200/80
          bg-white
          p-5 sm:p-6
          shadow-[0_12px_35px_rgba(7,26,73,0.07)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#0263CC]/25
          hover:shadow-[0_20px_45px_rgba(2,99,204,0.12)]
        "
      >
        {/* Top gradient accent */}
        <div
          className="
            absolute left-0 top-0 h-1 w-full
            bg-gradient-to-r from-[#0263CC] to-[#02A7BB]
            opacity-60
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {/* Soft hover glow */}
        <div
          className="
            pointer-events-none absolute -right-12 -top-12
            h-32 w-32 rounded-full
            bg-[#4DA5EC]/10
            blur-3xl
            transition-all duration-500
            group-hover:bg-[#02A7BB]/15
          "
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-[#0263CC] to-[#02A7BB]
                  text-white
                  shadow-[0_8px_20px_rgba(2,99,204,0.18)]
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <Icon size={20} strokeWidth={2} />
              </div>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0263CC]">
                  Stage {stage.number}
                </p>

                <p className="mt-0.5 text-sm font-bold text-[#071A49] sm:text-base">
                  {stage.shortTitle}
                </p>
              </div>
            </div>

            {/* Number */}
            <span className="text-3xl font-black leading-none text-slate-100">
              {stage.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#071A49] sm:text-xl">
            {stage.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {stage.description}
          </p>

          {/* Bottom status */}
          <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
            <CheckCircle2
              size={15}
              className="shrink-0 text-[#02A7BB]"
            />

            <span className="text-[11px] font-semibold text-slate-500">
              Part of your long-term licensing plan
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowMedicoYatraHelps() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] py-20 sm:py-24 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glows */}
        <div className="absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#0263CC]/8 blur-[110px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#02A7BB]/8 blur-[110px]" />

        {/* Subtle dots */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(#0263CC 0.7px, transparent 0.7px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
              <CheckCircle2 size={15} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
              How Medico Yatra Helps
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#071A49] sm:text-4xl lg:text-5xl">
            Your Licensing Plan,{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Built Into
            </span>{" "}
            Your Whole MBBS-Abroad Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            From choosing your university to post-graduation guidance, your
            licensing preparation is treated as part of the journey — not
            something added at the end.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* Desktop center line */}
          <div className="absolute bottom-10 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#0263CC]/10 via-[#0263CC]/50 to-[#02A7BB]/10 lg:block" />

          {/* Animated center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="
              absolute bottom-10 left-1/2 top-0 hidden
              w-[2px]
              origin-top
              -translate-x-1/2
              bg-gradient-to-b
              from-[#0263CC]
              via-[#4DA5EC]
              to-[#02A7BB]
              lg:block
            "
          />

          <div className="space-y-6 lg:space-y-10">
            {stages.map((stage, index) => (
              <div key={stage.number} className="relative">
                <StageCard
                  stage={stage}
                  index={index}
                />

                {/* Desktop timeline node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08 + 0.2,
                  }}
                  className="
                    absolute left-1/2 top-1/2
                    hidden h-[50px] w-[50px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border-[5px]
                    border-[#F7FAFE]
                    bg-gradient-to-br
                    from-[#0263CC]
                    to-[#02A7BB]
                    shadow-[0_8px_25px_rgba(2,99,204,0.25)]
                    lg:flex
                  "
                >
                  <span className="text-[11px] font-extrabold text-white">
                    {stage.number}
                  </span>
                </motion.div>

                {/* Mobile connector */}
                {index < stages.length - 1 && (
                  <div className="ml-[24px] mt-0 h-7 w-px bg-gradient-to-b from-[#0263CC]/50 to-[#02A7BB]/10 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="
            mx-auto mt-14 max-w-3xl
            rounded-[24px]
            border border-[#0263CC]/10
            bg-white
            p-5
            shadow-[0_15px_40px_rgba(7,26,73,0.07)]
            sm:p-6
          "
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/10 text-[#0263CC]">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#071A49] sm:text-base">
                One plan. Continuous support.
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                The goal is simple: make licensing preparation part of your
                MBBS journey from the beginning, rather than a separate
                challenge waiting after graduation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom arrow */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-8 flex justify-center text-[#0263CC]/40"
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}