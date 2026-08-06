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
        y: -8,
      }}
      transition={{ duration: .3 }}
      className="group rounded-3xl border border-white bg-white/80 backdrop-blur-xl shadow-xl p-6"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        <Icon size={28} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}