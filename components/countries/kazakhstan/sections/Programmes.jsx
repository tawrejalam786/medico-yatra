"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { programmes } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Programmes() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Healthcare programmes"
          title="Healthcare programmes available in Kazakhstan."
          text="The supplied brief lists five programme categories. Exact availability, duration and medium should be confirmed with the university."
        />

        <Reveal className="relative mt-9">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous programme"
            className="programmes-prev absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,.18)] backdrop-blur transition-all duration-300 hover:bg-[#0263CC] hover:text-white active:scale-95 sm:-left-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next programme"
            className="programmes-next absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_25px_rgba(2,99,204,.28)] transition-all duration-300 hover:scale-105 active:scale-95 sm:-right-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={14}
            slidesPerView={1.25}
            grabCursor
            navigation={{
              prevEl: ".programmes-prev",
              nextEl: ".programmes-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              900: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {programmes.map(({ icon: Icon, title, meta, tone }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article
                  className={`relative flex h-[220px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br ${tone} p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,.12)] sm:p-6`}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />

                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="relative">
                    <h3 className="text-xl font-black leading-6">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-white/75">
                      {meta}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <p className="mt-5 text-xs font-semibold text-slate-500">
          Availability varies by university. Confirm the exact programme,
          duration and medium of instruction before applying.
        </p>
      </div>
    </section>
  );
}