"use client";

import { Check, Flag, Route } from "lucide-react";
import { journeySteps } from "@/data/courses/pharmacy";
import { Container, Reveal, SectionHeading } from "./SectionUI";

export default function PharmacyJourney() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FF] py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading align="center" eyebrow="Your pharmacy journey" title="Every route-specific step, mapped clearly" text="From the first decision to a licence or industry role — including the stages many agencies explain too late." />
        <Reveal className="relative mt-9">
          <div className="mobile-scroller -mx-4 flex snap-x snap-mandatory gap-0 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
            {journeySteps.map((step, index) => (
              <div key={step} className="relative w-[150px] shrink-0 snap-center px-2 text-center sm:w-[180px] lg:w-[calc(100%/6)]">
                {index < journeySteps.length - 1 && <span className="absolute left-1/2 top-[25px] h-0.5 w-full bg-gradient-to-r from-[#0263CC] to-cyan-300" />}
                <span className={`relative z-10 mx-auto grid size-[52px] place-items-center rounded-[18px] border-4 border-[#F5F9FF] shadow-lg ${index === 0 ? "bg-[#071A49] text-white" : index === journeySteps.length - 1 ? "bg-[#02A7BB] text-white" : "bg-white text-[#0263CC]"}`}>
                  {index === 0 ? <Route className="size-5" /> : index === journeySteps.length - 1 ? <Flag className="size-5" /> : <Check className="size-5" />}
                </span>
                <p className="mt-4 text-[10px] font-black uppercase tracking-wider text-[#02A7BB]">Step {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-xs font-extrabold leading-5 text-[#071A49]">{step}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-4 max-w-3xl rounded-2xl border border-blue-100 bg-white px-4 py-4 text-center text-xs font-semibold leading-6 text-slate-600 shadow-sm">At the route split: <strong className="text-[#0263CC]">pharmacist pathway</strong> proceeds to country licensing, while <strong className="text-[#009E9A]">industry pathway</strong> proceeds toward the relevant specialist role.</div>
        </Reveal>
      </Container>
    </section>
  );
}
