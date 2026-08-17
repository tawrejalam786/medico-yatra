"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, MessageCircle, Send, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function FinderResults({ results, career, budget, priority, onReset }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSent(true);
  };

  const handleNext = () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col max-h-[500px]"
    >
      {/* Compact heading */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={14} className="text-[#02A7BB]" aria-hidden="true" />
          <p className="font-body text-[10px] font-semibold text-[#02A7BB] uppercase tracking-wider">
            Your Perfect Match
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-base sm:text-lg text-[#0F172A] leading-tight">
            {results.length} Best-Fit {results.length === 1 ? 'Country' : 'Countries'}
          </h3>
          <span className="font-body text-xs text-[#94A3B8]">
            {currentIndex + 1} / {results.length}
          </span>
        </div>
      </div>

      {/* Country cards - Carousel with fixed height container */}
      <div className="relative mb-3 flex-shrink-0">
        <div className="overflow-hidden rounded-xl">
          <motion.div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {results.map((country, i) => (
              <div key={country.slug} className="min-w-full px-0.5">
                <CountryCard country={country} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows - positioned outside card */}
        {results.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 z-20 grid place-items-center size-7 sm:size-9 rounded-full bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#0263CC] hover:border-[#0263CC] hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md disabled:hover:bg-white disabled:hover:text-[#475569]"
              aria-label="Previous country"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === results.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 z-20 grid place-items-center size-7 sm:size-9 rounded-full bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#0263CC] hover:border-[#0263CC] hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md disabled:hover:bg-white disabled:hover:text-[#475569]"
              aria-label="Next country"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dots indicator - compact */}
        {results.length > 1 && (
          <div className="flex items-center justify-center gap-1 mt-2">
            {results.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 rounded-full transition-all duration-200 ${
                  i === currentIndex 
                    ? 'w-4 bg-[#0263CC]' 
                    : 'w-1 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                }`}
                aria-label={`Go to country ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* WhatsApp form - ultra compact */}
      <div className="bg-gradient-to-br from-[#F1F7FC] to-[#E8F4FD] border border-[#d6e8fb] rounded-lg p-2.5 mb-2.5">
        <p className="font-body font-medium text-[10px] text-[#0F172A] mb-1.5 flex items-center gap-1.5">
          <span className="text-sm">📲</span>
          <span>Get Results on WhatsApp</span>
        </p>
        {sent ? (
          <p className="font-body text-xs text-[#02A7BB] font-semibold flex items-center gap-1">
            <span>✓</span> Sending to your WhatsApp...
          </p>
        ) : (
          <form onSubmit={handleWhatsApp} className="flex gap-1.5">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 Your number"
              aria-label="WhatsApp phone number"
              className="flex-1 border border-[#E2E8F0] rounded-md px-2.5 py-1.5 font-body text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-1 focus:ring-[#0263CC] transition-all bg-white"
            />
            <button
              type="submit"
              aria-label="Send results to WhatsApp"
              className="px-3 py-1.5 bg-[#02A7BB] text-white rounded-md hover:bg-[#0295a7] active:scale-95 transition-all flex items-center gap-1 font-body font-semibold text-xs shadow-sm"
            >
              <Send size={12} aria-hidden="true" />
              Send
            </button>
          </form>
        )}
      </div>

      {/* Action buttons - compact */}
      <div className="flex gap-2">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#E2E8F0] text-[#475569] font-body font-medium text-xs hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
          aria-label="Start the Country Finder over"
        >
          <RotateCcw size={12} aria-hidden="true" />
          Reset
        </button>
        <Button href="/counselling" variant="primary" size="sm" className="flex-1 justify-center text-xs py-2">
          <MessageCircle size={13} aria-hidden="true" />
          Talk to Expert
        </Button>
      </div>
    </motion.div>
  );
}

function CountryCard({ country, index }) {
  return (
    <article
      className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3 flex flex-col gap-2.5 hover:shadow-md hover:border-[#4DA5EC] transition-all duration-200 group h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#CBD5E1] scrollbar-track-transparent"
      aria-label={`Country match: ${country.name}`}
    >
      {/* Flag + country - sticky header */}
      <div className="flex items-center gap-2.5 sticky top-0 bg-gradient-to-b from-white via-white to-transparent pb-2 z-10">
        <span className="text-3xl leading-none" aria-hidden="true">{country.flag}</span>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading text-base sm:text-lg text-[#0F172A] leading-tight truncate">{country.name}</h4>
          <span className="font-body text-[9px] text-[#94A3B8]">{country.region}</span>
        </div>
        {index === 0 && (
          <span className="shrink-0 px-2 py-0.5 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white text-[9px] font-body font-bold rounded-full shadow-sm">
            TOP
          </span>
        )}
      </div>

      {/* Why this fits - compact */}
      <p className="font-body text-[11px] sm:text-xs text-[#475569] leading-snug line-clamp-3">
        {country.whyThisFits}
      </p>

      {/* Cost - compact inline */}
      <div className="bg-[#F1F7FC] rounded-lg px-2.5 py-1.5 border border-[#E8F4FD]">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-body text-[9px] text-[#94A3B8]">Total Cost:</span>
          <span className="font-body font-bold text-xs text-[#0263CC]">{country.illustrativeCostRange}</span>
        </div>
        {country.costNote && (
          <p className="font-body text-[8px] text-[#94A3B8] mt-0.5">{country.costNote}</p>
        )}
      </div>

      {/* Tags - compact */}
      {country.careerTags && country.careerTags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {country.careerTags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="sky" className="text-[8px] px-1.5 py-0.5">{tag}</Badge>
          ))}
        </div>
      )}

      {/* Recognition note - compact */}
      {country.recognitionNote && (
        <p className="font-body text-[9px] text-[#94A3B8] italic leading-snug line-clamp-2">
          {country.recognitionNote}
        </p>
      )}

      {/* CTA - at bottom */}
      <Link
        href={`/countries/${country.slug}`}
        className="flex items-center justify-center gap-1.5 font-body font-semibold text-xs text-white bg-gradient-to-r from-[#0263CC] to-[#02A7BB] hover:from-[#0251a8] hover:to-[#0295a7] rounded-lg py-2 px-3 group-hover:gap-2 transition-all duration-200 mt-auto shadow-sm active:scale-95"
        aria-label={`Explore ${country.name}`}
      >
        Explore {country.name}
        <ArrowRight size={12} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
