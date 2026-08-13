"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Info,
  Landmark,
  Medal,
  Stethoscope,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";
 import Link from "next/link";

const routeA = {
  title: "ROUTE A",
  subtitle: "MBBS IN INDIA",
  label: "(Govt. Seat)",
  theme: "blue",

  steps: [
    {
      icon: BookOpen,
      title: "Class 12",
      subtitle: "(PCB)",
    },
    {
      icon: Stethoscope,
      title: "NEET",
      subtitle: "Preparation",
    },
    {
      icon: BookOpen,
      title: "NEET",
      subtitle: "Exam",
    },
    {
      icon: GraduationCap,
      title: "MBBS",
      subtitle: "(5.5 Years)",
    },
    {
      icon: UserRound,
      title: "Internship",
      subtitle: "(1 Year)",
    },
    {
      icon: Medal,
      title: "FMGE / NExT",
      subtitle: "Exam",
    },
    {
      icon: Trophy,
      title: "Licensed",
      subtitle: "Doctor",
    },
  ],

  metrics: [
    {
      icon: Clock3,
      label: "Total Time",
      value: "~ 11 to 12 Years",
    },
    {
      icon: ArrowRight,
      label: "Opportunity Cost",
      value: "High (Drop years + Delayed start)",
    },
    {
      icon: Landmark,
      label: "Indicative Cost",
      value: "₹60L - ₹1 Cr+ (Govt. Seat)",
    },
    {
      icon: Users,
      label: "Seats",
      value: "Highly Limited",
    },
    {
      icon: Trophy,
      label: "Competition",
      value: "Very High",
    },
  ],
};

const routeB = {
  title: "ROUTE B",
  subtitle: "MBBS ABROAD",
  label: "+ FMGE / NExT",
  theme: "green",

  steps: [
    {
      icon: BookOpen,
      title: "Class 12",
      subtitle: "(PCB)",
    },
    {
      icon: GraduationCap,
      title: "MBBS Abroad",
      subtitle: "(5 - 6 Years)",
    },
    {
      icon: UserRound,
      title: "Internship*",
      subtitle: "(If applicable)",
    },
    {
      icon: Medal,
      title: "FMGE / NExT",
      subtitle: "Exam",
    },
    {
      icon: Trophy,
      title: "Licensed",
      subtitle: "Doctor",
    },
  ],

  metrics: [
    {
      icon: Clock3,
      label: "Total Time",
      value: "~ 6.5 to 8 Years",
    },
    {
      icon: ArrowRight,
      label: "Opportunity Cost",
      value: "Lower (Earlier start, Earlier earning)",
    },
    {
      icon: Landmark,
      label: "Indicative Cost",
      value: "₹25L - ₹50L (Approx.)",
    },
    {
      icon: Users,
      label: "Seats",
      value: "More Options",
    },
    {
      icon: Trophy,
      label: "Competition",
      value: "Moderate",
    },
  ],
};

function JourneyStep({ step, index, theme, total }) {
  const Icon = step.icon;

  const isBlue = theme === "blue";

  return (
    <div className="relative flex min-w-0 flex-1 flex-col items-center text-center">
      {/* Connector */}
      {index !== total - 1 && (
        <div
          className={`absolute left-[calc(50%+20px)] right-[calc(-50%+20px)] top-[20px] hidden h-px sm:block ${
            isBlue
              ? "bg-gradient-to-r from-[#0263CC]/50 to-[#0263CC]/15"
              : "bg-gradient-to-r from-[#16A05D]/50 to-[#16A05D]/15"
          }`}
        />
      )}

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.35,
          delay: index * 0.06,
        }}
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm ${
          isBlue
            ? "border-[#0263CC]/60 text-[#0263CC]"
            : "border-[#16A05D]/60 text-[#16834D]"
        }`}
      >
        <Icon className="h-[17px] w-[17px]" />
      </motion.div>

      {/* Text */}
      <div className="mt-3 px-0.5">
        <p className="text-[10px] font-bold leading-tight text-[#0B1D45] sm:text-[11px]">
          {step.title}
        </p>

        <p className="mt-0.5 text-[9px] leading-tight text-slate-500 sm:text-[10px]">
          {step.subtitle}
        </p>
      </div>
    </div>
  );
}

function MetricCard({ item, theme, index }) {
  const Icon = item.icon;

  const isBlue = theme === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      className={`group rounded-xl border bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-3.5 ${
        isBlue
          ? "border-[#0263CC]/10 hover:border-[#0263CC]/25"
          : "border-[#16A05D]/10 hover:border-[#16A05D]/25"
      }`}
    >
      <div
        className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full ${
          isBlue
            ? "bg-[#EAF3FF] text-[#0263CC]"
            : "bg-[#EAF9F0] text-[#16834D]"
        }`}
      >
        <Icon className="h-3.5 w-3.5" />
      </div>

      <p
        className={`text-[9px] font-bold uppercase tracking-wide ${
          isBlue ? "text-[#0263CC]" : "text-[#16834D]"
        }`}
      >
        {item.label}
      </p>

      <p className="mt-1 text-[10px] font-semibold leading-[1.35] text-slate-700 sm:text-[11px]">
        {item.value}
      </p>
    </motion.div>
  );
}

