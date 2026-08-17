"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Globe2,
  HeartPulse,
  Stethoscope,
  Sparkles,
  X,
  Search,
  GraduationCap,
  Activity,
  Brain,
  Pill,
  Baby,
  Microscope,
  ScanLine,
  Ear,
  Apple,
  Ambulance,
  UserRound,
  Accessibility,
} from "lucide-react";

/* =========================================================
   COURSE DATA
========================================================= */

const COURSE_GROUPS = [
  {
    id: "mbbs",
    title: "MBBS Abroad",
    shortTitle: "MBBS Abroad",
    description:
      "Explore international medical education opportunities at globally recognised universities.",
    icon: Globe2,
    featured: true,

    courses: [
      {
        name: "MBBS Abroad",
        slug: "mbbs-abroad",
        icon: GraduationCap,
        description: "Study medicine abroad",
        popular: true,
      },
    ],
  },

  {
    id: "allied-health",
    title: "Nursing & Allied Health",
    shortTitle: "Allied Health",
    description:
      "Build a rewarding healthcare career across nursing, diagnostics, therapy and clinical technology.",
    icon: HeartPulse,

    courses: [
      {
        name: "Nursing",
        slug: "nursing",
        icon: Baby,
      },
      {
        name: "Pharmacy",
        slug: "pharmacy",
        icon: Pill,
      },
      {
        name: "Physiotherapy",
        slug: "physiotherapy",
        icon: Activity,
      },
      {
        name: "Dentistry",
        slug: "dentistry",
        icon: Stethoscope,
      },
      {
        name: "Veterinary Medicine",
        slug: "veterinary",
        icon: Microscope,
      },
    ],
  },

  {
    id: "healthcare",
    title: "Healthcare & Clinical",
    shortTitle: "Healthcare",
    description:
      "Discover specialised healthcare careers spanning psychology, nutrition, emergency care and clinical practice.",
    icon: Stethoscope,

    courses: [
      {
        name: "Clinical Psychology",
        slug: "clinical-psychology",
        icon: Brain,
      },
      {
        name: "Nutrition Dietetics",
        slug: "nutrition-dietetics",
        icon: Apple,
      },
      {
        name: "Public Healthcare Management",
        slug: "public-healthcare-management",
        icon: HeartPulse,
      },
      {
        name: "EMT Paramedic",
        slug: "emt-paramedic",
        icon: Ambulance,
      },
      {
        name: "Physician Assistant",
        slug: "physician-assistant",
        icon: UserRound,
      },
      {
        name: "Prosthetics Orthotics",
        slug: "prosthetics-orthotics",
        icon: Accessibility,
      },
    ],
  },
];

const TOTAL_COURSES = COURSE_GROUPS.reduce(
  (total, group) => total + group.courses.length,
  0
);

/* =========================================================
   COURSE ITEM
========================================================= */

function CourseItem({ course, onClose, featured = false }) {
  const Icon = course.icon || Stethoscope;

  return (
    <Link
      href={`/courses/${course.slug}`}
      onClick={onClose}
      className={`group relative flex items-center gap-3 rounded-2xl border transition-all duration-300 ${
        featured
          ? "border-[#0263CC]/15 bg-gradient-to-br from-[#F1F7FF] to-white p-4 hover:-translate-y-0.5 hover:border-[#0263CC]/30 hover:shadow-[0_12px_30px_rgba(2,99,204,0.10)]"
          : "border-transparent bg-white p-2.5 hover:border-[#E5EEF9] hover:bg-[#F8FBFF] hover:shadow-[0_8px_24px_rgba(15,50,100,0.06)]"
      }`}
    >
      {/* Icon */}

      <div
        className={`flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
          featured
            ? "h-11 w-11 bg-[#0263CC] text-white shadow-[0_8px_20px_rgba(2,99,204,0.20)] group-hover:scale-105"
            : "h-9 w-9 bg-[#EEF5FF] text-[#0263CC] group-hover:bg-[#0263CC] group-hover:text-white"
        }`}
      >
        <Icon
          className={featured ? "h-5 w-5" : "h-4 w-4"}
          strokeWidth={2}
        />
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p
            className={`truncate font-bold transition-colors ${
              featured
                ? "text-sm text-[#0A1B44]"
                : "text-[12px] text-slate-700 group-hover:text-[#0263CC]"
            }`}
          >
            {course.name}
          </p>

          {course.popular && (
            <span className="shrink-0 rounded-full bg-[#FFF4E5] px-2 py-0.5 text-[8px] font-extrabold text-[#D97706]">
              Popular
            </span>
          )}
        </div>

        {featured && course.description && (
          <p className="mt-1 text-[10px] text-slate-500">
            {course.description}
          </p>
        )}
      </div>

      {/* Arrow */}

      <ChevronRight
        className={`shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0263CC] ${
          featured ? "h-4 w-4" : "h-3.5 w-3.5"
        }`}
      />
    </Link>
  );
}

