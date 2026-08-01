"use client";

import { motion } from "framer-motion";
import { AccordionGroup } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { HONESTY_CHECKS } from "@/data/faqs";

export default function HonestyCheck() {
  return (
    <section
      id="honesty-check"
      aria-labelledby="honesty-heading"
      className="py-20 lg:py-28 bg-[#F1F7FC]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Real Questions, Honest Answers
          </motion.p>
          <motion.h2
            id="honesty-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] leading-tight mb-4"
          >
            Before You Go Further — Let's Address What You're Actually Worried About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body font-light text-[#475569] text-base max-w-xl mx-auto"
          >
            We'd rather you ask the hard questions now than regret a decision later.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-10"
        >
          <AccordionGroup items={HONESTY_CHECKS} mode="single" />
        </motion.div>

        {/* Tail note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="font-body font-light text-[#475569] text-sm leading-relaxed mb-5">
            If your specific worry isn't listed here, that's exactly the right question to bring
            to a free counselling session. No question is too small, and no concern is off-limits.
          </p>
          <Button href="/counselling" variant="primary" size="lg">
            Talk to Us About Your Specific Concern
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
