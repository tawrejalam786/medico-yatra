"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Home,
  Plane,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// ============================================================
// DYNAMIC ICONS
// ============================================================

const ICONS = {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Home,
  Plane,
  ShieldCheck,
  Stethoscope,
  UserRound,
};

function DynamicIcon({
  name,
  className = "h-4 w-4",
  ...props
}) {
  const Icon = ICONS[name];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} {...props} />;
}


// ============================================================
// CARD VARIANTS
// ============================================================

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};


// ============================================================
// COMPONENT
// ============================================================

export default function WhyMedicoYatra({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:pt-5 lg:pb-15">

      {/* ======================================================
          BACKGROUND
      ======================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Main soft gradient */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,99,204,0.08),transparent_38%)]" />

        {/* Left glow */}

        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#0263CC]/[0.06] blur-3xl"
        />

        {/* Right glow */}

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#02A7BB]/[0.055] blur-3xl"
        />

        {/* ==================================================
            PREMIUM SVG ROUTE
        =================================================== */}

        <svg
          className="absolute left-0 top-20 hidden h-[500px] w-full lg:block"
          viewBox="0 0 1440 500"
          fill="none"
          aria-hidden="true"
        >

          <motion.path
            d="
              M-50 350
              C140 250 190 100 370 155
              C520 200 520 390 710 350
              C890 310 860 110 1050 145
              C1190 170 1270 270 1490 160
            "
            stroke="#0263CC"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            whileInView={{
              pathLength: 1,
              opacity: 0.12,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="370"
            cy="155"
            r="5"
            fill="#0263CC"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />

          <motion.circle
            cx="1050"
            cy="145"
            r="5"
            fill="#02A7BB"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
          />

        </svg>

        {/* Dot pattern */}

        <div
          className="absolute right-[8%] top-28 hidden h-32 w-32 opacity-[0.08] lg:block"
          style={{
            backgroundImage:
              "radial-gradient(#0263CC 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />

        <div
          className="absolute bottom-24 left-[7%] hidden h-24 w-24 opacity-[0.06] lg:block"
          style={{
            backgroundImage:
              "radial-gradient(#02A7BB 1px, transparent 1px)",
            backgroundSize: "9px 9px",
          }}
        />

      </div>


      {/* ======================================================
          CONTAINER
      ======================================================= */}

      <div className="mx-auto w-full max-w-[1200px] overflow-hidden px-4 sm:px-6 lg:px-8">

        {/* ====================================================
            SECTION HEADER
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-[#F2F7FF] px-3.5 py-1.5">

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0263CC]/10">

              <DynamicIcon
                name={data.eyebrow.icon}
                className="h-3 w-3 text-[#0263CC]"
              />

            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
              {data.eyebrow.text}
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-[27px] font-extrabold leading-[1.15] tracking-[-0.8px] text-[#071A49] sm:text-[34px] lg:text-[42px]">

            {data.title.prefix}{" "}

            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              {data.title.highlight}
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            {data.description}
          </p>


          {/* Decorative line */}

          <div className="mt-5 flex items-center justify-center gap-1.5">

            <span className="h-1 w-10 rounded-full bg-[#0263CC]" />

            <span className="h-1 w-2 rounded-full bg-[#02A7BB]/40" />

          </div>

        </motion.div>


        {/* ====================================================
            SLIDER HEADER
        ===================================================== */}

        <div className="mt-10 flex items-center justify-between sm:mt-12">

          <div>

            <p className="text-xs font-bold text-[#071A49] sm:text-sm">
              What We Do For You
            </p>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              Explore our complete support journey
            </p>

          </div>


          {/* Navigation */}

          <div className="hidden items-center gap-2 sm:flex">

            <button
              ref={prevRef}
              type="button"
              aria-label="Previous services"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-[#0263CC]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#0263CC]/30
                hover:bg-[#F3F8FF]
                hover:shadow-md
              "
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>


            <button
              ref={nextRef}
              type="button"
              aria-label="Next services"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#0263CC]
                text-white
                shadow-[0_8px_20px_rgba(2,99,204,0.2)]
                transition-all
                duration-300
                hover:bg-[#0759B8]
                hover:shadow-lg
              "
            >
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>


        {/* ====================================================
            SWIPER
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="relative mt-5 sm:mt-6"
        >

          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
            ]}
            spaceBetween={14}
            slidesPerView={1.12}
            speed={700}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".medico-services-pagination",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                prevRef.current;

              swiper.params.navigation.nextEl =
                nextRef.current;
            }}
            breakpoints={{
              375: {
                slidesPerView: 1.15,
                spaceBetween: 14,
              },

              480: {
                slidesPerView: 1.35,
                spaceBetween: 16,
              },

              640: {
                slidesPerView: 2.05,
                spaceBetween: 16,
              },

              768: {
                slidesPerView: 2.35,
                spaceBetween: 18,
              },

              900: {
                slidesPerView: 3.05,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3.35,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 22,
              },

              1400: {
                slidesPerView: 4.25,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >

            {/* =================================================
                JSON SERVICES
            ================================================== */}

           {data.services.map((service, index) => {
  const CARD_STYLES = [
    {
      gradient:
        "linear-gradient(135deg, #0263CC 0%, #0B73D5 48%, #178BE5 100%)",
      iconText: "text-[#0263CC]",
      tagText: "text-[#0263CC]",
      accent: "#0263CC",
    },
    {
      gradient:
        "linear-gradient(135deg, #009E9A 0%, #00B5A9 48%, #02C7B5 100%)",
      iconText: "text-[#009E9A]",
      tagText: "text-[#009E9A]",
      accent: "#009E9A",
    },
    {
      gradient:
        "linear-gradient(135deg, #5B4FE9 0%, #6946E8 48%, #7C3AED 100%)",
      iconText: "text-[#5B4FE9]",
      tagText: "text-[#5B4FE9]",
      accent: "#5B4FE9",
    },
    {
      gradient:
        "linear-gradient(135deg, #F97316 0%, #F45B29 48%, #EF4444 100%)",
      iconText: "text-[#F97316]",
      tagText: "text-[#F97316]",
      accent: "#F97316",
    },
  ];

  const cardStyle = CARD_STYLES[index % CARD_STYLES.length];

  return (
    <SwiperSlide
      key={service.id}
      className="!h-auto"
    >
      <motion.article
        variants={cardVariants}
        style={{
          background: cardStyle.gradient,
        }}
        className="
          group
          relative
          flex
          h-full
          min-h-[270px]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/15
          p-5

          shadow-[0_10px_35px_rgba(15,60,110,0.12)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_20px_45px_rgba(9,33,61,0.20)]

          sm:min-h-[285px]
          sm:p-6
        "
      >
        {/* ================================================
            SMOOTH BACKGROUND TEXTURE
        ================================================= */}

        {/* Top left soft white glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-16
            -top-20
            h-56
            w-56
            rounded-full
            bg-white/20
            blur-[70px]
          "
        />

        {/* Top right soft glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-16
            h-52
            w-52
            rounded-full
            bg-white/12
            blur-[70px]
          "
        />

        {/* Bottom darker blending */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-14
            h-64
            w-64
            rounded-full
            bg-black/10
            blur-[85px]
          "
        />

        {/* Center soft light */}
        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[35%]
            h-40
            w-40
            rounded-full
            bg-white/10
            blur-[65px]
          "
        />

        {/* Overall smooth shine */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-black/5
          "
        />

        {/* Subtle top shine */}
        <div
          className="
            pointer-events-none
            absolute
            left-5
            right-5
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
          "
        />

        {/* ================================================
            NUMBER
        ================================================= */}

        <div
          className="
            absolute
            right-5
            top-5
            z-10
            text-[10px]
            font-extrabold
            tracking-widest
            text-white/40
            transition-colors
            duration-300

            group-hover:text-white/60
          "
        >
          {service.number}
        </div>

        {/* ================================================
            ICON
        ================================================= */}

        <div
          className={`
            relative
            z-10
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl

            bg-white

            ${cardStyle.iconText}

            shadow-[0_7px_20px_rgba(0,0,0,0.10)]
            ring-1
            ring-white/40

            transition-all
            duration-300

            group-hover:scale-105
            group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
          `}
        >
          <DynamicIcon
            name={service.icon}
            className="h-6 w-6"
          />
        </div>

        {/* ================================================
            TAG
        ================================================= */}

        <div className="relative z-10 mt-5">
          <span
            className={`
              inline-flex
              rounded-full
              bg-white
              px-2.5
              py-1
              text-[9px]
              font-bold
              shadow-sm

              ${cardStyle.tagText}
            `}
          >
            {service.tag}
          </span>
        </div>

        {/* ================================================
            TITLE
        ================================================= */}

        <h3
          className="
            relative
            z-10
            mt-3
            pr-7
            text-[16px]
            font-extrabold
            leading-snug
            text-white

            sm:text-[17px]
          "
        >
          {service.title}
        </h3>

        {/* ================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            relative
            z-10
            mt-2
            text-[11px]
            leading-5
            text-white/80

            sm:text-xs
            sm:leading-[1.65]
          "
        >
          {service.description}
        </p>

        {/* ================================================
            BOTTOM
        ================================================= */}

        <div className="relative z-10 mt-auto pt-5">
          <div
            className="
              flex
              items-center
              gap-2
              border-t
              border-white/20
              pt-4
            "
          >
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-white" />

            <span
              className="
                text-[9px]
                font-semibold
                text-white/75

                sm:text-[10px]
              "
            >
              Student-first support
            </span>
          </div>
        </div>

        {/* ================================================
            BOTTOM SHINE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent

            opacity-50
          "
        />
      </motion.article>
    </SwiperSlide>
  );
})}

          </Swiper>


          {/* ==================================================
              MOBILE SWIPE INDICATOR
          =================================================== */}

          {/* <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">

            <span className="h-1.5 w-7 rounded-full bg-[#0263CC]" />

            <span className="text-[9px] font-semibold text-slate-400">
              Swipe to explore
            </span>

            <ArrowRight className="h-3 w-3 text-[#0263CC]" />

          </div> */}


          {/* Pagination */}

          <div className="medico-services-pagination mt-15 flex min-h-3 items-center justify-center gap-1.5" />

        </motion.div>


        {/* ====================================================
            BOTTOM CTA
        ===================================================== */}

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
          className="mt-10 flex justify-center sm:mt-12"
        >

          <Link
            href="/counselling"
            className="
              group
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#0263CC]
              px-5
              text-xs
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(2,99,204,0.2)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0759B8]
              sm:min-h-12
              sm:px-6
              sm:text-sm
            "
          >

            Talk to an Expert

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

          </Link>

        </motion.div>

      </div>


      {/* ======================================================
          BOTTOM SVG WAVE
      ======================================================= */}

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >

        <path
          d="
            M0 55
            C180 80 330 78 500 54
            C670 30 820 24 980 43
            C1140 62 1290 72 1440 38
            V90
            H0
            V55Z
          "
          fill="#F8FBFF"
        />

      </svg>

    </section>
  );
}