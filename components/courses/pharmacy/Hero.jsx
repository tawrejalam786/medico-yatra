"use client";

import Image from "next/image";

import {
  ArrowDown,
  CheckCircle2,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  Container,
  PrimaryLink,
  Reveal,
} from "./SectionUI";

export default function Hero() {
  const trustItems = [
    "Honest guidance",
    "Clinical + science routes",
    "Licensing support",
    "Family pathways*",
  ];

  return (
    <section
      id="top"
      className="
        pharmacy-hero
        relative isolate
        overflow-hidden
        bg-[#F5F9FF]
        pb-10 pt-5
        sm:pb-14
        lg:pb-16 lg:pt-7
      "
    >
      <Container>
        {/* BREADCRUMB */}
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 sm:mb-8 sm:text-xs">
          <a
            href="#top"
            className="transition hover:text-[#0263CC]"
          >
            Home
          </a>

          <span>/</span>

          <a
            href="#courses"
            className="transition hover:text-[#0263CC]"
          >
            Courses
          </a>

          <span>/</span>

          <span className="text-[#0263CC]">
            Pharmacy Abroad
          </span>
        </nav>

        <div className="grid items-center gap-9 lg:grid-cols-[1.07fr_0.93fr] lg:gap-12">
          {/* LEFT CONTENT */}
          <Reveal>
            {/* EYEBROW */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#02A7BB]/20
                bg-white/80
                px-3 py-2
                text-[10px] font-extrabold
                uppercase tracking-[0.16em]
                text-[#0263CC]
                shadow-sm backdrop-blur
                sm:text-xs
              "
            >
              <Sparkles className="size-3.5 text-[#02A7BB]" />

              Medico Yatra · Study Pharmacy Abroad
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-5 max-w-3xl
                text-[32px] font-extrabold
                leading-[1.07]
                tracking-[-1.25px]
                text-[#071A49]

                min-[390px]:text-[36px]
                sm:text-[46px]
                lg:text-[51px]
                xl:text-[57px]
              "
            >
              Study pharmacy abroad — from{" "}
              <span className="text-[#0263CC]">
                clinical practice
              </span>{" "}
              to{" "}
              <span className="text-[#02A7BB]">
                pharma science.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-base sm:leading-8">
              Pharmacy spans patient care,
              research, regulatory, biotech and
              cosmetic science. Choose the right
              BPharm, PharmD or specialist
              programme — with honest planning for
              licensing, English and future work
              pathways.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 grid gap-3 min-[420px]:grid-cols-2 sm:flex">
              <PrimaryLink>
                Book Free Counselling
              </PrimaryLink>

              <a
                href="#salary"
                className="
                  inline-flex min-h-12
                  items-center justify-center gap-2
                  rounded-2xl
                  border border-[#0263CC]/25
                  bg-white/80
                  px-5
                  text-sm font-bold
                  text-[#0263CC]
                  backdrop-blur
                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[#0263CC]
                  hover:bg-white
                  hover:shadow-md
                "
              >
                See Pharmacist Salaries

                <ArrowDown className="size-4" />
              </a>
            </div>

            {/* TRUST ITEMS */}
            <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-3 text-[10px] font-semibold text-slate-600 sm:flex sm:flex-wrap sm:gap-x-5 sm:text-xs">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-start gap-1.5"
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#02A7BB] sm:size-4" />

                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          {/* RIGHT IMAGE */}
          <Reveal
            delay={0.12}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* BACKGROUND GLOW */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-blue-300/30 via-cyan-200/25 to-blue-100/20 blur-2xl sm:-inset-6" />

            {/* IMAGE CONTAINER */}
            <div
              className="
                relative
                h-[350px]
                overflow-hidden
                rounded-[28px]
                border border-white/80
                bg-slate-100
                shadow-[0_28px_80px_rgba(2,48,112,.18)]

                min-[390px]:h-[400px]
                sm:h-[480px]
                sm:rounded-[34px]
                lg:h-[520px]
              "
            >
              <Image
                src="/images/courses/pharmacy/pharmacy-hero.webp"
                alt="Pharmacist and pharmaceutical scientist studying and working in clinical and laboratory environments"
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 85vw,
                  45vw
                "
                className="object-cover object-center"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04183E]/75 via-[#071A49]/5 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0263CC]/10 to-[#02A7BB]/5" />

              {/* TOP BADGE */}
              <div
                className="
                  absolute left-4 top-4
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/40
                  bg-white/90
                  px-3 py-2
                  text-[10px] font-extrabold
                  text-[#071A49]
                  shadow-lg backdrop-blur

                  sm:left-5 sm:top-5
                  sm:px-4
                  sm:text-xs
                "
              >
                <Sparkles className="size-3.5 text-[#02A7BB]" />

                8 pharmacy course routes
              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-200 sm:text-xs">
                  One field · Two directions
                </p>

                <h2 className="mt-2 max-w-md text-xl font-extrabold leading-tight text-white sm:text-2xl">
                  Choose clinical practice or
                  pharmaceutical science.
                </h2>

                {/* DIRECTION CHIPS */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md">
                    <HeartPulse className="size-5 text-blue-200" />

                    <p className="mt-2 text-[10px] font-extrabold sm:text-xs">
                      Clinical Pharmacy
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-blue-100 sm:text-[10px]">
                      Patient and hospital focused
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md">
                    <FlaskConical className="size-5 text-cyan-200" />

                    <p className="mt-2 text-[10px] font-extrabold sm:text-xs">
                      Science & Industry
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-cyan-100 sm:text-[10px]">
                      R&D, biotech and regulatory
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                absolute -bottom-4 left-3 right-3
                flex items-center gap-2
                rounded-2xl
                border border-white
                bg-white
                px-3 py-2.5
                text-[10px] font-bold
                text-[#071A49]
                shadow-xl

                min-[390px]:left-auto
                min-[390px]:right-4

                sm:-bottom-5
                sm:right-5
                sm:px-4
                sm:py-3
                sm:text-xs

                lg:-right-5
              "
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-teal-50">
                <ShieldCheck className="size-4 text-[#02A7BB]" />
              </span>

              Plan with the end in mind
            </div>
          </Reveal>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-10 max-w-4xl text-[9px] leading-5 text-slate-400 sm:text-[10px]">
          *Family, work and migration pathways
          are subject to each country’s eligibility
          and current immigration rules.
        </p>
      </Container>
    </section>
  );
}