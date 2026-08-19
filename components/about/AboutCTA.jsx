"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  Plane,
  Sparkles,
} from "lucide-react";

const reassurance = [
  "Free counselling",
  "No pressure",
  "No false promises",
];

export default function AboutCTA() {
  return (
    <section
      id="about-cta"
      className="relative overflow-hidden bg-[#061c34] py-10 sm:py-12 lg:py-10"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[-160px] h-[500px] w-[500px] rounded-full bg-[#0263CC]/25 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-[#02A7BB]/15 blur-[140px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-[280px] w-[280px] rounded-full bg-[#69dce5]/5 blur-[110px]" />

      {/* =========================================================
          GRID
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            JOURNEY PATH DECORATION
        ======================================================== */}

        <div className="pointer-events-none absolute left-[-10%] right-[-10%] top-[22%] hidden lg:block">
          <svg
            viewBox="0 0 1400 260"
            className="h-[260px] w-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
          >
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
                amount: 0.3,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              d="M20 210 C210 30 310 260 500 130 C690 0 760 240 950 115 C1090 20 1240 80 1380 35"
              stroke="url(#ctaPath)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
              opacity="0.3"
            />

            <defs>
              <linearGradient
                id="ctaPath"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#0263CC" />
                <stop offset="55%" stopColor="#02A7BB" />
                <stop offset="100%" stopColor="#69dce5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* =======================================================
            MAIN CTA
        ======================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] px-6 py-12 text-center backdrop-blur-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* =====================================================
              FLOATING DECORATIONS
          ====================================================== */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[7%] top-[14%] hidden sm:block"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#69dce5]">
              <Sparkles size={16} />
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [8, -8, 8],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] bottom-[16%] hidden sm:block"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#69dce5]">
              <Plane size={16} />
            </div>
          </motion.div>

          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <div className="relative inline-flex items-center gap-2 rounded-full border border-[#69dce5]/15 bg-[#02A7BB]/8 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69dce5]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#69dce5]">
              Your next step
            </span>
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <h2 className="relative mx-auto mt-7 max-w-[900px] text-[38px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[66px]">
            Let's talk —
            <br />

            <span className="text-[#69dce5]">
              honestly —
            </span>

            <br />

            about your healthcare career.
          </h2>

          {/* =====================================================
              SUBTEXT
          ====================================================== */}

          <p className="relative mx-auto mt-7 max-w-[650px] text-[14px] leading-7 text-white/50 sm:text-[16px] sm:leading-8">
            Free counselling, no pressure, no false promises.
            <br className="hidden sm:block" />
            Just a clear, personalised plan.
          </p>

          {/* =====================================================
              REASSURANCE PILLS
          ====================================================== */}

          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-2">
            {reassurance.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3.5 py-2"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#02A7BB]/15">
                  <Check
                    size={9}
                    className="text-[#69dce5]"
                  />
                </span>

                <span className="text-[10px] font-medium text-white/55">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* =====================================================
              ACTIONS
          ====================================================== */}

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Primary */}

            <button
              type="button"
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-[#09213d] shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#69dce5] sm:w-auto"
            >
              <Phone size={16} />

              Book Free Counselling

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* WhatsApp */}

            <button
              type="button"
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/12 bg-white/5 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#69dce5]/30 hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle
                size={17}
                className="text-[#69dce5]"
              />

              WhatsApp Us
            </button>
          </div>

          {/* =====================================================
              SMALL TRUST NOTE
          ====================================================== */}

          <div className="relative mt-8 flex items-center justify-center gap-2">
            <span className="h-px w-5 bg-white/10" />

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
              One conversation can make the path clearer
            </p>

            <span className="h-px w-5 bg-white/10" />
          </div>
        </motion.div>

        {/* =======================================================
            BOTTOM JOURNEY STATEMENT
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
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#69dce5]" />
          </div>

          <p className="max-w-[600px] text-xs leading-5 text-white/25">
            From the first question to the professional journey ahead,
            we're here to help you understand what comes next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}