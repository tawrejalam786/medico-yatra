"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { BriefcaseBusiness, GraduationCap, HeartHandshake, House, ShieldAlert } from "lucide-react";
import { Container, Notice, PrimaryLink, Reveal } from "./SectionUI";

const benefits = [
  [HeartHandshake, "Dependent visas", "Possible routes for spouse and children"],
  [GraduationCap, "Family access", "Local schooling and healthcare in many destinations"],
  [BriefcaseBusiness, "Spouse work rights", "Available in several countries; rules vary"],
  [House, "Long-term routes", "Settlement pathways after eligibility conditions"],
];

export default function FamilySettlement() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#061B4B] via-[#073B78] to-[#008E9C] p-5 text-white shadow-[0_28px_80px_rgba(2,48,112,.2)] sm:p-8 lg:p-12">
          <div className="grid items-center gap-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
            <Reveal>
              <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-2xl ring-1 ring-white/15"><FontAwesomeIcon icon={faPeopleRoof} /></span>
              <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[.2em] text-cyan-200">Career + life planning</p>
              <h2 className="mt-3 text-[27px] font-extrabold leading-[1.12] tracking-[-.8px] sm:text-[36px] lg:text-[42px]">A career that can become a life abroad — with your family</h2>
              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">In several countries, skilled routes may allow qualified pharmacy professionals to live, work and bring eligible family members.</p>
              <PrimaryLink inverse className="mt-6">Discuss family-settlement options</PrimaryLink>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map(([Icon, title, text]) => (
                  <article key={title} className="rounded-[20px] border border-white/15 bg-white/10 p-4 backdrop-blur sm:p-5">
                    <Icon className="size-5 text-cyan-200" />
                    <h3 className="mt-4 text-xs font-extrabold sm:text-sm">{title}</h3>
                    <p className="mt-2 text-[10px] leading-5 text-blue-100 sm:text-xs">{text}</p>
                  </article>
                ))}
              </div>
              <Notice className="mt-4 !border-white/15 !bg-white/10 !text-blue-50">
                <div className="flex items-start gap-3"><ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-300" /><p><strong>Honest framing:</strong> Eligibility depends on qualifications, registration where required, language scores, job offers and current policy. Medico Yatra does not guarantee jobs, visas, settlement or PR.</p></div>
              </Notice>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
