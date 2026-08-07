/**
 * Medico Yatra — Illustrative Salary Data
 *
 * ⚠ DEVELOPMENT PLACEHOLDERS ONLY
 * ALL figures below are ILLUSTRATIVE and APPROXIMATE.
 * They represent indicative annual salary ranges for QUALIFIED and LICENSED professionals
 * in each country and profession.
 *
 * Figures vary widely by:
 * - Experience level and seniority
 * - City, region, and employer
 * - Currency fluctuations and year
 * - Licensing / registration status
 * - Immigration / visa category
 *
 * THESE FIGURES MUST BE REPLACED WITH VERIFIED, DATED, SOURCED DATA BEFORE PUBLISHING.
 * Label the source and retrieval date for each figure in production.
 *
 * Earning these salaries requires meeting each country's licensing, registration,
 * and immigration requirements — they are NOT guaranteed outcomes.
 */

// export const SALARY_WARNING =
//   "⚠ Figures are illustrative & approximate, for qualified and licensed professionals. " +
//   "They vary widely by experience, city, employer, currency and year. " +
//   "Earning these salaries requires meeting each country's licensing/registration and immigration requirements. " +
//   "Verify with official sources before relying on them.";

// export const SALARY_DEV_NOTE = "ILLUSTRATIVE — VERIFY BEFORE PUBLISH";

/** Profession column definitions */
export const PROFESSIONS = [
  { id: "physician",           label: "Physician",             shortLabel: "Doctor",        careerIds: ["mbbs"] },
  { id: "dentist",             label: "Dentist",               shortLabel: "Dentist",        careerIds: ["dentistry"] },
  { id: "nurse",               label: "Nurse",                 shortLabel: "Nurse",          careerIds: ["nursing"] },
  { id: "pharmacist",          label: "Pharmacist",            shortLabel: "Pharmacist",     careerIds: ["pharmacy"] },
  { id: "physiotherapist",     label: "Physiotherapist",       shortLabel: "Physio",         careerIds: ["physiotherapy"] },
  { id: "respiratoryTherapist",label: "Respiratory Therapist", shortLabel: "Resp. Therapist",careerIds: ["respiratoryTherapy"] },
];

/**
 * Salary data per country.
 * Currency noted for each country.
 * Range format: "X–Y [Currency]/yr (indicative)"
 */
