"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FinderStep from "./FinderStep";
import FinderResults from "./FinderResults";
import { FINDER_CAREER_OPTIONS, FINDER_BUDGET_OPTIONS, FINDER_PRIORITY_OPTIONS } from "@/data/careers";
import { matchCountries } from "@/lib/countryMatcher";

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

const STEPS = [
  {
    key: "career",
    question: "What healthcare career interests you?",
    options: FINDER_CAREER_OPTIONS,
    layout: "grid",
  },
  {
    key: "budget",
    question: "What's your approximate total budget for the full course (tuition + living)?",
    options: FINDER_BUDGET_OPTIONS,
    layout: "list",
  },
  {
    key: "priority",
    question: "What matters most to you?",
    options: FINDER_PRIORITY_OPTIONS,
    layout: "list",
  },
];

const TOTAL = STEPS.length; // 3

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero({ onScrollToFinder }) {
  const [step, setStep] = useState(0);
  const [career, setCareer] = useState(null);
  const [budget, setBudget] = useState(null);
  const [priority, setPriority] = useState(null);
  const [results, setResults] = useState([]);

  const currentStep = STEPS[step];

  function getSelected() {
    if (step === 0) return career;
    if (step === 1) return budget;
    return priority;
  }

  function handleSelect(id) {
    if (step === 0) setCareer(id);
    if (step === 1) setBudget(id);
    if (step === 2) setPriority(id);
    
    setTimeout(() => {
      if (step < TOTAL - 1) {
        setStep((s) => s + 1);
      } else {
        const matched = matchCountries(
          step === 0 ? id : career,
          step === 1 ? id : budget,
          step === 2 ? id : priority
        );
        setResults(matched);
        setStep(TOTAL);
      }
    }, 280);
  }

  function handleNext() {
    if (step < TOTAL - 1) {
      setStep((s) => s + 1);
    } else {
      const matched = matchCountries(career, budget, priority);
      setResults(matched);
      setStep(TOTAL);
    }
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleReset() {
    setStep(0);
    setCareer(null);
    setBudget(null);
    setPriority(null);
    setResults([]);
  }

  const showingResults = step === TOTAL;
  const canNext = getSelected() !== null;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0263CC" }}
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

          {/* ══ RIGHT: Country Finder Card ══ */}
          <div className="w-full order-2 lg:order-2">
            {/* Finder card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden">

                {/* Progress bar — hidden during results */}
                {!showingResults && (
                  <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-0">
                    {/* Step labels */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body font-semibold text-xs sm:text-sm text-[#0263CC]">
                        Step {step + 1} of {TOTAL}
                      </span>
                      <span className="font-body text-[10px] sm:text-xs text-[#94A3B8]">
                        {Math.round(((step) / TOTAL) * 100)}% done
                      </span>
                    </div>
                    {/* Track */}
                    <div className="h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={TOTAL} aria-label={`Step ${step + 1} of ${TOTAL}`}>
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] rounded-full"
                        initial={false}
                        animate={{ width: `${((step + 1) / TOTAL) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>

                    {/* Step dots */}
                    <div className="flex justify-between mt-2 px-0.5">
                      {STEPS.map((s, i) => (
                        <div key={s.key} className="flex flex-col items-center gap-1">
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < step ? "bg-[#02A7BB]" : i === step ? "bg-[#0263CC] scale-125" : "bg-[#E2E8F0]"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content area */}
                <div className={`px-4 sm:px-6 ${showingResults ? "pt-5 sm:pt-6 pb-5 sm:pb-6" : "pt-4 sm:pt-5 pb-5 sm:pb-6"}`}>
                  <AnimatePresence mode="wait">
                    {showingResults ? (
                      <FinderResults
                        key="results"
                        results={results}
                        career={career}
                        budget={budget}
                        priority={priority}
                        onReset={handleReset}
                      />
                    ) : (
                      <FinderStep
                        key={currentStep.key}
                        question={currentStep.question}
                        options={currentStep.options}
                        selected={getSelected()}
                        onSelect={handleSelect}
                        layout={currentStep.layout}
                      />
                    )}
                  </AnimatePresence>

                  {/* Navigation buttons (when not results) */}
                  {!showingResults && (
                    <div className="flex items-center justify-between mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F1F5F9]">
                      <button
                        onClick={handleBack}
                        disabled={step === 0}
                        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-body font-medium text-xs sm:text-sm text-[#475569] hover:text-[#0263CC] hover:bg-[#F1F7FC] transition-colors disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]"
                        aria-label="Go to previous step"
                      >
                        <ArrowLeft size={14} className="sm:size-4" aria-hidden="true" />
                        Back
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={!canNext}
                        className="flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#0263CC] text-white font-body font-semibold text-xs sm:text-sm hover:bg-[#0251a8] active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC] shadow-sm"
                        aria-label={step === TOTAL - 1 ? "See my country results" : "Go to next step"}
                      >
                        {step === TOTAL - 1 ? "See Results" : "Next"}
                        <ArrowRight size={14} className="sm:size-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

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
