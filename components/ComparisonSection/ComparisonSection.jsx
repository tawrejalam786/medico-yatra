"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import BackgroundGlow from "./BackgroundGlow";
import ComparisonCard from "./ComparisonCard";
import CTASection from "./CTASection";
import comparisonData from "../../data/comparisonData";

import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-[#071321] py-10">
      <BackgroundGlow />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-center text-xs font-semibold tracking-[.25em] text-cyan-300 backdrop-blur-xl lg:text-sm lg:uppercase">
            Trusted by 5000+ Medical Aspirants
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-7xl lg:text-5xl">
            Beyond Admissions.
            <br />
            <span className="text-[#4DA5EC]">
              We Build Medical Careers.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-body text-lg font-light leading-8 text-slate-400">
            Most consultants disappear after your admission letter. We stay
            with you through licensing exams, career planning, and your journey
            to becoming a successful healthcare professional.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {[
            ["5000+", "Students Guided"],
            ["98%", "Visa Success"],
            ["20+", "Countries"],
            ["100%", "Transparency"],
          ].map((item) => (
            <div
              key={item[0]}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 md:p-8"
            >
              <div className="font-heading text-3xl text-white md:text-5xl">
                {item[0]}
              </div>

              <div className="mt-3 font-body text-sm font-light text-slate-400 md:text-base">
                {item[1]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="comparison-swiper pb-12"
          >
            {/* Agent Card */}
            <SwiperSlide className="h-auto">
              <ComparisonCard
                title="A Typical Admission Agent"
                color="red"
                icon={faCircleXmark}
                data={comparisonData.agent}
              />
            </SwiperSlide>

            {/* Medico Yatra Card */}
            <SwiperSlide className="h-auto">
              <ComparisonCard
                title="Medico Yatra"
                color="blue"
                icon={faCircleCheck}
                data={comparisonData.medico}
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* CTA */}
        <CTASection />

      </div>

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .comparison-swiper .swiper-pagination {
          bottom: 0;
        }

        .comparison-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          opacity: 0.4;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        .comparison-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          opacity: 1;
          background: #4da5ec;
        }
      `}</style>
    </section>
  );
}

export default ComparisonSection;