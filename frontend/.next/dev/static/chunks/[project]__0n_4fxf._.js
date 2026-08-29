(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/FinderStep.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinderStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
const STEP_VARIANTS = {
    enter: {
        opacity: 0,
        x: 40
    },
    center: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        x: -40,
        transition: {
            duration: 0.25,
            ease: "easeIn"
        }
    }
};
function FinderStep({ question, options, selected, onSelect, layout = "grid" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        variants: STEP_VARIANTS,
        initial: "enter",
        animate: "center",
        exit: "exit",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: " font-heading text-lg sm:text-2xl text-[#0F172A] mb-4 sm:mb-6 leading-snug ",
                children: question
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            layout === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 ",
                role: "listbox",
                "aria-label": question,
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionCard, {
                        id: opt.id,
                        label: opt.label,
                        emoji: opt.emoji,
                        selected: selected === opt.id,
                        onSelect: onSelect
                    }, opt.id, false, {
                        fileName: "[project]/components/home/FinderStep.jsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex flex-col gap-2 sm:gap-2.5 ",
                role: "listbox",
                "aria-label": question,
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OptionRow, {
                        id: opt.id,
                        label: opt.label,
                        emoji: opt.emoji,
                        selected: selected === opt.id,
                        onSelect: onSelect
                    }, opt.id, false, {
                        fileName: "[project]/components/home/FinderStep.jsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        ]
    }, question, true, {
        fileName: "[project]/components/home/FinderStep.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = FinderStep;
/* =====================================
   CAREER OPTION CARD
===================================== */ function OptionCard({ id, label, emoji, selected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        role: "option",
        "aria-selected": selected,
        onClick: ()=>onSelect(id),
        className: `
        relative
        flex
        flex-col
        items-center
        text-center
        gap-1.5
        sm:gap-2
        p-2.5
        sm:p-4
        rounded-xl
        sm:rounded-2xl
        border-2
        cursor-pointer
        transition-all
        duration-200
        font-body
        focus-visible:outline-2
        focus-visible:outline-[#0263CC]

        lg:flex-col
        lg:items-center
        lg:text-center
        lg:gap-2
        lg:p-4

        max-lg:flex-row
        max-lg:text-left
        max-lg:items-center
        max-lg:gap-2.5
        max-lg:min-h-[58px]

        ${selected ? "border-[#0263CC] bg-[#F1F7FC] shadow-md ring-2 ring-[#0263CC]/20" : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd] hover:shadow-sm"}
      `,
        children: [
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: " absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0263CC] flex items-center justify-center ",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "9",
                    height: "9",
                    viewBox: "0 0 10 10",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 5L4 7L8 3",
                        stroke: "white",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderStep.jsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/FinderStep.jsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            emoji && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: " text-2xl sm:text-3xl lg:text-3xl leading-none shrink-0  max-lg:w-8 max-lg:text-center ",
                "aria-hidden": "true",
                children: emoji
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `
          text-xs
          sm:text-sm
          font-medium
          leading-tight

          max-lg:flex-1
          max-lg:pr-4

          ${selected ? "text-[#0263CC]" : "text-[#334155]"}
        `,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FinderStep.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = OptionCard;
/* =====================================
   BUDGET / PRIORITY ROW
===================================== */ function OptionRow({ id, label, emoji, selected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        role: "option",
        "aria-selected": selected,
        onClick: ()=>onSelect(id),
        className: `
        flex
        items-center
        gap-3
        sm:gap-4
        px-3.5
        sm:px-5
        py-2.5
        sm:py-4
        rounded-lg
        sm:rounded-xl
        border-2
        cursor-pointer
        transition-all
        duration-200
        font-body
        focus-visible:outline-2
        focus-visible:outline-[#0263CC]
        text-left

        ${selected ? "border-[#0263CC] bg-[#F1F7FC] shadow-sm ring-2 ring-[#0263CC]/15" : "border-[#E2E8F0] bg-white hover:border-[#4DA5EC] hover:bg-[#e8f4fd]"}
      `,
        children: [
            emoji && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: " text-xl sm:text-2xl w-7 sm:w-8 text-center shrink-0 ",
                "aria-hidden": "true",
                children: emoji
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `
          font-medium
          text-xs
          sm:text-sm
          flex-1

          ${selected ? "text-[#0263CC]" : "text-[#334155]"}
        `,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `
          w-4
          h-4
          sm:w-5
          sm:h-5
          rounded-full
          border-2
          flex
          items-center
          justify-center
          shrink-0
          transition-all
          duration-200

          ${selected ? "border-[#0263CC] bg-[#0263CC]" : "border-[#CBD5E1]"}
        `,
                "aria-hidden": "true",
                children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"
                }, void 0, false, {
                    fileName: "[project]/components/home/FinderStep.jsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/FinderStep.jsx",
                lineNumber: 325,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FinderStep.jsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_c2 = OptionRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FinderStep");
__turbopack_context__.k.register(_c1, "OptionCard");
__turbopack_context__.k.register(_c2, "OptionRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Badge — small label chip
 * Variants: primary | sky | teal | neutral | success | warning
 */ __turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Badge({ children, variant = "primary", className = "" }) {
    const variants = {
        primary: "bg-[#d6e8fb] text-[#0263CC] border border-[#0263CC]/20",
        sky: "bg-[#e8f4fd] text-[#0251a8] border border-[#4DA5EC]/30",
        teal: "bg-[#d6f4f7] text-[#017b8a] border border-[#02A7BB]/30",
        neutral: "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
        success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        warning: "bg-amber-50 text-amber-700 border border-amber-200",
        white: "bg-white/20 text-white border border-white/30"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-body font-medium ${variants[variant] ?? variants.neutral} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Badge.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/FinderResults.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinderResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function FinderResults({ results, career, budget, priority, onReset }) {
    _s();
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleWhatsApp = (e)=>{
        e.preventDefault();
        if (!phone.trim()) return;
        setSent(true);
    };
    const handleNext = ()=>{
        if (results.length === 0) return;
        setCurrentIndex((prev)=>prev < results.length - 1 ? prev + 1 : 0);
    };
    const handlePrev = ()=>{
        if (results.length === 0) return;
        setCurrentIndex((prev)=>prev > 0 ? prev - 1 : results.length - 1);
    };
    /* =====================================
     AUTO SLIDE
  ===================================== */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FinderResults.useEffect": ()=>{
            if (results.length <= 1) return;
            const interval = setInterval({
                "FinderResults.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "FinderResults.useEffect.interval": (prev)=>prev < results.length - 1 ? prev + 1 : 0
                    }["FinderResults.useEffect.interval"]);
                }
            }["FinderResults.useEffect.interval"], 3500);
            return ({
                "FinderResults.useEffect": ()=>clearInterval(interval)
            })["FinderResults.useEffect"];
        }
    }["FinderResults.useEffect"], [
        results.length
    ]);
    /* =====================================
     SWIPE
  ===================================== */ const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = ()=>{
        const distance = touchStartX.current - touchEndX.current;
        if (Math.abs(distance) < 50) return;
        if (distance > 0) {
            handleNext();
        } else {
            handlePrev();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        className: "flex flex-col max-h-[500px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2.5 sm:mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkles, {
                                size: 14,
                                className: "text-[#02A7BB]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-[10px] font-semibold text-[#02A7BB] uppercase tracking-wider",
                                children: "Your Perfect Match"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-base sm:text-lg text-[#0F172A] leading-tight",
                                children: [
                                    results.length,
                                    " Best-Fit",
                                    " ",
                                    results.length === 1 ? "Country" : "Countries"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-[10px] sm:text-xs text-[#94A3B8]",
                                children: [
                                    currentIndex + 1,
                                    " / ",
                                    results.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-2.5 sm:mb-3 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-xl touch-pan-y",
                        onTouchStart: handleTouchStart,
                        onTouchMove: handleTouchMove,
                        onTouchEnd: handleTouchEnd,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            className: "flex transition-transform duration-500 ease-out",
                            style: {
                                transform: `translateX(-${currentIndex * 100}%)`
                            },
                            children: results.map((country, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-full px-0.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryCard, {
                                        country: country,
                                        index: i
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/FinderResults.jsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                }, country.slug, false, {
                                    fileName: "[project]/components/home/FinderResults.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/FinderResults.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    results.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrev,
                                className: " absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 sm:-translate-x-3 z-20 grid place-items-center size-6 sm:size-9 rounded-full bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#0263CC] hover:border-[#0263CC] hover:text-white transition-all duration-200 shadow-md ",
                                "aria-label": "Previous country",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                                    size: 14,
                                    className: "sm:size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FinderResults.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                className: " absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 sm:translate-x-3 z-20 grid place-items-center size-6 sm:size-9 rounded-full bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#0263CC] hover:border-[#0263CC] hover:text-white transition-all duration-200 shadow-md ",
                                "aria-label": "Next country",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                    size: 14,
                                    className: "sm:size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FinderResults.jsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    results.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-1 mt-1.5",
                        children: results.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(i),
                                className: `
                  h-1
                  rounded-full
                  transition-all
                  duration-200
                  ${i === currentIndex ? "w-4 bg-[#0263CC]" : "w-1 bg-[#CBD5E1] hover:bg-[#94A3B8]"}
                `,
                                "aria-label": `Go to country ${i + 1}`
                            }, i, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#F1F7FC] to-[#E8F4FD] border border-[#d6e8fb] rounded-lg p-2 sm:p-2.5 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body font-medium text-[10px] text-[#0F172A] mb-1.5 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "📲"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Get Results on WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-xs text-[#02A7BB] font-semibold flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            "Sending to your WhatsApp..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleWhatsApp,
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                value: phone,
                                onChange: (e)=>setPhone(e.target.value),
                                placeholder: "+91 Your number",
                                "aria-label": "WhatsApp phone number",
                                className: " flex-1 min-w-0 border border-[#E2E8F0] rounded-md px-2.5 py-1.5 font-body text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-1 focus:ring-[#0263CC] transition-all bg-white "
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                "aria-label": "Send results to WhatsApp",
                                className: " px-2.5 sm:px-3 py-1.5 bg-[#02A7BB] text-white rounded-md hover:bg-[#0295a7] active:scale-95 transition-all flex items-center gap-1 font-body font-semibold text-xs shadow-sm shrink-0 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Send, {
                                        size: 12,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/FinderResults.jsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    "Send"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: " flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-[#E2E8F0] text-[#475569] font-body font-medium text-xs hover:bg-[#F8FAFC] hover:border-[#CBD5E1] active:scale-95 transition-all duration-200 ",
                        "aria-label": "Start the Country Finder over",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotateCcw, {
                                size: 12,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/counselling",
                        variant: "primary",
                        size: "sm",
                        className: "flex-1 justify-center text-xs py-1.5 sm:py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageCircle, {
                                size: 13,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            "Talk to Expert"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FinderResults.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(FinderResults, "RiraY2eiKYX4nQTtLAcZmrV32ec=");
_c = FinderResults;
/* =====================================
   COUNTRY CARD
===================================== */ function CountryCard({ country, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: " bg-gradient-to-br from-white to-[#F8FAFC] rounded-xl border border-[#E2E8F0]  p-2.5 sm:p-3  flex flex-col gap-2  hover:shadow-md hover:border-[#4DA5EC]  transition-all duration-200  group  h-[238px] sm:h-[280px]  overflow-y-auto  scrollbar-thin scrollbar-thumb-[#CBD5E1] scrollbar-track-transparent ",
        "aria-label": `Country match: ${country.name}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex items-center gap-2 sm:gap-2.5 sticky top-0 bg-gradient-to-b from-white via-white to-transparent pb-1.5 sm:pb-2 z-10 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl sm:text-3xl leading-none",
                        "aria-hidden": "true",
                        children: country.flag
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-heading text-sm sm:text-lg text-[#0F172A] leading-tight truncate",
                                children: country.name
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-[8px] sm:text-[9px] text-[#94A3B8]",
                                children: country.region
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white text-[8px] sm:text-[9px] font-body font-bold rounded-full shadow-sm",
                        children: "TOP"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-[10px] sm:text-xs text-[#475569] leading-snug line-clamp-3",
                children: country.whyThisFits
            }, void 0, false, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F1F7FC] rounded-lg px-2 py-1.5 border border-[#E8F4FD]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-[8px] sm:text-[9px] text-[#94A3B8]",
                                children: "Total Cost:"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body font-bold text-[10px] sm:text-xs text-[#0263CC]",
                                children: country.illustrativeCostRange
                            }, void 0, false, {
                                fileName: "[project]/components/home/FinderResults.jsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    country.costNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body text-[7px] sm:text-[8px] text-[#94A3B8] mt-0.5",
                        children: country.costNote
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            country.careerTags && country.careerTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1",
                children: country.careerTags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "sky",
                        className: "text-[7px] sm:text-[8px] px-1.5 py-0.5",
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 495,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 493,
                columnNumber: 11
            }, this),
            country.recognitionNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-[8px] sm:text-[9px] text-[#94A3B8] italic leading-snug line-clamp-2",
                children: country.recognitionNote
            }, void 0, false, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 508,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/countries/${country.slug}`,
                className: " flex items-center justify-center gap-1.5 font-body font-semibold text-[10px] sm:text-xs text-white bg-gradient-to-r from-[#0263CC] to-[#02A7BB] hover:from-[#0251a8] hover:to-[#0295a7] rounded-lg py-1.5 sm:py-2 px-2.5 sm:px-3 group-hover:gap-2 transition-all duration-200 mt-auto shadow-sm active:scale-95 ",
                "aria-label": `Explore ${country.name}`,
                children: [
                    "Explore ",
                    country.name,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                        size: 11,
                        className: "sm:size-3",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FinderResults.jsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FinderResults.jsx",
                lineNumber: 514,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FinderResults.jsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_c1 = CountryCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "FinderResults");
__turbopack_context__.k.register(_c1, "CountryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/careers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Medico Yatra — Careers Data
 */ __turbopack_context__.s([
    "CAREERS",
    ()=>CAREERS,
    "FINDER_BUDGET_OPTIONS",
    ()=>FINDER_BUDGET_OPTIONS,
    "FINDER_CAREER_OPTIONS",
    ()=>FINDER_CAREER_OPTIONS,
    "FINDER_PRIORITY_OPTIONS",
    ()=>FINDER_PRIORITY_OPTIONS
]);
const CAREERS = [
    {
        id: "mbbs",
        title: "MBBS / Medicine",
        shortTitle: "MBBS / MD",
        emoji: "🩺",
        icon: "stethoscope",
        group: "direct",
        description: "The most sought-after healthcare career. Study medicine at an NMC-recognised university abroad and return as a licensed physician after FMGE / NExT.",
        duration: "5–6 years (including internship)",
        entryRequirement: "Class 12 (PCB) + NEET",
        licenseExam: "FMGE / NExT (for India), USMLE (for USA), PLAB/UKMLA (for UK), AMC (for Australia)",
        slug: "/courses/mbbs-abroad",
        popular: true
    },
    {
        id: "dentistry",
        title: "BDS / Dentistry",
        shortTitle: "Dentistry (BDS)",
        emoji: "🦷",
        icon: "smile",
        group: "direct",
        description: "A rewarding career with strong independent practice potential. Study BDS at recognised universities abroad, gain valuable clinical experience, and successful modern dentistry.",
        duration: "4–5 years",
        entryRequirement: "Class 12 (PCB) + NEET",
        licenseExam: "Relevant national dental licensing exam depending on country",
        slug: "/courses/dentistry",
        popular: false
    },
    {
        id: "nursing",
        title: "Nursing (BSc / BScN)",
        shortTitle: "Nursing",
        emoji: "💉",
        icon: "heart-pulse",
        group: "direct",
        description: "One of the highest-demand healthcare careers globally. Nursing opens doors to the UK, Australia, Canada, USA and the Gulf with strong PR pathways.",
        duration: "3–4 years",
        entryRequirement: "Class 12 (PCB/PCM) — NEET may not be required depending on country",
        licenseExam: "NCLEX (USA/Canada), NMC (UK), AHPRA (Australia), HAAD/DHA (UAE)",
        slug: "/courses/nursing",
        popular: true,
        badge: "High Global Demand"
    },
    {
        id: "pharmacy",
        title: "Pharmacy (BPharm / PharmD)",
        shortTitle: "Pharmacy",
        emoji: "💊",
        icon: "pill",
        group: "direct",
        description: "A stable, well-paid career in clinical, hospital, community or research pharmacy. PharmD opens doors internationally.",
        duration: "4–6 years (BPharm or PharmD)",
        entryRequirement: "Class 12 (PCB/PCM)",
        licenseExam: "NAPLEX (USA), GPhC (UK), AHPRA (Australia), relevant national board",
        slug: "/courses/pharmacy",
        popular: false
    },
    {
        id: "physiotherapy",
        title: "Physiotherapy (BPT)",
        shortTitle: "Physiotherapy",
        emoji: "🏃",
        icon: "activity",
        group: "direct",
        description: "A growing allied-health career with strong PR pathways in Australia and Canada and excellent work-life balance.",
        duration: "4 years",
        entryRequirement: "Class 12 (PCB)",
        licenseExam: "Relevant national physiotherapy board registration",
        slug: "/courses/physiotherapy",
        popular: false,
        badge: "Strong PR Pathways"
    },
    {
        id: "respiratoryTherapy",
        title: "Respiratory Therapy / MLT",
        shortTitle: "Resp. Therapy / MLT",
        emoji: "🫁",
        icon: "wind",
        group: "direct",
        description: "Respiratory Therapists and Medical Lab Technologists are in high demand globally — an underrated but highly rewarding allied-health career path.",
        duration: "2–4 years depending on qualification",
        entryRequirement: "Class 12 (PCB)",
        licenseExam: "Relevant national board registration",
        slug: "/courses/respiratory-therapy-mlt",
        popular: false
    },
    {
        id: "mlt",
        title: "Medical Lab Technology",
        shortTitle: "Med. Lab Technology",
        emoji: "🔬",
        icon: "microscope",
        group: "direct",
        description: "Essential behind-the-scenes diagnostics role. MLTs are in demand at hospitals, labs and research institutions worldwide.",
        duration: "3–4 years",
        entryRequirement: "Class 12 (PCB)",
        licenseExam: "Relevant national board registration",
        slug: "/courses/medical-lab-technology",
        popular: false
    },
    {
        id: "alliedHealth",
        title: "Other Allied Health",
        shortTitle: "Allied Health",
        emoji: "❓",
        icon: "plus-circle",
        group: "exploring",
        description: "Ask us about your specific goal. We guide pathways beyond this list — occupational therapy, radiography, speech therapy, healthcare management and more.",
        duration: "Varies",
        entryRequirement: "Varies by programme",
        licenseExam: "Varies by country and profession",
        slug: "/courses/allied-health",
        popular: false
    }
];
const FINDER_CAREER_OPTIONS = [
    {
        id: "mbbs",
        label: "MBBS / Medicine",
        emoji: "🩺"
    },
    {
        id: "dentistry",
        label: "Dentistry (BDS)",
        emoji: "🦷"
    },
    {
        id: "nursing",
        label: "Nursing",
        emoji: "💉"
    },
    {
        id: "pharmacy",
        label: "Pharmacy",
        emoji: "💊"
    },
    {
        id: "physiotherapy",
        label: "Physiotherapy",
        emoji: "🏃"
    },
    {
        id: "respiratoryTherapy",
        label: "Respiratory Therapy",
        emoji: "🫁"
    },
    {
        id: "all",
        label: "Not Sure Yet — Show Me Everything",
        emoji: "❓"
    }
];
const FINDER_BUDGET_OPTIONS = [
    {
        id: "under25",
        label: "Under ₹25 Lakh"
    },
    {
        id: "25to50",
        label: "₹25–50 Lakh"
    },
    {
        id: "50to75",
        label: "₹50–75 Lakh"
    },
    {
        id: "75plus",
        label: "₹75 Lakh+"
    },
    {
        id: "unsure",
        label: "Not Sure — I Need Guidance on This Too"
    }
];
const FINDER_PRIORITY_OPTIONS = [
    {
        id: "lowestCost",
        label: "Lowest Overall Cost",
        emoji: "💰"
    },
    {
        id: "fastPR",
        label: "Fastest Path to Settlement / PR",
        emoji: "⚡"
    },
    {
        id: "highestSalary",
        label: "Highest Long-Term Salary",
        emoji: "📈"
    },
    {
        id: "englishMedium",
        label: "English-Medium Only",
        emoji: "🗣"
    },
    {
        id: "nmcTrusted",
        label: "Most Established / NMC-Trusted Destination",
        emoji: "🎓"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/countryMatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchCountries",
    ()=>matchCountries
]);
/**
 * Medico Yatra — Country Finder Matching Algorithm
 *
 * Inputs:
 *   career   — one of FINDER_CAREER_OPTIONS ids
 *   budget   — one of FINDER_BUDGET_OPTIONS ids
 *   priority — one of FINDER_PRIORITY_OPTIONS ids
 *
 * Returns an array of matched country objects (3–5 results).
 * Never returns zero results.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/countries.js [app-client] (ecmascript)");
;
/**
 * Score a single country against the three finder inputs.
 * Higher score = better match.
 */ function scoreCountry(country, career, budget, priority) {
    let score = 0;
    // ── Career match ──────────────────────────────────────────
    if (career === "all") {
        score += 1; // base — all countries eligible
    } else {
        if (country.supportedCareers.includes(career)) {
            score += 3;
        } else if (country.supportedCareers.includes("all")) {
            score += 1;
        }
        // Extra boost if the whyItFits key exists for this career
        if (country.whyItFits[career]) {
            score += 1;
        }
    }
    // ── Budget match ──────────────────────────────────────────
    if (budget === "unsure") {
        score += 1; // unsure — don't penalise any country
    } else {
        if (country.budgetTiers.includes(budget)) {
            score += 3;
        }
    }
    // ── Priority match ────────────────────────────────────────
    if (country.priorities.includes(priority)) {
        score += 3;
    }
    return score;
}
/**
 * Generate the "why this fits you" explanation for a country card.
 */ function getWhyItFits(country, career) {
    if (career && career !== "all" && country.whyItFits[career]) {
        return country.whyItFits[career];
    }
    return country.whyItFits.default || country.shortDescription;
}
function matchCountries(career, budget, priority) {
    if (!career && !budget && !priority) return [];
    // Score all countries
    const scored = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRIES"].map((country)=>({
            ...country,
            whyThisFits: getWhyItFits(country, career),
            _score: scoreCountry(country, career || "all", budget || "unsure", priority || "nmcTrusted")
        }));
    // Sort by score descending
    scored.sort((a, b)=>b._score - a._score);
    // Take top results with score > 0
    let results = scored.filter((c)=>c._score > 0).slice(0, 5);
    // ── Fallback: if we have fewer than 3, relax constraints progressively ──
    if (results.length < 3) {
        // Relax priority — try without priority
        const relaxed = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRIES"].map((country)=>({
                ...country,
                whyThisFits: getWhyItFits(country, career),
                _score: scoreCountry(country, career || "all", budget || "unsure", null)
            })).sort((a, b)=>b._score - a._score).slice(0, 5);
        results = relaxed;
    }
    if (results.length < 3) {
        // Relax budget too — just match career
        const veryRelaxed = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRIES"].map((country)=>({
                ...country,
                whyThisFits: getWhyItFits(country, career),
                _score: scoreCountry(country, career || "all", null, null)
            })).sort((a, b)=>b._score - a._score).slice(0, 5);
        results = veryRelaxed;
    }
    // Ultimate fallback — return top 4 countries regardless
    if (results.length === 0) {
        results = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRIES"].slice(0, 4).map((country)=>({
                ...country,
                whyThisFits: country.whyItFits.default || country.shortDescription,
                _score: 0
            }));
    }
    // Remove internal score from returned objects
    return results.map(({ _score, ...rest })=>rest);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderStep$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinderStep.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderResults$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinderResults.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/careers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/countryMatcher.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TRUST_POINTS = [
    "NMC-recognised universities only",
    "FMGE / NExT & USMLE coaching",
    "End-to-end support",
    "Parents welcomed at every step"
];
const STATS = [
    {
        value: "7+",
        label: "Healthcare Careers"
    },
    {
        value: "13+",
        label: "Countries Covered"
    },
    {
        value: "100%",
        label: "Honest Guidance"
    }
];
const STEPS = [
    {
        key: "career",
        question: "What healthcare career interests you?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_CAREER_OPTIONS"],
        layout: "grid"
    },
    {
        key: "budget",
        question: "What's your approximate total budget for the full course (tuition + living)?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_BUDGET_OPTIONS"],
        layout: "list"
    },
    {
        key: "priority",
        question: "What matters most to you?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_PRIORITY_OPTIONS"],
        layout: "list"
    }
];
const TOTAL = STEPS.length; // 3
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28
    },
    visible: (d = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: d,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            }
        })
};
function Hero({ onScrollToFinder }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [career, setCareer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budget, setBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentStep = STEPS[step];
    function getSelected() {
        if (step === 0) return career;
        if (step === 1) return budget;
        return priority;
    }
    function handleSelect(id) {
        if (step === 0) setCareer(id);
        if (step === 1) setBudget(id);
        if (step === 2) setPriority(id);
        setTimeout(()=>{
            if (step < TOTAL - 1) {
                setStep((s)=>s + 1);
            } else {
                const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchCountries"])(step === 0 ? id : career, step === 1 ? id : budget, step === 2 ? id : priority);
                setResults(matched);
                setStep(TOTAL);
            }
        }, 280);
    }
    function handleNext() {
        if (step < TOTAL - 1) {
            setStep((s)=>s + 1);
        } else {
            const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchCountries"])(career, budget, priority);
            setResults(matched);
            setStep(TOTAL);
        }
    }
    function handleBack() {
        setStep((s)=>Math.max(0, s - 1));
    }
    function handleReset() {
        setStep(0);
        setCareer(null);
        setBudget(null);
        setPriority(null);
        setResults([]);
    }
    const showingResults = step === TOTAL;
    const canNext = getSelected() !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        "aria-labelledby": "hero-heading",
        className: "relative min-h-screen flex items-center overflow-hidden",
        style: {
            backgroundColor: "#0263CC"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                "aria-hidden": "true",
                style: {
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)`,
                    backgroundSize: "32px 32px"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            width: 640,
                            height: 640,
                            top: -160,
                            right: -160,
                            background: "rgba(77,165,236,0.12)",
                            filter: "blur(80px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            width: 420,
                            height: 420,
                            bottom: -80,
                            left: -80,
                            background: "rgba(2,167,187,0.10)",
                            filter: "blur(60px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-full",
                        style: {
                            width: 280,
                            height: 280,
                            bottom: 80,
                            right: 80,
                            background: "rgba(77,165,236,0.08)",
                            filter: "blur(40px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-10rem)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-1 lg:order-1 flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: "hidden",
                                        animate: "visible",
                                        custom: 0,
                                        variants: fadeUp,
                                        className: "inline-flex items-center gap-2.5 mb-6 w-fit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2 px-4 py-1.5 rounded-full font-body font-extrabold text-sm tracking-wider uppercase",
                                            style: {
                                                background: "rgba(255,255,255,0.12)",
                                                border: "1px solid rgba(255,255,255,0.2)",
                                                color: "#fff"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[#4DA5EC] animate-pulse inline-block",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Hero.jsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                "A Future Yatra brand · Healthcare Career Specialists"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/Hero.jsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                                        id: "hero-heading",
                                        initial: "hidden",
                                        animate: "visible",
                                        custom: 0.08,
                                        variants: fadeUp,
                                        className: "font-body text-2xl sm:text-5xl lg:text-5xl xl:text-4xl font-extrabold text-white leading-[1.12] mb-5",
                                        children: [
                                            "Your Healthcare Career —",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#4DA5EC]",
                                                children: "Guided Properly,"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            "From Class 12 to Licensed Professional."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                        initial: "hidden",
                                        animate: "visible",
                                        custom: 0.16,
                                        variants: fadeUp,
                                        className: "font-body font-light text-white/75 text-sm sm:text-lg leading-relaxed mb-8 max-w-lg",
                                        children: "We specialise in healthcare careers — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy, Respiratory Therapy, MLT and more — with NMC-recognised universities, honest counselling, and licensing support built in."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: "hidden",
                                        animate: "visible",
                                        custom: 0.24,
                                        variants: fadeUp,
                                        className: "flex flex-col sm:flex-row gap-3 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/counselling",
                                                variant: "white",
                                                size: "lg",
                                                children: "Book Free Counselling"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onScrollToFinder,
                                                className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-base text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white",
                                                style: {
                                                    border: "2px solid rgba(255,255,255,0.3)"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = "transparent";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                                                },
                                                "aria-label": "Scroll down to Country Finder",
                                                children: [
                                                    "Find My Country Below",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowDown, {
                                                        size: 18,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full order-2 lg:order-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 24
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.55,
                                        delay: 0.15
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden",
                                        children: [
                                            !showingResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 sm:px-6 pt-5 sm:pt-6 pb-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-body font-semibold text-xs sm:text-sm text-[#0263CC]",
                                                                children: [
                                                                    "Step ",
                                                                    step + 1,
                                                                    " of ",
                                                                    TOTAL
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home/Hero.jsx",
                                                                lineNumber: 253,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-body text-[10px] sm:text-xs text-[#94A3B8]",
                                                                children: [
                                                                    Math.round(step / TOTAL * 100),
                                                                    "% done"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home/Hero.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden",
                                                        role: "progressbar",
                                                        "aria-valuenow": step + 1,
                                                        "aria-valuemin": 1,
                                                        "aria-valuemax": TOTAL,
                                                        "aria-label": `Step ${step + 1} of ${TOTAL}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                            className: "h-full bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] rounded-full",
                                                            initial: false,
                                                            animate: {
                                                                width: `${(step + 1) / TOTAL * 100}%`
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                ease: "easeOut"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/Hero.jsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mt-2 px-0.5",
                                                        children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center gap-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-1.5 h-1.5 rounded-full transition-all duration-300 ${i < step ? "bg-[#02A7BB]" : i === step ? "bg-[#0263CC] scale-125" : "bg-[#E2E8F0]"}`,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/Hero.jsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, s.key, false, {
                                                                fileName: "[project]/components/home/Hero.jsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-4 sm:px-6 ${showingResults ? "pt-5 sm:pt-6 pb-5 sm:pb-6" : "pt-4 sm:pt-5 pb-5 sm:pb-6"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                                        mode: "wait",
                                                        children: showingResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderResults$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            results: results,
                                                            career: career,
                                                            budget: budget,
                                                            priority: priority,
                                                            onReset: handleReset
                                                        }, "results", false, {
                                                            fileName: "[project]/components/home/Hero.jsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderStep$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            question: currentStep.question,
                                                            options: currentStep.options,
                                                            selected: getSelected(),
                                                            onSelect: handleSelect,
                                                            layout: currentStep.layout
                                                        }, currentStep.key, false, {
                                                            fileName: "[project]/components/home/Hero.jsx",
                                                            lineNumber: 299,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    !showingResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F1F5F9]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleBack,
                                                                disabled: step === 0,
                                                                className: "flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-body font-medium text-xs sm:text-sm text-[#475569] hover:text-[#0263CC] hover:bg-[#F1F7FC] transition-colors disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                                                "aria-label": "Go to previous step",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                                                        size: 14,
                                                                        className: "sm:size-4",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home/Hero.jsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Back"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home/Hero.jsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleNext,
                                                                disabled: !canNext,
                                                                className: "flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#0263CC] text-white font-body font-semibold text-xs sm:text-sm hover:bg-[#0251a8] active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC] shadow-sm",
                                                                "aria-label": step === TOTAL - 1 ? "See my country results" : "Go to next step",
                                                                children: [
                                                                    step === TOTAL - 1 ? "See Results" : "Next",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                                                        size: 14,
                                                                        className: "sm:size-4",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home/Hero.jsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/home/Hero.jsx",
                                                                lineNumber: 323,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/Hero.jsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.jsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.2,
                            duration: 0.6
                        },
                        className: "absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-[10px] text-white/40 tracking-[0.2em] uppercase",
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-8 rounded-full flex items-start justify-center pt-1.5",
                                style: {
                                    border: "1.5px solid rgba(255,255,255,0.2)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    animate: {
                                        y: [
                                            0,
                                            10,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 1.6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    className: "w-1 h-1.5 rounded-full bg-white/50"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.jsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(Hero, "eW2uuq+4JNxX/IlzIFb8PVulmq0=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CountryFinder.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountryFinder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderStep$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinderStep.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderResults$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinderResults.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/careers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/countryMatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const STEPS = [
    {
        key: "career",
        question: "What healthcare career interests you?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_CAREER_OPTIONS"],
        layout: "grid"
    },
    {
        key: "budget",
        question: "What's your approximate total budget for the full course (tuition + living)?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_BUDGET_OPTIONS"],
        layout: "list"
    },
    {
        key: "priority",
        question: "What matters most to you?",
        options: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINDER_PRIORITY_OPTIONS"],
        layout: "list"
    }
];
const TOTAL = STEPS.length; // 3
function CountryFinder({ onCareerSelect }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0-2 = steps, 3 = results
    const [career, setCareer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [budget, setBudget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentStep = STEPS[step];
    function getSelected() {
        if (step === 0) return career;
        if (step === 1) return budget;
        return priority;
    }
    function handleSelect(id) {
        if (step === 0) {
            setCareer(id);
            onCareerSelect?.(id); // lift career up for Salary table highlight
        }
        if (step === 1) setBudget(id);
        if (step === 2) setPriority(id);
        // Auto-advance on mobile-friendly UX — short delay so the selection registers visually
        setTimeout(()=>{
            if (step < TOTAL - 1) {
                setStep((s)=>s + 1);
            } else {
                // Last step — compute results
                const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchCountries"])(step === 0 ? id : career, step === 1 ? id : budget, step === 2 ? id : priority);
                setResults(matched);
                setStep(TOTAL); // show results
            }
        }, 280);
    }
    function handleNext() {
        if (step < TOTAL - 1) {
            setStep((s)=>s + 1);
        } else {
            const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$countryMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchCountries"])(career, budget, priority);
            setResults(matched);
            setStep(TOTAL);
        }
    }
    function handleBack() {
        setStep((s)=>Math.max(0, s - 1));
    }
    function handleReset() {
        setStep(0);
        setCareer(null);
        setBudget(null);
        setPriority(null);
        setResults([]);
        onCareerSelect?.(null);
    }
    const showingResults = step === TOTAL;
    const canNext = getSelected() !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "country-finder",
        "aria-labelledby": "finder-heading",
        className: "py-7 max-w-8xl mx-auto lg:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10 lg:mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3",
                            children: "Interactive Tool"
                        }, void 0, false, {
                            fileName: "[project]/components/home/CountryFinder.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                            id: "finder-heading",
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.05
                            },
                            className: "font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4",
                            children: "Find Your Country in 30 Seconds"
                        }, void 0, false, {
                            fileName: "[project]/components/home/CountryFinder.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            className: "font-body font-light text-[#475569] text-base sm:text-lg max-w-2xl mx-auto",
                            children: "Answer three quick questions. We'll show you which countries genuinely fit your budget, career interest, and priorities — no sign-up required to see your results."
                        }, void 0, false, {
                            fileName: "[project]/components/home/CountryFinder.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/CountryFinder.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/CountryFinder.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full min-h-[550px] overflow-hidden rounded-2xl bg-[#021E46]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/students.png",
                                        alt: "Study Abroad",
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 bottom-0 h-[100%] bg-[#021E46]/8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-20 -left-20 h-56 w-56 rounded-full border border-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-20 -right-16 h-40 w-40 rounded-full border border-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-6 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#0263CC] text-sm text-white",
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-[#021E46]",
                                                    children: "Find Your Country in 30 Seconds"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-15 z-10 hidden sm:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-white/20 bg-white/90 p-3 shadow-xl backdrop-blur-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-2 text-xs font-semibold text-gray-500",
                                                    children: "Popular Destinations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl",
                                                            children: "🇬🇧"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl",
                                                            children: "🇦🇺"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-xl",
                                                            children: "🇩🇪"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 z-10 w-full p-6 sm:p-8 lg:p-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex flex-wrap gap-2",
                                                children: [
                                                    {
                                                        flag: "🇬🇧",
                                                        name: "UK"
                                                    },
                                                    {
                                                        flag: "🇦🇺",
                                                        name: "Australia"
                                                    },
                                                    {
                                                        flag: "🇩🇪",
                                                        name: "Germany"
                                                    },
                                                    {
                                                        flag: "🇷🇺",
                                                        name: "Russia"
                                                    }
                                                ].map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: country.flag
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/CountryFinder.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: country.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/CountryFinder.jsx",
                                                                lineNumber: 212,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, country.name, true, {
                                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CountryFinder.jsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-7 right-2 z-20 hidden lg:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-[#021E46]",
                                                            children: "10+ Countries"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: "Find your best destination"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CountryFinder.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/CountryFinder.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/CountryFinder.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-3 sm:mt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.55,
                                    delay: 0.15
                                },
                                className: "max-w-4xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-3xl shadow-xl border border-[#E2E8F0] overflow-hidden",
                                    children: [
                                        !showingResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 sm:px-8 pt-7 pb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-body font-medium text-sm text-[#0263CC]",
                                                            children: [
                                                                "Step ",
                                                                step + 1,
                                                                " of ",
                                                                TOTAL
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-body text-xs text-[#94A3B8]",
                                                            children: [
                                                                Math.round(step / TOTAL * 100),
                                                                "% complete"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden",
                                                    role: "progressbar",
                                                    "aria-valuenow": step + 1,
                                                    "aria-valuemin": 1,
                                                    "aria-valuemax": TOTAL,
                                                    "aria-label": `Step ${step + 1} of ${TOTAL}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                        className: "h-full bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] rounded-full",
                                                        initial: false,
                                                        animate: {
                                                            width: `${(step + 1) / TOTAL * 100}%`
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: "easeOut"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between mt-3 px-0.5",
                                                    children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-2 h-2 rounded-full transition-all duration-300 ${i < step ? "bg-[#02A7BB]" : i === step ? "bg-[#0263CC] scale-125" : "bg-[#E2E8F0]"}`,
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/CountryFinder.jsx",
                                                                lineNumber: 279,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, s.key, false, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 278,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-6 sm:px-8 ${showingResults ? "pt-8 pb-8" : "pt-6 pb-8"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                                    mode: "wait",
                                                    children: showingResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderResults$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        results: results,
                                                        career: career,
                                                        budget: budget,
                                                        priority: priority,
                                                        onReset: handleReset
                                                    }, "results", false, {
                                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinderStep$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        question: currentStep.question,
                                                        options: currentStep.options,
                                                        selected: getSelected(),
                                                        onSelect: handleSelect,
                                                        layout: currentStep.layout
                                                    }, currentStep.key, false, {
                                                        fileName: "[project]/components/home/CountryFinder.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                !showingResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-7 pt-5 border-t border-[#F1F5F9]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleBack,
                                                            disabled: step === 0,
                                                            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-medium text-sm text-[#475569] hover:text-[#0263CC] hover:bg-[#F1F7FC] transition-colors disabled:opacity-30 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                                            "aria-label": "Go to previous step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                                                    size: 16,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Back"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 317,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleNext,
                                                            disabled: !canNext,
                                                            className: "flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0263CC] text-white font-body font-medium text-sm hover:bg-[#0251a8] transition-colors disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                                            "aria-label": step === TOTAL - 1 ? "See my country results" : "Go to next step",
                                                            children: [
                                                                step === TOTAL - 1 ? "See My Results" : "Next",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                                                    size: 16,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/CountryFinder.jsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/CountryFinder.jsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountryFinder.jsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/CountryFinder.jsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/CountryFinder.jsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CountryFinder.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CountryFinder.jsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(CountryFinder, "eW2uuq+4JNxX/IlzIFb8PVulmq0=");
_c = CountryFinder;
var _c;
__turbopack_context__.k.register(_c, "CountryFinder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/TrustBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const TRUST_ITEMS = [
    {
        icon: Shield,
        heading: "NMC-recognised universities",
        body: "Your degree has to count when you come home — this is one of the most important things families need to verify.",
        color: "from-[#0263CC] to-[#178BE5]",
        accentColor: "text-white"
    },
    {
        icon: Briefcase,
        heading: "Many healthcare careers — not just MBBS",
        body: "A low NEET score or a different interest doesn't mean fewer honest options.",
        color: "from-[#009E9A] to-[#02C7B5]",
        accentColor: "text-white"
    },
    {
        icon: GraduationCap,
        heading: "Integrated FMGE / NExT & USMLE coaching",
        body: "Licensing preparation starts with your course, not years later.",
        color: "from-[#5B4FE9] to-[#7C3AED]",
        accentColor: "text-white"
    },
    {
        icon: Heart,
        heading: "Honest, end-to-end guidance",
        body: "From counselling to licensing, we stay involved throughout the journey.",
        color: "from-[#F97316] to-[#EF4444]",
        accentColor: "text-white"
    }
];
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const iconVariants = {
    hover: {
        scale: 1.1,
        rotate: [
            0,
            -10,
            10,
            -10,
            0
        ],
        transition: {
            duration: 0.5
        }
    }
};
const TrustBar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trust",
        "aria-labelledby": "trust-heading",
        className: "relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#F1F7FC] py-16 sm:py-20 lg:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#0263CC]/15 to-[#4DA5EC]/10 blur-3xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/home/TrustBar.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#02A7BB]/15 to-[#4ECDC4]/10 blur-3xl animate-pulse",
                style: {
                    animationDelay: '1s'
                }
            }, void 0, false, {
                fileName: "[project]/components/home/TrustBar.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4DA5EC]/5 to-[#02A7BB]/5 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/home/TrustBar.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-14 sm:mb-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0263CC]/10 to-[#02A7BB]/10 px-5 py-2.5 border border-[#0263CC]/20 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle, {
                                        size: 16,
                                        className: "text-[#0263CC]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-[#0263CC] tracking-wide",
                                        children: "WHY CHOOSE US"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TrustBar.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight",
                                children: [
                                    "Why Families Trust",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent",
                                        children: "Medico Yatra"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TrustBar.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                className: "mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#475569]",
                                children: "We help students and parents make confident healthcare education decisions with transparent counselling, trusted universities and complete guidance from admission to career."
                            }, void 0, false, {
                                fileName: "[project]/components/home/TrustBar.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TrustBar.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -60
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: [
                                        0.25,
                                        0.46,
                                        0.45,
                                        0.94
                                    ]
                                },
                                className: "relative mx-auto w-full max-w-md lg:max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-[#0263CC]/10 to-[#02A7BB]/10 rounded-3xl blur-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        animate: {
                                            y: [
                                                0,
                                                -12,
                                                0
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 6,
                                            ease: "easeInOut"
                                        },
                                        className: "relative z-10 aspect-[3/0] max-h-[500px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/doc1.webp",
                                                alt: "Healthcare Student",
                                                className: "relative rounded-3xl w-full h-full object-cover shadow-2xl border-4 border-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.3
                                        },
                                        animate: {
                                            y: [
                                                -8,
                                                8,
                                                -8
                                            ],
                                            transition: {
                                                repeat: Infinity,
                                                duration: 5,
                                                ease: "easeInOut"
                                            }
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "absolute -left-4 sm:left-0 -top-10 lg:top-8 sm:top-12 z-20 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-2xl border border-[#E2E8F0] backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shield, {
                                                        size: 20,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/TrustBar.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TrustBar.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-[#94A3B8]",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TrustBar.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-[#0263CC]",
                                                            children: "NMC Recognised"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TrustBar.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TrustBar.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TrustBar.jsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.4
                                        },
                                        animate: {
                                            y: [
                                                8,
                                                -8,
                                                8
                                            ],
                                            transition: {
                                                repeat: Infinity,
                                                duration: 5,
                                                ease: "easeInOut",
                                                delay: 0.5
                                            }
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "absolute -right-4 sm:right-0 bottom-8 sm:bottom-12 z-20 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-2xl border border-[#E2E8F0] backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#02A7BB] to-[#4ECDC4] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Users, {
                                                        size: 20,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/TrustBar.jsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TrustBar.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-medium text-[#94A3B8]",
                                                            children: "Trusted by"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TrustBar.jsx",
                                                            lineNumber: 187,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold text-[#02A7BB]",
                                                            children: "1000+ Families"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TrustBar.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TrustBar.jsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TrustBar.jsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.5
                                        },
                                        className: "absolute -left-4 sm:left-4 bottom-32 sm:bottom-36 z-20 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] px-4 py-3 shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-black text-white",
                                                children: "13+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-white/90",
                                                children: "Countries"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TrustBar.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                variants: container,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true
                                },
                                className: "grid grid-cols-2 gap-5 sm:grid-cols-2",
                                children: TRUST_ITEMS.map((item, index)=>{
                                    const Icon = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        variants: cardVariants,
                                        whileHover: {
                                            y: -8,
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.20)",
                                            transition: {
                                                duration: 0.3
                                            }
                                        },
                                        className: `
          group relative overflow-hidden rounded-2xl
          bg-gradient-to-br ${item.color}
          p-5 sm:p-6
          shadow-lg
          transition-all duration-300
        `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.28),transparent_32%)] opacity-80 blur-xl scale-110 "
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 235,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-3xl transition-transform duration-700 group-hover:scale-125 "
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 246,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-black/10 blur-3xl "
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 260,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/15 "
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 272,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                variants: iconVariants,
                                                whileHover: "hover",
                                                className: " relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 shadow-lg backdrop-blur-sm ring-1 ring-white/20 ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 24,
                                                    className: "text-white",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TrustBar.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 287,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: " relative z-10 mb-2.5 text-base sm:text-lg font-bold leading-tight text-white ",
                                                children: item.heading
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 307,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: " relative z-10 text-sm hidden lg:block leading-relaxed text-white/85 ",
                                                children: item.body
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 319,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 "
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrustBar.jsx",
                                                lineNumber: 333,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.heading, true, {
                                        fileName: "[project]/components/home/TrustBar.jsx",
                                        lineNumber: 218,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/home/TrustBar.jsx",
                                lineNumber: 207,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TrustBar.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TrustBar.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TrustBar.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TrustBar;
const __TURBOPACK__default__export__ = TrustBar;
var _c;
__turbopack_context__.k.register(_c, "TrustBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CareersSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/modules'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/navigation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
;
const COURSES = [
    {
        id: "mbbs",
        title: "MBBS Abroad",
        shortTitle: "MBBS",
        description: "Study MBBS abroad at NMC-recognised universities with complete guidance.",
        image: "/images/home-course-img/MBBS_MD.webp",
        slug: "/courses/mbbs-abroad"
    },
    {
        id: "nursing",
        title: "Nursing",
        shortTitle: "Nursing",
        description: "Explore recognised nursing programs with guidance from admission to career.",
        image: "/images/home-course-img/Nursing.webp",
        slug: "/courses/nursing"
    },
    {
        id: "bds",
        title: "BDS Dental",
        shortTitle: "BDS Dental",
        description: "Build your dental career with globally recognised BDS programs.",
        image: "/images/home-course-img/Dentistry.webp",
        slug: "/courses/bds-dental"
    },
    {
        id: "pharmacy",
        title: "Pharmacy",
        shortTitle: "Pharmacy",
        description: "Explore pharmacy education and career pathways across recognised institutions.",
        image: "/images/home-course-img/Pharmacy.webp",
        slug: "/courses/pharmacy"
    },
    {
        id: "physiotherapy",
        title: "Physiotherapy",
        shortTitle: "Physiotherapy",
        description: "Build a career in rehabilitation and patient-focused physiotherapy.",
        image: "/images/home-course-img/Physiotherapy.webp",
        slug: "/courses/physiotherapy-rehab"
    },
    // {
    //   id: "respiratory",
    //   title: "Respiratory Therapy",
    //   shortTitle: "Respiratory Therapy",
    //   description:
    //     "Explore specialised respiratory care and allied healthcare opportunities.",
    //   image: "/images/home-course-img/doctor-helping-patient-rehabilitation.webp",
    //   slug: "/courses/respiratory-therapy",
    // },
    {
        id: "mlt",
        title: "Medical Lab Technology",
        shortTitle: "MLT",
        description: "Learn about laboratory-based healthcare careers and diagnostic sciences.",
        image: "/images/home-course-img/Med_Lab_Tech.webp",
        slug: "/courses/medical-lab-technology"
    },
    {
        id: "allied-health",
        title: "Allied Health",
        shortTitle: "Allied Health",
        description: "Discover diverse healthcare careers beyond traditional medical pathways.",
        image: "/images/home-course-img/Allied_Health.webp",
        slug: "/courses/allied-health"
    }
];
function CoursesCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-14 lg:py-16 bg-[#E6F2FF]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.45
                                    },
                                    className: "font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-2",
                                    children: "Healthcare Pathways"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CareersSection.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.45,
                                        delay: 0.05
                                    },
                                    className: "text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0F172A]",
                                    children: "One Partner for Your Entire Healthcare Journey"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CareersSection.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/CareersSection.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "courses-prev w-10 h-10 rounded-full border border-[#DCE7F2] bg-white flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white transition-all duration-200 shadow-sm",
                                    "aria-label": "Previous courses",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CareersSection.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CareersSection.jsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "courses-next w-10 h-10 rounded-full border border-[#DCE7F2] bg-white flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white transition-all duration-200 shadow-sm",
                                    "aria-label": "Next courses",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CareersSection.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CareersSection.jsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/CareersSection.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/CareersSection.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swiper, {
                    modules: [
                        Navigation,
                        Autoplay
                    ],
                    navigation: {
                        prevEl: ".courses-prev",
                        nextEl: ".courses-next"
                    },
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },
                    spaceBetween: 18,
                    slidesPerView: 1.15,
                    breakpoints: {
                        480: {
                            slidesPerView: 1.5
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        }
                    },
                    className: "!overflow-visible",
                    children: COURSES.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                            className: "!h-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.article, {
                                whileHover: {
                                    y: -5
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "group h-full rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-[#4DA5EC]/40 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 overflow-hidden bg-[#F1F7FC]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: course.image,
                                                alt: course.title,
                                                fill: true,
                                                sizes: "(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw",
                                                className: "object-cover transition-transform duration-500 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#0263CC] shadow-sm",
                                                    children: "Healthcare Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/CareersSection.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/CareersSection.jsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-heading text-lg font-medium text-[#0F172A] mb-2",
                                                children: course.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-body text-sm font-light leading-relaxed text-[#64748B] line-clamp-3 min-h-[63px]",
                                                children: course.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 pt-4 border-t border-[#F1F5F9]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: course.slug,
                                                    className: "inline-flex items-center gap-2 text-sm font-medium text-[#0263CC] group-hover:gap-3 transition-all duration-200",
                                                    children: [
                                                        "Explore Course",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                                            size: 15,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/CareersSection.jsx",
                                                            lineNumber: 216,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/CareersSection.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CareersSection.jsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/CareersSection.jsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CareersSection.jsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        }, course.id, false, {
                            fileName: "[project]/components/home/CareersSection.jsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/CareersSection.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/courses",
                        className: "inline-flex items-center gap-2 rounded-full bg-[#0263CC] px-6 py-3 text-sm font-medium text-white hover:bg-[#0255ad] hover:gap-3 transition-all duration-200 shadow-lg shadow-[#0263CC]/15",
                        children: [
                            "View All Courses",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/home/CareersSection.jsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CareersSection.jsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/CareersSection.jsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/CareersSection.jsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/CareersSection.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c = CoursesCarousel;
var _c;
__turbopack_context__.k.register(_c, "CoursesCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/salaryData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Medico Yatra — Illustrative Salary Data
 *
 * ⚠ DEVELOPMENT PLACEHOLDERS ONLY
 * ALL figures below are ILLUSTRATIVE and APPROXIMATE.
 * They represent indicative annual salary ranges for QUALIFIED and LICENSED professionals
 * in each country and profession.
 *
 * Figures vary widely by:
 * - Experience level and seniority
 * - City, region, and employer
 * - Currency fluctuations and year
 * - Licensing / registration status
 * - Immigration / visa category
 *
 * THESE FIGURES MUST BE REPLACED WITH VERIFIED, DATED, SOURCED DATA BEFORE PUBLISHING.
 * Label the source and retrieval date for each figure in production.
 *
 * Earning these salaries requires meeting each country's licensing, registration,
 * and immigration requirements — they are NOT guaranteed outcomes.
 */ // export const SALARY_WARNING =
//   "⚠ Figures are illustrative & approximate, for qualified and licensed professionals. " +
//   "They vary widely by experience, city, employer, currency and year. " +
//   "Earning these salaries requires meeting each country's licensing/registration and immigration requirements. " +
//   "Verify with official sources before relying on them.";
// export const SALARY_DEV_NOTE = "ILLUSTRATIVE — VERIFY BEFORE PUBLISH";
/** Profession column definitions */ __turbopack_context__.s([
    "CAREER_TO_PROFESSION_MAP",
    ()=>CAREER_TO_PROFESSION_MAP,
    "PROFESSIONS",
    ()=>PROFESSIONS,
    "SALARY_DATA",
    ()=>SALARY_DATA
]);
const PROFESSIONS = [
    {
        id: "physician",
        label: "Physician",
        shortLabel: "Doctor",
        careerIds: [
            "mbbs"
        ]
    },
    {
        id: "dentist",
        label: "Dentist",
        shortLabel: "Dentist",
        careerIds: [
            "dentistry"
        ]
    },
    {
        id: "nurse",
        label: "Nurse",
        shortLabel: "Nurse",
        careerIds: [
            "nursing"
        ]
    },
    {
        id: "pharmacist",
        label: "Pharmacist",
        shortLabel: "Pharmacist",
        careerIds: [
            "pharmacy"
        ]
    },
    {
        id: "physiotherapist",
        label: "Physiotherapist",
        shortLabel: "Physio",
        careerIds: [
            "physiotherapy"
        ]
    },
    {
        id: "respiratoryTherapist",
        label: "Respiratory Therapist",
        shortLabel: "Resp. Therapist",
        careerIds: [
            "respiratoryTherapy"
        ]
    }
];
const SALARY_DATA = [
    {
        country: "USA",
        flag: "🇺🇸",
        currency: "USD",
        slug: "usa",
        data: {
            physician: {
                range: "$220,000–$320,000/yr",
                note: "Varies by specialty"
            },
            dentist: {
                range: "$160,000–$240,000/yr",
                note: "General dentist"
            },
            nurse: {
                range: "$70,000–$110,000/yr",
                note: "RN — varies by state"
            },
            pharmacist: {
                range: "$120,000–$150,000/yr",
                note: "Retail/hospital"
            },
            physiotherapist: {
                range: "$75,000–$100,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "$60,000–$85,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Canada",
        flag: "🇨🇦",
        currency: "CAD",
        slug: "canada",
        data: {
            physician: {
                range: "CAD $250,000–$380,000/yr",
                note: "Varies by specialty/province"
            },
            dentist: {
                range: "CAD $120,000–$200,000/yr",
                note: ""
            },
            nurse: {
                range: "CAD $70,000–$100,000/yr",
                note: "RN — varies by province"
            },
            pharmacist: {
                range: "CAD $85,000–$120,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "CAD $65,000–$95,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "CAD $60,000–$85,000/yr",
                note: ""
            }
        }
    },
    {
        country: "UK",
        flag: "🇬🇧",
        currency: "GBP",
        slug: "uk",
        data: {
            physician: {
                range: "£40,000–£110,000/yr",
                note: "NHS — varies by grade/specialty"
            },
            dentist: {
                range: "£40,000–£100,000/yr",
                note: "NHS/private mix"
            },
            nurse: {
                range: "£28,000–£50,000/yr",
                note: "NHS bands 5–7"
            },
            pharmacist: {
                range: "£35,000–£65,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "£28,000–£50,000/yr",
                note: "NHS bands 5–7"
            },
            respiratoryTherapist: {
                range: "£28,000–£45,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Australia",
        flag: "🇦🇺",
        currency: "AUD",
        slug: "australia",
        data: {
            physician: {
                range: "AUD $200,000–$400,000/yr",
                note: "Varies by specialty"
            },
            dentist: {
                range: "AUD $100,000–$180,000/yr",
                note: ""
            },
            nurse: {
                range: "AUD $65,000–$95,000/yr",
                note: "RN — varies by state/sector"
            },
            pharmacist: {
                range: "AUD $75,000–$110,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "AUD $65,000–$95,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "AUD $60,000–$85,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Norway",
        flag: "🇳🇴",
        currency: "NOK",
        slug: "norway",
        data: {
            physician: {
                range: "NOK 900,000–1,500,000/yr",
                note: ""
            },
            dentist: {
                range: "NOK 700,000–1,100,000/yr",
                note: ""
            },
            nurse: {
                range: "NOK 480,000–650,000/yr",
                note: ""
            },
            pharmacist: {
                range: "NOK 520,000–720,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "NOK 500,000–700,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "NOK 480,000–650,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Denmark",
        flag: "🇩🇰",
        currency: "DKK",
        slug: "denmark",
        data: {
            physician: {
                range: "DKK 700,000–1,100,000/yr",
                note: ""
            },
            dentist: {
                range: "DKK 600,000–950,000/yr",
                note: ""
            },
            nurse: {
                range: "DKK 380,000–520,000/yr",
                note: ""
            },
            pharmacist: {
                range: "DKK 400,000–580,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "DKK 380,000–540,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "DKK 360,000–500,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Germany",
        flag: "🇩🇪",
        currency: "EUR",
        slug: "germany",
        data: {
            physician: {
                range: "€60,000–€120,000/yr",
                note: "Varies by specialty"
            },
            dentist: {
                range: "€55,000–€100,000/yr",
                note: ""
            },
            nurse: {
                range: "€32,000–€50,000/yr",
                note: ""
            },
            pharmacist: {
                range: "€40,000–€65,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "€35,000–€55,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "€32,000–€50,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Ireland",
        flag: "🇮🇪",
        currency: "EUR",
        slug: "ireland",
        data: {
            physician: {
                range: "€70,000–€140,000/yr",
                note: "HSE — varies by grade"
            },
            dentist: {
                range: "€60,000–€110,000/yr",
                note: ""
            },
            nurse: {
                range: "€35,000–€60,000/yr",
                note: "HSE grades"
            },
            pharmacist: {
                range: "€45,000–€75,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "€38,000–£60,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "€36,000–€55,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Netherlands",
        flag: "🇳🇱",
        currency: "EUR",
        slug: "netherlands",
        data: {
            physician: {
                range: "€80,000–€150,000/yr",
                note: ""
            },
            dentist: {
                range: "€65,000–€110,000/yr",
                note: ""
            },
            nurse: {
                range: "€35,000–€55,000/yr",
                note: ""
            },
            pharmacist: {
                range: "€45,000–€70,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "€38,000–€60,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "€35,000–€55,000/yr",
                note: ""
            }
        }
    },
    {
        country: "Sweden",
        flag: "🇸🇪",
        currency: "SEK",
        slug: "sweden",
        data: {
            physician: {
                range: "SEK 700,000–1,100,000/yr",
                note: ""
            },
            dentist: {
                range: "SEK 550,000–900,000/yr",
                note: ""
            },
            nurse: {
                range: "SEK 360,000–500,000/yr",
                note: ""
            },
            pharmacist: {
                range: "SEK 380,000–530,000/yr",
                note: ""
            },
            physiotherapist: {
                range: "SEK 360,000–510,000/yr",
                note: ""
            },
            respiratoryTherapist: {
                range: "SEK 340,000–490,000/yr",
                note: ""
            }
        }
    }
];
const CAREER_TO_PROFESSION_MAP = {
    mbbs: "physician",
    dentistry: "dentist",
    nursing: "nurse",
    pharmacy: "pharmacist",
    physiotherapy: "physiotherapist",
    respiratoryTherapy: "respiratoryTherapist",
    mlt: "respiratoryTherapist",
    all: null
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/SalaryComparison.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalaryComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/salaryData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SalaryComparison({ highlightCareer }) {
    _s();
    const [mobileProfession, setMobileProfession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONS"][0].id);
    // Derive highlighted profession from finder career
    const highlightedProfession = highlightCareer ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAREER_TO_PROFESSION_MAP"][highlightCareer] : null;
    // On mobile, prefer highlightedProfession if set
    const activeMobileProfession = highlightedProfession || mobileProfession;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "salary-comparison",
        "aria-labelledby": "salary-heading",
        className: "py-10 lg:py-10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10 lg:mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3",
                            children: "Career Possibilities"
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                            id: "salary-heading",
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.06
                            },
                            className: "font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-4",
                            children: "Where Could a Healthcare Career Take You?"
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            className: "font-body font-light text-[#475569] text-base sm:text-lg max-w-2xl mx-auto",
                            children: "A healthcare qualification can open doors worldwide. Explore indicative average annual salaries for qualified and licensed professionals."
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                highlightedProfession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        scale: 0.97
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "flex items-center gap-2 bg-[#d6e8fb] border border-[#0263CC]/20 rounded-xl px-4 py-3 mb-5 w-fit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base",
                            "aria-hidden": "true",
                            children: "👆"
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-medium text-sm text-[#0263CC]",
                            children: [
                                "Highlighted because you told us you're interested in",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONS"].find((p)=>p.id === highlightedProfession)?.label
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "mobile-profession",
                            className: "font-body font-medium text-sm text-[#334155] mb-2 block",
                            children: "Select a profession to compare:"
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "mobile-profession",
                                    value: activeMobileProfession,
                                    onChange: (e)=>setMobileProfession(e.target.value),
                                    className: "w-full appearance-none border border-[#E2E8F0] rounded-xl px-4 py-3 font-body text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#0263CC] pr-10",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.label
                                        }, p.id, false, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                                    size: 16,
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.55,
                        delay: 0.15
                    },
                    className: "hidden sm:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full min-w-[800px] border-collapse",
                            "aria-label": "Healthcare salary comparison by country",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[#0F172A] text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "text-left px-5 py-4 font-body font-semibold text-sm sticky left-0 bg-[#0F172A] z-10 min-w-[140px]",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/SalaryComparison.jsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "col",
                                                    className: `text-left px-4 py-4 font-body font-semibold text-sm whitespace-nowrap transition-colors duration-300 ${p.id === highlightedProfession ? "bg-[#0263CC] text-white" : "text-white/80"}`,
                                                    children: [
                                                        p.label,
                                                        p.id === highlightedProfession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#4DA5EC] align-middle",
                                                            "aria-label": "Your selected profession"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/SalaryComparison.jsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_DATA"].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-t border-[#E2E8F0] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"} hover:bg-[#F1F7FC]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `px-5 py-4 sticky left-0 z-10 border-r border-[#E2E8F0] ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/countries/${row.slug}`,
                                                        className: "flex items-center gap-2.5 hover:text-[#0263CC] transition-colors group",
                                                        "aria-label": `Explore ${row.country}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl",
                                                                "aria-hidden": "true",
                                                                children: row.flag
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/SalaryComparison.jsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-body font-medium text-sm text-[#0F172A] group-hover:text-[#0263CC] transition-colors whitespace-nowrap",
                                                                children: row.country
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/SalaryComparison.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/SalaryComparison.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONS"].map((p)=>{
                                                    const cell = row.data[p.id];
                                                    const isHighlighted = p.id === highlightedProfession;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: `px-4 py-4 transition-all duration-300 ${isHighlighted ? "bg-[#F1F7FC] border-x-2 border-[#4DA5EC]/40" : ""}`,
                                                        children: cell ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `font-body font-medium text-xs leading-snug ${isHighlighted ? "text-[#0263CC]" : "text-[#334155]"}`,
                                                                    children: cell.range
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 31
                                                                }, this),
                                                                cell.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-body text-xs text-[#94A3B8] mt-0.5",
                                                                    children: cell.note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                                            lineNumber: 189,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#CBD5E1] text-xs font-body",
                                                            children: "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                                            lineNumber: 198,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, p.id, false, {
                                                        fileName: "[project]/components/home/SalaryComparison.jsx",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            ]
                                        }, row.country, true, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/SalaryComparison.jsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:hidden space-y-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$salaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_DATA"].map((row)=>{
                        const cell = row.data[activeMobileProfession];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            "aria-hidden": "true",
                                            children: row.flag
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-body font-medium text-sm text-[#0F172A]",
                                            children: row.country
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this),
                                cell ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body font-semibold text-xs text-[#0263CC] text-right max-w-[160px] leading-snug",
                                    children: cell.range
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 224,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#CBD5E1] text-xs font-body",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 228,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, row.country, true, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    className: "mt-10 bg-[#F1F7FC] border border-[#d6e8fb] rounded-2xl p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    "aria-hidden": "true",
                                    children: "💡"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-xs font-medium text-[#0263CC] uppercase tracking-wider mb-1",
                                            children: "Illustrative Example Only"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-heading text-xl sm:text-2xl text-[#0F172A]",
                                            children: "Understanding Your Potential Investment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/SalaryComparison.jsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-light text-sm text-[#475569] leading-relaxed mb-3",
                            children: "At an indicative entry-level salary of ~$45,000/yr for a Nurse in the UK against an illustrative total programme cost of ~$60,000–80,000, a graduate could potentially recover their total study investment within roughly 1.5–2 years of qualified employment — before accounting for living costs, tax, or currency movement."
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-light text-sm text-[#94A3B8] italic mb-4",
                            children: "These are possibilities for licensed professionals, not guarantees."
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-5",
                            children: [
                                "USMLE",
                                "NCLEX",
                                "PLAB / UKMLA",
                                "AMC"
                            ].map((exam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-white border border-[#E2E8F0] rounded-full font-body font-medium text-xs text-[#475569]",
                                    children: exam
                                }, exam, false, {
                                    fileName: "[project]/components/home/SalaryComparison.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#country-finder",
                            className: "inline-flex items-center gap-2 font-body font-medium text-sm text-[#0263CC] hover:text-[#0251a8] transition-colors",
                            "aria-label": "Go to Country Finder to find the right career and country",
                            children: "Find the Right Career & Country for Me →"
                        }, void 0, false, {
                            fileName: "[project]/components/home/SalaryComparison.jsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/SalaryComparison.jsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/SalaryComparison.jsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/SalaryComparison.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(SalaryComparison, "q6qHDLBKAiwf4z+wsOjmFzeKsnM=");
_c = SalaryComparison;
var _c;
__turbopack_context__.k.register(_c, "SalaryComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComparisonSection/BackgroundGlow.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BackgroundGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/BackgroundGlow.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/BackgroundGlow.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComparisonSection/BackgroundGlow.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = BackgroundGlow;
var _c;
__turbopack_context__.k.register(_c, "BackgroundGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComparisonSection/ComparisonCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/react-fontawesome'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        x: -12
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
};
function ComparisonCard({ title, color, icon, data }) {
    const isBlue = color === "blue";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        viewport: {
            once: true
        },
        className: `rounded-3xl border p-7 min-h-[400px] backdrop-blur-xl ${isBlue ? "border-[#0263CC]/40 bg-[#0263CC]/10" : "border-white/10 bg-white/5"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                        icon: icon,
                        className: `text-2xl ${isBlue ? "text-[#4DA5EC]" : "text-red-400"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `font-heading text-xl ${isBlue ? "text-white" : "text-slate-300"}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.ul, {
                variants: container,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true
                },
                className: "space-y-4",
                children: data.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.li, {
                        variants: item,
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                                icon: icon,
                                className: `mt-0.5 shrink-0 text-sm ${isBlue ? "text-[#4DA5EC]" : "text-red-400/70"}`
                            }, void 0, false, {
                                fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-body font-light text-sm leading-relaxed ${isBlue ? "text-white/85" : "text-slate-400"}`,
                                children: point
                            }, void 0, false, {
                                fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComparisonSection/ComparisonCard.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ComparisonCard;
var _c;
__turbopack_context__.k.register(_c, "ComparisonCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComparisonSection/CTASection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        },
        viewport: {
            once: true
        },
        className: "lg:col-span-3 mt-2 flex flex-col items-center gap-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-slate-400 text-sm max-w-lg",
                children: "We are specialists, not a general agency. Becoming a healthcare professional is a journey, not a transaction."
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/CTASection.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/counselling",
                className: "inline-flex items-center gap-2 rounded-full bg-[#0263CC] px-8 py-3.5 font-body font-medium text-white text-sm hover:bg-[#0251a8] transition-colors duration-200",
                children: "Book Free Counselling"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/CTASection.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComparisonSection/CTASection.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/comparisonData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const comparisonData = {
    agent: [
        "Job ends once the offer letter and visa are issued",
        "May work with whichever university pays the highest commission",
        "FMGE/NExT preparation is treated as something for later",
        "Salary promises may be vague or inflated",
        "Parents involved mainly during payment",
        "'Best country' often means whichever country has a tie-up"
    ],
    medico: [
        "We stay involved through licensing exams and early career guidance",
        "We work only with NMC-recognised universities",
        "FMGE/NExT & USMLE pathways planned from Day One",
        "Transparent salary expectations with sourced information",
        "Parents are welcomed throughout the entire journey",
        "We help compare options honestly based on career, budget and priorities"
    ]
};
const __TURBOPACK__default__export__ = comparisonData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComparisonSection/ComparisonSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonSection",
    ()=>ComparisonSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/modules'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/pagination'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$BackgroundGlow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComparisonSection/BackgroundGlow.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$ComparisonCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComparisonSection/ComparisonCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$CTASection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComparisonSection/CTASection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/comparisonData.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function ComparisonSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-c1cb811549b350e2" + " " + "relative overflow-hidden bg-[#071321] py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$BackgroundGlow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1cb811549b350e2" + " " + "absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:70px_70px]"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c1cb811549b350e2" + " " + "relative mx-auto max-w-7xl px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7
                        },
                        viewport: {
                            once: true
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c1cb811549b350e2" + " " + "rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-center text-xs font-semibold tracking-[.25em] text-cyan-300 backdrop-blur-xl lg:text-sm lg:uppercase",
                            children: "Trusted by 5000+ Medical Aspirants"
                        }, void 0, false, {
                            fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 35
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "mx-auto mt-10 max-w-4xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-c1cb811549b350e2" + " " + "text-3xl font-bold leading-tight text-white md:text-7xl lg:text-5xl",
                                children: [
                                    "Beyond Admissions.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-c1cb811549b350e2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c1cb811549b350e2" + " " + "text-[#4DA5EC]",
                                        children: "We Build Medical Careers."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c1cb811549b350e2" + " " + "mx-auto mt-4 max-w-3xl font-body text-lg font-light leading-8 text-slate-400",
                                children: "Most consultants disappear after your admission letter. We stay with you through licensing exams, career planning, and your journey to becoming a successful healthcare professional."
                            }, void 0, false, {
                                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2
                        },
                        viewport: {
                            once: true
                        },
                        className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
                        children: [
                            [
                                "5000+",
                                "Students Guided"
                            ],
                            [
                                "98%",
                                "Visa Success"
                            ],
                            [
                                "20+",
                                "Countries"
                            ],
                            [
                                "100%",
                                "Transparency"
                            ]
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-c1cb811549b350e2" + " " + "group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 md:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1cb811549b350e2" + " " + "font-heading text-3xl text-white md:text-5xl",
                                        children: item[0]
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-c1cb811549b350e2" + " " + "mt-3 font-body text-sm font-light text-slate-400 md:text-base",
                                        children: item[1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item[0], true, {
                                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swiper, {
                            modules: [
                                Pagination,
                                Autoplay
                            ],
                            slidesPerView: 1,
                            spaceBetween: 20,
                            pagination: {
                                clickable: true
                            },
                            autoplay: {
                                delay: 4000,
                                disableOnInteraction: false
                            },
                            breakpoints: {
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                }
                            },
                            className: "comparison-swiper pb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                                    className: "h-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$ComparisonCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "A Typical Admission Agent",
                                        color: "red",
                                        icon: faCircleXmark,
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].agent
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                                    className: "h-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$ComparisonCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        title: "Medico Yatra",
                                        color: "blue",
                                        icon: faCircleCheck,
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$comparisonData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].medico
                                    }, void 0, false, {
                                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$CTASection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c1cb811549b350e2",
                children: ".comparison-swiper .swiper-pagination{bottom:0}.comparison-swiper .swiper-pagination-bullet{opacity:.4;background:#fff;width:8px;height:8px;transition:all .3s}.comparison-swiper .swiper-pagination-bullet-active{opacity:1;background:#4da5ec;border-radius:999px;width:24px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComparisonSection/ComparisonSection.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ComparisonSection;
const __TURBOPACK__default__export__ = ComparisonSection;
var _c;
__turbopack_context__.k.register(_c, "ComparisonSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/AgentComparison.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$ComparisonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComparisonSection/ComparisonSection.jsx [app-client] (ecmascript)");
;
;
const AgentComparison = ()=>{
    const design = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSection$2f$ComparisonSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonSection"], {}, void 0, false, {
            fileName: "[project]/components/home/AgentComparison.jsx",
            lineNumber: 6,
            columnNumber: 8
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
    return design;
};
_c = AgentComparison;
const __TURBOPACK__default__export__ = AgentComparison;
var _c;
__turbopack_context__.k.register(_c, "AgentComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Accordion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionGroup",
    ()=>AccordionGroup,
    "AccordionItem",
    ()=>AccordionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function AccordionItem({ question, answer, defaultOpen = false, index = 0 }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    const id = `accordion-${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-[#E2E8F0] rounded-xl overflow-hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: `${id}-btn`,
                "aria-expanded": open,
                "aria-controls": `${id}-panel`,
                onClick: ()=>setOpen((o)=>!o),
                className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0263CC] focus-visible:outline-offset-[-2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-heading text-[#0F172A] text-lg leading-snug pr-2",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#0263CC] text-white rotate-180" : "bg-[#F1F7FC] text-[#0263CC]"}`,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                            size: 18,
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Accordion.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Accordion.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                initial: false,
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    id: `${id}-panel`,
                    role: "region",
                    "aria-labelledby": `${id}-btn`,
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-6 pt-1 text-[#475569] font-body font-light leading-relaxed text-base border-t border-[#F1F5F9]",
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/Accordion.jsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Accordion.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Accordion.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(AccordionItem, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c = AccordionItem;
function AccordionGroup({ items, mode = "multiple" }) {
    _s1();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (mode === "single") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SingleAccordionItem, {
                    question: item.question,
                    answer: item.answer,
                    index: i,
                    open: openIndex === i,
                    onToggle: ()=>setOpenIndex(openIndex === i ? null : i)
                }, item.id || i, false, {
                    fileName: "[project]/components/ui/Accordion.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ui/Accordion.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                question: item.question,
                answer: item.answer,
                index: i
            }, item.id || i, false, {
                fileName: "[project]/components/ui/Accordion.jsx",
                lineNumber: 85,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/Accordion.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s1(AccordionGroup, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c1 = AccordionGroup;
function SingleAccordionItem({ question, answer, index, open, onToggle }) {
    const id = `acc-single-${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-[#E2E8F0] rounded-xl overflow-hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: `${id}-btn`,
                "aria-expanded": open,
                "aria-controls": `${id}-panel`,
                onClick: onToggle,
                className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-[#0263CC] focus-visible:outline-offset-[-2px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-heading text-[#0F172A] text-lg leading-snug pr-2",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#0263CC] text-white rotate-180" : "bg-[#F1F7FC] text-[#0263CC]"}`,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                            size: 18,
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Accordion.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Accordion.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                initial: false,
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    id: `${id}-panel`,
                    role: "region",
                    "aria-labelledby": `${id}-btn`,
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25,
                        ease: "easeInOut"
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-6 pt-1 text-[#475569] font-body font-light leading-relaxed text-base border-t border-[#F1F5F9]",
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Accordion.jsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/Accordion.jsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Accordion.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Accordion.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c2 = SingleAccordionItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AccordionItem");
__turbopack_context__.k.register(_c1, "AccordionGroup");
__turbopack_context__.k.register(_c2, "SingleAccordionItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/faqs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Medico Yatra — FAQ Data
 * Used by both the FAQ section and JSON-LD FAQPage schema.
 */ __turbopack_context__.s([
    "FAQS",
    ()=>FAQS,
    "HONESTY_CHECKS",
    ()=>HONESTY_CHECKS
]);
const FAQS = [
    {
        id: "faq-1",
        question: "Does Medico Yatra only help with MBBS?",
        answer: "Not at all. MBBS is one of several healthcare careers we guide — we also work with students interested in Dentistry (BDS), Nursing, Pharmacy, Physiotherapy, Respiratory Therapy, Medical Lab Technology, and other allied health pathways. If you're not sure which career suits you, that's exactly what our free counselling session is for. We help you map the right path based on your interests, academic profile, and goals."
    },
    {
        id: "faq-2",
        question: "What is the Country Finder, and is it accurate?",
        answer: "The Country Finder is a quick 3-step tool that shows you which countries broadly match your career interest, budget range, and priorities — without requiring you to sign up or share your phone number first. It's a general starting point, not a personalised recommendation. Your actual best-fit country depends on your specific NEET score, academic profile, financial situation, and personal circumstances. Book a free counselling session to get guidance tailored to you."
    },
    {
        id: "faq-3",
        question: "Do I need to give my phone number to use the Country Finder?",
        answer: "No. You can see your Country Finder results immediately without entering any contact details. The option to share your results on WhatsApp is entirely optional — it's there in case you want to save or share your results. We believe you should be able to explore your options first, without any pressure."
    },
    {
        id: "faq-4",
        question: "Are the universities recognised by the NMC (National Medical Commission)?",
        answer: "We work with NMC-recognised universities for our MBBS programmes. However, NMC recognition lists and regulations change over time. It is critical that you verify the current NMC-approved list directly on the official NMC website before enrolling — do not rely solely on our guidance or any other third-party source. For non-MBBS courses, recognition is governed by different bodies depending on the profession and country. We will explain the relevant recognition and licensing requirements for your specific course during counselling."
    },
    {
        id: "faq-5",
        question: "Will I really earn the salaries shown in your comparison table?",
        answer: "The salary figures in our table are illustrative and approximate. They represent indicative ranges for qualified and fully licensed professionals in those countries — not starting salaries for fresh graduates. Earning those figures requires completing your course, passing the relevant licensing exams (such as FMGE/NExT, USMLE, NCLEX, PLAB/UKMLA, or AMC), obtaining the necessary visa and work rights, and accumulating relevant experience. We show these figures to give you a sense of long-term career potential, not to promise specific outcomes."
    },
    {
        id: "faq-6",
        question: "How is Medico Yatra different from a regular admission agent?",
        answer: "Most admission agents focus on getting you an offer letter and visa — their job ends there. Medico Yatra is a healthcare career specialist. We guide you on course and country selection, help you plan your FMGE/NExT or USMLE pathway from the start, stay involved through licensing preparation, and include parents as part of the process at every stage. We also only work with NMC-recognised institutions for MBBS — not whichever university pays the highest commission."
    },
    {
        id: "faq-7",
        question: "Do you help with licensing exams like FMGE, NExT, or USMLE?",
        answer: "Yes. Licensing preparation is built into our guidance from the counselling stage — not treated as something to worry about after you graduate. We help you understand FMGE and NExT requirements for returning to India, and USMLE pathways for those targeting a career in the USA. We also explain NCLEX for nursing, PLAB/UKMLA for the UK, and AMC for Australia, depending on your course and career goals. Our aim is that you finish your degree understanding exactly what the next steps are."
    },
    {
        id: "faq-8",
        question: "Is this suitable if my NEET score is low, or if I'm exploring non-MBBS options?",
        answer: "Absolutely. A lower NEET score doesn't mean fewer options — it may mean MBBS abroad is a better fit than a private college in India, or it may mean a different healthcare career could suit you better. We take low-NEET situations seriously and give honest advice about what's realistic. For non-MBBS courses like Nursing, Pharmacy, or Physiotherapy, NEET may not even be a requirement depending on the country and programme. Bring your specific situation to a free counselling session and we'll give you an honest picture."
    },
    {
        id: "faq-9",
        question: "Do you guarantee admission, visa, or jobs?",
        answer: "No — and you should be cautious of any service that does. We provide honest, professional guidance to help you make the best possible decision. Admission depends on your academic profile and the university's requirements. Visa depends on government policies and your individual circumstances. Jobs and salary depend on licensing, immigration status, local demand, and your own performance. We will never make guarantees about outcomes we cannot control — and we'll always tell you that upfront."
    }
];
const HONESTY_CHECKS = [
    {
        id: "hc-1",
        question: "What if the degree isn't valid when I come back to India?",
        answer: "This is the most important question to ask — and we're glad you're asking it before enrolling. For MBBS, validity in India depends on two things: the university being on the NMC-approved list at the time of your graduation, and passing the FMGE / NExT screening exam. NMC recognition can change between the time you enrol and the time you graduate. This is why we only work with well-established, long-recognised institutions — and why we still advise you to verify NMC status directly before enrolling. For nursing, pharmacy, and allied health, recognition is governed by different bodies. We explain all of this in detail during our counselling sessions — never brush it aside."
    },
    {
        id: "hc-2",
        question: "What if my child is alone and unsafe abroad?",
        answer: "This concern is completely valid, and we take it seriously. We focus on countries and universities with established Indian student communities, known welfare support structures, and transparent on-campus accommodation. We also include parents in every stage of the decision — from counselling to university selection to pre-departure briefing. We won't tell you any destination is completely risk-free, but we will help you make an informed choice and ensure you know what support systems exist. We never recommend a destination we wouldn't be comfortable recommending to our own family."
    },
    {
        id: "hc-3",
        question: "What if we spend the money and it doesn't work out?",
        answer: "This is a real risk and we won't pretend otherwise. The biggest safeguard is making the right decision at the start — not rushing, not following someone else's choice, and not relying on agents who prioritise commissions over fit. That's why we spend time on the counselling process before any application. We also make sure you understand the FMGE/NExT pass requirements, the licensing pathway, and what happens if circumstances change. We can't remove all risk, but we can make sure you enter with your eyes open and a clear plan."
    },
    {
        id: "hc-4",
        question: "Is this actually cheaper than studying in India, or is that a myth?",
        answer: "It depends on your specific situation. For students who don't secure government seats, private MBBS in India can cost ₹80 Lakh to ₹1.5 Crore or more. Studying MBBS in Russia, Kyrgyzstan, or Georgia can cost ₹18–40 Lakh in total — but that comparison only holds if you pass the FMGE/NExT and practice in India. For nursing and allied health, abroad can be genuinely more affordable and the return on investment is often faster due to global demand. We run through an honest cost comparison during counselling for your specific course and situation."
    },
    {
        id: "hc-5",
        question: "My marks / NEET score aren't great — will anyone even take this seriously?",
        answer: "Yes — we will. A lower NEET score doesn't automatically mean a worse future. It changes which doors are open and which path makes most sense. Some countries accept students with lower NEET scores for MBBS, and several healthcare careers don't require NEET at all. We will give you an honest assessment of what's realistic for your profile — including the honest conversation about whether MBBS abroad is the right move or whether a different healthcare career might serve you better in the long run. We don't push every student toward MBBS just because it's the most popular choice."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/HonestyCheck.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HonestyCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Accordion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faqs.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function HonestyCheck() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "honesty-check",
        "aria-labelledby": "honesty-heading",
        className: "py-20 lg:py-28 bg-[#F1F7FC]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "font-body text-xs font-medium text-[#02A7BB] uppercase tracking-widest mb-3",
                            children: "Real Questions, Honest Answers"
                        }, void 0, false, {
                            fileName: "[project]/components/home/HonestyCheck.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                            id: "honesty-heading",
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.06
                            },
                            className: "font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] leading-tight mb-4",
                            children: "Before You Go Further — Let's Address What You're Actually Worried About"
                        }, void 0, false, {
                            fileName: "[project]/components/home/HonestyCheck.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            className: "font-body font-light text-[#475569] text-base max-w-xl mx-auto",
                            children: "We'd rather you ask the hard questions now than regret a decision later."
                        }, void 0, false, {
                            fileName: "[project]/components/home/HonestyCheck.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/HonestyCheck.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.55,
                        delay: 0.1
                    },
                    className: "mb-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionGroup"], {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HONESTY_CHECKS"],
                        mode: "single"
                    }, void 0, false, {
                        fileName: "[project]/components/home/HonestyCheck.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/HonestyCheck.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-light text-[#475569] text-sm leading-relaxed mb-5",
                            children: "If your specific worry isn't listed here, that's exactly the right question to bring to a free counselling session. No question is too small, and no concern is off-limits."
                        }, void 0, false, {
                            fileName: "[project]/components/home/HonestyCheck.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/counselling",
                            variant: "primary",
                            size: "lg",
                            children: "Talk to Us About Your Specific Concern"
                        }, void 0, false, {
                            fileName: "[project]/components/home/HonestyCheck.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/HonestyCheck.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HonestyCheck.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/HonestyCheck.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = HonestyCheck;
var _c;
__turbopack_context__.k.register(_c, "HonestyCheck");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CTABand.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTABand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// CTABand.jsx
"use client";
;
;
;
;
function WhatsAppIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
        }, void 0, false, {
            fileName: "[project]/components/home/CTABand.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/CTABand.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function CTABand() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [
            "start end",
            "end start"
        ]
    });
    const bgY = useTransform(scrollYProgress, [
        0,
        1
    ], [
        -180,
        180
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden min-h-screen flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                style: {
                    y: bgY
                },
                className: "absolute -top-56 -bottom-56 inset-x-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fill: true,
                        src: "/images/parralx.png",
                        className: "object-cover scale-[1.3]",
                        alt: "Parallax Image"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 31,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#0263CC]/45"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 38,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block absolute inset-0 bg-gradient-to-r from-[#0263CC] via-[#0263CC]/25 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 41,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden absolute inset-0 bg-gradient-to-t from-[#0263CC]/80 via-[#0263CC]/35 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 44,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CTABand.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1]",
                style: {
                    backgroundImage: "radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px)",
                    backgroundSize: "32px 32px"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/CTABand.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-xs uppercase tracking-widest text-white/70 mb-4 font-bold",
                        children: "Take the First Step"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-4xl lg:text-6xl text-white font-bold mb-6",
                        children: "Your Healthcare Career Deserves a Real Plan — Not Guesswork."
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-white/85 mb-10 max-w-2xl mx-auto",
                        children: "Get free, honest counselling. We'll help you choose the right course, country and licensing path — with no pressure and no false promises."
                    }, void 0, false, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/counselling",
                                variant: "white",
                                size: "xl",
                                children: "Book Free Counselling"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CTABand.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/apply",
                                variant: "outline-white",
                                size: "xl",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CTABand.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/910000000000",
                                className: "px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                                        fileName: "[project]/components/home/CTABand.jsx",
                                        lineNumber: 59,
                                        columnNumber: 168
                                    }, this),
                                    "WhatsApp Us"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CTABand.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CTABand.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CTABand.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CTABand.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, this);
}
_s(CTABand, "OsXX/AUl1kyhLJqakzawn5Sd7ps=", false, function() {
    return [
        useScroll,
        useTransform
    ];
});
_c1 = CTABand;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "CTABand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Testimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/modules'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'swiper/css/pagination'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/**
 * ⚠ DEVELOPMENT PLACEHOLDERS
 * All testimonials below are clearly marked for replacement before launch.
 * Real testimonials must be genuine, consented, and verifiable.
 * Never fabricate names, photos, or quotes.
 */ const TESTIMONIALS = [
    {
        id: "t1",
        type: "student",
        label: "MBBS Student",
        labelColor: "#0263CC",
        labelBg: "#d6e8fb",
        rating: 5,
        quote: "Medico Yatra made my MBBS admission journey simple and transparent. Their counselors helped me choose the right university and supported me throughout the admission process.",
        name: "Rahul Sharma",
        course: "MBBS Student",
        country: "Russia",
        flag: "🇷🇺",
        initials: "R",
        avatarBg: "#0263CC"
    },
    {
        id: "t2",
        type: "nursing",
        label: "Nursing Student",
        labelColor: "#02A7BB",
        labelBg: "#d6f4f7",
        rating: 5,
        quote: "The team guided me through every step of my nursing admission. Their honest advice and quick support made the process completely stress-free.",
        name: "Priya Verma",
        course: "BSc Nursing",
        country: "Australia",
        flag: "🇦🇺",
        initials: "P",
        avatarBg: "#02A7BB"
    },
    {
        id: "t3",
        type: "parent",
        label: "Parent's Voice",
        labelColor: "#4DA5EC",
        labelBg: "#e8f4fd",
        rating: 5,
        quote: "As a parent, I appreciated Medico Yatra's transparency and regular updates. Their team answered every question and gave us complete confidence.",
        name: "Pankaj Kumar",
        course: "Parent of MBBS Student",
        country: "United Kingdom",
        flag: "🇬🇧",
        initials: "P",
        avatarBg: "#334155",
        isParent: true
    },
    {
        id: "t4",
        type: "student",
        label: "Dentistry Student",
        labelColor: "#0263CC",
        labelBg: "#d6e8fb",
        rating: 5,
        quote: "From university selection to visa guidance, everything was handled professionally. I'm grateful for the smooth admission experience.",
        name: "Durgesh",
        course: "BDS / Dentistry",
        country: "Philippines",
        flag: "🇵🇭",
        initials: "D",
        avatarBg: "#0263CC"
    },
    {
        id: "t5",
        type: "student",
        label: "Pharmacy Student",
        labelColor: "#02A7BB",
        labelBg: "#d6f4f7",
        rating: 5,
        quote: "Medico Yatra helped me find the right pharmacy program within my budget. Their counselors were supportive and always available.",
        name: "Atif Raza",
        course: "BPharm",
        country: "Canada",
        flag: "🇨🇦",
        initials: "A",
        avatarBg: "#02A7BB"
    },
    {
        id: "t6",
        type: "video",
        label: "https://youtu.be/GYtoyqZaFsI?si=Z0HmwVrgs-Dp1mnw",
        labelColor: "#475569",
        labelBg: "#F1F5F9",
        rating: 5,
        quote: "Excellent guidance from application to arrival abroad. The entire journey was smooth, and I highly recommend Medico Yatra.",
        name: "Ajay Kumar",
        course: "MBBS",
        country: "United Kingdom",
        flag: "🇬🇧",
        initials: "A",
        avatarBg: "#0F172A",
        isVideo: true
    }
];
/* ── Star rating ─────────────────────────────────────────────────── */ function StarRow({ count = 5 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-0.5",
        "aria-label": `${count} out of 5 stars`,
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                size: 14,
                "aria-hidden": "true",
                className: i < count ? "fill-amber-400 text-amber-400" : "text-[#E2E8F0]"
            }, i, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 123,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c = StarRow;
/* ── Google-style source badge ───────────────────────────────────── */ function GoogleBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        "aria-label": "Google Review",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                        fill: "#4285F4"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                        fill: "#34A853"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                        fill: "#FBBC05"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                        fill: "#EA4335"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-body text-[10px] font-medium text-[#94A3B8] tracking-wide",
                children: "Google Review"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c1 = GoogleBadge;
/* ── Single testimonial card ─────────────────────────────────────── */ function TestimonialCard({ t }) {
    if (t.isVideo) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoCard, {
        t: t
    }, void 0, false, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 151,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative flex flex-col h-full bg-white rounded-3xl p-6 select-none",
        style: {
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 24px rgba(2,99,204,0.06), 0 1px 4px rgba(0,0,0,0.04)"
        },
        "aria-label": `Testimonial from ${t.name}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center px-3 py-1 rounded-full font-body font-semibold text-xs",
                        style: {
                            color: t.labelColor,
                            backgroundColor: t.labelBg
                        },
                        children: t.label
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleBadge, {}, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRow, {
                count: t.rating
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Quote, {
                        size: 32,
                        className: "absolute -top-1 -left-1 opacity-10",
                        style: {
                            color: t.labelColor
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `font-body font-light text-sm leading-relaxed pt-3 pl-1 ${t.placeholder ? "text-[#94A3B8] italic" : "text-[#334155]"}`,
                        children: t.quote
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-5 h-px bg-[#F1F5F9]",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-body font-bold text-sm",
                        style: {
                            backgroundColor: t.avatarBg
                        },
                        "aria-hidden": "true",
                        children: t.initials
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `font-body font-semibold text-sm truncate ${t.placeholder ? "text-[#94A3B8]" : "text-[#0F172A]"}`,
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-xs text-[#94A3B8] flex items-center gap-1 mt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.flag
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: [
                                            t.course,
                                            " · ",
                                            t.country
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        style: {
                            backgroundColor: "#d6e8fb"
                        },
                        "aria-label": "Verified",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "11",
                            height: "11",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 6l3 3 5-5",
                                stroke: "#0263CC",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Testimonials.jsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c2 = TestimonialCard;
/* ── Video card ──────────────────────────────────────────────────── */ function VideoCard({ t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative flex flex-col h-full rounded-3xl overflow-hidden select-none",
        style: {
            backgroundColor: "#0F172A",
            minHeight: 320
        },
        "aria-label": "Video testimonial placeholder",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at 30% 20%, rgba(2,99,204,0.25) 0%, transparent 65%)"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col h-full p-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center px-3 py-1 rounded-full font-body font-semibold text-xs text-white",
                                style: {
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                    border: "1px solid rgba(255,255,255,0.15)"
                                },
                                children: "🎬 Video Story"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            t.placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-xs text-amber-400 bg-amber-900/30 border border-amber-700/30 px-2 py-0.5 rounded-full",
                                children: "Placeholder"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRow, {
                        count: 5
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center rounded-2xl gap-3 cursor-pointer group",
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full aspect-video overflow-hidden rounded-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                className: "w-full h-full",
                                src: "https://www.youtube.com/embed/GYtoyqZaFsI?si=Z0HmwVrgs-Dp1mnw",
                                title: `${t.name} Video Testimonial`,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                referrerPolicy: "strict-origin-when-cross-origin",
                                allowFullScreen: true
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 279,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Testimonials.jsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-body font-bold text-sm shrink-0",
                                style: {
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    border: "1px solid rgba(255,255,255,0.12)"
                                },
                                children: t.initials
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body font-semibold text-sm text-white/60",
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-xs text-white/35",
                                        children: [
                                            t.course,
                                            " · ",
                                            t.country
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_c3 = VideoCard;
/* ── Aggregate rating strip ──────────────────────────────────────── */ function RatingStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-0.5",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                size: 20,
                                className: "fill-amber-400 text-amber-400",
                                "aria-hidden": "true"
                            }, i, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 317,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-heading text-2xl text-[#0F172A]",
                                children: "5.0"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-body text-sm text-[#94A3B8] ml-1.5",
                                children: "average rating"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block w-px h-8 bg-[#E2E8F0]",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                fill: "#4285F4"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                fill: "#34A853"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                fill: "#FBBC05"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                fill: "#EA4335"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-body font-medium text-sm text-[#334155]",
                        children: "Google Reviews"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:block w-px h-8 bg-[#E2E8F0]",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-sm text-[#94A3B8]",
                children: [
                    "Based on",
                    " 200+",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[#0F172A]",
                        children: "G"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    " ",
                    "verified reviews"
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
_c4 = RatingStrip;
function Testimonials() {
    _s();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        "aria-labelledby": "testimonials-heading",
        className: "py-10 lg:py-14 overflow-hidden",
        style: {
            backgroundColor: "#F1F7FC"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-40",
                style: {
                    backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3",
                                children: "Student Stories"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                                id: "testimonials-heading",
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.06
                                },
                                className: "font-medium text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-5",
                                children: "Real Students. Real Journeys."
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingStrip, {}, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>swiperRef.current?.slidePrev(),
                                "aria-label": "Previous testimonial",
                                className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white hover:border-[#0263CC] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                                    size: 18,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.jsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>swiperRef.current?.slideNext(),
                                "aria-label": "Next testimonial",
                                className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#0263CC] hover:bg-[#0263CC] hover:text-white hover:border-[#0263CC] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                    size: 18,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.jsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Swiper, {
                                modules: [
                                    Autoplay,
                                    Pagination
                                ],
                                onSwiper: (sw)=>{
                                    swiperRef.current = sw;
                                },
                                onSlideChange: (sw)=>setActiveIndex(sw.realIndex),
                                spaceBetween: 20,
                                slidesPerView: 1,
                                loop: true,
                                autoplay: {
                                    delay: 4000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                },
                                pagination: false,
                                breakpoints: {
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 24
                                    }
                                },
                                className: "!pb-2",
                                "aria-label": "Testimonials carousel",
                                children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwiperSlide, {
                                        className: "!h-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                            t: t
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Testimonials.jsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this)
                                    }, t.id, false, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 mt-8",
                        role: "tablist",
                        "aria-label": "Slide indicators",
                        children: TESTIMONIALS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                role: "tab",
                                "aria-selected": i === activeIndex,
                                "aria-label": `Go to slide ${i + 1}`,
                                onClick: ()=>swiperRef.current?.slideToLoop(i),
                                className: "rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                                style: {
                                    width: i === activeIndex ? 24 : 8,
                                    height: 8,
                                    backgroundColor: i === activeIndex ? "#0263CC" : "#CBD5E1"
                                }
                            }, i, false, {
                                fileName: "[project]/components/home/Testimonials.jsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-center mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/counselling",
                            className: "inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base text-white transition-all duration-200 shadow-lg shadow-[#0263CC]/20 hover:shadow-xl hover:shadow-[#0263CC]/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#0263CC]",
                            style: {
                                backgroundColor: "#0263CC"
                            },
                            children: "Start Your Journey — Book Free Counselling"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Testimonials.jsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Testimonials.jsx",
                lineNumber: 374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "ImKwUn1GA4XVtN+qcn1VQe6iMmI=");
_c5 = Testimonials;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "StarRow");
__turbopack_context__.k.register(_c1, "GoogleBadge");
__turbopack_context__.k.register(_c2, "TestimonialCard");
__turbopack_context__.k.register(_c3, "VideoCard");
__turbopack_context__.k.register(_c4, "RatingStrip");
__turbopack_context__.k.register(_c5, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/FAQ.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Accordion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faqs.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ── Lead capture form ─────────────────────────────────────────── */ const COURSE_OPTIONS = [
    "MBBS / Medicine",
    "BDS / Dentistry",
    "BSc Nursing",
    "BPharm / PharmD",
    "Physiotherapy (BPT)",
    "Respiratory Therapy / MLT",
    "Not Sure Yet"
];
const TRUST_POINTS = [
    "Free — no payment required",
    "No pressure, no sales pitch",
    "Response within 24 hours"
];
function LeadForm() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        course: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleChange(e) {
        setForm((f)=>({
                ...f,
                [e.target.name]: e.target.value
            }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        // TODO: wire to your CRM / API endpoint
        setTimeout(()=>{
            setLoading(false);
            setSubmitted(true);
        }, 900);
    }
    /* ── Success State ── */ if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
            initial: {
                opacity: 0,
                scale: 0.96
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: 0.4
            },
            className: "flex flex-col items-center justify-center text-center gap-5 py-12 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 rounded-full flex items-center justify-center",
                    style: {
                        backgroundColor: "#d6f4f7"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle2, {
                        size: 32,
                        className: "text-[#02A7BB]"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/FAQ.jsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-heading text-2xl text-[#0F172A] mb-2",
                            children: "We'll be in touch!"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body font-light text-sm text-[#475569] leading-relaxed max-w-xs mx-auto",
                            children: "A counsellor will reach out within 24 hours. No pressure, no sales pitch — just an honest conversation."
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FAQ.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>{
                        setSubmitted(false);
                        setForm({
                            name: "",
                            phone: "",
                            email: "",
                            course: ""
                        });
                    },
                    className: "font-body text-xs text-[#0263CC] hover:underline",
                    children: "Submit another enquiry"
                }, void 0, false, {
                    fileName: "[project]/components/home/FAQ.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FAQ.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "faq-name",
                        className: "font-body font-medium text-xs text-[#334155] mb-1.5 block",
                        children: [
                            "Full Name ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                size: 15,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "faq-name",
                                name: "name",
                                type: "text",
                                required: true,
                                autoComplete: "name",
                                value: form.name,
                                onChange: handleChange,
                                placeholder: "Your full name",
                                className: "w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "faq-phone",
                        className: "font-body font-medium text-xs text-[#334155] mb-1.5 block",
                        children: [
                            "WhatsApp / Phone ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 151,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Phone, {
                                size: 15,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "faq-phone",
                                name: "phone",
                                type: "tel",
                                required: true,
                                autoComplete: "tel",
                                value: form.phone,
                                onChange: handleChange,
                                placeholder: "+91 00000 00000",
                                className: "w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "faq-email",
                        className: "font-body font-medium text-xs text-[#334155] mb-1.5 block",
                        children: "Email Address"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                size: 15,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "faq-email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                value: form.email,
                                onChange: handleChange,
                                placeholder: "your@email.com",
                                className: "w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "faq-course",
                        className: "font-body font-medium text-xs text-[#334155] mb-1.5 block",
                        children: [
                            "Course Interest ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 210,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookOpen, {
                                size: 15,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "faq-course",
                                name: "course",
                                required: true,
                                value: form.course,
                                onChange: handleChange,
                                className: "w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] font-body text-sm text-[#0F172A] focus:outline-none focus:border-[#0263CC] focus:bg-white focus:ring-2 focus:ring-[#0263CC]/10 transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Select a course..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/FAQ.jsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    COURSE_OPTIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                                size: 15,
                                className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/FAQ.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "mt-1 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-body font-semibold text-sm text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0263CC] disabled:opacity-60",
                style: {
                    backgroundColor: "#0263CC"
                },
                onMouseEnter: (e)=>{
                    if (!loading) {
                        e.currentTarget.style.backgroundColor = "#0251a8";
                    }
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.backgroundColor = "#0263CC";
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "rgba(255,255,255,0.3)",
                                    strokeWidth: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQ.jsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2a10 10 0 0 1 10 10",
                                    stroke: "white",
                                    strokeWidth: "3",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQ.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        "Submitting..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Send, {
                            size: 15,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this),
                        "Book Free Counselling"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-body text-xs text-black text-center leading-relaxed",
                children: "Your details are kept private. We never share or sell your information."
            }, void 0, false, {
                fileName: "[project]/components/home/FAQ.jsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FAQ.jsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(LeadForm, "N8An8E/wzxgQy0XIJLLfYbNsGAk=");
_c = LeadForm;
function FAQ() {
    _s1();
    /* 
    Desktop:
    → All FAQs always visible

    Mobile:
    → First 4 FAQs initially
    → Click button → All FAQs
    → Click again → First 4 FAQs
  */ const [showAllFaqs, setShowAllFaqs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleFaqs = showAllFaqs ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        "aria-labelledby": "faq-heading",
        className: "py-10 lg:py-14 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "font-body text-xs font-bold text-[#02A7BB] uppercase tracking-widest mb-3",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h2, {
                            id: "faq-heading",
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.06
                            },
                            className: "font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]",
                            children: "Your Questions, Answered Honestly"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FAQ.jsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.55,
                                        delay: 0.1
                                    },
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden lg:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionGroup"], {
                                                items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"],
                                                mode: "single"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/FAQ.jsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionGroup"], {
                                                    items: visibleFaqs,
                                                    mode: "single"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "flex justify-center mt-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowAllFaqs((prev)=>!prev),
                                                        className: "group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#0263CC]/20 bg-[#F8FBFF] text-[#0263CC] font-body font-semibold text-sm transition-all duration-300 hover:bg-[#0263CC] hover:text-white hover:border-[#0263CC] hover:shadow-lg hover:shadow-[#0263CC]/15 active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: showAllFaqs ? "Show Less FAQs" : `View All FAQs (${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].length})`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/FAQ.jsx",
                                                                lineNumber: 397,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                                                                size: 17,
                                                                className: `transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/FAQ.jsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/FAQ.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-heading text-lg text-[#0F172A] mb-1",
                                                    children: "Still have a question?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body font-light text-sm text-[#475569]",
                                                    children: "No question is off-limits in our free session."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 423,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/counselling",
                                            className: "shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-medium text-sm text-white transition-colors duration-200",
                                            style: {
                                                backgroundColor: "#0263CC"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = "#0251a8";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = "#0263CC";
                                            },
                                            children: "Book Free Counselling"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/FAQ.jsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-xs text-[#94A3B8] mt-5",
                                    children: [
                                        "Have a question about a specific country?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/countries",
                                            className: "text-[#0263CC] hover:underline",
                                            children: "Browse our country guides →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/FAQ.jsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/FAQ.jsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.aside, {
                                initial: {
                                    opacity: 0,
                                    x: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15
                                },
                                "aria-label": "Book a free counselling session",
                                className: "lg:sticky lg:top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-7 pt-7 pb-6",
                                                style: {
                                                    backgroundColor: "#0263CC"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "white",
                                                            strokeWidth: 2,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "lucide lucide-graduation-cap-icon lucide-graduation-cap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M22 10v6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/FAQ.jsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs font-semibold text-white/60 uppercase tracking-widest mb-2",
                                                        children: "Free · No Pressure · Honest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 497,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-heading text-2xl text-white leading-snug mb-1",
                                                        children: "Book Your Free Counselling Session"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body font-light text-white/75 text-sm leading-relaxed",
                                                        children: "Tell us your interest and we'll help you find the right course, country and licensing path."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mt-4",
                                                        children: TRUST_POINTS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body text-xs font-medium text-white",
                                                                style: {
                                                                    backgroundColor: "rgba(255,255,255,0.15)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckCircle2, {
                                                                        size: 11,
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    t
                                                                ]
                                                            }, t, true, {
                                                                fileName: "[project]/components/home/FAQ.jsx",
                                                                lineNumber: 513,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/FAQ.jsx",
                                                        lineNumber: 511,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/home/FAQ.jsx",
                                                lineNumber: 473,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-300 px-7 py-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadForm, {}, void 0, false, {
                                                    fileName: "[project]/components/home/FAQ.jsx",
                                                    lineNumber: 529,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/FAQ.jsx",
                                                lineNumber: 528,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/FAQ.jsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body text-xs text-[#94A3B8] text-center mt-4",
                                        children: [
                                            "Medico Yatra never guarantees admission, visa or job outcomes.",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#faq",
                                                className: "text-[#0263CC] hover:underline",
                                                children: "Learn more"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/FAQ.jsx",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/FAQ.jsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/FAQ.jsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/FAQ.jsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FAQ.jsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FAQ.jsx",
            lineNumber: 329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/FAQ.jsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
_s1(FAQ, "qF3IOeeh9W0nt432qGHnoT6dU8g=");
_c1 = FAQ;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeadForm");
__turbopack_context__.k.register(_c1, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/HomeJsonLd.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeJsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * HomeJsonLd — Server Component
 * Injects JSON-LD structured data for the home page.
 * Using JSON.stringify with < → \u003c sanitisation to prevent XSS.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/faqs.js [app-client] (ecmascript)");
;
;
function HomeJsonLd() {
    const baseUrl = "https://www.medicoyatra.com";
    // ── Organization ──────────────────────────────────────────────────────────
    const organization = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": `${baseUrl}/#organization`,
        name: "Medico Yatra",
        alternateName: "Future Yatra Private Limited",
        url: baseUrl,
        logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
            width: 200,
            height: 60
        },
        description: "Medico Yatra is a specialist healthcare-career guidance platform under Future Yatra Private Limited, helping students explore MBBS, Nursing, Dentistry, Pharmacy, Physiotherapy and allied health careers at NMC-recognised universities abroad.",
        sameAs: [
            "https://www.linkedin.com/company/medicoyatra",
            "https://www.facebook.com/medicoyatra",
            "https://www.instagram.com/medicoyatra"
        ],
        address: {
            "@type": "PostalAddress",
            addressCountry: "IN"
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: [
                "English",
                "Hindi"
            ]
        }
    };
    // ── WebSite + SearchAction ────────────────────────────────────────────────
    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Medico Yatra",
        publisher: {
            "@id": `${baseUrl}/#organization`
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${baseUrl}/countries?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
    // ── WebPage ───────────────────────────────────────────────────────────────
    const webpage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Study Healthcare Courses Abroad (MBBS, Nursing & more) | Medico Yatra",
        description: "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more. Find your country in 30 seconds, or book free counselling.",
        isPartOf: {
            "@id": `${baseUrl}/#website`
        },
        publisher: {
            "@id": `${baseUrl}/#organization`
        },
        inLanguage: "en-IN",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: baseUrl
                }
            ]
        }
    };
    // ── FAQPage ───────────────────────────────────────────────────────────────
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$faqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"].map((faq)=>({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
    };
    // Sanitise helper — replaces < with unicode escape to prevent XSS
    const safe = (obj)=>JSON.stringify(obj).replace(/</g, "\\u003c");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: safe(organization)
                }
            }, void 0, false, {
                fileName: "[project]/app/HomeJsonLd.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: safe(website)
                }
            }, void 0, false, {
                fileName: "[project]/app/HomeJsonLd.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: safe(webpage)
                }
            }, void 0, false, {
                fileName: "[project]/app/HomeJsonLd.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: safe(faqPage)
                }
            }, void 0, false, {
                fileName: "[project]/app/HomeJsonLd.js",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = HomeJsonLd;
var _c;
__turbopack_context__.k.register(_c, "HomeJsonLd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CourseMarquee.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/react-fontawesome'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
// =====================================================
// COURSES DATA
// =====================================================
const courses = [
    {
        name: "MBBS",
        icon: Stethoscope,
        type: "lucide",
        subtitle: "Bachelor of Medicine"
    },
    {
        name: "Dental",
        icon: faTooth,
        type: "fontawesome",
        subtitle: "Bachelor of Dental Surgery"
    },
    {
        name: "Physiotherapy",
        icon: HeartPulse,
        type: "lucide",
        subtitle: "Build Your Career in Physiotherapy"
    },
    {
        name: "Nursing",
        icon: Syringe,
        type: "lucide",
        subtitle: "Professional Nursing Programs"
    },
    {
        name: "Pharmacy",
        icon: Pill,
        type: "lucide",
        subtitle: "Bachelor of Pharmacy"
    },
    {
        name: "Medical Courses",
        icon: GraduationCap,
        type: "lucide",
        subtitle: "Explore More Medical Careers"
    }
];
// Duplicate courses for infinite marquee
const marqueeItems = [
    ...courses,
    ...courses
];
function CourseMarquee() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-12 lg:py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#0263CC]/5 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/components/home/CourseMarquee.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#0263CC]/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
                                    size: 17,
                                    strokeWidth: 2,
                                    className: "text-[#0263CC]"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/CourseMarquee.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/CourseMarquee.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold uppercase tracking-[0.18em] text-[#0263CC] sm:text-sm",
                                children: "Explore Medical Courses"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CourseMarquee.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold tracking-tight text-[#021E46] sm:text-3xl lg:text-4xl",
                        children: "Choose Your Medical Career Path"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base",
                        children: "Explore popular medical courses and find the right career path for your future."
                    }, void 0, false, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CourseMarquee.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-24 lg:w-40"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-24 lg:w-40"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        className: "flex w-max gap-4 sm:gap-5",
                        animate: {
                            x: [
                                "0%",
                                "-50%"
                            ]
                        },
                        transition: {
                            x: {
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        },
                        children: marqueeItems.map((course, index)=>{
                            const Icon = course.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                whileHover: {
                                    y: -6,
                                    scale: 1.02
                                },
                                transition: {
                                    duration: 0.25
                                },
                                className: "group flex w-[260px] shrink-0 cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-blue-400 p-4 shadow-sm transition-all duration-300 hover:border-[#4DA5EC]/50 hover:shadow-xl sm:w-[290px] sm:p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F1F7FC] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white sm:h-16 sm:w-16",
                                        children: course.type === "fontawesome" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                                            icon: Icon,
                                            className: "text-2xl transition-transform duration-300 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/CourseMarquee.jsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 28,
                                            strokeWidth: 1.8,
                                            className: "transition-transform duration-300 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/CourseMarquee.jsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CourseMarquee.jsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-[#fff] sm:text-lg",
                                                children: course.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CourseMarquee.jsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 line-clamp-2 text-xs leading-5 text-white sm:text-sm",
                                                children: course.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CourseMarquee.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/CourseMarquee.jsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F7FC] text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                            size: 15,
                                            className: "transition-transform duration-300 group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/CourseMarquee.jsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CourseMarquee.jsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${course.name}-${index}`, true, {
                                fileName: "[project]/components/home/CourseMarquee.jsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/home/CourseMarquee.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CourseMarquee.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mt-7 flex items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-2 w-2 animate-pulse rounded-full bg-[#02A7BB]"
                        }, void 0, false, {
                            fileName: "[project]/components/home/CourseMarquee.jsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-slate-500 sm:text-sm",
                            children: "Explore the right course for your medical career"
                        }, void 0, false, {
                            fileName: "[project]/components/home/CourseMarquee.jsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/CourseMarquee.jsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/CourseMarquee.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CourseMarquee.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c = CourseMarquee;
var _c;
__turbopack_context__.k.register(_c, "CourseMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CountriesSection/CountryCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/react-fontawesome'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
function CountryCard({ country, className = "", priority = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 60
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        whileHover: {
            y: -8
        },
        className: `group relative overflow-hidden rounded-[32px] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#0263CC]/30 via-transparent to-[#4DA8FF]/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: country.image,
                    alt: country.name,
                    fill: true,
                    priority: priority,
                    className: "object-cover transition duration-700 group-hover:scale-110"
                }, void 0, false, {
                    fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent transition duration-500 group-hover:from-black/95"
            }, void 0, false, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[32px] border border-white/15 group-hover:border-[#4DA8FF]/60 transition"
            }, void 0, false, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-full flex-col justify-between p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: country.flag,
                                    alt: country.name,
                                    fill: true,
                                    className: "object-center"
                                }, void 0, false, {
                                    fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            country.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full border hidden lg:block border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-xl",
                                children: "Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                                        icon: faStar,
                                        className: "text-yellow-400 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-white",
                                        children: country.stats.rating
                                    }, void 0, false, {
                                        fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-medium lg:text-4xl font-black text-white",
                                children: country.name
                            }, void 0, false, {
                                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm max-w-sm text-white/80",
                                children: country.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full"
            }, void 0, false, {
                fileName: "[project]/components/CountriesSection/CountryCard.jsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CountriesSection/CountryCard.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = CountryCard;
var _c;
__turbopack_context__.k.register(_c, "CountryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/countriesData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const countries = [
    {
        id: 1,
        name: "Russia",
        slug: "russia",
        image: "/images/countries/russia.jpg",
        flag: "/images/flags/Russia.png",
        subtitle: "Top Medical Universities",
        featured: false,
        stats: {
            universities: "45+",
            tuition: "₹18L",
            duration: "6 Years",
            rating: "4.9"
        },
        description: "Globally recognized universities with affordable tuition and excellent clinical exposure."
    },
    {
        id: 2,
        name: "Kazakhstan",
        slug: "kazakhstan",
        image: "/images/countries/Kazakhstan.png",
        flag: "/images/flags/kazakhstan.png",
        subtitle: "Most Preferred Destination",
        featured: true,
        stats: {
            universities: "30+",
            tuition: "₹20L",
            duration: "5 Years",
            rating: "4.9"
        },
        description: "One of the most popular destinations among Indian students."
    },
    {
        id: 3,
        name: "Georgia",
        slug: "georgia",
        image: "/images/countries/Georgia.png",
        flag: "/images/flags/georgia.png",
        subtitle: "European Education",
        featured: false,
        stats: {
            universities: "20+",
            tuition: "₹24L",
            duration: "6 Years",
            rating: "4.8"
        },
        description: "Modern infrastructure and internationally recognized medical degrees."
    },
    {
        id: 4,
        name: "Uzbekistan",
        slug: "uzbekistan",
        image: "/images/countries/Uzbekistan.png",
        flag: "/images/flags/uzbekistan.png",
        subtitle: "Affordable Medical Education",
        featured: false,
        stats: {
            universities: "18+",
            tuition: "₹16L",
            duration: "6 Years",
            rating: "4.8"
        },
        description: "Excellent education quality with low living expenses."
    },
    {
        id: 5,
        name: "Kyrgyzstan",
        slug: "kyrgyzstan",
        image: "/images/countries/Kyrgyzstan.png",
        flag: "/images/flags/kyrgyzstan.png",
        subtitle: "Budget Friendly MBBS",
        featured: false,
        stats: {
            universities: "15+",
            tuition: "₹15L",
            duration: "6 Years",
            rating: "4.7"
        },
        description: "Affordable tuition with English-medium medical programs."
    },
    {
        id: 6,
        name: "Philippines",
        slug: "philippines",
        image: "/images/countries/Philippines.png",
        flag: "/images/flags/philippines.png",
        subtitle: "US Based Curriculum",
        featured: false,
        stats: {
            universities: "12+",
            tuition: "₹22L",
            duration: "6 Years",
            rating: "4.8"
        },
        description: "Excellent English-speaking environment and strong clinical training."
    },
    {
        id: 7,
        name: "Ukraine",
        slug: "ukraine",
        image: "/images/countries/ukrain.png",
        flag: "/images/flags/ukraine.png",
        subtitle: "Budget Friendly MBBS",
        featured: false,
        stats: {
            universities: "15+",
            tuition: "₹15L",
            duration: "6 Years",
            rating: "4.7"
        },
        description: "Affordable tuition with English-medium medical programs."
    }
];
const __TURBOPACK__default__export__ = countries;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/CountriesSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@fortawesome/react-fontawesome'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@fortawesome/free-solid-svg-icons'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CountriesSection/CountryCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/countriesData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
};
function CountriesSection() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountriesSection.useEffect": ()=>{
            const move = {
                "CountriesSection.useEffect.move": (e)=>{
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["CountriesSection.useEffect.move"];
            window.addEventListener("mousemove", move);
            return ({
                "CountriesSection.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                }
            })["CountriesSection.useEffect"];
        }
    }["CountriesSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.section, {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.8
        },
        className: "relative overflow-hidden bg-[#E6F2FF] py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed z-0 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px] transition-all duration-300",
                style: {
                    left: mousePosition.x - 210,
                    top: mousePosition.y - 210,
                    background: "radial-gradient(circle, #4DA8FF55 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[-200px] top-0 h-[520px] w-[520px] rounded-full bg-[#4DA8FF]/20 blur-[140px]"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[-150px] bottom-0 h-[420px] w-[420px] rounded-full bg-[#0263CC]/20 blur-[130px]"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-20 top-32 h-5 w-5 rounded-full bg-[#4DA8FF]/40 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-32 top-56 h-7 w-7 rounded-full bg-[#0263CC]/20 animate-pulse delay-300"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-32 left-1/3 h-10 w-10 rounded-full border border-[#0263CC]/10 bg-white/40 backdrop-blur-xl"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 right-20 h-16 w-16 rounded-full border border-white/40 bg-white/30 backdrop-blur-2xl"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0263CC]/10 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: fadeUp,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true
                        },
                        className: "mx-auto mb-10 max-w-3xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-5 py-2 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                                        icon: faGlobe,
                                        className: "text-[#0263CC]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-[#0263CC]",
                                        children: "Explore Destinations"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-2 text-3xl font-black leading-tight text-gray-900 md:text-5xl",
                                children: [
                                    "Choose Your",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block bg-gradient-to-r from-[#0263CC] to-[#4DA8FF] bg-clip-text text-transparent",
                                        children: "MBBS Destination"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-2 max-w-2xl text-lg leading-8 text-gray-600",
                                children: "Explore globally recognized countries offering affordable medical education, NMC-approved universities and world-class clinical exposure."
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CountriesSection.jsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto my-7 h-px w-52 bg-gradient-to-r from-transparent via-[#0263CC]/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/home/CountriesSection.jsx",
                        lineNumber: 140,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: container,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true
                        },
                        className: "grid auto-rows-[250px] grid-cols-2 gap-7 md:grid-cols-2 lg:gap-8 xl:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0],
                                className: "md:row-span-2",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][1],
                                className: "md:col-span-1 xl:col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][2],
                                className: "md:row-span-2"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][4]
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][6]
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][3],
                                className: "xl:col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 176,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CountriesSection$2f$CountryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][5],
                                className: "xl:col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CountriesSection.jsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: fadeUp,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: true
                        },
                        className: "mt-10 flex flex-col items-center justify-center",
                        children: [
                            [
                                ...Array(10)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    animate: {
                                        y: [
                                            0,
                                            -25,
                                            0
                                        ],
                                        opacity: [
                                            0.2,
                                            0.8,
                                            0.2
                                        ]
                                    },
                                    transition: {
                                        repeat: Infinity,
                                        duration: 4 + i,
                                        delay: i * 0.5
                                    },
                                    className: "absolute rounded-full bg-[#0263CC]/20",
                                    style: {
                                        width: 6 + i * 2,
                                        height: 6 + i * 2,
                                        left: `${8 + i * 9}%`,
                                        top: `${15 + i % 5 * 18}%`
                                    }
                                }, i, false, {
                                    fileName: "[project]/components/home/CountriesSection.jsx",
                                    lineNumber: 197,
                                    columnNumber: 3
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-[36px] border border-[#0263CC]/10 bg-white px-4 md:px-12 py-7 shadow-[0_30px_80px_rgba(2,99,204,.12)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-[#4DA8FF]/20 blur-[90px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        animate: {
                                            y: [
                                                -40,
                                                40,
                                                -40
                                            ],
                                            x: [
                                                -20,
                                                20,
                                                -20
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 18,
                                            ease: "easeInOut"
                                        },
                                        className: "absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4DA8FF]/10 blur-[180px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-3xl font-black",
                                        children: "Not Sure Which Country Fits You?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 232,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 max-w-2xl text-sm md:text-lg text-gray-600",
                                        children: "Compare tuition fees, university rankings, living expenses and admission requirements to choose the best destination."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 236,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/compare-countries",
                                        className: "group mt-5 text-sm md:text-lg inline-flex items-center rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA8FF] px-4 py-2 md:px-8 md:py-4 font-semibold text-white",
                                        children: [
                                            "Compare Countries",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FontAwesomeIcon, {
                                                icon: faArrowRight,
                                                className: "ml-3 transition group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/CountriesSection.jsx",
                                                lineNumber: 248,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/CountriesSection.jsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/CountriesSection.jsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/CountriesSection.jsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/CountriesSection.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CountriesSection.jsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
_s(CountriesSection, "ENOPmyvAFg+QCJTu85ksAf3zthg=");
_c = CountriesSection;
var _c;
__turbopack_context__.k.register(_c, "CountriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Medico Yatra — Home Page
 *
 * This is a Client Component because:
 * 1. The Country Finder must lift the selected career up to state so the
 *    Salary Comparison table can highlight the relevant profession column.
 * 2. The Hero scroll-to-finder callback requires a ref.
 *
 * SEO metadata is exported from app/layout.js (Server Component) and
 * JSON-LD structured data is injected via a separate Server Component
 * rendered at the top of this page.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CountryFinder$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CountryFinder.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TrustBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/TrustBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CareersSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CareersSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SalaryComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SalaryComparison.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$AgentComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/AgentComparison.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$HonestyCheck$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/HonestyCheck.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CTABand$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CTABand.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Testimonials.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FAQ$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FAQ.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$HomeJsonLd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/HomeJsonLd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CourseMarquee$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CourseMarquee.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CountriesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CountriesSection.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const finderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Career selected in Country Finder → passed down to SalaryComparison
    const [selectedCareer, setSelectedCareer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleScrollToFinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleScrollToFinder]": ()=>{
            finderRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }["HomePage.useCallback[handleScrollToFinder]"], []);
    const handleCareerSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[handleCareerSelect]": (careerId)=>{
            setSelectedCareer(careerId);
        }
    }["HomePage.useCallback[handleCareerSelect]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$HomeJsonLd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main-content",
                className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-999 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-body focus:font-medium focus:text-sm",
                children: "Skip to main content"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onScrollToFinder: handleScrollToFinder
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CourseMarquee$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 64,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TrustBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CareersSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SalaryComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                highlightCareer: selectedCareer
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$AgentComparison$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CountriesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CTABand$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Testimonials$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FAQ$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "SzW8qFG9RunbtTO6dpcqYt0vRvM=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D__0n_4fxf._.js.map