"use client";

import React, {
  forwardRef,
  useState,
} from "react";

import { Check } from "lucide-react";

function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Checkbox = forwardRef(
  function Checkbox(
    {
      className = "",
      checked,
      defaultChecked = false,
      disabled = false,
      onCheckedChange,
      onChange,
      ...props
    },
    ref
  ) {
    const [
      internalChecked,
      setInternalChecked,
    ] = useState(defaultChecked);

    const isControlled =
      checked !== undefined;

    const isChecked = isControlled
      ? checked
      : internalChecked;

    const handleChange = (event) => {
      const nextChecked =
        event.target.checked;

      if (!isControlled) {
        setInternalChecked(nextChecked);
      }

      onCheckedChange?.(nextChecked);

      onChange?.(event);
    };

    return (
      <span
        data-slot="checkbox"
        data-state={
          isChecked
            ? "checked"
            : "unchecked"
        }
        data-disabled={
          disabled ? "" : undefined
        }
        className={mergeClasses(
          "relative inline-flex size-4 shrink-0",
          "items-center justify-center",
          "overflow-hidden rounded-[4px]",
          "border border-slate-300",
          "bg-white text-white shadow-sm",
          "transition-all duration-200",

          "focus-within:border-[#0263CC]",
          "focus-within:ring-2",
          "focus-within:ring-[#0263CC]/20",

          "data-[state=checked]:border-[#0263CC]",
          "data-[state=checked]:bg-[#0263CC]",

          "data-[disabled]:cursor-not-allowed",
          "data-[disabled]:opacity-50",

          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="absolute inset-0 z-10 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          {...props}
        />

        <Check
          aria-hidden="true"
          className={mergeClasses(
            "size-3 transition-opacity duration-150",
            isChecked
              ? "opacity-100"
              : "opacity-0"
          )}
        />
      </span>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };