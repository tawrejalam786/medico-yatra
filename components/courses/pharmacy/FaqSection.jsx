"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Plus,
} from "lucide-react";

import {
  AccordionGroup,
} from "@/components/ui/Accordion";

import { faqs } from "@/data/courses/pharmacy";

import {
  Container,
  PrimaryLink,
  SectionHeading,
} from "./SectionUI";

export default function FaqSection() {
  const [showAll, setShowAll] =
    useState(false);

  const visibleFaqs = showAll
    ? faqs
    : faqs.slice(0, 5);

  /*
   * Pharmacy data mein q/a hai.
   * Existing accordion ko question/answer chahiye.
   *
   * Yeh mapping dono formats support karegi:
   * q/a
   * question/answer
   */
  const accordionItems = useMemo(() => {
    return visibleFaqs.map(
      (faq, index) => ({
        id:
          faq.id ||
          `pharmacy-faq-${index}`,

        question:
          faq.question || faq.q,

        answer:
          faq.answer || faq.a,
      })
    );
  }, [visibleFaqs]);

  const remainingFaqs =
    faqs.length - 5;

  return (
    <section
      id="faq"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-start gap-9 lg:grid-cols-[0.68fr_1.32fr] lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Need answers?"
              title="Pharmacy — frequently asked questions"
              text="Straight answers on courses, licensing, salaries, family pathways and choosing between practice and industry."
            />

            {/* COUNSELLING CARD */}
            <div className="mt-6 rounded-[22px] border border-blue-100 bg-[#F5F9FF] p-5">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[#02A7BB] shadow-sm">
                <MessageCircle className="size-5" />
              </span>

              <p className="mt-4 text-sm font-extrabold text-[#071A49]">
                Still have a question?
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Talk through your profile with
                a Medico Yatra counsellor.
              </p>

              <PrimaryLink className="mt-4 w-full">
                Get free counselling
              </PrimaryLink>
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div>
            <AccordionGroup
              items={accordionItems}
              mode="single"
            />

            {/* LOAD MORE BUTTON */}
            {faqs.length > 5 && (
              <button
                type="button"
                onClick={() =>
                  setShowAll(
                    (current) => !current
                  )
                }
                aria-expanded={showAll}
                className="
                  mt-4 inline-flex min-h-11 w-full
                  items-center justify-center gap-2
                  rounded-xl border
                  border-[#0263CC]/20
                  bg-blue-50 px-5
                  text-xs font-extrabold
                  text-[#0263CC]
                  transition-all duration-300
                  hover:border-[#0263CC]/30
                  hover:bg-blue-100
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#0263CC]/30
                  focus-visible:ring-offset-2
                "
              >
                {showAll ? (
                  <>
                    Show fewer FAQs

                    <ChevronDown className="size-4 rotate-180" />
                  </>
                ) : (
                  <>
                    Load more FAQs
                    ({remainingFaqs})

                    <Plus className="size-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}