"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Clock3,
  Mail,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const FEATURED_BLOG = {
  category: "Study Abroad",
  date: "May 10, 2024",
  readTime: "8 min read",
  title: "MBBS in Russia 2024: Top Universities, Fees, Admission & Eligibility",
  description:
    "A complete guide for Indian students planning to study MBBS in Russia, including universities, fees and admission requirements.",
  image: "/images/blogs/01_brussels_university_landmark.png",
};

const EDITORIAL_BLOGS = [
  {
    category: "Career Guide",
    date: "May 8, 2024",
    readTime: "6 min read",
    title: "FMGE vs NExT: Everything You Need to Know",
    description:
      "Understand the difference, future syllabus and preparation strategy.",
    image: "/images/blogs/02_digital_healthcare_doctor.png",
  },
  {
    category: "Study Tips",
    date: "May 5, 2024",
    readTime: "7 min read",
    title: "How to Choose the Right Medical University Abroad?",
    description:
      "Key factors to consider before selecting your dream university.",
    image: "/images/blogs/03_medical_students_studying.png",
  },
  {
    category: "University Guide",
    date: "May 3, 2024",
    readTime: "5 min read",
    title: "Best Medical Universities for Indian Students",
    description:
      "Explore important factors when comparing universities abroad.",
    image: "/images/blogs/03_medical_students_studying.png",
  },
];

const LATEST_BLOGS = [
  {
    category: "Study Abroad",
    date: "May 10, 2024",
    readTime: "6 min read",
    title: "Cost of Living for Indian Students in Different Countries",
    image: "/images/blogs/04_global_study_destinations.png",
  },
  {
    category: "Career Guide",
    date: "May 9, 2024",
    readTime: "5 min read",
    title: "Scope of MBBS Abroad: Jobs & Career Opportunities",
    image: "/images/blogs/10_medical_students_lab.png",
  },
  {
    category: "University Guide",
    date: "May 8, 2024",
    readTime: "6 min read",
    title: "Top Medical Universities in Philippines for Indian Students",
    image: "/images/blogs/11_university_landmark.png",
  },
  {
    category: "Exam Preparation",
    date: "May 7, 2024",
    readTime: "5 min read",
    title: "USMLE Step 1: Key Differences & Preparation Tips",
    image: "/images/blogs/12_exam_answer_sheet.png",
  },
];

const TRENDING_BLOGS = [
  {
    number: "01",
    title: "Top 10 Countries to Study MBBS Abroad in 2024",
    date: "May 12, 2024",
    readTime: "7 min read",
    image: "/images/blogs/11_university_landmark.png",
  },
  {
    number: "02",
    title: "FMGE Preparation Roadmap: 6 Months Study Plan",
    date: "May 11, 2024",
    readTime: "6 min read",
    image: "/images/blogs/05_fmge_preparation_roadmap.png",
  },
  {
    number: "03",
    title: "MBBS in Kazakhstan 2024: Top Universities, Fees & More",
    date: "May 9, 2024",
    readTime: "8 min read",
    image: "/images/blogs/06_international_country_flags.png",
  },
  {
    number: "04",
    title: "Documents Required for MBBS Admission Abroad",
    date: "May 7, 2024",
    readTime: "5 min read",
    image: "/images/blogs/07_medical_students_laptop.png",
  },
  {
    number: "05",
    title: "Career Opportunities After MBBS Abroad",
    date: "May 6, 2024",
    readTime: "6 min read",
    image: "/images/blogs/08_graduation_books.png",
  },
];

function SectionHeading({ children, action }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-black tracking-[-0.025em] text-[#0A1B44] sm:text-2xl">
          {children}
        </h2>

        <div className="mt-2 h-[3px] w-9 overflow-hidden rounded-full bg-[#0263CC]">
          <div className="h-full w-2/3 rounded-full bg-[#4DA5EC]" />
        </div>
      </div>

      {action}
    </div>
  );
}

