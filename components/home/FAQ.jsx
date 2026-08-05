"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionGroup } from "@/components/ui/Accordion";
import Link from "next/link";
import { FAQS } from "@/data/faqs";
import { CheckCircle2, Send, User, Phone, Mail, BookOpen, ChevronDown } from "lucide-react";

/* ── Lead capture form ─────────────────────────────────────────── */
const COURSE_OPTIONS = [
  "MBBS / Medicine",
  "BDS / Dentistry",
  "BSc Nursing",
  "BPharm / PharmD",
  "Physiotherapy (BPT)",
  "Respiratory Therapy / MLT",
  "Not Sure Yet",
];

const TRUST_POINTS = [
  "Free — no payment required",
  "No pressure, no sales pitch",
  "Response within 24 hours",
];

function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to your CRM / API endpoint
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center text-center gap-5 py-12 px-6"
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#d6f4f7" }}>
          <CheckCircle2 size={32} className="text-[#02A7BB]" />
        </div>
        <div>
          <p className="font-heading text-2xl text-[#0F172A] mb-2">We'll be in touch!</p>
          <p className="font-body font-light text-sm text-[#475569] leading-relaxed max-w-xs mx-auto">
            A counsellor will reach out within 24 hours. No pressure, no sales pitch — just an honest conversation.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "" }); }}
          className="font-body text-xs text-[#0263CC] hover:underline"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

      {/* Name */}
      <div className="relative">
        <label htmlFor="faq-name" className="font-body font-medium text-xs text-[#334155] mb-1.5 block">
          Full Name <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
          <input
            id="faq-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="faq-phone" className="font-body font-medium text-xs text-[#334155] mb-1.5 block">
          WhatsApp / Phone <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
          <input
            id="faq-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="faq-email" className="font-body font-medium text-xs text-[#334155] mb-1.5 block">
          Email Address
        </label>
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
          <input
            id="faq-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
          />
        </div>
      </div>

      {/* Course interest */}
      <div>
        <label htmlFor="faq-course" className="font-body font-medium text-xs text-[#334155] mb-1.5 block">
          Course Interest <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <BookOpen size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
          <select
            id="faq-course"
            name="course"
            required
            value={form.course}
            onChange={handleChange}
            className="w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
          >
            <option value="" disabled>Select a course...</option>
            {COURSE_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-1 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-body font-semibold text-sm text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC] disabled:opacity-60"
        style={{ backgroundColor: "#0263CC" }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "#0251a8")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0263CC")}
      >
        {loading ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Book Free Counselling
          </>
        )}
      </button>

      {/* Privacy note */}
      <p className="font-body text-xs text-[#94A3B8] text-center leading-relaxed">
        Your details are kept private. We never share or sell your information.
      </p>
    </form>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — centred above both columns */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]"
          >
            Your Questions, Answered Honestly
          </motion.h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">

          {/* ── LEFT: FAQ accordion ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-8"
            >
              <AccordionGroup items={FAQS} mode="single" />
            </motion.div>

            {/* Still have questions nudge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div>
                <p className="font-heading text-lg text-[#0F172A] mb-1">Still have a question?</p>
                <p className="font-body font-light text-sm text-[#475569]">
                  No question is off-limits in our free session.
                </p>
              </div>
              <a
                href="/counselling"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-medium text-sm text-white transition-colors duration-200"
                style={{ backgroundColor: "#0263CC" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0251a8"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0263CC"}
              >
                Book Free Counselling
              </a>
            </motion.div>

            {/* SEO note */}
            <p className="font-body text-xs text-[#94A3B8] mt-5">
              Have a question about a specific country?{" "}
              <Link href="/countries" className="text-[#0263CC] hover:underline">
                Browse our country guides →
              </Link>
            </p>
          </div>

          {/* ── RIGHT: Lead capture form ── */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            aria-label="Book a free counselling session"
            className="lg:sticky lg:top-24"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0]">

              {/* Card header */}
              <div className="px-7 pt-7 pb-6" style={{ backgroundColor: "#0263CC" }}>
                {/* Icon mark */}
                <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mb-4">


                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </div>

                <p className="font-body text-xs font-semibold text-white/60 uppercase tracking-widest mb-2">
                  Free · No Pressure · Honest
                </p>
                <h3 className="font-heading text-2xl text-white leading-snug mb-1">
                  Book Your Free Counselling Session
                </h3>
                <p className="font-body font-light text-white/75 text-sm leading-relaxed">
                  Tell us your interest and we'll help you find the right course, country and licensing path.
                </p>

                {/* Trust pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {TRUST_POINTS.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body text-xs font-medium text-white"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <CheckCircle2 size={11} aria-hidden="true" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form body */}
              <div className="bg-white px-7 py-6">
                <LeadForm />
              </div>

            </div>

            {/* Floating reassurance line */}
            <p className="font-body text-xs text-[#94A3B8] text-center mt-4">
              Medico Yatra never guarantees admission, visa or job outcomes.{" "}
              <Link href="/#faq" className="text-[#0263CC] hover:underline">
                Learn more
              </Link>
            </p>
          </motion.aside>

        </div>
      </div>
    </section>
  );
}
