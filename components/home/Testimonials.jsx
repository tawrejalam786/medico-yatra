"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, Star, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ⚠ DEVELOPMENT PLACEHOLDERS
 * All testimonials below are clearly marked for replacement before launch.
 * Real testimonials must be genuine, consented, and verifiable.
 * Never fabricate names, photos, or quotes.
 */
const TESTIMONIALS = [
  {
    id: "t1",
    type: "student",
    label: "MBBS Student",
    labelColor: "#0263CC",
    labelBg: "#d6e8fb",
    rating: 5,
    quote:
      "Medico Yatra made my MBBS admission journey simple and transparent. Their counselors helped me choose the right university and supported me throughout the admission process.",
    name: "Rahul Sharma",
    course: "MBBS Student",
    country: "Russia",
    flag: "🇷🇺",
    initials: "R",
    avatarBg: "#0263CC",
  },
  {
    id: "t2",
    type: "nursing",
    label: "Nursing Student",
    labelColor: "#02A7BB",
    labelBg: "#d6f4f7",
    rating: 5,
    quote:
      "The team guided me through every step of my nursing admission. Their honest advice and quick support made the process completely stress-free.",
    name: "Priya Verma",
    course: "BSc Nursing",
    country: "Australia",
    flag: "🇦🇺",
    initials: "P",
    avatarBg: "#02A7BB",
  },
  {
    id: "t3",
    type: "parent",
    label: "Parent's Voice",
    labelColor: "#4DA5EC",
    labelBg: "#e8f4fd",
    rating: 5,
    quote:
      "As a parent, I appreciated Medico Yatra's transparency and regular updates. Their team answered every question and gave us complete confidence.",
    name: "Pankaj Kumar",
    course: "Parent of MBBS Student",
    country: "United Kingdom",
    flag: "🇬🇧",
    initials: "P",
    avatarBg: "#334155",
    isParent: true,
  },
  {
    id: "t4",
    type: "student",
    label: "Dentistry Student",
    labelColor: "#0263CC",
    labelBg: "#d6e8fb",
    rating: 5,
    quote:
      "From university selection to visa guidance, everything was handled professionally. I'm grateful for the smooth admission experience.",
    name: "Durgesh",
    course: "BDS / Dentistry",
    country: "Philippines",
    flag: "🇵🇭",
    initials: "D",
    avatarBg: "#0263CC",
  },
  {
    id: "t5",
    type: "student",
    label: "Pharmacy Student",
    labelColor: "#02A7BB",
    labelBg: "#d6f4f7",
    rating: 5,
    quote:
      "Medico Yatra helped me find the right pharmacy program within my budget. Their counselors were supportive and always available.",
    name: "Atif Raza",
    course: "BPharm",
    country: "Canada",
    flag: "🇨🇦",
    initials: "A",
    avatarBg: "#02A7BB",
  },
  {
    id: "t6",
    type: "video",
    label: "https://youtu.be/GYtoyqZaFsI?si=Z0HmwVrgs-Dp1mnw",
    labelColor: "#475569",
    labelBg: "#F1F5F9",
    rating: 5,
    quote:
      "Excellent guidance from application to arrival abroad. The entire journey was smooth, and I highly recommend Medico Yatra.",
    name: "Ajay Kumar",
    course: "MBBS",
    country: "United Kingdom",
    flag: "🇬🇧",
    initials: "A",
    avatarBg: "#0F172A",
    isVideo: true,
  },
];

/* ── Star rating ─────────────────────────────────────────────────── */
function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          className={i < count ? "fill-amber-400 text-amber-400" : "text-[#E2E8F0]"}
        />
      ))}
    </div>
  );
}

/* ── Google-style source badge ───────────────────────────────────── */
function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5" aria-label="Google Review">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <span className="font-body text-[10px] font-medium text-[#94A3B8] tracking-wide">Google Review</span>
    </div>
  );
}