function ReadMeta({ date, readTime, light = false }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] ${
        light ? "text-white/70" : "text-slate-400"
      }`}
    >
      <span>{date}</span>

      <span className="h-1 w-1 rounded-full bg-current opacity-50" />

      <span className="inline-flex items-center gap-1">
        <Clock3 className="h-3 w-3" />
        {readTime}
      </span>
    </div>
  );
}

function FeaturedBlog() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_40px_rgba(15,65,130,.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,65,130,.12)]"
    >
      {/* Image */}
      <Link
        href="/blogs/mbbs-in-russia"
        className="relative block aspect-[1.65/1] overflow-hidden"
      >
        <Image
          src={FEATURED_BLOG.image}
          alt={FEATURED_BLOG.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-[#0263CC] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-lg">
            Featured
          </span>
        </div>

        <div className="absolute bottom-3 left-3">
          <span className="flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md">
            <Clock3 className="h-3 w-3" />
            {FEATURED_BLOG.readTime}
          </span>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold text-[#0263CC]">
            {FEATURED_BLOG.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="text-[10px] text-slate-400">
            {FEATURED_BLOG.date}
          </span>
        </div>

        <h3 className="text-lg font-extrabold leading-[1.3] text-[#0A1B44] sm:text-xl">
          {FEATURED_BLOG.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 sm:text-sm">
          {FEATURED_BLOG.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF6FF]">
              <BookOpen className="h-3.5 w-3.5 text-[#0263CC]" />
            </div>

            <span className="text-[10px] font-semibold text-slate-500">
              MedicoYatra Team
            </span>
          </div>

          <Link
            href="/blogs/mbbs-in-russia"
            className="group/link inline-flex items-center gap-1 text-[10px] font-bold text-[#0263CC]"
          >
            Read More
            <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function EditorialCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group flex gap-3 rounded-2xl border border-slate-200/70 bg-white p-2.5 shadow-[0_8px_30px_rgba(15,65,130,.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC]/10 hover:shadow-[0_12px_35px_rgba(15,65,130,.09)]"
    >
      <Link
        href="/blog"
        className="relative h-[96px] w-[125px] shrink-0 overflow-hidden rounded-xl sm:h-[108px] sm:w-[145px]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="145px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[8px] text-white backdrop-blur">
          <Clock3 className="h-2.5 w-2.5" />
          {blog.readTime}
        </span>
      </Link>

      <div className="min-w-0 flex-1 py-0.5">
        <div className="mb-1 flex items-center gap-1.5 text-[9px] text-slate-400">
          <span className="font-semibold text-[#0263CC]">
            {blog.category}
          </span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        <Link href="/blog">
          <h3 className="line-clamp-2 text-sm font-extrabold leading-[1.3] text-[#0A1B44] transition-colors group-hover:text-[#0263CC]">
            {blog.title}
          </h3>
        </Link>

        <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-slate-500">
          {blog.description}
        </p>

        <Link
          href="/blog"
          className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-[#0263CC]"
        >
          Read More
          <ArrowRight className="h-2.5 w-2.5" />
        </Link>
      </div>
    </motion.article>
  );
}

function LatestBlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_25px_rgba(15,65,130,.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,65,130,.1)]"
    >
      <Link
        href="/blog"
        className="relative block aspect-[1.45/1] overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[8px] text-white backdrop-blur">
          <Clock3 className="h-2.5 w-2.5" />
          {blog.readTime}
        </div>
      </Link>

      <div className="p-3.5">
        <div className="mb-1.5 flex items-center gap-1 text-[9px]">
          <span className="font-bold text-[#0263CC]">
            {blog.category}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400">{blog.date}</span>
        </div>

        <h3 className="line-clamp-2 text-sm font-extrabold leading-[1.35] text-[#0A1B44] transition-colors group-hover:text-[#0263CC]">
          {blog.title}
        </h3>

        <Link
          href="/blog"
          className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-[#0263CC]"
        >
          Read More
          <ArrowRight className="h-2.5 w-2.5" />
        </Link>
      </div>
    </motion.article>
  );
}

function TrendingBlogs() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_40px_rgba(15,65,130,.07)] sm:p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-black text-[#0A1B44]">
            Trending Blogs
          </h3>

          <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#0263CC]" />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF6FF]">
          <TrendingUp className="h-4 w-4 text-[#0263CC]" />
        </div>
      </div>

      <div className="space-y-2">
        {TRENDING_BLOGS.map((blog, index) => (
          <Link
            href="/blog"
            key={blog.number}
            className="group flex gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-[#F7FAFF]"
          >
            <span className="flex w-5 shrink-0 items-center justify-center text-[9px] font-black text-[#0263CC]">
              {blog.number}
            </span>

            <div className="relative h-[57px] w-[67px] shrink-0 overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="67px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="min-w-0">
              <h4 className="line-clamp-2 text-[10px] font-extrabold leading-[1.35] text-[#0A1B44] group-hover:text-[#0263CC]">
                {blog.title}
              </h4>

              <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-4 flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#0263CC]/20 text-[10px] font-bold text-[#0263CC] transition-all hover:bg-[#0263CC] hover:text-white"
      >
        View All Trending
        <ArrowRight className="h-3 w-3" />
      </Link>
    </motion.aside>
  );
}

function NewsletterCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0263CC] via-[#075ACB] to-[#063A99] p-5 text-white shadow-[0_15px_45px_rgba(2,70,170,.2)]"
    >
      {/* Decorative SVG */}
      <svg
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 opacity-20"
        viewBox="0 0 160 160"
        fill="none"
      >
        <circle
          cx="80"
          cy="80"
          r="60"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="5 6"
        />
        <circle
          cx="80"
          cy="80"
          r="38"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M30 100C60 65 85 90 130 35"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <Mail className="h-4 w-4" />
          </div>

          <Sparkles className="h-4 w-4 text-cyan-200" />
        </div>

        <h3 className="text-lg font-black leading-tight">
          Stay Updated
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-blue-100">
          Subscribe to our newsletter and get the latest blogs,
          tips and updates delivered straight to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 flex rounded-xl bg-white p-1"
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-2 text-[10px] text-slate-800 outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[#0263CC] px-3 py-2 text-[9px] font-bold text-white transition-colors hover:bg-[#014A99]"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-3 text-[9px] text-blue-100/80">
          🔒 No spam. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
}

export default function BlogContentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-2 sm:py-2 lg:py-6">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-180px] top-[15%] h-[350px] w-[350px] rounded-full bg-[#0263CC]/[0.025] blur-3xl" />

        <div className="absolute right-[-180px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#02A7BB]/[0.025] blur-3xl" />

        {/* lightweight animated SVG */}
        <motion.svg
          className="absolute right-[4%] top-[8%] hidden h-40 w-40 opacity-[0.07] lg:block"
          viewBox="0 0 160 160"
          animate={{ rotate: [0, 8, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="80"
            cy="80"
            r="65"
            fill="none"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <circle
            cx="80"
            cy="80"
            r="42"
            fill="none"
            stroke="#4DA5EC"
            strokeWidth="1"
          />
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            FEATURED + TRENDING
        ================================================== */}

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">

          {/* LEFT */}
          <div className="min-w-0">

            <SectionHeading
              action={
                <Link
                  href="/blog"
                  className="hidden items-center gap-1 text-[14px] font-bold text-[#0263CC] sm:flex"
                >
                  View All
                  <ArrowRight className="h-3 w-3" />
                </Link>
              }
            >
              Featured Blogs
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-[1.08fr_.92fr]">

              <FeaturedBlog />

              <div className="space-y-3">
                {EDITORIAL_BLOGS.slice(0).map((blog, index) => (
                  <EditorialCard
                    key={blog.title}
                    blog={blog}
                    index={index}
                  />
                ))}
              </div>

            </div>

            {/* =================================================
                LATEST
            ================================================== */}

            <div className="mt-10">

              <SectionHeading
                action={
                  <button
                    type="button"
                    className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] font-semibold text-slate-600 transition-colors hover:border-[#0263CC]/20 hover:text-[#0263CC] sm:flex"
                  >
                    All Categories
                    <ChevronDown className="h-3 w-3" />
                  </button>
                }
              >
                Latest Blogs
              </SectionHeading>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                {LATEST_BLOGS.map((blog, index) => (
                  <LatestBlogCard
                    key={blog.title}
                    blog={blog}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[#0263CC]/20 bg-white px-5 py-2.5 text-[14px] font-bold text-[#0263CC] shadow-sm transition-all hover:bg-[#0263CC] hover:text-white"
                >
                  Load More Blogs
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}

          <div className="min-w-0">

            <div className="sticky top-24">
              <TrendingBlogs />
              <NewsletterCard />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}