import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, href = "#lead", className = "" }) {
  return (
    <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#178BE5] px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_rgba(2,99,204,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(2,99,204,.3)] ${className}`}>
      {children}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

export function SecondaryButton({ children, href = "#universities", className = "" }) {
  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-[#0263CC]/30 hover:text-[#0263CC] ${className}`}>
      {children}<ArrowRight className="h-4 w-4" />
    </a>
  );
}
