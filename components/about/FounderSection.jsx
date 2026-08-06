"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserRound,
  GraduationCap,
  Globe,
  ShieldCheck,
  Target,
  Send,
} from "lucide-react";

import FounderImageCard from "./founder/FounderImageCard";
import FeatureCard from "./founder/FeatureCard";
import SignatureCard from "./founder/SignatureCard";

const features = [
  {
    icon: UserRound,
    title: "A Student-First Vision",
    description:
      "Inspired by the belief that every aspiring doctor deserves honest guidance and limitless opportunities to succeed.",
    color: "from-[#0263CC] to-[#4DA5EC]",
  },
  {
    icon: Globe,
    title: "International Reach",
    description:
      "Connecting students with world-class universities through trusted global collaborations and years of experience.",
    color: "from-[#02A7BB] to-[#4DA5EC]",
  },
  {
    icon: ShieldCheck,
    title: "Leading with Integrity",
    description:
      "Transparency, ethics, and trust form the foundation of every decision and every student relationship.",
    color: "from-[#0263CC] to-[#02A7BB]",
  },
  {
    icon: Target,
    title: "Building Future Doctors",
    description:
      "Focused on empowering students with the confidence, support, and direction needed for a successful medical career.",
    color: "from-[#02A7BB] to-[#0263CC]",
  },
];

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF7FF] py-20 lg:py-10">
      {/* ========================= */}
      {/* Background Blur */}
      {/* ========================= */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#4DA5EC]/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0263CC]/15 blur-[140px]" />

      <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#02A7BB]/10 blur-[100px]" />

      {/* ========================= */}
      {/* Grid */}
      {/* ========================= */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(#0263CC 1px, transparent 1px),
          linear-gradient(90deg,#0263CC 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Curves */}

      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <path
          d="M0 120C250 50 350 320 720 180C1020 70 1180 0 1440 130"
          stroke="#0263CC"
          strokeWidth="1.4"
        />

        <path
          d="M100 880C400 650 850 980 1400 720"
          stroke="#4DA5EC"
          strokeWidth="1.2"
        />
      </svg>

      {/* dots */}

      <div className="absolute right-20 top-20 grid grid-cols-4 gap-2 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#0263CC]"
          />
        ))}
      </div>

      {/* ========================= */}
      {/* Container */}
      {/* ========================= */}

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ========================================= */}
          {/* LEFT */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <FounderImageCard />
          </motion.div>

          {/* ========================================= */}
          {/* RIGHT */}
          {/* ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] text-white">
                <UserRound size={16} />
              </span>

              <span className="font-semibold text-[#0263CC]">
                Meet Our Founder
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-3xl font-black leading-tight text-slate-900 lg:text-[35px]">
              Driven by a Vision to
              <br />
              Make Medical Education
              <br />

              <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
                Accessible Worldwide.
              </span>
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC]" />

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Our mission is simple yet powerful—to empower aspiring
              healthcare professionals by providing transparent guidance,
              quality education pathways, and unwavering support at every
              step of their journey.
            </p>

            {/* Features */}

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  color={item.color}
                />
              ))}
            </div>

            {/* Signature */}

            {/* <div className="mt-10">
              <SignatureCard />
            </div> */}

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] px-8 py-4 font-semibold text-white shadow-[0_20px_40px_rgba(2,99,204,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(2,99,204,.40)]"
              >
                Read Story

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              {/* <Link
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl border border-[#0263CC]/20 bg-white/80 px-8 py-4 font-semibold text-[#0263CC] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0263CC] hover:bg-[#0263CC] hover:text-white"
              >
                Connect

                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}