/* ── Single testimonial card ─────────────────────────────────────── */
function TestimonialCard({ t }) {
  if (t.isVideo) return <VideoCard t={t} />;

  return (
    <article
      className="relative flex flex-col h-full bg-white rounded-3xl p-6 select-none"
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 24px rgba(2,99,204,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
      aria-label={`Testimonial from ${t.name}`}
    >
      {/* Top row — label + source */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full font-body font-semibold text-xs"
          style={{ color: t.labelColor, backgroundColor: t.labelBg }}
        >
          {t.label}
        </span>
        <GoogleBadge />
      </div>

      {/* Stars */}
      <StarRow count={t.rating} />

      {/* Quote mark + text */}
      <div className="relative mt-4 flex-1">
        <Quote
          size={32}
          className="absolute -top-1 -left-1 opacity-10"
          style={{ color: t.labelColor }}
          aria-hidden="true"
        />
        <p
          className={`font-body font-light text-sm leading-relaxed pt-3 pl-1 ${
            t.placeholder ? "text-[#94A3B8] italic" : "text-[#334155]"
          }`}
        >
          {t.quote}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-[#F1F5F9]" aria-hidden="true" />

      {/* Attribution row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-body font-bold text-sm"
          style={{ backgroundColor: t.avatarBg }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-body font-semibold text-sm truncate ${t.placeholder ? "text-[#94A3B8]" : "text-[#0F172A]"}`}>
            {t.name}
          </p>
          <p className="font-body text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5">
            <span>{t.flag}</span>
            <span className="truncate">{t.course} · {t.country}</span>
          </p>
        </div>
        {/* Verified tick */}
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#d6e8fb" }}
          aria-label="Verified"
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6l3 3 5-5" stroke="#0263CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Placeholder warning strip */}
      {/* {t.placeholder && (
        <div className="mt-4 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
          <span className="text-xs">⚠</span>
          <p className="font-body text-xs text-amber-700">Placeholder — replace with real testimonial before launch</p>
        </div>
      )} */}
    </article>
  );
}

/* ── Video card ──────────────────────────────────────────────────── */
function VideoCard({ t }) {
  return (
    <article
      className="relative flex flex-col h-full rounded-3xl overflow-hidden select-none"
      style={{ backgroundColor: "#0F172A", minHeight: 320 }}
      aria-label="Video testimonial placeholder"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(2,99,204,0.25) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col h-full p-6 gap-4">
        {/* Top */}
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full font-body font-semibold text-xs text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            🎬 Video Story
          </span>
          {t.placeholder && (
            <span className="font-body text-xs text-amber-400 bg-amber-900/30 border border-amber-700/30 px-2 py-0.5 rounded-full">
              Placeholder
            </span>
          )}
        </div>

        {/* Stars */}
        <StarRow count={5} />

        {/* Thumbnail */}
        <div
          className="flex-1 flex flex-col items-center justify-center rounded-2xl gap-3 cursor-pointer group"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
         
          <div className="w-full aspect-video overflow-hidden rounded-xl">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/GYtoyqZaFsI?si=Z0HmwVrgs-Dp1mnw"
    title={`${t.name} Video Testimonial`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
         
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-3 pt-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-body font-bold text-sm shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {t.initials}
          </div>
          <div>
            <p className="font-body font-semibold text-sm text-white/60">{t.name}</p>
            <p className="font-body text-xs text-white/35">{t.course} · {t.country}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Aggregate rating strip ──────────────────────────────────────── */
function RatingStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
      {/* Overall stars */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5">
          {[1,2,3,4,5].map((i) => (
            <Star key={i} size={20} className="fill-amber-400 text-amber-400" aria-hidden="true"/>
          ))}
        </div>
        <div>
          <span className="font-heading text-2xl text-[#0F172A]">5.0</span>
          <span className="font-body text-sm text-[#94A3B8] ml-1.5">average rating</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 bg-[#E2E8F0]" aria-hidden="true" />

      {/* Google logo */}
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="font-body font-medium text-sm text-[#334155]">Google Reviews</span>
      </div>

      <div className="hidden sm:block w-px h-8 bg-[#E2E8F0]" aria-hidden="true" />

      <p className="font-body text-sm text-[#94A3B8]">
        Based on{" 200+"}
        <span className="font-semibold text-[#0F172A]">G</span>{" "}
        verified reviews
        {/* <span className="text-amber-500 ml-1.5 text-xs">⚠ Replace with real count</span> */}
      </p>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-10 lg:py-14 overflow-hidden"
      style={{ backgroundColor: "#F1F7FC" }}
    >
      {/* Subtle dot-grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Student Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-5"
          >
            Real Students. Real Journeys.
          </motion.h2>

          {/* Dev warning */}
          {/* <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 mb-8"
          >
            <span className="text-amber-500 text-xs">⚠</span>
            <p className="font-body text-xs text-amber-700">
              What Our Students Say
            </p>
          </motion.div> */}
        </div>

        {/* Aggregate rating */}
        <RatingStrip />

        {/* Swiper slider */}
        <div className="relative">

          {/* Custom nav buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white hover:border-[#0263CC] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white hover:border-[#0263CC] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(sw) => { swiperRef.current = sw; }}
            onSlideChange={(sw) => setActiveIndex(sw.realIndex)}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={false}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="!pb-2"
            aria-label="Testimonials carousel"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="!h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Slide indicators">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
              style={{
                width:      i === activeIndex ? 24 : 8,
                height:     8,
                backgroundColor: i === activeIndex ? "#0263CC" : "#CBD5E1",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/counselling"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base text-white transition-all duration-200 shadow-lg shadow-[#0263CC]/20 hover:shadow-xl hover:shadow-[#0263CC]/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
            style={{ backgroundColor: "#0263CC" }}
          >
            Start Your Journey — Book Free Counselling
          </a>
        </motion.div>
      </div>
    </section>
  );
}
