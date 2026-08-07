"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { CAREERS } from "@/data/careers";
import Image from "next/image";

// Career icons as inline SVG per profession
const CAREER_ICONS = {
  mbbs: (
    <Image src="/images/mbbs.jpg" width={500} height={300} alt="MBBS" className="rounded-xl object-cover" />
  ),
  dentistry: (
    <Image src="/images/Dentistry-BDS.jpg" width={500} height={300} alt="MBBS" className="rounded-xl object-cover" />
  ),
  nursing: (
    <Image src="/images/nursing-new.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
  pharmacy: (
    <Image src="/images/young-woman-pharmacist.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
  physiotherapy: (
    <Image src="/images/physiotherapist-course.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
  respiratoryTherapy: (
    <Image src="/images/doctor-helping-patient-rehabilitation.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
  mlt: (
    <Image src="/images/labs.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
  alliedHealth: (
    <Image src="/images/alied-ask.jpg" width={500} height={300} alt="MBBS" className="rounded-xl" />
  ),
};

const directCareers = CAREERS.filter((c) => c.group === "direct");
const exploringCareers = CAREERS.filter((c) => c.group === "exploring");

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const card = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

function CareerCard({ career }) {
  const icon = CAREER_ICONS[career.id] || CAREER_ICONS.alliedHealth;

  return (
    <motion.article
      variants={card}
      className="group flex flex-col gap-4 bg-white border border-[#E2E8F0] rounded-2xl p-4 hover:shadow-lg hover:border-[#4DA5EC]/50 hover:-translate-y-0.5 transition-all duration-250"
      aria-label={`Career: ${career.title}`}
    >
      {/* Image */}
      <div className="w-full object-cover h-52 lg:h-40 shrink-0 rounded-xl bg-[#F1F7FC] border border-[#E2E8F0] flex items-center justify-center overflow-hidden group-hover:bg-[#e8f4fd] group-hover:border-[#4DA5EC]/30 transition-all duration-250">
        {icon}
      </div>

      {/* Title + badge */}
      <div className="flex items-start gap-2 flex-wrap">
        <h3 className="font-heading text-lg text-[#0F172A] leading-snug">
          {career.shortTitle}
        </h3>

        {career.badge && <Badge variant="teal">{career.badge}</Badge>}

        {career.popular && !career.badge && (
          <Badge variant="primary">Popular</Badge>
        )}
      </div>

      {/* Description */}
      <p className="font-body font-light text-sm text-[#475569] leading-relaxed flex-1">
        {career.description}
      </p>

      {/* Meta */}
      <div className="space-y-1.5 py-3 border-t border-[#F1F5F9]">
        <p className="font-body text-xs text-[#94A3B8]">
          <span className="font-medium text-[#475569]">Duration:</span>{" "}
          {career.duration}
        </p>

        <p className="font-body text-xs text-[#94A3B8]">
          <span className="font-medium text-[#475569]">Entry:</span>{" "}
          {career.entryRequirement}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={career.slug}
        className="flex items-center gap-2 font-body font-medium text-sm text-[#0263CC] hover:text-[#0251a8] group-hover:gap-3 transition-all duration-200"
        aria-label={`Learn more about ${career.title}`}
      >
        Learn More
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
}

export default function CareersSection() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="py-10 lg:py-10 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Healthcare Pathways
          </motion.p>
          <motion.h2
            id="careers-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4"
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
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
            <span className="font-body font-semibold text-sm text-[#0263CC] bg-[#d6e8fb] px-4 py-1.5 rounded-full whitespace-nowrap">
              Direct Entry After Class 12
            </span>
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
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
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
            <span className="font-body font-semibold text-sm text-[#475569] bg-[#F1F5F9] px-4 py-1.5 rounded-full whitespace-nowrap">
              Worth Exploring If You're Still Deciding
            </span>
            <div className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
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
              className="relative flex flex-col justify-center gap-3 h-[320px] min-[320px]:h-[400px] rounded-2xl p-6 text-white overflow-hidden bg-gradient-to-br from-[#0263CC] to-[#02A7BB]"
              style={{
                backgroundImage: "url('/images/counselling-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0263CC]/70" />

              {/* Content */}
              <div className="relative z-10">
                <p className="font-heading text-xl leading-snug">
                  Not sure which fits you?
                </p>

                <p className="font-body font-light text-sm text-white/85 leading-relaxed mt-3">
                  Use the Country Finder above, or — that's exactly what our free counselling is for.
                </p>

                <Link
                  href="/counselling"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm text-white hover:gap-3 transition-all duration-200 mt-4"
                  aria-label="Book free counselling to explore career options"
                >
                  Book Free Counselling
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
