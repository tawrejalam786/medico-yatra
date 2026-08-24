import { ArrowRight, BadgeAlert, BookOpenCheck, ShieldCheck } from "lucide-react";
import Reveal from "../shared/Reveal";

export default function Licensing() {
  return (
    <section id="licensing" className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#071A2D_0%,#0B2D4F_55%,#064B59_100%)] p-6 text-white sm:p-8 lg:p-10">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#02A7BB]/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-[#0263CC]/25 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[11px] font-black uppercase tracking-[.15em] text-white"><BadgeAlert className="h-4 w-4" /> Licensing in India</span>
                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-.04em] sm:text-4xl lg:text-[46px]">Planning to practise in India? Build FMGE / NExT into the decision now.</h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">Georgia is not on India&apos;s FMGE-exempt list. Students intending to practise in India need to clear the applicable licensing pathway. The supplied brief specifically recommends beginning preparation during MBBS rather than waiting until graduation.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#7DE4E7]">Explore FMGE / NExT Coaching <ArrowRight className="h-4 w-4" /></a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10"><BookOpenCheck className="h-5 w-5" /></span>
                  <p className="mt-4 font-black">Prepare during MBBS</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">Build consistency from the early years instead of relying on post-graduation cramming.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10"><ShieldCheck className="h-5 w-5" /></span>
                  <p className="mt-4 font-black">Verify current rules</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">NExT rollout and licensing rules can change. Check current NMC notifications before applying.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
