"use client";

import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 25px 50px -12px rgba(2, 99, 204, 0.25)",
      }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl border border-[#E2E8F0] bg-white/90 backdrop-blur-xl shadow-lg p-5 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md mb-4`}
      >
        <Icon size={22} strokeWidth={2.5} />
      </div>

      {/* Title */}
      <h3 className="relative text-base font-bold text-[#0F172A] leading-tight mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-sm leading-relaxed text-[#64748B]">
        {description}
      </p>
    </motion.div>
  );
}