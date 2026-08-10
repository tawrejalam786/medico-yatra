"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";

const COUNSELLORS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Lead Counsellor",
    experience: "10+ Years Exp.",
    image: "/images/counsellors/rahul-sharma.jpg",
    expertise: [
      "MBBS Abroad",
      "University Selection",
      "Career Guidance",
    ],
    // description:
    //   "Helping students identify the right medical university and build a clear career pathway.",
    profile: "/counsellors/rahul-sharma",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Senior Counsellor",
    experience: "8+ Years Exp.",
    image: "/images/counsellors/priya-mehta.jpg",
    expertise: [
      "Russia",
      "Georgia",
      "Kazakhstan",
      "Admission Support",
    ],
    // description:
    //   "Specialist in university shortlisting, admission planning and country selection.",
    profile: "/counsellors/priya-mehta",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Counsellor",
    experience: "6+ Years Exp.",
    image: "/images/counsellors/aman-verma.jpg",
    expertise: [
      "MBBS Abroad",
      "Documentation",
      "Visa Guidance",
    ],
    // description:
    //   "Guiding students through documentation, university applications and visa preparation.",
    profile: "/counsellors/aman-verma",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Counsellor",
    experience: "5+ Years Exp.",
    image: "/images/counsellors/portrait-young-smiling-pretty-girl-plaid-shirt-posing.jpg",
    expertise: [
      "University Shortlisting",
      "Student Support",
      "Admission Guidance",
    ],
    // description:
    //   "Focused on personalised university recommendations and student-first counselling.",
    profile: "/counsellors/neha-singh",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Vikram Patel",
    role: "Senior Counsellor",
    experience: "6+ Years Exp.",
    image: "/images/counsellors/vikram-patel.jpg",
    expertise: [
      "Europe Admissions",
      "Career Planning",
      "FMGE Guidance",
    ],
    // description:
    //   "Helping students plan international medical education with long-term career goals in mind.",
    profile: "/counsellors/vikram-patel",
    linkedin: "#",
  },
];

export default function CounsellorShowcase() {
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollCards = (direction) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;

    const amount =
      window.innerWidth >= 1280
        ? 310
        : window.innerWidth >= 1024
          ? 330
          : window.innerWidth >= 640
            ? 360
            : 320;

    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });

    setActiveIndex((prev) => {
      if (direction === "next") {
        return Math.min(prev + 1, COUNSELLORS.length - 1);
      }

      return Math.max(prev - 1, 0);
    });
  };

  return (
    <section
      id="our-counsellors"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-8"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft glow */}

        <div className="absolute left-[-180px] top-20 h-[380px] w-[380px] rounded-full bg-[#0263CC]/[0.035] blur-[100px]" />

        <div className="absolute right-[-180px] bottom-10 h-[400px] w-[400px] rounded-full bg-[#02A7BB]/[0.04] blur-[110px]" />

        {/* Dot pattern */}

        <div
          className="absolute right-0 top-0 h-[350px] w-[350px] opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0263CC 1px, transparent 1px)",
            backgroundSize: "13px 13px",
            maskImage:
              "linear-gradient(to bottom left, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom left, black, transparent 75%)",
          }}
        />

        {/* Decorative SVG */}

        <svg
          className="absolute bottom-0 left-0 h-64 w-64 opacity-[0.035]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="#0263CC"
            strokeWidth="1"
          />

          <circle
            cx="150"
            cy="150"
            r="90"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <circle
            cx="150"
            cy="150"
            r="55"
            stroke="#02A7BB"
            strokeWidth="1"
          />

          <path
            d="M150 30V270M30 150H270"
            stroke="#0263CC"
          />
        </svg>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-2">

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
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F5FAFF] px-3 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
              Meet The Team
            </span>
          </motion.div>

          <motion.h2
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
            transition={{
              duration: 0.6,
              delay: 0.05,
            }}
            className="text-3xl font-black tracking-[-0.025em] text-[#0B1B3A] sm:text-4xl lg:text-5xl"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Expert Counsellors
            </span>
          </motion.h2>

          <motion.p
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
              duration: 0.6,
              delay: 0.15,
            }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
          >
            Dedicated professionals with deep knowledge and experience
            in overseas medical education, helping you make confident
            decisions for your future.
          </motion.p>

          {/* Small divider */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 50,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB]"
          />

        </div>

        {/* =================================================
            SLIDER HEADER
        ================================================== */}

        <div className="mb-5 flex items-center justify-between">

          <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex">
            <UserRound className="h-4 w-4 text-[#0263CC]" />
            Our counselling experts
          </div>

          {/* Navigation */}

          <div className="ml-auto flex items-center gap-2">

            <button
              type="button"
              onClick={() => scrollCards("prev")}
              aria-label="Previous counsellors"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0263CC] shadow-sm transition-all hover:-translate-x-0.5 hover:border-[#0263CC]/30 hover:bg-[#F5FAFF] active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollCards("next")}
              aria-label="Next counsellors"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0263CC] text-white shadow-[0_8px_20px_rgba(2,99,204,.2)] transition-all hover:translate-x-0.5 hover:bg-[#0155B5] active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* =================================================
            CARDS
        ================================================== */}

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 scrollbar-hide sm:gap-5 lg:gap-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {COUNSELLORS.map((counsellor, index) => (
            <CounsellorCard
              key={counsellor.id}
              counsellor={counsellor}
              index={index}
              activeIndex={activeIndex}
            />
          ))}

        </div>

        {/* =================================================
            MOBILE SWIPE INDICATOR
        ================================================== */}

        <div className="mt-1 flex items-center justify-center gap-1.5 sm:hidden">

          {COUNSELLORS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (!sliderRef.current) return;

                sliderRef.current.scrollTo({
                  left: index * 320,
                  behavior: "smooth",
                });

                setActiveIndex(index);
              }}
              aria-label={`Go to counsellor ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-[#0263CC]"
                  : "w-1.5 bg-slate-200"
              }`}
            />
          ))}

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
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10"
        >

          {/* <Link
            href="/counsellors"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-6 text-sm font-bold text-white shadow-[0_12px_25px_rgba(2,99,204,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#0155B5]"
          >
            View All Counsellors

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link> */}

          <p className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            Speak with an expert who understands your journey
          </p>

        </motion.div>

      </div>
    </section>
  );
}


