"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import Button from "@/components/ui/Button";

const ROWS = [
  {
    agent:  "Job ends once the offer letter and visa are issued",
    medico: "We stay involved through licensing exams and early career guidance",
  },
  {
    agent:  "May work with whichever university pays the highest commission",
    medico: "We work only with NMC-recognised institutions and encourage you to verify independently",
  },
  {
    agent:  "FMGE/NExT preparation is treated as something for later",
    medico: "FMGE/NExT and USMLE pathways are planned from early counselling",
  },
  {
    agent:  "Salary promises may be vague or inflated",
    medico: "We use illustrative, sourced figures and explain licensing requirements clearly",
  },
  {
    agent:  "Parents involved mainly during payment",
    medico: "Parents welcomed throughout the entire decision-making journey",
  },
  {
    agent:  "'Best country' means whichever country has a tie-up",
    medico: "We help you compare options honestly based on your career, budget, and priorities",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const row = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } };

export default function AgentComparison() {
  return (
    <section
      id="agent-vs-medico"
      aria-labelledby="agent-heading"
      className="py-20 lg:py-28 bg-ink text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-medium text-[#4DA5EC] uppercase tracking-widest mb-3"
          >
            The Difference
          </motion.p>
          <motion.h2
            id="agent-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-3xl mx-auto"
          >
            What Actually Happens After You Pay an Admission Agent — vs What Happens With Us
          </motion.h2>
        </div>

        {/* Comparison card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Column headers */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#1E293B] px-6 py-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center">
                <X size={16} className="text-[#94A3B8]" aria-hidden="true"/>
              </div>
              <h3 className="font-heading text-xl text-[#94A3B8]">A Typical Admission Agent</h3>
            </div>
            <div className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-6 py-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Check size={16} className="text-white" aria-hidden="true"/>
              </div>
              <h3 className="font-heading text-xl text-white">Medico Yatra</h3>
            </div>
          </div>

          {/* Rows */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {ROWS.map((r, i) => (
              <motion.div
                key={i}
                variants={row}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-white/5"
              >
                {/* Agent side */}
                <div className={`flex items-start gap-3 px-6 py-5 ${i % 2 === 0 ? "bg-[#1a2234]" : "bg-[#1E293B]"}`}>
                  <div className="w-5 h-5 rounded-full bg-[#334155] flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-[#64748B]" aria-hidden="true"/>
                  </div>
                  <p className="font-body font-light text-sm text-[#94A3B8] leading-relaxed">{r.agent}</p>
                </div>

                {/* Medico Yatra side */}
                <div className={`flex items-start gap-3 px-6 py-5 ${i % 2 === 0 ? "bg-[#0e2340]" : "bg-[#0a1e38]"}`}>
                  <div className="w-5 h-5 rounded-full bg-[#0263CC]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-[#4DA5EC]" aria-hidden="true"/>
                  </div>
                  <p className="font-body font-light text-sm text-white/90 leading-relaxed">{r.medico}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 max-w-xl">
            <div className="flex flex-col items-center gap-2">
              <p className="font-heading text-2xl sm:text-3xl text-white">
                We are specialists, not a general agency.
              </p>
              <p className="font-body font-light text-[#94A3B8] text-base leading-relaxed">
                Becoming a healthcare professional is a journey, not a transaction.
              </p>
            </div>
            <Button href="/about" variant="outline-white" size="lg">
              Book Free Counselling
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
