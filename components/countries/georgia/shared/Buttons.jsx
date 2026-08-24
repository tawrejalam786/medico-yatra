import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, href = "#lead", className = "" }) {
  return (
    <a href={href} className={`inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-5 text-sm font-black text-white shadow-[0_16px_36px_rgba(2,99,204,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(2,99,204,.28)] ${className}`}>
      {children}<ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function SecondaryButton({ children, href = "#universities", className = "" }) {
  return (
    <a href={href} className={`inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 transition duration-300 hover:border-[#0263CC]/30 hover:text-[#0263CC] ${className}`}>
      {children}
    </a>
  );
}
