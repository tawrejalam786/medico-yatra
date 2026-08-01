"use client";

/**
 * Medico Yatra — Home Page
 *
 * This is a Client Component because:
 * 1. The Country Finder must lift the selected career up to state so the
 *    Salary Comparison table can highlight the relevant profession column.
 * 2. The Hero scroll-to-finder callback requires a ref.
 *
 * SEO metadata is exported from app/layout.js (Server Component) and
 * JSON-LD structured data is injected via a separate Server Component
 * rendered at the top of this page.
 */

import { useRef, useState, useCallback } from "react";
import Hero from "@/components/home/Hero";
import CountryFinder from "@/components/home/CountryFinder";
import TrustBar from "@/components/home/TrustBar";
import CareersSection from "@/components/home/CareersSection";
import SalaryComparison from "@/components/home/SalaryComparison";
import AgentComparison from "@/components/home/AgentComparison";
import HonestyCheck from "@/components/home/HonestyCheck";
import CTABand from "@/components/home/CTABand";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import HomeJsonLd from "./HomeJsonLd";

export default function HomePage() {
  const finderRef = useRef(null);

  // Career selected in Country Finder → passed down to SalaryComparison
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleScrollToFinder = useCallback(() => {
    finderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleCareerSelect = useCallback((careerId) => {
    setSelectedCareer(careerId);
  }, []);

  return (
    <>
      {/* JSON-LD structured data — rendered server-side via a Server Component */}
      <HomeJsonLd />

      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-999 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-body focus:font-medium focus:text-sm"
      >
        Skip to main content
      </a>

      {/* ── 1. Hero ── */}
      <Hero onScrollToFinder={handleScrollToFinder} />

      {/* ── 2. Country Finder ── */}
      <div ref={finderRef}>
        <CountryFinder onCareerSelect={handleCareerSelect} />
      </div>

      {/* ── 3. Trust Bar ── */}
      <TrustBar />

      {/* ── 4. Careers We Guide ── */}
      <CareersSection />

      {/* ── 5. Salary Comparison — receives selected career for highlight ── */}
      <SalaryComparison highlightCareer={selectedCareer} />

      {/* ── 6. Agent vs Medico Yatra ── */}
      <AgentComparison />

      {/* ── 7. Honesty Check ── */}
      <HonestyCheck />

      {/* ── 8. CTA Band ── */}
      <CTABand />

      {/* ── 9. Testimonials ── */}
      <Testimonials />

      {/* ── 10. FAQ ── */}
      <FAQ />
    </>
  );
}
