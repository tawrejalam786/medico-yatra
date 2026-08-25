"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { studentLife } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function StudentLife() {
  return (
    <section className="overflow-hidden bg-[#071A2D] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          light
          eyebrow="Student life"
          title="What everyday life in Kazakhstan can actually feel like."
          text="Hostel, food, transport, winter, language and Indian student support are presented as swipeable visual cards to keep mobile scrolling under control."
        />

        <Reveal className="relative mt-9">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous student life slide"
            className="student-life-prev absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#071A2D]/85 text-white shadow-[0_8px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-[#071A2D] active:scale-95 sm:-left-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next student life slide"
            className="student-life-next absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_30px_rgba(2,167,187,.3)] transition-all duration-300 hover:scale-105 active:scale-95 sm:-right-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={14}
            slidesPerView={1.08}
            grabCursor
            navigation={{
              prevEl: ".student-life-prev",
              nextEl: ".student-life-next",
            }}
            autoplay={{
              delay: 3300,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.6,
              },
              768: {
                slidesPerView: 2.2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
          >
            {studentLife.map(({ icon: Icon, title, text, image }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article className="group relative h-[380px] overflow-hidden rounded-[30px] bg-slate-800 sm:h-[420px]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D] via-[#071A2D]/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-4 text-xl font-black text-white">
                      {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/70">
                      {text}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}