"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const TRUST_POINTS = [
  {
    icon: Sparkles,
    title: "Personalized Guidance",
    description: "Advice based on your goals",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From selection to admission",
  },
  {
    icon: UsersRound,
    title: "Student-First Approach",
    description: "Your future comes first",
  },
];

const STATS = [
  {
    icon: UsersRound,
    number: "25+",
    label: "Expert Counsellors",
    accent: "blue",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years of Experience",
    accent: "green",
  },
  {
    icon: GraduationCap,
    number: "15,000+",
    label: "Students Guided",
    accent: "blue",
  },
  {
    icon: Globe2,
    number: "30+",
    label: "Countries Covered",
    accent: "cyan",
  },
  {
    icon: HeartHandshake,
    number: "98%",
    label: "Student Satisfaction",
    accent: "orange",
  },
];

export default function CounsellorsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-white to-[#EEF7FF]">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Blue glow */}

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
          className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-[#0263CC]/10 blur-[120px]"
        />

        {/* Cyan glow */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#02A7BB]/10 blur-[130px]"
        />

        {/* =====================================================
            DECORATIVE WORLD SVG
        ====================================================== */}

        <svg
          className="absolute right-0 top-0 hidden h-[580px] w-[760px] opacity-[0.10] lg:block"
          viewBox="0 0 760 580"
          fill="none"
        >
          <defs>
            <pattern
              id="counsellorDots"
              width="11"
              height="11"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#0263CC"
              />
            </pattern>
          </defs>

          {/* Abstract world */}

          <path
            d="M170 180
            C220 115 295 120 350 150
            C410 180 430 130 495 145
            C555 160 590 205 650 190
            C710 175 750 210 745 265
            C740 320 690 330 650 350
            C600 375 575 420 510 410
            C450 400 420 360 360 375
            C295 390 260 350 210 345
            C155 340 115 300 125 250
            C130 220 145 200 170 180Z"
            fill="url(#counsellorDots)"
          />

          {/* Globe orbit */}

          <motion.ellipse
            cx="505"
            cy="265"
            rx="220"
            ry="105"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="5 9"
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

          {/* Travel route */}

          <motion.path
            d="M190 330 C300 190 390 165 500 230 C580 280 650 255 700 175"
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
              duration: 2.8,
              delay: 0.3,
            }}
          />

          {/* Location dots */}

          {[
            [190, 330],
            [350, 190],
            [500, 230],
            [700, 175],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={index}
              cx={cx}
              cy={cy}
              r="5"
              fill="#0263CC"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            />
          ))}

          {/* Globe */}

          <motion.circle
            cx="600"
            cy="265"
            r="125"
            stroke="#0263CC"
            strokeWidth="1"
            opacity="0.4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "600px 265px",
            }}
          />

          <ellipse
            cx="600"
            cy="265"
            rx="60"
            ry="125"
            stroke="#0263CC"
            opacity="0.25"
          />

          <ellipse
            cx="600"
            cy="265"
            rx="125"
            ry="50"
            stroke="#0263CC"
            opacity="0.25"
          />
        </svg>

      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:px-8 lg:pb-40">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <motion.nav
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-8 flex items-center gap-1.5 text-xs font-semibold sm:mb-10 sm:text-sm"
          aria-label="Breadcrumb"
        >

          <Link
            href="/"
            className="text-[#0263CC] transition hover:text-[#014FA8]"
          >
            Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />

          <span className="text-slate-500">
            Counsellors
          </span>

        </motion.nav>

        {/* =====================================================
            HERO GRID
        ====================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 xl:grid-cols-[0.88fr_1.12fr]">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="relative z-20 max-w-2xl">

            {/* Trust badge */}

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
                duration: 0.55,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3 py-2 shadow-[0_8px_25px_rgba(2,99,204,.06)] backdrop-blur"
            >

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0263CC]/10">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0263CC]" />
              </span>

              <span className="text-[11px] font-black text-[#0263CC] sm:text-xs">
                India's Most Trusted Counselling Team
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="max-w-[650px] text-[38px] font-black leading-[1.05] tracking-[-0.03em] text-[#0B1B3A] sm:text-5xl lg:text-[50px] xl:text-[58px]"
            >

              Expert Counsellors,

              <br />

              Guiding Your

              <br />

              <span className="bg-gradient-to-r from-[#0263CC] via-[#1876E5] to-[#02A7BB] bg-clip-text text-transparent">
                Medical Future
              </span>

            </motion.h1>

            {/* Description */}

            <motion.p
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
                delay: 0.2,
              }}
              className="mt-5 max-w-[540px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7"
            >
              Our experienced counsellors are dedicated to helping
              you choose the right country, university and pathway
              to achieve your dream of studying medicine abroad.
            </motion.p>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-7 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3">

              {TRUST_POINTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-3 shadow-[0_8px_25px_rgba(2,99,204,.05)] backdrop-blur-md transition hover:border-[#0263CC]/15 hover:bg-white"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/10 text-[#0263CC] transition group-hover:bg-[#0263CC] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-[11px] font-black leading-tight text-[#0B1B3A]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-slate-400">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* =================================================
                ACTIONS
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
                delay: 0.55,
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >

              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-6 text-sm font-bold text-white shadow-[0_12px_25px_rgba(2,99,204,.2)] transition hover:-translate-y-0.5 hover:bg-[#0155B5]"
              >
                Talk to a Counsellor

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#our-counsellors"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0263CC]/20 bg-white px-6 text-sm font-bold text-[#0263CC] transition hover:-translate-y-0.5 hover:border-[#0263CC]/40 hover:bg-[#F7FBFF]"
              >
                Meet Our Team

                <UsersRound className="h-4 w-4" />
              </Link>

            </motion.div>

          </div>

          {/* ===================================================
              RIGHT TEAM VISUAL
          ==================================================== */}

       <div className="relative min-h-[330px] sm:min-h-[430px] lg:min-h-[620px]">

            {/* Main glow */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/10 blur-[80px] sm:h-[420px] sm:w-[420px]"
            />

            {/* =================================================
                DECORATIVE CIRCLE
            ================================================== */}

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-[45%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0263CC]/10 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
            >

              <div className="absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-[#0263CC] shadow-[0_0_20px_rgba(2,99,204,.5)]" />

              <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#02A7BB]" />

            </motion.div>

            {/* =================================================
                TEAM IMAGE
            ================================================== */}

           <motion.div
    initial={{
      opacity: 0,
      scale: 0.94,
      y: 25,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 0.9,
      delay: 0.15,
      ease: "easeOut",
    }}
    className="absolute bottom-15 left-1/2 z-10 w-[100%] max-w-[500px] -translate-x-1/2 sm:w-[92%] sm:max-w-[600px] lg:w-[115%] lg:max-w-[720px] xl:w-[120%]"
  >
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/counsellors/counsellor-team.png"
        alt="MedicoYatra expert counsellor team"
        width={1000}
        height={700}
        priority
        className="h-auto w-full object-contain drop-shadow-[0_25px_30px_rgba(2,40,90,.14)]"
      />
    </motion.div>
  </motion.div>

            {/* =================================================
                FLOATING PLANE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 2, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] top-[7%] z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white/90 text-[#0263CC] shadow-[0_10px_30px_rgba(2,99,204,.12)] backdrop-blur sm:right-[8%] sm:h-14 sm:w-14"
            >
              <Plane className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>

            {/* =================================================
                FLOATING UNIVERSITY
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute left-[3%] top-[25%] z-20 hidden items-center gap-2 rounded-2xl border border-white bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(2,99,204,.10)] backdrop-blur sm:flex"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0263CC]/10">
                <GraduationCap className="h-4 w-4 text-[#0263CC]" />
              </div>

              <div>
                <p className="text-[10px] font-black text-[#0B1B3A]">
                  30+ Countries
                </p>

                <p className="text-[8px] text-slate-400">
                  Global Guidance
                </p>
              </div>

            </motion.div>

            {/* =================================================
                FLOATING LOCATION
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[25%] right-[2%] z-20 hidden items-center gap-2 rounded-2xl border border-white bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(2,99,204,.10)] backdrop-blur sm:flex"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#02A7BB]/10">
                <MapPin className="h-4 w-4 text-[#02A7BB]" />
              </div>

              <div>
                <p className="text-[10px] font-black text-[#0B1B3A]">
                  Global Reach
                </p>

                <p className="text-[8px] text-slate-400">
                  Your Journey Starts Here
                </p>
              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* =========================================================
          STATS PANEL
      ========================================================== */}

     <div
  id="counsellor-stats"
  className="relative z-30 bottom-20 mt-[-20px] lg:absolute lg:bottom-[-1px] lg:left-0 lg:right-0"
>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
            }}
            transition={{
              duration: 0.7,
            }}
            className="overflow-hidden rounded-[24px] border border-white/80 bg-white/95 p-2.5 shadow-[0_20px_60px_rgba(2,50,100,.12)] backdrop-blur-xl sm:rounded-[28px] sm:p-4 lg:p-5"
          >

            <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 lg:grid-cols-5 lg:divide-y-0">

              {STATS.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                   className={`flex items-center gap-2.5 p-3 sm:gap-3 sm:p-4 lg:justify-center lg:p-3 xl:gap-4 ${
  index === 4
    ? "col-span-2 justify-center lg:col-span-1"
    : ""
}`}
                  >

                    {/* Icon */}

                    <div
                     className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${
                        stat.accent === "green"
                          ? "bg-emerald-50 text-emerald-500"
                          : stat.accent === "cyan"
                            ? "bg-cyan-50 text-cyan-500"
                            : stat.accent === "orange"
                              ? "bg-orange-50 text-orange-500"
                              : "bg-[#0263CC]/10 text-[#0263CC]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">

                     <p className="text-[17px] font-black leading-none text-[#0B1B3A] sm:text-xl">
                        {stat.number}
                      </p>

                      <p className="mt-1 max-w-[85px] text-[9px] font-semibold leading-[1.35] text-slate-500 sm:text-[10px]">
                        {stat.label}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}