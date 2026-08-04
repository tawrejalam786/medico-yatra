"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import CountryCard from "../CountriesSection/CountryCard";
import countries from "../../data/countriesData";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function CountriesSection() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-[#F8FBFF] py-28"
        >
            {/* Mouse Spotlight */}
            <div
                className="pointer-events-none fixed z-0 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px] transition-all duration-300"
                style={{
                    left: mousePosition.x - 210,
                    top: mousePosition.y - 210,
                    background:
                        "radial-gradient(circle, #4DA8FF55 0%, transparent 70%)",
                }}
            />

            {/* Background Blur */}
            <div className="absolute left-[-200px] top-0 h-[520px] w-[520px] rounded-full bg-[#4DA8FF]/20 blur-[140px]" />

            <div className="absolute right-[-150px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#0263CC]/20 blur-[130px]" />

            {/* Floating Elements */}
            <div className="absolute left-20 top-32 h-5 w-5 rounded-full bg-[#4DA8FF]/40 animate-pulse" />

            <div className="absolute right-32 top-56 h-7 w-7 rounded-full bg-[#0263CC]/20 animate-pulse delay-300" />

            <div className="absolute bottom-32 left-1/3 h-10 w-10 rounded-full border border-[#0263CC]/10 bg-white/40 backdrop-blur-xl" />

            <div className="absolute bottom-20 right-20 h-16 w-16 rounded-full border border-white/40 bg-white/30 backdrop-blur-2xl" />

            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0263CC]/10 to-transparent" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-5 py-2 shadow-sm">
                        <FontAwesomeIcon
                            icon={faGlobe}
                            className="text-[#0263CC]"
                        />

                        <span className="text-sm font-semibold text-[#0263CC]">
                            Explore Destinations
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
                        Choose Your

                        <span className="block bg-gradient-to-r from-[#0263CC] to-[#4DA8FF] bg-clip-text text-transparent">
                            MBBS Destination
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Explore globally recognized countries offering affordable
                        medical education, NMC-approved universities and world-class
                        clinical exposure.
                    </p>
                </motion.div>

             <div className="mx-auto my-14 h-px w-52 bg-gradient-to-r from-transparent via-[#0263CC]/30 to-transparent" />

                {/* Bento Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid auto-rows-[250px] grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8 xl:grid-cols-4"
                >
                    {/* Russia */}
                    <CountryCard
                        country={countries[0]}
                        className="md:row-span-2"
                        priority
                    />

                    {/* Kazakhstan */}
                    <CountryCard
                        country={countries[1]}
                        className="md:col-span-1 xl:col-span-2"
                    />

                    {/* Georgia */}
                    <CountryCard
                        country={countries[2]}
                        className="md:row-span-2"
                    />

                    {/* Kyrgyzstan */}
                    <CountryCard country={countries[4]} />

                    {/* Kyrgyzstan */}
                    <CountryCard country={countries[6]} />

                    {/* Uzbekistan */}
                    <CountryCard
                        country={countries[3]}
                        className="xl:col-span-2"
                    />

                    {/* Philippines */}
                    <CountryCard
                        country={countries[5]}
                        className="xl:col-span-2"
                    />
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center justify-center"
                >
                    {[...Array(10)].map((_, i) => (
  <motion.div
    key={i}
    animate={{
      y: [0, -25, 0],
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      repeat: Infinity,
      duration: 4 + i,
      delay: i * 0.5,
    }}
    className="absolute rounded-full bg-[#0263CC]/20"
    style={{
      width: 6 + i * 2,
      height: 6 + i * 2,
      left: `${8 + i * 9}%`,
      top: `${15 + (i % 5) * 18}%`,
    }}
  />
))}
                    <div className="relative overflow-hidden rounded-[36px] border border-[#0263CC]/10 bg-white px-12 py-12 shadow-[0_30px_80px_rgba(2,99,204,.12)]">
                        <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#4DA8FF]/20 blur-[90px]" />

                        <motion.div
                            animate={{
                                y: [-40, 40, -40],
                                x: [-20, 20, -20],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "easeInOut",
                            }}
                            className="absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4DA8FF]/10 blur-[180px]"
                        />
                        <h3 className="text-4xl font-black">
                            Not Sure Which Country Fits You?
                        </h3>

                        <p className="mt-5 max-w-2xl text-lg text-gray-600">
                            Compare tuition fees, university rankings,
                            living expenses and admission requirements
                            to choose the best destination.
                        </p>

                        <Link
                            href="/compare-countries"
                            className="group mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA8FF] px-8 py-4 font-semibold text-white"
                        >
                            Compare Countries

                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-3 transition group-hover:translate-x-1"
                            />
                        </Link>
                
            </div>
        </motion.div>
      </div >
   </motion.section >
  );
}