"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  Globe2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroAbout() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbff]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Soft blue atmospheric glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#4DA5EC]/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#02A7BB]/10 blur-[130px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2,99,204,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2,99,204,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* =========================================================
          DECORATIVE JOURNEY PATH
      ========================================================== */}

      <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-[430px] w-[430px] lg:block">
        <svg
          viewBox="0 0 430 430"
          fill="none"
          className="h-full w-full"
        >
          <motion.path
            d="M70 340C118 278 122 204 183 183C236 165 284 207 278 146C273 94 325 73 367 82"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="6 9"
            opacity="0.18"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="70"
            cy="340"
            r="5"
            fill="#0263CC"
            opacity="0.55"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.45, 0.9, 0.45],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
          />

          <motion.circle
            cx="367"
            cy="82"
            r="5"
            fill="#02A7BB"
            opacity="0.6"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.45, 0.9, 0.45],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 0.8,
            }}
          />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 pb-6 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-12 lg:pb-10 lg:pt-15 xl:px-16">
        <div className="grid min-h-[600px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:min-h-[600px]">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-[700px]"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/75 px-3.5 py-2 shadow-[0_8px_30px_rgba(2,99,204,0.06)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#02A7BB] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#02A7BB]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0263CC] sm:text-xs">
                About Medico Yatra
              </span>

              <span className="h-3 w-px bg-slate-200" />

              <span className="text-[11px] font-medium text-slate-500 sm:text-xs">
                A Future Yatra brand
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[680px] text-[25px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#09213d] sm:text-[56px] md:text-[64px] lg:text-[62px] xl:text-[35px]">
              We don't sell
              <span className="relative mx-2 inline-block text-[#0263CC]">
                admissions.
              </span>

              <br />

              <span className="relative">
                We guide
                <span className="relative ml-2 inline-block">
                  healthcare careers.
                  <svg
                    viewBox="0 0 310 18"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 12C70 5 174 18 308 5"
                      stroke="#02A7BB"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.8,
                      }}
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[620px] text-[16px] leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
              Medico Yatra helps Indian students build real careers in
              healthcare — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy,
              Respiratory Therapy, Medical Lab Technology and more — with
              NMC-recognised universities, transparent counselling, and
              licensing support every step of the way.
            </p>

            {/* Trust points */}
            <div className="mt-7 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-2">
              <TrustPoint>
                NMC-recognised universities
              </TrustPoint>

              <TrustPoint>
                Transparent counselling
              </TrustPoint>

              <TrustPoint>
                Healthcare-career focused
              </TrustPoint>

              <TrustPoint>
                Support beyond admission
              </TrustPoint>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#0263CC] px-7 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(2,99,204,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0057b8] hover:shadow-[0_20px_40px_rgba(2,99,204,0.3)]"
              >
                Book Free Counselling

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </Link>

              <a
                href="#our-story"
                className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-7 text-sm font-semibold text-[#09213d] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0263CC]/20 hover:bg-white"
              >
                See How We Help

                <ChevronDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Small reassurance */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
              <ShieldCheck size={15} className="text-[#02A7BB]" />

              No pressure. No false promises. Just honest guidance.
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative z-10 mx-auto w-full max-w-[680px] lg:ml-auto"
          >
            <div className="relative">

              {/* Outer glow */}
              <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-[#0263CC]/10 via-transparent to-[#02A7BB]/15 blur-2xl" />

              {/* Main visual container */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/70 p-2.5 shadow-[0_30px_80px_rgba(9,33,61,0.14)] backdrop-blur-xl sm:rounded-[38px] sm:p-3">

                <div className="relative aspect-[1.5] overflow-hidden rounded-[25px] bg-[#dcecff] sm:rounded-[30px]">

                  {/* ------------------------------------------------
                      IMAGE
                      Replace this path with your actual About hero
                      image.
                  ------------------------------------------------- */}
                  <Image
                    src="/images/about/about-hero.png"
                    alt="Medico Yatra counsellor speaking with a student and parent"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  {/* Image readability overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061c34]/65 via-transparent to-[#0263CC]/5" />

                  {/* Top floating badge */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-white/30 bg-white/90 px-3 py-2.5 shadow-xl backdrop-blur-md sm:left-6 sm:top-6 sm:px-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0263CC] text-white">
                      <Compass size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        The Medico Yatra
                      </p>

                      <p className="text-xs font-bold text-[#09213d]">
                        Journey starts here
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom story card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.6,
                    }}
                    className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/20 bg-[#071d35]/80 p-4 text-white shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#02A7BB]/20 text-[#6de2eb]">
                        <Globe2 size={18} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7fdce4]">
                          Beyond borders
                        </p>

                        <p className="mt-1 text-sm font-medium leading-5 text-white/90 sm:text-[15px]">
                          From choosing the right path to preparing for the
                          journey ahead.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* ------------------------------------------------
                  FLOATING LOCATION PIN
              ------------------------------------------------- */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-[24%] hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-[#0263CC] shadow-[0_15px_35px_rgba(2,99,204,0.16)] backdrop-blur-md sm:flex lg:-right-5"
              >
                <MapPin size={22} />
              </motion.div>

              {/* ------------------------------------------------
                  FLOATING VERIFICATION CARD
              ------------------------------------------------- */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                className="absolute -bottom-5 -left-3 hidden max-w-[210px] rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_18px_45px_rgba(9,33,61,0.12)] backdrop-blur-md sm:block lg:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#02A7BB]/10 text-[#02A7BB]">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#09213d]">
                      Verify. Understand.
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      Make an informed decision.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            SCROLL INDICATOR
        ======================================================== */}

        <motion.a
          href="#our-story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mx-auto mt-4 hidden w-fit flex-col items-center gap-2 text-slate-400 transition-colors hover:text-[#0263CC] lg:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
            Discover our story
          </span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

/* ===============================================================
   TRUST POINT
================================================================ */

function TrustPoint({ children }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-slate-600">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0263CC]/8">
        <CheckCircle2
          size={13}
          strokeWidth={2.5}
          className="text-[#0263CC]"
        />
      </span>

      <span>{children}</span>
    </div>
  );
}