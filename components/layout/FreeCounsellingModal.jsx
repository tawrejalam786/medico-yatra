"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

// This module-level value survives Next.js client-side route changes, but resets
// on a browser refresh. That is exactly the requested modal behaviour.
let dismissedUntilRefresh = false;

const PHONE_COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
];

const DEFAULT_DESTINATIONS = [
  "Russia",
  "Georgia",
  "Kazakhstan",
  "Uzbekistan",
  "Kyrgyzstan",
];

const inputClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/10";

/**
 * variant="image"   -> premium split modal with an image panel
 * variant="compact" -> premium modal without an image
 *
 * imageSrc should point to an image stored inside your Next.js /public folder.
 */
export default function FreeCounsellingModal({
  variant = "image",
  imageSrc = "/images/parents-student.png",
  delay = 5000,
  destinations = DEFAULT_DESTINATIONS,
  submitUrl,
  onSubmit,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const closeButtonRef = useRef(null);

  const hasImage = variant === "image";

  useEffect(() => {
    if (dismissedUntilRefresh) return;

    const timer = window.setTimeout(() => {
      if (!dismissedUntilRefresh) setIsOpen(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeModal() {
    dismissedUntilRefresh = true;
    setIsOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.mobile_number = `${payload.country_code}${payload.mobile_number}`;
    payload.enquiry_type = "free_counselling";
    payload.source_page = window.location.href;

    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
        const endpoint =
          submitUrl ||
          (apiBase
            ? `${apiBase}/api/counselling-leads`
            : "/api/counselling-leads");

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(
            result.message || "We could not submit your request. Please try again."
          );
        }
      }

      form.reset();
      setIsSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-[#071A2D]/70 p-0 backdrop-blur-[5px] sm:items-center sm:p-5"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="counselling-modal-title"
        className={`relative max-h-[100dvh] w-full overflow-y-auto bg-white shadow-[0_28px_90px_rgba(2,28,58,.34)] motion-safe:animate-[counsellingModalIn_.32s_ease-out] sm:rounded-[28px] ${
          hasImage ? "max-w-[940px]" : "max-w-[590px]"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          aria-label="Close free counselling form"
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/50 bg-white/90 text-slate-600 shadow-md backdrop-blur transition hover:rotate-90 hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-[#0263CC]/20 sm:right-4 sm:top-4"
        >
          <X size={18} />
        </button>

        <div className={hasImage ? "grid lg:grid-cols-[.82fr_1.18fr]" : ""}>
          {hasImage && (
            <div className="relative min-h-[270px] overflow-hidden bg-gradient-to-br from-[#0263CC] via-[#087FD0] to-[#02A7BB] sm:min-h-[200px] lg:min-h-[620px]">
              <img
                src={imageSrc}
                alt="Medico Yatra counsellor guiding a medical student"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B31] via-[#0263CC]/45 to-[#02A7BB]/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 lg:p-8">
                <span className="mb-3 hidden w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md sm:inline-flex">
                  <GraduationCap size={15} />
                  Your healthcare journey starts here
                </span>

                <h3 className="max-w-sm text-xl font-bold leading-tight sm:text-2xl lg:text-[28px]">
                  Clear answers. Honest guidance. Better decisions.
                </h3>

                <div className="mt-5 hidden space-y-3 text-sm text-white/90 lg:block">
                  {["University shortlisting", "Admission & visa support", "No-obligation counselling"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="relative px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8 lg:px-10 lg:py-10">
            {!isSubmitted ? (
              <>
                <div className={hasImage ? "pr-8" : "pr-10 text-center"}>
                  <span
                    className={`mb-3 items-center gap-1.5 rounded-full bg-[#EAF3FF] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.12em] text-[#0263CC] ${
                      hasImage ? "inline-flex" : "inline-flex"
                    }`}
                  >
                    <Sparkles size={13} /> Free counselling
                  </span>
                  <h2
                    id="counselling-modal-title"
                    className="text-[25px] font-extrabold leading-tight tracking-[-.025em] text-[#071A2D] sm:text-[30px]"
                  >
                    Plan your medical education with confidence
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Share a few details and a Medico Yatra counsellor will contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="counselling-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="counselling-name"
                      name="full_name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="counselling-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="counselling-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="counselling-phone" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-[118px_1fr] gap-2">
                      <select
                        name="country_code"
                        aria-label="Phone country code"
                        defaultValue="+91"
                        className={`${inputClass} cursor-pointer px-2.5`}
                      >
                        {PHONE_COUNTRIES.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <div className="relative">
                        <Phone
                          size={15}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          id="counselling-phone"
                          name="mobile_number"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel"
                          required
                          minLength={7}
                          maxLength={15}
                          pattern="[0-9 ]{7,15}"
                          placeholder="98765 43210"
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferred-destination" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Preferred Destination <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin
                        size={15}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <select
                        id="preferred-destination"
                        name="preferred_destination"
                        required
                        defaultValue=""
                        className={`${inputClass} cursor-pointer pl-10`}
                      >
                        <option value="" disabled>
                          Select a country
                        </option>
                        {destinations.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                        <option value="Not sure">Not sure — help me decide</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="rounded-xl bg-rose-50 px-3.5 py-2.5 text-xs font-medium text-rose-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(2,99,204,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(2,99,204,.32)] focus:outline-none focus:ring-4 focus:ring-[#0263CC]/20 disabled:cursor-wait disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Book My Free Counselling"}
                    {!isSubmitting && (
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                    <ShieldCheck size={13} className="text-[#009E9A]" />
                    Your details are secure. No spam, ever.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[430px] flex-col items-center justify-center py-8 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={42} strokeWidth={1.8} />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#071A2D]">
                  Thank you!
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Your counselling request has been received. Our expert will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-7 rounded-xl bg-[#071A2D] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0263CC]"
                >
                  Continue Exploring
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes counsellingModalIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.975);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

