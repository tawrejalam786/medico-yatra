"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Globe2,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const TRENDING_TOPICS = [
  "MBBS Abroad",
  "FMGE / NExT Preparation",
  "Best Medical Universities",
  "Study in Kazakhstan",
  "USMLE for International Students",
];

const FLOATING_ICONS = [
  {
    icon: BookOpen,
    className: "left-[8%] top-[20%]",
  },
  {
    icon: Globe2,
    className: "right-[13%] top-[16%]",
  },
  {
    icon: Lightbulb,
    className: "right-[8%] bottom-[24%]",
  },
];

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] mt-16">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft radial glows */}

        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#4DA5EC]/10 blur-[100px]" />

        <div className="absolute right-[-150px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#0263CC]/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[35%] h-[400px] w-[500px] rounded-full bg-[#02A7BB]/[0.06] blur-[120px]" />

        {/* Subtle dot pattern */}

        <div
          className="absolute left-0 top-0 h-[320px] w-[360px] opacity-[0.28]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0263CC 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(135deg, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(135deg, black, transparent 75%)",
          }}
        />

        {/* Right dot pattern */}

        <div
          className="absolute right-0 top-0 hidden h-[380px] w-[420px] opacity-[0.18] lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0263CC 1px, transparent 1px)",
            backgroundSize: "13px 13px",
            maskImage:
              "linear-gradient(225deg, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(225deg, black, transparent 75%)",
          }}
        />

        {/* =================================================
            ANIMATED SVG ROUTES
        ================================================== */}

        <svg
          className="absolute right-[20%] top-[55px] hidden h-[300px] w-[480px] opacity-[0.14] lg:block"
          viewBox="0 0 480 300"
          fill="none"
        >
          <motion.path
            d="M10 190C90 90 155 90 225 140C290 188 355 160 470 55"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="7 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="225"
            cy="140"
            r="5"
            fill="#0263CC"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="355"
            cy="160"
            r="4"
            fill="#02A7BB"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </svg>

        {/* Animated orbit */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[7%] top-[90px] hidden h-[380px] w-[380px] rounded-full border border-dashed border-[#0263CC]/10 lg:block"
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-0 pt-5 sm:px-6 sm:pt-7 lg:px-8">

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
            duration: 0.5,
          }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium sm:text-sm"
        >
          <Link
            href="/"
            className="text-[#0263CC] transition-colors hover:text-[#014A99]"
          >
            Home
          </Link>

          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />

          <span className="text-slate-500">
            Blogs
          </span>
        </motion.nav>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="grid min-h-[570px] items-center gap-8 py-10 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:py-8">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 max-w-2xl">

            {/* Eyebrow */}

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
                delay: 0.05,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3.5 py-2 shadow-[0_6px_25px_rgba(2,99,204,.06)] backdrop-blur-md"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF6FF]">
                <BookOpen className="h-3.5 w-3.5 text-[#0263CC]" />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
                MedicoYatra Blogs
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-[650px] text-[30px] font-black leading-[1.06] tracking-[-0.045em] text-[#0A1B44] sm:text-5xl lg:text-[58px] xl:text-[64px]"
            >
              Knowledge Today,
              <br />

              <span className="bg-gradient-to-r from-[#0263CC] via-[#176FE0] to-[#02A7BB] bg-clip-text text-transparent">
                Success Tomorrow
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
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
                delay: 0.18,
              }}
              className="mt-5 max-w-[560px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]"
            >
              Expert insights, study abroad guides, medical career tips
              and everything you need to make smarter decisions for your
              future.
            </motion.p>

            {/* =================================================
                SEARCH
            ================================================== */}

             <motion.form
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
    delay: 0.25,
  }}
  onSubmit={(e) => e.preventDefault()}
  className="
    mt-6
    flex w-full max-w-[570px] items-center
    rounded-xl sm:rounded-2xl
    border border-slate-200/80
    bg-white
    p-1
    sm:p-1.5
    shadow-[0_12px_35px_rgba(20,70,130,.09)]
    transition-all
    focus-within:border-[#0263CC]/30
    focus-within:shadow-[0_15px_45px_rgba(2,99,204,.15)]
  "
>
  {/* Search Icon */}
  <Search
    className="
      ml-2.5
      h-[18px] w-[18px]
      shrink-0
      text-slate-400
      sm:ml-3
      sm:h-5 sm:w-5
    "
  />

  {/* Input */}
  <input
    type="search"
    placeholder="Search blogs, topics, countries..."
    aria-label="Search blogs"
    className="
      min-w-0
      flex-1
      bg-transparent
      px-2
      py-2.5
      text-[13px]
      leading-5
      text-[#0A1B44]
      outline-none
      placeholder:text-slate-400
      sm:px-3
      sm:py-3
      sm:text-[15px]
    "
  />

  {/* Search Button */}
  <button
    type="submit"
    aria-label="Search"
    className="
      flex
      h-10 w-10
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-gradient-to-br
      from-[#0263CC]
      to-[#0758C7]
      text-white
      shadow-md
      transition-all
      hover:scale-[1.03]
      hover:shadow-lg
      active:scale-95
      sm:h-12
      sm:w-12
      sm:rounded-xl
    "
  >
    <Search className="h-[17px] w-[17px] sm:h-5 sm:w-5" />
  </button>
</motion.form>

            {/* Popular topics */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-4 flex flex-wrap items-center gap-2"
            >
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Popular:
              </span>

              {["MBBS Abroad", "FMGE", "USMLE"].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className="rounded-full border border-[#0263CC]/10 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-[#0263CC] transition-all hover:border-[#0263CC]/20 hover:bg-[#EEF6FF]"
                >
                  {topic}
                </button>
              ))}
            </motion.div>

          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[400px] lg:min-h-[500px]">

            {/* Main visual glow */}

            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/10 blur-[70px] sm:h-[360px] sm:w-[360px]" />

            {/* Floating icon bubbles */}

            {FLOATING_ICONS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: 0.5 + index * 0.15,
                    },
                    scale: {
                      duration: 0.5,
                      delay: 0.5 + index * 0.15,
                    },
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute ${item.className} z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/90 text-[#0263CC] shadow-[0_12px_35px_rgba(2,99,204,.13)] backdrop-blur-md sm:flex lg:h-14 lg:w-14`}
                >
                  <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </motion.div>
              );
            })}

            {/* Decorative rings */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[250px] w-[250px] rounded-full border border-[#0263CC]/10 border-dashed sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
            />

            {/* Image card */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.2,
                },
                scale: {
                  duration: 0.8,
                  delay: 0.2,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative z-10 h-[280px] w-full max-w-[520px] sm:h-[370px] lg:h-[440px]"
            >
              <Image
                src="/images/blog-hero.png"
                alt="Medical education blogs and study abroad resources"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 520px, 520px"
                className="object-contain drop-shadow-[0_25px_35px_rgba(2,66,150,.16)]"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* =====================================================
          TRENDING BAR
      ====================================================== */}

      <div className="relative z-30 mx-auto -mt-2 max-w-7xl px-4 pb-6 sm:px-6 lg:-mt-1 lg:px-8 lg:pb-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_15px_50px_rgba(15,65,130,.10)] backdrop-blur-xl sm:p-4"
        >

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

            {/* Trending label */}

            <div className="flex shrink-0 items-center gap-2 px-1 sm:px-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>

              <span className="text-sm font-black text-[#0A1B44]">
                Trending Now
              </span>

              <span className="hidden h-5 w-px bg-slate-200 lg:block" />

            </div>

            {/* Topics */}

            <div className="no-scrollbar flex min-w-0 gap-2 overflow-x-auto pb-1 lg:pb-0">

              {TRENDING_TOPICS.map((topic, index) => (
                <Link
                  href="/blog"
                  key={topic}
                  className={`group flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-semibold transition-all sm:text-xs ${
                    index === 0
                      ? "border-[#0263CC]/15 bg-[#F2F7FF] text-[#0263CC]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#0263CC]/20 hover:bg-[#F2F7FF] hover:text-[#0263CC]"
                  }`}
                >
                  {index === 0 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />
                  )}

                  {topic}

                  <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}

            </div>

            {/* View all */}

            <Link
              href="/blog"
              className="hidden shrink-0 items-center gap-1 px-2 text-xs font-bold text-[#0263CC] transition-colors hover:text-[#014A99] lg:flex"
            >
              View All

              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

          </div>

        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <svg
        className="absolute bottom-0 left-0 h-8 w-full sm:h-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 48C180 20 300 20 480 42C660 64 770 70 960 42C1140 16 1260 18 1440 40V80H0V48Z"
          fill="white"
        />
      </svg>
    </section>
  );
}