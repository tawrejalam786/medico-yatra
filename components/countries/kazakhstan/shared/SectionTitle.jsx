export default function SectionTitle({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <span className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] ${light ? "bg-white/10 text-white" : "bg-[#EAF3FF] text-[#0263CC]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-3xl font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[46px] ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-white/70" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
