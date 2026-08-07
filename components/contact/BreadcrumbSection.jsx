"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
} from "lucide-react";

import { FaGlobeAmericas } from "react-icons/fa";

export default function BreadcrumbSection({
  title = "Contact Us",
  description = "Helping students achieve their dream of studying medicine abroad through trusted guidance and global opportunities.",
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-22 lg:pb-24">

      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/background/use-svg-as-background-image-particle-strokes.svg')",
        }}
      />

      {/* Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC] via-[#0D7AE8] to-[#02A7BB]" /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Blur */}
      {/* <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/20 blur-[120px]" /> */}
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[140px]" />

      {/* Floating Shapes */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-32 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
      >
        <FaGlobeAmericas className="text-white text-2xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 top-36 hidden lg:flex h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-1/2 bottom-10 hidden lg:block h-6 w-6 rounded-full bg-cyan-300"
      />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Content */}

      <div className="relative z-20 container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm text-white font-medium">
            <FaGlobeAmericas />
            Trusted Medical Education Partner
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            {description}
          </p>

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">

              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-cyan-200 transition"
              >
                <Home size={17} />
                Home
              </Link>

              <ChevronRight
                size={18}
                className="text-white/60"
              />

              <span className="font-semibold text-cyan-300">
                {title}
              </span>

            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Wave */}

      {/* <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
      >
        <path
          fill="white"
          d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,69.3C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg> */}

    </section>
  );
}