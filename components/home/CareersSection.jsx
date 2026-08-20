"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const COURSES = [
  {
    id: "mbbs",
    title: "MBBS Abroad",
    shortTitle: "MBBS",
    description:
      "Study MBBS abroad at NMC-recognised universities with complete guidance.",
    image: "/images/mbbs.jpg",
    slug: "/courses/mbbs-abroad",
  },
  {
    id: "nursing",
    title: "Nursing",
    shortTitle: "Nursing",
    description:
      "Explore recognised nursing programs with guidance from admission to career.",
    image: "/images/nursing-new.jpg",
    slug: "/courses/nursing",
  },
  {
    id: "bds",
    title: "BDS Dental",
    shortTitle: "BDS Dental",
    description:
      "Build your dental career with globally recognised BDS programs.",
    image: "/images/Dentistry-BDS.jpg",
    slug: "/courses/bds-dental",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    shortTitle: "Pharmacy",
    description:
      "Explore pharmacy education and career pathways across recognised institutions.",
    image: "/images/young-woman-pharmacist.jpg",
    slug: "/courses/pharmacy",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    shortTitle: "Physiotherapy",
    description:
      "Build a career in rehabilitation and patient-focused physiotherapy.",
    image: "/images/physiotherapist-course.jpg",
    slug: "/courses/physiotherapy-rehab",
  },
  {
    id: "respiratory",
    title: "Respiratory Therapy",
    shortTitle: "Respiratory Therapy",
    description:
      "Explore specialised respiratory care and allied healthcare opportunities.",
    image: "/images/doctor-helping-patient-rehabilitation.jpg",
    slug: "/courses/respiratory-therapy",
  },
  {
    id: "mlt",
    title: "Medical Lab Technology",
    shortTitle: "MLT",
    description:
      "Learn about laboratory-based healthcare careers and diagnostic sciences.",
    image: "/images/labs.jpg",
    slug: "/courses/medical-lab-technology",
  },
  {
    id: "allied-health",
    title: "Allied Health",
    shortTitle: "Allied Health",
    description:
      "Discover diverse healthcare careers beyond traditional medical pathways.",
    image: "/images/alied-ask.jpg",
    slug: "/courses/allied-health",
  },
];

export default function CoursesCarousel() {
  return (
    <section className="py-14 lg:py-16 bg-[#E6F2FF]">
      <div className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-2"
            >
              Healthcare Pathways
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0F172A]"
            >
              One Partner for Your Entire Healthcare Journey
            </motion.h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              className="courses-prev w-10 h-10 rounded-full border border-[#DCE7F2] bg-white flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white transition-all duration-200 shadow-sm"
              aria-label="Previous courses"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              className="courses-next w-10 h-10 rounded-full border border-[#DCE7F2] bg-white flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white transition-all duration-200 shadow-sm"
              aria-label="Next courses"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".courses-prev",
            nextEl: ".courses-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={18}
          slidesPerView={1.15}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="!overflow-visible"
        >
          {COURSES.map((course) => (
            <SwiperSlide key={course.id} className="!h-auto">
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group h-full rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#4DA5EC]/40 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#F1F7FC]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#0263CC] shadow-sm">
                      Healthcare Course
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="font-heading text-lg font-medium text-[#0F172A] mb-2">
                    {course.title}
                  </h3>

                  <p className="font-body text-sm font-light leading-relaxed text-[#64748B] line-clamp-3 min-h-[63px]">
                    {course.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#F1F5F9]">
                    <Link
                      href={course.slug}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#0263CC] group-hover:gap-3 transition-all duration-200"
                    >
                      Explore Course
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-[#0263CC] px-6 py-3 text-sm font-medium text-white hover:bg-[#0255ad] hover:gap-3 transition-all duration-200 shadow-lg shadow-[#0263CC]/15"
          >
            View All Courses
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}