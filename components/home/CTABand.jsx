"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function CTABand() {
  return (
    <section
      id="cta-band"
      aria-labelledby="cta-band-heading"
      className="relative py-20 lg:py-28 overflow-hidden brand-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"/>
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 blur-2xl"/>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs font-medium text-white/60 uppercase tracking-widest mb-4"
        >
          Take the First Step
        </motion.p>

        <motion.h2
          id="cta-band-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6"
        >
          Your Healthcare Career Deserves a Real Plan — Not Guesswork.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="font-body font-light text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Get free, honest counselling. We'll help you choose the right course, country and
          licensing path — with no pressure and no false promises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/counselling" variant="white" size="xl" className="w-full sm:w-auto">
            Book Free Counselling
          </Button>
          <Button href="/apply" variant="outline-white" size="xl" className="w-full sm:w-auto">
            Apply Now
          </Button>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-body font-medium text-base hover:bg-white/20 hover:border-white/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white w-full sm:w-auto justify-center"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </motion.div>

        {/* No-pressure note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body font-light text-xs text-white/50 mt-8"
        >
          Free counselling · No pressure · No false promises · No fake urgency
        </motion.p>
      </div>
    </section>
  );
}
