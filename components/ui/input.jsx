import React, {
  forwardRef,
} from "react";

function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Input = forwardRef(
  function Input(
    {
      className = "",
      type = "text",
      ...props
    },
    ref
  ) {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={mergeClasses(
          "h-9 w-full min-w-0",
          "rounded-md border border-slate-200",
          "bg-white px-3 py-1",
          "text-base text-slate-900",
          "shadow-sm outline-none",
          "transition-all duration-200",

          "placeholder:text-slate-400",

          "selection:bg-[#0263CC]",
          "selection:text-white",

          "focus-visible:border-[#0263CC]",
          "focus-visible:ring-2",
          "focus-visible:ring-[#0263CC]/15",

          "disabled:pointer-events-none",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",

          "aria-invalid:border-red-500",
          "aria-invalid:ring-2",
          "aria-invalid:ring-red-500/15",

          "file:mr-3",
          "file:border-0",
          "file:bg-transparent",
          "file:text-sm",
          "file:font-semibold",

          "md:text-sm",

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };