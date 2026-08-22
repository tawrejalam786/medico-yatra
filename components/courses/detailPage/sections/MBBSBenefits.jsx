"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  ShieldCheck,
  UsersRound,
  Target,
  PlaneTakeoff,
  BookCopy,
  ChevronRight,
  Headphones,
  MessageCircle,
  BadgeCheck,
  Globe,
  HeartPulse,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

const ICONS = {
  ArrowUpRight,
  ChevronRight,
  GraduationCap,
  Headphones,
  MessageCircle,
  Target,
  PlaneTakeoff,
  BookCopy,
  Building2,
  ShieldCheck,
  BadgeCheck,
  UsersRound,
  Globe,
  HeartPulse,
  TrendingUp,
  BriefcaseBusiness,
};

// ============================================================
// FALLBACK ICON
// ============================================================

function CircleFallback({ className = "h-4 w-4" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-current ${className}`}
    />
  );
}

function DynamicIcon({
  name,
  className = "h-4 w-4",
  ...props
}) {
  const Icon = ICONS[name] || CircleFallback;

  return <Icon className={className} {...props} />;
}

export default function MBBSBenefits({ data }) {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-12 lg:py-8">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft radial glow */}
        <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[#0263CC]/5 blur-3xl" />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] bottom-0 h-52 w-52 rounded-full bg-[#02A7BB]/5 blur-3xl"
        />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated SVG route */}
        <svg
          className="absolute left-[18%] top-1/2 hidden h-24 w-64 -translate-y-1/2 text-[#0263CC]/10 lg:block"
          viewBox="0 0 260 100"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M4 72C48 72 43 24 91 30C132 36 119 70 158 65C198 60 197 24 256 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="91"
            cy="30"
            r="3"
            fill="currentColor"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION INTRO
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-7 text-center sm:mb-8 lg:mb-9"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F3F8FF] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC] sm:text-[11px]">
              {data.eyebrow.text}
            </span>
          </div>

          <h2 className="text-[24px] font-extrabold tracking-[-0.8px] text-[#071A49] sm:text-[30px] lg:text-[34px]">
            {data.title.prefix}{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              {data.title.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            {data.description}
          </p>
        </motion.div>

        {/* =================================================
            BENEFITS WRAPPER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#0263CC]/10
            bg-white
            shadow-[0_12px_45px_rgba(18,67,125,0.08)]
          "
        >
          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0263CC] to-transparent opacity-70" />

          <div
            className="
              grid
              grid-cols-1
              divide-y divide-slate-100
              sm:grid-cols-2
              sm:divide-x
              sm:divide-y-0
              lg:grid-cols-4
            "
          >
            {data.items.map((benefit, index) => {
              const Icon = benefit.icon;

              // 4 different hover colors
              const hoverColorClass =
                index === 0
                  ? "sm:hover:bg-gradient-to-br sm:hover:from-[#0263CC] sm:hover:to-[#178BE5]"
                  : index === 1
                  ? "sm:hover:bg-gradient-to-br sm:hover:from-[#009E9A] sm:hover:to-[#02C7B5]"
                  : index === 2
                  ? "sm:hover:bg-gradient-to-br sm:hover:from-[#5B4FE9] sm:hover:to-[#7C3AED]"
                  : "sm:hover:bg-gradient-to-br sm:hover:from-[#F97316] sm:hover:to-[#EF4444]";

              return (
                <motion.div
                  key={benefit.number}
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
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className={`
                    group
                    relative
                    min-w-0
                    p-5
                    bg-white
                    transition-all
                    duration-300
                    ${hoverColorClass}

                    sm:p-6

                    lg:min-h-[185px]
                    lg:p-6
                    xl:p-7
                  `}
                >
                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-5
                      top-4
                      text-[10px]
                      font-bold
                      tracking-wider
                      text-slate-300
                      transition-colors
                      duration-300

                      group-hover:text-white/60
                    "
                  >
                    {benefit.number}
                  </span>

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        y: -3,
                        rotate: 2,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#0263CC]/10
                        bg-gradient-to-br
                        from-[#EEF6FF]
                        to-[#F7FBFF]
                        text-[#0263CC]
                        shadow-sm
                        transition-all
                        duration-300

                        group-hover:border-[#0263CC]/20
                        group-hover:bg-gradient-to-br
                        group-hover:from-[#EEF6FF]
                        group-hover:to-[#F7FBFF]
                        group-hover:text-[#0263CC]
                        group-hover:shadow-[0_8px_20px_rgba(2,99,204,0.12)]

                        sm:h-13
                        sm:w-13
                      "
                    >
                      <DynamicIcon
                        name={benefit.icon}
                        className="h-5 w-5 sm:h-5.5 sm:w-5.5"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="min-w-0 pr-3">

                      {/* Heading */}
                      <h3
                        className="
                          text-sm
                          font-extrabold
                          leading-5
                          text-[#071A49]
                          transition-colors
                          duration-300

                          sm:text-[15px]

                          group-hover:text-white
                        "
                      >
                        {benefit.title}

                        <span
                          className="
                            block
                            text-[#0263CC]
                            transition-colors
                            duration-300

                            group-hover:text-white
                          "
                        >
                          {benefit.highlight}
                        </span>
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-2
                          max-w-[250px]
                          text-[11px]
                          leading-[1.65]
                          text-slate-500
                          transition-colors
                          duration-300

                          sm:text-xs

                          group-hover:text-white/85
                        "
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="
                      absolute
                      bottom-5
                      right-5
                      hidden
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0263CC]
                      text-white
                      opacity-0
                      shadow-lg
                      transition-all
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:opacity-100

                      lg:flex
                    "
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =================================================
            TRUST LINE
        ================================================== */}

        {data?.trustLine?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center"
          >
            {data.trustLine.map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 sm:text-xs"
              >
                <DynamicIcon
                  name={item.icon}
                  className="h-3.5 w-3.5 text-[#0263CC]"
                />

                <span>{item.text}</span>

                {/* Divider */}
                {index !== data.trustLine.length - 1 && (
                  <span className="ml-3 hidden h-3 w-px bg-slate-200 sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}