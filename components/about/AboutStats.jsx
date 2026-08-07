"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Building2,
  Users,
  Headphones,
} from "lucide-react";

const stats = [
  {
    number: "5+",
    label: "Years of",
    label2: "Excellence",
    icon: GraduationCap,
    bg: "bg-blue-50",
    color: "text-[#0263CC]",
  },
  {
    number: "15+",
    label: "Countries",
    label2: "We Serve",
    icon: Globe,
    bg: "bg-green-50",
    color: "text-green-500",
  },
  {
    number: "100+",
    label: "Top",
    label2: "Universities",
    icon: Building2,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    number: "5000+",
    label: "Successful",
    label2: "Students",
    icon: Users,
    bg: "bg-violet-50",
    color: "text-violet-500",
  },
  {
    number: "100%",
    label: "Student Support",
    label2: "& Satisfaction",
    icon: Headphones,
    bg: "bg-red-50",
    color: "text-red-500",
  },
];

export default function AboutStats() {
  return (
    <section className="relative -mt-16 z-20 pb-20 px-4 hidden sm:block">

      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[34px] bg-white shadow-[0_20px_70px_rgba(2,99,204,0.10)] border border-[#EAF1FB]"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="group relative flex flex-col lg:flex-row items-center gap-5 px-6 py-8 lg:px-8 lg:py-9"

                >
                  {/* Divider */}

                  {index !== stats.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-slate-200" />
                  )}

                  {/* Icon */}

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${item.bg}
                    transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`${item.color}`}
                      size={34}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}

                  <div className="text-center lg:text-left">

                    <h3 className="text-4xl font-black text-[#0F172A]">
                      {item.number}
                    </h3>

                    <p className="mt-1 text-[15px] text-slate-500">
                      {item.label}
                    </p>

                    <p className="text-[15px] text-slate-500">
                      {item.label2}
                    </p>

                  </div>

                  {/* Hover Glow */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">

                    <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/5 via-transparent to-[#4DA5EC]/10" />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
}