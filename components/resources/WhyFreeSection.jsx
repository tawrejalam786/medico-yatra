"use client";

import { motion } from "framer-motion";
import { Heart, Users, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Informed Families Make Better Decisions",
    description: "We believe transparency leads to better outcomes for both students and us as long-term partners.",
  },
  {
    icon: Shield,
    title: "No Gatekeeping Information",
    description: "Basic planning information shouldn't be hidden behind a sales call. Fill the form once, and everything is yours.",
  },
  {
    icon: Users,
    title: "Building Trust Through Value",
    description: "These resources exist to help you make confident decisions, not to pressure you into anything.",
  },
];

export default function WhyFreeSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FBFF] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4DA5EC]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#02A7BB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0263CC]/10 border border-[#0263CC]/20 mb-6">
            <Sparkles size={16} className="text-[#0263CC]" />
            <span className="text-sm font-bold text-[#0263CC]">OUR PHILOSOPHY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-5">
            Why We've Made This{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Free
            </span>
          </h2>
          
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Most families struggle not from a lack of options, but from a lack of clear, honest, organized information. Conflicting advice from agents, outdated forum posts, and marketing-driven country pages make it genuinely hard to plan with confidence.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(2, 99, 204, 0.25)" }}
                className="relative group bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-lg transition-all duration-300"
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/5 to-[#02A7BB]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#0F172A] mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="relative text-base text-[#64748B] leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-[#0F172A] max-w-4xl mx-auto">
            These resources exist because we believe{" "}
            <span className="text-[#0263CC]">informed families make better decisions</span>{" "}
            — and better decisions lead to better long-term outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
