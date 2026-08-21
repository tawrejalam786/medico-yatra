"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  FileCheck2,
  GraduationCap,
  Link2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const brands = [
  {
    name: "University Yatra",
    label: "STUDY ABROAD",
    description: "Study-abroad counselling & admissions.",
    icon: GraduationCap,
    position: "top",
    backgroundColor: "#7C68C9",
  },
  {
    name: "Academic Yatra",
    label: "TEST PREP",
    description:
      "Test prep & language training including IELTS and PTE.",
    icon: BookOpenCheck,
    position: "left",
    backgroundColor: "#8B6B3F",
  },
  {
    name: "ApplyVisa Yatra",
    label: "VISA SUPPORT",
    description:
      "Visa & immigration documentation support.",
    icon: FileCheck2,
    position: "right",
    backgroundColor: "#5B9E90",
  },
];

export default function FutureYatraSection() {
  return (
    <section
      id="future-yatra"
      className="relative overflow-hidden bg-[#f5f9fd] py-10 sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[430px] w-[430px] rounded-full bg-[#0263CC]/6 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-150px] h-[430px] w-[430px] rounded-full bg-[#02A7BB]/7 blur-[130px]" />

      {/* Technical grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,99,204,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,99,204,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm">
            <Link2
              size={13}
              className="text-[#0263CC]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              Part of Future Yatra
            </span>
          </div>

          <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.04em] text-[#09213d] sm:text-[50px] lg:text-[61px]">
            One group.
            <br />

            <span className="text-[#0263CC]">
              Connected support.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            Medico Yatra is part of the Future Yatra group — bringing
            healthcare-focused guidance together with support across
            education, preparation, and mobility.
          </p>
        </motion.div>

        {/* =======================================================
            DESKTOP ECOSYSTEM MAP
        ======================================================== */}

        <div className="relative mx-auto mt-16 hidden max-w-[1080px] sm:mt-20 lg:mt-24 lg:block">

          {/* Desktop connecting SVG */}

          <div className="pointer-events-none absolute inset-0">
            <svg
              viewBox="0 0 1080 600"
              className="h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Top connection */}

              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.05,
                }}
                d="M540 75 C540 165 540 180 540 220"
                stroke="#0263CC"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.22"
              />

              {/* Left connection */}

              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                }}
                d="M275 205 C390 205 410 300 470 300"
                stroke="#0263CC"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.22"
              />

              {/* Right connection */}

              <motion.path
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.35,
                }}
                d="M805 205 C690 205 670 300 610 300"
                stroke="#02A7BB"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.25"
              />

              {/* Central vertical */}

              <path
                d="M540 375 C540 420 540 445 540 500"
                stroke="#0263CC"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.10"
              />

              {/* Nodes */}

              <circle
                cx="275"
                cy="205"
                r="4"
                fill="#0263CC"
                opacity="0.5"
              />

              <circle
                cx="805"
                cy="205"
                r="4"
                fill="#02A7BB"
                opacity="0.5"
              />

              <circle
                cx="540"
                cy="75"
                r="4"
                fill="#0263CC"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Top brand */}

          <div className="relative mx-auto w-[330px]">
            <BrandCard
              brand={brands[0]}
              index={0}
            />
          </div>

          {/* Side brands + center */}

          <div className="mt-[90px] grid grid-cols-[330px_1fr_330px] items-center gap-5">

            {/* Left */}

            <div className="-translate-y-[10px]">
              <BrandCard
                brand={brands[1]}
                index={1}
              />
            </div>

            {/* Center */}

            <DesktopCenter />

            {/* Right */}

            <div className="-translate-y-[10px]">
              <BrandCard
                brand={brands[2]}
                index={2}
              />
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE ECOSYSTEM MAP
        ======================================================== */}

        <div className="relative mx-auto mt-14 max-w-[430px] sm:mt-16 lg:hidden">

          {/* =====================================================
              MOBILE CONNECTING LINE
          ====================================================== */}

          <div className="pointer-events-none absolute left-1/2 top-[125px] bottom-[155px] w-px -translate-x-1/2 bg-gradient-to-b from-[#0263CC]/20 via-[#0263CC]/30 to-[#02A7BB]/10" />

          {/* =====================================================
              TOP UNIVERSITY
          ====================================================== */}

          <div className="relative z-10 mx-auto w-full max-w-[330px]">
            <BrandCard
              brand={brands[0]}
              index={0}
              mobile
            />
          </div>

          {/* Connector */}

          <MobileConnector />

          {/* =====================================================
              CENTER MEDICO YATRA
          ====================================================== */}

          <MobileCenter />

          {/* Connector */}

          <MobileConnector />

          {/* =====================================================
              BOTTOM TWO BRANDS
          ====================================================== */}

          <div className="relative z-10 grid grid-cols-2 gap-3">

            <MobileBrandCard
              brand={brands[1]}
              index={1}
            />

            <MobileBrandCard
              brand={brands[2]}
              index={2}
            />
          </div>
        </div>

        {/* =======================================================
            GROUP SUPPORT MESSAGE
        ======================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[28px] border border-[#0263CC]/10 bg-white shadow-[0_15px_50px_rgba(9,33,61,0.05)] sm:mt-16"
        >
          <div className="relative p-6 sm:p-8 lg:p-9">

            {/* Accent */}

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0263CC] to-[#02A7BB]" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0263CC]/8 text-[#0263CC]">
                <Building2 size={21} />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
                  The bigger ecosystem
                </p>

                <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.025em] text-[#09213d] sm:text-[25px]">
                  Support that can continue beyond one service.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A Medico Yatra student can be supported across counselling,
                  test preparation, and visa-related needs under one group.
                </p>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#0263CC] sm:flex">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            TRUST NOTE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-8 flex items-center justify-center gap-2 px-4 text-center"
        >
          <ShieldCheck
            size={14}
            className="shrink-0 text-[#0263CC]"
          />

          <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
            One group. Different expertise. Connected support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   DESKTOP CENTER
================================================================ */

function DesktopCenter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex min-h-[310px] items-center justify-center"
    >
      {/* Outer rotating ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-[#0263CC]/10"
      />

      {/* Second ring */}

      <div className="absolute h-[210px] w-[210px] rounded-full border border-[#02A7BB]/10" />

      {/* Glow */}

      <div className="absolute h-[180px] w-[180px] rounded-full bg-[#0263CC]/10 blur-[45px]" />

      {/* Center */}

      <div className="relative z-10 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full border border-white bg-white text-center shadow-[0_25px_70px_rgba(2,99,204,0.13)]">

        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white shadow-lg">
          <Stethoscope size={21} />
        </div>

        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
          Healthcare
        </p>

        <h3 className="mt-1 text-[18px] font-bold tracking-[-0.03em] text-[#09213d]">
          Medico Yatra
        </h3>

        <p className="mt-1 text-[9px] text-slate-400">
          Future Yatra group
        </p>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   MOBILE CENTER
================================================================ */

function MobileCenter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative z-10 mx-auto flex h-[190px] w-[190px] items-center justify-center"
    >
      {/* Outer ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[7px] rounded-full border border-dashed border-[#0263CC]/15"
      />

      {/* Inner ring */}

      <div className="absolute inset-[22px] rounded-full border border-[#02A7BB]/10" />

      {/* Glow */}

      <div className="absolute h-[120px] w-[120px] rounded-full bg-[#0263CC]/10 blur-[35px]" />

      {/* Center */}

      <div className="relative z-10 flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full border border-white bg-white text-center shadow-[0_20px_55px_rgba(2,99,204,0.14)]">

        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white shadow-md">
          <Stethoscope size={17} />
        </div>

        <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
          Healthcare
        </p>

        <h3 className="mt-1 text-[15px] font-bold tracking-[-0.03em] text-[#09213d]">
          Medico Yatra
        </h3>

        <p className="mt-0.5 text-[7px] text-slate-400">
          Future Yatra group
        </p>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   MOBILE CONNECTOR
================================================================ */

function MobileConnector() {
  return (
    <div className="relative z-10 flex h-[38px] items-center justify-center">
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        whileInView={{
          height: 38,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative w-px bg-gradient-to-b from-[#0263CC]/20 via-[#0263CC]/50 to-[#02A7BB]/30"
      >
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-[#f5f9fd] bg-[#0263CC]" />
      </motion.div>
    </div>
  );
}

/* ===============================================================
   MOBILE BRAND CARD
================================================================ */

function MobileBrandCard({
  brand,
  index,
}) {
  const Icon = brand.icon;

  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative min-h-[148px] overflow-hidden rounded-[22px] border border-white/60 p-4 text-white shadow-[0_12px_35px_rgba(9,33,61,0.08)]"
      style={{
        backgroundColor: brand.backgroundColor,
      }}
    >
      {/* Decorative glow */}

      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

      {/* Icon */}

      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
        <Icon size={17} />
      </div>

      {/* Content */}

      <div className="relative mt-4">
        <p className="text-[7px] font-bold tracking-[0.14em] text-white/65">
          {brand.label}
        </p>

        <h3 className="mt-1 text-[13px] font-semibold leading-tight text-white">
          {brand.name}
        </h3>

        <p className="mt-1.5 text-[9px] leading-4 text-white/70">
          {brand.description}
        </p>
      </div>

      {/* Bottom line */}

      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
        <span className="h-px flex-1 bg-white/20" />

        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
          <ArrowUpRight size={8} />
        </span>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   BRAND CARD
================================================================ */

function BrandCard({
  brand,
  index,
}) {
  const Icon = brand.icon;

  return (
    <motion.div
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
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-[24px] border border-white/30 p-5 text-white shadow-[0_10px_35px_rgba(9,33,61,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(2,99,204,0.09)] sm:p-6"
      style={{
        backgroundColor: brand.backgroundColor,
      }}
    >
      {/* Hover glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">

        {/* Icon */}

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
          <Icon size={20} />
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold tracking-[0.17em] text-white/65">
              {brand.label}
            </span>
          </div>

          <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-white">
            {brand.name}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-white/75">
            {brand.description}
          </p>
        </div>
      </div>

      {/* Bottom connection indicator */}

      <div className="mt-5 flex items-center gap-2">
        <span className="h-px flex-1 bg-white/20 transition-colors group-hover:bg-white/40" />

        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all group-hover:bg-white/15 group-hover:text-white">
          <ArrowUpRight size={10} />
        </span>
      </div>
    </motion.div>
  );
}