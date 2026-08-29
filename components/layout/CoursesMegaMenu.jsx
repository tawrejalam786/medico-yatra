"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  Accessibility,
  Activity,
  Ambulance,
  Apple,
  ArrowRight,
  Baby,
  BookOpen,
  Brain,
  ChevronRight,
  CircleCheck,
  GraduationCap,
  HeartPulse,
  Microscope,
  Pill,
  Sparkles,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

/* =========================================================
   ALL COURSES
========================================================= */

const COURSES = [
  {
    name: "MBBS Abroad",
    slug: "mbbs-abroad",
    description: "Study medicine at globally recognised universities.",
    icon: GraduationCap,
    popular: true,
    iconStyle:
      "bg-[#EAF3FF] text-[#0263CC] group-hover:bg-[#0263CC] group-hover:text-white",
  },
  {
    name: "Nursing",
    slug: "nursing",
    description: "Build a professional career in global nursing.",
    icon: Baby,
    iconStyle:
      "bg-[#E8FBF9] text-[#009E9A] group-hover:bg-[#009E9A] group-hover:text-white",
  },
  {
    name: "Pharmacy",
    slug: "pharmacy",
    description: "Explore pharmaceutical science and clinical practice.",
    icon: Pill,
    iconStyle:
      "bg-[#F1ECFF] text-[#7656C9] group-hover:bg-[#7656C9] group-hover:text-white",
  },
  {
    name: "Physiotherapy",
    slug: "physiotherapy",
    description: "Learn movement, rehabilitation and physical therapy.",
    icon: Activity,
    iconStyle:
      "bg-[#FFF0E5] text-[#E77928] group-hover:bg-[#E77928] group-hover:text-white",
  },
  {
    name: "Dentistry",
    slug: "dentistry",
    description: "Begin your career in professional dental healthcare.",
    icon: Stethoscope,
    iconStyle:
      "bg-[#E8F8EF] text-[#14885F] group-hover:bg-[#14885F] group-hover:text-white",
  },
  {
    name: "Veterinary Medicine",
    slug: "veterinary",
    description: "Study animal healthcare, medicine and surgery.",
    icon: Microscope,
    iconStyle:
      "bg-[#FFE8F0] text-[#D84C7E] group-hover:bg-[#D84C7E] group-hover:text-white",
  },
  {
    name: "Clinical Psychology",
    slug: "clinical-psychology",
    description: "Understand mental health and clinical behaviour.",
    icon: Brain,
    iconStyle:
      "bg-[#FFF4D8] text-[#B67B10] group-hover:bg-[#B67B10] group-hover:text-white",
  },
  {
    name: "Nutrition & Dietetics",
    slug: "nutrition-dietetics",
    description: "Build expertise in nutrition and healthy living.",
    icon: Apple,
    iconStyle:
      "bg-[#E7F7FF] text-[#178BE5] group-hover:bg-[#178BE5] group-hover:text-white",
  },
  {
    name: "Public Healthcare Management",
    slug: "public-healthcare-management",
    description: "Manage healthcare services and public health systems.",
    icon: HeartPulse,
    iconStyle:
      "bg-[#F0F2FF] text-[#555FD2] group-hover:bg-[#555FD2] group-hover:text-white",
  },
  {
    name: "EMT Paramedic",
    slug: "emt-paramedic",
    description: "Train for emergency and pre-hospital medical care.",
    icon: Ambulance,
    iconStyle:
      "bg-[#FFF0F0] text-[#DC4C4C] group-hover:bg-[#DC4C4C] group-hover:text-white",
  },
  {
    name: "Physician Assistant",
    slug: "physician-assistant",
    description: "Support physicians in modern clinical environments.",
    icon: UserRound,
    iconStyle:
      "bg-[#EAF8FA] text-[#02A7BB] group-hover:bg-[#02A7BB] group-hover:text-white",
  },
  {
    name: "Prosthetics & Orthotics",
    slug: "prosthetics-orthotics",
    description: "Design assistive devices that improve mobility.",
    icon: Accessibility,
    iconStyle:
      "bg-[#F4EEFF] text-[#8B5BC6] group-hover:bg-[#8B5BC6] group-hover:text-white",
  },
];

