"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Plane,
  MapPin,
  Stethoscope,
  ClipboardCheck,
  BookOpen,
  Award,
  BriefcaseMedical,
} from "lucide-react";

const roadmap = [
  {
    id: 1,
    title: "Join MBBS Abroad",
    icon: GraduationCap,
    short: "Start",
  },
  {
    id: 2,
    title: "Year 1 FMGE Onboarding",
    icon: ClipboardCheck,
    short: "Year 1",
  },
  {
    id: 3,
    title: "Foundational Subject Coaching",
    subtitle: "Year 1–2",
    icon: BookOpen,
    short: "Year 1–2",
  },
  {
    id: 4,
    title: "Para-Clinical Coaching",
    subtitle: "Year 3–4",
    icon: Stethoscope,
    short: "Year 3–4",
  },
  {
    id: 5,
    title: "Clinical-Heavy Coaching",
    subtitle: "Year 5",
    icon: BriefcaseMedical,
    short: "Year 5",
  },
  {
    id: 6,
    title: "Final-Year Intensive Revision",
    icon: BookOpen,
    short: "Final Year",
  },
  {
    id: 7,
    title: "Graduation",
    icon: GraduationCap,
    short: "Graduate",
  },
  {
    id: 8,
    title: "Sit FMGE / NExT",
    icon: Award,
    short: "Exam",
  },
  {
    id: 9,
    title: "Registration",
    icon: CheckCircle2,
    short: "Licensed",
  },
  {
    id: 10,
    title: "Career",
    icon: Stethoscope,
    short: "Career",
  },
];

function RoadmapNode({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      className="relative flex flex-col items-center"
    >
      {/* Node */}
      <motion.div
        whileHover={{
          scale: 1.08,
          y: -4,
        }}
        transition={{ duration: 0.2 }}
        className="group relative z-20"
      >
        {/* Glow */}
        <div className="absolute -inset-2 rounded-full bg-[#0263CC]/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        {/* Outer ring */}
        <div className="relative flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#0263CC]/20 bg-white shadow-[0_10px_35px_rgba(2,99,204,0.12)]">
          {/* Inner */}
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white shadow-lg">
            <Icon size={21} strokeWidth={2} />
          </div>
        </div>

        {/* Number */}
        <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#071A49] text-[10px] font-bold text-white shadow-md">
          {String(item.id).padStart(2, "0")}
        </div>
      </motion.div>

      {/* Text */}
      <div className="mt-4 max-w-[145px] text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0263CC]">
          {item.short}
        </p>

        <h3 className="mt-1.5 text-sm font-bold leading-snug text-[#071A49]">
          {item.title}
        </h3>

        {item.subtitle && (
          <p className="mt-1 text-xs text-slate-500">
            {item.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function FMGEJourneyRoadmap() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] py-14 sm:py-12 lg:py-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#4DA5EC]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#02A7BB]/10 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,99,204,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(2,99,204,0.045) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0263CC]/10">
              <MapPin size={12} className="text-[#0263CC]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
              Your Licensing Roadmap
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#071A49] sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
            Your Step-by-Step{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Licensing Journey
            </span>{" "}
            With Medico Yatra
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            A structured path from your first day of MBBS abroad to the
            licensing step — with preparation built into the journey instead
            of left until the end.
          </p>
        </motion.div>

        {/* ================= DESKTOP ROADMAP ================= */}
        <div className="relative mt-20 hidden lg:block">
          {/* Main journey card */}
          <div className="relative rounded-[32px] border border-white bg-white/80 px-8 py-12 shadow-[0_25px_80px_rgba(7,26,73,0.08)] backdrop-blur-xl xl:px-12">
            
            {/* Flight path */}
            <div className="pointer-events-none absolute left-[7%] right-[7%] top-[42px] h-[100px]">
              <svg
                viewBox="0 0 1000 130"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
              >
                <motion.path
                  d="M 10 65
                     C 90 10, 130 110, 210 65
                     S 330 10, 410 65
                     S 530 110, 610 65
                     S 730 10, 810 65
                     S 930 110, 990 65"
                  fill="none"
                  stroke="#B9DDF8"
                  strokeWidth="3"
                  strokeDasharray="8 9"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </svg>

              {/* Moving plane */}
              <motion.div
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-[43px]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white shadow-md">
                  <Plane
                    size={14}
                    className="rotate-[10deg] text-[#0263CC]"
                  />
                </div>
              </motion.div>
            </div>

            {/* Nodes */}
            <div className="relative grid grid-cols-5 gap-x-6 gap-y-14">
              {roadmap.map((item, index) => (
                <RoadmapNode
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET ROADMAP ================= */}
        <div className="mt-14 lg:hidden">
          <div className="relative mx-auto max-w-xl">
            {/* Vertical flight path */}
            <div className="absolute bottom-8 left-[25px] top-8 w-[2px] overflow-hidden bg-[#D6E9F8]">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="w-full bg-gradient-to-b from-[#0263CC] via-[#02A7BB] to-[#0263CC]"
              />
            </div>

            {/* Plane */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[10px] top-0 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#0263CC]/10 bg-white shadow-md"
            >
              <Plane size={14} className="rotate-90 text-[#0263CC]" />
            </motion.div>

            <div className="space-y-7">
              {roadmap.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="relative flex items-center gap-5"
                  >
                    {/* Node */}
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-[#F7FAFE] bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_25px_rgba(2,99,204,0.22)]">
                      <Icon size={19} />
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_30px_rgba(7,26,73,0.06)]">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC]">
                            {item.short}
                          </span>

                          <h3 className="mt-1 text-sm font-bold leading-snug text-[#071A49]">
                            {item.title}
                          </h3>

                          {item.subtitle && (
                            <p className="mt-1 text-xs text-slate-500">
                              {item.subtitle}
                            </p>
                          )}
                        </div>

                        <span className="text-[10px] font-bold text-slate-300">
                          {String(item.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Supporting line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#0263CC]/10 bg-white px-5 py-5 shadow-[0_10px_35px_rgba(7,26,73,0.06)] sm:px-7">
            {/* Accent */}
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#0263CC] to-[#02A7BB]" />

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0263CC]/10">
                <CheckCircle2
                  size={16}
                  className="text-[#0263CC]"
                />
              </div>

              <p className="text-sm leading-6 text-slate-600">
                <span className="font-bold text-[#071A49]">
                  Every step supported.
                </span>{" "}
                Including the licensing step most agencies leave you to figure
                out alone — after it&apos;s already too late to start early.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#071A49] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(7,26,73,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0263CC]"
          >
            Start Your FMGE Journey

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}