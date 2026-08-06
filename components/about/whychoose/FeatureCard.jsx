"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative h-full overflow-hidden rounded-[24px] border border-[#0263CC]/8 bg-white p-7 shadow-[0_10px_35px_rgba(2,99,204,.08)] transition-all duration-300 hover:border-[#0263CC]/20 hover:shadow-[0_25px_60px_rgba(2,99,204,.15)]"
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/0 via-transparent to-[#4DA5EC]/0 group-hover:from-[#0263CC]/5 group-hover:to-[#4DA5EC]/5 transition-all duration-500" />

      {/* Icon */}

      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} shadow-lg`}
      >
        <Icon size={28} className={item.iconColor} />
      </div>

      {/* Content */}

      <h3 className="relative mt-6 text-[22px] font-bold text-slate-900">
        {item.title}
      </h3>

      <p className="relative mt-4 text-[15px] leading-7 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
}