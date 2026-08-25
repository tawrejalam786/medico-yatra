"use client";

import { ArrowRight, BadgeCheck, MapPin, ShieldAlert } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { universities } from "../data";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Universities() {
  return (
    <section id="universities" className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="Universities" title="Representative universities — verification first." text="The supplied brief names six representative medical universities. Recognition can change, so current NMC status must be checked before enrolment." />

          <div className="relative max-w-md overflow-hidden rounded-[24px] border border-[#FFDFA8] bg-[linear-gradient(135deg,#FFF8DE,#FFF0E6_58%,#FFF3F8)] p-4 text-sm leading-6 text-[#855114] shadow-[0_12px_35px_rgba(180,106,20,.08)]">
            <div className="absolute -right-7 -top-8 h-24 w-24 rounded-full bg-[#F7A252]/20 blur-2xl" />
            <div className="relative flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-[#D97706] shadow-sm"><ShieldAlert className="h-5 w-5" /></span><span><strong className="text-slate-900">Important:</strong> this list is representative, not an endorsement. Verify current NMC recognition for every university.</span></div>
          </div>
        </div>

        <div className="relative mt-9">
          <Reveal>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1.08}
              speed={700}
              loop={universities.length > 3}
              grabCursor
              autoplay={{ delay: 3400, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true, el: ".kazakhstan-universities-pagination" }}
              navigation={{ nextEl: ".kazakhstan-universities-next", prevEl: ".kazakhstan-universities-prev" }}
              breakpoints={{ 640: { slidesPerView: 1.5, spaceBetween: 18 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2.5, spaceBetween: 22 }, 1280: { slidesPerView: 3, spaceBetween: 24 } }}
              className="kazakhstan-universities-swiper !overflow-visible"
            >
              {universities.map((u) => (
                <SwiperSlide key={u.name} className="!h-auto">
                  <article className="group flex h-[455px] w-full flex-col overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,.12)] sm:h-[470px]">
                    <div className="relative h-[220px] shrink-0 overflow-hidden bg-slate-100">
                      <img src={u.image} alt={u.name} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/92 px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-[#0263CC] shadow-sm backdrop-blur-md"><BadgeCheck className="h-3.5 w-3.5" /> Verify NMC</span>
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 px-3 py-2 text-xs font-bold text-white backdrop-blur-md"><MapPin className="h-3.5 w-3.5" /> {u.city}</span>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                      <h3 className="line-clamp-2 text-xl font-black leading-7 tracking-[-.02em] text-slate-950">{u.name}</h3>
                      <p className="mt-3 line-clamp-3 overflow-hidden text-sm leading-6 text-slate-600">{u.note}</p>
                      <a href="#lead" className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-black text-[#0263CC]">Request latest shortlist <ArrowRight className="h-4 w-4" /></a>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>

          <button aria-label="Previous university" className="kazakhstan-universities-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_12px_35px_rgba(15,23,42,.12)] transition hover:bg-[#0263CC] hover:text-white lg:flex"><ArrowRight className="h-5 w-5 rotate-180" /></button>
          <button aria-label="Next university" className="kazakhstan-universities-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_12px_35px_rgba(15,23,42,.12)] transition hover:bg-[#0263CC] hover:text-white lg:flex"><ArrowRight className="h-5 w-5" /></button>
        </div>

        <div className="kazakhstan-universities-pagination mt-7 flex justify-center" />
        <p className="mt-3 text-center text-xs font-semibold text-slate-400 sm:hidden">Swipe to explore universities →</p>
      </div>

      <style jsx global>{`
        .kazakhstan-universities-swiper .swiper-wrapper { align-items: stretch; }
        .kazakhstan-universities-swiper .swiper-slide { height: auto !important; display: flex; }
        .kazakhstan-universities-pagination { display:flex; align-items:center; justify-content:center; gap:7px; }
        .kazakhstan-universities-pagination .swiper-pagination-bullet { width:7px; height:7px; margin:0 !important; opacity:1; background:#cbd5e1; transition:all .3s ease; }
        .kazakhstan-universities-pagination .swiper-pagination-bullet-active { width:24px; border-radius:999px; background:linear-gradient(90deg,#0263CC,#02A7BB); }
      `}</style>
    </section>
  );
}
