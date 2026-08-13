export default function SectionCard({ children, className = "" }) {
  return <section className={`rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[.03] sm:p-6 lg:p-7 ${className}`}>{children}</section>;
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-blue-600">{eyebrow}</span>}
      <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">{title}</h2>
      {description && <p className="mt-1.5 max-w-2xl text-xs leading-5 text-slate-500">{description}</p>}
    </div>
  );
}