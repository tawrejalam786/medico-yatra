"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroCarousel from "./HeroCarousel";

const TRUST_POINTS = [
  "NMC-recognised universities only",
  "FMGE / NExT & USMLE coaching",
  "End-to-end support",
  "Parents welcomed at every step",
];

const STATS = [
  { value: "7+", label: "Healthcare Careers" },
  { value: "13+", label: "Countries Covered" },
  { value: "100%", label: "Honest Guidance" },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero({ onScrollToFinder }) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0263CC" }}
      // previous color #f2f2ff
    >
      {/* ── Background texture: subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Background accent shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* large soft circle top-right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 640, height: 640,
            top: -160, right: -160,
            background: "rgba(77,165,236,0.12)",
            filter: "blur(80px)",
          }}
        />
        {/* medium circle bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: 420, height: 420,
            bottom: -80, left: -80,
            background: "rgba(2,167,187,0.10)",
            filter: "blur(60px)",
          }}
        />
        {/* small accent bottom-right */}
        <div
          className="absolute rounded-full"
          style={{
            width: 280, height: 280,
            bottom: 80, right: 80,
            background: "rgba(77,165,236,0.08)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

          {/* ══ LEFT: Copy ══ */}
          <div className="order-1 lg:order-1 flex flex-col justify-center">

            {/* Eyebrow pill */}
            <motion.div
              initial="hidden" animate="visible" custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 mb-6 w-fit"
            >
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-full font-body font-extrabold text-sm tracking-wider uppercase"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA5EC] animate-pulse inline-block" aria-hidden="true" />
                A Future Yatra brand · Healthcare Career Specialists
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="hero-heading"
              initial="hidden" animate="visible" custom={0.08}
              variants={fadeUp}
              className="font-body text-2xl sm:text-5xl lg:text-5xl xl:text-4xl font-extrabold text-white leading-[1.12] mb-5"
            >
              Your Healthcare Career —{" "}
              <span className="text-[#4DA5EC]">Guided Properly,</span>{" "}
              From Class&nbsp;12 to Licensed Professional.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial="hidden" animate="visible" custom={0.16}
              variants={fadeUp}
              className="font-body font-light text-white/75 text-sm sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              We specialise in healthcare careers — MBBS, Dentistry, Nursing, Pharmacy,
              Physiotherapy, Respiratory Therapy, MLT and more — with NMC-recognised
              universities, honest counselling, and licensing support built in.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden" animate="visible" custom={0.24}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button href="/counselling" variant="white" size="lg">
                Book Free Counselling
              </Button>
              <button
                onClick={onScrollToFinder}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-base text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                style={{ border: "2px solid rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                aria-label="Scroll down to Country Finder"
              >
                Find My Country Below
                <ArrowDown size={18} aria-hidden="true" />
              </button>
            </motion.div>

            
          </div>

          {/* ══ RIGHT: Carousel ══ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Outer decorative ring */}
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "rgba(77,165,236,0.08)", filter: "blur(24px)" }}
                aria-hidden="true"
              />

              {/* Floating badge — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-8 -left-1 z-20 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg"
                style={{ background: "#02A7BB", minWidth: 140 }}
                aria-hidden="true"
              >
                <span className="text-base">🎓</span>
                <div>
                  <p className="font-body font-semibold text-xs text-white leading-tight">NMC Recognised</p>
                  <p className="font-body text-[10px] text-white/70 leading-tight">Universities</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -bottom-4 -right-1 z-20 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg"
                style={{ background: "white", minWidth: 148 }}
                aria-hidden="true"
              >
                <span className="text-base">📋</span>
                <div>
                  <p className="font-body font-semibold text-xs text-[#0263CC] leading-tight">FMGE / NExT</p>
                  <p className="font-body text-[10px] text-[#475569] leading-tight">Prep included</p>
                </div>
              </motion.div>

              {/* Floating badge — right mid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute top-1/2 -right-1 -translate-y-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg"
                style={{ background: "rgba(2,99,204,0.95)", border: "1px solid rgba(255,255,255,0.2)" }}
                aria-hidden="true"
              >
                <span className="text-base">⚡</span>
                <div>
                  <p className="font-body font-semibold text-xs text-white leading-tight">USMLE</p>
                  <p className="font-body text-[10px] text-white/65 leading-tight">Coaching</p>
                </div>
              </motion.div>

              {/* Carousel card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  height: 480,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  padding: "20px 20px 16px",
                }}
              >
                <HeroCarousel />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase">Scroll</span>
          <div
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-white/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
