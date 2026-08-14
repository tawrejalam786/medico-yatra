"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Radio,
  PlayCircle,
  CalendarCheck,
  ClipboardCheck,
  UserRoundCheck,
  BookOpen,
  Microscope,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const methodology = [
  {
    icon: Laptop,
    title: "100% Online",
    description:
      "No relocation, no pause in your MBBS. Attend live classes from your university, hostel, or home.",
  },
  {
    icon: Radio,
    title: "Live FMGE / NExT Classes",
    description:
      "Live classes aligned to the FMGE/NExT subject pattern, covering clinical, pre-clinical and para-clinical subjects.",
  },
  {
    icon: PlayCircle,
    title: "Recorded Lectures",
    description:
      "Revise around your university schedule and catch up when clinical placements or time zones affect attendance.",
  },
  {
    icon: CalendarCheck,
    title: "Monthly Tests",
    description:
      "Track subject-by-subject progress and identify gaps early instead of discovering them in your final year.",
  },
  {
    icon: ClipboardCheck,
    title: "FMGE Mock Exams",
    description:
      "Practise with mock exams designed to build familiarity with the real FMGE format before exam day.",
  },
  {
    icon: UserRoundCheck,
    title: "Faculty Mentorship",
    description:
      "Get guidance for doubt-clearing and study planning alongside your university coursework.",
  },
];

const yearRoadmap = [
  {
    year: "01–02",
    label: "Year 1–2",
    title: "Build the Foundation",
    icon: BookOpen,
    tone: "blue",
    focus: "Foundational reinforcement",
    subjects:
      "Anatomy, Physiology, Biochemistry",
    description:
      "Foundational subjects reinforced alongside your university coursework.",
  },
  {
    year: "03–04",
    label: "Year 3–4",
    title: "Integrate & Progress",
    icon: Microscope,
    tone: "cyan",
    focus: "Para-clinical subjects",
    subjects:
      "Pathology, Microbiology, Pharmacology, Forensic Medicine, Community Medicine",
    description:
      "Para-clinical subjects integrated with ongoing revision.",
  },
  {
    year: "05",
    label: "Year 5",
    title: "Go Clinical",
    icon: Stethoscope,
    tone: "green",
    focus: "Clinical subjects",
    subjects:
      "Medicine, Surgery, OBG, Paediatrics",
    description:
      "Heavy clinical focus with regular full-length timed mock tests.",
  },
  {
    year: "06",
    label: "Final Year / Internship",
    title: "Prepare for the Exam",
    icon: GraduationCap,
    tone: "navy",
    focus: "Intensive revision",
    subjects:
      "High-frequency mock testing & exam-day strategy",
    description:
      "Intensive revision, high-frequency mock testing and exam-day strategy sessions.",
  },
];

const toneClasses = {
  blue: {
    number: "bg-[#EAF3FF] text-[#0263CC]",
    icon: "bg-[#0263CC] text-white",
    line: "bg-[#0263CC]",
    border: "border-[#0263CC]/10",
  },
  cyan: {
    number: "bg-[#E8FAFC] text-[#02A7BB]",
    icon: "bg-[#02A7BB] text-white",
    line: "bg-[#02A7BB]",
    border: "border-[#02A7BB]/10",
  },
  green: {
    number: "bg-[#EAF9F1] text-[#15935A]",
    icon: "bg-[#15935A] text-white",
    line: "bg-[#15935A]",
    border: "border-[#15935A]/10",
  },
  navy: {
    number: "bg-[#EDF1F8] text-[#071A49]",
    icon: "bg-[#071A49] text-white",
    line: "bg-[#071A49]",
    border: "border-[#071A49]/10",
  },
};

function MethodologyCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_35px_rgba(7,26,73,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(2,99,204,0.10)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0263CC]/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F6FF] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-extrabold text-[#071A49] sm:text-[15px]">
            {item.title}
          </h3>

          <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:text-xs">
            {item.description}
          </p>
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-2">
        <span className="h-1 w-6 rounded-full bg-[#0263CC]/15 transition-all duration-300 group-hover:w-10 group-hover:bg-[#0263CC]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Built around your MBBS
        </span>
      </div>
    </motion.div>
  );
}

