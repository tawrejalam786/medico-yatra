"use client";

import {
  BookOpenCheck,
  Clock3,
  GraduationCap,
  Languages,
  MapPinned,
  Target,
} from "lucide-react";

import { pathwayRows } from "@/data/courses/pharmacy";

import {
  Container,
  Notice,
  Reveal,
  SectionHeading,
} from "./SectionUI";

const icons = [
  Clock3,
  GraduationCap,
  MapPinned,
  Languages,
];

export default function StudyPathway() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Study-abroad pathway"
              title="Plan the qualification around your destination"
              text="Course title alone is not enough. Eligibility, programme length, language and the country where you may work later all matter."
            />

            {/* DESKTOP CALLOUT */}
            <div className="mt-6 hidden rounded-[24px] bg-[#071A49] p-6 text-white lg:block">
              <BookOpenCheck className="size-7 text-cyan-300" />

              <p className="mt-5 text-lg font-extrabold">
                Choose with the end in mind.
              </p>

              <p className="mt-2 text-xs leading-6 text-blue-100">
                Registration rules differ for
                practice, while industry hubs and
                specialist employers differ for
                science roles.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <Reveal className="min-w-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {pathwayRows.map(
                (row, index) => {
                  const Icon =
                    icons[
                      index % icons.length
                    ];

                  return (
                    <article
                      key={
                        row.id ||
                        row.label ||
                        index
                      }
                      className="
                        flex h-full min-w-0
                        flex-col
                        rounded-[18px]
                        border border-slate-200
                        bg-white
                        p-3
                        shadow-[0_10px_30px_rgba(15,23,42,.05)]
                        transition-all duration-300

                        hover:-translate-y-1
                        hover:border-[#0263CC]/25
                        hover:shadow-[0_16px_40px_rgba(2,99,204,.10)]

                        min-[380px]:p-4

                        sm:rounded-[24px]
                        sm:p-5
                        sm:shadow-[0_14px_40px_rgba(15,23,42,.06)]
                      "
                    >
                      {/* ICON */}
                      <span
                        className="
                          grid size-9 shrink-0
                          place-items-center
                          rounded-xl
                          bg-blue-50
                          text-[#0263CC]

                          min-[380px]:size-10

                          sm:size-11
                          sm:rounded-2xl
                        "
                      >
                        <Icon className="size-4 sm:size-5" />
                      </span>

                      {/* STEP NUMBER */}
                      <p className="mt-4 text-[8px] font-extrabold uppercase tracking-[0.12em] text-[#02A7BB] sm:mt-5 sm:text-[9px]">
                        Step{" "}
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          mt-1
                          break-words
                          text-[11px]
                          font-extrabold
                          leading-[1.45]
                          text-[#071A49]

                          min-[380px]:text-xs

                          sm:text-sm
                          sm:leading-6
                        "
                      >
                        {row.label}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-2
                          flex-1
                          break-words
                          text-[9px]
                          leading-[1.65]
                          text-slate-600

                          min-[380px]:text-[10px]

                          sm:text-xs
                          sm:leading-6
                        "
                      >
                        {row.value}
                      </p>
                    </article>
                  );
                }
              )}
            </div>

            {/* MOBILE/TABLET NOTICE */}
            <Notice
              tone="teal"
              className="mt-4 sm:mt-5 lg:hidden"
            >
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 size-5 shrink-0 text-[#009E9A]" />

                <p className="text-[11px] leading-5 sm:text-sm sm:leading-6">
                  <strong>
                    Choose with the end in mind:
                  </strong>{" "}
                  registration rules and industry
                  hubs differ by country.
                </p>
              </div>
            </Notice>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}