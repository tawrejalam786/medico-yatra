"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  MessageCircle,
  Languages,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const AVAILABILITY = [
  {
    id: 1,
    icon: Clock3,
    label: "Working hours",
    value: "Mon - Sat",
    detail: "10:00 AM - 7:00 PM IST",
    color: "bg-[#0263CC]",
    soft: "bg-[#0263CC]/10",
    text: "text-[#0263CC]",
  },
  {
    id: 2,
    icon: MessageCircle,
    label: "Response promise",
    value: "Within one working day",
    detail: "WhatsApp & form enquiries",
    color: "bg-[#02A7BB]",
    soft: "bg-[#02A7BB]/10",
    text: "text-[#02A7BB]",
  },
  {
    id: 3,
    icon: Languages,
    label: "Languages",
    value: "English & Hindi",
    detail: "More languages coming soon",
    color: "bg-[#6B2638]",
    soft: "bg-[#6B2638]/10",
    text: "text-[#6B2638]",
  },
];

export default function AvailabilitySection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-12">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#0263CC]/10 blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#02A7BB]/10 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-[#F8FBFF] px-4 py-2 shadow-sm">
            <Clock3 className="h-4 w-4 text-[#0263CC]" />

            <span className="text-sm font-bold tracking-wide text-[#0263CC]">
              WHEN WE'RE AVAILABLE
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            We're here when{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              you need us.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Know when to reach us and what to expect after you send an enquiry.
            We keep our response process simple, clear and pressure-free.
          </p>
        </motion.div>

        {/* =========================================================
            AVAILABILITY CARDS
        ========================================================== */}

        <div className="grid gap-4 md:grid-cols-3">
          {AVAILABILITY.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] sm:p-6"
              >
                {/* Decorative glow */}

                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${item.soft} blur-2xl transition-transform duration-500 group-hover:scale-150`}
                />

                {/* Icon */}

                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${item.soft}`}
                >
                  <Icon className={`h-6 w-6 ${item.text}`} />
                </div>

                {/* Content */}

                <div className="relative mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom accent */}

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 ${item.color} transition-all duration-500 group-hover:w-full`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            RESPONSE PROMISE BAND
        ========================================================== */}

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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-5 overflow-hidden rounded-[30px] bg-[#16263A] shadow-[0_25px_70px_rgba(15,23,42,0.15)]"
        >
          <div className="relative px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
            {/* Background glow */}

            <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-[#0263CC]/30 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#02A7BB]/20 blur-[80px]" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}

              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <CheckCircle2 className="h-5 w-5 text-[#5DD6DE]" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7CC8FF]">
                    Our response promise
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Your enquiry won't disappear into a black hole.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                  We aim to reply to WhatsApp and form enquiries within one
                  working day. WhatsApp is usually the fastest way to reach us.
                </p>
              </div>

              {/* Right CTA */}

              <div className="shrink-0">
                <a
                  href="#contact-form"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-[#16263A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4FAFF] sm:w-auto"
                >
                  Talk to a counsellor

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SMALL REASSURANCE
        ========================================================== */}

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
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-6 flex items-start justify-center gap-2 text-center"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#02A7BB]" />

          <p className="max-w-2xl text-xs leading-5 text-slate-400 sm:text-sm">
            We contact you only about your enquiry. No unnecessary follow-ups,
            no pressure and no selling of your data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}