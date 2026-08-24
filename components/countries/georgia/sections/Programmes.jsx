"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { programmes } from "../../../../data/georgia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Programmes() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Healthcare programmes" title="More than one healthcare pathway." text="The brief lists six common programme categories. Exact availability should be confirmed university by university." />
        <Reveal className="mt-9">
          <Swiper modules={[Autoplay]} spaceBetween={14} slidesPerView={1.25} grabCursor autoplay={{ delay: 3000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2.2 }, 900: { slidesPerView: 3 }, 1180: { slidesPerView: 4 } }}>
            {programmes.map(({ icon: Icon, title, meta, tone }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article className={`relative flex h-[220px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br ${tone} p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,.12)] sm:p-6`}>
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur"><Icon className="h-5 w-5" /></span>
                  <div className="relative"><h3 className="text-xl font-black leading-6">{title}</h3><p className="mt-2 text-sm font-bold text-white/75">{meta}</p></div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
        <p className="mt-5 text-xs font-semibold text-slate-500">Availability varies by university. Confirm the exact programme, duration and medium of instruction before applying.</p>
      </div>
    </section>
  );
}
