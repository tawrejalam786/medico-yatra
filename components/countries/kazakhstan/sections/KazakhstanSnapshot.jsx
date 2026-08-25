"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { snapshotCards } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function KazakhstanSnapshot() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kazakhstan at a glance"
          title="Understand the destination before comparing universities."
          text="A quick country snapshot covering the practical things Indian students and families usually want to know first."
        />

        <Reveal className="relative mt-8">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous snapshot"
            className="snapshot-prev absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,.18)] backdrop-blur transition-all duration-300 hover:bg-[#0263CC] hover:text-white active:scale-95 sm:-left-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next snapshot"
            className="snapshot-next absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_25px_rgba(2,99,204,.28)] transition-all duration-300 hover:scale-105 active:scale-95 sm:-right-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={12}
            slidesPerView={2.05}
            grabCursor
            navigation={{
              prevEl: ".snapshot-prev",
              nextEl: ".snapshot-next",
            }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1180: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
          >
            {snapshotCards.map(
              ({ icon: Icon, label, value, tone }) => (
                <SwiperSlide key={label} className="!h-auto">
                  <article
                    className={`flex h-full min-h-[158px] flex-col rounded-[24px] bg-gradient-to-br p-4 sm:min-h-[175px] sm:p-5 ${tone}`}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/75 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>

                    <p className="mt-5 text-[10px] font-black uppercase tracking-[.13em] opacity-70">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-slate-900 sm:text-base sm:leading-6">
                      {value}
                    </p>
                  </article>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}