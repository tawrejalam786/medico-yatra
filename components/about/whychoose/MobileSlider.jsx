"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "./data";

export default function MobileSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1.15}
      centeredSlides
      spaceBetween={18}
      loop
      autoplay={{
        delay: 3500,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        480: {
          slidesPerView: 1.25,
        },
        640: {
          slidesPerView: 2,
        },
      }}
      className="whyChooseSwiper !pb-12"
    >
      {FEATURES.map((item, index) => (
        <SwiperSlide key={index}>
          <FeatureCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}