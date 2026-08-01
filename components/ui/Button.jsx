"use client";

/**
 * Button — reusable premium CTA button
 * Variants: primary | secondary | outline | ghost | white
 * Sizes: sm | md | lg
 */

import { forwardRef } from "react";

const BASE =
  "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0263CC] disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS = {
  primary:
    "bg-[#0263CC] text-white hover:bg-[#0251a8] active:bg-[#0251a8] shadow-sm hover:shadow-md focus-visible:outline-[#0263CC]",
  secondary:
    "bg-[#4DA5EC] text-white hover:bg-[#3a8fd4] active:bg-[#3a8fd4] shadow-sm hover:shadow-md",
  teal:
    "bg-[#02A7BB] text-white hover:bg-[#0295a7] active:bg-[#0295a7] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-[#0263CC] text-[#0263CC] bg-transparent hover:bg-[#d6e8fb] active:bg-[#d6e8fb]",
  "outline-white":
    "border-2 border-white text-white bg-transparent hover:bg-white/10 active:bg-white/20",
  ghost:
    "text-[#0263CC] bg-transparent hover:bg-[#d6e8fb] active:bg-[#d6e8fb]",
  white:
    "bg-white text-[#0263CC] hover:bg-[#F1F7FC] active:bg-[#F1F7FC] shadow-sm hover:shadow-md font-semibold",
};

const SIZES = {
  sm:  "text-sm px-4 py-2 h-9",
  md:  "text-sm px-6 py-2.5 h-11",
  lg:  "text-base px-8 py-3.5 h-13",
  xl:  "text-base px-10 py-4 h-14",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className = "",
    href,
    external,
    type = "button",
    onClick,
    disabled,
    "aria-label": ariaLabel,
    ...props
  },
  ref
) {
  const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
