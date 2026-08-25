"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { journey } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

const tones = [
  "bg-[#EAF3FF] text-[#0263CC]",
  "bg-[#E8FBF9] text-[#009E9A]",
  "bg-[#F1ECFF] text-[#7656C9]",
  "bg-[#FFF0E5] text-[#E77928]",
  "bg-[#E8F8EF] text-[#14885F]",
  "bg-[#FFE8F0] text-[#D84C7E]",
  "bg-[#FFF4D8] text-[#B67B10]",
  "bg-[#E7F7FF] text-[#178BE5]",
];

export default function Journey() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How Medico Yatra helps"
          title="From your first question to your first day on campus — and beyond."
          text="The eight-stage pathway is swipeable on smaller screens so mobile users can explore the journey without a very long vertical section."
          center
        />

        <Reveal className="relative mt-9">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous journey step"
            className="journey-prev absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,.18)] backdrop-blur transition-all duration-300 hover:bg-[#0263CC] hover:text-white active:scale-95 sm:-left-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next journey step"
            className="journey-next absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_25px_rgba(2,99,204,.28)] transition-all duration-300 hover:scale-105 active:scale-95 sm:-right-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={14}
            slidesPerView={1.18}
            grabCursor
            navigation={{
              prevEl: ".journey-prev",
              nextEl: ".journey-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
            }}
          >
            {journey.map(({ icon: Icon, step, title, text }, i) => (
              <SwiperSlide key={step} className="!h-auto">
                <article className="flex h-full min-h-[245px] flex-col rounded-[28px] border border-slate-100 bg-[#F8FBFF] p-5 shadow-[0_14px_40px_rgba(15,23,42,.05)] sm:p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[i]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="text-4xl font-black text-slate-200">
                      {step}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-black text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}