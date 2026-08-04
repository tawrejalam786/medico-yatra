// CTABand.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}

export default function CTABand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const bgY = useTransform(scrollYProgress, [0, 1], [-180, 180]);

  return (
  <section
  ref={ref}
  className="relative overflow-hidden min-h-screen flex items-center"
>
      <motion.div
  style={{ y: bgY }}
  className="absolute -top-56 -bottom-56 inset-x-0"
>
       <Image
  fill
  src="/images/parralx.png"
  className="object-cover scale-[1.3]"
  alt="Parallax Image"
/>
        {/* Base overlay */}
<div className="absolute inset-0 bg-[#0263CC]/45" />

{/* Desktop gradient */}
<div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0263CC] via-[#0263CC]/25 to-transparent" />

{/* Mobile gradient */}
<div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0263CC]/80 via-[#0263CC]/35 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 z-[1]" style={{
        backgroundImage: "radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-widest text-white/70 mb-4 font-bold">Take the First Step</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl lg:text-6xl text-white font-bold mb-6">Your Healthcare Career Deserves a Real Plan — Not Guesswork.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/85 mb-10 max-w-2xl mx-auto">Get free, honest counselling. We'll help you choose the right course, country and licensing path — with no pressure and no false promises.</motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/counselling" variant="white" size="xl">Book Free Counselling</Button>
          <Button href="/apply" variant="outline-white" size="xl">Apply Now</Button>
          <a href="https://wa.me/910000000000" className="px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center gap-2"><WhatsAppIcon />WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}