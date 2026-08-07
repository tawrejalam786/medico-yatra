"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import FinderStep from "./FinderStep";
import FinderResults from "./FinderResults";
import { FINDER_CAREER_OPTIONS, FINDER_BUDGET_OPTIONS, FINDER_PRIORITY_OPTIONS } from "@/data/careers";
import { matchCountries } from "@/lib/countryMatcher";
import Image from "next/image";

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

export default function CountryFinder({ onCareerSelect }) {
  const [step, setStep] = useState(0); // 0-2 = steps, 3 = results
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
    if (step === 0) {
      setCareer(id);
      onCareerSelect?.(id); // lift career up for Salary table highlight
    }
    if (step === 1) setBudget(id);
    if (step === 2) setPriority(id);
    // Auto-advance on mobile-friendly UX — short delay so the selection registers visually
    setTimeout(() => {
      if (step < TOTAL - 1) {
        setStep((s) => s + 1);
      } else {
        // Last step — compute results
        const matched = matchCountries(
          step === 0 ? id : career,
          step === 1 ? id : budget,
          step === 2 ? id : priority
        );
        setResults(matched);
        setStep(TOTAL); // show results
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
    onCareerSelect?.(null);
  }

  const showingResults = step === TOTAL;
  const canNext = getSelected() !== null;

  return (
    <section
      id="country-finder"
      aria-labelledby="finder-heading"
      className="py-7 max-w-8xl mx-auto lg:py-10"
    >
      <div className="heading">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Interactive Tool
          </motion.p>
          <motion.h2
            id="finder-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4"
          >
            Find Your Country in 30 Seconds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body font-light text-[#475569] text-base sm:text-lg max-w-2xl mx-auto"
          >
            Answer three quick questions. We'll show you which countries genuinely fit your budget,
            career interest, and priorities — no sign-up required to see your results.
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full min-h-[550px] overflow-hidden rounded-2xl bg-[#021E46]">
              {/* Main Image */}
              <Image
                src="/images/students.png"
                alt="Study Abroad"
                fill
                className="object-cover"
              />

              {/* Dark Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[100%] bg-[#021E46]/8" />

              {/* Decorative Circle */}
              <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute top-20 -right-16 h-40 w-40 rounded-full border border-white/10" />

              {/* 30 Seconds Badge */}
              <div className="absolute top-2 left-6 z-10">
                <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC] text-sm text-white">
                    ⚡
                  </span>

                  <span className="text-sm font-semibold text-[#021E46]">
                    Find Your Country in 30 Seconds
                  </span>
                </div>
              </div>

              {/* Country Cards */}
              <div className="absolute right-6 top-15 z-10 hidden sm:block">
                <div className="rounded-2xl border border-white/20 bg-white/90 p-3 shadow-xl backdrop-blur-md">
                  <p className="mb-2 text-xs font-semibold text-gray-500">
                    Popular Destinations
                  </p>

                  <div className="flex gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl">
                      🇬🇧
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl">
                      🇦🇺
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl">
                      🇩🇪
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-6 sm:p-8 lg:p-10">
                <div className="max-w-lg">

                  {/* Country Chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      { flag: "🇬🇧", name: "UK" },
                      { flag: "🇦🇺", name: "Australia" },
                      { flag: "🇩🇪", name: "Germany" },
                      { flag: "🇷🇺", name: "Russia" },
                    ].map((country) => (
                      <div
                        key={country.name}
                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm"
                      >
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute bottom-7 right-2 z-20 hidden lg:block">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#021E46]">
                      10+ Countries
                    </p>
                    <p className="text-xs text-gray-500">
                      Find your best destination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-3 sm:mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            {/* Finder card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-[#E2E8F0] overflow-hidden">

                {/* Progress bar — hidden during results */}
                {!showingResults && (
                  <div className="px-6 sm:px-8 pt-7 pb-0">
                    {/* Step labels */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-body font-medium text-sm text-[#0263CC]">
                        Step {step + 1} of {TOTAL}
                      </span>
                      <span className="font-body text-xs text-[#94A3B8]">
                        {Math.round(((step) / TOTAL) * 100)}% complete
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
                    <div className="flex justify-between mt-3 px-0.5">
                      {STEPS.map((s, i) => (
                        <div key={s.key} className="flex flex-col items-center gap-1">
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i < step ? "bg-[#02A7BB]" : i === step ? "bg-[#0263CC] scale-125" : "bg-[#E2E8F0]"
                              }`}
                            aria-hidden="true"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content area */}
                <div className={`px-6 sm:px-8 ${showingResults ? "pt-8 pb-8" : "pt-6 pb-8"}`}>
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
                    <div className="flex items-center justify-between mt-7 pt-5 border-t border-[#F1F5F9]">
                      <button
                        onClick={handleBack}
                        disabled={step === 0}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-medium text-sm text-[#475569] hover:text-[#0263CC] hover:bg-[#F1F7FC] transition-colors disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]"
                        aria-label="Go to previous step"
                      >
                        <ArrowLeft size={16} aria-hidden="true" />
                        Back
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={!canNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0263CC] text-white font-body font-medium text-sm hover:bg-[#0251a8] transition-colors disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]"
                        aria-label={step === TOTAL - 1 ? "See my country results" : "Go to next step"}
                      >
                        {step === TOTAL - 1 ? "See My Results" : "Next"}
                        <ArrowRight size={16} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
