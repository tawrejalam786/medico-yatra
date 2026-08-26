"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faBriefcaseMedical, faEarthAsia, faHouseUser, faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { whyPharmacy } from "@/data/courses/pharmacy";
import { Container, MobileScroller, SectionHeading } from "./SectionUI";

const icons = [faArrowRightArrowLeft, faBriefcaseMedical, faMicroscope, faEarthAsia, faHouseUser];
const tones = {
  blue: "bg-blue-50 text-[#0263CC] border-blue-100",
  teal: "bg-teal-50 text-[#009E9A] border-teal-100",
  violet: "bg-violet-50 text-violet-600 border-violet-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
};

export default function WhyPharmacy() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading eyebrow="Why pharmacy now" title="A smart, versatile career with more than one route" text="Most students see only the chemist counter. The bigger picture includes patient care and a global science, biotech and pharmaceutical industry." />
        <MobileScroller className="mt-8 sm:grid-cols-2 lg:grid-cols-5">
          {whyPharmacy.map((item, index) => (
            <article key={item.title} className={`w-[82vw] max-w-[300px] shrink-0 snap-center rounded-[24px] border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:max-w-none ${tones[item.tone]}`}>
              <span className="grid size-11 place-items-center rounded-2xl bg-white shadow-sm"><FontAwesomeIcon icon={icons[index]} className="text-lg" /></span>
              <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[.16em] opacity-60">0{index + 1}</p>
              <h3 className="mt-1 text-base font-extrabold text-[#071A49]">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </MobileScroller>
        <p className="mt-5 text-[10px] leading-5 text-slate-400 sm:text-xs">Eligibility, licensing and migration rules vary by country and can change. We help you understand current options.</p>
      </Container>
    </section>
  );
}
