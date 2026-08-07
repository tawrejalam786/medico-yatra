"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import FeatureCard from "./whychoose/FeatureCard";
import MobileSlider from "./whychoose/MobileSlider";
import { FEATURES } from "./whychoose/data";

export default function WhyChoose() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 lg:py-5 bg-white">
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#4DA5EC]/10 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-[150px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
          linear-gradient(#0263CC 1px, transparent 1px),
          linear-gradient(90deg,#0263CC 1px, transparent 1px)
        `,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Outer Container */}

        <div className="relative overflow-hidden rounded-[28px] border border-[#0263CC]/8 bg-gradient-to-b from-white to-[#FBFDFF] shadow-[0_20px_60px_rgba(2,99,204,.08)]">

          {/* Decorative Blur */}

          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#4DA5EC]/10 blur-[90px]" />

          <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-[#02A7BB]/10 blur-[110px]" />

          <div className="relative px-5 py-10 md:px-8 lg:px-12 lg:py-14">

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-[30px] font-extrabold tracking-tight text-slate-900 md:text-[38px]">
                Why Choose{" "}
                <span className="text-[#0263CC]">
                  MedicoYatra?
                </span>
              </h2>

              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC]" />
            </motion.div>

            {/* Desktop */}

            <div className="mt-12 hidden lg:grid grid-cols-3 gap-6">

              {FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                  viewport={{ once: true }}
                >
                  <FeatureCard item={item} />
                </motion.div>
              ))}

            </div>

            {/* Tablet */}

            <div className="mt-10 hidden sm:grid lg:hidden grid-cols-2 gap-5">

              {FEATURES.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .5,
                    delay: index * .08,
                  }}
                  viewport={{ once: true }}
                  className={index === 4 ? "sm:col-span-2 max-w-md mx-auto w-full" : ""}
                >
                  <FeatureCard item={item} />
                </motion.div>
              ))}

            </div>

            {/* Mobile */}

            {mounted && (
              <div className="mt-8 sm:hidden">
                <MobileSlider />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}