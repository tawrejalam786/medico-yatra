"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { CAREERS } from "@/data/careers";

// Career icons as inline SVG per profession
const CAREER_ICONS = {
  mbbs: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="9" r="5" stroke="#0263CC" strokeWidth="1.8"/>
      <path d="M11 14h6l1 9H10l1-9z" stroke="#0263CC" strokeWidth="1.8" strokeLinejoin="round"/>
      <line x1="14" y1="16" x2="14" y2="21" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11.5" y1="18.5" x2="16.5" y2="18.5" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  dentistry: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M10 6C7 6 5 8 5 11c0 4 2 7 4 10l1 1h8l1-1c2-3 4-6 4-10 0-3-2-5-5-5-1.5 0-2.5.8-3 1.5C14.5 6.8 13.5 6 12 6c-.7 0-1.4.15-2 .4V6z" stroke="#0263CC" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  nursing: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="9" y="6" width="10" height="16" rx="3" stroke="#0263CC" strokeWidth="1.8"/>
      <line x1="14" y1="10" x2="14" y2="16" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="11" y1="13" x2="17" y2="13" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  pharmacy: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="8" y="7" width="12" height="16" rx="3" stroke="#0263CC" strokeWidth="1.8"/>
      <rect x="11" y="5" width="6" height="4" rx="1.5" stroke="#0263CC" strokeWidth="1.5"/>
      <line x1="11" y1="13" x2="17" y2="13" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="16" x2="15" y2="16" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="19" x2="16" y2="19" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  physiotherapy: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="7" r="3" stroke="#0263CC" strokeWidth="1.8"/>
      <path d="M14 10v7" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 14l-4 4" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 14l4 4" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 10l-3 3" stroke="#0263CC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 10l3 3" stroke="#0263CC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  respiratoryTherapy: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M8 20c0-5 3-9 6-9s6 4 6 9" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M14 11V8" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="14" cy="7" rx="3" ry="2" stroke="#4DA5EC" strokeWidth="1.5"/>
      <path d="M10 16c-1.5 0-3 1-3 3" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 16c1.5 0 3 1 3 3" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  mlt: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="16" r="6" stroke="#0263CC" strokeWidth="1.8"/>
      <path d="M11 10V7h6v3" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="16" r="2.5" fill="#d6e8fb"/>
      <circle cx="13" cy="15.5" r="1" fill="#0263CC"/>
    </svg>
  ),
  alliedHealth: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="#94A3B8" strokeWidth="1.8" strokeDasharray="4 3"/>
      <text x="10" y="18" fontSize="12" fill="#94A3B8" fontWeight="bold">?</text>
    </svg>
  ),
};

const directCareers  = CAREERS.filter((c) => c.group === "direct");
const exploringCareers = CAREERS.filter((c) => c.group === "exploring");

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const card = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

function CareerCard({ career }) {
  const icon = CAREER_ICONS[career.id] || CAREER_ICONS.alliedHealth;

  return (
    <motion.article
      variants={card}
      className="group flex flex-col gap-4 bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:border-[#4DA5EC]/50 hover:-translate-y-0.5 transition-all duration-250"
      aria-label={`Career: ${career.title}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#F1F7FC] border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#e8f4fd] group-hover:border-[#4DA5EC]/30 transition-all duration-250">
        {icon}
      </div>

      {/* Title + badge */}
      <div className="flex items-start gap-2 flex-wrap">
        <h3 className="font-heading text-lg text-[#0F172A] leading-snug">{career.shortTitle}</h3>
        {career.badge && <Badge variant="teal">{career.badge}</Badge>}
        {career.popular && !career.badge && <Badge variant="primary">Popular</Badge>}
      </div>

      {/* Description */}
      <p className="font-body font-light text-sm text-[#475569] leading-relaxed flex-1">
        {career.description}
      </p>

      {/* Meta */}
      <div className="space-y-1.5 py-3 border-t border-[#F1F5F9]">
        <p className="font-body text-xs text-[#94A3B8]">
          <span className="font-medium text-[#475569]">Duration:</span> {career.duration}
        </p>
        <p className="font-body text-xs text-[#94A3B8]">
          <span className="font-medium text-[#475569]">Entry:</span> {career.entryRequirement}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={career.slug}
        className="flex items-center gap-2 font-body font-medium text-sm text-[#0263CC] hover:text-[#0251a8] group-hover:gap-3 transition-all duration-200"
        aria-label={`Learn more about ${career.title}`}
      >
        Learn More
        <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1"/>
      </Link>
    </motion.article>
  );
}

export default function CareersSection() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Healthcare Pathways
          </motion.p>
          <motion.h2
            id="careers-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4"
          >
            One Partner for Your Entire Healthcare Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body font-light text-[#475569] text-base sm:text-lg max-w-2xl mx-auto"
          >
            Not sure which healthcare career is right for you? That's exactly what our free counselling session is for.
          </motion.p>
        </div>

        {/* Group A */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true"/>
            <span className="font-body font-semibold text-sm text-[#0263CC] bg-[#d6e8fb] px-4 py-1.5 rounded-full whitespace-nowrap">
              Direct Entry After Class 12
            </span>
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true"/>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {directCareers.map((c) => (
              <CareerCard key={c.id} career={c} />
            ))}
          </motion.div>
        </div>

        {/* Group B */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true"/>
            <span className="font-body font-semibold text-sm text-[#475569] bg-[#F1F5F9] px-4 py-1.5 rounded-full whitespace-nowrap">
              Worth Exploring If You're Still Deciding
            </span>
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true"/>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl"
          >
            {exploringCareers.map((c) => (
              <CareerCard key={c.id} career={c} />
            ))}

            {/* "Not sure?" nudge */}
            <motion.div
              variants={card}
              className="flex flex-col justify-center gap-3 bg-gradient-to-br from-[#0263CC] to-[#02A7BB] rounded-2xl p-6 text-white"
            >
              <p className="font-heading text-xl leading-snug">Not sure which fits you?</p>
              <p className="font-body font-light text-sm text-white/85 leading-relaxed">
                Use the Country Finder above, or — that's exactly what our free counselling is for.
              </p>
              <Link
                href="/counselling"
                className="inline-flex items-center gap-2 font-body font-medium text-sm text-white hover:gap-3 transition-all duration-200 mt-1"
                aria-label="Book free counselling to explore career options"
              >
                Book Free Counselling
                <ArrowRight size={15} aria-hidden="true"/>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
