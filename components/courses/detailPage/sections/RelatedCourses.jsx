"use client";

import { ArrowUpRight, GraduationCap } from "lucide-react";
import { getSectionHeading, visibleLines } from "./courseSectionUtils";

export default function RelatedCourses({ data = {} }) {
  const courses = Array.isArray(data.items)
    ? data.items
    : visibleLines(data, ["Heading", "Headline"]);

  return (
    <section className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-[#02A7BB]">Explore more</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071A49] sm:text-4xl">
              {getSectionHeading(data, "Explore other healthcare careers")}
            </h2>
          </div>
          <a href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-[#0263CC]">
            View all courses <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-9 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {courses.map((item, index) => {
            const title = typeof item === "string" ? item : item.title || item.name;
            const href = typeof item === "string" ? "/courses" : item.href || `/courses/${item.slug || ""}`;
            return (
              <a key={`${title}-${index}`} href={href} className="group min-w-[280px] snap-start rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 md:min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0263CC]">
                    <GraduationCap size={24} />
                  </span>
                  <ArrowUpRight className="text-slate-300 transition group-hover:text-[#02A7BB]" />
                </div>
                <h3 className="mt-5 font-bold leading-6 text-[#071A49]">{title}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

