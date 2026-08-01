/**
 * Card — reusable premium card container
 */

export default function Card({ children, className = "", hover = false, selected = false, onClick, as: Tag = "div" }) {
  const base = "rounded-2xl bg-white border transition-all duration-200";
  const shadow = "shadow-sm";
  const hoverStyle = hover ? "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer" : "";
  const selectedStyle = selected
    ? "border-[#0263CC] shadow-md ring-2 ring-[#0263CC]/20 bg-[#F1F7FC]"
    : "border-[#E2E8F0]";

  return (
    <Tag
      className={`${base} ${shadow} ${hoverStyle} ${selectedStyle} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && onClick(e) : undefined}
    >
      {children}
    </Tag>
  );
}