function RouteCard({ route }) {
  const isBlue = route.theme === "blue";

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-[22px] border bg-white/85 p-4 shadow-[0_12px_40px_rgba(15,54,100,0.07)] backdrop-blur-xl sm:p-5 lg:p-6 ${
        isBlue
          ? "border-[#0263CC]/20"
          : "border-[#16A05D]/20"
      }`}
    >
      {/* Card glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl ${
          isBlue ? "bg-[#0263CC]/10" : "bg-[#16A05D]/10"
        }`}
      />

      {/* Route heading */}
      <div className="relative z-10 text-center">
        <div
          className={`mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold ${
            isBlue
              ? "bg-[#EAF3FF] text-[#0263CC]"
              : "bg-[#EAF9F0] text-[#16834D]"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isBlue ? "bg-[#0263CC]" : "bg-[#16A05D]"
            }`}
          />

          {route.title}
        </div>

        <h3 className="mt-3 text-[18px] font-extrabold tracking-tight text-[#0B1D45] sm:text-xl">
          <span className={isBlue ? "text-[#0263CC]" : "text-[#16834D]"}>
            {route.subtitle}
          </span>{" "}
          <span className="text-[#0B1D45]">{route.label}</span>
        </h3>
      </div>

      {/* Journey */}
      <div className="relative z-10 mt-6">
        {/* Desktop timeline */}
        <div className="hidden items-start sm:flex">
          {route.steps.map((step, index) => (
            <JourneyStep
              key={`${step.title}-${index}`}
              step={step}
              index={index}
              theme={route.theme}
              total={route.steps.length}
            />
          ))}
        </div>

        {/* Mobile timeline */}
        <div
          className={`grid ${
            route.steps.length > 5 ? "grid-cols-4" : "grid-cols-3"
          } gap-x-2 gap-y-5 sm:hidden`}
        >
          {route.steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={`${step.title}-mobile-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="flex min-w-0 flex-col items-center text-center"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border bg-white ${
                    isBlue
                      ? "border-[#0263CC]/40 text-[#0263CC]"
                      : "border-[#16A05D]/40 text-[#16834D]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <p className="mt-2 max-w-[72px] text-[9px] font-bold leading-tight text-[#0B1D45]">
                  {step.title}
                </p>

                <p className="mt-0.5 max-w-[72px] text-[8px] leading-tight text-slate-500">
                  {step.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Metrics */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {route.metrics.map((item, index) => (
          <MetricCard
            key={item.label}
            item={item}
            theme={route.theme}
            index={index}
          />
        ))}
      </div>
    </motion.article>
  );
}

export default function MBBSJourneyComparison() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-8">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(2,99,204,0.06),transparent_28%),radial-gradient(circle_at_85%_60%,rgba(22,160,93,0.06),transparent_28%)]" />

        {/* Animated SVG */}
        <svg
          className="absolute left-1/2 top-0 h-full w-full min-w-[700px] -translate-x-1/2 opacity-40"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M-100 470C170 350 250 180 530 250C790 315 880 570 1120 420C1250 340 1330 210 1540 150"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="5 9"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.25 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          <motion.path
            d="M-100 250C170 390 320 500 570 430C820 360 930 120 1170 210C1300 260 1390 350 1540 330"
            stroke="#16A05D"
            strokeWidth="1"
            strokeDasharray="4 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.18 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.8,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="530"
            cy="250"
            r="5"
            fill="#0263CC"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="1120"
            cy="420"
            r="5"
            fill="#16A05D"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Soft floating blobs */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#0263CC]/5 blur-3xl"
        />

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
          className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-[#16A05D]/5 blur-3xl"
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F3F8FF] px-3 py-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC]">
              Compare Your Path
            </span>
          </div>

          <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.8px] text-[#0B1D45] sm:text-[32px] lg:text-[38px]">
            Two Students, Two Journeys —
            <span className="block">
              Understand the{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                Real Choice
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-4xl text-[12px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
            The decision to study MBBS isn&apos;t only about fees. It&apos;s
            about time, opportunity cost, and how clearly your path to becoming
            a licensed doctor is mapped.
          </p>

          <p className="mx-auto mt-1 max-w-3xl text-[11px] leading-5 text-slate-400 sm:text-xs">
            Below are two illustrative journeys to help you compare.
          </p>
        </motion.div>

        {/* =================================================
            ROUTES
        ================================================== */}

        <div className="relative mt-8 lg:mt-10">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <RouteCard route={routeA} />
            <RouteCard route={routeB} />
          </div>

<div>
    {/* =====================================================
    ROUTE B — HONEST FRAMING
===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, delay: 0.15 }}
  className="
    mt-5
    rounded-2xl
    border border-emerald-200/80
    bg-emerald-50/70
    px-4 py-4
    sm:px-5 sm:py-4
    md:px-6
  "
>
  <div className="flex items-start gap-3">
    
    {/* Info Icon */}
    <div
      className="
        mt-0.5
        flex
        h-8 w-8
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-white
        text-emerald-600
        shadow-sm
        ring-1 ring-emerald-200
      "
    >
      <Info className="h-4 w-4" />
    </div>

    {/* Content */}
    <div className="min-w-0">
      <p
        className="
          text-[11px]
          font-semibold
          leading-[1.65]
          text-emerald-950
          sm:text-xs
          md:text-[13px]
        "
      >
        Some students who qualify for an overseas admission may begin
        their medical education earlier than they would after multiple
        NEET attempts — potentially saving waiting time and preparation
        costs.
      </p>

      <p
        className="
          mt-2
          text-[10px]
          leading-[1.65]
          text-emerald-800/80
          sm:text-[11px]
          md:text-xs
        "
      >
        This is an example scenario, not a guarantee. FMGE / NExT
        (or the relevant licensing exam) remains essential to practise
        in India, and a university must be on the NMC-approved list
        at the time of enrolment and at the time of your exam.
      </p>
    </div>
  </div>
</motion.div>


{/* =====================================================
    ROUTE B CTA
===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.25 }}
  className="mt-4 flex justify-center"
>
  <Link
    href="/countries"
    className="
      group
      inline-flex
      min-h-11
      w-full
      items-center
      justify-center
      gap-2
      rounded-xl
      bg-[#0263CC]
      px-5
      text-xs
      font-bold
      text-white
      shadow-[0_10px_25px_rgba(2,99,204,0.18)]
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-[#0759B8]
      sm:w-auto
      sm:px-6
    "
  >
    See Which Country Fits Your Goals

    <ArrowRight
      className="
        h-4 w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>
</motion.div>
</div>

          {/* VS badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.25,
            }}
            className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#0263CC] to-[#034DA0] text-sm font-black text-white shadow-[0_12px_35px_rgba(2,99,204,0.28)]">
              VS
            </div>
          </motion.div>

          {/* Mobile VS */}
          <div className="relative z-20 -my-3 flex justify-center lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#0263CC] to-[#034DA0] text-[11px] font-black text-white shadow-lg">
              VS
            </div>
          </div>
        </div>

        {/* =================================================
            DISCLAIMER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 flex max-w-[1100px] items-start gap-2.5 rounded-xl border border-[#E8D29B] bg-[#FFF9E8] px-4 py-3 text-center sm:items-center sm:justify-center"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#A97900] sm:mt-0" />

          <p className="text-[10px] font-medium leading-4 text-[#745A12] sm:text-[11px] sm:leading-5">
            <span className="font-bold">Note:</span> All timelines &amp;
            costs are illustrative examples. Verify current NMC regulations,
            university recognition, and licensing requirements before making
            any decision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}