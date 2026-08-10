"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const categories = [
  {
    title: "Study Abroad",
    articles: "45 Articles",
    icon: Globe2,
    color: "blue",
    description: "Universities, countries & admissions",
  },
  {
    title: "Career Guide",
    articles: "38 Articles",
    icon: BriefcaseBusiness,
    color: "green",
    description: "Careers, jobs & opportunities",
  },
  {
    title: "Exam Preparation",
    articles: "42 Articles",
    icon: BookOpen,
    color: "purple",
    description: "FMGE, NExT, USMLE & more",
  },
  {
    title: "University Guide",
    articles: "31 Articles",
    icon: Building2,
    color: "orange",
    description: "Compare universities worldwide",
  },
  {
    title: "Scholarships",
    articles: "28 Articles",
    icon: GraduationCap,
    color: "pink",
    description: "Funding & scholarship guides",
  },
  {
    title: "Student Life",
    articles: "26 Articles",
    icon: UserRound,
    color: "cyan",
    description: "Life, culture & student tips",
  },
];

const trustPoints = [
  {
    title: "Expert Writers",
    description: "Content by medical professionals",
    icon: UserRound,
    color: "blue",
  },
  {
    title: "Research Based",
    description: "Well-researched & fact-checked",
    icon: Microscope,
    color: "purple",
  },
  {
    title: "Regular Updates",
    description: "Latest information & trends",
    icon: ShieldCheck,
    color: "green",
  },
  {
    title: "Student Focused",
    description: "Guidance for your success",
    icon: HeartHandshake,
    color: "orange",
  },
  {
    title: "Global Perspective",
    description: "Insights from top destinations",
    icon: Globe2,
    color: "cyan",
  },
];

const colorStyles = {
  blue: {
    wrapper: "bg-[#EEF5FF]",
    icon: "text-[#0263CC]",
    glow: "group-hover:shadow-[#0263CC]/20",
    count: "bg-[#EEF5FF] text-[#0263CC]",
  },
  green: {
    wrapper: "bg-[#ECFAF2]",
    icon: "text-[#24A95A]",
    glow: "group-hover:shadow-[#24A95A]/20",
    count: "bg-[#ECFAF2] text-[#24A95A]",
  },
  purple: {
    wrapper: "bg-[#F3F0FF]",
    icon: "text-[#7255E8]",
    glow: "group-hover:shadow-[#7255E8]/20",
    count: "bg-[#F3F0FF] text-[#7255E8]",
  },
  orange: {
    wrapper: "bg-[#FFF5E9]",
    icon: "text-[#F28A21]",
    glow: "group-hover:shadow-[#F28A21]/20",
    count: "bg-[#FFF5E9] text-[#F28A21]",
  },
  pink: {
    wrapper: "bg-[#FFF0F4]",
    icon: "text-[#F05270]",
    glow: "group-hover:shadow-[#F05270]/20",
    count: "bg-[#FFF0F4] text-[#F05270]",
  },
  cyan: {
    wrapper: "bg-[#EAF9FB]",
    icon: "text-[#02A7BB]",
    glow: "group-hover:shadow-[#02A7BB]/20",
    count: "bg-[#EAF9FB] text-[#02A7BB]",
  },
};

function SectionTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-8 max-w-2xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F4F8FF] px-3 py-1.5">
        <Sparkles className="h-3.5 w-3.5 text-[#0263CC]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC]">
          Explore Our Knowledge
        </span>
      </div>

      <h2 className="text-2xl font-black tracking-[-0.035em] text-[#0A1B44] sm:text-3xl lg:text-[34px]">
        Browse by{" "}
        <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
          Category
        </span>
      </h2>

      <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
        Explore expert-written articles, practical guides and the latest
        insights to help you make smarter decisions about your medical career.
      </p>

      <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
        <span className="h-px w-7 bg-[#0263CC]/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />
        <span className="h-px w-7 bg-[#0263CC]/20" />
      </div>
    </motion.div>
  );
}

