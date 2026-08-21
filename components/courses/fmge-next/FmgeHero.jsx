"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

/* =========================================================
   COURSE INFO
========================================================= */

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

/* =========================================================
   BENEFITS
========================================================= */

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

/* =========================================================
   HERO
========================================================= */

export default function CourseHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#F4F8FF] sm:min-h-[760px] lg:min-h-[500px] mt-18">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/courses/fmge-next-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =====================================================
          LEFT WHITE GRADIENT
          Keeps text readable while preserving boy/image
      ====================================================== */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#F8FBFF]/[0.98] via-[#F8FBFF]/[0.88] via-[55%] to-[#F8FBFF]/10" />

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#F4F8FF]/90 via-transparent to-[#F8FBFF]/20 lg:hidden" />

      {/* =====================================================
          BOTTOM SOFT GRADIENT
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 -z-20 h-52 bg-gradient-to-t from-[#F4F8FF] via-[#F4F8FF]/40 to-transparent" />

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Dotted grid */}
        <svg
          className="absolute left-[-40px] top-16 h-52 w-72 opacity-[0.12] sm:top-24"
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

          <rect
            width="300"
            height="220"
            fill="url(#courseDots)"
          />
        </svg>

        {/* Decorative concentric circles */}
        <motion.div
          className="absolute left-[-100px] top-[-110px] h-80 w-80 rounded-full border border-[#0263CC]/15 sm:h-96 sm:w-96"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="absolute left-[-65px] top-[-75px] h-64 w-64 rounded-full border border-[#4DA5EC]/15" />

        <div className="absolute left-[-30px] top-[-40px] h-48 w-48 rounded-full border border-[#02A7BB]/10" />

        {/* Soft left-side circles */}
        <motion.div
          className="absolute left-[6%] top-[43%] h-28 w-28 rounded-full bg-[#0263CC]/[0.035] blur-[1px] sm:h-32 sm:w-32"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[16%] top-[57%] h-24 w-24 rounded-full bg-[#4DA5EC]/[0.035]"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue glow */}
        <div className="absolute bottom-[-140px] left-[22%] h-80 w-80 rounded-full bg-[#0263CC]/10 blur-3xl" />

        {/* Animated route */}
        <motion.svg
          className="absolute left-[32%] top-[12%] hidden h-48 w-72 opacity-[0.12] lg:block"
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
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
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
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 pt-5 sm:px-6 sm:pb-24 sm:pt-6 lg:px-10 lg:pb-28 lg:pt-7 xl:px-14">
        {/* =================================================
            BREADCRUMB
        ================================================== */}

        <motion.nav
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-1.5 overflow-hidden text-[10px] font-medium text-slate-500 sm:mb-10 sm:text-xs"
        >
          <Link
            href="/"
            className="shrink-0 transition-colors hover:text-[#0263CC]"
          >
            Home
          </Link>

          <Chevron />

          <span className="shrink-0 text-[#0263CC]">
            Courses
          </span>

          <Chevron />

          <span className="truncate font-semibold text-[#0A1B44]">
            FMGE / NExT
          </span>
        </motion.nav>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative max-w-[850px] lg:pt-4">
          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
            }}
          >
            {/* Category */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

              <span className="text-[10px] font-bold text-[#0263CC] sm:text-xs">
                FMGE / NExT PREPARATION FOR MBBS ABROAD
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-[38px] font-black leading-[1.04] tracking-[-0.045em] text-[#0A1B44] sm:text-5xl lg:text-[60px] xl:text-[35px]">
             Don't Wait Until Graduation to <br />Start FMGE Prep — {" "}
              <span className="bg-gradient-to-r from-[#0263CC] via-[#0875E1] to-[#02A7BB] bg-clip-text text-transparent">
               Start From Year 1.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]">
               Prepare for FMGE / NExT alongside your MBBS abroad, from Year 1.
            </p>
          </motion.div>


          {/* =================================================
              CTA
          ================================================== */}

       <motion.div
  initial={{
    opacity: 0,
    y: 18,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.6,
    delay: 0.28,
  }}
  className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row"
>
  {/* ============================= */}
  {/* BOOK FREE COUNSELLING BUTTON */}
  {/* ============================= */}

  <Link
    href="/contact"
    className="
      group relative isolate
      inline-flex min-h-12
      items-center justify-center
      overflow-hidden rounded-xl
      p-[2px]
    "
  >
    {/* Soft Glow */}
    <motion.span
      aria-hidden="true"
      className="
        absolute
        inset-[-100%]
        rounded-full
        bg-[conic-gradient(
          from_0deg,
          transparent_0deg,
          transparent_300deg,
          rgba(56,189,248,0.15)_315deg,
          rgba(56,189,248,0.45)_330deg,
          rgba(37,99,235,0.8)_345deg,
          rgba(56,189,248,0.45)_355deg,
          transparent_360deg
        )]
        blur-md
      "
      animate={{
        rotate: -360,
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Bright Moving Snake */}
    <motion.span
      aria-hidden="true"
      className="
        absolute
        inset-[-100%]
        rounded-full
        bg-[conic-gradient(
          from_0deg,
          transparent_0deg,
          transparent_300deg,
          #38BDF8_320deg,
          #60A5FA_338deg,
          #2563EB_352deg,
          #38BDF8_360deg
        )]
      "
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Button Content */}
    <span
      className="
        relative z-10
        flex min-h-[44px]
        w-full
        items-center justify-center
        gap-2
        rounded-[10px]
        bg-gradient-to-r
        from-[#0263CC]
        to-[#0759C9]
        px-6
        text-sm
        font-bold
        text-white
        shadow-[0_10px_25px_rgba(2,99,204,.25)]
        transition-all
        duration-300
        group-hover:-translate-y-0.5
        group-hover:shadow-[0_14px_30px_rgba(2,99,204,.38)]
      "
    >
      Book Free Counselling

      <ArrowRight
        className="
          h-4 w-4
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </span>
  </Link>

  {/* ============================= */}
  {/* SEE HOW PROGRAMME WORKS */}
  {/* ============================= */}

  <button
    type="button"
    className="
      group
      inline-flex min-h-12
      items-center justify-center
      gap-2
      rounded-xl
      border border-[#0263CC]/30
      bg-white/80
      px-6
      text-sm
      font-bold
      text-[#0263CC]
      shadow-sm
      backdrop-blur
      transition-all
      duration-300
      hover:border-[#0263CC]
      hover:bg-white
      hover:shadow-[0_8px_20px_rgba(2,99,204,.10)]
    "
  >
    See How the Programme Works

    <ArrowDownToLine
      className="
        h-4 w-4
        transition-transform
        duration-300
        group-hover:translate-y-0.5
      "
    />
  </button>
</motion.div>

          {/* =================================================
              TRUST BADGES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.38,
            }}
            className="-mx-1 mt-7 pb-1 sm:mt-4"
          >
            <div className="flex min-w-max gap-2 px-1">
             <p className="text-sm">100% Online · Live Classes · Year 1 Onwards</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 w-full">
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

/* =========================================================
   BREADCRUMB CHEVRON
========================================================= */

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