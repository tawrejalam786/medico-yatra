"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

const links = ["Why Nursing Abroad", "Countries", "Career Path", "Licensing", "FAQs"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <span className="text-lg font-black">M</span>
          </span>
          <span className="leading-none">
            <b className="block text-[17px] font-extrabold tracking-tight text-slate-950">Medico Yatra</b>
            <small className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-600">Global Education</small>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link, i) => (
            <a key={link} href={`#${i === 4 ? "faqs" : ""}`} className="group flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-blue-600">
              {link}{i < 2 && <ChevronDown size={14} className="transition group-hover:rotate-180" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href="tel:+919999999999" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
            <PhoneCall size={16} /> Talk to us
          </a>
          <a href="#counselling" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
            Free Counselling
          </a>
        </div>

        <button onClick={() => setOpen(v => !v)} className="grid size-11 place-items-center rounded-xl border border-slate-200 lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-100 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {links.map(link => <a key={link} href="#faqs" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50">{link}</a>)}
              <a href="#counselling" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white">Book Free Counselling</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}