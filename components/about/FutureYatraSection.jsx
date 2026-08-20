"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  FileCheck2,
  GraduationCap,
  Link2,
  Plane,
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
    backgroundColor: "#7C68C9", // Purple
  },
  {
    name: "Academic Yatra",
    label: "TEST PREP",
    description: "Test prep & language training including IELTS and PTE.",
    icon: BookOpenCheck,
    position: "left",
    backgroundColor: "#8B6B3F", // Brown
  },
  {
    name: "ApplyVisa Yatra",
    label: "VISA SUPPORT",
    description: "Visa & immigration documentation support.",
    icon: FileCheck2,
    position: "right",
    backgroundColor: "#5B9E90", // Teal
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

      <div className="pointer-events-none absolute right-[-150px] bottom-[-120px] h-[430px] w-[430px] rounded-full bg-[#02A7BB]/7 blur-[130px]" />

      {/* subtle technical grid */}

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
            <Link2 size={13} className="text-[#0263CC]" />

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
            healthcare-focused guidance together with support across education,
            preparation, and mobility.
          </p>
        </motion.div>

        {/* =======================================================
            ECOSYSTEM MAP
        ======================================================== */}

        <div className="relative mx-auto mt-16 max-w-[1080px] sm:mt-20 lg:mt-24">

          {/* =====================================================
              DESKTOP CONNECTING LINES
          ====================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block">

            <svg
              viewBox="0 0 1080 600"
              className="h-full w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* left connection */}

              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 }}
                d="M275 205 C390 205 410 300 470 300"
                stroke="#0263CC"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.22"
              />

              {/* right connection */}

              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.35 }}
                d="M805 205 C690 205 670 300 610 300"
                stroke="#02A7BB"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.25"
              />

              {/* top connection */}

              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.05 }}
                d="M540 75 C540 165 540 180 540 220"
                stroke="#0263CC"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                opacity="0.22"
              />

              {/* central vertical */}

              <path
                d="M540 375 C540 420 540 445 540 500"
                stroke="#0263CC"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.10"
              />

              {/* nodes */}

              <circle cx="275" cy="205" r="4" fill="#0263CC" opacity="0.5" />
              <circle cx="805" cy="205" r="4" fill="#02A7BB" opacity="0.5" />
              <circle cx="540" cy="75" r="4" fill="#0263CC" opacity="0.5" />
            </svg>
          </div>

          {/* =====================================================
              TOP BRAND
          ====================================================== */}

          <div className="relative mx-auto hidden w-[330px] lg:block">
            <BrandCard
              brand={brands[0]}
              index={0}
            />
          </div>

          {/* =====================================================
              SIDE BRANDS
          ====================================================== */}

          <div className="mt-5 grid gap-5 lg:mt-[90px] lg:grid-cols-[330px_1fr_330px] lg:items-center">

            {/* LEFT */}

            <div className="lg:translate-y-[-10px]">
              <BrandCard
                brand={brands[1]}
                index={1}
              />
            </div>

            {/* =================================================
                CENTRE MEDICO YATRA
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative flex min-h-[310px] items-center justify-center"
            >
              {/* outer ring */}

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

              {/* second ring */}

              <div className="absolute h-[210px] w-[210px] rounded-full border border-[#02A7BB]/10" />

              {/* glow */}

              <div className="absolute h-[180px] w-[180px] rounded-full bg-[#0263CC]/10 blur-[45px]" />

              {/* centre */}

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

            {/* RIGHT */}

            <div className="lg:translate-y-[-10px]">
              <BrandCard
                brand={brands[2]}
                index={2}
              />
            </div>
          </div>

          {/* =====================================================
              MOBILE BRAND
          ====================================================== */}

          <div className="mt-5 lg:hidden">
            <BrandCard
              brand={brands[0]}
              index={0}
            />
          </div>
        </div>

        {/* =======================================================
            GROUP SUPPORT MESSAGE
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[28px] border border-[#0263CC]/10 bg-white shadow-[0_15px_50px_rgba(9,33,61,0.05)] sm:mt-16"
        >
          <div className="relative p-6 sm:p-8 lg:p-9">

            {/* accent */}

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <ShieldCheck size={14} className="text-[#0263CC]" />

          <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
            One group. Different expertise. Connected support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   BRAND CARD
================================================================ */

function BrandCard({ brand, index }) {
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
      className="group relative overflow-hidden rounded-[24px] text-white border border-slate-200 p-5 shadow-[0_10px_35px_rgba(9,33,61,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(2,99,204,0.09)] sm:p-6"
      style={{
        backgroundColor: brand.backgroundColor,
      }}
    >
      {/* hover glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0263CC]/7 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#ffffff] bg-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
          <Icon size={20} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold tracking-[0.17em] text-[#ffff]">
              {brand.label}
            </span>
          </div>

          <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-[#ffffff]">
            {brand.name}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-white">
            {brand.description}
          </p>
        </div>
      </div>

      {/* bottom connection indicator */}

      <div className="mt-5 flex items-center gap-2">
        <span className="h-px flex-1 bg-slate-100 transition-colors group-hover:bg-[#0263CC]" />

        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all group-hover:bg-[#0263CC]/8 group-hover:text-[#0263CC]">
          <ArrowUpRight size={10} />
        </span>
      </div>
    </motion.div>
  );
}