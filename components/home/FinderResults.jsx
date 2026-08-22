"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  MessageCircle,
  Send,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function FinderResults({
  results,
  career,
  budget,
  priority,
  onReset,
}) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleWhatsApp = (e) => {
    e.preventDefault();

    if (!phone.trim()) return;

    setSent(true);
  };

  const handleNext = () => {
    if (results.length === 0) return;

    setCurrentIndex((prev) =>
      prev < results.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    if (results.length === 0) return;

    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : results.length - 1
    );
  };

  /* =====================================
     AUTO SLIDE
  ===================================== */

  useEffect(() => {
    if (results.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < results.length - 1 ? prev + 1 : 0
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [results.length]);

  /* =====================================
     SWIPE
  ===================================== */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col max-h-[500px]"
    >
      {/* =====================================
          HEADING
      ===================================== */}

      <div className="mb-2.5 sm:mb-3">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles
            size={14}
            className="text-[#02A7BB]"
            aria-hidden="true"
          />

          <p className="font-body text-[10px] font-semibold text-[#02A7BB] uppercase tracking-wider">
            Your Perfect Match
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-heading text-base sm:text-lg text-[#0F172A] leading-tight">
            {results.length} Best-Fit{" "}
            {results.length === 1 ? "Country" : "Countries"}
          </h3>

          <span className="font-body text-[10px] sm:text-xs text-[#94A3B8]">
            {currentIndex + 1} / {results.length}
          </span>
        </div>
      </div>

      {/* =====================================
          COUNTRY CAROUSEL
      ===================================== */}

      <div className="relative mb-2.5 sm:mb-3 flex-shrink-0">
        <div
          className="overflow-hidden rounded-xl touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {results.map((country, i) => (
              <div
                key={country.slug}
                className="min-w-full px-0.5"
              >
                <CountryCard
                  country={country}
                  index={i}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        {results.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                -translate-x-1.5
                sm:-translate-x-3
                z-20
                grid
                place-items-center
                size-6
                sm:size-9
                rounded-full
                bg-white
                border
                border-[#E2E8F0]
                text-[#475569]
                hover:bg-[#0263CC]
                hover:border-[#0263CC]
                hover:text-white
                transition-all
                duration-200
                shadow-md
              "
              aria-label="Previous country"
            >
              <ChevronLeft size={14} className="sm:size-4" />
            </button>

            <button
              onClick={handleNext}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                translate-x-1.5
                sm:translate-x-3
                z-20
                grid
                place-items-center
                size-6
                sm:size-9
                rounded-full
                bg-white
                border
                border-[#E2E8F0]
                text-[#475569]
                hover:bg-[#0263CC]
                hover:border-[#0263CC]
                hover:text-white
                transition-all
                duration-200
                shadow-md
              "
              aria-label="Next country"
            >
              <ChevronRight size={14} className="sm:size-4" />
            </button>
          </>
        )}

        {/* Dots */}
        {results.length > 1 && (
          <div className="flex items-center justify-center gap-1 mt-1.5">
            {results.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    i === currentIndex
                      ? "w-4 bg-[#0263CC]"
                      : "w-1 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                  }
                `}
                aria-label={`Go to country ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* =====================================
          WHATSAPP
      ===================================== */}

      <div className="bg-gradient-to-br from-[#F1F7FC] to-[#E8F4FD] border border-[#d6e8fb] rounded-lg p-2 sm:p-2.5 mb-2">
        <p className="font-body font-medium text-[10px] text-[#0F172A] mb-1.5 flex items-center gap-1.5">
          <span className="text-sm">📲</span>
          <span>Get Results on WhatsApp</span>
        </p>

        {sent ? (
          <p className="font-body text-xs text-[#02A7BB] font-semibold flex items-center gap-1">
            <span>✓</span>
            Sending to your WhatsApp...
          </p>
        ) : (
          <form
            onSubmit={handleWhatsApp}
            className="flex gap-1.5"
          >
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 Your number"
              aria-label="WhatsApp phone number"
              className="
                flex-1
                min-w-0
                border
                border-[#E2E8F0]
                rounded-md
                px-2.5
                py-1.5
                font-body
                text-xs
                text-[#0F172A]
                placeholder-[#94A3B8]
                focus:outline-none
                focus:border-[#0263CC]
                focus:ring-1
                focus:ring-[#0263CC]
                transition-all
                bg-white
              "
            />

            <button
              type="submit"
              aria-label="Send results to WhatsApp"
              className="
                px-2.5
                sm:px-3
                py-1.5
                bg-[#02A7BB]
                text-white
                rounded-md
                hover:bg-[#0295a7]
                active:scale-95
                transition-all
                flex
                items-center
                gap-1
                font-body
                font-semibold
                text-xs
                shadow-sm
                shrink-0
              "
            >
              <Send size={12} aria-hidden="true" />
              Send
            </button>
          </form>
        )}
      </div>

      {/* =====================================
          ACTION BUTTONS
      ===================================== */}

      <div className="flex gap-2">
        <button
          onClick={onReset}
          className="
            flex
            items-center
            justify-center
            gap-1.5
            px-2.5
            sm:px-3
            py-1.5
            sm:py-2
            rounded-lg
            border
            border-[#E2E8F0]
            text-[#475569]
            font-body
            font-medium
            text-xs
            hover:bg-[#F8FAFC]
            hover:border-[#CBD5E1]
            active:scale-95
            transition-all
            duration-200
          "
          aria-label="Start the Country Finder over"
        >
          <RotateCcw size={12} aria-hidden="true" />
          Reset
        </button>

        <Button
          href="/counselling"
          variant="primary"
          size="sm"
          className="flex-1 justify-center text-xs py-1.5 sm:py-2"
        >
          <MessageCircle size={13} aria-hidden="true" />
          Talk to Expert
        </Button>
      </div>
    </motion.div>
  );
}


/* =====================================
   COUNTRY CARD
===================================== */

function CountryCard({ country, index }) {
  return (
    <article
      className="
        bg-gradient-to-br
        from-white
        to-[#F8FAFC]
        rounded-xl
        border
        border-[#E2E8F0]

        p-2.5
        sm:p-3

        flex
        flex-col
        gap-2

        hover:shadow-md
        hover:border-[#4DA5EC]

        transition-all
        duration-200

        group

        h-[238px]
        sm:h-[280px]

        overflow-y-auto

        scrollbar-thin
        scrollbar-thumb-[#CBD5E1]
        scrollbar-track-transparent
      "
      aria-label={`Country match: ${country.name}`}
    >
      {/* Flag + Country */}
      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-2.5
          sticky
          top-0
          bg-gradient-to-b
          from-white
          via-white
          to-transparent
          pb-1.5
          sm:pb-2
          z-10
        "
      >
        <span
          className="text-2xl sm:text-3xl leading-none"
          aria-hidden="true"
        >
          {country.flag}
        </span>

        <div className="flex-1 min-w-0">
          <h4 className="font-heading text-sm sm:text-lg text-[#0F172A] leading-tight truncate">
            {country.name}
          </h4>

          <span className="font-body text-[8px] sm:text-[9px] text-[#94A3B8]">
            {country.region}
          </span>
        </div>

        {index === 0 && (
          <span className="shrink-0 px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white text-[8px] sm:text-[9px] font-body font-bold rounded-full shadow-sm">
            TOP
          </span>
        )}
      </div>

      {/* Why this fits */}
      <p className="font-body text-[10px] sm:text-xs text-[#475569] leading-snug line-clamp-3">
        {country.whyThisFits}
      </p>

      {/* Cost */}
      <div className="bg-[#F1F7FC] rounded-lg px-2 py-1.5 border border-[#E8F4FD]">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-body text-[8px] sm:text-[9px] text-[#94A3B8]">
            Total Cost:
          </span>

          <span className="font-body font-bold text-[10px] sm:text-xs text-[#0263CC]">
            {country.illustrativeCostRange}
          </span>
        </div>

        {country.costNote && (
          <p className="font-body text-[7px] sm:text-[8px] text-[#94A3B8] mt-0.5">
            {country.costNote}
          </p>
        )}
      </div>

      {/* Tags */}
      {country.careerTags &&
        country.careerTags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {country.careerTags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="sky"
                className="text-[7px] sm:text-[8px] px-1.5 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

      {/* Recognition */}
      {country.recognitionNote && (
        <p className="font-body text-[8px] sm:text-[9px] text-[#94A3B8] italic leading-snug line-clamp-2">
          {country.recognitionNote}
        </p>
      )}

      {/* CTA */}
      <Link
        href={`/countries/${country.slug}`}
        className="
          flex
          items-center
          justify-center
          gap-1.5
          font-body
          font-semibold
          text-[10px]
          sm:text-xs
          text-white
          bg-gradient-to-r
          from-[#0263CC]
          to-[#02A7BB]
          hover:from-[#0251a8]
          hover:to-[#0295a7]
          rounded-lg
          py-1.5
          sm:py-2
          px-2.5
          sm:px-3
          group-hover:gap-2
          transition-all
          duration-200
          mt-auto
          shadow-sm
          active:scale-95
        "
        aria-label={`Explore ${country.name}`}
      >
        Explore {country.name}
        <ArrowRight
          size={11}
          className="sm:size-3"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}