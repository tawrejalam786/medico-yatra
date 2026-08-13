"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Is NEET required to study MBBS abroad?",
    answer:
      "For Indian students who intend to practise in India, qualifying NEET is required to obtain the Eligibility Certificate and to sit for FMGE / NExT later. Always confirm the current NMC rules before applying.",
  },
  {
    id: 2,
    question: "Is an MBBS degree from abroad valid in India?",
    answer:
      "A foreign MBBS can lead to practice in India if the university is on the NMC-approved list and you clear the required licensing exam (currently FMGE; NExT is planned as a future replacement). Verify the university's NMC status before enrolling.",
  },
  {
    id: 3,
    question: "What is NExT and has it replaced FMGE yet?",
    answer:
      "NExT (National Exit Test) is planned to eventually replace FMGE, but its rollout has been deferred. As of now, FMGE remains the operative exam. We track updates and recommend you verify the latest NMC notifications.",
  },
  {
    id: 4,
    question: "How long does MBBS abroad take?",
    answer:
      "Commonly around 6 years including clinical training, though this varies by country and university.",
  },
  {
    id: 5,
    question: "How much does MBBS abroad cost?",
    answer:
      "It varies widely by country and university. We'll share an indicative budget range during your free counselling — and a detailed breakdown on each country page. We never quote a single \"fixed\" figure because real costs include tuition, hostel, food, insurance, and travel.",
  },
  {
    id: 6,
    question: "Which is the best country for MBBS abroad?",
    answer:
      "There's no single \"best\" — it depends on your budget, goals (India vs USA), language comfort, and the university's recognition. Our counsellors help you match a country to your profile.",
  },
  {
    id: 7,
    question: "Are the universities you recommend NMC-approved?",
    answer:
      "We shortlist with awareness of the current NMC-approved list, but recognition can change. We always encourage you to independently verify a university's current NMC status before enrolling.",
  },
  {
    id: 8,
    question: "Will I be taught in English?",
    answer:
      "Many universities offer fully English-medium MBBS programmes for international students. Some local-language familiarity helps during clinical years.",
  },
  {
    id: 9,
    question: "Can I practise in the USA after MBBS abroad?",
    answer:
      "Yes, through the USMLE pathway, which is separate from FMGE / NExT. We offer structured USMLE guidance for students choosing this route.",
  },
  {
    id: 10,
    question: "What are the eligibility requirements?",
    answer:
      "Typically Class 12 with PCB + English and a minimum aggregate as per NMC norms, NEET qualification, and the minimum age. Requirements can change — we confirm current criteria for you.",
  },
  {
    id: 11,
    question: "When are the intakes?",
    answer:
      "Intake months vary by country and university. We help you align your application with the next available intake.",
  },
  {
    id: 12,
    question: "Is MBBS abroad safe for students, especially for girls?",
    answer:
      "Safety depends on the country, city, and university. We provide pre-departure briefings and accommodation guidance, and we factor safety into shortlisting. We discuss this openly with parents.",
  },
  {
    id: 13,
    question: "What support do I get after I reach the university?",
    answer:
      "You get a point of contact during your studies, plus access to integrated FMGE / NExT coaching. We stay involved beyond admission.",
  },
  {
    id: 14,
    question: "Do you guarantee admission or a visa?",
    answer:
      "No — and you should be cautious of anyone who does. We provide strong, organised support to maximise your chances, but admissions and visas are decided by universities and authorities.",
  },
  {
    id: 15,
    question: "What happens if a university loses NMC recognition during my course?",
    answer:
      "This is exactly why we emphasise the NMC list at the start. Recognition status matters at enrolment and at exam time. We help you make an informed initial choice and recommend ongoing verification.",
  },
  {
    id: 16,
    question: "Can I do PG in India after MBBS abroad?",
    answer:
      "Yes, after clearing the required licensing exam and meeting current PG-entrance requirements. The pathway can evolve with NExT, so we keep students informed.",
  },
  {
    id: 17,
    question: "How is Medico Yatra different from a normal admission agent?",
    answer:
      "We support the entire journey — counselling, admission, visa, in-study coaching for FMGE / NExT, and career guidance — rather than ending at the offer letter.",
  },
  {
    id: 18,
    question: "Do you help with education loans?",
    answer:
      "Yes, our Future Yatra group offers educational loan assistance guidance. Ask your counsellor about current options.",
  },
  {
    id: 19,
    question: "How do I start?",
    answer:
      "Book a free counselling session. We'll assess your goals and NEET situation honestly and share a personalised roadmap — with no obligation.",
  },
  {
    id: 20,
    question: "Can I get guidance before choosing a country?",
    answer:
      "Yes. Our counsellors can help you understand your options based on your goals, budget, academic profile, and preferred career pathway before you make a decision.",
  },
];

