"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";


// =====================================================
// COURSES DATA
// =====================================================

const courses = [
  {
    name: "MBBS",
    icon: Stethoscope,
    type: "lucide",
    subtitle: "Bachelor of Medicine",
  },
  {
    name: "Dental",
    icon: faTooth,
    type: "fontawesome",
    subtitle: "Bachelor of Dental Surgery",
  },
  {
    name: "Physiotherapy",
    icon: HeartPulse,
    type: "lucide",
    subtitle: "Build Your Career in Physiotherapy",
  },
  {
    name: "Nursing",
    icon: Syringe,
    type: "lucide",
    subtitle: "Professional Nursing Programs",
  },
  {
    name: "Pharmacy",
    icon: Pill,
    type: "lucide",
    subtitle: "Bachelor of Pharmacy",
  },
  {
    name: "Medical Courses",
    icon: GraduationCap,
    type: "lucide",
    subtitle: "Explore More Medical Careers",
  },
];


// Duplicate courses for infinite marquee
const marqueeItems = [...courses, ...courses];


export default function CourseMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-12 lg:py-14">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#0263CC]/5 blur-3xl" />


      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">

        {/* Small Label */}
        <div className="mb-3 flex items-center justify-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0263CC]/10">
            <GraduationCap
              size={17}
              strokeWidth={2}
              className="text-[#0263CC]"
            />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0263CC] sm:text-sm">
            Explore Medical Courses
          </span>

        </div>


        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-tight text-[#021E46] sm:text-3xl lg:text-4xl">
          Choose Your Medical Career Path
        </h2>


        {/* Description */}
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Explore popular medical courses and find the right career path
          for your future.
        </p>

      </div>


      {/* =====================================================
          MARQUEE WRAPPER
      ====================================================== */}

      <div className="relative w-full overflow-hidden">


        {/* =====================================================
            LEFT FADE
        ====================================================== */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-24 lg:w-40" />


        {/* =====================================================
            RIGHT FADE
        ====================================================== */}

        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-24 lg:w-40" />


        {/* =====================================================
            INFINITE MARQUEE
        ====================================================== */}

        <motion.div
          className="flex w-max gap-4 sm:gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >

          {marqueeItems.map((course, index) => {

            const Icon = course.icon;

            return (
              <motion.div
                key={`${course.name}-${index}`}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group flex w-[260px] shrink-0 cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-blue-400 p-4 shadow-sm transition-all duration-300 hover:border-[#4DA5EC]/50 hover:shadow-xl sm:w-[290px] sm:p-5"
              >

                {/* =================================================
                    COURSE ICON
                ================================================== */}

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F1F7FC] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white sm:h-16 sm:w-16">

                  {course.type === "fontawesome" ? (

                    <FontAwesomeIcon
                      icon={Icon}
                      className="text-2xl transition-transform duration-300 group-hover:scale-110"
                    />

                  ) : (

                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                  )}

                </div>


                {/* =================================================
                    COURSE CONTENT
                ================================================== */}

                <div className="min-w-0 flex-1">

                  <h3 className="text-base font-bold text-[#fff] sm:text-lg">
                    {course.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white sm:text-sm">
                    {course.subtitle}
                  </p>

                </div>


                {/* =================================================
                    ARROW
                ================================================== */}

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F7FC] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM INFO
      ====================================================== */}

      <div className="relative z-10 mt-7 flex items-center justify-center px-4">

        <div className="flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">

          {/* Animated Dot */}
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#02A7BB]" />

          <span className="text-xs font-medium text-slate-500 sm:text-sm">
            Explore the right course for your medical career
          </span>

        </div>

      </div>

    </section>
  );
}