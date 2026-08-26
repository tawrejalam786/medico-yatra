"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Container, PrimaryLink } from "./SectionUI";

const navItems = ["Courses", "Countries", "FMGE / NExT", "USMLE", "About Us", "Resources"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-[68px] items-center justify-between gap-5 lg:h-[76px]">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Medico Yatra home">
          <span className="grid size-10 place-items-center rounded-[14px] bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-lg font-black text-white shadow-[0_8px_22px_rgba(2,99,204,.22)]">
            M
          </span>
          <span className="leading-none">
            <span className="block text-[17px] font-extrabold tracking-[-0.5px] text-[#071A49]">Medico Yatra</span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400">Healthcare careers abroad</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a key={item} href={index < 2 ? "#courses" : "#support"} className="inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition hover:text-[#0263CC]">
              {item}
              {index < 2 && <ChevronDown className="size-3.5" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#counselling" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0263CC]/20 px-4 text-xs font-bold text-[#0263CC] transition hover:bg-blue-50">
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
          <PrimaryLink className="!min-h-11 !rounded-full !px-5 !text-xs">Book Free Counselling</PrimaryLink>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-slate-200 text-[#071A49] lg:hidden" aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-100 bg-white lg:hidden">
            <Container className="py-4">
              <nav className="grid gap-1">
                {navItems.map((item) => (
                  <a key={item} onClick={() => setOpen(false)} href="#courses" className="flex min-h-11 items-center justify-between rounded-xl px-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0263CC]">
                    {item}<ArrowRight className="size-4" />
                  </a>
                ))}
              </nav>
              <PrimaryLink className="mt-3 w-full">Book Free Counselling</PrimaryLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#061636] pb-24 pt-12 text-white md:pb-8 lg:pt-14">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-[#0263CC] to-[#02A7BB] text-xl font-black">M</span>
              <div><p className="font-extrabold">Medico Yatra</p><p className="text-[10px] uppercase tracking-widest text-blue-200">A Future Yatra brand</p></div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Guiding future healthcare professionals beyond borders with honest, structured support.</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">Careers</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300"><a href="#top">Pharmacy</a><a href="#other-courses">MBBS</a><a href="#other-courses">Nursing</a><a href="#other-courses">Dentistry</a></div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">Explore</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300"><a href="#courses">Courses</a><a href="#salary">Salary guide</a><a href="#licensing">Licensing</a><a href="#faq">FAQ</a></div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300"><a className="flex items-center gap-2" href="mailto:info@medicoyatra.com"><Mail className="size-4" /> info@medicoyatra.com</a><a className="flex items-center gap-2" href="#counselling"><Phone className="size-4" /> Free counselling</a></div>
          </div>
        </div>
        <div className="pt-6 text-[11px] leading-6 text-slate-400">
          Medico Yatra provides educational guidance and does not guarantee admission, jobs, salaries, licensing, visas, settlement or PR. Regulations and recognition can change; verify official requirements before enrolling.
        </div>
      </Container>
    </footer>
  );
}

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2.5 shadow-[0_-12px_30px_rgba(15,23,42,.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href="#counselling" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#0263CC]/25 text-xs font-bold text-[#0263CC]"><Phone className="size-4" /> Free Counselling</a>
        <a href="#counselling" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#02A7BB] text-xs font-bold text-white"><MessageCircle className="size-4" /> WhatsApp</a>
      </div>
    </div>
  );
}