/* =========================================================
   DESKTOP MEGA MENU
========================================================= */

function DesktopMegaMenu({ onClose }) {
  const [activeGroup, setActiveGroup] = useState("mbbs");

  const active =
    COURSE_GROUPS.find((group) => group.id === activeGroup) ||
    COURSE_GROUPS[0];

  const ActiveIcon = active.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 8,
        scale: 0.98,
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
      className="absolute left-7/2 top-[calc(100%+12px)] z-[100] w-[min(1180px,calc(100vw-32px))] -translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,50,100,0.18)]">
        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0263CC]/8 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#02A7BB]/8 blur-3xl" />

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <div className="relative flex items-center justify-between border-b border-slate-100 px-7 py-5">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0263CC]">
                <BookOpen className="h-4.5 w-4.5" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-extrabold text-[#0A1B44]">
                    Explore Courses
                  </h3>

                  <span className="rounded-full bg-[#EEF5FF] px-2 py-0.5 text-[8px] font-extrabold text-[#0263CC]">
                    {TOTAL_COURSES} COURSES
                  </span>
                </div>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Choose the right path for your healthcare career
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close courses menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="relative flex min-h-[390px]">
          {/* =================================================
              LEFT CATEGORY SIDEBAR
          ================================================= */}

          <aside className="w-[280px] shrink-0 border-r border-slate-100 bg-[#FAFCFF] p-4">
            <p className="mb-3 px-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
              Course Categories
            </p>

            <div className="space-y-1.5">
              {COURSE_GROUPS.map((group) => {
                const Icon = group.icon;
                const isActive = activeGroup === group.id;

                return (
                  <button
                    key={group.id}
                    type="button"
                    onMouseEnter={() => setActiveGroup(group.id)}
                    onClick={() => setActiveGroup(group.id)}
                    className={`group relative flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-white shadow-[0_8px_25px_rgba(15,50,100,0.08)]"
                        : "hover:bg-white/70"
                    }`}
                  >
                    {/* Active indicator */}

                    {isActive && (
                      <motion.div
                        layoutId="activeCourseCategory"
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-[#0263CC]"
                      />
                    )}

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                        isActive
                          ? "bg-[#0263CC] text-white shadow-[0_7px_18px_rgba(2,99,204,0.20)]"
                          : "bg-[#EEF5FF] text-[#0263CC]"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[11px] font-extrabold ${
                          isActive
                            ? "text-[#0A1B44]"
                            : "text-slate-600"
                        }`}
                      >
                        {group.shortTitle}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {group.courses.length}{" "}
                        {group.courses.length === 1
                          ? "course"
                          : "courses"}
                      </p>
                    </div>

                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-all ${
                        isActive
                          ? "translate-x-0.5 text-[#0263CC]"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick trust */}

            <div className="mt-6 rounded-2xl border border-[#E4EFFB] bg-white p-3.5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF8FA] text-[#02A7BB]">
                  <CircleCheck className="h-3.5 w-3.5" />
                </div>

                <p className="text-[9px] font-bold text-[#0A1B44]">
                  Expert Guidance
                </p>
              </div>

              <p className="mt-2 text-[9px] leading-4 text-slate-500">
                Get personalised guidance to select the right healthcare
                program.
              </p>
            </div>
          </aside>

          {/* =================================================
              RIGHT COURSE AREA
          ================================================= */}

          <section className="min-w-0 flex-1 p-6">
            {/* Category heading */}

            <div className="mb-5 flex items-start justify-between gap-5">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0263CC]">
                  <ActiveIcon className="h-4.5 w-4.5" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold text-[#0A1B44]">
                    {active.title}
                  </h4>

                  <p className="mt-1 max-w-[570px] text-[10px] leading-4 text-slate-500">
                    {active.description}
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[8px] font-bold text-slate-500">
                {active.courses.length}{" "}
                {active.courses.length === 1 ? "Course" : "Courses"}
              </span>
            </div>

            {/* Course Grid */}

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -5,
                }}
                transition={{
                  duration: 0.18,
                }}
                className={
                  active.featured
                    ? "max-w-[500px]"
                    : "grid grid-cols-2 gap-2"
                }
              >
                {active.courses.map((course, index) => (
                  <motion.div
                    key={course.slug}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.025,
                    }}
                  >
                    <CourseItem
                      course={course}
                      onClose={onClose}
                      featured={active.featured}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="relative flex items-center justify-between gap-4 border-t border-slate-100 bg-[#FAFCFF] px-7 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#02A7BB]">
              <Sparkles className="h-4 w-4" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-extrabold text-[#0A1B44]">
                Not sure which course is right for you?
              </p>

              <p className="mt-0.5 text-[9px] text-slate-500">
                Speak with our counsellors and get personalised guidance.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/courses"
              onClick={onClose}
              className="hidden items-center gap-1.5 rounded-xl border border-[#DCE9F8] bg-white px-3.5 py-2.5 text-[9px] font-bold text-[#0263CC] transition hover:bg-[#F3F8FF] sm:flex"
            >
              View All
              <ArrowRight className="h-3 w-3" />
            </Link>

            <Link
              href="/counselling"
              onClick={onClose}
              className="group flex items-center gap-2 rounded-xl bg-[#0263CC] px-4 py-2.5 text-[9px] font-bold text-white shadow-[0_7px_20px_rgba(2,99,204,.20)] transition-all hover:-translate-y-0.5 hover:bg-[#0759B8]"
            >
              Talk to an Expert
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOBILE MENU
========================================================= */

function MobileCoursesMenu({ onClose }) {
  const [openGroup, setOpenGroup] = useState("mbbs");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -5,
      }}
      className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,50,100,0.10)]"
    >
      {/* Header */}

      <div className="border-b border-slate-100 bg-gradient-to-br from-[#F4F9FF] to-white px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0263CC] text-white">
            <Search className="h-3.5 w-3.5" />
          </div>

          <div>
            <p className="text-xs font-extrabold text-[#0A1B44]">
              Explore Courses
            </p>

            <p className="mt-0.5 text-[9px] text-slate-500">
              {TOTAL_COURSES} healthcare career paths
            </p>
          </div>
        </div>
      </div>

      {/* Groups */}

      <div className="divide-y divide-slate-100">
        {COURSE_GROUPS.map((group) => {
          const GroupIcon = group.icon;
          const isOpen = openGroup === group.id;

          return (
            <div key={group.id}>
              <button
                type="button"
                onClick={() =>
                  setOpenGroup(isOpen ? null : group.id)
                }
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${
                    isOpen
                      ? "bg-[#0263CC] text-white"
                      : "bg-[#EEF5FF] text-[#0263CC]"
                  }`}
                >
                  <GroupIcon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-extrabold text-[#0A1B44]">
                    {group.title}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {group.courses.length}{" "}
                    {group.courses.length === 1
                      ? "course"
                      : "courses"}
                  </p>
                </div>

                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-1 bg-[#FAFCFF] px-4 pb-3">
                      {group.courses.map((course) => (
                        <CourseItem
                          key={course.slug}
                          course={course}
                          onClose={onClose}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Mobile CTA */}

      <div className="border-t border-slate-100 p-3">
        <Link
          href="/courses"
          onClick={onClose}
          className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] text-xs font-bold text-white"
        >
          View All Courses
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/counselling"
          onClick={onClose}
          className="mt-2 flex min-h-10 items-center justify-center text-[10px] font-bold text-[#0263CC]"
        >
          Need Help? Talk to a Counsellor
        </Link>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CoursesMegaMenu({
  isOpen,
  onClose,
  mobile = false,
}) {
  if (mobile) {
    return (
      <AnimatePresence>
        {isOpen && <MobileCoursesMenu onClose={onClose} />}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && <DesktopMegaMenu onClose={onClose} />}
    </AnimatePresence>
  );
}