"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";

const examDetails = [
  {
    icon: Laptop,
    label: "Format",
    value: "Computer-based, multiple-choice questions (MCQs)",
  },
  {
    icon: BookOpen,
    label: "Subjects Covered",
    value:
      "All major MBBS subjects — Pre-clinical, Para-clinical, and Clinical",
  },
  {
    icon: Clock3,
    label: "Sessions",
    value: "Typically conducted across two sessions in a single day",
  },
  {
    icon: CheckCircle2,
    label: "Passing Criteria",
    value:
      "A minimum qualifying score set by NBEMS (subject to change — verify current criteria)",
  },
  {
    icon: CalendarDays,
    label: "Frequency",
    value: "Typically conducted twice a year",
  },
  {
    icon: GraduationCap,
    label: "Eligibility",
    value:
      "Indian citizens with a primary medical qualification from an NMC-recognised foreign institution",
  },
];

const subjectGroups = [
  {
    title: "Clinical",
    subtitle: "Highest focus",
    subjects: "Medicine · Surgery · OBG · Paediatrics",
    percentage: "Heavy",
    icon: Stethoscope,
  },
  {
    title: "Para-clinical",
    subtitle: "Core support",
    subjects:
      "Pathology · Microbiology · Pharmacology · Forensic Medicine · Community Medicine",
    percentage: "Moderate",
    icon: ClipboardList,
  },
  {
    title: "Pre-clinical",
    subtitle: "Foundation",
    subjects: "Anatomy · Physiology · Biochemistry",
    percentage: "Foundation",
    icon: BookOpen,
  },
];

export default function FMGEExamStructure() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-20 h-[380px] w-[380px] rounded-full bg-[#0263CC]/5 blur-3xl" />

        <div className="absolute right-[-160px] bottom-10 h-[400px] w-[400px] rounded-full bg-[#02A7BB]/5 blur-3xl" />

        {/* subtle grid */}
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
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F4F9FF] px-3.5 py-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0263CC] text-white">
              <Target className="h-3.5 w-3.5" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
              Exam Structure
            </span>
          </div>

          <h2 className="text-[29px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[#071A49] sm:text-[38px] lg:text-[46px]">
            Understanding the{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              FMGE Exam
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Illustrative — Verify Current NBEMS Notification
          </p>
        </motion.div>

        {/* =====================================================
            IMPORTANT NOTICE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-4 sm:p-5">
            {/* decorative line */}

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-400" />

            <div className="flex gap-3 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 sm:h-10 sm:w-10">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-extrabold text-amber-800 sm:text-sm">
                  Important: Verify the current official pattern
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                  Exam pattern, question count, and passing criteria are set by
                  NBEMS/NMC and are subject to change. The information below
                  reflects the general structure as understood at the time of
                  writing — always verify the current official pattern at the
                  time of your exam.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN VISUAL + DETAILS
        ====================================================== */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          {/* =================================================
              LEFT VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#071A49] sm:min-h-[440px] lg:min-h-[620px]"
          >
            {/* image */}

            <Image
              src="/images/fmge/prepare.png"
              alt="FMGE examination preparation"
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover"
            />

            {/* dark overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#031330] via-[#071A49]/35 to-transparent" />

            {/* animated glow */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 top-16 h-52 w-52 rounded-full bg-[#02A7BB] blur-3xl"
            />

            {/* floating icon */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md"
            >
              <ShieldCheck className="h-5 w-5" />
            </motion.div>

            {/* bottom content */}

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4DA5EC]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/80">
                  Exam Intelligence
                </span>
              </div>

              <h3 className="max-w-sm text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Prepare around the exam,
                <span className="text-[#4DA5EC]"> not just the syllabus.</span>
              </h3>

              <p className="mt-3 max-w-md text-xs leading-5 text-white/65 sm:text-sm">
                Our curriculum uses the broad FMGE subject structure to help
                students organise preparation progressively.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT DETAILS
          ================================================== */}

          <div className="grid gap-3 sm:grid-cols-2">
            {examDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_rgba(7,26,73,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0263CC]/20 hover:shadow-[0_16px_40px_rgba(2,99,204,0.10)] sm:p-5"
                >
                  {/* hover glow */}

                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#0263CC]/5 blur-2xl transition-all duration-300 group-hover:bg-[#02A7BB]/10" />

                  <div className="relative">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0263CC] transition-colors duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC]">
                          {item.label}
                        </p>

                        <p className="mt-1.5 text-xs font-semibold leading-5 text-[#071A49] sm:text-sm sm:leading-6">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SUBJECT WEIGHTAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-[#F8FBFF]"
        >
          {/* heading */}

          <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:p-6 md:flex-row md:items-center md:justify-between lg:px-7">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF3FF] text-[#0263CC]">
                  <Users className="h-4 w-4" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0263CC]">
                  Subject Focus
                </span>
              </div>

              <h3 className="mt-2 text-lg font-extrabold text-[#071A49] sm:text-xl">
                Where Your Preparation Needs the Most Attention
              </h3>
            </div>

            <p className="max-w-md text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
              Clinical subjects typically carry the heaviest weightage,
              followed by Para-clinical and Pre-clinical subjects.
            </p>
          </div>

          {/* subject cards */}

          <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5 lg:p-6">
            {subjectGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative overflow-hidden rounded-2xl border border-white bg-white p-4 shadow-sm sm:p-5"
                >
                  {/* number */}

                  <span className="absolute right-4 top-3 text-4xl font-black text-slate-100">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0263CC]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="rounded-full bg-[#F1F7FF] px-2.5 py-1 text-[9px] font-bold text-[#0263CC]">
                        {group.percentage}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-extrabold text-[#071A49]">
                      {group.title}
                    </h4>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#02A7BB]">
                      {group.subtitle}
                    </p>

                    <p className="mt-3 text-[11px] leading-5 text-slate-500">
                      {group.subjects}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* bottom statement */}

          <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF8F4] text-[#16A05D]">
                <CheckCircle2 className="h-4 w-4" />
              </div>

              <p className="text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                Our curriculum is structured around this broad weightage to
                maximise preparation efficiency — while keeping in mind that
                the official exam pattern and weightage can change.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL NOTE
        ====================================================== */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-5 max-w-3xl text-center text-[10px] leading-5 text-slate-400 sm:text-xs"
        >
          Illustrative information only. Always verify the latest FMGE
          examination pattern, eligibility, subject distribution and passing
          requirements through the current official NBEMS/NMC notifications.
        </motion.p>
      </div>
    </section>
  );
}