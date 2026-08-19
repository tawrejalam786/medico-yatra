"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Globe2,
  GraduationCap,
  MessageCircle,
  Play,
  ShieldCheck,
} from "lucide-react";

export default function USMLEHero() {
  const trustPoints = [
    "100% online",
    "Step-aligned preparation",
    "Honest about competitiveness",
    "Integrated with your MBBS-abroad schedule",
  ];

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#061b32] text-white lg:min-h-[620px] mt-16">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/usmle-hero.png"
          alt="Medical student preparing for USMLE online"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* =========================================================
          BRAND GRADIENT OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#04182d] via-[#06284a]/90 to-[#0263CC]/35" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#04182d] via-transparent to-[#04182d]/35" />

      {/* =========================================================
          SOFT LIGHT EFFECTS
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#02A7BB]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-[-160px] -z-10 h-[450px] w-[450px] rounded-full bg-[#0263CC]/25 blur-[120px]" />

      {/* =========================================================
          SUBTLE GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          HEADER / TOP META
      ========================================================= */}

      <div className="relative mx-auto max-w-[1380px] px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        <div className="flex items-center justify-between">
          {/* Brand context */}

          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md">
              <GraduationCap
                size={17}
                className="text-[#71e4ec]"
              />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                Medico Yatra
              </p>

              <p className="text-[10px] font-medium text-white/75">
                USMLE Coaching
              </p>
            </div>
          </div>

          {/* Online badge */}

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69dce5] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#69dce5]" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65">
              100% Online Programme
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN HERO CONTENT
      ========================================================= */}

      <div className="relative mx-auto flex min-h-[680px] max-w-[1380px] items-center px-5 pb-24 pt-16 sm:px-8 lg:min-h-[420px] lg:px-12 lg:pb-20 lg:pt-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-[760px]"
          >
            {/* Eyebrow */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#02A7BB]/20">
                <Globe2
                  size={11}
                  className="text-[#72e6ed]"
                />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/70">
                A Future Yatra brand · Integrated Global Licensing Coaching
              </span>
            </div>

            {/* Main heading */}

            <h1 className="max-w-[800px] text-[43px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[57px] lg:text-[70px] xl:text-[66px]">
              Building Toward
              <br />

              <span className="bg-gradient-to-r from-white via-[#dffcff] to-[#69dce5] bg-clip-text text-transparent">
                US Medical Practice?
              </span>
            </h1>

            {/* Accent statement */}

            <div className="mt-5 flex items-start gap-3 sm:mt-6">
              <div className="mt-2 h-10 w-[2px] shrink-0 rounded-full bg-gradient-to-b from-[#02A7BB] to-transparent" />

              <p className="max-w-[650px] text-[20px] font-medium leading-[1.35] tracking-[-0.02em] text-white/90 sm:text-[25px]">
                Start your USMLE preparation while you're still studying.
              </p>
            </div>

            {/* Description */}

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-white/58 sm:text-[16px] sm:leading-8">
              If your ambitions extend toward residency and practice in the
              United States, the USMLE pathway gets you there — but it's
              demanding, competitive, and easiest to plan for early. Medico
              Yatra's 100% online coaching lets you build structured USMLE
              preparation into your MBBS abroad from the pre-clinical years,
              from anywhere in the world.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">

              <button
                type="button"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-[12px] font-semibold text-[#06203a] shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#69dce5]"
              >
                Book Free Counselling

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 text-[12px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Play
                    size={10}
                    fill="currentColor"
                  />
                </span>

                See How the Programme Works

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            </div>

            {/* =================================================
                MICRO TRUST
            ================================================== */}

            <div className="mt-8 flex max-w-[720px] flex-wrap gap-x-5 gap-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#02A7BB]/15">
                    <Check
                      size={9}
                      strokeWidth={3}
                      className="text-[#69dce5]"
                    />
                  </span>

                  <span className="text-[9px] font-medium text-white/55 sm:text-[10px]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL / JOURNEY CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            {/* Floating glass card */}

            <div className="relative ml-auto max-w-[440px]">

              {/* Glow */}

              <div className="absolute inset-8 rounded-[40px] bg-[#02A7BB]/15 blur-[70px]" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#06233f]/60 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">

                {/* Card header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#69dce5]">
                      Your pathway
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Start early. Stay open.
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <ShieldCheck
                      size={16}
                      className="text-[#69dce5]"
                    />
                  </div>
                </div>

                {/* Pathway */}

                <div className="relative mt-7">

                  {/* Connecting line */}

                  <div className="absolute bottom-6 left-[17px] top-6 w-px bg-gradient-to-b from-[#02A7BB] via-white/15 to-transparent" />

                  <PathNode
                    number="01"
                    title="MBBS Abroad"
                    text="Build your medical foundation"
                    active
                  />

                  <PathNode
                    number="02"
                    title="Pre-Clinical Years"
                    text="Begin Step 1-aligned preparation"
                  />

                  <PathNode
                    number="03"
                    title="Clinical Years"
                    text="Build Step 2 CK clinical reasoning"
                  />

                  <PathNode
                    number="04"
                    title="USMLE Pathway"
                    text="Prepare for the next stage"
                    last
                  />
                </div>

                {/* Bottom message */}

                <div className="mt-5 rounded-2xl border border-[#02A7BB]/15 bg-[#02A7BB]/[0.06] p-4">
                  <p className="text-[10px] leading-5 text-white/55">
                    Your USMLE ambition doesn't have to wait until graduation.
                    Plan it alongside your MBBS journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM TRUST BAND
      ========================================================== */}

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#04182d]/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 sm:px-8 lg:px-12">

          <HeroMeta
            icon={<Globe2 size={14} />}
            text="Study from anywhere"
          />

          <HeroMeta
            icon={<GraduationCap size={14} />}
            text="Built around MBBS abroad"
          />

          <HeroMeta
            icon={<ShieldCheck size={14} />}
            text="Honest about competitiveness"
          />

          <HeroMeta
            icon={<MessageCircle size={14} />}
            text="Free counselling"
          />

        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   PATH NODE
================================================================ */

function PathNode({
  number,
  title,
  text,
  active = false,
  last = false,
}) {
  return (
    <div className="relative flex gap-4 pb-5 last:pb-0">

      <div
        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
          active
            ? "border-[#69dce5]/40 bg-[#02A7BB]/20"
            : "border-white/10 bg-[#092b49]"
        }`}
      >
        <span
          className={`text-[8px] font-bold ${
            active
              ? "text-[#69dce5]"
              : "text-white/40"
          }`}
        >
          {number}
        </span>
      </div>

      <div className="pt-0.5">
        <p className="text-[11px] font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-[9px] leading-4 text-white/40">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ===============================================================
   HERO META
================================================================ */

function HeroMeta({ icon, text }) {
  return (
    <div className="flex min-h-[62px] items-center gap-2.5 px-3 py-2.5 sm:px-5">
      <span className="text-[#69dce5]">
        {icon}
      </span>

      <span className="text-[8px] font-medium leading-4 text-white/45 sm:text-[9px]">
        {text}
      </span>
    </div>
  );
}