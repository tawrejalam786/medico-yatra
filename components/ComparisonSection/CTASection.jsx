"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="lg:col-span-3 mt-2 flex flex-col items-center gap-4 text-center"
    >
      <p className="font-body text-slate-400 text-sm max-w-lg">
        We are specialists, not a general agency. Becoming a healthcare professional is a journey, not a transaction.
      </p>
      <a
        href="/counselling"
        className="inline-flex items-center gap-2 rounded-full bg-[#0263CC] px-8 py-3.5 font-body font-medium text-white text-sm hover:bg-[#0251a8] transition-colors duration-200"
      >
        Book Free Counselling
      </a>
    </motion.div>
  );
}
