"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Clock3,
  Globe2,
  MapPin,
  Search,
  Sparkles,
  GraduationCap,
  WalletCards,
} from "lucide-react";

const COUNTRIES = [
  {
    id: "georgia",
    country: "Georgia",
    region: "Europe",
    flag: "🇬🇪",
    image: "/images/countries/Georgia.png",
    universities: "25+",
    tuition: "$3,500 / Year",
    duration: "6 Years",
    popular: true,
  },
  {
    id: "uzbekistan",
    country: "Uzbekistan",
    region: "Asia",
    flag: "🇺🇿",
    image: "/images/countries/Uzbekistan.png",
    universities: "18+",
    tuition: "$3,000 / Year",
    duration: "6 Years",
    popular: true,
  },
  {
    id: "russia",
    country: "Russia",
    region: "Europe",
    flag: "🇷🇺",
    image: "/images/countries/russia.jpg",
    universities: "35+",
    tuition: "$4,000 / Year",
    duration: "6 Years",
    popular: true,
  },
  {
    id: "kazakhstan",
    country: "Kazakhstan",
    region: "Asia",
    flag: "🇰🇿",
    image: "/images/countries/Kazakhstan.png",
    universities: "20+",
    tuition: "$3,200 / Year",
    duration: "5 Years",
  },
  {
    id: "philippines",
    country: "Philippines",
    region: "Asia",
    flag: "🇵🇭",
    image: "/images/countries/Philippines.png",
    universities: "30+",
    tuition: "$4,500 / Year",
    duration: "5 Years",
  },
  {
    id: "hungary",
    country: "Hungary",
    region: "Europe",
    flag: "🇭🇺",
    image: "/images/countries/hungary.png",
    universities: "10+",
    tuition: "$7,000 / Year",
    duration: "6 Years",
  },
  {
    id: "poland",
    country: "Poland",
    region: "Europe",
    flag: "🇵🇱",
    image: "/images/countries/poland.jpg",
    universities: "12+",
    tuition: "$6,000 / Year",
    duration: "6 Years",
  },
  {
    id: "uae",
    country: "UAE",
    region: "Asia",
    flag: "🇦🇪",
    image: "/images/countries/uae.png",
    universities: "8+",
    tuition: "$8,500 / Year",
    duration: "6 Years",
  },
  {
    id: "china",
    country: "China",
    region: "Asia",
    flag: "🇨🇳",
    image: "/images/countries/china.png",
    universities: "40+",
    tuition: "$6,000 / Year",
    duration: "6 Years",
  },
  {
    id: "kyrgyzstan",
    country: "Kyrgyzstan",
    region: "Asia",
    flag: "🇰🇬",
    image: "/images/countries/Kyrgyzstan.png",
    universities: "15+",
    tuition: "$3,200 / Year",
    duration: "6 Years",
  },

  // Additional countries can be added here
  {
    id: "nepal",
    country: "Nepal",
    region: "Asia",
    flag: "🇳🇵",
    image: "/images/countries/nepal.png",
    universities: "12+",
    tuition: "$5,000 / Year",
    duration: "5.5 Years",
  },
  {
    id: "italy",
    country: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    image: "/images/countries/italy.jpg",
    universities: "20+",
    tuition: "$2,000 / Year",
    duration: "6 Years",
  },
];

const FILTERS = [
  {
    id: "All",
    label: "All Countries",
    icon: Globe2,
  },
  {
    id: "Europe",
    label: "Europe",
    icon: Globe2,
  },
  {
    id: "Asia",
    label: "Asia",
    icon: Globe2,
  },
  {
    id: "North America",
    label: "North America",
    icon: Globe2,
  },
  {
    id: "South America",
    label: "South America",
    icon: Globe2,
  },
  {
    id: "Africa",
    label: "Africa",
    icon: Globe2,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.06,
      ease: "easeOut",
    },
  }),
};

