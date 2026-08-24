"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { snapshotCards } from "../../../../data/georgia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function GeorgiaSnapshot() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Georgia at a glance" title="Know the country before you compare the colleges." text="A quick, practical snapshot of the things students and parents usually want to understand first." />

        <Reveal className="mt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={2.05}
            grabCursor
            autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 14 },
              900: { slidesPerView: 4, spaceBetween: 16 },
              1180: { slidesPerView: 5, spaceBetween: 16 },
            }}
          >
            {snapshotCards.map(({ icon: Icon, label, value, tone }) => (
              <SwiperSlide key={label} className="!h-auto">
                <article className={`flex h-full min-h-[158px] flex-col rounded-[24px] bg-gradient-to-br p-4 sm:min-h-[175px] sm:p-5 ${tone}`}>
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/75 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[.13em] opacity-70">{label}</p>
                  <p className="mt-1 text-sm font-black leading-5 text-slate-900 sm:text-base sm:leading-6">{value}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
