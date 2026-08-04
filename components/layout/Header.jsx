"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Courses",     href: "/courses" },
  { label: "Countries",   href: "/countries" },
  { label: "FMGE / NExT", href: "/fmge-next" },
  { label: "USMLE",       href: "/usmle" },
  { label: "About Us",    href: "/about" },
  { label: "Resources",   href: "/resources" },
];

// WhatsApp SVG inline (brand icon — no icon library dependency)
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Medico Yatra Wordmark / Logo
function Logo({ scrolled }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group"
      aria-label="Medico Yatra — Home"
    >
      <Image
        src={
          scrolled
            ? "/logo/medico-yatra-blue.png"
            : "/logo/medico-yatra-white.png"
        }
        alt="Medico Yatra Logo"
        width={160}
        height={50}
        priority
      />
    </Link>
  );
}


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route navigation / outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  // Trap body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all border-b-1 border-white duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Desktop Nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                    scrolled
                      ? "text-[#334155] hover:text-[#0263CC] hover:bg-[#F1F7FC]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className={`flex items-center gap-2 font-body font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "text-[#02A7BB] hover:bg-[#d6f4f7] border border-[#02A7BB]/30"
                    : "text-white/90 hover:text-white hover:bg-white/10 border border-white/20"
                }`}
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

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-[#0F172A] hover:bg-[#F1F7FC]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0263CC] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2C9.5 2 7 3.5 7 6.5c0 2 1.5 4 3 5L12 13l2-1.5c1.5-1 3-3 3-5C17 3.5 14.5 2 12 2z" fill="white" />
                      <line x1="12" y1="7" x2="12" y2="11" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="10" y1="9" x2="14" y2="9" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-heading text-lg font-bold text-[#0F172A]">Medico Yatra</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#475569] hover:bg-[#F1F7FC] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-4 px-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl font-body font-medium text-[#0F172A] hover:text-[#0263CC] hover:bg-[#F1F7FC] transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTAs */}
              <div className="px-4 py-5 border-t border-[#E2E8F0] flex flex-col gap-3">
                <Button href="/counselling" variant="primary" size="lg" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Book Free Counselling
                </Button>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-[#02A7BB] text-[#02A7BB] font-body font-medium text-sm hover:bg-[#d6f4f7] transition-colors duration-200"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
                <p className="text-center text-[#94A3B8] font-body text-xs mt-1">
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
