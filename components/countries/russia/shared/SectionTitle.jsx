export default function SectionTitle({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
          <span className={`h-px w-8 ${light ? "bg-cyan-300" : "bg-[#02A7BB]"}`} />
          <span className={`text-[11px] font-black uppercase tracking-[0.22em] ${light ? "text-cyan-200" : "text-[#0263CC]"}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[48px] ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-sm leading-7 sm:text-base sm:leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}
