"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
 * IMAGE ASSIGNMENT
 * Assign your real photos here. Each slide references one image from /public/images/.
 * Add more images to /public/images/ and update the `image` field in each slide.
 * If an image is missing for a slide, the accent-coloured fallback background shows.
 */

/* ─────────────────────────────────────────────
   Each slide = one healthcare professional
   Rich illustrated cards with:
   - Profession-themed colour accent
   - Detailed SVG illustration
   - Role label + country flag
   - Floating stat badge
───────────────────────────────────────────── */
const SLIDES = [
  {
    id: "doctor",
    role: "Physician",
    course: "MBBS / MD",
    destination: "Study in Russia · UK · Philippines",
    flag: "🩺",
    accentColor: "#4DA5EC",
    accentLight: "rgba(77,165,236,0.15)",
    stat: { label: "NMC Recognised", value: "Universities" },
    badge: "Most Popular",
    badgeColor: "#4DA5EC",
    image: "/images/doc1.jpg",
    imageAlt: "A confident physician in a white coat with stethoscope",
  },
  {
    id: "nurse",
    role: "Nurse",
    course: "BSc Nursing",
    destination: "Study in UK · Australia · Canada",
    flag: "💉",
    accentColor: "#02A7BB",
    accentLight: "rgba(2,167,187,0.15)",
    stat: { label: "High Global", value: "Demand" },
    badge: "PR Pathways",
    badgeColor: "#02A7BB",
    image: "/images/nursing.jpg",
    imageAlt: "A nurse in scrubs ready for a shift",
  },
  {
    id: "dentist",
    role: "Dentist",
    course: "BDS / Dentistry",
    destination: "Study in Georgia · Philippines",
    flag: "🦷",
    accentColor: "#60a5fa",
    accentLight: "rgba(96,165,250,0.15)",
    stat: { label: "Independent", value: "Practice" },
    badge: "Class 12 Entry",
    badgeColor: "#60a5fa",
    image: "/images/dentiest.jpg",
    imageAlt: "A group of healthcare professionals including a dentist",
  },
  {
    id: "pharmacist",
    role: "Pharmacist",
    course: "BPharm / PharmD",
    destination: "Study in USA · UK · Australia",
    flag: "💊",
    accentColor: "#34d399",
    accentLight: "rgba(52,211,153,0.15)",
    stat: { label: "Stable Career", value: "Global" },
    badge: "High Salary",
    badgeColor: "#34d399",
    image: "/images/pharmacy.jpg",
    imageAlt: "A pharmacist in a white coat",
  },
  {
    id: "physio",
    role: "Physiotherapist",
    course: "BPT / Physiotherapy",
    destination: "Study in Australia · Canada",
    flag: "🏃",
    accentColor: "#fb923c",
    accentLight: "rgba(251,146,60,0.15)",
    stat: { label: "Fast PR", value: "Pathway" },
    badge: "Work-Life Balance",
    badgeColor: "#fb923c",
    image: "/images/physotharpy.jpg",
    imageAlt: "A physiotherapist assisting a patient",
  },
];


/* ─── Slide variants ─────────────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  }),
};

/* ─── Main export ────────────────────────────────────────────────── */
export default function HeroCarousel() {
  const [index, setIndex]     = useState(0);
  const [direction, setDir]   = useState(1);
  const [paused, setPaused]   = useState(false);

  const goTo = useCallback((next) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const goNext = useCallback(() => {
    goTo((index + 1) % SLIDES.length);
  }, [index, goTo]);

  const goPrev = useCallback(() => {
    goTo((index - 1 + SLIDES.length) % SLIDES.length);
  }, [index, goTo]);

  // Auto-advance every 3.5 s
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(goNext, 3500);
    return () => clearTimeout(t);
  }, [index, paused, goNext]);

  const slide = SLIDES[index];

  return (
    <div
      className="relative w-full h-full flex flex-col select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Healthcare professionals carousel"
      aria-live="polite"
    >
      {/* ── Card ── */}
      <div className="relative flex-1 overflow-hidden rounded-3xl"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 rounded-3xl overflow-hidden"
          >
            {/* ── Full-bleed image ── */}
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority={slide.id === "doctor"}
            />

            {/* ── Dark gradient overlay — bottom-up, keeps text readable ── */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[25%] bg-[#021E46]/60"
              style={{
  
              }}
              aria-hidden="true"
            />

            {/* ── Top row: role chip + stat ── */}
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3 z-10">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-semibold text-white shadow-lg"
                style={{ background: slide.accentColor }}
              >
                <span className="text-sm leading-none">{slide.flag}</span>
                {slide.role}
              </div>
              <div
                className="flex flex-col items-end px-3 py-1.5 rounded-xl"
                style={{ background: "rgba(2,30,70,0.65)", backdropFilter: "blur(8px)" }}
              >
                <span className="text-xs font-body font-bold text-white leading-tight">{slide.stat.value}</span>
                <span className="text-[10px] font-body text-white/60 leading-tight">{slide.stat.label}</span>
              </div>
            </div>

            {/* ── Bottom: course name + destination ── */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="font-heading text-2xl sm:text-3xl text-white leading-tight drop-shadow-md">
                {slide.course}
              </p>
              <p className="font-body font-light text-white/70 text-xs mt-1.5 tracking-wide">
                {slide.destination}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-between mt-4 px-1">
        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            aria-label="Previous professional"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11L5 7L9 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next professional"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`${s.role} — slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-white"
              style={{
                width:  i === index ? 24 : 8,
                height: 8,
                background: i === index ? slide.accentColor : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="font-body text-xs text-white/50 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