export default function CountryExplorer() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter((country) => {
      const matchesRegion =
        activeFilter === "All" ||
        country.region === activeFilter;

      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        country.country.toLowerCase().includes(searchValue) ||
        country.region.toLowerCase().includes(searchValue);

      return matchesRegion && matchesSearch;
    });
  }, [activeFilter, search]);

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const hasMore = visibleCount < filteredCountries.length;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(10);
  };

  return (
    <section
      id="countries"
      className="relative overflow-hidden bg-white py-8 sm:py-24 lg:py-10"
    >
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Subtle grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#0263CC]/10 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#02A7BB]/10 blur-[120px]"
        />

        {/* Decorative SVG */}

        <svg
          className="absolute right-0 top-20 hidden h-[500px] w-[650px] opacity-[0.07] lg:block"
          viewBox="0 0 650 500"
          fill="none"
        >
          <defs>
            <pattern
              id="countryDots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="#0263CC"
              />
            </pattern>
          </defs>

          <path
            d="M80 170C140 110 210 130 260 100C330 58 390 90 440 125C500 166 560 140 610 180C640 205 625 255 570 260C510 266 480 310 425 335C360 365 330 415 270 390C215 368 180 320 120 315C65 310 30 270 50 225C58 205 65 188 80 170Z"
            fill="url(#countryDots)"
          />

          <motion.path
            d="M105 280C190 170 290 150 385 210C450 250 510 220 565 170"
            stroke="#0263CC"
            strokeWidth="2"
            strokeDasharray="5 9"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2.5,
            }}
          />

          <motion.circle
            cx="105"
            cy="280"
            r="6"
            fill="#0263CC"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <motion.circle
            cx="565"
            cy="170"
            r="6"
            fill="#02A7BB"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.7,
            }}
          />
        </svg>

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Eyebrow */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-[#F4F9FF] px-4 py-2">

            <Sparkles className="h-4 w-4 text-[#0263CC]" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0263CC]">
              Explore Your Options
            </span>

          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#1876E5] to-[#02A7BB] bg-clip-text text-transparent">
              Study Destination
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Compare popular medical education destinations and find the
            country that fits your academic and career goals.
          </p>

        </motion.div>

        {/* =========================================================
            SEARCH + FILTER BAR
        ========================================================== */}

        <div className="mt-10">

          {/* Search */}

          <div className="mx-auto mb-5 max-w-md">

            <div className="group relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-[#0263CC]" />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(10);
                }}
                placeholder="Search a country..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-sm font-medium text-slate-700 shadow-[0_10px_35px_rgba(2,99,204,.06)] outline-none transition focus:border-[#0263CC]/40 focus:ring-4 focus:ring-[#0263CC]/5"
              />

            </div>

          </div>

          {/* Filters */}

          <div className="relative">

            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:justify-center">

              {FILTERS.map((filter) => {
                const Icon = filter.icon;
                const active = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => handleFilterChange(filter.id)}
                    className={`relative flex h-12 shrink-0 items-center gap-2 rounded-xl px-5 text-sm font-bold transition-all ${
                      active
                        ? "bg-[#0263CC] text-white shadow-[0_10px_25px_rgba(2,99,204,.22)]"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#0263CC]/25 hover:text-[#0263CC]"
                    }`}
                  >

                    <Icon className="h-4 w-4" />

                    {filter.label}

                    {active && (
                      <motion.span
                        layoutId="activeFilter"
                        className="absolute inset-0 -z-10 rounded-xl"
                      />
                    )}

                  </button>
                );
              })}

            </div>

          </div>

        </div>

        {/* =========================================================
            RESULT COUNT
        ========================================================== */}

        <div className="mt-9 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-[#02A7BB]" />

            <p className="text-sm font-semibold text-slate-500">
              Showing{" "}
              <span className="font-black text-slate-800">
                {visibleCountries.length}
              </span>{" "}
              destinations
            </p>

          </div>

          <div className="hidden items-center gap-2 text-xs font-medium text-slate-400 sm:flex">
            <MapPin className="h-4 w-4" />
            Find your ideal destination
          </div>

        </div>

        {/* =========================================================
            COUNTRY GRID
        ========================================================== */}

        <motion.div
          layout
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >

          <AnimatePresence mode="popLayout">

            {visibleCountries.map((country, index) => (
              <motion.div
                key={country.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  layout: {
                    duration: 0.3,
                  },
                }}
                className="group"
              >
                <CountryCard country={country} />
              </motion.div>
            ))}

          </AnimatePresence>

        </motion.div>

        {/* =========================================================
            NO RESULTS
        ========================================================== */}

        {filteredCountries.length === 0 && (
          <div className="mt-10 flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-[#F8FBFF] px-5 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0263CC]/10">
              <Globe2 className="h-7 w-7 text-[#0263CC]" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No country found
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-500">
              Try searching for another country or choose a different region.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-5 rounded-xl bg-[#0263CC] px-5 py-3 text-sm font-bold text-white"
            >
              Reset Search
            </button>

          </div>
        )}

        {/* =========================================================
            LOAD MORE
        ========================================================== */}

        {hasMore && (
          <div className="mt-10 flex justify-center">

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                setVisibleCount((prev) => prev + 4)
              }
              className="group inline-flex h-12 items-center gap-3 rounded-2xl border border-[#0263CC]/30 bg-white px-7 text-sm font-bold text-[#0263CC] shadow-sm transition hover:border-[#0263CC] hover:bg-[#0263CC] hover:text-white"
            >

              Load More Countries

              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />

            </motion.button>

          </div>
        )}

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 rounded-3xl border border-[#0263CC]/10 bg-gradient-to-r from-[#F4F9FF] via-white to-[#F2FCFD] p-5 sm:p-6"
        >

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0263CC] text-white shadow-lg shadow-[#0263CC]/20">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>

                <p className="font-bold text-slate-900">
                  Not sure which country is right for you?
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Talk to our experts for personalized guidance.
                </p>

              </div>

            </div>

            <Link
              href="/contact"
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-[#0263CC] px-5 text-sm font-bold text-white transition hover:bg-[#0155B5]"
            >

              Talk to an Expert

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ===============================================================
   COUNTRY CARD
================================================================ */

function CountryCard({ country }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_12px_35px_rgba(2,99,204,.07)] transition-all duration-300 group-hover:border-[#0263CC]/15 group-hover:shadow-[0_22px_50px_rgba(2,99,204,.13)]">

      {/* =========================================================
          IMAGE
      ========================================================== */}

      <div className="relative aspect-[1.7/1] overflow-hidden">

        <Image
          src={country.image}
          alt={`${country.country} for MBBS abroad`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

        {/* Popular */}

        {country.popular && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black text-[#0263CC] shadow-lg backdrop-blur">
            <Sparkles className="h-3 w-3" />
            Popular
          </div>
        )}

        {/* Region */}

        <div className="absolute bottom-3 right-3 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
          {country.region}
        </div>

      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="p-4 sm:p-5">

        {/* Country */}

        <div className="flex items-center gap-2">

          <span className="text-2xl leading-none">
            {country.flag}
          </span>

          <h3 className="text-lg font-black text-slate-900">
            {country.country}
          </h3>

        </div>

        {/* Details */}

        <div className="mt-4 space-y-2.5">

          {/* Universities */}

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <Building2 className="h-3.5 w-3.5 text-[#0263CC]" />

              Universities

            </div>

            <span className="text-xs font-bold text-slate-800">
              {country.universities}
            </span>

          </div>

          {/* Tuition */}

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <WalletCards className="h-3.5 w-3.5 text-[#02A7BB]" />

              Tuition Fees

            </div>

            <span className="text-right text-xs font-bold text-slate-800">
              {country.tuition}
            </span>

          </div>

          {/* Duration */}

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <Clock3 className="h-3.5 w-3.5 text-[#0263CC]" />

              Duration

            </div>

            <span className="text-xs font-bold text-slate-800">
              {country.duration}
            </span>

          </div>

        </div>

        {/* Divider */}

        <div className="my-4 h-px bg-slate-100" />

        {/* Button */}

        <Link
          href={`/countries/${country.id}`}
          className="group/button flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#0263CC]/15 bg-[#F8FBFF] text-xs font-bold text-[#0263CC] transition hover:border-[#0263CC] hover:bg-[#0263CC] hover:text-white"
        >

          View Details

          <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />

        </Link>

      </div>

    </div>
  );
}