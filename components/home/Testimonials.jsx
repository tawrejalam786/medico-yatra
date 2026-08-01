"use client";

import { motion } from "framer-motion";
import { PlayCircle, Quote } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

/**
 * DEVELOPMENT PLACEHOLDERS ONLY.
 * All testimonials below are clearly marked for replacement before launch.
 * Do not fabricate names, photos, or quotes.
 * Real testimonials must be genuine, consented, and verifiable.
 */
const TESTIMONIALS = [
  {
    id: "t1",
    type: "student",
    quote: "[Real Student Testimonial — Replace Before Launch]",
    name: "Tawrej Alam",
    course: "[Course Name]",
    country: "[Destination Country]",
    label: "Student",
    placeholder: true,
  },
  {
    id: "t2",
    type: "nursing",
    quote: "[Real Nursing Student Testimonial — Replace Before Launch]",
    name: "[Nursing Student First Name & Last Initial]",
    course: "Nursing",
    country: "[Destination Country]",
    label: "Nursing Student",
    placeholder: true,
  },
  {
    id: "t3",
    type: "parent",
    quote: "[Real Parent Testimonial — Replace Before Launch]",
    name: "[Parent First Name & Last Initial]",
    course: "[Their Child's Course]",
    country: "[Destination Country]",
    label: "Parent's Voice",
    placeholder: true,
    isParent: true,
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

function TestimonialCard({ t }) {
  return (
    <motion.article
      variants={card}
      className="flex flex-col gap-5 bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg hover:border-[#4DA5EC]/40 transition-all duration-250"
      aria-label={`Testimonial from ${t.name}`}
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <Badge variant={t.isParent ? "teal" : "primary"}>{t.label}</Badge>
        {t.placeholder && (
          <span className="font-body text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            Placeholder
          </span>
        )}
      </div>

      {/* Quote */}
      <div className="relative flex-1">
        <Quote size={20} className="text-[#d6e8fb] absolute -top-1 -left-1" aria-hidden="true"/>
        <p className={`font-body font-light text-sm leading-relaxed pl-5 ${t.placeholder ? "text-[#94A3B8] italic" : "text-[#334155]"}`}>
          {t.quote}
        </p>
      </div>

      {/* Attribution */}
      <div className="border-t border-[#F1F5F9] pt-4">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-[#F1F7FC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
            <span className="font-body font-semibold text-sm text-[#94A3B8]">
              {t.placeholder ? "?" : t.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className={`font-body font-medium text-sm ${t.placeholder ? "text-[#94A3B8]" : "text-[#0F172A]"}`}>
              {t.name}
            </p>
            <p className="font-body text-xs text-[#94A3B8]">
              {t.course} · {t.country}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function VideoTestimonialCard() {
  return (
    <motion.article
      variants={card}
      className="flex flex-col gap-4 bg-[#0F172A] rounded-2xl p-6 text-white relative overflow-hidden"
      aria-label="Video testimonial placeholder"
    >
      {/* Bg decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/20 to-[#02A7BB]/10 pointer-events-none" aria-hidden="true"/>

      <div className="relative z-10 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <Badge variant="white">Video Story</Badge>
          <span className="font-body text-xs text-amber-400 bg-amber-900/40 border border-amber-700/40 px-2 py-0.5 rounded-full">
            Placeholder
          </span>
        </div>

        {/* Video thumbnail placeholder */}
        <div className="flex-1 flex items-center justify-center bg-white/5 rounded-xl min-h-[120px] border border-white/10">
          <div className="flex flex-col items-center gap-3 text-center p-4">
            <PlayCircle size={44} className="text-white/40" aria-hidden="true"/>
            <div>
              <p className="font-body font-medium text-sm text-white/60">
                ▶ Watch [Name]'s Story
              </p>
              <p className="font-body text-xs text-white/30 mt-1">
                [Real video testimonial — Replace Before Launch]
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
            <span className="font-body text-sm text-white/40">?</span>
          </div>
          <div>
            <p className="font-body font-medium text-sm text-white/60">[Student Name]</p>
            <p className="font-body text-xs text-white/30">[Course] · [Country]</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 lg:py-28 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Student Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4"
          >
            Real Students. Real Journeys.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 max-w-lg mx-auto"
          >
            <span className="text-amber-600 text-sm">⚠</span>
            <p className="font-body text-xs text-amber-700 leading-snug">
              These are development placeholders. All testimonials must be real, consented, and
              verified before launch. Never fabricate testimonials.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
          <VideoTestimonialCard />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button href="/counselling" variant="primary" size="lg">
            Start Your Journey — Book Free Counselling
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
