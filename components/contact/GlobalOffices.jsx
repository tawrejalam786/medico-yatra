"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe2,
  MapPin,
  Navigation,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";

const OFFICES = [
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    title: "India Head Office",
    city: "Noida",
    state: "Uttar Pradesh",
    address: "2nd Floor, 123, Education Hub, Sector 62, Noida, UP 201309",
    phone: "+91 96544 00800",
    hours: "Mon - Sat • 9:00 AM - 7:00 PM",
    image: "/images/offices/india-office.jpg",
    coordinates: {
      lat: 28.6271,
      lng: 77.3725,
    },
    mapQuery: "Sector 62 Noida Uttar Pradesh India",
  },

  {
    id: "uae",
    country: "UAE",
    flag: "🇦🇪",
    title: "UAE Office",
    city: "Dubai",
    state: "Dubai",
    address: "Office No. 507, Business Bay, Dubai, UAE",
    phone: "+971 50 000 0000",
    hours: "Mon - Sat • 9:00 AM - 7:00 PM",
    image: "/images/offices/uae-office.jpg",
    coordinates: {
      lat: 25.1866,
      lng: 55.2628,
    },
    mapQuery: "Business Bay Dubai UAE",
  },

  {
    id: "russia",
    country: "Russia",
    flag: "🇷🇺",
    title: "Russia Office",
    city: "Moscow",
    state: "Moscow",
    address:
      "Office 12, Presnenskaya Embankment, Moscow 123112, Russia",
    phone: "+7 000 000 0000",
    hours: "Mon - Sat • 9:00 AM - 7:00 PM",
    image: "/images/offices/russia-office.jpg",
    coordinates: {
      lat: 55.7472,
      lng: 37.5371,
    },
    mapQuery: "Presnenskaya Embankment Moscow Russia",
  },

  {
    id: "georgia",
    country: "Georgia",
    flag: "🇬🇪",
    title: "Georgia Office",
    city: "Tbilisi",
    state: "Tbilisi",
    address:
      "14 Aleksandre Kazbegi Ave, Saburtalo, Tbilisi, Georgia",
    phone: "+995 000 000 000",
    hours: "Mon - Sat • 9:00 AM - 7:00 PM",
    image: "/images/offices/georgia-office.jpg",
    coordinates: {
      lat: 41.725,
      lng: 44.7678,
    },
    mapQuery: "Aleksandre Kazbegi Avenue Tbilisi Georgia",
  },

  {
    id: "uzbekistan",
    country: "Uzbekistan",
    flag: "🇺🇿",
    title: "Uzbekistan Office",
    city: "Tashkent",
    state: "Tashkent",
    address:
      "Amir Temur Street 88, Tashkent, Uzbekistan",
    phone: "+998 00 000 0000",
    hours: "Mon - Sat • 9:00 AM - 7:00 PM",
    image: "/images/offices/uzbekistan-office.jpg",
    coordinates: {
      lat: 41.3111,
      lng: 69.2797,
    },
    mapQuery: "Amir Temur Street Tashkent Uzbekistan",
  },
];