function RoadmapCard({ item, index }) {
  const Icon = item.icon;
  const tone = toneClasses[item.tone];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
      }}
      className="relative"
    >
      {/* Connector */}
      {index !== yearRoadmap.length - 1 && (
        <div className="absolute left-[23px] top-[64px] hidden h-[calc(100%+18px)] w-px bg-gradient-to-b from-[#0263CC]/25 to-slate-200 lg:block" />
      )}

      <div
        className={`relative overflow-hidden rounded-2xl border ${tone.border} bg-white p-4 shadow-[0_10px_30px_rgba(7,26,73,0.045)] sm:p-5`}
      >
        {/* Background number */}
        <span className="pointer-events-none absolute -right-1 -top-5 select-none text-[100px] font-black leading-none text-slate-100/70">
          {index + 1}
        </span>

        <div className="relative flex gap-4">
          {/* Timeline icon */}
          <div className="relative z-10 flex shrink-0 flex-col items-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone.icon} shadow-lg`}
            >
              <Icon className="h-5 w-5" />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.12em] ${tone.number}`}
              >
                {item.label}
              </span>
            </div>

            <h3 className="mt-3 text-base font-extrabold text-[#071A49] sm:text-lg">
              {item.title}
            </h3>

            <div className="mt-3 rounded-xl bg-[#F8FAFD] p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0263CC]">
                {item.focus}
              </p>

              <p className="mt-1 text-xs font-semibold leading-5 text-[#071A49]">
                {item.subjects}
              </p>
            </div>

            <p className="mt-3 text-[11px] leading-5 text-slate-500 sm:text-xs">
              {item.description}
            </p>
          </div>
        </div>

        {/* Check */}
        <div className="relative mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#16A05D]" />

          <span className="text-[10px] font-semibold text-slate-500">
            Structured around your MBBS journey
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurMethodology() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FBFF] py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(2,99,204,0.08),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(2,167,187,0.07),transparent_30%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Animated glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#02A7BB]/5 blur-3xl"
        />

        {/* Decorative SVG route */}
        <svg
          className="absolute right-[8%] top-20 hidden h-48 w-64 text-[#0263CC]/10 lg:block"
          viewBox="0 0 260 180"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M5 145 C55 125 45 50 105 65 C155 78 150 145 250 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="105"
            cy="65"
            r="4"
            fill="currentColor"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
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
              duration: 0.5,
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-3.5 py-1.5 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0263CC] sm:text-xs">
              Our Methodology
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.05,
            }}
            className="text-3xl font-extrabold leading-tight tracking-[-1.2px] text-[#071A49] sm:text-4xl lg:text-[46px]"
          >
            Online From Year 1 —
            <span className="block">
              Built Around Your{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                MBBS-Abroad Schedule
              </span>
            </span>
          </motion.h2>

          <motion.p
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
              duration: 0.5,
              delay: 0.12,
            }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base"
          >
            Structured FMGE/NExT preparation that works alongside your
            university schedule — not against it.
          </motion.p>
        </div>

        {/* =====================================================
            METHODOLOGY FEATURES
        ====================================================== */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodology.map((item, index) => (
            <MethodologyCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            YEAR BY YEAR ROADMAP
        ====================================================== */}
        <div className="mt-16 sm:mt-20">
          {/* Roadmap heading */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-px w-7 bg-[#0263CC]" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0263CC]">
                  Year-by-Year Structure
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.7px] text-[#071A49] sm:text-3xl">
                Your Preparation Roadmap
              </h3>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-3 py-2 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-[#16A05D]" />

              <span className="text-[10px] font-bold text-slate-600 sm:text-xs">
                Structured from Year 1
              </span>
            </div>
          </div>

          {/* Roadmap */}
          <div className="grid gap-4 lg:grid-cols-2">
            {yearRoadmap.map((item, index) => (
              <RoadmapCard
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#0263CC]/10 bg-white p-5 text-center shadow-[0_15px_40px_rgba(7,26,73,0.06)] sm:p-6"
        >
          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            Your university schedule comes first. Our preparation structure is
            designed to grow with your MBBS journey, from foundational
            reinforcement to final-year exam strategy.
          </p>

          <button
            type="button"
            className="group mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-5 text-xs font-bold text-white shadow-[0_10px_25px_rgba(2,99,204,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0759B8]"
          >
            Explore Our FMGE Plan

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}