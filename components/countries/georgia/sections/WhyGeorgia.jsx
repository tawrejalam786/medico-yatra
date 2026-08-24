"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { reasons } from "../../../../data/georgia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function WhyGeorgia() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Why Georgia" title="Honest reasons students consider Georgia for MBBS." text="Benefits matter, but the right design should make the trade-offs equally visible." />

        <Reveal className="mt-9">
          <Swiper modules={[Autoplay]} spaceBetween={14} slidesPerView={1.12} grabCursor autoplay={{ delay: 3400, disableOnInteraction: false, pauseOnMouseEnter: true }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {reasons.map(({ icon: Icon, title, text, tone }) => (
              <SwiperSlide key={title} className="!h-auto">
                <article className="flex h-full min-h-[255px] flex-col rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,.06)] sm:p-6">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tone}`}><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-6 text-lg font-black leading-6 text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <Reveal delay={.08} className="mt-6">
          <div className="relative overflow-hidden rounded-[30px] border border-[#FFDFA8] bg-[linear-gradient(135deg,#FFF8DF_0%,#FFF1E6_52%,#FFF4F8_100%)] p-5 sm:p-7 lg:p-8">
            <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-[#F7A252]/20 blur-3xl" />
            <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-[#D84C7E]/10 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[20px] bg-white text-[#D97706] shadow-sm"><AlertTriangle className="h-6 w-6" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-[#A65B00]">Balanced view · important</p>
                <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">Georgia is not on India&apos;s FMGE-exempt list.</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">Students who intend to practise in India must plan for the applicable FMGE / NExT pathway. Outcomes depend heavily on university choice and how early licensing preparation begins.</p>
              </div>
              <a href="#licensing" className="inline-flex items-center gap-2 text-sm font-black text-[#A65B00]">Understand licensing <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
