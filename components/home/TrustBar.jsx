"use client";

import { motion } from "framer-motion";

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#0263CC" strokeWidth="1.5"/>
        <path d="M8 14l4 4 8-8" stroke="#0263CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="5" fill="#d6e8fb" opacity="0.5"/>
      </svg>
    ),
    heading: "NMC-recognised universities",
    body: "Your degree has to count when you come home — this is one of the most important things families need to verify. We work only with NMC-recognised institutions for MBBS and encourage you to verify status directly.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#4DA5EC" strokeWidth="1.5"/>
        <path d="M9 10h10M9 14h7M9 18h9" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="7" cy="10" r="1.5" fill="#4DA5EC"/>
        <circle cx="7" cy="14" r="1.5" fill="#4DA5EC"/>
        <circle cx="7" cy="18" r="1.5" fill="#4DA5EC"/>
      </svg>
    ),
    heading: "Many healthcare careers — not just MBBS",
    body: "A low NEET score or a different interest doesn't mean fewer honest options. We guide MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy, Respiratory Therapy, MLT and more.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#02A7BB" strokeWidth="1.5"/>
        <path d="M14 7v7l4 3" stroke="#02A7BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="3" fill="#d6f4f7" opacity="0.8"/>
      </svg>
    ),
    heading: "Integrated FMGE / NExT & USMLE coaching",
    body: "Licensing preparation starts with your course, not years later. We plan your FMGE/NExT and USMLE pathways from early counselling, so you're never caught off guard post-graduation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#0263CC" strokeWidth="1.5"/>
        <path d="M9 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 19v-5" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="20.5" r="1.5" fill="#0263CC"/>
      </svg>
    ),
    heading: "Honest, end-to-end guidance",
    body: "From counselling to licensing, we stay involved throughout the journey. No overpromising, no fabricated statistics, no false urgency — just honest, professional support.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#4DA5EC" strokeWidth="1.5"/>
        <circle cx="10" cy="12" r="2.5" stroke="#4DA5EC" strokeWidth="1.5"/>
        <circle cx="18" cy="12" r="2.5" stroke="#4DA5EC" strokeWidth="1.5"/>
        <path d="M6 20c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Parents are part of every conversation",
    body: "This is a family decision — we treat it like one. Parents are welcomed at every stage, from the first counselling call to pre-departure briefings. No one is left out.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TrustBar() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            id="trust-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]"
          >
            Why Families Trust Us With This Decision
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {TRUST_ITEMS.map((t) => (
            <motion.article
              key={t.heading}
              variants={item}
              className="group flex flex-col gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md hover:border-[#4DA5EC]/40 hover:-translate-y-0.5 transition-all duration-250"
            >
              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm group-hover:border-[#4DA5EC]/40 transition-colors duration-250">
                {t.icon}
              </div>
              <h3 className="font-heading text-lg text-[#0F172A] leading-snug">{t.heading}</h3>
              <p className="font-body font-light text-sm text-[#475569] leading-relaxed">{t.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
