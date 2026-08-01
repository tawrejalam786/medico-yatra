"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const TRUST_POINTS = [
  "NMC-recognised universities only",
  "FMGE / NExT & USMLE coaching",
  "End-to-end support",
  "Parents welcomed at every step",
];

/* ── Animated healthcare professional silhouettes (pure SVG, no stock images) ── */
function HealthcareProfessionals() {
  return (
    <div className="relative w-full h-full flex items-end justify-center" aria-hidden="true">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#4DA5EC]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#02A7BB]/15 rounded-full blur-2xl" />

      {/* Professional figures — stylised SVG silhouettes */}
      <svg
        viewBox="0 0 700 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xl lg:max-w-2xl"
        role="img"
        aria-label="Healthcare professionals — doctor, nurse, pharmacist, dentist, physiotherapist"
      >
      
        {/* ── Figure 1 — Doctor (centre, tallest) ── */}
        {/* <g transform="translate(280, 20)"> */}
          {/* coat */}
          {/* <rect x="15" y="120" width="90" height="160" rx="12" fill="white" opacity="0.95" />
          <rect x="25" y="120" width="25" height="90" rx="4" fill="#E8F4FD" />
          <rect x="70" y="120" width="25" height="90" rx="4" fill="#E8F4FD" /> */}
          {/* stethoscope */}
          {/* <path d="M50 150 Q40 170 45 185 Q50 200 60 200 Q70 200 75 185 Q80 170 70 150" stroke="#0263CC" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <circle cx="60" cy="205" r="6" fill="#0263CC" /> */}
          {/* shirt / scrubs */}
          {/* <rect x="30" y="120" width="60" height="30" rx="4" fill="#4DA5EC" opacity="0.6"/> */}
          {/* head */}
          {/* <ellipse cx="60" cy="85" rx="32" ry="36" fill="#FDDBB4" /> */}
          {/* hair */}
          {/* <ellipse cx="60" cy="60" rx="32" ry="16" fill="#3D2B1F" /> */}
          {/* face */}
          {/* <ellipse cx="51" cy="82" rx="4" ry="5" fill="#fff" />
          <ellipse cx="69" cy="82" rx="4" ry="5" fill="#fff" />
          <circle cx="51" cy="83" r="2.5" fill="#1a1a2e" />
          <circle cx="69" cy="83" r="2.5" fill="#1a1a2e" />
          <path d="M50 96 Q60 104 70 96" stroke="#c07a5a" strokeWidth="2" fill="none" strokeLinecap="round"/> */}
          {/* collar */}
          {/* <path d="M40 118 L60 135 L80 118" stroke="#CBD5E1" strokeWidth="2" fill="none"/> */}
          {/* ID badge */}
          {/* <rect x="52" y="145" width="16" height="22" rx="3" fill="#0263CC" opacity="0.8"/>
          <rect x="57" y="149" width="6" height="2" rx="1" fill="white"/>
          <rect x="55" y="153" width="10" height="2" rx="1" fill="white" opacity="0.6"/> */}
          {/* legs */}
          {/* <rect x="30" y="275" width="26" height="100" rx="8" fill="#475569" />
          <rect x="64" y="275" width="26" height="100" rx="8" fill="#475569" /> */}
          {/* shoes */}
          {/* <ellipse cx="43" cy="373" rx="18" ry="8" fill="#1e293b"/>
          <ellipse cx="77" cy="373" rx="18" ry="8" fill="#1e293b"/>
        </g> */}

        {/* ── Figure 2 — Nurse (left of centre) ── */}
        {/* <g transform="translate(140, 60)">
          <rect x="15" y="110" width="80" height="150" rx="10" fill="#4DA5EC" opacity="0.9"/>
          <rect x="30" y="110" width="50" height="30" rx="4" fill="white" opacity="0.7"/> */}
          {/* nurse cap symbol */}
          {/* <rect x="40" y="105" width="30" height="8" rx="4" fill="white"/>
          <rect x="52" y="100" width="6" height="15" rx="2" fill="#0263CC"/>
          <rect x="44" y="107" width="22" height="3" rx="1" fill="#0263CC" opacity="0.5"/> */}
          {/* head */}
          {/* <ellipse cx="55" cy="75" rx="28" ry="32" fill="#C8956C" />
          <ellipse cx="55" cy="52" rx="28" ry="14" fill="#2D1810" /> */}
          {/* face */}
          {/* <ellipse cx="47" cy="72" rx="3.5" ry="4.5" fill="#fff"/>
          <ellipse cx="63" cy="72" rx="3.5" ry="4.5" fill="#fff"/>
          <circle cx="47" cy="73" r="2" fill="#1a1a2e"/>
          <circle cx="63" cy="73" r="2" fill="#1a1a2e"/>
          <path d="M47 84 Q55 91 63 84" stroke="#b06a4a" strokeWidth="1.8" fill="none" strokeLinecap="round"/> */}
          {/* cross on uniform */}
          {/* <rect x="49" y="125" width="12" height="4" rx="1" fill="white"/>
          <rect x="53" y="121" width="4" height="12" rx="1" fill="white"/> */}
          {/* legs */}
          {/* <rect x="22" y="255" width="22" height="90" rx="7" fill="#E2E8F0"/>
          <rect x="52" y="255" width="22" height="90" rx="7" fill="#E2E8F0"/>
          <ellipse cx="33" cy="343" rx="15" ry="7" fill="#94A3B8"/>
          <ellipse cx="63" cy="343" rx="15" ry="7" fill="#94A3B8"/>
        </g> */}

        {/* ── Figure 3 — Pharmacist (right of centre) ── */}
        {/* <g transform="translate(420, 55)">
          <rect x="12" y="112" width="82" height="155" rx="10" fill="#02A7BB" opacity="0.85"/>
          <rect x="22" y="112" width="62" height="28" rx="4" fill="white" opacity="0.5"/> */}
          {/* Rx symbol */}
          {/* <text x="42" y="148" fontSize="22" fontWeight="bold" fill="white" fontFamily="serif" opacity="0.9">Rx</text> */}
          {/* head */}
          {/* <ellipse cx="53" cy="77" rx="29" ry="34" fill="#FDDBB4"/>
          <ellipse cx="53" cy="54" rx="29" ry="15" fill="#6B4C35"/>
          <ellipse cx="47" cy="74" rx="3.5" ry="4.5" fill="#fff"/>
          <ellipse cx="62" cy="74" rx="3.5" ry="4.5" fill="#fff"/>
          <circle cx="47" cy="75" r="2" fill="#1a1a2e"/>
          <circle cx="62" cy="75" r="2" fill="#1a1a2e"/>
          <path d="M46 86 Q54 93 62 86" stroke="#c07a5a" strokeWidth="1.8" fill="none" strokeLinecap="round"/> */}
          {/* clipboard */}
          {/* <rect x="65" y="140" width="28" height="36" rx="4" fill="white" opacity="0.9"/>
          <rect x="69" y="144" width="20" height="3" rx="1" fill="#94A3B8"/>
          <rect x="69" y="150" width="16" height="3" rx="1" fill="#94A3B8"/>
          <rect x="69" y="156" width="18" height="3" rx="1" fill="#94A3B8"/> */}
          {/* legs */}
          {/* <rect x="19" y="262" width="22" height="88" rx="7" fill="#475569"/>
          <rect x="49" y="262" width="22" height="88" rx="7" fill="#475569"/>
          <ellipse cx="30" cy="348" rx="16" ry="7" fill="#1e293b"/>
          <ellipse cx="60" cy="348" rx="16" ry="7" fill="#1e293b"/>
        </g> */}

        {/* ── Figure 4 — Dentist (far left, slightly shorter) ── */}
        {/* <g transform="translate(30, 90)">
          <rect x="12" y="108" width="74" height="140" rx="9" fill="white" opacity="0.85"/>
          <rect x="20" y="108" width="58" height="26" rx="4" fill="#E8F4FD"/> */}
          {/* dental mask around neck */}
          {/* <rect x="28" y="165" width="42" height="28" rx="8" fill="#4DA5EC" opacity="0.5"/> */}
          {/* head */}
          {/* <ellipse cx="49" cy="72" rx="27" ry="30" fill="#C8956C"/>
          <ellipse cx="49" cy="50" rx="27" ry="13" fill="#5C3A2A"/> */}
          {/* face + mask */}
          {/* <rect x="30" y="76" width="38" height="24" rx="8" fill="#E8F4FD" opacity="0.9"/>
          <ellipse cx="42" cy="70" rx="3" ry="4" fill="#fff"/>
          <ellipse cx="56" cy="70" rx="3" ry="4" fill="#fff"/>
          <circle cx="42" cy="71" r="2" fill="#1a1a2e"/>
          <circle cx="56" cy="71" r="2" fill="#1a1a2e"/> */}
          {/* mirror tool */}
          {/* <line x1="74" y1="145" x2="92" y2="165" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="93" cy="167" r="6" fill="none" stroke="#94A3B8" strokeWidth="2"/> */}
          {/* legs */}
          {/* <rect x="18" y="244" width="20" height="82" rx="6" fill="#475569"/>
          <rect x="46" y="244" width="20" height="82" rx="6" fill="#475569"/>
          <ellipse cx="28" cy="324" rx="14" ry="6" fill="#1e293b"/>
          <ellipse cx="56" cy="324" rx="14" ry="6" fill="#1e293b"/>
        </g> */}

        {/* ── Figure 5 — Physiotherapist (far right) ── */}
        {/* <g transform="translate(565, 80)">
          <rect x="10" y="110" width="76" height="145" rx="9" fill="#0263CC" opacity="0.8"/>
          <rect x="18" y="110" width="60" height="26" rx="4" fill="white" opacity="0.4"/> */}
          {/* PT logo */}
          {/* <text x="32" y="145" fontSize="16" fontWeight="bold" fill="white" fontFamily="sans-serif">PT</text> */}
          {/* arm up — exercise motion */}
          {/* <line x1="86" y1="130" x2="108" y2="100" stroke="#0263CC" strokeWidth="8" strokeLinecap="round" opacity="0.8"/>
          <circle cx="110" cy="98" r="8" fill="#4DA5EC"/> */}
          {/* head */}
          {/* <ellipse cx="48" cy="74" rx="27" ry="31" fill="#FDDBB4"/>
          <ellipse cx="48" cy="52" rx="27" ry="13" fill="#3D2B1F"/>
          <ellipse cx="41" cy="72" rx="3.5" ry="4.5" fill="#fff"/>
          <ellipse cx="55" cy="72" rx="3.5" ry="4.5" fill="#fff"/>
          <circle cx="41" cy="73" r="2" fill="#1a1a2e"/>
          <circle cx="55" cy="73" r="2" fill="#1a1a2e"/>
          <path d="M40 84 Q48 90 56 84" stroke="#c07a5a" strokeWidth="1.8" fill="none" strokeLinecap="round"/> */}
          {/* legs — slight stride */}
          {/* <rect x="16" y="250" width="21" height="88" rx="6" transform="rotate(-5, 26, 250)" fill="#475569"/>
          <rect x="45" y="250" width="21" height="88" rx="6" transform="rotate(5, 55, 250)" fill="#475569"/>
          <ellipse cx="26" cy="336" rx="14" ry="6" fill="#1e293b"/>
          <ellipse cx="56" cy="336" rx="14" ry="6" fill="#1e293b"/>
        </g> */}

        {/* ── Ground shadow ── */}
        <ellipse cx="350" cy="465" rx="310" ry="18" fill="black" opacity="0.07"/>

        {/* ── Floating badges ── */}
        {/* USMLE badge */}
        {/* <g transform="translate(580, 150)">
          <rect width="100" height="34" rx="10" fill="white" opacity="0.95"/>
          <circle cx="17" cy="17" r="11" fill="#0263CC"/>
          <text x="11" y="21" fontSize="9" fill="white" fontWeight="bold">USM</text>
          <text x="30" y="16" fontSize="8" fill="#0F172A" fontWeight="600">USMLE</text>
          <text x="30" y="26" fontSize="7" fill="#475569">Coaching</text>
        </g> */}
        {/* NMC badge */}
        {/* <g transform="translate(25, 140)">
          <rect width="108" height="34" rx="10" fill="white" opacity="0.95"/>
          <circle cx="17" cy="17" r="11" fill="#02A7BB"/>
          <text x="11" y="22" fontSize="9" fill="white" fontWeight="bold">NMC</text>
          <text x="32" y="16" fontSize="8" fill="#0F172A" fontWeight="600">NMC Recognised</text>
          <text x="32" y="26" fontSize="7" fill="#475569">Universities</text>
        </g> */}
        {/* FMGE badge */}
        {/* <g transform="translate(230, 420)">
          <rect width="110" height="34" rx="10" fill="white" opacity="0.95"/>
          <circle cx="17" cy="17" r="11" fill="#4DA5EC"/>
          <text x="9" y="22" fontSize="8" fill="white" fontWeight="bold">FMGE</text>
          <text x="32" y="16" fontSize="8" fill="#0F172A" fontWeight="600">FMGE / NExT</text>
          <text x="32" y="26" fontSize="7" fill="#475569">Prep included</text>
        </g> */}
      </svg>
       <Image
  src="/images/doctor2.png"
  width={600}
  height={600}
  alt="Hero Doctors Image"
  className="absolute top-1 rounded-l-xl rounded-l-lg"
/>

    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }),
};

