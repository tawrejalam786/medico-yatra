"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Plane,
  Sparkles,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

export default function CountryConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0263CC] via-[#0759D5] to-[#0145B5] shadow-[0_25px_70px_rgba(2,99,204,0.22)] sm:rounded-[32px]"
        >

          {/* =================================================
              DECORATIVE BACKGROUND
          ================================================== */}

          <div className="pointer-events-none absolute inset-0">

            {/* Soft glow */}

            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-[#02A7BB]/20 blur-3xl" />

            {/* Dot pattern */}

            <div
              className="absolute left-0 top-0 h-full w-[45%] opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1.3px, transparent 1.3px)",
                backgroundSize: "13px 13px",
              }}
            />

            {/* =================================================
                ANIMATED SVG WORLD / ROUTE
            ================================================== */}

            <svg
              className="absolute right-[-80px] top-[-70px] hidden h-[430px] w-[620px] opacity-20 sm:block"
              viewBox="0 0 620 430"
              fill="none"
            >

              {/* Globe */}

              <motion.circle
                cx="475"
                cy="205"
                r="145"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="5 8"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transformOrigin: "475px 205px",
                }}
              />

              <ellipse
                cx="475"
                cy="205"
                rx="72"
                ry="145"
                stroke="white"
                strokeWidth="1"
                opacity="0.7"
              />

              <ellipse
                cx="475"
                cy="205"
                rx="145"
                ry="55"
                stroke="white"
                strokeWidth="1"
                opacity="0.7"
              />

              <path
                d="M330 205H620"
                stroke="white"
                strokeWidth="1"
                opacity="0.5"
              />

              <path
                d="M475 60V350"
                stroke="white"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Flight route */}

              <motion.path
                d="M50 315 C180 150 280 125 385 190 C455 232 515 175 570 95"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7 9"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.5,
                  delay: 0.4,
                }}
              />

              {/* Route dots */}

              <motion.circle
                cx="50"
                cy="315"
                r="5"
                fill="white"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <motion.circle
                cx="570"
                cy="95"
                r="5"
                fill="#8FE7F0"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.7,
                }}
              />

              {/* Airplane */}

              <motion.g
                animate={{
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M360 185L386 171L397 174L378 190L399 201L397 207L371 196L360 210L355 207L362 192L350 186L350 181L360 185Z"
                  fill="white"
                />
              </motion.g>
            </svg>

            {/* Mobile decorative glow */}

            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10 sm:hidden" />

            <div className="absolute right-[-30px] top-[-30px] h-48 w-48 rounded-full border border-white/10 sm:hidden" />

          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 grid min-h-[350px] items-center lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">

            {/* =================================================
                DOCTOR IMAGE
            ================================================== */}

            <div className="relative hidden h-full min-h-[350px] lg:block">

              {/* Doctor glow */}

              <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />

              {/* Doctor image */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                className="absolute bottom-0 left-1/2 z-20 w-[590px] -translate-x-1/2 xl:w-[660px]"
              >
                <Image
                  src="/images/country-consultation-doctor.png"
                  alt="Medical education counselor"
                  width={520}
                  height={620}
                  className="h-auto w-full object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.22)]"
                />
              </motion.div>

              {/* Small floating badge */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.4,
                }}
                className="absolute bottom-8 left-5 z-30 hidden rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md xl:flex xl:items-center xl:gap-2"
              >
                <Stethoscope className="h-4 w-4 text-white" />

                <span className="text-[10px] font-bold text-white">
                  Expert Guidance
                </span>
              </motion.div>

            </div>

            {/* =================================================
                MOBILE IMAGE
            ================================================== */}

            <div className="relative hidden h-[145px] lg:hidden">

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
                  duration: 0.6,
                }}
                className="absolute right-4 top-[-15px] z-20 w-[245px] sm:right-10 sm:w-[175px]"
              >
                <Image
                  src="/images/country-consultation-doctor.png"
                  alt="Medical education counselor"
                  width={350}
                  height={420}
                  className="h-auto w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
                />
              </motion.div>

              {/* Mobile glow */}

              <div className="absolute right-4 top-[-20px] h-40 w-40 rounded-full bg-white/10 blur-2xl" />

            </div>

            {/* =================================================
                TEXT + ACTIONS
            ================================================== */}

            <div className="relative px-6 pb-7 pt-2 sm:px-9 sm:pb-9 lg:px-8 lg:py-12 xl:px-10">

              {/* Small label */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
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
                }}
                className="mb-3 flex items-center gap-2"
              >

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <Sparkles className="h-3.5 w-3.5 text-[#9EEAF1]" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white/70">
                  Personalized Guidance
                </span>

              </motion.div>

              {/* Heading */}

              <motion.h2
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
                  delay: 0.1,
                }}
                className="max-w-[620px] text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl xl:text-[42px]"
              >
                Not Sure Which Country
                <span className="text-[#9EEAF1]">
                  {" "}
                  Is Right For You?
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
                  delay: 0.2,
                }}
                className="mt-4 max-w-[590px] text-sm leading-6 text-white/75 sm:text-base sm:leading-7"
              >
                Our experts will help you choose the best country,
                university and pathway based on your academic profile
                and career goals.
              </motion.p>

              {/* Trust points */}

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
                className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
              >

                {[
                  "Free Consultation",
                  "Personalized Guidance",
                  "No Obligation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#9EEAF1]" />

                    <span className="text-xs font-semibold text-white/80">
                      {item}
                    </span>
                  </div>
                ))}

              </motion.div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

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
                  delay: 0.4,
                }}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >

                {/* Primary */}

                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-[#0263CC] shadow-[0_10px_25px_rgba(0,0,0,.12)] transition-all hover:-translate-y-0.5 hover:bg-[#F5FBFF] sm:px-6"
                >

                  Book Free Counseling

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                </Link>

                {/* Secondary */}

                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:px-6"
                >

                  <MessageCircle className="h-4 w-4" />

                  Talk to Expert

                  <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />

                </Link>

              </motion.div>

            </div>

          </div>

          {/* =================================================
              BOTTOM SHINE
          ================================================== */}

          <motion.div
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

        </motion.div>

      </div>
    </section>
  );
}