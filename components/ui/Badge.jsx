/**
 * Badge — small label chip
 * Variants: primary | sky | teal | neutral | success | warning
 */

export default function Badge({ children, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-[#d6e8fb] text-[#0263CC] border border-[#0263CC]/20",
    sky:     "bg-[#e8f4fd] text-[#0251a8] border border-[#4DA5EC]/30",
    teal:    "bg-[#d6f4f7] text-[#017b8a] border border-[#02A7BB]/30",
    neutral: "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    white:   "bg-white/20 text-white border border-white/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-body font-medium ${variants[variant] ?? variants.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
