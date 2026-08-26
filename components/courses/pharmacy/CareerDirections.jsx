"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { BadgeCheck, BriefcaseMedical, FlaskConical, ShieldCheck } from "lucide-react";
import { Container, Notice, Reveal, SectionHeading } from "./SectionUI";

const directions = [
  {
    key: "A",
    title: "Clinical / Community Pharmacist",
    courses: "BPharm · PharmD · Clinical Pharmacy",
    roles: "Community pharmacist · Hospital pharmacist · Clinical pharmacist",
    licence: "Yes — country registration required",
    icon: faUserDoctor,
    gradient: "from-[#0759B8] to-[#0263CC]",
    accent: "text-blue-200",
  },
  {
    key: "B",
    title: "Pharma Science / Industry",
    courses: "Pharma Sciences · Medicinal Chemistry · Cosmetic Science · Toxicology · Pharma Biotech",
    roles: "R&D · Formulation · Regulatory · QA/QC · Drug safety · Biotech",
    licence: "Usually no pharmacist licence",
    icon: faFlaskVial,
    gradient: "from-[#008D98] to-[#02A7BB]",
    accent: "text-cyan-100",
  },
];

export default function CareerDirections() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FF] py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading eyebrow="The clarity most pages miss" title="Pharmacy opens two big doors — choose with eyes open" text="Both routes can lead to international careers, but the course choice, licensing requirements and type of work are very different." />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {directions.map((item, index) => (
            <Reveal key={item.key} delay={index * 0.08}>
              <article className={`h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${item.gradient} p-5 text-white shadow-[0_22px_60px_rgba(2,48,112,.14)] sm:p-7`}>
                <div className="flex items-start justify-between gap-4"><span className="grid size-14 place-items-center rounded-[20px] bg-white/12 text-2xl ring-1 ring-white/15"><FontAwesomeIcon icon={item.icon} /></span><span className="rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest">Direction {item.key}</span></div>
                <h3 className="mt-7 text-xl font-extrabold sm:text-2xl">{item.title}</h3>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-white/10 p-4"><p className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider ${item.accent}`}><BadgeCheck className="size-4" /> Typical courses</p><p className="mt-2 text-xs font-semibold leading-6 sm:text-sm">{item.courses}</p></div>
                  <div className="rounded-2xl bg-white/10 p-4"><p className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider ${item.accent}`}>{index === 0 ? <BriefcaseMedical className="size-4" /> : <FlaskConical className="size-4" />} Example roles</p><p className="mt-2 text-xs font-semibold leading-6 sm:text-sm">{item.roles}</p></div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/15 p-4"><ShieldCheck className="size-5 shrink-0" /><div><p className={`text-[9px] font-extrabold uppercase tracking-wider ${item.accent}`}>Licence to practise?</p><p className="mt-1 text-xs font-extrabold sm:text-sm">{item.licence}</p></div></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Notice tone="blue" className="mt-5"><strong>Honest note:</strong> Industry and science careers often let graduates work abroad without a pharmacist-licensing exam — a route many students do not know about. Practising as a pharmacist is rewarding but requires country registration.</Notice>
      </Container>
    </section>
  );
}
