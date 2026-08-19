"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

/*
|--------------------------------------------------------------------------
| TEAM DATA
|--------------------------------------------------------------------------
| Replace these values with your REAL team information.
|--------------------------------------------------------------------------
*/

const teamMembers = [
  {
    id: 1,
    name: "Kashif Qamar Siddiqui",
    role: "Founder & Director",
    line: "Building a healthcare guidance journey around honesty, clarity and long-term support.",
    image: "/images/team/founder.png",
    featured: true,
  },

  {
    id: 2,
    name: "Aashish Khanna",
    role: "Senior Healthcare Counsellor",
    line: "Helping students understand their options before they make an important decision.",
    image: "/images/team/counsellor.png",
  },

  {
    id: 3,
    name: "Parvez Alam",
    role: "FMGE / NExT Academic Mentor",
    line: "Supporting students with the academic side of their healthcare journey.",
    image: "/images/team/academic-mentor.png",
  },

  {
    id: 4,
    name: "Yogesh Choudhary",
    role: "Admissions & Documentation Lead",
    line: "Keeping the admission process clear, organised and easier to navigate.",
    image: "/images/team/admission.png",
  },

  {
    id: 5,
    name: "Ankur Gupta",
    role: "Student Support",
    line: "Being the person students and families can reach when they need help.",
    image: "/images/team/counsellor.png",
  },
];

export default function OurTeam() {
  const founder = teamMembers.find((member) => member.featured);

  const team = teamMembers.filter(
    (member) => !member.featured
  );

  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[420px] w-[420px] rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[-180px] h-[450px] w-[450px] rounded-full bg-[#02A7BB]/6 blur-[130px]" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"
        >
          {/* LEFT */}

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
                <Users size={17} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0263CC]">
                Our Team
              </span>
            </div>

            <h2 className="text-[40px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#09213d] sm:text-[50px] lg:text-[60px]">
              Real people.
              <br />

              <span className="text-[#0263CC]">
                Real guidance.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div>
            <p className="max-w-[680px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
              Behind every conversation is a person who understands that
              choosing a healthcare career is a serious decision. Our team is
              here to answer questions, explain the options and stay connected
              throughout the journey.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                People you can actually reach
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FEATURED FOUNDER
        ======================================================== */}

        {founder && (
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative mt-14 overflow-hidden rounded-[32px] bg-[#071e37] sm:mt-18 lg:mt-20"
          >
            {/* Background glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#0263CC]/25 blur-[100px]" />

            <div className="pointer-events-none absolute bottom-[-150px] left-[25%] h-[300px] w-[300px] rounded-full bg-[#02A7BB]/10 blur-[100px]" />

            {/* Grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
                `,
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* =================================================
                  FOUNDER IMAGE
              ================================================== */}

              <div className="relative min-h-[400px] overflow-hidden sm:min-h-[480px] lg:min-h-[590px]">

                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Image gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#071e37] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#071e37]" />

                {/* Founder badge */}

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-xl sm:bottom-7 sm:left-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#69dce5]">
                    Leadership
                  </p>

                  <p className="mt-1 text-xs font-medium text-white/85">
                    Founder & Director
                  </p>
                </div>
              </div>

              {/* =================================================
                  FOUNDER CONTENT
              ================================================== */}

              <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-14">

                <div className="max-w-[570px]">

                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#02A7BB]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#69dce5]">
                      Meet the person behind the journey
                    </span>
                  </div>

                  <h3 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[43px]">
                    {founder.name}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-[#69dce5]">
                    {founder.role}
                  </p>

                  <p className="mt-7 text-[15px] leading-7 text-white/55 sm:text-[16px] sm:leading-8">
                    {founder.line}
                  </p>

                  {/* Founder philosophy */}

                  <div className="mt-8 border-l border-[#02A7BB]/40 pl-5">
                    <p className="text-[13px] italic leading-6 text-white/45">
                      “The goal is not to push someone toward a decision.
                      It is to help them understand the decision well enough
                      to make it with confidence.”
                    </p>
                  </div>

                  {/* Actions */}

                  <div className="mt-9 flex flex-wrap items-center gap-3">

                    <Link
                     href="/contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#09213d] transition-all hover:bg-[#69dce5]"
                    >
                      Talk to our team

                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <FontAwesomeIcon icon={faSquareLinkedin} size={15} />
                     </Link>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =======================================================
            TEAM INTRO
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 flex flex-col justify-between gap-5 sm:mt-16 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
              The people you meet
            </p>

            <h3 className="mt-2 text-[26px] font-semibold tracking-[-0.03em] text-[#09213d] sm:text-[31px]">
              Different roles. One responsibility.
            </h3>
          </div>

          <p className="max-w-[400px] text-sm leading-6 text-slate-400 sm:text-right">
            Making your healthcare-career journey easier to understand and
            easier to navigate.
          </p>
        </motion.div>

        {/* =======================================================
            TEAM SWIPER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-8"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            grabCursor={true}
            speed={700}
            loop={team.length > 4}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.35,
                spaceBetween: 16,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="team-swiper !pb-12"
          >
            {team.map((member, index) => (
              <SwiperSlide
                key={member.id}
                className="!h-auto"
              >
                <TeamMemberCard
                  member={member}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* =======================================================
            TEAM PRINCIPLE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-5 flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-[#f8fbff] p-5 sm:flex-row sm:items-center sm:p-6"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0263CC] shadow-sm">
            <MessageCircle size={18} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-[#09213d]">
              You should always know who you're talking to.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              That's why we keep our team human, approachable and accountable.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0263CC]">
            <CheckCircle2 size={14} />
            Real people
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SWIPER CUSTOM CSS
      ========================================================== */}

      <style jsx global>{`
        .team-swiper {
          width: 100%;
          overflow: visible !important;
        }

        .team-swiper .swiper-slide {
          height: auto;
        }

        .team-swiper .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .team-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          margin: 0 !important;
          border-radius: 999px;
          opacity: 1;
          background: #d7e2ec;
          transition: all 0.3s ease;
        }

        .team-swiper .swiper-pagination-bullet-active {
          width: 22px;
          background: #0263cc;
        }

        @media (max-width: 639px) {
          .team-swiper {
            margin-right: -20px;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .team-swiper {
            margin-right: -32px;
          }
        }
      `}</style>
    </section>
  );
}

/* ===============================================================
   TEAM MEMBER CARD
================================================================ */

function TeamMemberCard({ member, index }) {
  return (
    <article
      className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(9,33,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0263CC]/15 hover:shadow-[0_20px_45px_rgba(2,99,204,0.08)]"
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative aspect-[1/1.05] overflow-hidden bg-[#edf4fa]">

        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

        {/* Number */}

        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/10 text-[9px] font-bold text-white backdrop-blur-md">
          0{index + 2}
        </div>

        {/* Hover action */}

        <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#0263CC] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="flex min-h-[155px] flex-col p-5">

        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#02A7BB]">
          {member.role}
        </p>

        <h4 className="mt-2 text-[18px] font-semibold tracking-[-0.025em] text-[#09213d]">
          {member.name}
        </h4>

        <p className="mt-2.5 line-clamp-3 text-xs leading-5 text-slate-500">
          {member.line}
        </p>

        {/* Bottom line */}

        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">

            <span className="h-px flex-1 bg-slate-100 transition-colors group-hover:bg-[#0263CC]/15" />

            <span className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-colors group-hover:bg-[#02A7BB]" />

          </div>
        </div>
      </div>
    </article>
  );
}