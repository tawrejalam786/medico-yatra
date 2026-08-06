"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TeamCard from "./TeamCard";
import { TEAM } from "./teamData";

export default function TeamSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={4}
      spaceBetween={24}
      loop={false}
      speed={600}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="teamSwiper"
    >
      {TEAM.map((member) => (
        <SwiperSlide key={member.id}>
          <TeamCard member={member} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}