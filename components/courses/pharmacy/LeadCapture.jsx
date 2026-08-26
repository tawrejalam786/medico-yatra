"use client";

import { CheckCircle2, FileCheck2, MapPinned, Route, ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Container, Reveal } from "./SectionUI";

const formInputClass = "h-12 rounded-xl border-slate-200 bg-white px-4 text-sm shadow-none focus-visible:border-[#0263CC] focus-visible:ring-[#0263CC]/15";

export default function LeadCapture() {
  return (
    <section id="counselling" className="relative overflow-hidden bg-[#F5F9FF] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-[0_28px_90px_rgba(2,48,112,.12)]">
          <div className="grid lg:grid-cols-[.86fr_1.14fr]">
            <Reveal className="bg-gradient-to-br from-[#071A49] via-[#073B78] to-[#0263CC] p-6 text-white sm:p-9 lg:p-11">
              <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-cyan-200">Your personalised next step</p>
              <h2 className="mt-4 text-[28px] font-extrabold leading-[1.12] tracking-[-.8px] sm:text-[38px]">Get your free pharmacy-career roadmap</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100">A no-obligation plan around the right course, target country, licensing or industry steps and family-pathway considerations.</p>
              <div className="mt-8 grid gap-3">
                {[
                  [Route, "Right direction", "Clinical practice or science & industry"],
                  [MapPinned, "Country shortlist", "Aligned to study and future-work goals"],
                  [FileCheck2, "Route-specific steps", "Eligibility, admission, English and licensing"],
                ].map(([Icon, title, text]) => <div key={title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200"><Icon className="size-5" /></span><div><p className="text-xs font-extrabold">{title}</p><p className="mt-1 text-[10px] leading-5 text-blue-100">{text}</p></div></div>)}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold text-blue-200"><ShieldCheck className="size-4" /> Personalised guidance · No obligation · No spam</div>
            </Reveal>

            <Reveal delay={0.1} className="p-5 sm:p-8 lg:p-10">
              <div className="mb-7"><p className="text-xl font-extrabold text-[#071A49]">Tell us about yourself</p><p className="mt-1 text-xs text-slate-500">It takes about a minute.</p></div>
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2 text-xs font-bold text-slate-700">Full name<Input required placeholder="Your name" className={formInputClass} /></label>
                <label className="grid gap-2 text-xs font-bold text-slate-700">Mobile / WhatsApp<Input required type="tel" placeholder="+91 00000 00000" className={formInputClass} /></label>
                <label className="grid gap-2 text-xs font-bold text-slate-700">City<Input required placeholder="Your city" className={formInputClass} /></label>
                <label className="grid gap-2 text-xs font-bold text-slate-700">Class 12 status<Select><SelectTrigger className={`${formInputClass} w-full`}><SelectValue placeholder="Select status" /></SelectTrigger><SelectContent><SelectItem value="studying">Currently studying</SelectItem><SelectItem value="completed">Completed</SelectItem><SelectItem value="graduate">Graduate</SelectItem></SelectContent></Select></label>
                <label className="grid gap-2 text-xs font-bold text-slate-700">Interest<Select><SelectTrigger className={`${formInputClass} w-full`}><SelectValue placeholder="Choose a route" /></SelectTrigger><SelectContent><SelectItem value="practice">Pharmacist route</SelectItem><SelectItem value="industry">Science & industry route</SelectItem><SelectItem value="unsure">Not sure yet</SelectItem></SelectContent></Select></label>
                <label className="grid gap-2 text-xs font-bold text-slate-700">Preferred country <span className="sr-only">optional</span><Select><SelectTrigger className={`${formInputClass} w-full`}><SelectValue placeholder="Optional" /></SelectTrigger><SelectContent><SelectItem value="usa">USA</SelectItem><SelectItem value="uk">United Kingdom</SelectItem><SelectItem value="australia">Australia</SelectItem><SelectItem value="canada">Canada</SelectItem><SelectItem value="other">Other / Not sure</SelectItem></SelectContent></Select></label>
                <label className="col-span-full flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-[10px] leading-5 text-slate-500"><Checkbox required className="mt-0.5 data-[state=checked]:border-[#0263CC] data-[state=checked]:bg-[#0263CC]" />I agree to be contacted by Medico Yatra about my enquiry and course guidance.</label>
                <button type="submit" className="col-span-full inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#0263CC] px-5 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(2,99,204,.22)] transition hover:bg-[#0759B8]"><CheckCircle2 className="size-5" />Get My Free Pharmacy Roadmap</button>
                <p className="col-span-full text-center text-[10px] leading-5 text-slate-400">Your details are used only to contact you about this enquiry. No spam.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
