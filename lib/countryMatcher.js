/**
 * Medico Yatra — Country Finder Matching Algorithm
 *
 * Inputs:
 *   career   — one of FINDER_CAREER_OPTIONS ids
 *   budget   — one of FINDER_BUDGET_OPTIONS ids
 *   priority — one of FINDER_PRIORITY_OPTIONS ids
 *
 * Returns an array of matched country objects (3–5 results).
 * Never returns zero results.
 */

import { COUNTRIES } from "@/data/countries";

/**
 * Score a single country against the three finder inputs.
 * Higher score = better match.
 */
function scoreCountry(country, career, budget, priority) {
  let score = 0;

  // ── Career match ──────────────────────────────────────────
  if (career === "all") {
    score += 1; // base — all countries eligible
  } else {
    if (country.supportedCareers.includes(career)) {
      score += 3;
    } else if (country.supportedCareers.includes("all")) {
      score += 1;
    }
    // Extra boost if the whyItFits key exists for this career
    if (country.whyItFits[career]) {
      score += 1;
    }
  }

  // ── Budget match ──────────────────────────────────────────
  if (budget === "unsure") {
    score += 1; // unsure — don't penalise any country
  } else {
    if (country.budgetTiers.includes(budget)) {
      score += 3;
    }
  }

  // ── Priority match ────────────────────────────────────────
  if (country.priorities.includes(priority)) {
    score += 3;
  }

  return score;
}

/**
 * Generate the "why this fits you" explanation for a country card.
 */
function getWhyItFits(country, career) {
  if (career && career !== "all" && country.whyItFits[career]) {
    return country.whyItFits[career];
  }
  return country.whyItFits.default || country.shortDescription;
}

/**
 * Main matching function.
 *
 * @param {string} career
 * @param {string} budget
 * @param {string} priority
 * @returns {Array} matched country objects with added `whyThisFits` string
 */
export function matchCountries(career, budget, priority) {
  if (!career && !budget && !priority) return [];

  // Score all countries
  const scored = COUNTRIES.map((country) => ({
    ...country,
    whyThisFits: getWhyItFits(country, career),
    _score: scoreCountry(country, career || "all", budget || "unsure", priority || "nmcTrusted"),
  }));

  // Sort by score descending
  scored.sort((a, b) => b._score - a._score);

  // Take top results with score > 0
  let results = scored.filter((c) => c._score > 0).slice(0, 5);

  // ── Fallback: if we have fewer than 3, relax constraints progressively ──
  if (results.length < 3) {
    // Relax priority — try without priority
    const relaxed = COUNTRIES.map((country) => ({
      ...country,
      whyThisFits: getWhyItFits(country, career),
      _score: scoreCountry(country, career || "all", budget || "unsure", null),
    }))
      .sort((a, b) => b._score - a._score)
      .slice(0, 5);

    results = relaxed;
  }

  if (results.length < 3) {
    // Relax budget too — just match career
    const veryRelaxed = COUNTRIES.map((country) => ({
      ...country,
      whyThisFits: getWhyItFits(country, career),
      _score: scoreCountry(country, career || "all", null, null),
    }))
      .sort((a, b) => b._score - a._score)
      .slice(0, 5);

    results = veryRelaxed;
  }

  // Ultimate fallback — return top 4 countries regardless
  if (results.length === 0) {
    results = COUNTRIES.slice(0, 4).map((country) => ({
      ...country,
      whyThisFits: country.whyItFits.default || country.shortDescription,
      _score: 0,
    }));
  }

  // Remove internal score from returned objects
  return results.map(({ _score, ...rest }) => rest);
}
