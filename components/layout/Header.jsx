"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Button from "@/components/ui/Button";
import CoursesMegaMenu from "@/components/layout/CoursesMegaMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Countries", href: "/countries" },
  { label: "FMGE / NExT", href: "/courses/fmge-next" },
  { label: "USMLE", href: "/courses/usmle" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/free-resources" },
];

/*
  Apne actual country-page routes ke according
  href values change kar sakte ho.
*/
const COUNTRIES = [
  {
    name: "Russia",
    flag: "🇷🇺",
    href: "/countries/russia",
    note: "Popular choice",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    href: "/countries/georgia",
    note: "European exposure",
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    href: "/countries/kazakhstan",
    note: "Affordable MBBS",
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    href: "/countries/kyrgyzstan",
    note: "Student friendly",
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    href: "/countries/uzbekistan",
    note: "Modern universities",
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    href: "/countries/bangladesh",
    note: "Familiar curriculum",
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    href: "/countries/nepal",
    note: "Close to home",
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    href: "/countries/philippines",
    note: "English medium",
  },
];

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Logo({ scrolled }) {
  const logoSrc = scrolled
    ? "/logo/medico-yatra-blue.png"
    : "/logo/medico-yatra-white.png";

  return (
    <Link
      href="/"
      aria-label="Medico Yatra — Home"
      className="flex shrink-0 items-center"
    >
      {/* Mobile logo */}
      <div className="relative h-[40px] w-[112px] lg:hidden">
        <Image
          src={logoSrc}
          alt="Medico Yatra Logo"
          fill
          priority
          sizes="112px"
          className="object-cover object-left"
        />
      </div>

      {/* Desktop logo */}
      <div className="relative hidden h-[40px] w-[160px] lg:block">
        <Image
          src={logoSrc}
          alt="Medico Yatra Logo"
          fill
          priority
          sizes="160px"
          className="object-cover object-left"
        />
      </div>
    </Link>
  );
}