const columnOne = faqs.slice(0, 7);
const columnTwo = faqs.slice(7, 14);
const columnThree = faqs.slice(14, 20);

function FAQItem({ faq, openId, setOpenId }) {
  const isOpen = openId === faq.id;

  return (
    <motion.div
      layout
      className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-[#0263CC]/25 bg-[#F8FBFF] shadow-[0_10px_30px_rgba(2,99,204,0.08)]"
          : "border-slate-200/80 bg-white hover:border-[#0263CC]/20 hover:shadow-[0_8px_24px_rgba(2,99,204,0.06)]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? null : faq.id)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[17px]"
      >
        <span
          className={`text-[13px] font-semibold leading-5 transition-colors sm:text-sm ${
            isOpen ? "text-[#0263CC]" : "text-[#071A49]"
          }`}
        >
          {faq.question}
        </span>

        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen
              ? "bg-[#0263CC] text-white"
              : "bg-[#F1F6FF] text-[#0263CC] group-hover:bg-[#E8F2FF]"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

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
              duration: 0.28,
              ease: "easeInOut",
            }}
          >
            <div className="border-t border-[#0263CC]/10 px-4 pb-5 pt-4 sm:px-5">
              <p className="text-[12px] leading-5 text-slate-600 sm:text-[13px] sm:leading-6">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQColumn({ items, openId, setOpenId }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.04,
          }}
        >
          <FAQItem
            faq={faq}
            openId={openId}
            setOpenId={setOpenId}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function MBBSFAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-10">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(77,165,236,0.08),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(2,167,187,0.06),transparent_30%)]" />

        {/* Animated glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#02A7BB]/5 blur-3xl"
        />

        {/* SVG dotted decoration */}
        <svg
          className="absolute left-0 top-16 hidden h-56 w-56 text-[#0263CC]/10 lg:block"
          viewBox="0 0 220 220"
          fill="none"
          aria-hidden="true"
        >
          <pattern
            id="faqDots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              fill="currentColor"
            />
          </pattern>

          <rect
            width="220"
            height="220"
            fill="url(#faqDots)"
          />

          <motion.circle
            cx="110"
            cy="110"
            r="80"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 8"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* Right SVG */}
        <svg
          className="absolute right-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 text-[#02A7BB]/10 lg:block"
          viewBox="0 0 260 260"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M20 190C60 140 80 120 130 140C180 160 190 90 240 50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          {/* Small label */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F1F7FF] px-3 py-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
              Need Answers?
            </span>
          </div>

          <h2 className="text-[27px] font-extrabold leading-tight tracking-[-0.8px] text-[#071A49] sm:text-3xl lg:text-[38px]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            Everything you need to know about studying MBBS abroad,
            eligibility, costs, licensing, universities and the support
            provided by Medico Yatra.
          </p>

          {/* Small animated line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB]"
          />
        </motion.div>

        {/* =================================================
            DESKTOP FAQ GRID
        ================================================== */}

        <div className="hidden items-start gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <FAQColumn
            items={columnOne}
            openId={openId}
            setOpenId={setOpenId}
          />

          <FAQColumn
            items={columnTwo}
            openId={openId}
            setOpenId={setOpenId}
          />

          <FAQColumn
            items={columnThree}
            openId={openId}
            setOpenId={setOpenId}
          />
        </div>

        {/* =================================================
            MOBILE FAQ
        ================================================== */}

        <div className="flex flex-col gap-3 md:hidden">
          {faqs.map((faq, index) => (
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.025, 0.3),
              }}
            >
              <FAQItem
                faq={faq}
                openId={openId}
                setOpenId={setOpenId}
              />
            </motion.div>
          ))}
        </div>

        {/* =================================================
            BOTTOM SUPPORT CTA
        ================================================== */}

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
            delay: 0.2,
          }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-[#0263CC]/10 bg-gradient-to-r from-[#F5F9FF] via-white to-[#F0FBFC] p-5 text-center shadow-[0_12px_35px_rgba(2,99,204,0.06)] sm:flex-row sm:p-6 sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC]">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#071A49] sm:text-base">
                Still have questions?
              </h3>

              <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                Talk to a Medico Yatra counsellor.
              </p>
            </div>
          </div>

          <a
            href="/counselling"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(2,99,204,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0759B8] sm:w-auto sm:text-sm"
          >
            Get Free Counselling
            <ShieldCheck className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}