function CategoryCard({ category, index }) {
  const Icon = category.icon;
  const styles = colorStyles[category.color];

  return (
    <motion.a
      href="/blog"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 text-center shadow-[0_8px_30px_rgba(15,65,130,.05)] transition-all duration-300 hover:border-[#0263CC]/10 hover:shadow-xl ${styles.glow}`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0263CC]/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${styles.wrapper} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon
            className={`h-6 w-6 ${styles.icon}`}
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm font-extrabold text-[#0A1B44] transition-colors group-hover:text-[#0263CC] sm:text-[15px]">
          {category.title}
        </h3>

        {/* Description */}
        <p className="mx-auto mt-1.5 hidden max-w-[170px] text-[10px] leading-4 text-slate-400 sm:block">
          {category.description}
        </p>

        {/* Article count */}
        <div
          className={`mx-auto mt-3 inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold ${styles.count}`}
        >
          {category.articles}
        </div>

        {/* Hover arrow */}
        <div className="mt-3 flex justify-center">
          <span className="flex items-center gap-1 text-[9px] font-bold text-[#0263CC] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Explore
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function TrustPoint({ point, index }) {
  const Icon = point.icon;
  const styles = colorStyles[point.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
      }}
      className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/80"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${styles.wrapper} transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon
          className={`h-5 w-5 ${styles.icon}`}
          strokeWidth={1.8}
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-xs font-extrabold text-[#0A1B44]">
          {point.title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-slate-500">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function BlogCategoriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-4 sm:py-3 lg:py-4">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft blobs */}
        <motion.div
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0263CC]/[0.025] blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#02A7BB]/[0.03] blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated SVG */}
        <motion.svg
          className="absolute right-[3%] top-[8%] hidden h-52 w-52 opacity-[0.055] lg:block"
          viewBox="0 0 220 220"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle
            cx="110"
            cy="110"
            r="85"
            fill="none"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="4 7"
          />

          <circle
            cx="110"
            cy="110"
            r="55"
            fill="none"
            stroke="#4DA5EC"
            strokeWidth="1"
          />

          <circle
            cx="195"
            cy="110"
            r="4"
            fill="#0263CC"
          />

          <circle
            cx="110"
            cy="25"
            r="3"
            fill="#02A7BB"
          />
        </motion.svg>

        {/* Dot pattern */}
        <svg
          className="absolute bottom-10 left-4 hidden h-28 w-40 opacity-[0.07] sm:block"
          viewBox="0 0 160 110"
        >
          {Array.from({ length: 45 }).map((_, index) => {
            const x = (index % 9) * 18 + 5;
            const y = Math.floor(index / 9) * 18 + 5;

            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="1.3"
                fill="#0263CC"
              />
            );
          })}
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle />

        {/* =================================================
            CATEGORY GRID
        ================================================== */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative mt-7 overflow-hidden rounded-2xl border border-[#E5EFFC] bg-gradient-to-r from-[#F5F9FF] via-[#F8FBFF] to-[#F1FAFC] p-3 sm:mt-8 sm:p-4 lg:p-5"
        >
          {/* Background SVG */}
          <svg
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.035]"
            viewBox="0 0 600 180"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 90C100 20 180 160 300 90C420 20 500 140 600 60"
              stroke="#0263CC"
              strokeWidth="2"
              strokeDasharray="7 8"
            />
          </svg>

          <div className="relative grid grid-cols-1 divide-y divide-[#DDEAF9] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {trustPoints.map((point, index) => (
              <TrustPoint
                key={point.title}
                point={point}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom micro CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2 text-center"
        >
          <Lightbulb className="h-3.5 w-3.5 text-[#0263CC]" />

          <p className="text-[10px] text-slate-400">
            Trusted insights to help you make better decisions.
          </p>

          <ArrowRight className="h-3 w-3 text-[#0263CC]" />
        </motion.div>
      </div>
    </section>
  );
}