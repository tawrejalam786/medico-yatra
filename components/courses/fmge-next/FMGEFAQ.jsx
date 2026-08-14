"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the difference between FMGE and NExT?",
    answer:
      "FMGE is the current licensing exam for foreign medical graduates. NExT is a planned replacement intended to create one unified national standard. NExT's rollout has been deferred multiple times — always verify current status through NMC notifications.",
  },
  {
    question: "When should I start FMGE / NExT preparation?",
    answer:
      "As early as possible — ideally Year 1 of your MBBS abroad. Students who begin structured preparation early can build stronger retention and reduce final-year pressure.",
  },
  {
    question: "Can I attend live classes while studying MBBS abroad?",
    answer:
      "Yes — this is exactly what the programme is built for. Classes are scheduled with international time zones in mind, and recorded sessions cover anything you miss.",
  },
  {
    question: "Will FMGE coaching interfere with my university coursework?",
    answer:
      "No — the year-by-year structure is designed to integrate with, not compete against, your university academic calendar.",
  },
  {
    question: "Does the FMGE pass rate vary by which country I study in?",
    answer:
      "Yes, and we are transparent about this on our individual country pages. This variability is exactly why early, structured preparation matters, regardless of destination.",
  },
  {
    question: "What is the passing criteria for FMGE?",
    answer:
      "NBEMS sets the qualifying score, subject to change. Always verify the current official passing criteria closer to your exam date.",
  },
  {
    question: "How many times can I attempt FMGE?",
    answer:
      "There is no specified limit under current regulations, but each unsuccessful attempt costs time and can delay your career. Our focus is on first-attempt readiness.",
  },
  {
    question: "Is this coaching only for current MBBS-abroad students?",
    answer:
      "While designed to integrate with ongoing MBBS-abroad studies for maximum benefit, graduates preparing for FMGE can also join our final-stage intensive revision track.",
  },
  {
    question: "Do you offer NExT preparation specifically, or only FMGE?",
    answer:
      "Our curriculum is built around the core medical knowledge both exams assess, and we update our exam-format-specific preparation as official NMC guidance on NExT's rollout becomes available.",
  },
  {
    question: "Can students from any MBBS-abroad country join this coaching?",
    answer:
      "Yes — open to students from any country, with content calibrated to address curriculum gaps relevant to each destination.",
  },
  {
    question: "Does Medico Yatra guarantee that I will clear FMGE / NExT?",
    answer:
      "No. We do not and cannot guarantee exam outcomes — success depends on your own consistent effort and engagement alongside our structured curriculum.",
  },
  {
    question: "Is the coaching genuinely 100% online?",
    answer:
      "Yes — no relocation required. Attend from your university, hostel, or home, anywhere in the world.",
  },
  {
    question: "What if I'm already in my final year — is it too late to join?",
    answer:
      "No — while an early start is ideal, our final-year intensive revision track is built for students who need to make the most of the time remaining before their exam.",
  },
  {
    question: "How are classes scheduled across different time zones?",
    answer:
      "We schedule live sessions with international student time zones in mind, and provide recorded access for anything that doesn't fit your specific schedule.",
  },
  {
    question: "Will my parents be able to understand how this coaching works?",
    answer:
      "Yes — we're happy to walk parents through the year-by-year structure directly, since understanding exactly how licensing will be handled is often their biggest concern.",
  },
  {
    question: "Does this coaching cover both theory and practice tests?",
    answer:
      "Yes — live classes, recorded lectures, monthly subject-wise tests, and full-length mock exams simulating the real FMGE format are all included.",
  },
  {
    question: "What happens if I fall behind during a busy clinical placement period?",
    answer:
      "Recorded class access and faculty doubt-clearing support are designed exactly for this — to help you catch up without losing your place in the structured curriculum.",
  },
  {
    question:
      "Is FMGE coaching the same as NExT coaching, or will I need to switch later?",
    answer:
      "Our curriculum covers the foundational medical knowledge both exams test. As official NExT details solidify, we update our specific exam-format preparation accordingly — you won't need to start over with a different provider.",
  },
  {
    question: "Can I prepare for both FMGE/NExT and USMLE at the same time?",
    answer:
      "Yes, many students do. This requires genuine time management — we discuss realistic timelines honestly during counselling.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free counselling session. We'll discuss your current MBBS-abroad situation (or country selection plans, if you haven't started yet) and walk you through how the coaching integrates with your academic calendar.",
  },
];

