"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Headphones,
  Map,
  Globe,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Users,
  BadgeCheck,
} from "lucide-react";



const ICONS = {
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Headphones,
  Map,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Users,
  Globe,
  BadgeCheck,
  // BookOpen,
  // Building2,
  // CheckCircle,
  // Phone,
  // Mail,
  // Calendar,
  // HeartPulse,
  // Award,
  // Star,
  // Plane,
};

// ============================================================
// FALLBACK ICON
// Agar JSON me icon missing / galat naam hua
// ============================================================

function CircleFallback({ className = "h-4 w-4" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-current ${className}`}
    />
  );
}

// ============================================================
// DYNAMIC ICON COMPONENT
// ============================================================

function DynamicIcon({
  name,
  className = "h-4 w-4",
  ...props
}) {
  const Icon = ICONS[name] || CircleFallback;

  return <Icon className={className} {...props} />;
}

export default function MBBSHero({ data }) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F5F9FF]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(77,165,236,0.20),transparent_28%),radial-gradient(circle_at_15%_85%,rgba(2,167,187,0.08),transparent_30%),linear-gradient(135deg,#F8FBFF_0%,#EFF7FF_52%,#F8FBFF_100%)]" />

        {/* Animated blue glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0263CC]/10 blur-3xl sm:h-96 sm:w-96"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#02A7BB]/10 blur-3xl sm:h-[420px] sm:w-[420px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Decorative SVG route */}
        <svg
          className="absolute left-[32%] top-20 hidden h-64 w-72 text-[#0263CC]/20 md:block lg:left-[38%]"
          viewBox="0 0 300 220"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M10 170 C70 130,75 60,135 80 C190 98,180 165,285 40"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="7 8"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="135"
            cy="80"
            r="5"
            fill="currentColor"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </svg>

        {/* Decorative dots */}
        <div className="absolute right-[18%] top-20 hidden h-2 w-2 rounded-full bg-[#0263CC]/30 lg:block" />

        <div className="absolute right-[12%] top-32 hidden h-3 w-3 rounded-full bg-[#4DA5EC]/30 lg:block" />

        <div className="absolute left-[45%] bottom-28 hidden h-2 w-2 rounded-full bg-[#02A7BB]/30 lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="relative">
          {/* =================================================
              CONTENT + VISUAL GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-8
              py-7
              sm:gap-10
              sm:py-9
              md:gap-12
              md:py-12
              lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)]
              lg:items-center
              lg:gap-4
              lg:py-14
              xl:grid-cols-[minmax(0,1fr)_minmax(500px,0.95fr)]
              xl:gap-8
              xl:py-16
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-20 max-w-3xl">
              {/* Breadcrumb */}

              <motion.nav
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                aria-label="Breadcrumb"
                className="mb-5 flex min-w-0 items-center gap-1.5 overflow-hidden text-[10px] font-medium sm:mb-7 sm:text-xs"
              >
                <Link
                  href={data.hero.breadcrumb[0].href}
                  className="shrink-0 text-slate-500 transition-colors hover:text-[#0263CC]"
                >
                  {
                    data.hero.breadcrumb[0].label
                  }
                </Link>

                <ChevronRight className="h-3 w-3 shrink-0 text-slate-300 sm:h-3.5 sm:w-3.5" />

                <Link
                  href={data.hero.breadcrumb[1].href}
                  className="shrink-0 text-slate-500 transition-colors hover:text-[#0263CC]"
                >
                  {data.hero.breadcrumb[1].label}
                </Link>

                <ChevronRight className="h-3 w-3 shrink-0 text-slate-300 sm:h-3.5 sm:w-3.5" />

                <span className="min-w-0 truncate font-semibold text-[#0263CC]">
                  {data.hero.breadcrumb[2].label}
                </span>
              </motion.nav>

              {/* Badge */}

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
                  delay: 0.05,
                }}
                className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-2.5 py-1.5 shadow-sm backdrop-blur sm:mb-5 sm:px-3"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF3FF] text-[#0263CC]">
                  <Stethoscope className="h-3 w-3" />
                </span>

                <span className="truncate text-[9px] font-bold tracking-[0.04em] text-[#0263CC] sm:text-xs">
                  {data.hero.badge.text}
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
                className="
                  max-w-[700px]
                  text-[30px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-1.2px]
                  text-[#071A49]
                  min-[375px]:text-[32px]
                  sm:text-[40px]
                  sm:tracking-[-1.8px]
                  md:text-[46px]
                  lg:text-[43px]
                  xl:text-[54px]
                  2xl:text-[46px]
                "
              >
                {data.hero.title.line1}
                <span className="block">
                  {data.hero.title.line2}{" "}
                  <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                    {data.hero.title.highlight}
                  </span>
                </span>

                <span className="block text-[#0263CC]">
                  {data.hero.title.line3}
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
                  duration: 0.55,
                  delay: 0.2,
                }}
                className="
                  mt-4
                  max-w-[610px]
                  text-[13px]
                  leading-5
                  text-slate-600
                  sm:mt-5
                  sm:text-sm
                  sm:leading-6
                  md:text-base
                  md:leading-7
                "
              >
                {data.hero.description}
              </motion.p>

              {/* CTA */}

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
                  duration: 0.55,
                  delay: 0.28,
                }}
                className="
                  mt-6
                  grid
                  grid-cols-1
                  gap-2.5
                  min-[375px]:grid-cols-2
                  sm:flex
                  sm:flex-wrap
                  sm:gap-3
                  md:mt-7
                "
              >
                <Link
                  href={data.hero.primaryCta.href}
                  className="
                    group
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#0263CC]
                    px-5
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(2,99,204,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0759B8]
                    sm:min-h-12
                    sm:px-6
                    sm:text-sm
                  "
                >
                  {data.hero.primaryCta.label}


                  <DynamicIcon
                    name={data.hero.primaryCta.icon}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href={data.hero.secondaryCta.href}
                  className="
                    group
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#0263CC]/30
                    bg-white/80
                    px-5
                    text-xs
                    font-bold
                    text-[#0263CC]
                    backdrop-blur
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#0263CC]
                    hover:bg-white
                    sm:min-h-12
                    sm:px-6
                    sm:text-sm
                  "
                >

                  <DynamicIcon
                    name={data.hero.secondaryCta.icon}
                    className="h-4 w-4"
                  />

                  {data.hero.secondaryCta.label}
                </Link>
              </motion.div>

              {/* =================================================
                  TRUST HIGHLIGHTS
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
                  duration: 0.55,
                  delay: 0.38,
                }}
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-2
                  sm:mt-8
                  sm:grid-cols-4
                  sm:gap-0
                  md:max-w-[700px]
                "
              >
                {data.hero.highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className={`
                        flex
                        min-w-0
                        items-center
                        gap-2
                        rounded-lg
                        bg-white/40
                        px-1
                        py-1.5
                        sm:rounded-none
                        sm:bg-transparent
                        sm:px-2
                        sm:py-0
                        ${index !== data.hero.highlights.length - 1
                          ? "sm:border-r sm:border-slate-300"
                          : ""
                        }
                      `}
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#0263CC] shadow-sm ring-1 ring-[#0263CC]/10 sm:h-8 sm:w-8">
                        {/* <Icon className="h-3.5 w-3.5" /> */}
                        <DynamicIcon
                          name={Icon}
                          className="h-3.5 w-3.5"
                        />
                      </div>

                      <span className="text-[8px] font-semibold leading-3 text-slate-600 min-[375px]:text-[9px] sm:text-[10px] sm:leading-4">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[620px]
                sm:pt-4
                lg:max-w-none
                lg:pt-0
              "
            >
              {/* Visual area */}

              <div
                className="
                  relative
                  h-[350px]
                  w-full
                  min-[375px]:h-[400px]
                  sm:h-[470px]
                  md:h-[530px]
                  lg:h-[610px]
                  xl:h-[700px]
                  2xl:h-[640px]
                "
              >
                {/* Main circle */}

                <motion.div
                  animate={{
                    scale: [1, 1.025, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-2
                    left-1/2
                    aspect-square
                    w-[250px]
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-br
                    from-[#DDEEFF]
                    via-[#C9E4FF]
                    to-[#EAF8FA]
                    min-[375px]:w-[290px]
                    sm:w-[370px]
                    md:w-[430px]
                    lg:w-[500px]
                    xl:w-[580px]
                  "
                />

                {/* Outer ring */}

                <div
                  className="
                    absolute
                    bottom-2
                    left-1/2
                    aspect-square
                    w-[275px]
                    -translate-x-1/2
                    rounded-full
                    border
                    border-[#0263CC]/10
                    min-[375px]:w-[315px]
                    sm:w-[395px]
                    md:w-[455px]
                    lg:w-[530px]
                    xl:w-[610px]
                  "
                />

                {/* Inner decorative ring */}

                <div
                  className="
                    absolute
                    bottom-[45px]
                    left-1/2
                    aspect-square
                    w-[220px]
                    -translate-x-1/2
                    rounded-full
                    border
                    border-dashed
                    border-[#0263CC]/10
                    min-[375px]:w-[260px]
                    sm:w-[330px]
                    md:w-[390px]
                    lg:w-[450px]
                    xl:w-[520px]
                  "
                />

                {/* World icon */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    right-[4%]
                    top-[8%]
                    z-20
                    hidden
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/75
                    text-[#0263CC]
                    shadow-lg
                    backdrop-blur
                    sm:flex
                    lg:right-[7%]
                    lg:top-[12%]
                  "
                >
                  <Map className="h-5 w-5" />

                </motion.div>

                {/* Small floating dot */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-[8%]
                    top-[25%]
                    z-10
                    h-2
                    w-2
                    rounded-full
                    bg-[#0263CC]
                    sm:left-[12%]
                  "
                />

                {/* =================================================
                    DOCTOR IMAGE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
    absolute
    inset-x-0
    bottom-30
    z-10
    mx-auto
    h-[465px]
    w-full

    min-[375px]:h-[385px]

    sm:bottom-4
    sm:h-[455px]

    md:bottom-5
    md:h-[515px]

    lg:bottom-7
    lg:h-[590px]

    xl:bottom-40
    xl:h-[675px]
  "
                >
                  <Image
                    src={data.hero.image.src}
                    alt="Medical professionals guiding students for MBBS abroad"
                    fill
                    priority
                    sizes="
      (max-width: 374px) 100vw,
      (max-width: 639px) 100vw,
      (max-width: 767px) 90vw,
      (max-width: 1023px) 70vw,
      (max-width: 1279px) 50vw,
      45vw
    "
                    className="
      object-contain
      object-bottom
      scale-[1.15]
      min-[375px]:scale-[1.18]
      sm:scale-[1.20]
      md:scale-[1.22]
      lg:scale-[1.25]
      xl:scale-[1.20]
    "
                  />
                </motion.div>

                {/* =================================================
                    FLOATING ENQUIRY CARD
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
                    delay: 0.7,
                  }}
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    z-30
                    w-[calc(100%-24px)]
                    max-w-[340px]
                    -translate-x-1/2
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/95
                    p-3
                    shadow-[0_20px_50px_rgba(14,61,120,0.16)]
                    backdrop-blur-xl
                    sm:bottom-4
                    sm:max-w-[380px]
                    sm:p-4
                    lg:bottom-8
                    lg:left-auto
                    lg:right-0
                    lg:w-[235px]
                    lg:max-w-none
                    lg:translate-x-0
                    lg:p-4
                    xl:right-2
                    xl:w-[255px]
                    xl:p-5
                  "
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC] sm:h-10 sm:w-10">
                      <DynamicIcon
                        name={data.hero.floatingCard.icon}
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs font-extrabold leading-4 text-[#071A49] sm:text-sm sm:leading-5">
                        {data.hero.floatingCard.title}
                      </h3>

                      <p className="mt-1 text-[8px] leading-3.5 text-slate-500 sm:text-[9px] sm:leading-4">
                        {data.hero.floatingCard.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={data.hero.floatingCard.button.href}
                    className="
                      mt-3
                      flex
                      min-h-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#0263CC]
                      px-3
                      text-[10px]
                      font-bold
                      text-white
                      transition
                      hover:bg-[#0759B8]
                      sm:mt-4
                      sm:min-h-10
                      sm:text-xs
                    "
                  >
                    {data.hero.floatingCard.button.label}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <svg
        className="absolute bottom-[-1px] left-0 h-10 w-full sm:h-14 md:h-16"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 54C180 82 340 82 520 56C700 30 830 24 1000 42C1160 60 1290 72 1440 38V90H0V54Z"
          fill="white"
        />
      </svg>
    </section>
  );
}