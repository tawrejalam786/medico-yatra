"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  MapPin,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =========================================================
   DESTINATIONS DATA
========================================================= */

const destinations = [
  {
    id: 1,
    country: "Russia",
    slug: "russia",
    flag: "🇷🇺",
    image: "/images/countries/russia.jpg",
    points: [
      "NMC Recognized",
      "English Medium",
      "Affordable Fees",
    ],
  },
  {
    id: 2,
    country: "Kazakhstan",
    slug: "kazakhstan",
    flag: "🇰🇿",
    image: "/images/countries/Kazakhstan.png",
    points: [
      "NMC Recognized",
      "Safe & Student Friendly",
      "Modern Infrastructure",
    ],
  },
  {
    id: 3,
    country: "Georgia",
    slug: "georgia",
    flag: "🇬🇪",
    image: "/images/countries/Georgia.png",
    points: [
      "NMC Recognized",
      "Indian Food Available",
      "High FMGE Pass Rate",
    ],
  },
  {
    id: 4,
    country: "Uzbekistan",
    slug: "uzbekistan",
    flag: "🇺🇿",
    image: "/images/countries/Uzbekistan.png",
    points: [
      "NMC Recognized",
      "Low Living Cost",
      "Quality Education",
    ],
  },
  {
    id: 5,
    country: "Kyrgyzstan",
    slug: "kyrgyzstan",
    flag: "🇰🇬",
    image: "/images/countries/Kyrgyzstan.png",
    points: [
      "NMC Recognized",
      "Affordable Tuition",
      "Easy Admission",
    ],
  },
  {
    id: 6,
    country: "Philippines",
    slug: "philippines",
    flag: "🇵🇭",
    image: "/images/countries/Philippines.png",
    points: [
      "NMC Recognized",
      "English Medium",
      "Globally Accepted",
    ],
  },
  {
    id: 7,
    country: "Bangladesh",
    slug: "bangladesh",
    flag: "🇧🇩",
    image: "/images/countries/bangladesh.jpg",
    points: [
      "NMC Recognized",
      "Low Tuition Fees",
      "Close to India",
    ],
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function TopMBBSDestinations() {
  return (
    <section className="relative overflow-hidden bg-white py-7 sm:py-6 lg:py-8">
      
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-0">
        
        {/* Soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(77,165,236,0.10),transparent_35%)]" />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-28 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-3xl"
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#02A7BB]/5 blur-3xl"
        />

        {/* =================================================
            ANIMATED SVG ROUTE
        ================================================== */}

        <svg
          className="absolute left-0 top-20 hidden h-[250px] w-full opacity-60 lg:block"
          viewBox="0 0 1440 250"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M-20 160 C180 40 310 230 520 110 C720 -10 850 220 1050 100 C1190 20 1300 70 1460 25"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="6 9"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 0.14,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="520"
            cy="110"
            r="4"
            fill="#0263CC"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="1050"
            cy="100"
            r="4"
            fill="#02A7BB"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Decorative dots */}
        <div className="absolute left-[8%] top-24 hidden h-2 w-2 rounded-full bg-[#0263CC]/20 lg:block" />
        <div className="absolute left-[18%] top-36 hidden h-1.5 w-1.5 rounded-full bg-[#4DA5EC]/30 lg:block" />
        <div className="absolute right-[18%] top-28 hidden h-2 w-2 rounded-full bg-[#02A7BB]/20 lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1200px] overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          
          {/* Small badge */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F3F8FF] px-3 py-1.5">
            <Globe2 className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC] sm:text-xs">
              Study Around the World
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-2xl font-extrabold tracking-tight text-[#071A49] sm:text-3xl lg:text-4xl">
            Explore Top{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              MBBS Destinations
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            Quality education, global exposure, and a clear path to building
            your medical career abroad.
          </p>

          {/* Small underline */}

          <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
            <span className="h-1 w-8 rounded-full bg-[#0263CC]" />
            <span className="h-1 w-2 rounded-full bg-[#4DA5EC]/40" />
          </div>
        </motion.div>

        {/* =================================================
            CAROUSEL WRAPPER
        ================================================== */}

        <div className="relative">

          {/* Desktop previous */}

          <button
            type="button"
            aria-label="Previous destinations"
            className="destination-prev absolute left-[-12px] top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-[#0263CC] shadow-[0_8px_25px_rgba(7,43,90,0.12)] transition-all hover:-translate-x-1 hover:bg-[#0263CC] hover:text-white lg:flex xl:left-[-18px]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Desktop next */}

          <button
            type="button"
            aria-label="Next destinations"
            className="destination-next absolute right-[-12px] top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-[#0263CC] shadow-[0_8px_25px_rgba(7,43,90,0.12)] transition-all hover:translate-x-1 hover:bg-[#0263CC] hover:text-white lg:flex xl:right-[-18px]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".destination-prev",
              nextEl: ".destination-next",
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={650}
            spaceBetween={14}
            slidesPerView={1.15}
            breakpoints={{
              375: {
                slidesPerView: 1.25,
                spaceBetween: 14,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4.5,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 5.5,
                spaceBetween: 22,
              },
            }}
            className="!overflow-visible"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id} className="!h-auto">
                <DestinationCard destination={destination} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* =================================================
            MOBILE SWIPE HINT
        ================================================== */}

        <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
          <div className="h-1 w-10 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              animate={{
                x: [0, 22, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-5 rounded-full bg-[#0263CC]"
            />
          </div>

          <span className="text-[10px] font-medium text-slate-400">
            Swipe to explore
          </span>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-8 flex justify-center sm:mt-10"
        >
          <Link
            href="/countries"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#0263CC]/20 bg-white px-5 text-xs font-bold text-[#0263CC] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC] hover:bg-[#F5F9FF] sm:px-6 sm:text-sm"
          >
            Compare All Countries

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({ destination }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group h-full"
    >
      <div className="relative flex h-full min-h-[345px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(14,61,120,0.07)] transition-all duration-300 group-hover:border-[#0263CC]/15 group-hover:shadow-[0_18px_40px_rgba(2,99,204,0.13)]">

        {/* =================================================
            IMAGE
        ================================================== */}

        <Link
          href={`/countries/${destination.slug}`}
          className="relative block h-[150px] overflow-hidden sm:h-[155px]"
        >
          <Image
            src={destination.image}
            alt={`Study MBBS in ${destination.country}`}
            fill
            sizes="
              (max-width: 639px) 80vw,
              (max-width: 1023px) 40vw,
              25vw
            "
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#071A49]/30 via-transparent to-transparent" />

          {/* Location badge */}

          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-[#0263CC] shadow-sm backdrop-blur">
            <MapPin className="h-3 w-3" />
            MBBS Abroad
          </div>
        </Link>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="flex flex-1 flex-col p-4">

          {/* Country */}

          <div className="flex items-center gap-2">
            <span className="text-lg leading-none">
              {destination.flag}
            </span>

            <h3 className="text-sm font-extrabold text-[#071A49] sm:text-[15px]">
              {destination.country}
            </h3>
          </div>

          {/* Benefits */}

          <div className="mt-3 space-y-2">
            {destination.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2"
              >
                <span className="mt-[2px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#E9F8F3] text-[#159A67]">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>

                <span className="text-[10px] leading-4 text-slate-500 sm:text-[11px]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}

          <div className="mt-auto pt-4">
            <div className="mb-3 h-px w-full bg-slate-100" />

            {/* CTA */}

            <Link
              href={`/countries/${destination.slug}`}
              className="group/link inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0263CC] sm:text-xs"
            >
              Explore

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}