function CountriesMenu({ mobile = false, isOpen, onClose }) {
  if (mobile) {
    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="mx-2 mb-2 mt-1 grid grid-cols-2 gap-2 rounded-2xl bg-[#F5FAFF] p-2">
              {COUNTRIES.map((country) => (
                <Link
                  key={country.name}
                  href={country.href}
                  onClick={onClose}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E2EDF8]
                    bg-white
                    px-2.5
                    py-2.5
                    text-sm
                    font-medium
                    text-[#1E293B]
                    shadow-[0_3px_12px_rgba(2,99,204,0.04)]
                    transition
                    active:scale-[0.98]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F1F7FC]
                      text-xl
                      shadow-sm
                    "
                  >
                    {country.flag}
                  </span>

                  <span className="truncate">{country.name}</span>
                </Link>
              ))}

              <Link
                href="/countries"
                onClick={onClose}
                className="
                  col-span-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0263CC]
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#075BB7]
                "
              >
                Explore all countries
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 8,
            scale: 0.98,
          }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="
            absolute
            left-1/2
            top-full
            z-50
            w-[680px]
            -translate-x-1/2
            pt-4
          "
        >
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-[#DDEAF6]
              bg-white
              p-3
              shadow-[0_22px_65px_rgba(15,49,84,0.18)]
            "
          >
            <div className="grid grid-cols-[1fr_205px] gap-3">
              {/* Countries area */}
              <div className="p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#02A7BB]
                      "
                    >
                      Study destinations
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-[#0F2742]">
                      Choose your country
                    </h3>
                  </div>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EAF5FF]
                      text-[#0263CC]
                    "
                  >
                    <Globe2 size={21} />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {COUNTRIES.map((country) => (
                    <Link
                      key={country.name}
                      href={country.href}
                      onClick={onClose}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-transparent
                        px-3
                        py-2.5
                        transition-all
                        duration-200
                        hover:border-[#CFE3F5]
                        hover:bg-[#F4F9FE]
                      "
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#E5EEF7]
                          bg-white
                          text-2xl
                          shadow-sm
                          transition-transform
                          duration-200
                          group-hover:-translate-y-0.5
                        "
                      >
                        {country.flag}
                      </span>

                      <span className="min-w-0">
                        <span
                          className="
                            block
                            text-sm
                            font-semibold
                            text-[#17324D]
                            transition-colors
                            group-hover:text-[#0263CC]
                          "
                        >
                          {country.name}
                        </span>

                        <span
                          className="
                            block
                            truncate
                            text-[11px]
                            text-[#7A8CA0]
                          "
                        >
                          {country.note}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  bg-gradient-to-br
                  from-[#0263CC]
                  via-[#087CD6]
                  to-[#02A7BB]
                  p-5
                  text-white
                "
              >
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    border-[18px]
                    border-white/10
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-12
                    -left-10
                    h-28
                    w-28
                    rounded-full
                    bg-white/10
                    blur-xl
                  "
                />

                <div className="relative flex h-full flex-col justify-between">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/15
                      backdrop-blur-sm
                    "
                  >
                    <Globe2 size={23} />
                  </span>

                  <div className="mt-10">
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white/70
                      "
                    >
                      Not sure yet?
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug">
                      Find your best-fit country
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/75">
                      Compare fees, eligibility and career pathways with an
                      expert.
                    </p>

                    <Link
                      href="/countries"
                      onClick={onClose}
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-white
                        px-3.5
                        py-3
                        text-sm
                        font-semibold
                        text-[#0263CC]
                        transition
                        hover:bg-[#F0FAFF]
                      "
                    >
                      View all countries
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  const menuRef = useRef(null);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  /*
    Header scroll state
  */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Close mobile menu when pathname changes
  */
  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setCountriesOpen(false);
  }, [pathname]);

  /*
    Outside click for mobile drawer
  */
  useEffect(() => {
    if (!mobileOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
        setCoursesOpen(false);
        setCountriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [mobileOpen]);

  /*
    Lock body scroll while mobile drawer is open
  */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
    setCountriesOpen(false);
  };

  const toggleCourses = () => {
    setCoursesOpen((previous) => !previous);
    setCountriesOpen(false);
  };

  const toggleCountries = () => {
    setCountriesOpen((previous) => !previous);
    setCoursesOpen(false);
  };

  return (
    <>
      <header
        role="banner"
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-none
          lg:transition-all
          lg:duration-300

          ${
            scrolled
              ? `
                border-b
                border-[#E2E8F0]
                bg-white
                shadow-sm
                lg:bg-white/95
                lg:backdrop-blur-md
              `
              : isHomePage
                ? `
                  border-b
                  border-transparent
                  bg-transparent
                `
                : `
                  border-b
                  border-transparent
                  bg-[#0263CC]
                `
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="flex h-16 items-center justify-between lg:h-18">
            <Logo scrolled={scrolled} />

            {/* Desktop navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {NAV_LINKS.map((link) => {
                /*
                  Courses dropdown
                */
                if (link.label === "Courses") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => {
                        setCoursesOpen(true);
                        setCountriesOpen(false);
                      }}
                      onMouseLeave={() => {
                        setCoursesOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        onClick={toggleCourses}
                        aria-expanded={coursesOpen}
                        aria-haspopup="true"
                        className={`
                          flex
                          items-center
                          gap-1.5
                          rounded-lg
                          px-3
                          py-2
                          font-body
                          text-sm
                          font-medium
                          transition-all
                          duration-200

                          ${
                            scrolled
                              ? `
                                text-[#334155]
                                hover:bg-[#F1F7FC]
                                hover:text-[#0263CC]
                              `
                              : `
                                text-white/90
                                hover:bg-white/10
                                hover:text-white
                              `
                          }

                          ${
                            coursesOpen
                              ? scrolled
                                ? "bg-[#F1F7FC] text-[#0263CC]"
                                : "bg-white/10 text-white"
                              : ""
                          }
                        `}
                      >
                        Courses

                        <ChevronDown
                          size={14}
                          className={`
                            transition-transform
                            duration-200
                            ${coursesOpen ? "rotate-180" : ""}
                          `}
                        />
                      </button>

                      <CoursesMegaMenu
                        isOpen={coursesOpen}
                        onClose={() => setCoursesOpen(false)}
                      />
                    </div>
                  );
                }

                /*
                  Countries dropdown
                */
                if (link.label === "Countries") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => {
                        setCountriesOpen(true);
                        setCoursesOpen(false);
                      }}
                      onMouseLeave={() => {
                        setCountriesOpen(false);
                      }}
                    >
                      <button
                        type="button"
                        onClick={toggleCountries}
                        aria-expanded={countriesOpen}
                        aria-haspopup="true"
                        className={`
                          flex
                          items-center
                          gap-1.5
                          rounded-lg
                          px-3
                          py-2
                          font-body
                          text-sm
                          font-medium
                          transition-all
                          duration-200

                          ${
                            scrolled
                              ? `
                                text-[#334155]
                                hover:bg-[#F1F7FC]
                                hover:text-[#0263CC]
                              `
                              : `
                                text-white/90
                                hover:bg-white/10
                                hover:text-white
                              `
                          }

                          ${
                            countriesOpen
                              ? scrolled
                                ? "bg-[#F1F7FC] text-[#0263CC]"
                                : "bg-white/10 text-white"
                              : ""
                          }
                        `}
                      >
                        Countries

                        <ChevronDown
                          size={14}
                          className={`
                            transition-transform
                            duration-200
                            ${countriesOpen ? "rotate-180" : ""}
                          `}
                        />
                      </button>

                      <CountriesMenu
                        isOpen={countriesOpen}
                        onClose={() => setCountriesOpen(false)}
                      />
                    </div>
                  );
                }

                /*
                  Normal navigation links
                */
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      rounded-lg
                      px-3
                      py-2
                      font-body
                      text-sm
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        scrolled
                          ? `
                            text-[#334155]
                            hover:bg-[#F1F7FC]
                            hover:text-[#0263CC]
                          `
                          : `
                            text-white/90
                            hover:bg-white/10
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2
                  font-body
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    scrolled
                      ? `
                        border-[#02A7BB]/30
                        text-[#02A7BB]
                        hover:bg-[#D6F4F7]
                      `
                      : `
                        border-white/20
                        text-white/90
                        hover:bg-white/10
                        hover:text-white
                      `
                  }
                `}
              >
                <WhatsAppIcon size={16} />
                WhatsApp Us
              </a>

              <Button
                href="/counselling"
                variant={scrolled ? "primary" : "white"}
                size="md"
                className="whitespace-nowrap"
              >
                Book Free Counselling
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => {
                setMobileOpen((previous) => !previous);
                setCoursesOpen(false);
                setCountriesOpen(false);
              }}
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                transition-colors
                duration-150
                lg:hidden

                ${
                  scrolled
                    ? `
                      text-[#0F172A]
                      hover:bg-[#F1F7FC]
                    `
                    : `
                      text-white
                      hover:bg-white/10
                    `
                }
              `}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
                lg:hidden
              "
              aria-hidden="true"
              onClick={closeMobileMenu}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 280,
              }}
              className="
                fixed
                bottom-0
                right-0
                top-0
                z-50
                flex
                w-80
                max-w-[90vw]
                flex-col
                bg-white
                shadow-2xl
                lg:hidden
              "
            >
              {/* Drawer header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#E2E8F0]
                  px-5
                  py-4
                "
              >
                <div className="relative h-[40px] w-[140px]">
                  <Image
                    src="/logo/medico-yatra-blue.png"
                    alt="Medico Yatra Logo"
                    fill
                    sizes="140px"
                    className="object-contain object-left"
                  />
                </div>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    text-[#475569]
                    transition-colors
                    hover:bg-[#F1F7FC]
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile navigation links */}
              <nav
                aria-label="Mobile navigation"
                className="flex-1 overflow-y-auto px-3 py-4"
              >
                {NAV_LINKS.map((link, index) => {
                  /*
                    Mobile Courses accordion
                  */
                  if (link.label === "Courses") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.25,
                        }}
                      >
                        <button
                          type="button"
                          onClick={toggleCourses}
                          aria-expanded={coursesOpen}
                          className={`
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            font-body
                            text-base
                            font-medium
                            transition-colors
                            duration-200

                            ${
                              coursesOpen
                                ? `
                                  bg-[#F1F7FC]
                                  text-[#0263CC]
                                `
                                : `
                                  text-[#0F172A]
                                  hover:bg-[#F1F7FC]
                                  hover:text-[#0263CC]
                                `
                            }
                          `}
                        >
                          <span>Courses</span>

                          <ChevronDown
                            size={18}
                            className={`
                              transition-transform
                              duration-200
                              ${coursesOpen ? "rotate-180" : ""}
                            `}
                          />
                        </button>

                        <CoursesMegaMenu
                          mobile
                          isOpen={coursesOpen}
                          onClose={() => {
                            setCoursesOpen(false);
                            setMobileOpen(false);
                          }}
                        />
                      </motion.div>
                    );
                  }

                  /*
                    Mobile Countries accordion
                  */
                  if (link.label === "Countries") {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.25,
                        }}
                      >
                        <button
                          type="button"
                          onClick={toggleCountries}
                          aria-expanded={countriesOpen}
                          className={`
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            font-body
                            text-base
                            font-medium
                            transition-colors
                            duration-200

                            ${
                              countriesOpen
                                ? `
                                  bg-[#F1F7FC]
                                  text-[#0263CC]
                                `
                                : `
                                  text-[#0F172A]
                                  hover:bg-[#F1F7FC]
                                  hover:text-[#0263CC]
                                `
                            }
                          `}
                        >
                          <span>Countries</span>

                          <ChevronDown
                            size={18}
                            className={`
                              transition-transform
                              duration-200
                              ${countriesOpen ? "rotate-180" : ""}
                            `}
                          />
                        </button>

                        <CountriesMenu
                          mobile
                          isOpen={countriesOpen}
                          onClose={() => {
                            setCountriesOpen(false);
                            setMobileOpen(false);
                          }}
                        />
                      </motion.div>
                    );
                  }

                  /*
                    Mobile normal links
                  */
                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          font-body
                          text-base
                          font-medium
                          text-[#0F172A]
                          transition-colors
                          duration-200
                          hover:bg-[#F1F7FC]
                          hover:text-[#0263CC]
                        "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA section */}
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#E2E8F0]
                  px-4
                  py-5
                "
              >
                <Button
                  href="/counselling"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={closeMobileMenu}
                >
                  Book Free Counselling
                </Button>

                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border-2
                    border-[#02A7BB]
                    px-4
                    py-3
                    font-body
                    text-sm
                    font-medium
                    text-[#02A7BB]
                    transition-colors
                    duration-200
                    hover:bg-[#D6F4F7]
                  "
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>

                <p
                  className="
                    mt-1
                    text-center
                    font-body
                    text-xs
                    text-[#94A3B8]
                  "
                >
                  A Future Yatra Private Limited brand
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}