function FAQItem({ faq, index, compact = false }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.25),
      }}
      className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-[#0263CC]/30 shadow-[0_15px_40px_rgba(2,99,204,0.10)]"
          : "border-slate-200/80 shadow-[0_6px_25px_rgba(15,23,42,0.04)] hover:border-[#0263CC]/20 hover:shadow-[0_10px_30px_rgba(2,99,204,0.07)]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex w-full items-center gap-4 text-left ${
          compact ? "px-5 py-4" : "px-5 py-5 sm:px-6"
        }`}
      >
        {/* Number */}
        <span
          className={`flex shrink-0 items-center justify-center rounded-xl font-bold transition-all duration-300 ${
            compact
              ? "h-9 w-9 text-xs"
              : "h-10 w-10 text-sm"
          } ${
            open
              ? "bg-[#0263CC] text-white"
              : "bg-[#0263CC]/8 text-[#0263CC] group-hover:bg-[#0263CC]/12"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`min-w-0 flex-1 font-semibold leading-snug ${
            compact
              ? "text-[14px] sm:text-[15px]"
              : "text-[15px] sm:text-base"
          } ${
            open ? "text-[#071A49]" : "text-slate-800"
          }`}
        >
          {faq.question}
        </span>

        {/* Arrow */}
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "rotate-180 bg-[#0263CC]/10 text-[#0263CC]"
              : "bg-slate-100 text-slate-500 group-hover:bg-[#0263CC]/8 group-hover:text-[#0263CC]"
          }`}
        >
          <ChevronDown size={18} strokeWidth={2.2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.3,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.2,
              },
            }}
          >
            <div
              className={`border-t border-slate-100 ${
                compact
                  ? "px-5 pb-5 pt-4"
                  : "px-5 pb-5 pt-4 sm:px-6"
              }`}
            >
              <div className="flex gap-3">
                <div className="mt-1 h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#0263CC] to-[#02A7BB]" />

                <p className="text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FMGEFAQ() {
  const firstSeven = faqs.slice(0, 7);
  const remainingFaqs = faqs.slice(7);

  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0263CC]/6 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#02A7BB]/6 blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,99,204,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(2,99,204,0.035) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
              <HelpCircle size={15} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0263CC]">
              Need Answers?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-bold tracking-tight text-[#071A49] sm:text-4xl lg:text-5xl"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            Everything you need to know about FMGE/NExT preparation,
            online coaching, study schedules and your MBBS-abroad journey.
          </motion.p>
        </div>

        {/* =========================================
            FAQ 01–07
            Main Questions
        ========================================= */}
        <div className="mx-auto max-w-5xl">
          <div className="space-y-3">
            {firstSeven.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Divider / label */}
        <div className="mx-auto my-12 flex max-w-5xl items-center gap-4 sm:my-14">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200" />

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
              More Questions
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200" />
        </div>

        {/* =========================================
            FAQ 08–20
            Compact 2-column grid
        ========================================= */}
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2">
          {remainingFaqs.map((faq, index) => (
            <FAQItem
              key={index + 7}
              faq={faq}
              index={index + 7}
              compact
            />
          ))}
        </div>

        {/* =========================================
            Bottom CTA
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-[#071A49] p-6 shadow-[0_20px_60px_rgba(7,26,73,0.18)] sm:mt-14 sm:p-8 lg:p-10"
        >
          {/* CTA glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#0263CC]/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#02A7BB]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                <MessageCircle size={22} />
              </div>

              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Still have questions?
                </p>

                <p className="mt-1 text-sm text-white/65">
                  Talk to a Medico Yatra counsellor.
                </p>
              </div>
            </div>

            <a
              href="/counselling"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0263CC] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Get Free Counselling

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/50">
            <ShieldCheck size={14} className="text-[#4DA5EC]" />
            <span>
              No pressure. Just honest guidance for your licensing journey.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}