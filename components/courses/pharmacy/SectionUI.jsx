"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left", light = false }) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] sm:text-xs ${light ? "text-cyan-200" : "text-[#02A7BB]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[26px] font-extrabold leading-[1.14] tracking-[-0.8px] sm:text-[34px] lg:text-[40px] ${light ? "text-white" : "text-[#071A49]"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-blue-100" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function PrimaryLink({ href = "#counselling", children, inverse = false, className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
        inverse
          ? "bg-white text-[#0263CC] shadow-[0_12px_30px_rgba(0,0,0,.12)] hover:bg-cyan-50"
          : "bg-[#0263CC] text-white shadow-[0_12px_30px_rgba(2,99,204,.24)] hover:bg-[#0759B8]"
      } ${className}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function MobileScroller({ children, className = "" }) {
  return (
    <div className={`mobile-scroller -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 ${className}`}>
      {children}
    </div>
  );
}

export function Notice({ children, tone = "amber", className = "" }) {
  const styles =
    tone === "blue"
      ? "border-blue-200 bg-blue-50 text-blue-950"
      : tone === "teal"
        ? "border-teal-200 bg-teal-50 text-teal-950"
        : "border-amber-200 bg-amber-50 text-amber-950";

  return (
    <div className={`rounded-2xl border p-4 text-xs leading-6 sm:p-5 sm:text-sm ${styles} ${className}`}>
      {children}
    </div>
  );
}
