import { MessageCircle, Phone } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";

export default function FinalCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-[#EAF3FF] via-white to-[#DFFAF6] p-6 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#0263CC]">Ready when you are</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-.04em] text-slate-950 sm:text-4xl lg:text-5xl">Ready to explore Russia MBBS with a clearer plan?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Compare universities, understand the licensing pathway and build a realistic cost plan before you make the decision.</p>
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
