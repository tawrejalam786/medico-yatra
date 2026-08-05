"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Globe,
  Building2,
  User,
} from "lucide-react";

const stats = [
  {
    number: "5+",
    label: "Categories",
    icon: GraduationCap,
  },
  {
    number: "15+",
    label: "Countries",
    icon: Globe,
  },
  {
    number: "100+",
    label: "Universities",
    icon: Building2,
  },
  {
    number: "5000+",
    label: "Students",
    icon: User,
  },
];

export default function Hero() {
  return (
    <section className="relative top-10 overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF6FF] pt-20 pb-12 lg:h-[580px] lg:py-5">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-[120px]" />
      <div className="absolute -bottom-52 right-0 h-[450px] w-[450px] rounded-full bg-[#4DA6FF]/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0263CC 1px, transparent 1px),linear-gradient(to right,#0263CC 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#ffffff 0%,rgba(255,255,255,.96) 35%,rgba(255,255,255,.75) 58%,rgba(255,255,255,.15) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1"
          >
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0263CC] sm:text-sm">
              🌍 Study Medicine Abroad
            </div>

            <h1 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#3B82F6] bg-clip-text text-transparent">
                Medical Courses
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Choose from internationally recognized medical programs and
              discover the perfect career path with expert guidance, trusted
              universities and transparent admissions.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Icon
                        className={`${
                          item.label === "Students"
                            ? "h-7 w-7"
                            : "h-6 w-6"
                        } text-[#0263CC]`}
                      />

                      <span className="text-xl font-bold text-[#0263CC] sm:text-2xl">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-center text-sm font-medium text-slate-600 sm:text-base">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0263CC]/15 to-[#60A5FA]/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="relative h-[300px] w-[260px] sm:h-[420px] sm:w-[330px] md:h-[500px] md:w-[380px] lg:h-[565px] lg:w-[420px]"
              >
                <Image
                  src="/images/courses/course-breadcrumb.png"
                  alt="Medical Student"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}