export default function Hero({ onScrollToFinder }) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#4DA5EC]/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-[#02A7BB]/10 blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="h-px w-8 bg-[#4DA5EC]" aria-hidden="true" />
              <span className="font-body text-sm font-medium text-[#4DA5EC] tracking-wide">
                A Future Yatra brand · Healthcare Career Specialists
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              id="hero-heading"
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl lg:text-xl xl:text-2xl text-white leading-tight mb-6"
            >
              Your Healthcare Career —{" "}
              <span className="relative">
                <span className="text-[#4DA5EC]">Guided Properly,</span>
              </span>{" "}
              From Class 12 to Licensed Professional.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="font-body font-light text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Medico Yatra isn't a general study-abroad agency. We specialise in healthcare
              careers — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy, Respiratory Therapy,
              Medical Lab Technology and other allied-health courses — with NMC-recognised
              universities, honest counselling, and licensing support built in.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Button href="/counselling" variant="white" size="lg">
                Book Free Counselling
              </Button>
              <button
                onClick={onScrollToFinder}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-body font-medium text-base hover:bg-white/10 hover:border-white/60 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Scroll to Country Finder"
              >
                Find My Country Below
                <ArrowDown size={18} aria-hidden="true" />
              </button>
            </motion.div>

            {/* Trust points */}
            <motion.ul
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              aria-label="Key trust points"
            >
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 size={17} className="text-[#02A7BB] shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-white/85 font-light">{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-full max-w-lg lg:max-w-none">
              <HealthcareProfessionals />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-body text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