export default function GlobalOffices() {
  const [selectedOffice, setSelectedOffice] = useState(OFFICES[0]);
  const [search, setSearch] = useState("");

  const filteredOffices = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return OFFICES;

    return OFFICES.filter(
      (office) =>
        office.country.toLowerCase().includes(value) ||
        office.city.toLowerCase().includes(value) ||
        office.title.toLowerCase().includes(value)
    );
  }, [search]);

  const mapUrl = `https://www.google.com/maps?q=${selectedOffice.coordinates.lat},${selectedOffice.coordinates.lng}&z=14&output=embed`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    selectedOffice.mapQuery
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] py-20 sm:py-24 lg:py-10">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0263CC]/15 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#02A7BB]/15 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white px-4 py-2 shadow-sm">
            <Globe2 className="h-4 w-4 text-[#0263CC]" />

            <span className="text-sm font-bold tracking-wide text-[#0263CC]">
              OUR GLOBAL PRESENCE
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Offices{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Wherever your medical journey takes you, our dedicated teams are
            here to provide trusted guidance and personalized support.
          </p>

          {/* Small stats */}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
              <Building2 className="h-4 w-4 text-[#0263CC]" />
              5 Global Offices
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
              <Globe2 className="h-4 w-4 text-[#02A7BB]" />
              Multiple Countries
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN OFFICE + MAP AREA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-[0_30px_90px_rgba(2,99,204,0.12)] sm:p-3 lg:rounded-[38px]"
        >
          <div className="grid overflow-hidden rounded-[26px] bg-[#F8FBFF] lg:grid-cols-[380px_1fr] lg:rounded-[32px]">

            {/* =====================================================
                LEFT SIDE
            ====================================================== */}

            <div className="flex min-h-[650px] flex-col border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">

              {/* Header */}

              <div className="border-b border-slate-100 p-5 sm:p-6">

                <div className="mb-4 flex items-center justify-between gap-3">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0263CC]">
                      Find an Office
                    </p>

                    <h3 className="mt-1 text-xl font-black text-slate-900">
                      Our Locations
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/10">
                    <MapPin className="h-5 w-5 text-[#0263CC]" />
                  </div>

                </div>

                {/* Search */}

                <div className="relative">

                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search country or city..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-[#F8FBFF] pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-[#0263CC]/40 focus:bg-white focus:ring-4 focus:ring-[#0263CC]/5"
                  />

                </div>

              </div>

              {/* Office List */}

              <div className="flex-1 space-y-3 overflow-y-auto p-4 sm:p-5 lg:max-h-[590px]">

                {filteredOffices.length === 0 ? (
                  <div className="flex h-40 flex-col items-center justify-center text-center">
                    <MapPin className="mb-3 h-8 w-8 text-slate-300" />

                    <p className="font-semibold text-slate-600">
                      No office found
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Try another country or city.
                    </p>
                  </div>
                ) : (
                  filteredOffices.map((office, index) => {
                    const active = selectedOffice.id === office.id;

                    return (
                      <motion.button
                        key={office.id}
                        type="button"
                        onClick={() => setSelectedOffice(office)}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        whileHover={{ x: 3 }}
                        className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 ${
                          active
                            ? "border-[#0263CC]/30 bg-[#0263CC]/[0.06] shadow-[0_12px_30px_rgba(2,99,204,0.10)]"
                            : "border-slate-100 bg-white hover:border-[#0263CC]/20 hover:shadow-md"
                        }`}
                      >

                        {/* Active indicator */}

                        <div
                          className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all ${
                            active
                              ? "bg-[#0263CC]"
                              : "bg-transparent"
                          }`}
                        />

                        {/* Image */}

                        <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
                          <Image
                            src={office.image}
                            alt={office.title}
                            fill
                            sizes="78px"
                            className="object-cover transition duration-500 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center gap-2">

                            <span className="text-lg">
                              {office.flag}
                            </span>

                            <h4 className="truncate text-sm font-extrabold text-slate-900">
                              {office.title}
                            </h4>

                          </div>

                          <p className="mt-1 text-xs font-semibold text-[#0263CC]">
                            {office.city}, {office.state}
                          </p>

                          <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-500">
                            {office.address}
                          </p>

                        </div>

                        {/* Arrow */}

                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                            active
                              ? "bg-[#0263CC] text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-[#0263CC] group-hover:text-white"
                          }`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </div>

                      </motion.button>
                    );
                  })
                )}

              </div>

              {/* Bottom hint */}

              <div className="border-t border-slate-100 p-4">

                <div className="flex items-center gap-3 rounded-2xl bg-[#F8FBFF] p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/10">
                    <Navigation className="h-5 w-5 text-[#0263CC]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Select an office
                    </p>

                    <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                      The map will automatically update.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* =====================================================
                RIGHT MAP
            ====================================================== */}

            <div className="relative min-h-[500px] lg:min-h-[650px]">

              {/* Google Map */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={selectedOffice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >

                  <iframe
                    title={`${selectedOffice.title} Google Map`}
                    src={mapUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </motion.div>

              </AnimatePresence>

              {/* Top map badge */}

              <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">

                <div className="rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Currently Viewing
                      </p>

                      <p className="mt-0.5 text-sm font-black text-slate-900">
                        {selectedOffice.title}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="hidden rounded-full border border-white/70 bg-white/95 px-4 py-2 text-xs font-bold text-[#0263CC] shadow-lg backdrop-blur-md sm:flex sm:items-center sm:gap-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                  Office Available

                </div>

              </div>

              {/* Bottom office information */}

              <motion.div
                key={`info-${selectedOffice.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-6"
              >

                <div className="rounded-[24px] border border-white/70 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-5">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="min-w-0">

                      <div className="flex items-center gap-2">

                        <span className="text-xl">
                          {selectedOffice.flag}
                        </span>

                        <h3 className="text-lg font-black text-slate-900">
                          {selectedOffice.title}
                        </h3>

                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#0263CC]" />
                          {selectedOffice.city}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 className="h-3.5 w-3.5 text-[#02A7BB]" />
                          {selectedOffice.hours}
                        </span>

                      </div>

                      <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
                        {selectedOffice.address}
                      </p>

                    </div>

                    <div className="flex shrink-0 gap-2">

                      <a
                        href={`tel:${selectedOffice.phone.replace(
                          /\s/g,
                          ""
                        )}`}
                        className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-[#0263CC]/20 hover:bg-[#0263CC]/5"
                      >
                        <Phone className="h-4 w-4 text-[#0263CC]" />

                        <span className="hidden sm:inline">
                          Call
                        </span>
                      </a>

                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-4 text-sm font-bold text-white shadow-lg shadow-[#0263CC]/20 transition hover:bg-[#0155B4]"
                      >
                        <Navigation className="h-4 w-4" />

                        Directions

                        <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </a>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 grid gap-3 sm:grid-cols-3"
        >

          <div className="flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/10">
              <CheckCircle2 className="h-5 w-5 text-[#0263CC]" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Trusted Guidance
              </p>

              <p className="text-xs text-slate-500">
                Dedicated local support
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#02A7BB]/10">
              <Globe2 className="h-5 w-5 text-[#02A7BB]" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Global Network
              </p>

              <p className="text-xs text-slate-500">
                Offices across multiple countries
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4DA5EC]/10">
              <Sparkles className="h-5 w-5 text-[#0263CC]" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Student First
              </p>

              <p className="text-xs text-slate-500">
                Personalized admission assistance
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}