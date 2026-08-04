export default function GlowDivider() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center gap-3" aria-hidden="true">
      <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
      <div className="h-3 w-3 rounded-full bg-cyan-400/60 shadow-[0_0_12px_4px_rgba(34,211,238,0.4)]" />
      <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />
    </div>
  );
}
