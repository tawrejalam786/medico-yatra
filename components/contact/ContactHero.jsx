"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Globe2,
} from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main blue glow */}
        <div
          className="
            absolute
            -left-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#4DA5EC]/20
            blur-[100px]
            sm:h-[520px]
            sm:w-[520px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-[-180px]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#02A7BB]/10
            blur-[110px]
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        {/* Bottom soft blue */}
        <div
          className="
            absolute
            bottom-[-250px]
            left-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0263CC]/8
            blur-[100px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* =========================================================
          FLIGHT PATH / DECORATIVE LINE
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[15%]
          hidden
          lg:block
        "
      >
        <svg
          width="500"
          height="300"
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <motion.path
            d="M30 240 C120 50, 270 40, 470 115"
            stroke="#0263CC"
            strokeWidth="1.5"
            strokeDasharray="7 9"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.circle
            cx="30"
            cy="240"
            r="5"
            fill="#0263CC"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          />

          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <circle
              cx="470"
              cy="115"
              r="18"
              fill="#0263CC"
              fillOpacity="0.07"
            />
            <circle
              cx="470"
              cy="115"
              r="10"
              fill="white"
              stroke="#0263CC"
              strokeOpacity="0.18"
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          lg:px-8
          lg:pb-24
          lg:pt-16
          xl:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2"
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0263CC]/10
                  text-[#0263CC]
                "
              >
                <MessageCircle size={16} strokeWidth={2.3} />
              </span>

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0263CC]
                  sm:text-sm
                "
              >
               MEDICAL EDUCATION ABROAD
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                max-w-3xl
                text-[40px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#092B4C]
                sm:text-[52px]
                md:text-[60px]
                lg:text-[58px]
                xl:text-[68px]
              "
            >
              Let's talk —{" "}
              <span className="relative inline-block text-[#0263CC]">
                honestly
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[3px]
                    w-full
                    origin-left
                    rounded-full
                    bg-[#4DA5EC]
                    sm:-bottom-2
                  "
                />
              </span>{" "}
              about your healthcare career.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="
                mt-6
                max-w-2xl
                text-[16px]
                leading-7
                text-slate-600
                sm:mt-7
                sm:text-[18px]
                sm:leading-8
              "
            >
             Get clear answers on eligibility, study options, costs and what comes after MBBS — before you decide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              {/* Primary CTA */}
              <a
                href="#contact-form"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#0263CC]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(2,99,204,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0759AD]
                  hover:shadow-[0_18px_38px_rgba(2,99,204,0.28)]
                  sm:px-7
                  sm:text-[15px]
                "
              >
                Book Free Counselling

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={16} />
                </span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919897444550"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  px-6
                  text-sm
                  font-bold
                  text-[#092B4C]
                  shadow-[0_8px_25px_rgba(15,23,42,0.06)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0263CC]/20
                  hover:bg-white
                  hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)]
                  sm:px-7
                  sm:text-[15px]
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#02A7BB]/10
                    text-[#02A7BB]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <MessageCircle size={17} />
                </span>

                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                text-xs
                font-medium
                text-slate-500
                sm:text-sm
              "
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0263CC]/8 text-[#0263CC]">
                  <Check size={12} strokeWidth={3} />
                </span>
               Personalised Guidance
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0263CC]/8 text-[#0263CC]">
                  <Check size={12} strokeWidth={3} />
                </span>
                Clear Options
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0263CC]/8 text-[#0263CC]">
                  <Check size={12} strokeWidth={3} />
                </span>
                Honest Advice
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}
         <motion.div
  initial={{ opacity: 0, scale: 0.96, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="
    relative
    mx-auto
    w-full
    max-w-[530px]
    lg:ml-auto
    lg:mt-8
  "
>
  {/* Decorative glow */}
  <div
    className="
      absolute
      -inset-5
      rounded-[38px]
      bg-gradient-to-br
      from-[#0263CC]/10
      via-[#4DA5EC]/10
      to-[#02A7BB]/10
      blur-2xl
    "
  />

  {/* Main visual card */}
  <div
    className="
      relative
      aspect-[4/4.25]
      rounded-[30px]
      border
      border-white/80
      bg-gradient-to-br
      from-[#EAF5FF]
      via-[#F7FBFF]
      to-[#E9FAFC]
      shadow-[0_30px_80px_rgba(2,63,120,0.15)]
      sm:rounded-[38px]
    "
  >
    {/* Image */}
    <img
      src="/images/contact/contact-hero2.png"
      alt="Medico Yatra counsellor helping a student"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center
      "
    />

    {/* Image overlay */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#062C4F]/70
        via-[#062C4F]/5
        to-transparent
      "
    />

    {/* ========================================= */}
    {/* Floating Capsule 1 */}
    {/* ========================================= */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-4
        top-5
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/70
        bg-white/90
        px-3
        py-2
        shadow-lg
        backdrop-blur-xl
        sm:-left-32
        sm:top-7
        sm:px-4
        sm:z-50
        z-50
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#0263CC]/10
          text-[#0263CC]
        "
      >
        <CheckCircle2 size={14} />
      </span>

      <span
        className="
          text-[10px]
          font-bold
          text-[#092B4C]
          sm:text-sm
        "
      >
        Know Where You Qualify
      </span>
    </motion.div>

    {/* ========================================= */}
    {/* Floating Capsule 2 */}
    {/* ========================================= */}
    <motion.div
      animate={{ y: [0, 7, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4,
      }}
      className="
        absolute
        right-4
        top-[18%]
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/70
        bg-white/90
        px-3
        py-2
        shadow-xl
        backdrop-blur-xl
        sm:-right-16
        sm:px-4
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#02A7BB]/10
          text-[#02A7BB]
        "
      >
        <Globe2 size={14} />
      </span>

      <span
        className="
          text-[11px]
          font-bold
          text-[#092B4C]
          sm:text-sm
        "
      >
        Countries, Fees &amp; Universities
      </span>
    </motion.div>

    {/* ========================================= */}
    {/* Floating Capsule 3 */}
    {/* ========================================= */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8,
      }}
      className="
        absolute
        bottom-[31%]
        left-4
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/70
        bg-white/90
        px-3
        py-2
        shadow-xl
        backdrop-blur-xl
        sm:left-6
        sm:px-4
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#0263CC]/10
          text-[#0263CC]
        "
      >
        <ArrowRight size={14} />
      </span>

      <span
        className="
          text-[11px]
          font-bold
          text-[#092B4C]
          sm:text-sm
        "
      >
        What Comes After MBBS
      </span>
    </motion.div>

    {/* ========================================= */}
    {/* Bottom Information Card */}
    {/* ========================================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="
        absolute
        bottom-5
        left-5
        right-5
        rounded-2xl
        border
        border-white/20
        bg-[#062C4F]/70
        p-4
        text-white
        shadow-2xl
        backdrop-blur-xl
        sm:bottom-7
        sm:left-7
        sm:right-7
        sm:rounded-3xl
        sm:p-5
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white/10
            text-[#8EDFFF]
          "
        >
          <MessageCircle size={19} />
        </div>

        <div>
          <p className="text-sm font-bold sm:text-base">
            Not sure where to start?
          </p>

          <p className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">
            That's completely okay. Start with a conversation.
          </p>
        </div>
      </div>
    </motion.div>
  </div>

  {/* ========================================= */}
  {/* Floating Call Card */}
  {/* ========================================= */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
    className="
      absolute
      -bottom-5
      -left-2
      hidden
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-100
      bg-white
      px-4
      py-3
      shadow-[0_18px_45px_rgba(15,23,42,0.13)]
      sm:flex
      lg:-left-8
    "
  >
    <span
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-[#0263CC]/10
        text-[#0263CC]
      "
    >
      <Phone size={18} />
    </span>

    <div>
      <p
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-wider
          text-slate-400
        "
      >
        Need to talk?
      </p>

      <p className="mt-0.5 text-sm font-bold text-[#092B4C]">
        Speak with a counsellor
      </p>
    </div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;