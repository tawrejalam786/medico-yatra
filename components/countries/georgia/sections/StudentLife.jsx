"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { studentLife } from "../../../../data/georgia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function StudentLife() {
  return (
    <section className="overflow-hidden bg-[#071A2D] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle light eyebrow="Student life" title="What everyday life in Georgia can actually feel like." text="Instead of a long table on mobile, these practical lifestyle points are swipeable photo cards." />
        <Reveal className="mt-9">
          <Swiper modules={[Autoplay]} spaceBetween={14} slidesPerView={1.08} grabCursor autoplay={{ delay: 3300, disableOnInteraction: false, pauseOnMouseEnter: true }} breakpoints={{ 640: { slidesPerView: 1.6 }, 768: { slidesPerView: 2.2 }, 1100: { slidesPerView: 3 } }}>
            {studentLife.map(({ icon: Icon, title, text, image }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article className="group relative h-[380px] overflow-hidden rounded-[30px] bg-slate-800 sm:h-[420px]">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D] via-[#071A2D]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/70">{text}</p>
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
