"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Check,
  Globe,
  GraduationCap,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

export default function CTASection() {
  const features = [
    "Personalized Course Recommendation",
    "University Shortlisting",
    "Admission & Visa Guidance",
    "100% Free Counselling",
  ];

  return (
    <section className="py-10 lg:py-5 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#F7FAFF] via-[#EEF5FF] to-[#F8FBFF]">

          {/* Background Blur */}
          <div className="absolute -top-20 left-20 h-60 w-60 rounded-full bg-blue-200/30 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-300/20 blur-[130px]" />

          <div className="grid lg:grid-cols-2 gap-10 items-center px-8 md:px-12 py-12 lg:py-16 relative z-10">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[#0263CC] font-semibold mb-5">

                <FontAwesomeIcon
                  icon={faStethoscope}
                  className="text-[#0263CC]"
                />

                Medical Career Support
              </div>

              <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-slate-900">

                Need Expert
                <span className="text-[#0263CC]">
                  {" "}Guidance?
                </span>

              </h2>

              <p className="text-slate-600 mt-5 leading-8 max-w-xl">
                Our experienced counselors help you choose the perfect
                university and course that matches your career goals,
                budget and dream destination.
              </p>

              <div className="mt-8 space-y-4">

                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">

                      <Check
                        className="text-[#0263CC]"
                        size={16}
                      />

                    </div>

                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: .95 }}
                className="mt-10"
              >

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0263CC] px-7 py-4 text-white font-semibold shadow-xl hover:shadow-blue-300 transition-all"
                >
                  Book Free Counselling

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </Link>

              </motion.div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="relative flex justify-center items-center min-h-[520px]"
            >

              {/* Circle */}

              <div className="absolute h-[440px] w-[440px] rounded-full border-[16px] border-blue-500/20" />

              {/* Dot Pattern */}

              <div
                className="absolute h-[440px] w-[440px] rounded-full opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#0263CC 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />

              {/* Doctor */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="relative z-10"
              >

                <Image
                  src="/images/courses/cta2.png"
                  width={700}
                  height={550}
                  alt="doctor"
                  priority
                />

              </motion.div>

              {/* Card 1 */}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .2 }}
                className="absolute -left-5 lg:left-0 top-5 lg:top-12 bg-white rounded-2xl shadow-xl p-2 lg:p-5 w-[140px] lg:w-[190px]"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">

                    <Users className="text-[#0263CC]" />

                  </div>

                  <div>

                    <h4 className="text-lg lg:text-3xl font-bold text-[#0263CC]">
                      5000+
                    </h4>

                    <p className="text-sm text-slate-500">
                      Students Guided
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* Card 2 */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: .4 }}
                className="absolute z-50 left-10 bottom-20 bg-white rounded-2xl shadow-xl p-5 w-[190px]"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">

                    <Building2 className="text-green-600" />

                  </div>

                  <div>

                    <h4 className="text-3xl font-bold text-[#0263CC]">
                      100+
                    </h4>

                    <p className="text-sm text-slate-500">
                      Universities Partnered
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* Card 3 */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: .6 }}
                className="absolute -right-5 lg:right-0 -top-3 lg:top-12 bg-white rounded-2xl shadow-xl p-3  lg:p-5 w-[150px] lg:w-[170px]"
              >

                <div className="flex items-center gap-4">

                  <div className="h-6 w-6 lg:h-12  lg:w-12 rounded-xl bg-blue-50 flex items-center justify-center">

                    <Globe className="text-[#0263CC]" />

                  </div>

                  <div>

                    <h4 className="text-sm lg:text-3xl font-bold text-[#0263CC]">
                      15+
                    </h4>

                    <p className="text-sm text-slate-500">
                      Countries
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}