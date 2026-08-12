"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Globe2,
  HeartPulse,
  Stethoscope,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const COURSE_GROUPS = [
  {
    id: "mbbs",
    title: "MBBS Abroad",
    description: "Study medicine at globally recognized universities",
    icon: Globe2,
    courses: [
      {
        name: "MBBS in Russia",
        slug: "mbbs-in-russia",
        flag: "🇷🇺",
        popular: true,
      },
      {
        name: "MBBS in Kazakhstan",
        slug: "mbbs-in-kazakhstan",
        flag: "🇰🇿",
        popular: true,
      },
      {
        name: "MBBS in Georgia",
        slug: "mbbs-in-georgia",
        flag: "🇬🇪",
      },
      {
        name: "MBBS in Uzbekistan",
        slug: "mbbs-in-uzbekistan",
        flag: "🇺🇿",
      },
      {
        name: "MBBS in Kyrgyzstan",
        slug: "mbbs-in-kyrgyzstan",
        flag: "🇰🇬",
      },
      {
        name: "MBBS in Philippines",
        slug: "mbbs-in-philippines",
        flag: "🇵🇭",
      },
    ],
  },

  {
    id: "medical",
    title: "Medical Programs",
    description: "Build your career across healthcare disciplines",
    icon: HeartPulse,
    courses: [
      {
        name: "Dentistry",
        slug: "dentistry",
        icon: "🦷",
      },
      {
        name: "Nursing",
        slug: "nursing",
        icon: "👩‍⚕️",
      },
      {
        name: "Pharmacy",
        slug: "pharmacy",
        icon: "💊",
      },
      {
        name: "Physiotherapy",
        slug: "physiotherapy",
        icon: "🩺",
      },
      {
        name: "Medical Laboratory",
        slug: "medical-laboratory",
        icon: "🔬",
      },
    ],
  },

  {
    id: "exams",
    title: "Medical Exams",
    description: "Prepare for licensing and medical exams",
    icon: GraduationCap,
    courses: [
      {
        name: "FMGE / NExT",
        slug: "fmge-next",
        popular: true,
      },
      {
        name: "USMLE",
        slug: "usmle",
      },
      {
        name: "PLAB",
        slug: "plab",
      },
      {
        name: "NCLEX",
        slug: "nclex",
      },
      {
        name: "MRCP",
        slug: "mrcp",
      },
      {
        name: "AMC",
        slug: "amc",
      },
    ],
  },
];

function DesktopMegaMenu({ onClose }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
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
        duration: 0.2,
        ease: "easeOut",
      }}
      className="absolute left-7/2 top-[calc(100%+12px)] z-[100] w-[min(1100px,calc(100vw-32px))] -translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_25px_80px_rgba(15,50,100,0.16)]">

        {/* Decorative background */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0263CC]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#02A7BB]/10 blur-3xl" />

        {/* Header */}

        <div className="relative flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF5FF] text-[#0263CC]">
                <BookOpen className="h-4 w-4" />
              </div>

              <h3 className="text-sm font-extrabold text-[#0A1B44]">
                Explore Courses
              </h3>
            </div>

            <p className="mt-1 pl-10 text-xs text-slate-500">
              Find the right path for your medical career
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close courses menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Course columns */}

        <div className="relative grid grid-cols-3 divide-x divide-slate-100 px-2 py-3">
          {COURSE_GROUPS.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.id}
                className="min-w-0 px-4 py-3"
              >
                {/* Category */}

                <div className="mb-3 flex items-start gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0263CC]">
                    <GroupIcon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs font-extrabold text-[#0A1B44]">
                      {group.title}
                    </h4>

                    <p className="mt-0.5 text-[9px] leading-4 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Course links */}

                <div className="space-y-0.5">
                  {group.courses.map((course, index) => (
                    <motion.div
                      key={course.slug}
                      initial={{
                        opacity: 0,
                        x: -5,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        delay:
                          groupIndex * 0.03 +
                          index * 0.025,
                      }}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-2 rounded-xl px-2.5 py-2 transition-all duration-200 hover:bg-[#F3F8FF]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-sm transition-transform duration-200 group-hover:scale-105">
                          {course.flag ||
                            course.icon || (
                              <Stethoscope className="h-3.5 w-3.5 text-[#0263CC]" />
                            )}
                        </span>

                        <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-slate-600 transition-colors group-hover:text-[#0263CC]">
                          {course.name}
                        </span>

                        {course.popular && (
                          <span className="hidden rounded-full bg-[#FFF5E6] px-1.5 py-0.5 text-[7px] font-bold text-[#D97706] xl:inline-flex">
                            Popular
                          </span>
                        )}

                        <ChevronRight className="h-3 w-3 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#0263CC]" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expert CTA */}

        <div className="relative border-t border-slate-100 bg-[#FAFCFF] px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#02A7BB]">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#0A1B44]">
                  Not sure which course is right for you?
                </p>

                <p className="mt-0.5 truncate text-[9px] text-slate-500">
                  Get personalised guidance from our expert counsellors.
                </p>
              </div>
            </div>

            <Link
              href="/counselling"
              onClick={onClose}
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#0263CC] px-4 py-2.5 text-[10px] font-bold text-white shadow-[0_6px_18px_rgba(2,99,204,.2)] transition-all hover:-translate-y-0.5 hover:bg-[#0759B8]"
            >
              Talk to an Expert

              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* View all */}

        <div className="border-t border-slate-100 px-6 py-3">
          <Link
            href="/courses"
            onClick={onClose}
            className="group flex items-center justify-center gap-2 text-[10px] font-extrabold text-[#0263CC]"
          >
            View All Courses

            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileCoursesMenu({ onClose }) {
  const [openGroup, setOpenGroup] = useState("mbbs");

  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-[#F8FBFF] px-4 py-4">
        <p className="text-xs font-extrabold text-[#0A1B44]">
          Explore Courses
        </p>

        <p className="mt-1 text-[10px] text-slate-500">
          Choose your medical career path
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {COURSE_GROUPS.map((group) => {
          const GroupIcon = group.icon;
          const isOpen = openGroup === group.id;

          return (
            <div key={group.id}>
              <button
                type="button"
                onClick={() =>
                  setOpenGroup(
                    isOpen ? null : group.id
                  )
                }
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
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
                    {group.courses.length} courses
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
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-white"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm shadow-sm">
                            {course.flag ||
                              course.icon || (
                                <Stethoscope className="h-3.5 w-3.5 text-[#0263CC]" />
                              )}
                          </span>

                          <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-slate-600">
                            {course.name}
                          </span>

                          {course.popular && (
                            <span className="rounded-full bg-[#FFF5E6] px-1.5 py-0.5 text-[7px] font-bold text-[#D97706]">
                              Popular
                            </span>
                          )}

                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

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
    </div>
  );
}

export default function CoursesMegaMenu({
  isOpen,
  onClose,
  mobile = false,
}) {
  if (mobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <MobileCoursesMenu onClose={onClose} />
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <DesktopMegaMenu onClose={onClose} />
      )}
    </AnimatePresence>
  );
}