"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Video,
  GraduationCap,
  Globe2,
  PlayCircle,
  ClipboardCheck,
  TrendingUp,
  MessageCircle,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const programmeItems = [
  {
    id: 1,
    icon: Video,
    title: "Live Online Classes",
    description:
      "Regular live sessions, scheduled around international time zones, alongside your university coursework.",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Year-wise Structured Curriculum",
    description:
      "Subject coverage mapped to your academic year, building progressively from Year 1.",
  },
  {
    id: 3,
    icon: Globe2,
    title: "Country / University-Specific Bridging",
    description:
      "Content calibrated to address curriculum gaps specific to your country of study.",
  },
  {
    id: 4,
    icon: PlayCircle,
    title: "Recorded Class Access",
    description:
      "Catch up on any session you miss due to your university schedule or time zone.",
  },
  {
    id: 5,
    icon: ClipboardCheck,
    title: "Timed Mock Tests",
    description:
      "Regular full-length and subject-wise mock tests in the actual FMGE format.",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Periodic readiness assessments throughout your programme, not just before the exam.",
  },
  {
    id: 7,
    icon: MessageCircle,
    title: "Doubt-Clearing Support",
    description:
      "Access to faculty for questions from both coaching content and university coursework.",
  },
  {
    id: 8,
    icon: RefreshCcw,
    title: "Final-Year Intensive Revision",
    description:
      "A dedicated intensive phase building on years of foundational preparation.",
  },
];

function ProgrammeCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="group relative"
    >
      <div
        className="
          relative h-full overflow-hidden rounded-2xl
          border border-slate-200/80
          bg-white/90
          p-5
          shadow-[0_10px_35px_rgba(7,26,73,0.06)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#4DA5EC]/40
          hover:shadow-[0_18px_45px_rgba(2,99,204,0.12)]
        "
      >
        {/* Hover glow */}
        <div
          className="
            pointer-events-none absolute -right-8 -top-8
            h-24 w-24 rounded-full
            bg-[#4DA5EC]/10 blur-2xl
            transition-all duration-500
            group-hover:bg-[#02A7BB]/20
          "
        />

        <div className="relative flex gap-4">
          {/* Icon */}
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-xl
              bg-gradient-to-br from-[#0263CC] to-[#02A7BB]
              text-white
              shadow-[0_8px_20px_rgba(2,99,204,0.20)]
              transition-transform duration-300
              group-hover:scale-105
            "
          >
            <Icon size={20} strokeWidth={2} />
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="text-[15px] font-bold leading-snug text-[#071A49]">
              {item.title}
            </h3>

            <p className="mt-2 text-[13px] leading-5 text-slate-500">
              {item.description}
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="
            absolute bottom-0 left-5 right-5 h-[2px]
            origin-left scale-x-0
            rounded-full
            bg-gradient-to-r from-[#0263CC] to-[#02A7BB]
            transition-transform duration-300
            group-hover:scale-x-100
          "
        />
      </div>
    </motion.div>
  );
}

export default function ProgrammeIncludes() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F7FAFE]
        py-20 sm:py-24 lg:py-10
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Soft gradient blobs */}
        <div
          className="
            absolute -left-32 top-20
            h-80 w-80 rounded-full
            bg-[#4DA5EC]/10 blur-[100px]
          "
        />

        <div
          className="
            absolute -right-32 bottom-20
            h-80 w-80 rounded-full
            bg-[#02A7BB]/10 blur-[100px]
          "
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#0263CC 0.7px, transparent 0.7px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
              <CheckCircle2 size={14} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0263CC]">
              Programme Includes
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071A49] sm:text-4xl lg:text-5xl">
            What You Get With{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Medico Yatra&apos;s
            </span>{" "}
            FMGE / NExT Coaching
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            A structured programme designed to support your preparation
            throughout your MBBS journey — from the first year to final-year
            revision.
          </p>
        </motion.div>

        {/* ================= MAIN LAYOUT ================= */}

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px_1fr] xl:grid-cols-[1fr_360px_1fr] xl:gap-14">
          {/* ================= LEFT ================= */}

          <div className="space-y-4">
            {programmeItems.slice(0, 4).map((item, index) => (
              <ProgrammeCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* ================= CENTER IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="
              relative mx-auto
              w-full max-w-[290px]
              sm:max-w-[320px]
              lg:max-w-none
            "
          >
            {/* Outer glow */}
            <div
              className="
                absolute inset-8
                rounded-full
                bg-[#0263CC]/15
                blur-[55px]
              "
            />

            {/* Decorative ring */}
            <div
              className="
                absolute inset-5
                rounded-full
                border border-[#0263CC]/10
              "
            />

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/fmge/programme-includes.png"
                alt="Medico Yatra FMGE NExT coaching programme"
                width={500}
                height={600}
                priority={false}
                className="
                  mx-auto
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_25px_35px_rgba(7,26,73,0.16)]
                "
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="
                absolute right-0 top-12 z-20
                hidden rounded-2xl
                border border-white/80
                bg-white/95
                px-4 py-3
                shadow-[0_15px_35px_rgba(7,26,73,0.12)]
                backdrop-blur
                sm:block
              "
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
                  <GraduationCap size={16} />
                </span>

                <div>
                  <p className="text-[11px] font-bold text-[#071A49]">
                    Year-wise
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Structured Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="
                absolute bottom-12 left-0 z-20
                hidden rounded-2xl
                border border-white/80
                bg-white/95
                px-4 py-3
                shadow-[0_15px_35px_rgba(7,26,73,0.12)]
                backdrop-blur
                sm:block
              "
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#02A7BB]/10 text-[#02A7BB]">
                  <ClipboardCheck size={16} />
                </span>

                <div>
                  <p className="text-[11px] font-bold text-[#071A49]">
                    Progress
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Track Your Preparation
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <div className="space-y-4">
            {programmeItems.slice(4, 8).map((item, index) => (
              <ProgrammeCard
                key={item.id}
                item={item}
                index={index + 4}
              />
            ))}
          </div>
        </div>

        {/* ================= MOBILE CENTER MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto mt-10
            max-w-md
            rounded-2xl
            border border-[#0263CC]/10
            bg-white/80
            p-4
            text-center
            shadow-sm
            lg:hidden
          "
        >
          <p className="text-xs leading-5 text-slate-500">
            Structured preparation that grows with you throughout your MBBS
            journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}