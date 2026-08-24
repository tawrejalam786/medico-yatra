import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";

export default function FinalCTA() {
  return (
    <section className="bg-[#F7FAFC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] border border-white bg-[linear-gradient(135deg,#EAF3FF_0%,#FFFFFF_45%,#E6FBF7_100%)] p-6 shadow-[0_22px_65px_rgba(15,23,42,.07)] sm:p-10 lg:p-12">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#02A7BB]/15 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[.15em] text-[#0263CC] shadow-sm"><Sparkles className="h-3.5 w-3.5" /> Ready when you are</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-.04em] text-slate-950 sm:text-4xl lg:text-5xl">Ready to explore Georgia MBBS with a clearer plan?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Georgia combines an English-medium pathway, a European-influenced setting and a growing Indian student community. The licensing pathway still requires early planning.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <PrimaryButton><Phone className="h-4 w-4" /> Book Free Counselling</PrimaryButton>
            <SecondaryButton href="#"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
