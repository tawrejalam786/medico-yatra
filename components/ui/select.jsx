"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const SelectContext = createContext(null);

function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "Select components must be used inside Select"
    );
  }

  return context;
}

function Select({
  children,
  value,
  defaultValue = "",
  onValueChange,
  disabled = false,
  name,
  className = "",
}) {
  const [internalValue, setInternalValue] =
    useState(defaultValue);

  const [open, setOpen] = useState(false);

  const [optionLabels, setOptionLabels] =
    useState({});

  const selectId = useId();
  const selectRef = useRef(null);

  const isControlled = value !== undefined;

  const selectedValue = isControlled
    ? value
    : internalValue;

  const registerOption = useCallback(
    (optionValue, optionLabel) => {
      setOptionLabels((currentLabels) => {
        if (
          currentLabels[optionValue] ===
          optionLabel
        ) {
          return currentLabels;
        }

        return {
          ...currentLabels,
          [optionValue]: optionLabel,
        };
      });
    },
    []
  );

  const selectOption = (optionValue) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }

    onValueChange?.(optionValue);

    setOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        selectRef.current &&
        !selectRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <SelectContext.Provider
      value={{
        disabled,
        open,
        setOpen,
        selectId,
        selectedValue,
        optionLabels,
        registerOption,
        selectOption,
      }}
    >
      <div
        ref={selectRef}
        data-slot="select"
        className={mergeClasses(
          "relative inline-block w-full",
          className
        )}
      >
        {name && (
          <input
            type="hidden"
            name={name}
            value={selectedValue}
          />
        )}

        {children}
      </div>
    </SelectContext.Provider>
  );
}

function SelectValue({
  placeholder = "Select an option",
  className = "",
}) {
  const {
    selectedValue,
    optionLabels,
  } = useSelectContext();

  const selectedLabel =
    optionLabels[selectedValue] ||
    selectedValue;

  return (
    <span
      data-slot="select-value"
      className={mergeClasses(
        "min-w-0 flex-1 truncate text-left",
        className
      )}
    >
      {selectedLabel || placeholder}
    </span>
  );
}

function SelectTrigger({
  children,
  className = "",
  size = "default",
  disabled,
  ...props
}) {
  const select = useSelectContext();

  const isDisabled =
    disabled ?? select.disabled;

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" ||
      event.key === "ArrowDown" ||
      event.key === " "
    ) {
      event.preventDefault();
      select.setOpen(true);
    }
  };

  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={select.open}
      aria-controls={`${select.selectId}-content`}
      disabled={isDisabled}
      data-slot="select-trigger"
      data-size={size}
      data-state={
        select.open ? "open" : "closed"
      }
      data-placeholder={
        select.selectedValue
          ? undefined
          : ""
      }
      onClick={() =>
        select.setOpen(
          (currentValue) => !currentValue
        )
      }
      onKeyDown={handleKeyDown}
      className={mergeClasses(
        "flex w-full items-center justify-between gap-2",
        "rounded-md border border-slate-200",
        "bg-white px-3 py-2 text-sm text-slate-900",
        "shadow-sm outline-none",
        "transition-all duration-200",
        "focus-visible:border-[#0263CC]",
        "focus-visible:ring-2",
        "focus-visible:ring-[#0263CC]/15",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "data-[placeholder]:text-slate-400",
        size === "sm" ? "h-8" : "h-9",
        className
      )}
      {...props}
    >
      {children}

      <ChevronDown
        className={mergeClasses(
          "size-4 shrink-0 text-slate-400",
          "transition-transform duration-200",
          select.open && "rotate-180"
        )}
      />
    </button>
  );
}

function SelectContent({
  children,
  className = "",
  ...props
}) {
  const { open, selectId } =
    useSelectContext();

  if (!open) {
    return null;
  }

  return (
    <div
      id={`${selectId}-content`}
      role="listbox"
      data-slot="select-content"
      data-state="open"
      className={mergeClasses(
        "absolute left-0 top-full z-50 mt-2",
        "max-h-64 w-full overflow-y-auto",
        "rounded-xl border border-slate-200",
        "bg-white p-1.5 text-slate-900",
        "shadow-[0_18px_50px_rgba(15,23,42,.14)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectItem({
  children,
  className = "",
  value,
  disabled = false,
  label,
  ...props
}) {
  const {
    selectedValue,
    selectOption,
    registerOption,
  } = useSelectContext();

  const isSelected =
    selectedValue === value;

  const optionLabel =
    label ||
    (typeof children === "string"
      ? children
      : value);

  useEffect(() => {
    registerOption(
      value,
      optionLabel
    );
  }, [
    value,
    optionLabel,
    registerOption,
  ]);

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      disabled={disabled}
      data-slot="select-item"
      data-state={
        isSelected
          ? "checked"
          : "unchecked"
      }
      onClick={() =>
        selectOption(value)
      }
      className={mergeClasses(
        "relative flex w-full items-center",
        "rounded-lg py-2.5 pl-3 pr-9",
        "text-left text-sm outline-none",
        "transition-colors duration-200",
        "hover:bg-blue-50",
        "hover:text-[#0263CC]",
        "focus-visible:bg-blue-50",
        "focus-visible:text-[#0263CC]",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        isSelected &&
          "bg-blue-50 font-semibold text-[#0263CC]",
        className
      )}
      {...props}
    >
      <span className="truncate">
        {children}
      </span>

      {isSelected && (
        <Check className="absolute right-3 size-4 text-[#0263CC]" />
      )}
    </button>
  );
}

function SelectGroup({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      role="group"
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectLabel({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={mergeClasses(
        "px-2 py-1.5",
        "text-xs font-semibold",
        "text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectSeparator({
  className = "",
  ...props
}) {
  return (
    <div
      className={mergeClasses(
        "my-1 h-px bg-slate-200",
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className = "",
  ...props
}) {
  return (
    <div
      className={mergeClasses(
        "flex items-center justify-center",
        "py-1 text-slate-400",
        className
      )}
      {...props}
    >
      <ChevronUp className="size-4" />
    </div>
  );
}

function SelectScrollDownButton({
  className = "",
  ...props
}) {
  return (
    <div
      className={mergeClasses(
        "flex items-center justify-center",
        "py-1 text-slate-400",
        className
      )}
      {...props}
    >
      <ChevronDown className="size-4" />
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};