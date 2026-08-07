"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ChevronDown } from "lucide-react";
import { SALARY_DATA, PROFESSIONS, SALARY_WARNING, SALARY_DEV_NOTE, CAREER_TO_PROFESSION_MAP } from "@/data/salaryData";
import Link from "next/link";

/**
 * SalaryComparison
 * Props:
 *   highlightCareer — career id from CountryFinder (e.g. "nursing"), or null
 */
export default function SalaryComparison({ highlightCareer }) {
  const [mobileProfession, setMobileProfession] = useState(PROFESSIONS[0].id);

  // Derive highlighted profession from finder career
  const highlightedProfession = highlightCareer ? CAREER_TO_PROFESSION_MAP[highlightCareer] : null;

  // On mobile, prefer highlightedProfession if set
  const activeMobileProfession = highlightedProfession || mobileProfession;

  return (
    <section
      id="salary-comparison"
      aria-labelledby="salary-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3"
          >
            Career Possibilities
          </motion.p>
          <motion.h2
            id="salary-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4"
          >
            Where Could a Healthcare Career Take You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body font-light text-[#475569] text-base sm:text-lg max-w-2xl mx-auto"
          >
            A healthcare qualification can open doors worldwide. Explore indicative average annual
            salaries for qualified and licensed professionals.
          </motion.p>
        </div>

        {/* Warning banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8"
          role="note"
          aria-label="Important disclaimer about salary figures"
        >
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true"/>
          <div>
            <p className="font-body font-medium text-sm text-amber-800 mb-1">
              ⚠ {SALARY_DEV_NOTE}
            </p>
            <p className="font-body font-light text-xs text-amber-700 leading-relaxed">
              {SALARY_WARNING}
            </p>
          </div>
        </motion.div> */}

        {/* Finder highlight note */}
        {highlightedProfession && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 bg-[#d6e8fb] border border-[#0263CC]/20 rounded-xl px-4 py-3 mb-5 w-fit"
          >
            <span className="text-base" aria-hidden="true">👆</span>
            <p className="font-body font-medium text-sm text-[#0263CC]">
              Highlighted because you told us you're interested in{" "}
              <strong>{PROFESSIONS.find((p) => p.id === highlightedProfession)?.label}</strong>.
            </p>
          </motion.div>
        )}

        {/* Mobile profession selector */}
        <div className="sm:hidden mb-5">
          <label htmlFor="mobile-profession" className="font-body font-medium text-sm text-[#334155] mb-2 block">
            Select a profession to compare:
          </label>
          <div className="relative">
            <select
              id="mobile-profession"
              value={activeMobileProfession}
              onChange={(e) => setMobileProfession(e.target.value)}
              className="w-full appearance-none border border-[#E2E8F0] rounded-xl px-4 py-3 font-body text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#0263CC] pr-10"
            >
              {PROFESSIONS.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" aria-hidden="true"/>
          </div>
        </div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="hidden sm:block"
        >
          <div className="table-scroll rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            <table className="w-full min-w-[800px] border-collapse" aria-label="Healthcare salary comparison by country">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th scope="col" className="text-left px-5 py-4 font-body font-semibold text-sm sticky left-0 bg-[#0F172A] z-10 min-w-[140px]">
                    Country
                  </th>
                  {PROFESSIONS.map((p) => (
                    <th
                      key={p.id}
                      scope="col"
                      className={`text-left px-4 py-4 font-body font-semibold text-sm whitespace-nowrap transition-colors duration-300 ${
                        p.id === highlightedProfession
                          ? "bg-[#0263CC] text-white"
                          : "text-white/80"
                      }`}
                    >
                      {p.label}
                      {p.id === highlightedProfession && (
                        <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#4DA5EC] align-middle" aria-label="Your selected profession"/>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SALARY_DATA.map((row, i) => (
                  <tr
                    key={row.country}
                    className={`border-t border-[#E2E8F0] transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                    } hover:bg-[#F1F7FC]`}
                  >
                    {/* Country */}
                    <td className={`px-5 py-4 sticky left-0 z-10 border-r border-[#E2E8F0] ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
                      <Link
                        href={`/countries/${row.slug}`}
                        className="flex items-center gap-2.5 hover:text-[#0263CC] transition-colors group"
                        aria-label={`Explore ${row.country}`}
                      >
                        <span className="text-xl" aria-hidden="true">{row.flag}</span>
                        <span className="font-body font-medium text-sm text-[#0F172A] group-hover:text-[#0263CC] transition-colors whitespace-nowrap">
                          {row.country}
                        </span>
                      </Link>
                    </td>

                    {/* Salary cells */}
                    {PROFESSIONS.map((p) => {
                      const cell = row.data[p.id];
                      const isHighlighted = p.id === highlightedProfession;
                      return (
                        <td
                          key={p.id}
                          className={`px-4 py-4 transition-all duration-300 ${
                            isHighlighted
                              ? "bg-[#F1F7FC] border-x-2 border-[#4DA5EC]/40"
                              : ""
                          }`}
                        >
                          {cell ? (
                            <div>
                              <p className={`font-body font-medium text-xs leading-snug ${isHighlighted ? "text-[#0263CC]" : "text-[#334155]"}`}>
                                {cell.range}
                              </p>
                              {cell.note && (
                                <p className="font-body text-xs text-[#94A3B8] mt-0.5">{cell.note}</p>
                              )}
                            </div>
                          ) : (
                            <span className="text-[#CBD5E1] text-xs font-body">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="sm:hidden space-y-3">
          {SALARY_DATA.map((row) => {
            const cell = row.data[activeMobileProfession];
            return (
              <div
                key={row.country}
                className="flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl" aria-hidden="true">{row.flag}</span>
                  <span className="font-body font-medium text-sm text-[#0F172A]">{row.country}</span>
                </div>
                {cell ? (
                  <p className="font-body font-semibold text-xs text-[#0263CC] text-right max-w-[160px] leading-snug">
                    {cell.range}
                  </p>
                ) : (
                  <span className="text-[#CBD5E1] text-xs font-body">—</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Cost recovery card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 bg-[#F1F7FC] border border-[#d6e8fb] rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl" aria-hidden="true">💡</span>
            <div>
              <p className="font-body text-xs font-medium text-[#0263CC] uppercase tracking-wider mb-1">
                Illustrative Example Only
              </p>
              <h3 className="font-heading text-xl sm:text-2xl text-[#0F172A]">
                Understanding Your Potential Investment
              </h3>
            </div>
          </div>
          <p className="font-body font-light text-sm text-[#475569] leading-relaxed mb-3">
            At an indicative entry-level salary of ~$45,000/yr for a Nurse in the UK against an
            illustrative total programme cost of ~$60,000–80,000, a graduate could potentially recover
            their total study investment within roughly 1.5–2 years of qualified employment — before
            accounting for living costs, tax, or currency movement.
          </p>
          <p className="font-body font-light text-sm text-[#94A3B8] italic mb-4">
            These are possibilities for licensed professionals, not guarantees.
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["USMLE", "NCLEX", "PLAB / UKMLA", "AMC"].map((exam) => (
              <span key={exam} className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-full font-body font-medium text-xs text-[#475569]">
                {exam}
              </span>
            ))}
          </div>
          <a
            href="#country-finder"
            className="inline-flex items-center gap-2 font-body font-medium text-sm text-[#0263CC] hover:text-[#0251a8] transition-colors"
            aria-label="Go to Country Finder to find the right career and country"
          >
            Find the Right Career & Country for Me →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
