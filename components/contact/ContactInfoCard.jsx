"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


export default function ContactInfoCard({
  icon: Icon,
  title,
  value,
  subtitle,
  color,
  bg,
  whatsapp,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[28px] border border-white bg-white p-5 shadow-[0_18px_45px_rgba(2,99,204,.08)]"
      
    >
      {/* Glow */}
      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-r ${color} opacity-10 blur-3xl`}
      />

      <div className="relative flex items-center gap-5">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${bg} shadow-sm`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${color}`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-slate-900">{title}</h4>

          <p className="mt-1 text-[17px] font-semibold text-slate-800">
            {value}
          </p>

          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>

        <motion.div
          whileHover={{ rotate: 45 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-[#0263CC]"
        >
          <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-white" />
        </motion.div>
      </div>

      {whatsapp && (
        <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Fastest Response
        </div>
      )}
    </motion.div>
  );
}