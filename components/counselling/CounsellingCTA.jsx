"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "100% Free Guidance",
    description: "No hidden charges or consultation fees.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Secure",
    description: "Your information stays safe with us.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    description: "Connect with an expert at your convenience.",
  },
];

export default function CounsellingCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-4 sm:py-6 lg:py-5">
      {/* =====================================================
          MAIN CTA
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#061A54] via-[#063DAD] to-[#0263CC] shadow-[0_20px_60px_rgba(2,74,170,.20)] sm:rounded-[32px]">

          {/* =================================================
              ANIMATED BACKGROUND
          ================================================== */}

          <div className="pointer-events-none absolute inset-0">

            {/* Gradient glows */}

            <div className="absolute left-[-120px] top-[-140px] h-[320px] w-[320px] rounded-full bg-[#4DA5EC]/20 blur-[100px]" />

            <div className="absolute bottom-[-160px] right-[-100px] h-[360px] w-[360px] rounded-full bg-[#02A7BB]/20 blur-[110px]" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[80px]" />

            {/* Dotted world pattern */}

            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
                maskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 72%)",
              }}
            />

            {/* Animated SVG orbit */}

            <svg
              className="absolute right-[18%] top-[-100px] h-[420px] w-[420px] opacity-[0.12]"
              viewBox="0 0 420 420"
              fill="none"
            >
              <motion.circle
                cx="210"
                cy="210"
                r="170"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="6 10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transformOrigin: "center",
                }}
              />

              <circle
                cx="210"
                cy="210"
                r="125"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="3 8"
              />

              <path
                d="M40 245C100 120 185 100 280 155C325 181 350 190 390 150"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="5 7"
              />

              <circle
                cx="210"
                cy="210"
                r="5"
                fill="white"
              />
            </svg>

            {/* Airplane decorative icon */}

            <motion.div
              animate={{
                x: [0, 12, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[38%] top-8 hidden rotate-[-15deg] text-white/20 lg:block"
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16L13 12L21 8L20 5L11 9L5 3H3L7 11L3 21H5L11 15L20 19L21 16Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </div>

          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div className="relative z-10 grid items-center lg:grid-cols-[1.05fr_.9fr_1fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="px-6 pb-5 pr-18 lg:pr-0 pt-8 sm:px-10 sm:pb-6 sm:pt-10 lg:px-10 lg:py-12 xl:px-12">

              {/* Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#8FD5FF]" />

                <span className="text-[10px] font-bold tracking-wide text-white/90 sm:text-xs">
                  PERSONALIZED GUIDANCE
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h2
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
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="max-w-[570px] text-2xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[39px] xl:text-[44px]"
              >
                Let Our Experts Guide You to a{" "}
                <span className="text-[#8FD5FF]">
                  Successful Future
                </span>
              </motion.h2>

              {/* Description */}

              <motion.p
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
                  duration: 0.6,
                  delay: 0.12,
                }}
                className="mt-4 max-w-[480px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7"
              >
                Book a free counselling session with our experts and
                take the first confident step towards your medical
                career abroad.
              </motion.p>

              {/* Buttons */}

              <motion.div
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
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >

                {/* Primary */}

                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#0263CC] shadow-[0_10px_30px_rgba(0,0,0,.12)] transition-all hover:-translate-y-0.5 hover:bg-[#F5FAFF] active:scale-[.98]"
                >
                  Book Free Counselling

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary */}

                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/[0.06] px-5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 active:scale-[.98]"
                >
                  <MessageCircle className="h-4 w-4" />

                  Talk to an Expert
                </Link>

              </motion.div>

              {/* Mini trust */}

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
                  delay: 0.3,
                }}
                className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
              >

                <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/65 sm:text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#8FD5FF]" />
                  No consultation fee
                </span>

                <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/65 sm:text-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#8FD5FF]" />
                  Safe & confidential
                </span>

              </motion.div>

            </div>

            {/* =================================================
                CENTER VISUAL
            ================================================== */}

            <div className="relative flex min-h-[270px] items-center justify-center px-5 py-3 sm:min-h-[320px] lg:min-h-[370px] lg:px-0 lg:py-8">

              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA5EC]/25 blur-[60px] sm:h-[240px] sm:w-[240px]" />

              {/* Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[235px] w-[235px] rounded-full border border-white/10 border-dashed sm:h-[290px] sm:w-[290px]"
              />

              {/* Image */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                  },
                  scale: {
                    duration: 0.7,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative z-10 h-[230px] w-[280px] sm:h-[290px] sm:w-[340px] lg:h-[320px] lg:w-[390px]"
              >

                <Image
                  src="/images/counselling-cta.png"
                  alt="Medical education counselling"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 390px"
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,.25)]"
                />

              </motion.div>

              {/* Floating badge */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-6 sm:left-8"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                  <PhoneCall className="h-3.5 w-3.5 text-[#0263CC]" />
                </div>

                <div>
                  <p className="text-[8px] font-medium text-white/60">
                    Talk to us
                  </p>

                  <p className="text-[10px] font-bold text-white">
                    Expert Guidance
                  </p>
                </div>
              </motion.div>

            </div>

            {/* =================================================
                RIGHT BENEFITS
            ================================================== */}

            <div className="px-6 pr-20 lg:pr-0 pb-8 pt-3 sm:px-10 sm:pb-10 lg:px-8 lg:py-12 xl:px-10">

              <div className="space-y-3">

                {BENEFITS.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.1,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09] sm:p-4"
                    >

                      {/* Icon */}

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-white/15">
                        <Icon
                          className="h-5 w-5 text-[#8FD5FF]"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Text */}

                      <div className="min-w-0">

                        <h3 className="text-sm font-bold text-white sm:text-[15px]">
                          {benefit.title}
                        </h3>

                        <p className="mt-1 max-w-[240px] text-[10px] leading-5 text-white/55 sm:text-xs sm:leading-5">
                          {benefit.description}
                        </p>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

              {/* Scheduling note */}

              <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-white/45 sm:text-xs">
                <Clock3 className="h-3.5 w-3.5" />
                Choose a time that works for you
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}