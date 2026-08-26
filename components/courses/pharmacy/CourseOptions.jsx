"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faBiohazard,
  faCapsules,
  faDna,
  faFlaskVial,
  faHospitalUser,
  faPumpMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseGroups } from "@/data/courses/pharmacy";
import { Container, MobileScroller, Reveal, SectionHeading } from "./SectionUI";

const iconMap = {
  capsules: faCapsules,
  doctor: faUserDoctor,
  hospital: faHospitalUser,
  flask: faFlaskVial,
  atom: faAtom,
  bottle: faPumpMedical,
  shield: faBiohazard,
  dna: faDna,
};

function CourseCards({ courses, science = false }) {
  return (
    <MobileScroller className={`sm:grid-cols-2 ${science ? "lg:grid-cols-3 xl:grid-cols-5" : "lg:grid-cols-3"}`}>
      {courses.map((course) => (
        <article key={course.name} className="group w-[82vw] max-w-[330px] shrink-0 snap-center rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#02A7BB]/40 hover:shadow-[0_20px_55px_rgba(2,99,204,.12)] sm:w-auto sm:max-w-none">
          <div className="flex items-start justify-between gap-3">
            <span className={`grid size-12 place-items-center rounded-2xl text-xl ${science ? "bg-teal-50 text-[#009E9A]" : "bg-blue-50 text-[#0263CC]"}`}><FontAwesomeIcon icon={iconMap[course.icon]} /></span>
            <span className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide ${science ? "bg-teal-50 text-[#008E9C]" : "bg-blue-50 text-[#0263CC]"}`}>{course.tag}</span>
          </div>
          <h3 className="mt-6 text-base font-extrabold leading-6 text-[#071A49]">{course.name}</h3>
          <p className="mt-2 min-h-[48px] text-xs leading-6 text-slate-600">{course.text}</p>
          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] font-bold text-[#0263CC]"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-3.5" /> Study abroad route</span><ArrowRight className="size-4 transition group-hover:translate-x-1" /></div>
        </article>
      ))}
    </MobileScroller>
  );
}

export default function CourseOptions() {
  return (
    <section id="courses" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading align="center" eyebrow="8 pharmacy programmes" title="Pharmacy courses we help you study abroad" text="Start with the career direction, then choose the qualification. This prevents a course decision that closes the door you actually want." />
        <Reveal className="mt-8">
          <Tabs defaultValue="practice" className="w-full">
            <TabsList className="mx-auto grid h-auto w-full max-w-xl grid-cols-2 rounded-2xl bg-slate-100 p-1.5">
              <TabsTrigger value="practice" className="min-h-11 rounded-xl px-2 text-[11px] font-extrabold data-[state=active]:bg-[#0263CC] data-[state=active]:text-white sm:text-sm">Clinical / Practice</TabsTrigger>
              <TabsTrigger value="science" className="min-h-11 rounded-xl px-2 text-[11px] font-extrabold data-[state=active]:bg-[#02A7BB] data-[state=active]:text-white sm:text-sm">Science / Industry</TabsTrigger>
            </TabsList>
            <TabsContent value="practice" className="mt-7"><CourseCards courses={courseGroups.practice} /></TabsContent>
            <TabsContent value="science" className="mt-7"><CourseCards courses={courseGroups.science} science /></TabsContent>
          </Tabs>
        </Reveal>
        <div className="mt-7 rounded-2xl border border-[#0263CC]/15 bg-blue-50 px-4 py-4 text-center text-xs font-semibold leading-6 text-[#071A49] sm:text-sm">Not sure which course fits your strengths and goals? <a href="#counselling" className="font-extrabold text-[#0263CC] underline underline-offset-4">That’s exactly what free counselling is for.</a></div>
      </Container>
    </section>
  );
}
