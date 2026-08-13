"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseMedical,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  GraduationCap,
  HeartPulse,
  Hospital,
  Pill,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";

const alternativeCareers = [
  {
    title: "Dentistry (BDS)",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy (B.Pharm)",
    icon: Pill,
  },
  {
    title: "Nursing",
    icon: HeartPulse,
  },
  {
    title: "Physiotherapy",
    icon: UserRound,
  },
  {
    title: "Allied Health Sciences",
    icon: Syringe,
  },
  {
    title: "Public Health",
    icon: Hospital,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Counselling",
    subtitle: "& Profile Evaluation",
    icon: UserRound,
  },
  {
    number: "02",
    title: "University",
    subtitle: "Shortlisting",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Admission",
    subtitle: "& Documentation",
    icon: BriefcaseMedical,
  },
  {
    number: "04",
    title: "Visa",
    subtitle: "Assistance",
    icon: CircleCheck,
  },
  {
    number: "05",
    title: "Travel & Arrival",
    subtitle: "Support",
    icon: Hospital,
  },
  {
    number: "06",
    title: "FMGE / NExT",
    subtitle: "Coaching",
    icon: Stethoscope,
  },
  {
    number: "07",
    title: "Licensing &",
    subtitle: "Career Support",
    icon: CheckCircle2,
  },
];

export default function MBBSJourneySection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-10">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-3xl" />

        <div className="absolute right-[-100px] bottom-10 h-80 w-80 rounded-full bg-[#02A7BB]/5 blur-3xl" />

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

      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F2F7FF] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC] sm:text-xs">
              Your Next Step
            </span>
          </div>

          <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.8px] text-[#071A49] sm:text-3xl lg:text-[38px]">
            Your Journey Doesn&apos;t End With
            <span className="ml-1.5 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Admission
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Whether you choose MBBS abroad or another healthcare career,
            Medico Yatra helps you understand your options and move forward
            with confidence.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.65fr] lg:items-stretch">
          {/* =================================================
              LEFT — OTHER HEALTHCARE CAREERS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="group relative overflow-hidden rounded-[24px] border border-[#0263CC]/10 bg-white p-5 shadow-[0_15px_50px_rgba(16,66,120,0.07)] sm:p-6"
          >
            {/* card glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0263CC]/7 blur-3xl transition duration-500 group-hover:bg-[#0263CC]/10" />

            {/* small decoration */}
            <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0263CC]">
              <BriefcaseMedical className="h-4.5 w-4.5" />
            </div>

            <div className="relative">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC]">
                Explore Your Options
              </span>

              <h3 className="mt-2 max-w-[300px] text-xl font-extrabold leading-[1.2] text-[#071A49] sm:text-[23px]">
                Not Set on MBBS?
                <span className="block text-[#0263CC]">
                  Explore Other Healthcare Careers
                </span>
              </h3>

              <p className="mt-2.5 max-w-[390px] text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                Discover other rewarding career options in the healthcare
                field and find a path that matches your interests.
              </p>

              {/* Careers */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                {alternativeCareers.map((career, index) => {
                  const Icon = career.icon;

                  return (
                    <motion.div
                      key={career.title}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                      whileHover={{ y: -2 }}
                      className="flex min-h-[48px] items-center gap-2 rounded-xl border border-[#0263CC]/10 bg-[#F9FBFF] px-2.5 py-2 transition-all duration-300 hover:border-[#0263CC]/25 hover:bg-[#F2F7FF]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[#0263CC] shadow-sm ring-1 ring-[#0263CC]/10">
                        <Icon className="h-3.5 w-3.5" />
                      </span>

                      <span className="text-[10px] font-semibold leading-4 text-[#132653] sm:text-[11px]">
                        {career.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="/courses"
                className="group/btn mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#0263CC]/25 bg-white px-4 text-xs font-bold text-[#0263CC] transition-all duration-300 hover:border-[#0263CC] hover:bg-[#0263CC] hover:text-white sm:w-auto sm:px-5"
              >
                Explore All Healthcare Courses
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — JOURNEY TIMELINE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[24px] border border-[#0263CC]/10 bg-white p-5 shadow-[0_15px_50px_rgba(16,66,120,0.07)] sm:p-6 lg:p-7"
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-[#02A7BB]/7 blur-3xl" />

            <div className="relative">
              <div className="text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC]">
                  Step-by-Step Support
                </span>

                <h3 className="mt-2 text-xl font-extrabold text-[#071A49] sm:text-2xl">
                  Your Journey With{" "}
                  <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                    Medico Yatra
                  </span>
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                  From your first counselling session to licensing and career
                  support, we stay with you throughout the journey.
                </p>
              </div>

              {/* =================================================
                  DESKTOP TIMELINE
              ================================================== */}

              <div className="relative mt-8 hidden lg:block">
                {/* Animated line */}
                <div className="absolute left-[7%] right-[7%] top-[23px] h-[2px] overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB]"
                  />
                </div>

                <div className="relative grid grid-cols-7 gap-2">
                  {journeySteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
                        }}
                        className="group flex flex-col items-center text-center"
                      >
                        {/* Number */}
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          className={`relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border-4 border-white text-xs font-extrabold shadow-md ${
                            index === 6
                              ? "bg-gradient-to-br from-[#02A7BB] to-[#0263CC] text-white"
                              : "bg-[#0263CC] text-white"
                          }`}
                        >
                          {step.number}
                        </motion.div>

                        {/* Icon */}
                        <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F6FF] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </div>

                        {/* Text */}
                        <div className="mt-2">
                          <p className="text-[11px] font-bold leading-4 text-[#071A49]">
                            {step.title}
                          </p>

                          <p className="text-[10px] font-medium leading-4 text-slate-500">
                            {step.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  MOBILE / TABLET TIMELINE
              ================================================== */}

              <div className="relative mt-7 lg:hidden">
                {/* Vertical line */}
                <div className="absolute bottom-6 left-[22px] top-6 w-[2px] overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      ease: "easeInOut",
                    }}
                    className="w-full bg-gradient-to-b from-[#0263CC] via-[#4DA5EC] to-[#02A7BB]"
                  />
                </div>

                <div className="space-y-4">
                  {journeySteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.06,
                        }}
                        className="relative flex items-center gap-3"
                      >
                        {/* Number */}
                        <div
                          className={`relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border-4 border-white text-[10px] font-extrabold text-white shadow-md ${
                            index === 6
                              ? "bg-gradient-to-br from-[#02A7BB] to-[#0263CC]"
                              : "bg-[#0263CC]"
                          }`}
                        >
                          {step.number}
                        </div>

                        {/* Card */}
                        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-slate-100 bg-[#FAFCFF] px-3 py-3 shadow-sm">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF5FF] text-[#0263CC]">
                            <Icon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-bold leading-4 text-[#071A49]">
                              {step.title}
                            </p>

                            <p className="text-[10px] font-medium leading-4 text-slate-500">
                              {step.subtitle}
                            </p>
                          </div>

                          <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-slate-300" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom trust line */}
              <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 lg:justify-start">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#02A7BB]" />

                <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  One trusted partner from counselling to career support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}