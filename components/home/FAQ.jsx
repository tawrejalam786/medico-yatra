"use client";

import { motion } from "framer-motion";
import { AccordionGroup } from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FAQS } from "@/data/faqs";

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-white"
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
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]"
          >
            Your Questions, Answered Honestly
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-10"
        >
          <AccordionGroup items={FAQS} mode="single" />
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="font-heading text-xl text-[#0F172A] mb-1.5">Still have a question?</p>
            <p className="font-body font-light text-sm text-[#475569]">
              Book a free counselling session — no question is off-limits.
            </p>
          </div>
          <Button href="/counselling" variant="primary" size="md" className="shrink-0">
            Book Free Counselling
          </Button>
        </motion.div>

        {/* SEO-friendly note */}
        <p className="font-body text-xs text-[#94A3B8] text-center mt-6">
          Have a question about a specific country?{" "}
          <Link href="/countries" className="text-[#0263CC] hover:underline">
            Browse our country guides →
          </Link>
        </p>
      </div>
    </section>
  );
}
