"use client";

import React, {
  createContext,
  useContext,
  useId,
  useState,
} from "react";

const TabsContext = createContext(null);
const TabsListContext = createContext({
  variant: "default",
});

function mergeClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tabs({
  children,
  className = "",
  defaultValue = "",
  value,
  onValueChange,
  orientation = "horizontal",
  ...props
}) {
  const [internalValue, setInternalValue] =
    useState(defaultValue);

  const tabsId = useId();

  const isControlled = value !== undefined;

  const activeValue = isControlled
    ? value
    : internalValue;

  const changeValue = (newValue) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }

    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider
      value={{
        activeValue,
        changeValue,
        orientation,
        tabsId,
      }}
    >
      <div
        data-slot="tabs"
        data-orientation={orientation}
        className={mergeClasses(
          "flex gap-2",
          orientation === "horizontal"
            ? "flex-col"
            : "flex-row items-start",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

function tabsListVariants({
  variant = "default",
} = {}) {
  return mergeClasses(
    "inline-flex w-fit items-center justify-center p-[3px] text-slate-500",
    variant === "default" &&
      "rounded-lg bg-slate-100",
    variant === "line" &&
      "gap-1 bg-transparent p-0"
  );
}

function TabsList({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const tabs = useContext(TabsContext);

  if (!tabs) {
    throw new Error(
      "TabsList must be used inside Tabs"
    );
  }

  return (
    <TabsListContext.Provider
      value={{ variant }}
    >
      <div
        role="tablist"
        aria-orientation={tabs.orientation}
        data-slot="tabs-list"
        data-variant={variant}
        className={mergeClasses(
          tabsListVariants({ variant }),
          tabs.orientation === "vertical" &&
            "h-fit flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsListContext.Provider>
  );
}

function TabsTrigger({
  children,
  className = "",
  value,
  disabled = false,
  ...props
}) {
  const tabs = useContext(TabsContext);

  const { variant } =
    useContext(TabsListContext);

  if (!tabs) {
    throw new Error(
      "TabsTrigger must be used inside Tabs"
    );
  }

  const isActive =
    tabs.activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${tabs.tabsId}-trigger-${value}`}
      aria-selected={isActive}
      aria-controls={`${tabs.tabsId}-content-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      data-slot="tabs-trigger"
      data-state={
        isActive ? "active" : "inactive"
      }
      onClick={() =>
        tabs.changeValue(value)
      }
      className={mergeClasses(
        "relative inline-flex min-h-9 flex-1 items-center justify-center",
        "gap-1.5 whitespace-nowrap px-3 py-2",
        "text-sm font-semibold text-slate-500",
        "transition-all duration-300",
        "hover:text-slate-900",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#0263CC]/30",
        "focus-visible:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-50",

        tabs.orientation === "vertical" &&
          "w-full justify-start",

        variant === "default" &&
          "rounded-md border border-transparent",

        variant === "default" &&
          isActive &&
          "bg-white text-slate-900 shadow-sm",

        variant === "line" &&
          "rounded-none border-b-2 border-transparent bg-transparent",

        variant === "line" &&
          isActive &&
          "border-[#0263CC] text-[#0263CC]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({
  children,
  className = "",
  value,
  ...props
}) {
  const tabs = useContext(TabsContext);

  if (!tabs) {
    throw new Error(
      "TabsContent must be used inside Tabs"
    );
  }

  if (tabs.activeValue !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`${tabs.tabsId}-content-${value}`}
      aria-labelledby={`${tabs.tabsId}-trigger-${value}`}
      data-slot="tabs-content"
      data-state="active"
      className={mergeClasses(
        "flex-1 outline-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
};