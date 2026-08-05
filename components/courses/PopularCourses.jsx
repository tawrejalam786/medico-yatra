"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/coursesData";

export default function PopularCourses() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="relative overflow-hidden py-20 lg:py-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFF] to-white" />

            <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-[#0263CC]/5 blur-[120px]" />

            <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#60A5FA]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center justify-between">
                        {/* Left */}
                        <div className="flex items-center gap-5">
                            <div className="hidden h-px w-20 bg-gradient-to-r from-transparent via-[#0263CC] to-transparent md:block" />

                            <div>
                                <span className="text-sm font-semibold uppercase tracking-[4px] text-[#0263CC]">
                                    Explore
                                </span>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
                                    Popular Medical Courses
                                </h2>

                                <p className="mt-3 max-w-2xl text-slate-500">
                                    Explore internationally recognized healthcare
                                    programs and choose the perfect career path for
                                    your future.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="hidden items-center gap-3 lg:flex">
                            <button
                                ref={prevRef}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0263CC] hover:bg-[#0263CC]"
                            >
                                <ChevronLeft
                                    className="text-slate-700 transition group-hover:text-white"
                                    size={20}
                                />
                            </button>

                            <button
                                ref={nextRef}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0263CC] hover:bg-[#0263CC]"
                            >
                                <ChevronRight
                                    className="text-slate-700 transition group-hover:text-white"
                                    size={20}
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;

                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },

                        480: {
                            slidesPerView: 1.3,
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
                    className="overflow-visible"
                >
                    {courses.map((course, index) => (
                        <SwiperSlide key={course.id}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * .08,
                                    duration: .5,
                                }}
                            >
                                <CourseCard
                                    course={course}
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Mobile Navigation */}
                <div className="mt-10 flex items-center justify-center gap-4 lg:hidden">
                    <button
                        ref={prevRef}
                        aria-label="Previous Courses"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition-all duration-300 hover:border-[#0263CC] hover:bg-[#0263CC]"
                    >
                        <ChevronLeft
                            size={18}
                            className="text-slate-700 transition group-hover:text-white"
                        />
                    </button>

                    <button
                        ref={nextRef}
                        aria-label="Next Courses"
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition-all duration-300 hover:border-[#0263CC] hover:bg-[#0263CC]"
                    >
                        <ChevronRight
                            size={18}
                            className="text-slate-700 transition group-hover:text-white"
                        />
                    </button>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}