export const SALARY_DATA = [
  {
    country: "USA",
    flag: "🇺🇸",
    currency: "USD",
    slug: "usa",
    data: {
      physician:            { range: "$220,000–$320,000/yr", note: "Varies by specialty" },
      dentist:              { range: "$160,000–$240,000/yr", note: "General dentist" },
      nurse:                { range: "$70,000–$110,000/yr",  note: "RN — varies by state" },
      pharmacist:           { range: "$120,000–$150,000/yr", note: "Retail/hospital" },
      physiotherapist:      { range: "$75,000–$100,000/yr",  note: "" },
      respiratoryTherapist: { range: "$60,000–$85,000/yr",   note: "" },
    },
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    slug: "canada",
    data: {
      physician:            { range: "CAD $250,000–$380,000/yr", note: "Varies by specialty/province" },
      dentist:              { range: "CAD $120,000–$200,000/yr", note: "" },
      nurse:                { range: "CAD $70,000–$100,000/yr",  note: "RN — varies by province" },
      pharmacist:           { range: "CAD $85,000–$120,000/yr",  note: "" },
      physiotherapist:      { range: "CAD $65,000–$95,000/yr",   note: "" },
      respiratoryTherapist: { range: "CAD $60,000–$85,000/yr",   note: "" },
    },
  },
  {
    country: "UK",
    flag: "🇬🇧",
    currency: "GBP",
    slug: "uk",
    data: {
      physician:            { range: "£40,000–£110,000/yr",  note: "NHS — varies by grade/specialty" },
      dentist:              { range: "£40,000–£100,000/yr",  note: "NHS/private mix" },
      nurse:                { range: "£28,000–£50,000/yr",   note: "NHS bands 5–7" },
      pharmacist:           { range: "£35,000–£65,000/yr",   note: "" },
      physiotherapist:      { range: "£28,000–£50,000/yr",   note: "NHS bands 5–7" },
      respiratoryTherapist: { range: "£28,000–£45,000/yr",   note: "" },
    },
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    slug: "australia",
    data: {
      physician:            { range: "AUD $200,000–$400,000/yr", note: "Varies by specialty" },
      dentist:              { range: "AUD $100,000–$180,000/yr", note: "" },
      nurse:                { range: "AUD $65,000–$95,000/yr",   note: "RN — varies by state/sector" },
      pharmacist:           { range: "AUD $75,000–$110,000/yr",  note: "" },
      physiotherapist:      { range: "AUD $65,000–$95,000/yr",   note: "" },
      respiratoryTherapist: { range: "AUD $60,000–$85,000/yr",   note: "" },
    },
  },
  {
    country: "Norway",
    flag: "🇳🇴",
    currency: "NOK",
    slug: "norway",
    data: {
      physician:            { range: "NOK 900,000–1,500,000/yr", note: "" },
      dentist:              { range: "NOK 700,000–1,100,000/yr", note: "" },
      nurse:                { range: "NOK 480,000–650,000/yr",   note: "" },
      pharmacist:           { range: "NOK 520,000–720,000/yr",   note: "" },
      physiotherapist:      { range: "NOK 500,000–700,000/yr",   note: "" },
      respiratoryTherapist: { range: "NOK 480,000–650,000/yr",   note: "" },
    },
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    currency: "DKK",
    slug: "denmark",
    data: {
      physician:            { range: "DKK 700,000–1,100,000/yr", note: "" },
      dentist:              { range: "DKK 600,000–950,000/yr",   note: "" },
      nurse:                { range: "DKK 380,000–520,000/yr",   note: "" },
      pharmacist:           { range: "DKK 400,000–580,000/yr",   note: "" },
      physiotherapist:      { range: "DKK 380,000–540,000/yr",   note: "" },
      respiratoryTherapist: { range: "DKK 360,000–500,000/yr",   note: "" },
    },
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    slug: "germany",
    data: {
      physician:            { range: "€60,000–€120,000/yr",  note: "Varies by specialty" },
      dentist:              { range: "€55,000–€100,000/yr",  note: "" },
      nurse:                { range: "€32,000–€50,000/yr",   note: "" },
      pharmacist:           { range: "€40,000–€65,000/yr",   note: "" },
      physiotherapist:      { range: "€35,000–€55,000/yr",   note: "" },
      respiratoryTherapist: { range: "€32,000–€50,000/yr",   note: "" },
    },
  },
  {
    country: "Ireland",
    flag: "🇮🇪",
    currency: "EUR",
    slug: "ireland",
    data: {
      physician:            { range: "€70,000–€140,000/yr",  note: "HSE — varies by grade" },
      dentist:              { range: "€60,000–€110,000/yr",  note: "" },
      nurse:                { range: "€35,000–€60,000/yr",   note: "HSE grades" },
      pharmacist:           { range: "€45,000–€75,000/yr",   note: "" },
      physiotherapist:      { range: "€38,000–£60,000/yr",   note: "" },
      respiratoryTherapist: { range: "€36,000–€55,000/yr",   note: "" },
    },
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    currency: "EUR",
    slug: "netherlands",
    data: {
      physician:            { range: "€80,000–€150,000/yr",  note: "" },
      dentist:              { range: "€65,000–€110,000/yr",  note: "" },
      nurse:                { range: "€35,000–€55,000/yr",   note: "" },
      pharmacist:           { range: "€45,000–€70,000/yr",   note: "" },
      physiotherapist:      { range: "€38,000–€60,000/yr",   note: "" },
      respiratoryTherapist: { range: "€35,000–€55,000/yr",   note: "" },
    },
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    currency: "SEK",
    slug: "sweden",
    data: {
      physician:            { range: "SEK 700,000–1,100,000/yr", note: "" },
      dentist:              { range: "SEK 550,000–900,000/yr",   note: "" },
      nurse:                { range: "SEK 360,000–500,000/yr",   note: "" },
      pharmacist:           { range: "SEK 380,000–530,000/yr",   note: "" },
      physiotherapist:      { range: "SEK 360,000–510,000/yr",   note: "" },
      respiratoryTherapist: { range: "SEK 340,000–490,000/yr",   note: "" },
    },
  },
];

/**
 * Maps finder career IDs to salary profession IDs for auto-highlighting
 */
export const CAREER_TO_PROFESSION_MAP = {
  mbbs:               "physician",
  dentistry:          "dentist",
  nursing:            "nurse",
  pharmacy:           "pharmacist",
  physiotherapy:      "physiotherapist",
  respiratoryTherapy: "respiratoryTherapist",
  mlt:                "respiratoryTherapist",
  all:                null,
};