/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({ course, onClose, mobile = false }) {
  const Icon = course.icon;

  return (
    <Link
      href={`/courses/${course.slug}`}
      onClick={onClose}
      className={`group relative overflow-hidden border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC]/20 hover:shadow-[0_14px_35px_rgba(15,50,100,0.10)] ${
        mobile
          ? "flex min-h-[118px] flex-col rounded-2xl p-3"
          : "flex min-h-[94px] items-center gap-3.5 rounded-[20px] p-3.5"
      }`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#0263CC]/[0.035] blur-xl transition-all duration-300 group-hover:scale-150" />

      <div
        className={`relative flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
          mobile ? "h-9 w-9" : "h-11 w-11"
        } ${course.iconStyle}`}
      >
        <Icon
          className={mobile ? "h-4 w-4" : "h-5 w-5"}
          strokeWidth={2}
        />
      </div>

      <div className={`relative min-w-0 flex-1 ${mobile ? "mt-3" : ""}`}>
        <div className="flex items-start gap-1.5">
          <h4
            className={`font-extrabold leading-snug text-[#0A1B44] transition-colors group-hover:text-[#0263CC] ${
              mobile ? "text-[11px]" : "text-[12px]"
            }`}
          >
            {course.name}
          </h4>

          {course.popular && (
            <span className="shrink-0 rounded-full bg-[#FFF2DD] px-1.5 py-0.5 text-[7px] font-extrabold uppercase tracking-wide text-[#D97706]">
              Popular
            </span>
          )}
        </div>

        <p
          className={`mt-1 text-slate-500 ${
            mobile
              ? "line-clamp-2 text-[8px] leading-[13px]"
              : "line-clamp-2 text-[9px] leading-[14px]"
          }`}
        >
          {course.description}
        </p>
      </div>

      <ChevronRight
        className={`relative shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0263CC] ${
          mobile
            ? "absolute right-3 top-4 h-3.5 w-3.5"
            : "h-4 w-4"
        }`}
      />
    </Link>
  );
}

/* =========================================================
   DESKTOP MEGA MENU
========================================================= */

function DesktopMegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute left-6/2 top-[calc(100%+12px)] z-[100] w-[min(1060px,calc(100vw-32px))] -translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,50,100,0.18)]">
        {/* Decorative gradients */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0263CC]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#02A7BB]/[0.07] blur-3xl" />

        {/* Header */}

        <div className="relative flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC] text-white shadow-[0_8px_22px_rgba(2,99,204,0.22)]">
              <BookOpen className="h-4.5 w-4.5" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-[#0A1B44]">
                  Explore All Courses
                </h3>

                <span className="rounded-full bg-[#EEF5FF] px-2.5 py-1 text-[8px] font-extrabold text-[#0263CC]">
                  {COURSES.length} COURSES
                </span>
              </div>

              <p className="mt-1 text-[10px] text-slate-500">
                Choose the right healthcare career path for your future
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 rounded-full bg-[#EAF8FA] px-3 py-1.5 text-[9px] font-bold text-[#008C99] lg:flex">
              <CircleCheck className="h-3.5 w-3.5" />
              Globally focused programmes
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
        </div>

        {/* All Courses Grid */}

        <div className="relative p-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.025,
                },
              },
            }}
            className="grid grid-cols-3 gap-2.5"
          >
            {COURSES.map((course) => (
              <motion.div
                key={course.slug}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.18 }}
              >
                <CourseCard course={course} onClose={onClose} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}

        <div className="relative flex items-center justify-between gap-4 border-t border-slate-100 bg-[#FAFCFF] px-6 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#02A7BB]">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-[#0A1B44]">
                Not sure which course is right for you?
              </p>

              <p className="mt-0.5 text-[9px] text-slate-500">
                Get personalised guidance from our expert counsellors.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/courses"
              onClick={onClose}
              className="flex items-center gap-1.5 rounded-xl border border-[#DCE9F8] bg-white px-3.5 py-2.5 text-[9px] font-bold text-[#0263CC] transition hover:bg-[#F3F8FF]"
            >
              View All Courses
              <ArrowRight className="h-3 w-3" />
            </Link>

            <Link
              href="/counselling"
              onClick={onClose}
              className="group flex items-center gap-2 rounded-xl bg-[#0263CC] px-4 py-2.5 text-[9px] font-bold text-white shadow-[0_7px_20px_rgba(2,99,204,0.20)] transition-all hover:-translate-y-0.5 hover:bg-[#0759B8]"
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
   MOBILE COURSES MENU
========================================================= */

function MobileCoursesMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,50,100,0.10)]"
    >
      {/* Mobile Header */}

      <div className="border-b border-slate-100 bg-gradient-to-br from-[#F1F7FF] via-white to-[#EEFCFC] px-4 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0263CC] text-white shadow-[0_7px_18px_rgba(2,99,204,0.20)]">
            <BookOpen className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-xs font-extrabold text-[#0A1B44]">
                All Courses
              </p>

              <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-extrabold text-[#0263CC] shadow-sm">
                {COURSES.length}
              </span>
            </div>

            <p className="mt-0.5 text-[9px] text-slate-500">
              Explore every healthcare career path
            </p>
          </div>
        </div>
      </div>

      {/* Direct Courses Grid */}

      <div className="grid grid-cols-2 gap-2 bg-[#FAFCFF] p-3">
        {COURSES.map((course, index) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.18,
              delay: index * 0.015,
            }}
          >
            <CourseCard course={course} onClose={onClose} mobile />
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}

      <div className="border-t border-slate-100 bg-white p-3">
        <Link
          href="/courses"
          onClick={onClose}
          className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] text-xs font-bold text-white shadow-[0_8px_20px_rgba(2,99,204,0.18)]"
        >
          View All Courses
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/counselling"
          onClick={onClose}
          className="mt-2 flex min-h-10 items-center justify-center gap-1.5 text-[10px] font-bold text-[#0263CC]"
        >
          Need Help? Talk to a Counsellor
          <ChevronRight className="h-3.5 w-3.5" />
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