"use client";

import { motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =========================================================
   VALUES DATA
========================================================= */

const values = [
  {
    number: "01",
    title: "Honesty",
    description: "No false promises. Ever.",
    icon: ShieldCheck,
    position: "left",

    theme: {
      bg: "bg-[#082B4C]",
      border: "border-[#174C76]",
      iconBg: "bg-[#0E426D]",
      icon: "text-[#7DD3FC]",
      numberBg: "bg-[#0E426D]",
      number: "text-[#7DD3FC]",
      title: "text-white",
      description: "text-[#B8D4E8]",
      accent: "bg-[#38BDF8]",
      glow: "bg-[#38BDF8]/20",
    },
  },

  {
    number: "02",
    title: "Transparency",
    description: "Clear costs, clear risks, clear timelines.",
    icon: Eye,
    position: "right",

    theme: {
      bg: "bg-[#063B3E]",
      border: "border-[#11666A]",
      iconBg: "bg-[#0A5559]",
      icon: "text-[#67E8F9]",
      numberBg: "bg-[#0A5559]",
      number: "text-[#67E8F9]",
      title: "text-white",
      description: "text-[#B5E3E5]",
      accent: "bg-[#22D3EE]",
      glow: "bg-[#22D3EE]/20",
    },
  },

  {
    number: "03",
    title: "Student-first",
    description:
      "The right fit for you, not the easiest sale for us.",
    icon: Heart,
    position: "left",

    theme: {
      bg: "bg-[#48172D]",
      border: "border-[#75294A]",
      iconBg: "bg-[#63203E]",
      icon: "text-[#FDA4AF]",
      numberBg: "bg-[#63203E]",
      number: "text-[#FDA4AF]",
      title: "text-white",
      description: "text-[#E9B8C5]",
      accent: "bg-[#FB7185]",
      glow: "bg-[#FB7185]/20",
    },
  },

  {
    number: "04",
    title: "Parents as partners",
    description:
      "You're part of every important conversation.",
    icon: Users,
    position: "right",

    theme: {
      bg: "bg-[#29144D]",
      border: "border-[#4B287D]",
      iconBg: "bg-[#3A1E63]",
      icon: "text-[#C4B5FD]",
      numberBg: "bg-[#3A1E63]",
      number: "text-[#C4B5FD]",
      title: "text-white",
      description: "text-[#D0C5E8]",
      accent: "bg-[#A78BFA]",
      glow: "bg-[#A78BFA]/20",
    },
  },

  {
    number: "05",
    title: "Compliance",
    description:
      "NMC-recognised universities; we encourage you to verify regulations.",
    icon: Scale,
    position: "left",

    theme: {
      bg: "bg-[#49300A]",
      border: "border-[#735116]",
      iconBg: "bg-[#61410D]",
      icon: "text-[#FCD34D]",
      numberBg: "bg-[#61410D]",
      number: "text-[#FCD34D]",
      title: "text-white",
      description: "text-[#E8D5A4]",
      accent: "bg-[#FBBF24]",
      glow: "bg-[#FBBF24]/20",
    },
  },

  {
    number: "06",
    title: "Continuity",
    description:
      "We're with you through licensing and career, not just admission.",
    icon: Check,
    position: "right",

    theme: {
      bg: "bg-[#083A29]",
      border: "border-[#146044]",
      iconBg: "bg-[#0E4F39]",
      icon: "text-[#6EE7B7]",
      numberBg: "bg-[#0E4F39]",
      number: "text-[#6EE7B7]",
      title: "text-white",
      description: "text-[#B6DEC9]",
      accent: "bg-[#34D399]",
      glow: "bg-[#34D399]/20",
    },
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function OurValues() {
  return (
    <section
      id="our-values"
      className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#02A7BB]/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[350px] w-[350px] rounded-full bg-[#0263CC]/5 blur-[120px]" />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            HEADER
        ==================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-[760px] text-center"
        >
          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#0263CC]/30" />

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0263CC]">
              Our Values
            </span>

            <span className="h-px w-8 bg-[#0263CC]/30" />
          </div>

          {/* Heading */}

          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#09213D] sm:text-[48px] lg:text-[60px]">
            The principles behind
            <br />

            <span className="text-[#0263CC]">
              every decision we make.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            These aren't words on a wall. They're the standards we use when
            helping a student choose what comes next.
          </p>
        </motion.div>

        {/* ===================================================
            DESKTOP
        ==================================================== */}

        <div className="relative mx-auto mt-16 hidden min-h-[700px] max-w-[1160px] lg:mt-20 lg:block">

          {/* Center orbit */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer ring */}

            <div className="absolute inset-0 rounded-full border border-[#0263CC]/10" />

            {/* Dashed ring */}

            <div className="absolute inset-[35px] rounded-full border border-dashed border-[#02A7BB]/15" />

            {/* Inner ring */}

            <div className="absolute inset-[72px] rounded-full bg-[#F5FAFF]" />

            {/* Center */}

            <div className="absolute inset-[105px] rounded-full bg-white shadow-[0_20px_60px_rgba(2,99,204,0.10)]" />

            {/* Center content */}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#0263CC]/10 text-[#0263CC]">
                <ShieldCheck size={20} />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0263CC]">
                Our North Star
              </span>

              <p className="mt-2 max-w-[120px] text-[17px] font-semibold leading-5 tracking-[-0.02em] text-[#09213D]">
                Trust before transaction.
              </p>
            </div>
          </motion.div>

          {/* Outer orbit */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0263CC]/5"
          />

          {/* Cards */}

          {values.map((value, index) => (
            <DesktopValue
              key={value.number}
              {...value}
              index={index}
              theme={value.theme}
            />
          ))}
        </div>

        {/* ===================================================
            MOBILE / TABLET
        ==================================================== */}

        <div className="relative mt-12 lg:hidden">

          {/* Carousel header */}

          <div className="mb-5 flex items-end justify-between gap-4">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
                What guides us
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Swipe to explore our principles
              </p>
            </div>

            {/* Navigation */}

            <div className="flex shrink-0 items-center gap-2">

              <button
                type="button"
                className="values-prev flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0263CC] shadow-sm transition-all duration-200 hover:border-[#0263CC]/30 hover:bg-[#0263CC] hover:text-white active:scale-95"
                aria-label="Previous value"
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                className="values-next flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0263CC] shadow-sm transition-all duration-200 hover:border-[#0263CC]/30 hover:bg-[#0263CC] hover:text-white active:scale-95"
                aria-label="Next value"
              >
                <ChevronRight size={17} />
              </button>

            </div>
          </div>

          {/* Swiper */}

          <Swiper
            modules={[
              Navigation,
              Autoplay,
            ]}
            navigation={{
              prevEl: ".values-prev",
              nextEl: ".values-next",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={14}
            slidesPerView={1.08}
            grabCursor
            observer
            observeParents
            watchSlidesProgress
            className="!overflow-visible"
            breakpoints={{
              480: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },

              640: {
                slidesPerView: 1.7,
                spaceBetween: 18,
              },

              768: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
            }}
          >
            {values.map((value, index) => (
              <SwiperSlide
                key={value.number}
                className="!h-auto"
              >
                <MobileValue
                  {...value}
                  index={index}
                  theme={value.theme}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swipe indicator */}

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#0263CC]/20" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-300">
              Swipe to explore
            </span>

            <span className="h-px w-6 bg-[#0263CC]/20" />
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

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
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-14 max-w-[760px] text-center sm:mt-16"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-[#02A7BB]" />

          <p className="text-[14px] font-medium leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
            When these six principles come together, guidance becomes more
            than counselling — it becomes a relationship built to last.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   DESKTOP VALUE CARD
========================================================= */

function DesktopValue({
  number,
  title,
  description,
  icon: Icon,
  position,
  index,
  theme,
}) {
  const positions = {
    0: "left-[0%] top-[4%]",
    1: "right-[0%] top-[4%]",
    2: "left-[0%] bottom-[8%]",
    3: "right-[0%] bottom-[8%]",
    4: "left-[17%] top-[42%]",
    5: "right-[17%] top-[42%]",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: position === "left" ? -25 : 25,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className={`absolute ${positions[index]} w-[285px]`}
    >
      {/* Connector */}

      <div
        className={`absolute top-[38px] h-px w-[80px] bg-gradient-to-r ${
          position === "left"
            ? "right-[-80px] from-[#0263CC]/30 to-transparent"
            : "left-[-80px] from-transparent to-[#0263CC]/30"
        }`}
      />

      {/* Card */}

      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-[24px]
          border
          ${theme.border}
          ${theme.bg}
          p-5
          shadow-[0_18px_45px_rgba(0,0,0,0.16)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_25px_55px_rgba(0,0,0,0.22)]
        `}
      >
        {/* Glow */}

        <div
          className={`
            pointer-events-none
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            ${theme.glow}
            blur-3xl
            opacity-70
            transition-all
            duration-500
            group-hover:scale-125
          `}
        />

        {/* Secondary glow */}

        <div
          className={`
            pointer-events-none
            absolute
            -bottom-10
            -left-10
            h-20
            w-20
            rounded-full
            ${theme.glow}
            blur-2xl
            opacity-30
          `}
        />

        <div className="relative z-10 flex gap-4">

          {/* Icon */}

          <div
            className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${theme.iconBg}
              ${theme.icon}
              shadow-[0_8px_18px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              group-hover:scale-105
            `}
          >
            <Icon size={18} />
          </div>

          <div className="min-w-0">

            {/* Number */}

            <div className="flex items-center gap-2">

              <span
                className={`
                  rounded-full
                  ${theme.numberBg}
                  border
                  ${theme.border}
                  px-2
                  py-0.5
                  text-[8px]
                  font-bold
                  tracking-[0.18em]
                  ${theme.number}
                `}
              >
                {number}
              </span>

              <span
                className={`
                  h-px
                  w-5
                  ${theme.accent}
                  opacity-40
                `}
              />
            </div>

            {/* Title */}

            <h3
              className={`
                mt-2
                text-[16px]
                font-semibold
                leading-snug
                ${theme.title}
              `}
            >
              {title}
            </h3>

            {/* Description */}

            <p
              className={`
                mt-1.5
                text-xs
                leading-5
                ${theme.description}
              `}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Bottom */}

        <div className="relative z-10 mt-5 flex items-center gap-2">

          <span
            className={`
              h-[2px]
              w-8
              rounded-full
              ${theme.accent}
            `}
          />

          <span className="h-px flex-1 bg-white/10" />

          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              ${theme.accent}
            `}
          />

        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOBILE VALUE CARD
========================================================= */

function MobileValue({
  number,
  title,
  description,
  icon: Icon,
  index,
  theme,
}) {
  return (
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
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="h-full"
    >
      <div
        className={`
          group
          relative
          min-h-[235px]
          h-full
          overflow-hidden
          rounded-[26px]
          border
          ${theme.border}
          ${theme.bg}
          p-5
          shadow-[0_16px_40px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_22px_50px_rgba(0,0,0,0.25)]
          active:scale-[0.985]
        `}
      >
        {/* Large glow */}

        <div
          className={`
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            ${theme.glow}
            blur-3xl
            transition-all
            duration-500
            group-hover:scale-125
          `}
        />

        {/* Bottom glow */}

        <div
          className={`
            pointer-events-none
            absolute
            -bottom-16
            -left-16
            h-36
            w-36
            rounded-full
            ${theme.glow}
            blur-3xl
            opacity-40
          `}
        />

        <div className="relative z-10">

          {/* Top */}

          <div className="flex items-start justify-between gap-4">

            {/* Icon */}

            <div
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-[15px]
                ${theme.iconBg}
                ${theme.icon}
                shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                transition-all
                duration-300
                group-hover:scale-105
              `}
            >
              <Icon size={20} />
            </div>

            {/* Number */}

            <span
              className={`
                rounded-full
                ${theme.numberBg}
                border
                ${theme.border}
                px-3
                py-1.5
                text-[9px]
                font-bold
                tracking-[0.18em]
                ${theme.number}
              `}
            >
              {number}
            </span>
          </div>

          {/* Content */}

          <div className="mt-6">

            <h3
              className={`
                text-[20px]
                font-semibold
                leading-tight
                tracking-[-0.025em]
                ${theme.title}
              `}
            >
              {title}
            </h3>

            <p
              className={`
                mt-2
                max-w-[290px]
                text-[13px]
                leading-5
                ${theme.description}
              `}
            >
              {description}
            </p>
          </div>

          {/* Bottom accent */}

          <div className="mt-6 flex items-center gap-2">

            <span
              className={`
                h-[2px]
                w-10
                rounded-full
                ${theme.accent}
              `}
            />

            <span className="h-px flex-1 bg-white/10" />

            <Check
              size={13}
              className={`${theme.icon} opacity-60`}
            />

          </div>
        </div>
      </div>
    </motion.div>
  );
}