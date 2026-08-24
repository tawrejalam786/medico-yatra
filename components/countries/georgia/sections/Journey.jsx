"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { journey } from "../../../../data/georgia";
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
        <SectionTitle eyebrow="How Medico Yatra helps" title="From the first question to your first day on campus — and beyond." text="Eight steps can create a very long mobile section, so the journey is swipeable while staying fully visible on larger screens." center />

        <Reveal className="mt-9">
          <Swiper modules={[Autoplay]} spaceBetween={14} slidesPerView={1.18} grabCursor autoplay={{ delay: 3000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1180: { slidesPerView: 4 } }}>
            {journey.map(({ icon: Icon, step, title, text }, i) => (
              <SwiperSlide key={step} className="!h-auto">
                <article className="flex h-full min-h-[245px] flex-col rounded-[28px] border border-slate-100 bg-[#F8FBFF] p-5 shadow-[0_14px_40px_rgba(15,23,42,.05)] sm:p-6">
                  <div className="flex items-center justify-between"><span className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[i]}`}><Icon className="h-5 w-5" /></span><span className="text-4xl font-black text-slate-200">{step}</span></div>
                  <h3 className="mt-7 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
