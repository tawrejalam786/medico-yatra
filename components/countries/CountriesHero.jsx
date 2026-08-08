"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  GraduationCap,
  Landmark,
  MessageCircle,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Countries",
    icon: Globe2,
  },
  {
    number: "500+",
    label: "Universities",
    icon: Landmark,
  },
  {
    number: "5000+",
    label: "Students Guided",
    icon: Users,
  },
];

export default function CountriesHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EDF6FF] lg:min-h-[700px]">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Top glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#4DA5EC]/15 blur-[100px]"
        />

        {/* Bottom glow */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-[#02A7BB]/10 blur-[120px]"
        />

        {/* =====================================================
            WORLD DOT MAP
        ====================================================== */}

        <svg
          viewBox="0 0 1200 600"
          className="absolute left-1/2 top-[80px] hidden h-[500px] w-[1000px] -translate-x-1/2 opacity-[0.09] lg:block"
          fill="none"
        >

          <defs>

            <pattern
              id="worldDots"
              width="9"
              height="9"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#0263CC"
              />
            </pattern>

            <filter id="softGlow">
              <feGaussianBlur
                stdDeviation="2"
                result="blur"
              />
            </filter>

          </defs>

          {/* Abstract world silhouette */}

          <path
            d="M110 190
               C150 140 230 120 300 150
               C350 165 380 125 430 135
               C470 145 495 185 550 180
               C620 170 650 120 720 130
               C780 140 805 180 850 185
               C920 195 970 160 1030 185
               C1080 205 1110 250 1070 275
               C1010 310 950 290 900 320
               C850 350 830 400 770 395
               C710 390 680 350 620 360
               C560 370 520 410 455 390
               C400 375 370 335 310 345
               C250 355 210 325 180 285
               C150 250 120 235 110 190Z"
            fill="url(#worldDots)"
          />

          {/* Dotted travel route */}

          <motion.path
            d="M290 315 C420 190 600 190 770 275"
            stroke="#0263CC"
            strokeWidth="2"
            strokeDasharray="6 9"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />

          {/* Moving plane */}

          <motion.g
            initial={{
              offsetDistance: "0%",
            }}
            animate={{
              offsetDistance: "100%",
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath:
                'path("M290 315 C420 190 600 190 770 275")',
            }}
          >
            <Plane
              size={22}
              className="fill-[#0263CC] text-[#0263CC]"
            />
          </motion.g>

        </svg>

        {/* Mobile decorative circles */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-28 top-24 h-64 w-64 rounded-full border border-dashed border-[#0263CC]/10 lg:hidden"
        />

      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid min-h-[680px] items-center gap-8 py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-2 lg:py-28">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-20"
          >

            {/* Breadcrumb */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="mb-8 flex items-center gap-2 text-sm"
            >

              <Link
                href="/"
                className="font-semibold text-[#0263CC] transition hover:text-[#014B9D]"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4 text-slate-400" />

              <span className="font-medium text-slate-500">
                Countries
              </span>

            </motion.div>

            {/* Eyebrow */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">

              <Sparkles className="h-4 w-4 text-[#0263CC]" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0263CC]">
                Explore Global Opportunities
              </span>

            </div>

            {/* Heading */}

            <h1 className="max-w-[650px] text-4xl font-black leading-[1.05] tracking-tight text-[#0B1B3A] sm:text-5xl lg:text-[58px]">

              Study Medicine in

              <span className="mt-2 block bg-gradient-to-r from-[#0263CC] via-[#1876E5] to-[#02A7BB] bg-clip-text text-transparent">
                Top Countries
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">

              Explore leading destinations for MBBS abroad with
              internationally recognized universities, quality education,
              global exposure, and a brighter medical career.

            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="#countries"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#0263CC] px-7 font-bold text-white shadow-[0_15px_30px_rgba(2,99,204,.22)] transition hover:-translate-y-1 hover:bg-[#0155B5]"
              >

                Explore Countries

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#0263CC]/30 bg-white/80 px-7 font-bold text-[#0263CC] backdrop-blur transition hover:-translate-y-1 hover:border-[#0263CC] hover:bg-white"
              >

                Talk to Expert

                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />

              </Link>

            </div>

            {/* Trust line */}

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC]/10">
                  <GraduationCap className="h-4 w-4 text-[#0263CC]" />
                </div>

                NMC-recognised options

              </div>

              <div className="hidden h-5 w-px bg-slate-200 sm:block" />

              <div className="text-sm font-medium text-slate-600">
                Trusted by 5000+ students
              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative flex min-h-[420px] items-center justify-center lg:min-h-[540px]"
          >

            {/* Large glow */}

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/15 blur-[70px] sm:h-96 sm:w-96" />

            {/* Rotating ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#0263CC]/20 sm:h-[390px] sm:w-[390px] lg:h-[440px] lg:w-[440px]"
            />

            {/* Globe */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >

              <Image
                src="/images/countries-hero-globe.png"
                alt="Study medicine abroad"
                width={620}
                height={620}
                priority
                className="w-[310px] object-contain drop-shadow-[0_30px_35px_rgba(2,99,204,.20)] sm:w-[400px] lg:w-[500px]"
              />

            </motion.div>

            {/* ===================================================
                FLOATING STATS
            ==================================================== */}

            <div className="absolute right-0 top-6 z-20 hidden w-[180px] space-y-3 sm:block lg:right-0 lg:top-12">

              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.15,
                    }}
                    whileHover={{
                      x: -5,
                      scale: 1.03,
                    }}
                    className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_15px_35px_rgba(2,99,204,.10)] backdrop-blur-xl"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/10">
                        <Icon className="h-5 w-5 text-[#0263CC]" />
                      </div>

                      <div>
                        <p className="text-lg font-black text-[#0B1B3A]">
                          {item.number}
                        </p>

                        <p className="text-[11px] font-semibold text-slate-500">
                          {item.label}
                        </p>
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* Floating plane */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-4 top-14 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl sm:left-8 lg:left-0 lg:top-16"
            >

              <Plane className="h-6 w-6 rotate-[-15deg] text-[#0263CC]" />

            </motion.div>

            {/* Mobile stats */}

            <div className="absolute -bottom-2 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center gap-2 px-2 sm:hidden">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-1 flex-col items-center rounded-xl border border-white bg-white/90 px-2 py-3 shadow-lg backdrop-blur"
                >

                  <span className="text-base font-black text-[#0263CC]">
                    {item.number}
                  </span>

                  <span className="mt-0.5 truncate text-[9px] font-semibold text-slate-500">
                    {item.label}
                  </span>

                </div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM WAVE
      ========================================================== */}

      <svg
        className="absolute bottom-[-1px] left-0 w-full"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 65C180 15 330 15 510 48C690 80 830 88 1010 53C1190 18 1300 20 1440 48V90H0V65Z"
          fill="white"
        />
      </svg>

    </section>
  );
}