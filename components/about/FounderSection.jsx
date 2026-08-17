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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF7FF] py-16 lg:py-20">
      {/* ========================= */}
      {/* Background Elements */}
      {/* ========================= */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#4DA5EC]/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0263CC]/15 blur-[140px]" />
      <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#02A7BB]/10 blur-[100px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg,#0263CC 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Dots */}
      <div className="absolute right-20 top-20 grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />
        ))}
      </div>

      {/* ========================= */}
      {/* Container */}
      {/* ========================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================= */}
        {/* TOP: Heading Section - Full Width */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-14 lg:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0263CC]/15 bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-xl mb-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] text-white">
              <UserRound size={16} />
            </span>
            <span className="font-bold text-sm text-[#0263CC]">Meet Our Founder</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#0F172A] mb-5">
            Driven by a Vision to Make{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              Medical Education Accessible
            </span>{" "}
            Worldwide
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] mb-6" />

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-[#64748B] max-w-3xl mx-auto">
            Our mission is simple yet powerful—to empower aspiring healthcare professionals by providing transparent guidance, quality education pathways, and unwavering support at every step of their journey.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* BOTTOM: Two Columns - Equal Height */}
        {/* ========================================= */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
          
          {/* LEFT: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FounderImageCard />
          </motion.div>

          {/* RIGHT: Only 4 Feature Cards in 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {/* 4 Feature Cards - 2x2 Grid */}
            {features.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}