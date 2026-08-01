"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import { COUNTRY_SLUGS } from "@/data/countries";
import Image from "next/image";

// Social SVG icons (inline, no icon-library brand icons)
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Country autocomplete search
function CountrySearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 1) { setSuggestions([]); setOpen(false); return; }
    const filtered = COUNTRY_SLUGS.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);
    setSuggestions(filtered);
    setOpen(filtered.length > 0);
  }, [query]);

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleSelect = (slug) => {
    setQuery(""); setOpen(false);
    router.push(`/countries/${slug}`);
  };

  return (
    <div ref={ref} className="relative">
      <label htmlFor="country-search-footer" className="sr-only">Search for a country</label>
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true" />
        <input
          id="country-search-footer"
          type="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
          className="w-full bg-white/5 border border-white/10 text-white placeholder-[#94A3B8] font-body text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-[#4DA5EC] focus:bg-white/10 transition-all duration-200"
        />
      </div>
      {open && (
        <ul
          role="listbox"
          aria-label="Country suggestions"
          className="absolute bottom-full mb-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-50 max-h-56 overflow-y-auto"
        >
          {suggestions.map((c) => (
            <li key={c.slug} role="option" aria-selected="false">
              <button
                onClick={() => handleSelect(c.slug)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F1F7FC] transition-colors text-[#0F172A] font-body text-sm"
              >
                <span className="text-lg">{c.flag}</span>
                <span>{c.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-[#0F172A] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column — spans 2 on large */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              
               <Link
      href="/"
      className="flex items-center gap-2.5 group"
      aria-label="Medico Yatra — Home"
    >
      <Image
        src="/logo/medico-yatra-white.png"
        alt="Medico Yatra Logo"
        width={180}
        height={50}
        priority
      />
    </Link>
              
            </div>

            <p className="font-body font-light text-[#94A3B8] text-sm leading-relaxed mb-2">
              Guiding future healthcare professionals beyond borders.
            </p>
            <p className="font-body text-xs text-[#475569] mb-6">
              A <span className="text-[#4DA5EC]">Future Yatra Private Limited</span> brand.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { Icon: LinkedInIcon,  label: "LinkedIn",  href: "#" },
                { Icon: FacebookIcon,  label: "Facebook",  href: "#" },
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: YouTubeIcon,   label: "YouTube",   href: "#" },
                { Icon: WhatsAppIcon,  label: "WhatsApp",  href: "https://wa.me/910000000000" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#0263CC] hover:border-[#0263CC] transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Country search */}
            <p className="font-body font-medium text-sm text-white mb-2">Quick Country Lookup</p>
            <CountrySearch />
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider">Careers</h3>
            <ul className="space-y-2.5">
              {[
                { label: "MBBS",               href: "/courses/mbbs" },
                { label: "Dentistry",           href: "/courses/dentistry" },
                { label: "Nursing",             href: "/courses/nursing" },
                { label: "Pharmacy",            href: "/courses/pharmacy" },
                { label: "Physiotherapy",       href: "/courses/physiotherapy" },
                { label: "Respiratory Therapy", href: "/courses/respiratory-therapy-mlt" },
                { label: "Med. Lab Technology", href: "/courses/medical-lab-technology" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Countries",       href: "/countries" },
                { label: "Country Finder",  href: "/#country-finder" },
                { label: "FMGE / NExT",     href: "/fmge-next" },
                { label: "USMLE",           href: "/usmle" },
                { label: "Free Resources",  href: "/resources" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-body font-semibold text-sm text-white mt-8 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact",  href: "/contact" },
                { label: "FAQ",      href: "/#faq" },
                { label: "Blog",     href: "/blog" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#4DA5EC] mt-0.5 shrink-0" aria-hidden="true" />
                <a href="mailto:info@medicoyatra.com" className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors break-all">
                  {/* [Replace with real email] */}
                  info@medicoyatra.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#4DA5EC] mt-0.5 shrink-0" aria-hidden="true" />
                <a href="tel:+910000000000" className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors">
                  {/* [Replace with real phone] */}
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#4DA5EC] mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#4DA5EC] mt-0.5 shrink-0" aria-hidden="true" />
                <address className="font-body font-light text-sm text-[#94A3B8] not-italic leading-relaxed">
                  {/* [Replace with real office address] */}
                  [Office Address]<br />
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="font-body font-light text-xs text-[#475569] leading-relaxed max-w-5xl">
            <strong className="text-[#64748B] font-medium">Disclaimer:</strong>{" "}
            Medico Yatra provides educational guidance and does not guarantee admission, visa, scholarship,
            examination, job, salary, or PR outcomes. Salary figures shown are illustrative, approximate,
            and require licensing/registration and immigration eligibility to achieve. The Country Finder
            tool provides general matching based on self-reported answers, not a personalised assessment —
            book a free counselling session for guidance tailored to your specific profile. University
            recognition and regulations change — verify the current NMC-approved list and applicable rules
            before enrolling. Guidance, not legal advice.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#475569]">
            © {year} Future Yatra Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy",  href: "/privacy" },
              { label: "Terms of Use",    href: "/terms" },
              { label: "Cookie Policy",   href: "/cookies" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="font-body text-xs text-[#475569] hover:text-[#4DA5EC] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
