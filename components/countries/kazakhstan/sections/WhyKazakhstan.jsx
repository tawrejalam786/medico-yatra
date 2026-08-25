"use client";

import {
  AlertTriangle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { reasons } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function WhyKazakhstan() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Kazakhstan"
          title="Honest reasons students consider Kazakhstan for MBBS."
          text="The strongest attraction is affordability — but cost should always be weighed against university quality, recognition and licensing preparation."
        />

        <Reveal className="relative mt-9">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous reason"
            className="why-kazakhstan-prev absolute left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,.18)] backdrop-blur transition-all duration-300 hover:bg-[#0263CC] hover:text-white active:scale-95 sm:-left-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next reason"
            className="why-kazakhstan-next absolute right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white shadow-[0_8px_25px_rgba(2,99,204,.28)] transition-all duration-300 hover:scale-105 active:scale-95 sm:-right-5 sm:h-12 sm:w-12 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:opacity-40"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={14}
            slidesPerView={1.12}
            grabCursor
            navigation={{
              prevEl: ".why-kazakhstan-prev",
              nextEl: ".why-kazakhstan-next",
            }}
            autoplay={{
              delay: 3400,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reasons.map(({ icon: Icon, title, text, tone }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article className="flex h-full min-h-[255px] flex-col rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,.06)] sm:p-6">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-6 text-lg font-black leading-6 text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="relative overflow-hidden rounded-[30px] border border-[#FFDFA8] bg-[linear-gradient(135deg,#FFF8DF_0%,#FFF1E6_52%,#FFF4F8_100%)] p-5 sm:p-7 lg:p-8">
            <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#F7A252]/20 blur-3xl" />
            <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-[#D84C7E]/10 blur-3xl" />

            <div className="relative grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[20px] bg-white text-[#D97706] shadow-sm">
                <AlertTriangle className="h-6 w-6" />
              </span>

              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-[#A65B00]">
                  Balanced view · important
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">
                  Low cost is not the only decision.
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
                  Kazakhstan is not FMGE-exempt, winters can be extreme, the
                  cultural environment is different from India, and university
                  quality varies. Shortlist using current NMC status, outcomes
                  and your FMGE / NExT plan — not fees alone.
                </p>
              </div>

              <a
                href="#licensing"
                className="inline-flex items-center gap-2 text-sm font-black text-[#A65B00]"
              >
                Understand licensing
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}