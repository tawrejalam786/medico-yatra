"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ComparisonCard({ title, color, icon, data }) {
  const isBlue = color === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-3xl border p-7 min-h-[400px] backdrop-blur-xl ${
        isBlue
          ? "border-[#0263CC]/40 bg-[#0263CC]/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <FontAwesomeIcon
          icon={icon}
          className={`text-2xl ${isBlue ? "text-[#4DA5EC]" : "text-red-400"}`}
        />
        <h3 className={`font-heading text-xl ${isBlue ? "text-white" : "text-slate-300"}`}>
          {title}
        </h3>
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {data.map((point, i) => (
          <motion.li key={i} variants={item} className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={icon}
              className={`mt-0.5 shrink-0 text-sm ${isBlue ? "text-[#4DA5EC]" : "text-red-400/70"}`}
            />
            <span className={`font-body font-light text-sm leading-relaxed ${isBlue ? "text-white/85" : "text-slate-400"}`}>
              {point}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