/* =============================================================
   COUNSELLOR CARD
============================================================= */

function CounsellorCard({
  counsellor,
  index,
  activeIndex,
}) {
  const isActive = index === activeIndex;

  return (
    <motion.article
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
        margin: "-50px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="group min-w-[285px] snap-start sm:min-w-[320px] lg:min-w-[calc((100%-40px)/3)] xl:min-w-[calc((100%-80px)/5)]"
    >

      <div
        className={`relative h-full overflow-hidden rounded-[22px] border bg-white transition-all duration-300 ${
          isActive
            ? "border-[#0263CC]/15 shadow-[0_18px_45px_rgba(2,99,204,.11)]"
            : "border-slate-100 shadow-[0_8px_30px_rgba(15,40,80,.06)] group-hover:border-[#0263CC]/10 group-hover:shadow-[0_18px_45px_rgba(2,99,204,.10)]"
        }`}
      >

        {/* =================================================
            IMAGE
        ================================================== */}

        <div className="relative aspect-[0.92] overflow-hidden bg-gradient-to-b from-[#EAF3FA] to-[#F7FAFC]">

          {/* Background decoration */}

          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/[0.05] blur-2xl" />

          {/* Image */}

          <Image
            src={counsellor.image}
            alt={`${counsellor.name} - ${counsellor.role}`}
            fill
            sizes="(max-width: 639px) 285px, (max-width: 1023px) 320px, 20vw"
            className="relative z-10 object-cover object-top transition duration-700 group-hover:scale-[1.035]"
          />

          {/* Image bottom gradient */}

          <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/10 to-transparent opacity-50" />

          {/* Experience badge */}

          <div className="absolute left-3 top-3 z-30 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-md">

            <Clock3 className="h-3 w-3 text-[#0263CC]" />

            <span className="text-[9px] font-bold text-[#0B1B3A]">
              {counsellor.experience}
            </span>

          </div>

        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="p-4 sm:p-5">

          {/* Name */}

          <div className="flex items-start justify-between gap-2">

            <div>

              <h3 className="text-base font-black text-[#0B1B3A] sm:text-[17px]">
                {counsellor.name}
              </h3>

              <p className="mt-0.5 text-[11px] font-semibold text-[#0263CC]">
                {counsellor.role}
              </p>

            </div>

            {/* Verified */}

            <div
              title="Verified Counsellor"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </div>

          </div>

          {/* Description */}

          {/* <p className="mt-3 line-clamp-2 min-h-[36px] text-[10px] leading-[1.7] text-slate-500">
            {counsellor.description}
          </p> */}

          {/* Expertise */}

          <div className="mt-3">

            <div className="mb-2 flex items-center gap-1.5">

              <BriefcaseBusiness className="h-3.5 w-3.5 text-[#0263CC]" />

              <span className="text-[10px] font-black text-[#0B1B3A]">
                Expertise
              </span>

            </div>

            <div className="flex min-h-[55px] flex-wrap content-start gap-1.5">

              {counsellor.expertise.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F4F8FD] px-2 py-1 text-[8px] font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Divider */}

          <div className="my-4 h-px bg-slate-100" />

          {/* Actions */}

          <div className="flex items-center gap-2">

            <Link
              href={counsellor.profile}
              className="group/button flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#0263CC]/15 bg-white text-[10px] font-bold text-[#0263CC] transition hover:border-[#0263CC] hover:bg-[#F5FAFF]"
            >
              View Profile

              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/button:translate-x-0.5" />
            </Link>

            <Link
              href={counsellor.linkedin}
              aria-label={`${counsellor.name} faLinkedinIn`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#0263CC]/15 bg-white text-[#0263CC] transition hover:border-[#0263CC] hover:bg-[#F5FAFF]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </div>

    </motion.article>
  );
}