"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  SendHorizontal,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import ContactInfoCard from "./ContactInfoCard";

/* ========================================================= */
/* CHANGE ONLY THIS IMAGE PATH                               */
/* ========================================================= */

const formSideImage = "/images/contact/contact-form-student.png";

const contactData = [
  {
    icon: PhoneCall,
    title: "Call Us",
    value: "+91 98974 44550",
    subtitle: "Mon - Sat • 9:00 AM - 7:00 PM",
    color: "from-[#0263CC] to-[#4DA5EC]",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@medicoyatra.com",
    subtitle: "Usually replies within 24 hours",
    color: "from-[#02A7BB] to-[#4DA5EC]",
    bg: "bg-cyan-50",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 98974 44550",
    subtitle: "Fastest response available",
    color: "from-green-500 to-emerald-400",
    bg: "bg-green-50",
    whatsapp: true,
  },
  {
    icon: MapPin,
    title: "Visit Office",
    value: "Sector-62, Noida",
    subtitle: "Uttar Pradesh, India",
    color: "from-[#0263CC] to-[#02A7BB]",
    bg: "bg-indigo-50",
  },
];

const floating = {
  animate: {
    y: [0, -18, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ContactSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FBFF]
        pt-14
        pb-24
        lg:py-10
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          -top-32
          left-1/2
          h-[350px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-[#0263CC]/15
          via-[#4DA5EC]/20
          to-[#02A7BB]/15
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          top-24
          -left-20
          h-72
          w-72
          rounded-full
          bg-[#0263CC]/8
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          top-40
          -right-20
          h-72
          w-72
          rounded-full
          bg-[#02A7BB]/10
          blur-[100px]
        "
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0263CC 1px,transparent 1px),
            linear-gradient(to bottom,#0263CC 1px,transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px),linear-gradient(90deg,#0263CC 1px,transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Floating glow */}

        <motion.div
          {...floating}
          className="
            absolute
            -left-24
            top-10
            h-72
            w-72
            rounded-full
            bg-[#4DA5EC]/30
            blur-[90px]
          "
        />

        <motion.div
          {...floating}
          className="
            absolute
            right-0
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#02A7BB]/20
            blur-[120px]
          "
        />

        {/* Rotating ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#0263CC]/10
          "
        />
      </div>

      {/* ====================================================== */}
      {/* CONTAINER */}
      {/* ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ====================================================== */}
        {/* HEADING */}
        {/* ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          {/* Badge */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0263CC]/20
              bg-white
              px-5
              py-2
              shadow-sm
            "
          >
            <Sparkles className="h-4 w-4 text-[#0263CC]" />

            <span className="text-sm font-semibold text-[#0263CC]">
              CONTACT US
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              md:text-5xl
            "
          >
            Let's Start Your

            <span
              className="
                block
                bg-gradient-to-r
                from-[#0263CC]
                via-[#4DA5EC]
                to-[#02A7BB]
                bg-clip-text
                text-transparent
              "
            >
              Medical Journey
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Have questions about studying MBBS abroad? Our counselors are
            available to guide you every step of the way.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* MAIN LAYOUT */}
        {/* ====================================================== */}

        <div
          className="
            grid
            min-w-0
            gap-8
            xl:grid-cols-[1.45fr_.95fr_.72fr]
          "
        >
          {/* ==================================================== */}
          {/* LEFT CONTACT FORM */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-[34px]
              border
              border-white/70
              bg-gradient-to-br
              from-[#0263CC]
              via-[#0A5FD8]
              to-[#014AA5]
              p-[1px]
              shadow-[0_40px_80px_rgba(2,99,204,.20)]
            "
          >
            {/* INNER FORM CARD */}

            <div
              className="
                relative
                min-h-full
                w-full
                min-w-0
                overflow-hidden
                rounded-[33px]
                bg-gradient-to-br
                from-[#0263CC]
                via-[#0A5FD8]
                to-[#0253B8]
                p-8
                max-[425px]:p-5
                lg:p-10
              "
            >
              {/* ================================================= */}
              {/* IMAGE BACKGROUND */}
              {/* ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  z-[1]
                  h-[380px]
                  overflow-hidden
                  rounded-b-[33px]
                  sm:h-[430px]
                  lg:h-[480px]
                "
              >
                <img
                  src={formSideImage}
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    opacity-70
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#012D5C]/15
                    via-[#0263CC]/30
                    to-[#0263CC]/95
                  "
                />

                {/* Bottom fade */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-2/3
                    bg-gradient-to-t
                    from-[#012D5C]/10
                    to-transparent
                  "
                />
              </div>

              {/* ================================================= */}
              {/* DECORATIVE RING */}
              {/* ================================================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  z-[2]
                  h-52
                  w-52
                  rounded-full
                  border
                  border-white/10
                "
              />

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  left-10
                  z-[2]
                  h-28
                  w-28
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              {/* ================================================= */}
              {/* FORM CONTENT */}
              {/* ================================================= */}

              <div className="relative z-10">
                {/* FORM HEADER */}

                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-white" />

                    <h3
                      className="
                        text-3xl
                        font-bold
                        leading-tight
                        text-white
                        max-[425px]:text-2xl
                      "
                    >
                      Send Us a Message
                    </h3>
                  </div>

                  <div className="h-1 w-20 rounded-full bg-white" />

                  <p
                    className="
                      mt-5
                      text-base
                      leading-6
                      text-white/80
                      max-[425px]:text-sm
                    "
                  >
                    Fill out the form and our admission experts will contact
                    you shortly.
                  </p>
                </div>

                {/* ================================================= */}
                {/* FORM */}
                {/* ================================================= */}

                <form className="space-y-5">
                  {/* NAME + EMAIL */}

                  <div
                    className="
                      grid
                      min-w-0
                      gap-5
                      md:grid-cols-2
                    "
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="
                        h-14
                        w-full
                        min-w-0
                        rounded-2xl
                        border
                        border-white/20
                        bg-white
                        px-5
                        text-slate-700
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:scale-[1.02]
                        focus:border-white
                      "
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="
                        h-14
                        w-full
                        min-w-0
                        rounded-2xl
                        border
                        border-white/20
                        bg-white
                        px-5
                        text-slate-700
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:scale-[1.02]
                        focus:border-white
                      "
                    />
                  </div>

                  {/* PHONE + COURSE */}

                  <div
                    className="
                      grid
                      min-w-0
                      gap-5
                      md:grid-cols-2
                    "
                  >
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="
                        h-14
                        w-full
                        min-w-0
                        rounded-2xl
                        border
                        border-white/20
                        bg-white
                        px-5
                        text-slate-700
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:scale-[1.02]
                        focus:border-white
                      "
                    />

                    <select
                      className="
                        h-14
                        w-full
                        min-w-0
                        rounded-2xl
                        border
                        border-white/20
                        bg-white
                        px-5
                        text-slate-600
                        outline-none
                      "
                    >
                      <option>Select Course</option>
                      <option>MBBS</option>
                      <option>BDS</option>
                      <option>Nursing</option>
                      <option>Pharmacy</option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <textarea
                    rows={7}
                    placeholder="Write your message..."
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-white/20
                      bg-white
                      p-5
                      text-slate-700
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:scale-[1.01]
                    "
                  />

                  {/* SUBMIT BUTTON */}

                  <button
                    type="submit"
                    className="
                      group
                      flex
                      h-16
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-white
                      text-lg
                      font-bold
                      text-[#0263CC]
                      shadow-lg
                      transition-all
                      hover:scale-[1.02]
                      hover:shadow-xl
                    "
                  >
                    Send Message

                    <SendHorizontal
                      className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </button>
                </form>

                {/* ================================================= */}
                {/* PRIVACY + SOCIAL */}
                {/* ================================================= */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {/* Privacy */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/80
                    "
                  >
                    <ShieldCheck className="h-4 w-4" />

                    <span>We respect your privacy</span>
                  </div>

                  {/* Social */}

                  <div className="flex items-center gap-3">
                    {/* Facebook */}

                    <a
                      href="#"
                      aria-label="Facebook"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        text-white
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-white
                        hover:text-[#0263CC]
                      "
                    >
                      <FaFacebookF />
                    </a>

                    {/* Instagram */}

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        text-white
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-white
                        hover:text-[#0263CC]
                      "
                    >
                      <FaInstagram />
                    </a>

                    {/* LinkedIn */}

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        text-white
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-white
                        hover:text-[#0263CC]
                      "
                    >
                      <FaLinkedinIn />
                    </a>

                    {/* WhatsApp */}

                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        text-white
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-white
                        hover:text-[#0263CC]
                      "
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================================================== */}
          {/* CONTACT INFORMATION */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              delay: 0.2,
            }}
            className="min-w-0 space-y-5"
          >
            {/* Heading */}

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Contact Information
              </h3>

              <div
                className="
                  mt-3
                  h-1
                  w-20
                  rounded-full
                  bg-gradient-to-r
                  from-[#0263CC]
                  to-[#02A7BB]
                "
              />
            </div>

            {/* Cards */}

            {contactData.map((item, index) => (
              <ContactInfoCard key={index} {...item} />
            ))}
          </motion.div>

          {/* ==================================================== */}
          {/* RIGHT CTA CARD */}
          {/* ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-[34px]
              bg-gradient-to-br
              from-[#0263CC]
              via-[#0A63DA]
              to-[#0147A2]
              p-6
              text-white
              shadow-[0_30px_70px_rgba(2,99,204,.28)]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -left-16
                top-10
                h-44
                w-44
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-0
                right-0
                h-52
                w-52
                rounded-full
                bg-[#4DA5EC]/20
                blur-3xl
              "
            />

            {/* ================================================= */}
            {/* FLOATING IMAGE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                mx-auto
                mb-8
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-white/15
                backdrop-blur-xl
              "
            >
              <div
                className="
                  absolute
                  h-28
                  w-28
                  rounded-full
                  bg-white/20
                  blur-2xl
                "
              />

              <img
                src="/images/about/fresh-graduate.png"
                alt=""
                className="
                  relative
                  z-10
                  h-28
                  w-28
                  rounded-full
                  object-cover
                "
              />
            </motion.div>

            {/* CTA CONTENT */}

            <div className="relative z-10">
              {/* Badge */}

              <div className="mb-6 text-center">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white/15
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    backdrop-blur
                  "
                >
                  <Sparkles className="h-4 w-4" />

                  Free Counseling
                </div>

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-black
                    leading-tight
                  "
                >
                  Book Your Free Consultation
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/80
                  "
                >
                  Connect with our admission experts and receive personalized
                  guidance for studying MBBS abroad.
                </p>
              </div>

              {/* ================================================= */}
              {/* FEATURES */}
              {/* ================================================= */}

              <div className="space-y-4">
                {[
                  "1:1 Expert Counselling",
                  "University Shortlisting",
                  "Visa & Documentation",
                  "FMGE / NExT Guidance",
                ].map((item) => (
                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-white/10
                      px-4
                      py-3
                      backdrop-blur
                      transition-colors
                      hover:bg-white/15
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                      "
                    >
                      <ShieldCheck size={14} />
                    </span>

                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* ================================================= */}
              {/* CTA BUTTON */}
              {/* ================================================= */}

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  group
                  mt-8
                  flex
                  h-15
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  font-bold
                  text-[#0263CC]
                  shadow-xl
                  transition
                "
              >
                Book Free Session

                <ArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}