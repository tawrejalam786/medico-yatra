"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-10">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft blue glow */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0263CC]/10 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#02A7BB]/10 blur-[110px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            CTA CONTAINER
        ========================================================== */}

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(2,99,204,0.22)] sm:rounded-[38px]"
        >

          {/* =====================================================
              MAIN BLUE BACKGROUND
          ====================================================== */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#014FBF] via-[#0263CC] to-[#01439B]" />

          {/* =====================================================
              GRID PATTERN
          ====================================================== */}

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* =====================================================
              GLOW CIRCLES
          ====================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#4DA5EC] blur-[70px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-[#02A7BB] blur-[100px]"
          />

          {/* Decorative circles */}

          <div className="absolute right-[25%] top-10 hidden h-3 w-3 rounded-full bg-white/50 sm:block" />

          <div className="absolute right-[10%] top-24 hidden h-2 w-2 rounded-full bg-white/30 sm:block" />

          <div className="absolute bottom-10 left-[35%] hidden h-2 w-2 rounded-full bg-white/30 sm:block" />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10 grid items-center lg:grid-cols-[0.9fr_1.35fr_0.85fr]">

            {/* ===================================================
                LEFT VISUAL
            ==================================================== */}

            <div className="relative flex min-h-[260px] items-center justify-center px-6 pt-8 sm:min-h-[320px] sm:px-10 lg:min-h-[360px] lg:px-6 lg:py-8">

              {/* Glow behind image */}

              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[45px] sm:h-56 sm:w-56" />

              {/* Decorative ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-52 w-52 rounded-full border border-dashed border-white/20 sm:h-64 sm:w-64"
              />

              {/* Main image */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/contact/cta.png"
                  alt="Medical education consultation"
                  width={420}
                  height={320}
                  priority={false}
                  className="h-auto w-[270px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,.18)] sm:w-[330px] lg:w-[390px]"
                />
              </motion.div>

              {/* Floating badge */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-4 z-20 hidden items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:flex lg:left-0"
              >
                <CheckCircle2 className="h-4 w-4" />

                Trusted Guidance
              </motion.div>

            </div>

            {/* ===================================================
                CENTER CONTENT
            ==================================================== */}

            <div className="px-6 pb-8 text-center sm:px-10 lg:px-6 lg:py-12 lg:text-left">

              {/* Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4" />

                Need Help?
              </motion.div>

              {/* Heading */}

              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[40px]">
                Still Have 
                <span className="ml-2 text-[#D9F3FF]">
                  Questions?
                </span>
              </h2>

              <p className="mt-4 text-xl font-bold text-white sm:text-2xl">
                We're just a call or message away!
              </p>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base lg:mx-0">
                Our experienced counselors are ready to answer your questions
                and help you take the first confident step towards your
                medical career abroad.
              </p>

              {/* Quick trust points */}

              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">

                <div className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                  <ShieldCheck className="h-4 w-4 text-[#B9F2FF]" />

                  Expert Guidance
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                  <Clock3 className="h-4 w-4 text-[#B9F2FF]" />

                  Quick Response
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#B9F2FF]" />

                  No Obligation
                </div>

              </div>

            </div>

            {/* ===================================================
                RIGHT BUTTONS
            ==================================================== */}

            <div className="px-6 pb-8 sm:px-10 lg:px-6 lg:py-12">

              <div className="rounded-[26px] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-sm sm:p-5">

                <p className="mb-4 text-center text-xs font-semibold text-white/65">
                  Choose your preferred way to connect
                </p>

                {/* Call */}

                <motion.a
                  href="tel:+919654400800"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 font-bold text-[#0263CC] shadow-xl transition"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0263CC]/10">
                    <PhoneCall className="h-4 w-4" />
                  </span>

                  <span>Call Now</span>

                  <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />

                </motion.a>

                {/* WhatsApp */}

                <motion.a
                  href="https://wa.me/919654400800"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group mt-3 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/35 bg-white/5 px-5 font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <MessageCircle className="h-4 w-4" />
                  </span>

                  <span>WhatsApp Us</span>

                  <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />

                </motion.a>

                {/* Small status */}

                <div className="mt-4 flex items-center justify-center gap-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-[11px] font-medium text-white/70">
                    Our team is currently available
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM LINE
          ====================================================== */}

          <div className="relative z-10 border-t border-white/10 bg-black/5 px-6 py-3">

            <p className="text-center text-[11px] font-medium text-white/55 sm:text-xs">
              Get personalized guidance for universities, admissions,
              scholarships, visa assistance & more.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}