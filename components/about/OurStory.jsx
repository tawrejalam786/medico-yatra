"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  Route,
} from "lucide-react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white py-10 sm:py-24 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#4DA5EC]/8 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[420px] w-[420px] rounded-full bg-[#02A7BB]/7 blur-[120px]" />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center lg:mb-20 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
        >
          <div className="mb-5 flex justify-center items-center gap-3">
            <span className="h-px w-8 bg-[#02A7BB]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              Our Story
            </span>
          </div>

          <h2 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#09213d] sm:text-[48px] lg:text-[28px]">
            Guiding future healthcare
            <span className="text-[#0263CC]"> professionals,</span>
            <br className="hidden sm:block" />
            beyond borders.
          </h2>

          <p className="mt-6 text-[16px] w-full leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            Becoming a healthcare professional is one of the biggest decisions a
            family makes — and one of the most confusing.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN STORY LAYOUT
        ======================================================== */}

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =====================================================
              LEFT — IMAGE / VISUAL STORY
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#eaf4ff] p-2 shadow-[0_25px_70px_rgba(9,33,61,0.1)] sm:rounded-[38px]">
              <div className="relative aspect-[0.88] overflow-hidden rounded-[25px] sm:rounded-[32px]">
                <Image
                  src="/images/about/about-story.png"
                  alt="Medico Yatra guiding students and families"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061c34]/70 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="rounded-[20px] border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                        <HeartHandshake size={19} />
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9de9ef]">
                          A different kind of guidance
                        </p>

                        <p className="mt-1 text-sm font-medium leading-5 text-white sm:text-[15px]">
                          Your future deserves more than a sales pitch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating journey badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-[12%] hidden rounded-2xl border border-white bg-white p-3.5 shadow-[0_18px_45px_rgba(9,33,61,0.13)] sm:block lg:-right-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
                  <Route size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Our belief
                  </p>

                  <p className="text-xs font-bold text-[#09213d]">
                    Guide the whole journey
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-28 w-28 rounded-full border border-[#0263CC]/10 lg:block" />

            <div className="pointer-events-none absolute -bottom-2 -left-2 hidden h-3 w-3 rounded-full bg-[#02A7BB] lg:block" />
          </motion.div>

          {/* =====================================================
              RIGHT — STORY
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative"
          >
            <div className="space-y-5 sm:space-y-6">
              <StoryBlock
                number="01"
                color="blue"
              >
                <p>
                  Becoming a healthcare professional comes with pressure,
                  uncertainty and a flood of information. Families worry about
                  wasted years, the right country, the right university and
                  whether the decision will actually lead somewhere.
                </p>
              </StoryBlock>

              <StoryBlock
                number="02"
                color="teal"
              >
                <p>
                  Medico Yatra began with a simple belief:
                  <strong className="font-semibold">
                    {" "}
                    students deserve honest guidance, not sales pitches.
                  </strong>
                </p>
              </StoryBlock>

              <StoryBlock
                number="03"
                color="purple"
              >
                <p>
                  We started by helping aspiring doctors pursue medical
                  education abroad. But we realised that a student's ambition
                  should not be limited by whichever course an agent finds
                  easiest to sell.
                </p>
              </StoryBlock>

              <StoryBlock
                number="04"
                color="orange"
              >
                <p>
                  Today, our focus extends across the healthcare-career
                  spectrum — helping students and parents think through the
                  course, country, university, documentation, admission, visa,
                  settling in and licensing journey.
                </p>
              </StoryBlock>
            </div>

            {/* ===================================================
                HIGHLIGHTED BRAND STATEMENT
            ==================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mt-12 overflow-hidden rounded-[26px] bg-[#09213d] p-6 text-white shadow-[0_25px_55px_rgba(9,33,61,0.16)] sm:mt-14 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0263CC]/30 blur-[60px]" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Compass size={18} className="text-[#7de3ea]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7de3ea]">
                    Why Yatra
                  </span>
                </div>

                <blockquote className="max-w-[650px] text-[25px] font-medium leading-[1.25] tracking-[-0.025em] sm:text-[31px]">
                  “Yatra means journey. We're here for the whole one.”
                </blockquote>

                <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                  <span className="h-px w-7 bg-white/30" />
                  From the first question to the road ahead
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                JOURNEY TAGS
            ==================================================== */}

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "Course",
                "Country",
                "University",
                "Admission",
                "Licensing",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.35,
                  }}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm"
                >
                  <Check size={13} className="text-[#02A7BB]" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM MICRO CTA
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-slate-100 pt-3 sm:mt-5 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-[#09213d]">
              A healthcare decision is bigger than an offer letter.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              We believe the guidance should be bigger too.
            </p>
          </div>

          <a
            href="#our-mission"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0263CC]"
          >
            Continue our story

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   STORY BLOCK
================================================================ */

function StoryBlock({ number, children, color }) {
  const colors = {
    blue: {
      bg: "bg-[#EEF6FF]",
      border: "border-[#0263CC]/15",
      numberBg: "bg-[#0263CC]/10",
      numberText: "text-[#0263CC]",
      chapter: "text-[#0263CC]",
      text: "text-[#34506E]",
      dot: "bg-[#0263CC]",
      shadow: "shadow-[0_12px_30px_rgba(2,99,204,0.08)]",
    },

    teal: {
      bg: "bg-[#EAFBFA]",
      border: "border-[#009E9A]/15",
      numberBg: "bg-[#009E9A]/10",
      numberText: "text-[#009E9A]",
      chapter: "text-[#009E9A]",
      text: "text-[#365D5B]",
      dot: "bg-[#009E9A]",
      shadow: "shadow-[0_12px_30px_rgba(0,158,154,0.08)]",
    },

    purple: {
      bg: "bg-[#F3F0FF]",
      border: "border-[#5B4FE9]/15",
      numberBg: "bg-[#5B4FE9]/10",
      numberText: "text-[#5B4FE9]",
      chapter: "text-[#5B4FE9]",
      text: "text-[#4F4A78]",
      dot: "bg-[#5B4FE9]",
      shadow: "shadow-[0_12px_30px_rgba(91,79,233,0.08)]",
    },

    orange: {
      bg: "bg-[#FFF3EA]",
      border: "border-[#F97316]/15",
      numberBg: "bg-[#F97316]/10",
      numberText: "text-[#F97316]",
      chapter: "text-[#F97316]",
      text: "text-[#70513E]",
      dot: "bg-[#F97316]",
      shadow: "shadow-[0_12px_30px_rgba(249,115,22,0.08)]",
    },
  };

  const current = colors[color] || colors.blue;

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[22px]
        border
        p-5
        transition-all
        duration-300

        ${current.bg}
        ${current.border}
        ${current.shadow}

        sm:p-6
      `}
    >
      {/* Soft decorative glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          ${current.numberBg}
          blur-2xl
        `}
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Number */}
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-[11px]
            font-extrabold

            ${current.numberBg}
            ${current.numberText}
          `}
        >
          {number}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <div
            className={`
              mb-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]

              ${current.chapter}
            `}
          >
            Chapter {number}
          </div>

          <div
            className={`
              text-[15px]
              leading-7

              ${current.text}

              sm:text-[16px]
              sm:leading-8
            `}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          ${current.dot}
          opacity-40
        `}
      />
    </motion.div>
  );
}