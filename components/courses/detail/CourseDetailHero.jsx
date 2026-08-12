"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const courseInfo = [
  {
    icon: Clock3,
    label: "Duration",
    value: "5.8 – 6 Years",
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "English",
  },
  {
    icon: UsersRound,
    label: "Eligibility",
    value: "50% in PCB",
  },
  {
    icon: CalendarDays,
    label: "Intake",
    value: "Sep 2024 / Feb 2025",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "NMC Recognized",
  },
  {
    icon: GraduationCap,
    title: "WHO Approved",
  },
  {
    icon: Sparkles,
    title: "Affordable Fees",
  },
  {
    icon: ShieldCheck,
    title: "High FMGE Pass Rate",
  },
  {
    icon: BookOpen,
    title: "Indian Food Available",
  },
];

const enquiryPoints = [
  "100% Transparent Process",
  "No Hidden Charges",
  "Expert Counsellors",
  "End-to-End Support",
];

export default function CourseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F4F8FF] mt-17 pb-4">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7FAFF] via-[#F7FAFF]/95 to-[#EAF3FF]/60" />

        <Image
          src="/images/courses/russia-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.20] sm:opacity-[0.26] lg:opacity-[0.42]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FBFF] via-[#F8FBFF]/90 to-transparent lg:from-[#F8FBFF] lg:via-[#F8FBFF]/75 lg:to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F8FF] via-transparent to-transparent" />
      </div>

      {/* =====================================================
          DECORATIVE SVG
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Dotted grid */}
        <svg
          className="absolute left-[-40px] top-24 h-52 w-72 opacity-[0.08]"
          viewBox="0 0 300 220"
          fill="none"
        >
          <defs>
            <pattern
              id="courseDots"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.2"
                fill="#0263CC"
              />
            </pattern>
          </defs>

          <rect width="300" height="220" fill="url(#courseDots)" />
        </svg>

        {/* Animated route */}
        <motion.svg
          className="absolute left-[32%] top-[12%] hidden h-48 w-72 opacity-[0.16] lg:block"
          viewBox="0 0 300 180"
          fill="none"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.path
            d="M10 140C55 110 65 125 95 90C125 55 155 70 185 40C215 10 245 30 290 10"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="6 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />

          <circle
            cx="95"
            cy="90"
            r="5"
            fill="#0263CC"
          />

          <circle
            cx="185"
            cy="40"
            r="4"
            fill="#02A7BB"
          />
        </motion.svg>

        {/* Decorative circles */}
        <motion.div
          className="absolute right-[-100px] top-[-80px] h-72 w-72 rounded-full border border-[#0263CC]/10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="absolute right-[-30px] top-[-30px] h-52 w-52 rounded-full border border-[#4DA5EC]/10" />

        {/* Blue glow */}
        <div className="absolute bottom-[-120px] left-[30%] h-72 w-72 rounded-full bg-[#0263CC]/10 blur-3xl" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="mx-auto max-w-[1440px] px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-6 lg:px-10 lg:pt-7 xl:px-14">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 overflow-hidden text-[10px] font-medium text-slate-500 sm:mb-8 sm:text-xs"
        >
          <Link
            href="/"
            className="shrink-0 transition-colors hover:text-[#0263CC]"
          >
            Home
          </Link>

          <Chevron />

          <Link
            href="/courses"
            className="shrink-0 transition-colors hover:text-[#0263CC]"
          >
            Courses
          </Link>

          <Chevron />

          <span className="shrink-0 text-[#0263CC]">
            Course
          </span>

          <Chevron />

          <span className="truncate font-semibold text-[#0A1B44]">
            MBBS in Russia
          </span>
        </motion.nav>

        {/* =================================================
            HERO GRID
        ================================================== */}

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-12">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative min-w-0 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {/* Category */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

                <span className="text-[10px] font-bold text-[#0263CC] sm:text-xs">
                  MBBS Abroad
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-[36px] font-black leading-[1.05] tracking-[-0.045em] text-[#0A1B44] sm:text-5xl lg:text-[56px] xl:text-[64px]">
                MBBS in{" "}
                <span className="bg-gradient-to-r from-[#0263CC] via-[#0875E1] to-[#02A7BB] bg-clip-text text-transparent">
                  Russia
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]">
                Pursue your dream of becoming a doctor from top
                NMC-recognized universities in Russia with world-class
                education, global exposure and affordable fees.
              </p>
            </motion.div>

            {/* =================================================
                COURSE INFO
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:grid-cols-4 sm:gap-3"
            >
              {courseInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/80 bg-white/65 p-2.5 shadow-[0_5px_20px_rgba(20,70,130,.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-[#0263CC] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[9px] font-semibold text-slate-500 sm:text-[10px]">
                        {item.label}
                      </p>

                      <p className="mt-0.5 truncate text-[10px] font-extrabold text-[#0A1B44] sm:text-xs">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0263CC] to-[#0759C9] px-6 text-sm font-bold text-white shadow-[0_10px_25px_rgba(2,99,204,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(2,99,204,.32)]"
              >
                Apply Now

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0263CC]/30 bg-white/80 px-6 text-sm font-bold text-[#0263CC] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#0263CC] hover:bg-white"
              >
                Download Brochure

                <ArrowDownToLine className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            {/* =================================================
                TRUST BADGES
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="-mx-1 mt-7 overflow-x-auto pb-1 scrollbar-hide sm:mt-8"
            >
              <div className="flex min-w-max gap-2 px-1">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex shrink-0 items-center gap-2 rounded-xl border border-white/90 bg-white/80 px-3 py-2 shadow-[0_5px_20px_rgba(15,65,130,.06)] backdrop-blur-md"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF5FF]">
                        <Icon className="h-3.5 w-3.5 text-[#0263CC]" />
                      </div>

                      <span className="text-[9px] font-bold text-[#0A1B44]">
                        {benefit.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* =================================================
              ENQUIRY CARD
          ================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.25,
            }}
            className="relative z-20"
          >
            <div className="overflow-hidden rounded-2xl border border-white/90 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,65,130,.14)] backdrop-blur-xl sm:p-6 lg:sticky lg:top-24">
              {/* Card header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC]">
                    Get Expert Help
                  </p>

                  <h2 className="mt-1 text-xl font-black text-[#0A1B44]">
                    Course Enquiry
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Talk to our experts for free guidance about
                    MBBS in Russia.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF]">
                  <MessageCircle className="h-5 w-5 text-[#0263CC]" />
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0263CC] to-[#0759C9] px-4 text-xs font-bold text-white shadow-[0_8px_20px_rgba(2,99,204,.2)] transition-all hover:-translate-y-0.5"
              >
                Book Free Counselling

                <MessageCircle className="h-4 w-4" />
              </Link>

              {/* Benefits */}
              <div className="mt-5 space-y-3">
                {enquiryPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF8F1]">
                      <Check
                        className="h-3 w-3 text-[#1EAD57]"
                        strokeWidth={3}
                      />
                    </div>

                    <span className="text-xs font-semibold text-slate-600">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Student proof */}
              <div className="mt-5 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "/images/students/student-1.jpg",
                      "/images/students/student-2.jpg",
                      "/images/students/student-3.jpg",
                    ].map((src, index) => (
                      <div
                        key={src}
                        className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-[#EAF2FF]"
                      >
                        <Image
                          src={src}
                          alt={`Student ${index + 1}`}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-black leading-none text-[#0A1B44]">
                      15,000+
                    </p>

                    <p className="mt-1 text-[9px] font-medium text-slate-500">
                      Students Guided
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom trust */}
              <div className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-[#F7FAFF] px-3 py-2 text-[9px] font-semibold text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0263CC]" />
                Trusted counselling for aspiring doctors
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[-1px] left-0 w-full">
        <svg
          viewBox="0 0 1440 80"
          className="block h-auto w-full"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 55C180 15 290 75 470 48C650 21 760 20 930 42C1110 65 1240 72 1440 30V80H0V55Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-3 w-3 shrink-0 text-[#0263CC]/50"
      fill="none"
    >
      <path
        d="M4 2.5L7.5 6L4 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}