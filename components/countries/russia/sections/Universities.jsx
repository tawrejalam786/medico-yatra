"use client";

import { ArrowRight, BadgeCheck, MapPin, ShieldAlert } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { universities } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Universities() {
  return (
    <section
      id="universities"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Universities"
            title="Shortlist universities with verification first."
            text="Recognition status can change. Use this as a representative guide, then verify current NMC status before enrolling."
          />

          <div className="max-w-md rounded-2xl bg-[#FFF4D8] p-4 text-sm leading-6 text-[#8B5A00]">
            <div className="flex gap-2">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" />

              <span>
                <strong>Important:</strong> this list is not an endorsement.
                Verify current recognition for every university.
              </span>
            </div>
          </div>
        </div>

        {/* ================= SWIPER ================= */}
        <div className="relative mt-9">
          <Reveal>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1.12}
              speed={700}
              loop={universities.length > 3}
              grabCursor
              watchOverflow
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".universities-pagination",
              }}
              navigation={{
                nextEl: ".universities-next",
                prevEl: ".universities-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.45,
                  spaceBetween: 18,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 22,
                },

                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="!overflow-visible"
            >
              {universities.map((u) => (
  <SwiperSlide key={u.name} className="h-auto">
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,.12)]">

      {/* IMAGE */}
      <div className="relative h-52 shrink-0 overflow-hidden bg-slate-100 sm:h-56">
        <img
          src={u.image}
          alt={u.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

        {/* BADGE */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#0263CC] shadow-sm backdrop-blur-md">
          <BadgeCheck className="h-3.5 w-3.5" />
          Verify NMC
        </span>

        {/* CITY CHIP */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/55 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" />
            {u.city}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* UNIVERSITY NAME */}
        <h3 className="line-clamp-1 min-h-[56px] text-lg font-black leading-7 tracking-[-.02em] text-slate-950">
          {u.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 line-clamp-2 min-h-[72px] text-[14px] leading-6 text-slate-600">
          {u.note}
        </p>

        {/* BUTTON */}
        <div className="mt-auto pt-5">
          <button className="group/btn inline-flex items-center gap-2 text-sm font-black text-[#0263CC]">
            View details

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  </SwiperSlide>
))}
            </Swiper>
          </Reveal>

          {/* ================= DESKTOP ARROWS ================= */}
          <button
            aria-label="Previous university"
            className="universities-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,.12)] transition hover:bg-[#0263CC] hover:text-white lg:flex"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>

          <button
            aria-label="Next university"
            className="universities-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,.12)] transition hover:bg-[#0263CC] hover:text-white lg:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="universities-pagination mt-7 flex justify-center" />

        {/* MOBILE HELP TEXT */}
        <div className="mt-3 text-center text-xs font-semibold text-slate-400 sm:hidden">
          Swipe to explore universities →
        </div>
      </div>

      {/* ================= CUSTOM SWIPER STYLE ================= */}
      <style jsx global>{`
        .universities-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .universities-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          margin: 0 !important;
          opacity: 1;
          background: #cbd5e1;
          transition: all 0.3s ease;
        }

        .universities-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0263cc 0%, #02a7bb 100%);
        }

        .universities-prev.swiper-button-disabled,
        .universities-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        @media (max-width: 639px) {
          #universities .swiper {
            overflow: visible !important;
          }
        }
      `}</style>
    </section>
  );
}