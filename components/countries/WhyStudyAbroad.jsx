"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  WalletCards,
  Plane,
  BriefcaseBusiness,
  UserRoundCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const BENEFITS = [
  {
    id: 1,
    icon: Globe2,
    title: "Global Recognition",
    description:
      "Earn a degree recognized worldwide and build a career with international opportunities.",
    accent: "blue",
    tag: "Global",
  },
  {
    id: 2,
    icon: WalletCards,
    title: "Affordable Education",
    description:
      "Access quality medical education at competitive tuition fees without compromising your future.",
    accent: "green",
    tag: "Affordable",
  },
  {
    id: 3,
    icon: Plane,
    title: "Better Exposure",
    description:
      "Experience new cultures, modern healthcare systems and gain valuable international exposure.",
    accent: "purple",
    tag: "Experience",
  },
  {
    id: 4,
    icon: BriefcaseBusiness,
    title: "Career Opportunities",
    description:
      "Unlock wider career possibilities and prepare yourself for a globally connected medical profession.",
    accent: "orange",
    tag: "Career",
  },
  {
    id: 5,
    icon: UserRoundCheck,
    title: "Expert Guidance",
    description:
      "Get end-to-end support from choosing a university to admission, visa and beyond.",
    accent: "cyan",
    tag: "Support",
  },
];

const accentStyles = {
  blue: {
    icon:
      "bg-[#0263CC]/10 text-[#0263CC] ring-[#0263CC]/10",
    glow: "bg-[#0263CC]/10",
    line: "#0263CC",
  },
  green: {
    icon:
      "bg-emerald-50 text-emerald-500 ring-emerald-100",
    glow: "bg-emerald-400/10",
    line: "#10B981",
  },
  purple: {
    icon:
      "bg-violet-50 text-violet-500 ring-violet-100",
    glow: "bg-violet-400/10",
    line: "#8B5CF6",
  },
  orange: {
    icon:
      "bg-orange-50 text-orange-500 ring-orange-100",
    glow: "bg-orange-400/10",
    line: "#F97316",
  },
  cyan: {
    icon:
      "bg-cyan-50 text-cyan-500 ring-cyan-100",
    glow: "bg-cyan-400/10",
    line: "#06B6D4",
  },
};

export default function WhyStudyAbroad() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-24 lg:py-10">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Top left glow */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-[110px]"
        />

        {/* Bottom right glow */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#02A7BB]/10 blur-[120px]"
        />

        {/* =====================================================
            DECORATIVE SVG ORBIT
        ====================================================== */}

        <svg
          className="absolute left-1/2 top-20 hidden h-[520px] w-[1200px] -translate-x-1/2 opacity-[0.08] lg:block"
          viewBox="0 0 1200 520"
          fill="none"
        >
          <defs>
            <pattern
              id="benefitDots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.4"
                fill="#0263CC"
              />
            </pattern>
          </defs>

          {/* Abstract world shape */}

          <path
            d="M190 235
               C240 170 320 155 390 185
               C450 210 485 160 550 175
               C620 190 650 230 715 210
               C780 190 820 150 890 175
               C950 195 1000 240 985 285
               C965 330 910 325 865 350
               C810 380 770 415 705 395
               C640 375 610 335 545 345
               C480 355 450 395 380 375
               C315 355 285 320 230 325
               C180 330 145 295 160 260
               C168 250 178 242 190 235Z"
            fill="url(#benefitDots)"
          />

          {/* Orbit */}

          <motion.ellipse
            cx="600"
            cy="285"
            rx="490"
            ry="130"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="5 10"
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
              duration: 2.5,
            }}
          />

          {/* Animated route */}

          <motion.path
            d="M150 310 C340 170 520 180 690 280 C820 355 1000 320 1080 210"
            stroke="#02A7BB"
            strokeWidth="2"
            strokeDasharray="6 10"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 3,
              delay: 0.4,
            }}
          />

          {/* Location dots */}

          {[
            [150, 310],
            [370, 195],
            [690, 280],
            [880, 330],
            [1080, 210],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={index}
              cx={cx}
              cy={cy}
              r="5"
              fill="#0263CC"
              animate={{
                r: [4, 7, 4],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.35,
              }}
            />
          ))}
        </svg>

      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADING
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-[#F4F9FF] px-4 py-2">

            <Sparkles className="h-4 w-4 text-[#0263CC]" />

            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0263CC]">
              Why Study Abroad?
            </span>

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">

            Your Future,

            <span className="bg-gradient-to-r from-[#0263CC] via-[#1876E5] to-[#02A7BB] bg-clip-text text-transparent">
              {" "}
              No Boundaries
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Studying medicine abroad can open doors to global education,
            diverse experiences and exciting opportunities for your medical
            career.
          </p>

        </motion.div>

        {/* =======================================================
            BENEFIT CARDS
        ======================================================== */}

        <div className="relative mt-12 lg:mt-14">

          {/* Desktop connecting line */}

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[58px] hidden h-px bg-gradient-to-r from-transparent via-[#0263CC]/15 to-transparent lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                index={index}
              />
            ))}

          </div>

        </div>

        {/* =======================================================
            BOTTOM TRUST MESSAGE
        ======================================================== */}

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
            delay: 0.2,
            duration: 0.6,
          }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-2 text-center sm:flex-row"
        >

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#02A7BB]" />

            <span className="text-sm font-semibold text-slate-500">
              From choosing your destination to starting your journey
            </span>

          </div>

          <span className="hidden text-slate-300 sm:block">
            •
          </span>

          <span className="text-sm font-bold text-[#0263CC]">
            We're with you at every step.
          </span>

        </motion.div>

      </div>

    </section>
  );
}

/* ===============================================================
   BENEFIT CARD
================================================================ */

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon;
  const style = accentStyles[benefit.accent];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative"
    >

      {/* Glow */}

      <div
        className={`pointer-events-none absolute -inset-1 rounded-[27px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${style.glow}`}
      />

      {/* Card */}

      <div className="relative flex h-full min-h-[265px] flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,58,105,.06)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#0263CC]/15 group-hover:shadow-[0_25px_50px_rgba(2,99,204,.12)] sm:p-6">

        {/* Top decorative line */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.08 + 0.3,
            duration: 0.5,
          }}
          className="absolute left-5 right-5 top-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] opacity-0 transition-opacity group-hover:opacity-100"
        />

        {/* Icon + number */}

        <div className="flex items-start justify-between">

          <motion.div
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.08,
            }}
            transition={{
              duration: 0.4,
            }}
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ring-8 ${style.icon}`}
          >

            <Icon className="h-7 w-7" />

            {/* Icon pulse */}

            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="absolute inset-0 rounded-2xl border border-current"
            />

          </motion.div>

          {/* Number */}

          <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-[#0263CC]/10">
            0{benefit.id}
          </span>

        </div>

        {/* Tag */}

        <div className="mt-6">

          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0263CC]">
            {benefit.tag}
          </span>

        </div>

        {/* Title */}

        <h3 className="mt-2 text-lg font-black leading-tight text-[#0B1B3A]">
          {benefit.title}
        </h3>

        {/* Description */}

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
          {benefit.description}
        </p>

        {/* Bottom */}

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <span className="text-[11px] font-semibold text-slate-400">
            MedicoYatra
          </span>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F9FF] text-[#0263CC] transition-colors group-hover:bg-[#0263CC] group-hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>

        </div>

      </div>

    </motion.div>
  );
}