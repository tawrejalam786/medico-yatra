"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Clock3,
  Globe2,
  GraduationCap,
} from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-[#0263CC]/20 hover:shadow-[0_20px_60px_rgba(2,99,204,.15)]"
    >
      {/* Image */}
     <div className="">
           <div className="relative overflow-hidden">
        <div className="relative h-[215px] w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute z-50 inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

       
        </div>
 {/* Floating Icon */}
        <div
          className="absolute top-35 z-50 bottom-0 left-6 translate-y-1/2
          flex h-16 w-16 items-center justify-center
          rounded-full border-[5px] border-white bg-white shadow-xl"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{
              backgroundColor: course.iconBg,
            }}
          >
            <course.icon
              size={24}
              color={course.iconColor}
              strokeWidth={2}
            />
          </div>
      </div>
     </div>

      {/* Content */}
      <div className="px-6 pb-2 pt-8">
        {/* Title */}
        <h3 className="text-[20px] font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#0263CC]">
          {course.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-slate-500">
          {course.subtitle}
        </p>

        {/* Details */}
        <div className="mt-2 space-y-4">
          {/* Duration */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock3
                size={17}
                strokeWidth={2}
              />

              <span className="text-sm">
                Duration
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {course.duration}
            </span>
          </div>

          {/* Eligibility */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <GraduationCap
                size={17}
                strokeWidth={2}
              />

              <span className="text-sm">
                Eligibility
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {course.eligibility}
            </span>
          </div>

          {/* Countries */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Globe2
                size={17}
                strokeWidth={2}
              />

              <span className="text-sm">
                Top Countries
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900">
              {course.countries}
            </span>
          </div>
        </div>
                {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* CTA */}
        <Link
          href={course.href || "#"}
          className="group/button relative flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0263CC] font-semibold text-white transition-all duration-300 hover:shadow-[0_15px_35px_rgba(2,99,204,.35)]"
        >
          {/* Shine Effect */}
          <span
            className="
              absolute
              inset-y-0
              -left-20
              w-16
              -skew-x-12
              bg-white/30
              blur-sm
              transition-all
              duration-700
              group-hover/button:left-[120%]
            "
          />

          <span className="relative flex items-center gap-2">
            Explore Course

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}