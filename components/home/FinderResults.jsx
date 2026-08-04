"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, MessageCircle, Send, Info } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FinderResults({ results, career, budget, priority, onReset }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    // In production, send to backend / CRM
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Heading */}
      <div className="mb-6">
        <p className="font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-2">
          Your Results
        </p>
        <h3 className="font-heading text-2xl sm:text-3xl text-[#0F172A] leading-snug">
          Based on Your Answers — Here Are Your Best-Fit Countries
        </h3>
      </div>

      {/* Country cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
      >
        {results.map((country, i) => (
          <CountryCard key={country.slug} country={country} index={i} />
        ))}
      </motion.div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 mb-6">
        <Info size={16} className="text-[#475569] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="font-body font-light text-xs text-[#475569] leading-relaxed">
          These results are a starting point based on general matching, not a personalised
          recommendation. Costs, fees, and country fit vary by your specific NEET/academic profile —
          book a free counselling session for a recommendation tailored to you.
        </p>
      </div>

      {/* WhatsApp results */}
      <div className="bg-[#F1F7FC] border border-[#d6e8fb] rounded-2xl p-5 mb-6">
        <p className="font-body font-medium text-sm text-[#0F172A] mb-3 flex items-center gap-2">
          <span>📲</span> Get These Results on WhatsApp
        </p>
        {sent ? (
          <p className="font-body text-sm text-[#02A7BB] font-medium">
            ✓ We'll send your results to that number shortly.
          </p>
        ) : (
          <form onSubmit={handleWhatsApp} className="flex gap-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your WhatsApp number"
              aria-label="WhatsApp phone number"
              className="flex-1 border border-[#E2E8F0] rounded-xl px-4 py-2.5 font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] transition-colors bg-white"
            />
            <button
              type="submit"
              aria-label="Send results to WhatsApp"
              className="px-4 py-2.5 bg-[#02A7BB] text-white rounded-xl hover:bg-[#0295a7] transition-colors flex items-center gap-2 font-body font-medium text-sm"
            >
              <Send size={15} aria-hidden="true" />
              Send
            </button>
          </form>
        )}
        <p className="font-body text-xs text-[#94A3B8] mt-2">
          Optional — results are visible without submitting your number.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E2E8F0] text-[#475569] font-body font-medium text-sm hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]"
          aria-label="Start the Country Finder over"
        >
          <RotateCcw size={15} aria-hidden="true" />
          Start Over
        </button>
        <Button href="/counselling" variant="primary" size="md" className="sm:flex-1 justify-center">
          <MessageCircle size={16} aria-hidden="true" />
          Not Sure About These Results? Talk to a Counsellor
        </Button>
      </div>
    </motion.div>
  );
}

function CountryCard({ country, index }) {
  return (
    <motion.article
      variants={cardAnim}
      className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex flex-col gap-3 hover:shadow-lg hover:border-[#4DA5EC] transition-all duration-250 group"
      aria-label={`Country match: ${country.name}`}
    >
      {/* Flag + country */}
      <div className="flex items-center gap-3">
        <span className="text-3xl leading-none" aria-hidden="true">{country.flag}</span>
        <div>
          <h4 className="font-heading text-lg text-[#0F172A] leading-tight">{country.name}</h4>
          <span className="font-body text-xs text-[#94A3B8]">{country.region}</span>
        </div>
        {index === 0 && (
          <span className="ml-auto px-2 py-0.5 bg-[#0263CC] text-white text-xs font-body font-medium rounded-full whitespace-nowrap">
            Top Match
          </span>
        )}
      </div>

      {/* Why this fits */}
      <p className="font-body font-light text-sm text-[#475569] leading-relaxed flex-1">
        {country.whyThisFits}
      </p>

      {/* Cost range */}
      <div className="bg-[#F8FAFC] rounded-xl px-3 py-2.5">
        <p className="font-body text-xs text-[#94A3B8] mb-0.5">Illustrative total cost</p>
        <p className="font-body font-semibold text-sm text-[#0263CC]">{country.illustrativeCostRange}</p>
        <p className="font-body text-xs text-[#94A3B8]">{country.costNote}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {country.careerTags?.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="sky">{tag}</Badge>
        ))}
      </div>

      {/* Recognition note */}
      {country.recognitionNote && (
        <p className="font-body text-xs text-[#94A3B8] italic leading-tight">
          {country.recognitionNote}
        </p>
      )}

      {/* CTA */}
      <Link
        href={`/countries/${country.slug}`}
        className="flex items-center gap-2 font-body font-medium text-sm text-[#0263CC] hover:text-[#0251a8] group-hover:gap-3 transition-all duration-200 mt-auto pt-1"
        aria-label={`Explore ${country.name}`}
      >
        Explore {country.name}
        <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
