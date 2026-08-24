"use client";

import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { relatedLinks, sisterLinks } from "../../../../data/georgia";
import SectionTitle from "../shared/SectionTitle";

export default function InternalLinks() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Explore more" title="Continue your MBBS research without losing context." text="Related country pages and sister-brand resources from the supplied content brief." />

        <div className="mt-8">
          <Swiper spaceBetween={12} slidesPerView={1.25} grabCursor breakpoints={{ 640: { slidesPerView: 2.2 }, 900: { slidesPerView: 3 }, 1180: { slidesPerView: 4 } }}>
            {relatedLinks.map(([label, href], i) => (
              <SwiperSlide key={label} className="!h-auto">
                <a href={href} className="group flex h-full min-h-[132px] items-end justify-between rounded-[24px] border border-slate-100 bg-[#F8FBFF] p-5 transition hover:-translate-y-1 hover:border-[#0263CC]/20 hover:shadow-lg">
                  <div><span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-[#0263CC] shadow-sm"><BookOpen className="h-4 w-4" /></span><p className="mt-4 font-black text-slate-900">{label}</p></div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-[#0263CC]" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {sisterLinks.map(([label, href], i) => (
            <a key={label} href={href} className={`flex items-center justify-between rounded-[22px] p-5 font-black transition hover:-translate-y-0.5 ${i === 0 ? "bg-[#EAF3FF] text-[#0263CC]" : "bg-[#E8FBF9] text-[#078C74]"}`}>
              <span>{label}</span><ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
