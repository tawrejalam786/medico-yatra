"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COURSES, ROWS } from "../../data/compareData";
import {
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

export default function CompareCourses() {
  const activeCourse = "MBBS";

  const renderValue = (course, key) => {
    if (key === "career") {
      return (
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={`text-[15px] ${
                i < course.career
                  ? "text-[#FFB400]"
                  : "text-[#E7E7E7]"
              }`}
            />
          ))}
        </div>
      );
    }

    return (
      <span className="font-semibold text-[15px] text-[#1E293B]">
        {course[key]}
      </span>
    );
  };

  return (
    <section className="relative py-4 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
          overflow-hidden
          rounded-[24px]
          border
          border-[#E8EDF7]
          bg-white
          shadow-[0_15px_45px_rgba(2,99,204,.08)]
        "
        >
          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* LEFT PANEL */}

            <div className="relative flex flex-col justify-between p-8 border-r border-[#EEF2F8] bg-white">

              <div>

                <h2 className="text-[34px] leading-none font-bold text-[#14213D]">
                  Compare
                  
                  Courses
                </h2>

                <p className="mt-5 text-[16px] leading-8 text-[#6B7280]">
                  Not sure which course is right for you?
                  <br />
                  Compare courses side by side.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  className="
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#0263CC]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#0256B3]
                "
                >
                  Compare Now

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-sm"
                  />
                </motion.button>
              </div>

              {/* Illustration */}

              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: .25,
                }}
                className="relative mt-8 flex justify-center"
              >
                <Image
                  src="/images/courses/illutrator-compares.png"
                  alt="Medical Illustration"
                  width={1200}
                  height={160}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* RIGHT TABLE */}

            <div className="overflow-x-auto">

              <table className="min-w-full border-collapse">

                {/* HEADER */}

                <thead>

                  <tr>

                    <th className="w-[170px] border-r border-b border-[#EEF2F8] bg-white"></th>

                    {COURSES.map((course) => (
                      <th
                        key={course.id}
                        className="
                        border-b
                        border-[#EEF2F8]
                        bg-white
                        p-5
                        text-center
                      "
                      >
                        <div
                          className={`
                          rounded-xl
                          py-3
                          text-[16px]
                          font-bold
                          transition-all
                          ${
                            course.id === activeCourse
                              ? "bg-[#0263CC] text-white shadow-md"
                              : "bg-[#F7F9FC] text-[#1E293B]"
                          }
                        `}
                        >
                          {course.id}
                        </div>
                      </th>
                    ))}
                  </tr>

                </thead>

                {/* BODY */}

                <tbody>

                  {ROWS.map((row) => (

                    <tr key={row.key}>

                      <td
                        className="
                        border-r
                        border-b
                        border-[#EEF2F8]
                        px-5
                        py-6
                        text-[15px]
                        font-semibold
                        text-[#475569]
                        bg-[#FCFDFF]
                      "
                      >
                        {row.label}
                      </td>

                      {COURSES.map((course) => (

                        <td
                          key={course.id}
                          className="
                          border-b
                          border-r
                          last:border-r-0
                          border-[#EEF2F8]
                          px-5
                          py-6
                          text-center
                        "
                        >
                          {renderValue(course, row.key)}
                        </td>

                      ))}

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}