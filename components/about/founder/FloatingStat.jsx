"use client";

import { motion } from "framer-motion";

export default function FloatingStat({
  icon: Icon,
  value,
  label,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`${className}
      hidden
      lg:flex
      w-40
      rounded-3xl
      bg-white/90
      backdrop-blur-xl
      border
      border-white
      shadow-[0_20px_40px_rgba(2,99,204,.18)]
      p-5
      flex-col
      items-center
      text-center`}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-3xl font-black text-slate-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </motion.div>
  );
}