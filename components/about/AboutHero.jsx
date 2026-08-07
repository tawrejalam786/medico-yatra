"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Plane,
  Globe,
  GraduationCap,
  Users,
  Play,
} from "lucide-react";

export default function AboutHero() {
  const floating = {
    animate: {
      y: [0, -10, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] pt-20 sm:pt-20 lg:pt-22 pb-24 sm:pb-16 lg:pb-20">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0263CC]/10 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#4DA5EC]/20 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0263CC 1px,transparent 1px),linear-gradient(90deg,#0263CC 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4">

        {/* Main Layout */}

        <div className="grid
grid-cols-1
lg:grid-cols-2
gap-10
lg:gap-16
items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            {/* Breadcrumb */}

            <div className="flex items-center text-sm text-slate-500 mb-8">

              <Link href="/" className="hover:text-[#0263CC]">
                Home
              </Link>

              <ChevronRight size={15} className="mx-2" />

              <span className="font-medium text-slate-700">
                About Us
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-[#0F172A]">
              About{" "}
              <span className="bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] bg-clip-text text-transparent">
                MedicoYatra
              </span>
            </h1>

            <div className="mt-6 h-1.5 w-16 rounded-full bg-[#0263CC]" />

            {/* Subtitle */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-10 leading-snug font-bold text-slate-900">
              Empowering Dreams.
              <br />
              Building Careers.
              <br />
              Changing Lives.
            </h2>

            <p className="text-base sm:text-lg leading-8 mt-6 max-w-xl text-slate-600">
              MedicoYatra is a trusted education consultancy dedicated to
              guiding students towards global medical education and successful
              healthcare careers.
            </p>

            {/* Button */}

            <div className="mt-10 ">

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[#0263CC] bg-white px-7 py-4 font-semibold text-[#0263CC] shadow-lg transition-all hover:bg-[#0263CC] hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0263CC] text-white group-hover:bg-white group-hover:text-[#0263CC]">
                  <Play size={16} fill="currentColor" />
                </span>

                Our Story
              </Link>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* Main Blob */}

            <div className="relative w-full max-w-[520px] aspect-[5/6] mx-auto">

              {/* Blob Shape */}

              <div className="absolute inset-0 overflow-hidden rounded-[38%_62%_45%_55%/42%_35%_65%_58%] shadow-2xl">

                <Image
                  src="/images/about/uni.png"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

             
              {/* Floating Card 1 */}

              <motion.div
                {...floating}
                className="absolute left-[-40px] top-12 rounded-3xl bg-white px-6 py-5 shadow-2xl hidden lg:flex"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0263CC]/10">
                    <Globe className="text-[#0263CC]" />
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-slate-900">
                      15+
                    </h4>
                    <p className="text-sm text-slate-500">
                      Countries
                    </p>
                    <p className="text-sm text-slate-500">
                      We Serve
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* Floating Card 2 */}

              <motion.div
                {...floating}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: .8,
                }}
                className="absolute right-[-20px] top-24 rounded-3xl bg-white px-6 py-5 shadow-2xl hidden lg:flex"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0263CC]/10">
                    <Users className="text-[#0263CC]" />
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-slate-900">
                      5000+
                    </h4>
                    <p className="text-sm text-slate-500">
                      Students
                    </p>
                    <p className="text-sm text-slate-500">
                      Guided
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* Floating Card 3 */}

              <motion.div
                {...floating}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1.5,
                }}
                className="absolute right-[-10px] bottom-20 z-25 rounded-3xl bg-white px-6 py-5 shadow-2xl hidden lg:flex"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0263CC]/10">
                    <GraduationCap className="text-[#0263CC]" />
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-slate-900">
                      100+
                    </h4>

                    <p className="text-sm text-slate-500">
                      Universities
                    </p>

                    <p className="text-sm text-slate-500">
                      Partnered
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* Flight Path */}

              <svg
                className="absolute -left-44 top-56 hidden lg:block"
                width="250"
                height="170"
                viewBox="0 0 250 170"
                fill="none"
              >
                <path
                  d="M240 20C180 35 175 125 120 120C60 116 70 70 0 170"
                  stroke="#8DBEFF"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  fill="none"
                />
              </svg>

              {/* Plane */}

              <motion.div
                animate={{
                  x: [-20, 0, -20],
                  y: [0, -12, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute left-[-25px] top-[285px] hidden lg:flex"
              >
                <Plane
                  size={42}
                  className="text-[#0263CC] rotate-12"
                  fill="currentColor"
                />
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}