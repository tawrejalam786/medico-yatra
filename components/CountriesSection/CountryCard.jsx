"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
  faGraduationCap,
  faMoneyBillWave,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function CountryCard({
  country,
  className = "",
  priority = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[32px] ${className}`}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#0263CC]/30 via-transparent to-[#4DA8FF]/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={country.image}
          alt={country.name}
          fill
          priority={priority}
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent transition duration-500 group-hover:from-black/95" />

      {/* Border */}
      <div className="absolute inset-0 rounded-[32px] border border-white/15 group-hover:border-[#4DA8FF]/60 transition" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-7">

        {/* Top */}
        <div className="flex items-start justify-between">

          {/* Flag */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl">
            <Image
              src={country.flag}
              alt={country.name}
              fill
              className="object-center"
            />
          </div>

          {/* Badge */}
          {country.featured && (
            <div className="rounded-full border hidden lg:block border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-xl">
              Most Popular
            </div>
          )}
        </div>

        {/* Bottom */}
        <div>

          <div className="mb-2 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-400 text-sm"
            />
            <span className="text-sm text-white">
              {country.stats.rating}
            </span>
          </div>

          <h3 className="text-medium lg:text-4xl font-black text-white">
            {country.name}
          </h3>

          <p className="mt-2 text-sm max-w-sm text-white/80">
            {country.subtitle}
          </p>

          {/* Stats */}

          {/* <div className="mt-6 grid grid-cols-3 gap-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

              <FontAwesomeIcon
                icon={faHospital}
                className="mb-2 text-[#4DA8FF]"
              />

              <p className="text-lg font-bold text-white">
                {country.stats.universities}
              </p>

              <span className="text-xs text-white/60">
                Universities
              </span>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="mb-2 text-green-400"
              />

              <p className="text-lg font-bold text-white">
                {country.stats.tuition}
              </p>

              <span className="text-xs text-white/60">
                Tuition
              </span>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">

              <FontAwesomeIcon
                icon={faGraduationCap}
                className="mb-2 text-orange-400"
              />

              <p className="text-lg font-bold text-white">
                {country.stats.duration}
              </p>

              <span className="text-xs text-white/60">
                Duration
              </span>

            </div>

          </div> */}

          {/* CTA */}

          {/* <Link
            href={`/study-mbbs-in-${country.slug}`}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-[#0263CC] transition duration-300 group-hover:gap-5"
          >
            Explore

            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link> */}

        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />
    </motion.div>
  );
}