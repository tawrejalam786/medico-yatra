"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "Is counselling really free?",
    answer:
      "Yes — initial counselling is free and no-obligation. You can speak with a Medico Yatra counsellor, understand your options and decide what feels right for you.",
    icon: MessageCircle,
    color: "bg-[#0263CC]",
    softColor: "bg-[#0263CC]/10",
    textColor: "text-[#0263CC]",
  },

  {
    id: 2,
    question: "How soon will you reply?",
    answer:
      "We aim to respond within one working day. WhatsApp is usually the fastest way to reach us, especially for quick questions.",
    icon: PhoneCall,
    color: "bg-[#02A7BB]",
    softColor: "bg-[#02A7BB]/10",
    textColor: "text-[#02A7BB]",
  },

  {
    id: 3,
    question: "Will I get spam calls?",
    answer:
      "No. We contact you only about your enquiry. We do not believe in unnecessary follow-ups, pressure or selling your data.",
    icon: ShieldCheck,
    color: "bg-[#6B2638]",
    softColor: "bg-[#6B2638]/10",
    textColor: "text-[#6B2638]",
  },

  {
    id: 4,
    question: "Can my parents join the conversation?",
    answer:
      "Absolutely. We welcome parents at every step and encourage them to be part of the conversation whenever you would like their involvement.",
    icon: Users,
    color: "bg-[#4DA5EC]",
    softColor: "bg-[#4DA5EC]/10",
    textColor: "text-[#0263CC]",
  },
];

export default function ContactFAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-10 sm:py-10 lg:py-12">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Blue Glow */}

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
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#0263CC]/10 blur-[110px]"
        />

        {/* Teal Glow */}

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

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white px-4 py-2 shadow-sm">
            <MessageCircle className="h-4 w-4 text-[#0263CC]" />

            <span className="text-sm font-bold tracking-wide text-[#0263CC]">
              QUICK ANSWERS
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              We have answers.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A few things students and parents commonly want to know before
            reaching out to us.
          </p>
        </motion.div>

        {/* =========================================================
            FAQ LAYOUT
        ========================================================== */}

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* =======================================================
              LEFT INTRO CARD
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden rounded-[30px] bg-[#16263A] p-6 shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:p-8 lg:sticky lg:top-24"
          >
            {/* Decorative glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0263CC]/30 blur-[70px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#02A7BB]/20 blur-[70px]" />

            <div className="relative">
              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <MessageCircle className="h-7 w-7 text-[#7CC8FF]" />
              </div>

              {/* Text */}

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#7CC8FF]">
                Before you reach out
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                No pressure.
                <br />
                Just honest answers.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                If you're still exploring your options, that's completely
                okay. You don't need to have everything figured out before
                speaking with us.
              </p>

              {/* Trust points */}

              <div className="mt-7 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DD6DE]" />

                  <span className="text-sm text-slate-300">
                    Initial counselling is free
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DD6DE]" />

                  <span className="text-sm text-slate-300">
                    No-obligation conversation
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5DD6DE]" />

                  <span className="text-sm text-slate-300">
                    Parents are welcome
                  </span>
                </div>
              </div>

              {/* CTA */}

              <a
                href="#contact-form"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-[#16263A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4FAFF]"
              >
                Book Free Counselling

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* =======================================================
              FAQ ACCORDION
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-3"
          >
            {FAQS.map((faq, index) => {
              const isOpen = openId === faq.id;
              const Icon = faq.icon;

              return (
                <motion.div
                  key={faq.id}
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
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className={`overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#0263CC]/20 shadow-[0_18px_45px_rgba(2,99,204,0.09)]"
                      : "border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  {/* Question */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    {/* Number/Icon */}

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isOpen
                          ? `${faq.color} text-white shadow-lg`
                          : `${faq.softColor} ${faq.textColor}`
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Question */}

                    <span className="flex-1 pr-2 text-sm font-extrabold leading-6 text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    {/* Chevron */}

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0263CC] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="ml-0 border-l-2 border-[#0263CC]/15 pl-5 sm:ml-[59px]">
                            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

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
            duration: 0.5,
            delay: 0.15,
          }}
          className="mx-auto mt-8 max-w-6xl rounded-[26px] border border-[#0263CC]/10 bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-black text-slate-900 sm:text-lg">
                Still have a question?
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Talk to a counsellor and get answers specific to your
                situation.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#contact-form"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-5 text-sm font-bold text-white shadow-lg shadow-[#0263CC]/20 transition hover:bg-[#0155B4]"
              >
                Book Free Counselling

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#quick-contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-[#0263CC]/20 hover:bg-[#0263CC]/5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            PRIVACY REASSURANCE
        ========================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#02A7BB]" />

          <span>
            Your questions are welcome. Your privacy matters to us.
          </span>
        </div>
      </div>
    </section>
  );
}