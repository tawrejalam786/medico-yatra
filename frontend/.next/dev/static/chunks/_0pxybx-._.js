(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/Button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Button — reusable premium CTA button
 * Variants: primary | secondary | outline | ghost | white
 * Sizes: sm | md | lg
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const BASE = "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0263CC] disabled:opacity-50 disabled:pointer-events-none";
const VARIANTS = {
    primary: "bg-[#0263CC] text-white hover:bg-[#0251a8] active:bg-[#0251a8] shadow-sm hover:shadow-md focus-visible:outline-[#0263CC]",
    secondary: "bg-[#4DA5EC] text-white hover:bg-[#3a8fd4] active:bg-[#3a8fd4] shadow-sm hover:shadow-md",
    teal: "bg-[#02A7BB] text-white hover:bg-[#0295a7] active:bg-[#0295a7] shadow-sm hover:shadow-md",
    outline: "border-2 border-[#0263CC] text-[#0263CC] bg-transparent hover:bg-[#d6e8fb] active:bg-[#d6e8fb]",
    "outline-white": "border-2 border-white text-white bg-transparent hover:bg-white/10 active:bg-white/20",
    ghost: "text-[#0263CC] bg-transparent hover:bg-[#d6e8fb] active:bg-[#d6e8fb]",
    white: "bg-white text-[#0263CC] hover:bg-[#F1F7FC] active:bg-[#F1F7FC] shadow-sm hover:shadow-md font-semibold"
};
const SIZES = {
    sm: "text-sm px-4 py-2 h-9",
    md: "text-sm px-6 py-2.5 h-11",
    lg: "text-base px-8 py-3.5 h-13",
    xl: "text-base px-10 py-4 h-14"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Button({ children, variant = "primary", size = "md", className = "", href, external, type = "button", onClick, disabled, "aria-label": ariaLabel, ...props }, ref) {
    const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            href: href,
            className: classes,
            target: external ? "_blank" : undefined,
            rel: external ? "noopener noreferrer" : undefined,
            "aria-label": ariaLabel,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: type,
        className: classes,
        onClick: onClick,
        disabled: disabled,
        "aria-label": ariaLabel,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
});
_c1 = Button;
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/CoursesMegaMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesMegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/accessibility.mjs [app-client] (ecmascript) <export default as Accessibility>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ambulance.mjs [app-client] (ecmascript) <export default as Ambulance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/apple.mjs [app-client] (ecmascript) <export default as Apple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.mjs [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CircleCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.mjs [app-client] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.mjs [app-client] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.mjs [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
/* =========================================================
   ALL COURSES
========================================================= */ const COURSES = [
    {
        name: "MBBS Abroad",
        slug: "mbbs-abroad",
        description: "Study medicine at globally recognised universities.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        popular: true,
        iconStyle: "bg-[#EAF3FF] text-[#0263CC] group-hover:bg-[#0263CC] group-hover:text-white"
    },
    {
        name: "Nursing",
        slug: "nursing",
        description: "Build a professional career in global nursing.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
        iconStyle: "bg-[#E8FBF9] text-[#009E9A] group-hover:bg-[#009E9A] group-hover:text-white"
    },
    {
        name: "Pharmacy",
        slug: "pharmacy",
        description: "Explore pharmaceutical science and clinical practice.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"],
        iconStyle: "bg-[#F1ECFF] text-[#7656C9] group-hover:bg-[#7656C9] group-hover:text-white"
    },
    {
        name: "Physiotherapy",
        slug: "physiotherapy",
        description: "Learn movement, rehabilitation and physical therapy.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        iconStyle: "bg-[#FFF0E5] text-[#E77928] group-hover:bg-[#E77928] group-hover:text-white"
    },
    {
        name: "Dentistry",
        slug: "dentistry",
        description: "Begin your career in professional dental healthcare.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
        iconStyle: "bg-[#E8F8EF] text-[#14885F] group-hover:bg-[#14885F] group-hover:text-white"
    },
    {
        name: "Veterinary Medicine",
        slug: "veterinary",
        description: "Study animal healthcare, medicine and surgery.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"],
        iconStyle: "bg-[#FFE8F0] text-[#D84C7E] group-hover:bg-[#D84C7E] group-hover:text-white"
    },
    {
        name: "Clinical Psychology",
        slug: "clinical-psychology",
        description: "Understand mental health and clinical behaviour.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        iconStyle: "bg-[#FFF4D8] text-[#B67B10] group-hover:bg-[#B67B10] group-hover:text-white"
    },
    {
        name: "Nutrition & Dietetics",
        slug: "nutrition-dietetics",
        description: "Build expertise in nutrition and healthy living.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__["Apple"],
        iconStyle: "bg-[#E7F7FF] text-[#178BE5] group-hover:bg-[#178BE5] group-hover:text-white"
    },
    {
        name: "Public Healthcare Management",
        slug: "public-healthcare-management",
        description: "Manage healthcare services and public health systems.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
        iconStyle: "bg-[#F0F2FF] text-[#555FD2] group-hover:bg-[#555FD2] group-hover:text-white"
    },
    {
        name: "EMT Paramedic",
        slug: "emt-paramedic",
        description: "Train for emergency and pre-hospital medical care.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__["Ambulance"],
        iconStyle: "bg-[#FFF0F0] text-[#DC4C4C] group-hover:bg-[#DC4C4C] group-hover:text-white"
    },
    {
        name: "Physician Assistant",
        slug: "physician-assistant",
        description: "Support physicians in modern clinical environments.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"],
        iconStyle: "bg-[#EAF8FA] text-[#02A7BB] group-hover:bg-[#02A7BB] group-hover:text-white"
    },
    {
        name: "Prosthetics & Orthotics",
        slug: "prosthetics-orthotics",
        description: "Design assistive devices that improve mobility.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$accessibility$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accessibility$3e$__["Accessibility"],
        iconStyle: "bg-[#F4EEFF] text-[#8B5BC6] group-hover:bg-[#8B5BC6] group-hover:text-white"
    }
];
/* =========================================================
   COURSE CARD
========================================================= */ function CourseCard({ course, onClose, mobile = false }) {
    const Icon = course.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/courses/${course.slug}`,
        onClick: onClose,
        className: `group relative overflow-hidden border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC]/20 hover:shadow-[0_14px_35px_rgba(15,50,100,0.10)] ${mobile ? "flex min-h-[118px] flex-col rounded-2xl p-3" : "flex min-h-[94px] items-center gap-3.5 rounded-[20px] p-3.5"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#0263CC]/[0.035] blur-xl transition-all duration-300 group-hover:scale-150"
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${mobile ? "h-9 w-9" : "h-11 w-11"} ${course.iconStyle}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: mobile ? "h-4 w-4" : "h-5 w-5",
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative min-w-0 flex-1 ${mobile ? "mt-3" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: `font-extrabold leading-snug text-[#0A1B44] transition-colors group-hover:text-[#0263CC] ${mobile ? "text-[11px]" : "text-[12px]"}`,
                                children: course.name
                            }, void 0, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            course.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 rounded-full bg-[#FFF2DD] px-1.5 py-0.5 text-[7px] font-extrabold uppercase tracking-wide text-[#D97706]",
                                children: "Popular"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-1 text-slate-500 ${mobile ? "line-clamp-2 text-[8px] leading-[13px]" : "line-clamp-2 text-[9px] leading-[14px]"}`,
                        children: course.description
                    }, void 0, false, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: `relative shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0263CC] ${mobile ? "absolute right-3 top-4 h-3.5 w-3.5" : "h-4 w-4"}`
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c = CourseCard;
/* =========================================================
   DESKTOP MEGA MENU
========================================================= */ function DesktopMegaMenu({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12,
            scale: 0.98
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: 8,
            scale: 0.98
        },
        transition: {
            duration: 0.22,
            ease: "easeOut"
        },
        className: "absolute left-6/2 top-[calc(100%+12px)] z-[100] w-[min(1060px,calc(100vw-32px))] -translate-x-1/2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,50,100,0.18)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0263CC]/[0.07] blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#02A7BB]/[0.07] blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-between border-b border-slate-100 px-6 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC] text-white shadow-[0_8px_22px_rgba(2,99,204,0.22)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-extrabold text-[#0A1B44]",
                                                    children: "Explore All Courses"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-[#EEF5FF] px-2.5 py-1 text-[8px] font-extrabold text-[#0263CC]",
                                                    children: [
                                                        COURSES.length,
                                                        " COURSES"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[10px] text-slate-500",
                                            children: "Choose the right healthcare career path for your future"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden items-center gap-1.5 rounded-full bg-[#EAF8FA] px-3 py-1.5 text-[9px] font-bold text-[#008C99] lg:flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheck$3e$__["CircleCheck"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        "Globally focused programmes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close courses menu",
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        variants: {
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.025
                                }
                            }
                        },
                        className: "grid grid-cols-3 gap-2.5",
                        children: COURSES.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0
                                    }
                                },
                                transition: {
                                    duration: 0.18
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                                    course: course,
                                    onClose: onClose
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 286,
                                    columnNumber: 17
                                }, this)
                            }, course.slug, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-between gap-4 border-t border-slate-100 bg-[#FAFCFF] px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FA] text-[#02A7BB]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-extrabold text-[#0A1B44]",
                                            children: "Not sure which course is right for you?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[9px] text-slate-500",
                                            children: "Get personalised guidance from our expert counsellors."
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/courses",
                                    onClick: onClose,
                                    className: "flex items-center gap-1.5 rounded-xl border border-[#DCE9F8] bg-white px-3.5 py-2.5 text-[9px] font-bold text-[#0263CC] transition hover:bg-[#F3F8FF]",
                                    children: [
                                        "View All Courses",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/counselling",
                                    onClick: onClose,
                                    className: "group flex items-center gap-2 rounded-xl bg-[#0263CC] px-4 py-2.5 text-[9px] font-bold text-white shadow-[0_7px_20px_rgba(2,99,204,0.20)] transition-all hover:-translate-y-0.5 hover:bg-[#0759B8]",
                                    children: [
                                        "Talk to an Expert",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
            lineNumber: 213,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_c1 = DesktopMegaMenu;
/* =========================================================
   MOBILE COURSES MENU
========================================================= */ function MobileCoursesMenu({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -5
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -5
        },
        transition: {
            duration: 0.2
        },
        className: "mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,50,100,0.10)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-100 bg-gradient-to-br from-[#F1F7FF] via-white to-[#EEFCFC] px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#0263CC] text-white shadow-[0_7px_18px_rgba(2,99,204,0.20)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-extrabold text-[#0A1B44]",
                                            children: "All Courses"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white px-2 py-0.5 text-[7px] font-extrabold text-[#0263CC] shadow-sm",
                                            children: COURSES.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-[9px] text-slate-500",
                                    children: "Explore every healthcare career path"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 bg-[#FAFCFF] p-3",
                children: COURSES.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.18,
                            delay: index * 0.015
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CourseCard, {
                            course: course,
                            onClose: onClose,
                            mobile: true
                        }, void 0, false, {
                            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this)
                    }, course.slug, false, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-100 bg-white p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/courses",
                        onClick: onClose,
                        className: "flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0263CC] text-xs font-bold text-white shadow-[0_8px_20px_rgba(2,99,204,0.18)]",
                        children: [
                            "View All Courses",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/counselling",
                        onClick: onClose,
                        className: "mt-2 flex min-h-10 items-center justify-center gap-1.5 text-[10px] font-bold text-[#0263CC]",
                        children: [
                            "Need Help? Talk to a Counsellor",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_c2 = MobileCoursesMenu;
function CoursesMegaMenu({ isOpen, onClose, mobile = false }) {
    if (mobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileCoursesMenu, {
                onClose: onClose
            }, void 0, false, {
                fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
                lineNumber: 430,
                columnNumber: 20
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
            lineNumber: 429,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopMegaMenu, {
            onClose: onClose
        }, void 0, false, {
            fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
            lineNumber: 437,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/CoursesMegaMenu.jsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
_c3 = CoursesMegaMenu;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CourseCard");
__turbopack_context__.k.register(_c1, "DesktopMegaMenu");
__turbopack_context__.k.register(_c2, "MobileCoursesMenu");
__turbopack_context__.k.register(_c3, "CoursesMegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.mjs [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CoursesMegaMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/CoursesMegaMenu.jsx [app-client] (ecmascript)");
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
const NAV_LINKS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Courses",
        href: "/courses"
    },
    {
        label: "Countries",
        href: "/countries"
    },
    {
        label: "FMGE / NExT",
        href: "/courses/fmge-next"
    },
    {
        label: "USMLE",
        href: "/courses/usmle"
    },
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Resources",
        href: "/free-resources"
    }
];
/*
  Apne actual country-page routes ke according
  href values change kar sakte ho.
*/ const COUNTRIES = [
    {
        name: "Russia",
        flag: "🇷🇺",
        href: "/countries/russia",
        note: "Popular choice"
    },
    {
        name: "Georgia",
        flag: "🇬🇪",
        href: "/countries/georgia",
        note: "European exposure"
    },
    {
        name: "Kazakhstan",
        flag: "🇰🇿",
        href: "/countries/kazakhstan",
        note: "Affordable MBBS"
    },
    {
        name: "Kyrgyzstan",
        flag: "🇰🇬",
        href: "/countries/kyrgyzstan",
        note: "Student friendly"
    },
    {
        name: "Uzbekistan",
        flag: "🇺🇿",
        href: "/countries/uzbekistan",
        note: "Modern universities"
    },
    {
        name: "Bangladesh",
        flag: "🇧🇩",
        href: "/countries/bangladesh",
        note: "Familiar curriculum"
    },
    {
        name: "Nepal",
        flag: "🇳🇵",
        href: "/countries/nepal",
        note: "Close to home"
    },
    {
        name: "Philippines",
        flag: "🇵🇭",
        href: "/countries/philippines",
        note: "English medium"
    }
];
function WhatsAppIcon({ size = 18 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.jsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Header.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function Logo({ scrolled }) {
    const logoSrc = scrolled ? "/logo/medico-yatra-blue.png" : "/logo/medico-yatra-white.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        "aria-label": "Medico Yatra — Home",
        className: "flex shrink-0 items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[40px] w-[112px] lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: logoSrc,
                    alt: "Medico Yatra Logo",
                    fill: true,
                    priority: true,
                    sizes: "112px",
                    className: "object-cover object-left"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden h-[60px] w-[147px] lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: logoSrc,
                    alt: "Medico Yatra Logo",
                    fill: true,
                    priority: true,
                    sizes: "160px",
                    className: "object-fill object-left"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = Logo;
function CountriesMenu({ mobile = false, isOpen, onClose }) {
    if (mobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                className: "overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-2 mb-2 mt-1 grid grid-cols-2 gap-2 rounded-2xl bg-[#F5FAFF] p-2",
                    children: [
                        COUNTRIES.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: country.href,
                                onClick: onClose,
                                className: " flex min-w-0 items-center gap-2 rounded-xl border border-[#E2EDF8] bg-white px-2.5 py-2.5 text-sm font-medium text-[#1E293B] shadow-[0_3px_12px_rgba(2,99,204,0.04)] transition active:scale-[0.98] ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: " flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1F7FC] text-xl shadow-sm ",
                                        children: country.flag
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: country.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, country.name, true, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 153,
                                columnNumber: 17
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/countries",
                            onClick: onClose,
                            className: " col-span-2 flex items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#075BB7] ",
                            children: [
                                "Explore all countries",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 141,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.jsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10,
                scale: 0.98
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 8,
                scale: 0.98
            },
            transition: {
                duration: 0.18,
                ease: "easeOut"
            },
            className: " absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-4 ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " overflow-hidden rounded-3xl border border-[#DDEAF6] bg-white p-3 shadow-[0_22px_65px_rgba(15,49,84,0.18)] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-[1fr_205px] gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: " text-[11px] font-bold uppercase tracking-[0.18em] text-[#02A7BB] ",
                                                    children: "Study destinations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-1 text-lg font-semibold text-[#0F2742]",
                                                    children: "Choose your country"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: " flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5FF] text-[#0263CC] ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: COUNTRIES.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: country.href,
                                            onClick: onClose,
                                            className: " group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-[#CFE3F5] hover:bg-[#F4F9FE] ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: " flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5EEF7] bg-white text-2xl shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 ",
                                                    children: country.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 331,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: " block text-sm font-semibold text-[#17324D] transition-colors group-hover:text-[#0263CC] ",
                                                            children: country.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.jsx",
                                                            lineNumber: 354,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: " block truncate text-[11px] text-[#7A8CA0] ",
                                                            children: country.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.jsx",
                                                            lineNumber: 367,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, country.name, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 311,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 273,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0263CC] via-[#087CD6] to-[#02A7BB] p-5 text-white ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " absolute -right-10 -top-10 h-28 w-28 rounded-full border-[18px] border-white/10 "
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 397,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-white/10 blur-xl "
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 410,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex h-full flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: " flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                size: 23
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 436,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 424,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: " text-xs font-semibold uppercase tracking-[0.14em] text-white/70 ",
                                                    children: "Not sure yet?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 440,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-2 text-xl font-semibold leading-snug",
                                                    children: "Find your best-fit country"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-xs leading-relaxed text-white/75",
                                                    children: "Compare fees, eligibility and career pathways with an expert."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 456,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/countries",
                                                    onClick: onClose,
                                                    className: " mt-5 flex items-center justify-between rounded-xl bg-white px-3.5 py-3 text-sm font-semibold text-[#0263CC] transition hover:bg-[#F0FAFF] ",
                                                    children: [
                                                        "View all countries",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.jsx",
                                                            lineNumber: 481,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 439,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 423,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 384,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 271,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 260,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/Header.jsx",
            lineNumber: 230,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Header.jsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c2 = CountriesMenu;
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coursesOpen, setCoursesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countriesOpen, setCountriesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === "/";
    /*
    Header scroll state
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 40);
                }
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    /*
    Close mobile menu when pathname changes
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMobileOpen(false);
            setCoursesOpen(false);
            setCountriesOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    /*
    Outside click for mobile drawer
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!mobileOpen) return;
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setMobileOpen(false);
                        setCoursesOpen(false);
                        setCountriesOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    /*
    Lock body scroll while mobile drawer is open
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.body.style.overflow = mobileOpen ? "hidden" : "";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileOpen
    ]);
    const closeMobileMenu = ()=>{
        setMobileOpen(false);
        setCoursesOpen(false);
        setCountriesOpen(false);
    };
    const toggleCourses = ()=>{
        setCoursesOpen((previous)=>!previous);
        setCountriesOpen(false);
    };
    const toggleCountries = ()=>{
        setCountriesOpen((previous)=>!previous);
        setCoursesOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                role: "banner",
                className: `
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-none
          lg:transition-all
          lg:duration-300

          ${scrolled ? `
                border-b
                border-[#E2E8F0]
                bg-white
                shadow-sm
                lg:bg-white/95
                lg:backdrop-blur-md
              ` : isHomePage ? `
                  border-b
                  border-transparent
                  bg-transparent
                ` : `
                  border-b
                  border-transparent
                  bg-[#0263CC]
                `}
        `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 items-center justify-between lg:h-18",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                                scrolled: scrolled
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 627,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Primary navigation",
                                className: "hidden items-center gap-1 lg:flex",
                                children: NAV_LINKS.map((link)=>{
                                    /*
                  Courses dropdown
                */ if (link.label === "Courses") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            onMouseEnter: ()=>{
                                                setCoursesOpen(true);
                                                setCountriesOpen(false);
                                            },
                                            onMouseLeave: ()=>{
                                                setCoursesOpen(false);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: toggleCourses,
                                                    "aria-expanded": coursesOpen,
                                                    "aria-haspopup": "true",
                                                    className: `
                          flex
                          items-center
                          gap-1.5
                          rounded-lg
                          px-3
                          py-2
                          font-body
                          text-sm
                          font-medium
                          transition-all
                          duration-200

                          ${scrolled ? `
                                text-[#334155]
                                hover:bg-[#F1F7FC]
                                hover:text-[#0263CC]
                              ` : `
                                text-white/90
                                hover:bg-white/10
                                hover:text-white
                              `}

                          ${coursesOpen ? scrolled ? "bg-[#F1F7FC] text-[#0263CC]" : "bg-white/10 text-white" : ""}
                        `,
                                                    children: [
                                                        "Courses",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 14,
                                                            className: `
                            transition-transform
                            duration-200
                            ${coursesOpen ? "rotate-180" : ""}
                          `
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.jsx",
                                                            lineNumber: 694,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 651,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CoursesMegaMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    isOpen: coursesOpen,
                                                    onClose: ()=>setCoursesOpen(false)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 704,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 640,
                                            columnNumber: 21
                                        }, this);
                                    }
                                    /*
                  Countries dropdown
                */ if (link.label === "Countries") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            onMouseEnter: ()=>{
                                                setCountriesOpen(true);
                                                setCoursesOpen(false);
                                            },
                                            onMouseLeave: ()=>{
                                                setCountriesOpen(false);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: toggleCountries,
                                                    "aria-expanded": countriesOpen,
                                                    "aria-haspopup": "true",
                                                    className: `
                          flex
                          items-center
                          gap-1.5
                          rounded-lg
                          px-3
                          py-2
                          font-body
                          text-sm
                          font-medium
                          transition-all
                          duration-200

                          ${scrolled ? `
                                text-[#334155]
                                hover:bg-[#F1F7FC]
                                hover:text-[#0263CC]
                              ` : `
                                text-white/90
                                hover:bg-white/10
                                hover:text-white
                              `}

                          ${countriesOpen ? scrolled ? "bg-[#F1F7FC] text-[#0263CC]" : "bg-white/10 text-white" : ""}
                        `,
                                                    children: [
                                                        "Countries",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 14,
                                                            className: `
                            transition-transform
                            duration-200
                            ${countriesOpen ? "rotate-180" : ""}
                          `
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.jsx",
                                                            lineNumber: 771,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 728,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountriesMenu, {
                                                    isOpen: countriesOpen,
                                                    onClose: ()=>setCountriesOpen(false)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 781,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, link.href, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 717,
                                            columnNumber: 21
                                        }, this);
                                    }
                                    /*
                  Normal navigation links
                */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `
                      rounded-lg
                      px-3
                      py-2
                      font-body
                      text-sm
                      font-medium
                      transition-colors
                      duration-200

                      ${scrolled ? `
                            text-[#334155]
                            hover:bg-[#F1F7FC]
                            hover:text-[#0263CC]
                          ` : `
                            text-white/90
                            hover:bg-white/10
                            hover:text-white
                          `}
                    `,
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 793,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 630,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-3 lg:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/910000000000",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "WhatsApp Us",
                                        className: `
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2
                  font-body
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${scrolled ? `
                        border-[#02A7BB]/30
                        text-[#02A7BB]
                        hover:bg-[#D6F4F7]
                      ` : `
                        border-white/20
                        text-white/90
                        hover:bg-white/10
                        hover:text-white
                      `}
                `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 864,
                                                columnNumber: 17
                                            }, this),
                                            "WhatsApp Us"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 829,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/counselling",
                                        variant: scrolled ? "primary" : "white",
                                        size: "md",
                                        className: "whitespace-nowrap",
                                        children: "Book Free Counselling"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.jsx",
                                        lineNumber: 868,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 828,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                                "aria-expanded": mobileOpen,
                                "aria-controls": "mobile-menu",
                                onClick: ()=>{
                                    setMobileOpen((previous)=>!previous);
                                    setCoursesOpen(false);
                                    setCountriesOpen(false);
                                },
                                className: `
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                transition-colors
                duration-150
                lg:hidden

                ${scrolled ? `
                      text-[#0F172A]
                      hover:bg-[#F1F7FC]
                    ` : `
                      text-white
                      hover:bg-white/10
                    `}
              `,
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 914,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 914,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.jsx",
                                lineNumber: 879,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.jsx",
                        lineNumber: 626,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.jsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: " fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden ",
                            "aria-hidden": "true",
                            onClick: closeMobileMenu
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 925,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            id: "mobile-menu",
                            ref: menuRef,
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": "Navigation menu",
                            initial: {
                                x: "100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "100%"
                            },
                            transition: {
                                type: "spring",
                                damping: 28,
                                stiffness: 280
                            },
                            className: " fixed bottom-0 right-0 top-0 z-50 flex w-80 max-w-[90vw] flex-col bg-white shadow-2xl lg:hidden ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[40px] w-[140px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logo/medico-yatra-blue.png",
                                                alt: "Medico Yatra Logo",
                                                fill: true,
                                                sizes: "140px",
                                                className: "object-contain object-left"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 985,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 984,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: closeMobileMenu,
                                            "aria-label": "Close menu",
                                            className: " flex h-9 w-9 items-center justify-center rounded-lg text-[#475569] transition-colors hover:bg-[#F1F7FC] ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 1010,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 994,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 973,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Mobile navigation",
                                    className: "flex-1 overflow-y-auto px-3 py-4",
                                    children: NAV_LINKS.map((link, index)=>{
                                        /*
                    Mobile Courses accordion
                  */ if (link.label === "Courses") {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: index * 0.04,
                                                    duration: 0.25
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: toggleCourses,
                                                        "aria-expanded": coursesOpen,
                                                        className: `
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            font-body
                            text-base
                            font-medium
                            transition-colors
                            duration-200

                            ${coursesOpen ? `
                                  bg-[#F1F7FC]
                                  text-[#0263CC]
                                ` : `
                                  text-[#0F172A]
                                  hover:bg-[#F1F7FC]
                                  hover:text-[#0263CC]
                                `}
                          `,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Courses"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.jsx",
                                                                lineNumber: 1073,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 18,
                                                                className: `
                              transition-transform
                              duration-200
                              ${coursesOpen ? "rotate-180" : ""}
                            `
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.jsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Header.jsx",
                                                        lineNumber: 1040,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$CoursesMegaMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        mobile: true,
                                                        isOpen: coursesOpen,
                                                        onClose: ()=>{
                                                            setCoursesOpen(false);
                                                            setMobileOpen(false);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Header.jsx",
                                                        lineNumber: 1085,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, link.href, true, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 1025,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        /*
                    Mobile Countries accordion
                  */ if (link.label === "Countries") {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: index * 0.04,
                                                    duration: 0.25
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: toggleCountries,
                                                        "aria-expanded": countriesOpen,
                                                        className: `
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            font-body
                            text-base
                            font-medium
                            transition-colors
                            duration-200

                            ${countriesOpen ? `
                                  bg-[#F1F7FC]
                                  text-[#0263CC]
                                ` : `
                                  text-[#0F172A]
                                  hover:bg-[#F1F7FC]
                                  hover:text-[#0263CC]
                                `}
                          `,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Countries"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.jsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                size: 18,
                                                                className: `
                              transition-transform
                              duration-200
                              ${countriesOpen ? "rotate-180" : ""}
                            `
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Header.jsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Header.jsx",
                                                        lineNumber: 1117,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountriesMenu, {
                                                        mobile: true,
                                                        isOpen: countriesOpen,
                                                        onClose: ()=>{
                                                            setCountriesOpen(false);
                                                            setMobileOpen(false);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Header.jsx",
                                                        lineNumber: 1162,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, link.href, true, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 1102,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        /*
                    Mobile normal links
                  */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: index * 0.04,
                                                duration: 0.25
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                onClick: closeMobileMenu,
                                                className: " flex items-center gap-3 rounded-xl px-4 py-3 font-body text-base font-medium text-[#0F172A] transition-colors duration-200 hover:bg-[#F1F7FC] hover:text-[#0263CC] ",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.jsx",
                                                lineNumber: 1193,
                                                columnNumber: 23
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 1178,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 1015,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex flex-col gap-3 border-t border-[#E2E8F0] px-4 py-5 ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/counselling",
                                            variant: "primary",
                                            size: "lg",
                                            className: "w-full justify-center",
                                            onClick: closeMobileMenu,
                                            children: "Book Free Counselling"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 1232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/910000000000",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            onClick: closeMobileMenu,
                                            className: " flex items-center justify-center gap-2 rounded-full border-2 border-[#02A7BB] px-4 py-3 font-body text-sm font-medium text-[#02A7BB] transition-colors duration-200 hover:bg-[#D6F4F7] ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Header.jsx",
                                                    lineNumber: 1266,
                                                    columnNumber: 19
                                                }, this),
                                                "WhatsApp Us"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 1242,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: " mt-1 text-center font-body text-xs text-[#94A3B8] ",
                                            children: "A Future Yatra Private Limited brand"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.jsx",
                                            lineNumber: 1270,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.jsx",
                                    lineNumber: 1221,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.jsx",
                            lineNumber: 943,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.jsx",
                lineNumber: 921,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "UFwjlZUh9eyFo44n9/ojWeiVt5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c3 = Header;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "Logo");
__turbopack_context__.k.register(_c2, "CountriesMenu");
__turbopack_context__.k.register(_c3, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/countries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Medico Yatra — Country Data
 *
 * IMPORTANT: Cost ranges are illustrative and approximate.
 * Verify all figures with official sources before publishing.
 * University recognition and regulations can change — always verify
 * the current NMC-approved list before enrolling.
 */ __turbopack_context__.s([
    "COUNTRIES",
    ()=>COUNTRIES,
    "COUNTRY_SLUGS",
    ()=>COUNTRY_SLUGS
]);
const COUNTRIES = [
    {
        slug: "russia",
        name: "Russia",
        flag: "🇷🇺",
        region: "Europe / Asia",
        shortDescription: "One of the most established MBBS destinations for Indian students, with many NMC-recognised universities and English-medium programmes.",
        whyItFits: {
            mbbs: "Long-established MBBS programmes with NMC-recognised universities and a strong track record for Indian students.",
            nursing: "Affordable nursing programmes with English-medium options at select universities.",
            default: "Affordable tuition with English-medium options across several healthcare disciplines."
        },
        illustrativeCostRange: "₹18–35 Lakh (total programme)",
        costNote: "Illustrative only — verify directly with universities.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "all"
        ],
        budgetTiers: [
            "under25",
            "25to50"
        ],
        priorities: [
            "lowestCost",
            "nmcTrusted",
            "englishMedium"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy"
        ],
        highlights: [
            "Many NMC-recognised universities",
            "Affordable living costs",
            "Large Indian student community"
        ],
        recognitionNote: "Verify current NMC recognition status before enrolling."
    },
    {
        slug: "ukraine",
        name: "Ukraine",
        flag: "🇺🇦",
        region: "Eastern Europe",
        shortDescription: "Historically a popular MBBS destination. Check current situation and NMC recognition status carefully before considering.",
        whyItFits: {
            mbbs: "Affordable fees and English-medium MBBS programmes — verify current NMC status and on-ground situation.",
            default: "Affordable option — current geopolitical situation must be verified carefully."
        },
        illustrativeCostRange: "₹20–35 Lakh (total programme)",
        costNote: "Illustrative only — current situation affects availability.",
        supportedCareers: [
            "mbbs",
            "all"
        ],
        budgetTiers: [
            "under25",
            "25to50"
        ],
        priorities: [
            "lowestCost",
            "englishMedium"
        ],
        careerTags: [
            "MBBS"
        ],
        highlights: [
            "Low tuition fees",
            "English-medium available"
        ],
        recognitionNote: "⚠ Verify current NMC recognition and on-ground situation before enrolling."
    },
    {
        slug: "georgia",
        name: "Georgia",
        flag: "🇬🇪",
        region: "Caucasus",
        shortDescription: "A growing MBBS destination in the Caucasus with NMC-recognised universities and a relatively affordable cost of living.",
        whyItFits: {
            mbbs: "Growing reputation for MBBS with English-medium programmes and NMC-recognised institutions.",
            default: "Affordable and increasingly popular among Indian healthcare students."
        },
        illustrativeCostRange: "₹22–40 Lakh (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "all"
        ],
        budgetTiers: [
            "under25",
            "25to50"
        ],
        priorities: [
            "lowestCost",
            "nmcTrusted",
            "englishMedium"
        ],
        careerTags: [
            "MBBS"
        ],
        highlights: [
            "NMC-recognised universities",
            "Low cost of living",
            "English-medium programmes"
        ],
        recognitionNote: "Verify current NMC recognition status before enrolling."
    },
    {
        slug: "philippines",
        name: "Philippines",
        flag: "🇵🇭",
        region: "Southeast Asia",
        shortDescription: "A top destination for MBBS and Nursing, with English as the medium of instruction and a strong international reputation for healthcare education.",
        whyItFits: {
            mbbs: "English-medium MBBS with US-style curriculum — suits students targeting USMLE pathways.",
            nursing: "Globally recognised nursing programmes with English-medium instruction — strong for international licensing pathways.",
            default: "English-medium healthcare education with an internationally respected curriculum."
        },
        illustrativeCostRange: "₹25–45 Lakh (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "all"
        ],
        budgetTiers: [
            "25to50"
        ],
        priorities: [
            "englishMedium",
            "highestSalary",
            "nmcTrusted"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy"
        ],
        highlights: [
            "100% English medium",
            "US-style curriculum",
            "Strong USMLE preparation",
            "NMC-recognised options"
        ],
        recognitionNote: "Verify current NMC recognition status before enrolling."
    },
    {
        slug: "kyrgyzstan",
        name: "Kyrgyzstan",
        flag: "🇰🇬",
        region: "Central Asia",
        shortDescription: "An affordable MBBS destination in Central Asia with NMC-recognised universities and a growing Indian student community.",
        whyItFits: {
            mbbs: "Very affordable MBBS with NMC-recognised options and English-medium programmes.",
            default: "Among the most budget-friendly options for healthcare education."
        },
        illustrativeCostRange: "₹15–28 Lakh (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "all"
        ],
        budgetTiers: [
            "under25",
            "25to50"
        ],
        priorities: [
            "lowestCost",
            "nmcTrusted"
        ],
        careerTags: [
            "MBBS"
        ],
        highlights: [
            "Very affordable fees",
            "NMC-recognised universities",
            "English-medium"
        ],
        recognitionNote: "Verify current NMC recognition status before enrolling."
    },
    {
        slug: "kazakhstan",
        name: "Kazakhstan",
        flag: "🇰🇿",
        region: "Central Asia",
        shortDescription: "Rapidly developing medical universities with NMC-recognised programmes and affordable tuition — a strong emerging option.",
        whyItFits: {
            mbbs: "Affordable MBBS with NMC-recognised universities and modern facilities.",
            default: "Budget-friendly option with improving educational infrastructure."
        },
        illustrativeCostRange: "₹18–32 Lakh (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "all"
        ],
        budgetTiers: [
            "under25",
            "25to50"
        ],
        priorities: [
            "lowestCost",
            "nmcTrusted"
        ],
        careerTags: [
            "MBBS"
        ],
        highlights: [
            "NMC-recognised universities",
            "Modern campuses",
            "Affordable fees"
        ],
        recognitionNote: "Verify current NMC recognition status before enrolling."
    },
    {
        slug: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        region: "Western Europe",
        shortDescription: "A premium English-speaking destination with globally respected medical and nursing degrees and clear PLAB/UKMLA licensing pathways.",
        whyItFits: {
            mbbs: "Prestigious medicine degrees with PLAB/UKMLA pathway and strong global recognition.",
            nursing: "World-class nursing education with NMC (UK) registration pathway and strong career prospects.",
            pharmacy: "High-quality pharmacy programmes with GPhC registration pathway.",
            physiotherapy: "Excellent physiotherapy degrees with strong NHS career prospects.",
            default: "Globally respected healthcare qualifications with clear UK licensing pathways."
        },
        illustrativeCostRange: "₹70 Lakh–₹1.5 Cr (total programme)",
        costNote: "Illustrative only — highly variable by programme and institution.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "physiotherapy",
            "respiratoryTherapy",
            "mlt",
            "all"
        ],
        budgetTiers: [
            "75plus"
        ],
        priorities: [
            "highestSalary",
            "englishMedium",
            "nmcTrusted",
            "fastPR"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy",
            "Physiotherapy"
        ],
        highlights: [
            "World-class universities",
            "NHS career pathway",
            "PLAB/UKMLA licensing",
            "Post-study work visa"
        ],
        recognitionNote: "Indian degrees may require PLAB/UKMLA to practise in the UK — verify requirements."
    },
    {
        slug: "australia",
        name: "Australia",
        flag: "🇦🇺",
        region: "Oceania",
        shortDescription: "A top-tier English-speaking destination offering excellent healthcare education with strong PR pathways and globally recognised degrees.",
        whyItFits: {
            mbbs: "World-class medicine with AMC pathway for registration and strong PR opportunities.",
            nursing: "High-demand nursing with AHPRA registration and excellent PR pathways — very sought-after by Indian students.",
            pharmacy: "Strong pharmacy programmes with AHPRA registration and high salary prospects.",
            physiotherapy: "Excellent physiotherapy with fast PR pathways in high-demand regions.",
            default: "Premium healthcare education with strong immigration pathways and high earning potential."
        },
        illustrativeCostRange: "₹60 Lakh–₹1.2 Cr (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "physiotherapy",
            "respiratoryTherapy",
            "mlt",
            "all"
        ],
        budgetTiers: [
            "50to75",
            "75plus"
        ],
        priorities: [
            "fastPR",
            "highestSalary",
            "englishMedium",
            "nmcTrusted"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy",
            "Physiotherapy"
        ],
        highlights: [
            "Strong PR pathways",
            "AHPRA registration",
            "High demand for healthcare workers",
            "AMC pathway for medicine"
        ],
        recognitionNote: "Licensing through AHPRA — specific requirements per profession."
    },
    {
        slug: "canada",
        name: "Canada",
        flag: "🇨🇦",
        region: "North America",
        shortDescription: "A premium destination with world-class healthcare education, strong PR pathways, and high demand for nurses, pharmacists, and allied health.",
        whyItFits: {
            nursing: "Very high demand for nurses with clear PR pathways and among the highest nursing salaries globally.",
            pharmacy: "Strong pharmacy programmes with competitive salaries and PR opportunities.",
            physiotherapy: "Growing demand for physiotherapists with attractive PR and salary prospects.",
            mbbs: "Highly competitive medical schools — generally suited to students with very strong academic profiles.",
            default: "High-demand country for healthcare professionals with excellent immigration opportunities."
        },
        illustrativeCostRange: "₹55 Lakh–₹1.1 Cr (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "physiotherapy",
            "respiratoryTherapy",
            "mlt",
            "all"
        ],
        budgetTiers: [
            "50to75",
            "75plus"
        ],
        priorities: [
            "fastPR",
            "highestSalary",
            "englishMedium"
        ],
        careerTags: [
            "Nursing",
            "Pharmacy",
            "Physiotherapy",
            "MBBS"
        ],
        highlights: [
            "High healthcare demand",
            "Strong PR pathways",
            "English-medium",
            "Top global salaries"
        ],
        recognitionNote: "Licensing requirements vary by province and profession."
    },
    {
        slug: "ireland",
        name: "Ireland",
        flag: "🇮🇪",
        region: "Western Europe",
        shortDescription: "An English-speaking EU country with strong healthcare programmes and a gateway to EU opportunities.",
        whyItFits: {
            nursing: "Strong nursing programmes with EU work rights and clear registration pathway.",
            pharmacy: "Quality pharmacy education with access to EU career market.",
            default: "English-speaking EU base with strong healthcare education and European career access."
        },
        illustrativeCostRange: "₹50–90 Lakh (total programme)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "nursing",
            "pharmacy",
            "physiotherapy",
            "all"
        ],
        budgetTiers: [
            "50to75",
            "75plus"
        ],
        priorities: [
            "englishMedium",
            "highestSalary",
            "fastPR"
        ],
        careerTags: [
            "Nursing",
            "Pharmacy",
            "Physiotherapy"
        ],
        highlights: [
            "English-speaking EU member",
            "EU career access",
            "Strong healthcare sector"
        ],
        recognitionNote: "Licensing requirements vary by profession and regulatory body."
    },
    {
        slug: "germany",
        name: "Germany",
        flag: "🇩🇪",
        region: "Western Europe",
        shortDescription: "A high-quality and often low-tuition European destination with strong career prospects — German language proficiency is generally required.",
        whyItFits: {
            mbbs: "Low or no tuition at public universities — requires German language proficiency.",
            nursing: "Growing demand for nurses — language programmes available for international students.",
            default: "Low tuition and strong career prospects — requires German language investment."
        },
        illustrativeCostRange: "₹20–50 Lakh (total programme, mostly living costs)",
        costNote: "Illustrative only — tuition varies by state and institution.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "physiotherapy",
            "all"
        ],
        budgetTiers: [
            "25to50",
            "50to75"
        ],
        priorities: [
            "lowestCost",
            "highestSalary",
            "fastPR"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy"
        ],
        highlights: [
            "Low/no tuition at public universities",
            "Strong economy",
            "EU PR pathway",
            "High quality of life"
        ],
        recognitionNote: "German language proficiency (B2/C1) generally required. Licensing via Approbation."
    },
    {
        slug: "usa",
        name: "USA",
        flag: "🇺🇸",
        region: "North America",
        shortDescription: "The highest-earning destination for healthcare professionals — significant investment required, with USMLE/NCLEX licensing pathways.",
        whyItFits: {
            mbbs: "USMLE pathway — significant investment but globally recognised with highest salary potential.",
            nursing: "NCLEX pathway to US nursing — highest nursing salaries globally for licensed professionals.",
            pharmacy: "PharmD pathway with high salary potential for licensed pharmacists.",
            default: "Highest global earning potential for licensed healthcare professionals."
        },
        illustrativeCostRange: "₹80 Lakh–₹2 Cr+ (total programme)",
        costNote: "Illustrative only — highly variable.",
        supportedCareers: [
            "mbbs",
            "nursing",
            "pharmacy",
            "physiotherapy",
            "respiratoryTherapy",
            "mlt",
            "all"
        ],
        budgetTiers: [
            "75plus"
        ],
        priorities: [
            "highestSalary",
            "englishMedium"
        ],
        careerTags: [
            "MBBS",
            "Nursing",
            "Pharmacy",
            "Physiotherapy"
        ],
        highlights: [
            "Highest global salaries",
            "USMLE/NCLEX pathways",
            "World-class institutions"
        ],
        recognitionNote: "Requires USMLE/NCLEX/relevant state licensing — complex process requiring early planning."
    },
    {
        slug: "uae",
        name: "UAE",
        flag: "🇦🇪",
        region: "Middle East",
        shortDescription: "A growing healthcare hub offering career opportunities for licensed professionals, particularly nurses, pharmacists, and allied health.",
        whyItFits: {
            nursing: "High demand for nurses in Dubai and Abu Dhabi with competitive tax-free salaries.",
            pharmacy: "Growing pharmaceutical sector with opportunities for licensed pharmacists.",
            physiotherapy: "Increasing demand for physiotherapists in premium UAE healthcare settings.",
            default: "Tax-free salaries and growing healthcare sector — suited for post-qualification career."
        },
        illustrativeCostRange: "₹30–60 Lakh (total programme, variable by route)",
        costNote: "Illustrative only.",
        supportedCareers: [
            "nursing",
            "pharmacy",
            "physiotherapy",
            "mlt",
            "all"
        ],
        budgetTiers: [
            "25to50",
            "50to75"
        ],
        priorities: [
            "highestSalary",
            "fastPR",
            "englishMedium"
        ],
        careerTags: [
            "Nursing",
            "Pharmacy",
            "Physiotherapy"
        ],
        highlights: [
            "Tax-free salaries",
            "High demand for healthcare workers",
            "English-medium workplaces",
            "Modern healthcare facilities"
        ],
        recognitionNote: "Licensing via Dubai Health Authority (DHA), Abu Dhabi Health Services (SEHA), or MOH-UAE depending on emirate."
    }
];
const COUNTRY_SLUGS = COUNTRIES.map(_c = (c)=>({
        slug: c.slug,
        name: c.name,
        flag: c.flag
    }));
_c1 = COUNTRY_SLUGS;
var _c, _c1;
__turbopack_context__.k.register(_c, "COUNTRY_SLUGS$COUNTRIES.map");
__turbopack_context__.k.register(_c1, "COUNTRY_SLUGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/countries.js [app-client] (ecmascript)");
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
// Social SVG icons (inline, no icon-library brand icons)
function LinkedInIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = LinkedInIcon;
function FacebookIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = FacebookIcon;
function InstagramIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = InstagramIcon;
function YouTubeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c3 = YouTubeIcon;
function WhatsAppIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/components/layout/Footer.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c4 = WhatsAppIcon;
// Country autocomplete search
function CountrySearch() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountrySearch.useEffect": ()=>{
            if (query.length < 1) {
                setSuggestions([]);
                setOpen(false);
                return;
            }
            const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$countries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_SLUGS"].filter({
                "CountrySearch.useEffect.filtered": (c)=>c.name.toLowerCase().includes(query.toLowerCase())
            }["CountrySearch.useEffect.filtered"]).slice(0, 6);
            setSuggestions(filtered);
            setOpen(filtered.length > 0);
        }
    }["CountrySearch.useEffect"], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountrySearch.useEffect": ()=>{
            const close = {
                "CountrySearch.useEffect.close": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["CountrySearch.useEffect.close"];
            document.addEventListener("mousedown", close);
            return ({
                "CountrySearch.useEffect": ()=>document.removeEventListener("mousedown", close)
            })["CountrySearch.useEffect"];
        }
    }["CountrySearch.useEffect"], []);
    const handleSelect = (slug)=>{
        setQuery("");
        setOpen(false);
        router.push(`/countries/${slug}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "country-search-footer",
                className: "sr-only",
                children: "Search for a country"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 16,
                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "country-search-footer",
                        type: "search",
                        autoComplete: "off",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Search for a country...",
                        className: "w-full bg-white/5 border border-white/10 text-white placeholder-[#94A3B8] font-body text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-[#4DA5EC] focus:bg-white/10 transition-all duration-200"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                role: "listbox",
                "aria-label": "Country suggestions",
                className: "absolute bottom-full mb-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-50 max-h-56 overflow-y-auto",
                children: suggestions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        role: "option",
                        "aria-selected": "false",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleSelect(c.slug),
                            className: "w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[#F1F7FC] transition-colors text-[#0F172A] font-body text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: c.flag
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this)
                    }, c.slug, false, {
                        fileName: "[project]/components/layout/Footer.jsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(CountrySearch, "ieseefZiQ89JEFvj7k66Yq4UOHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c5 = CountrySearch;
function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        role: "contentinfo",
        className: "bg-[#0F172A] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-2.5 group",
                                        "aria-label": "Medico Yatra — Home",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo/medico-yatra-white.png",
                                            alt: "Medico Yatra Logo",
                                            width: 180,
                                            height: 50,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 132,
                                            columnNumber: 7
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.jsx",
                                        lineNumber: 127,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body font-light text-[#94A3B8] text-sm leading-relaxed mb-2",
                                    children: "Guiding future healthcare professionals beyond borders."
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-xs text-[#475569] mb-6",
                                    children: [
                                        "A ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#4DA5EC]",
                                            children: "Future Yatra Private Limited"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        " brand."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-8",
                                    children: [
                                        {
                                            Icon: LinkedInIcon,
                                            label: "LinkedIn",
                                            href: "#"
                                        },
                                        {
                                            Icon: FacebookIcon,
                                            label: "Facebook",
                                            href: "#"
                                        },
                                        {
                                            Icon: InstagramIcon,
                                            label: "Instagram",
                                            href: "#"
                                        },
                                        {
                                            Icon: YouTubeIcon,
                                            label: "YouTube",
                                            href: "#"
                                        },
                                        {
                                            Icon: WhatsAppIcon,
                                            label: "WhatsApp",
                                            href: "https://wa.me/910000000000"
                                        }
                                    ].map(({ Icon, label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            "aria-label": label,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-[#0263CC] hover:border-[#0263CC] transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.jsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        }, label, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body font-medium text-sm text-white mb-2",
                                    children: "Quick Country Lookup"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountrySearch, {}, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider",
                                    children: "Careers"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: [
                                        {
                                            label: "MBBS",
                                            href: "/courses/mbbs"
                                        },
                                        {
                                            label: "Dentistry",
                                            href: "/courses/dentistry"
                                        },
                                        {
                                            label: "Nursing",
                                            href: "/courses/nursing"
                                        },
                                        {
                                            label: "Pharmacy",
                                            href: "/courses/pharmacy"
                                        },
                                        {
                                            label: "Physiotherapy",
                                            href: "/courses/physiotherapy"
                                        },
                                        {
                                            label: "Respiratory Therapy",
                                            href: "/courses/respiratory-therapy-mlt"
                                        },
                                        {
                                            label: "Med. Lab Technology",
                                            href: "/courses/medical-lab-technology"
                                        }
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.jsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, l.href, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider",
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: [
                                        {
                                            label: "Countries",
                                            href: "/countries"
                                        },
                                        {
                                            label: "Country Finder",
                                            href: "/#country-finder"
                                        },
                                        {
                                            label: "FMGE / NExT",
                                            href: "/fmge-next"
                                        },
                                        {
                                            label: "USMLE",
                                            href: "/usmle"
                                        },
                                        {
                                            label: "Free Resources",
                                            href: "/resources"
                                        }
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.jsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        }, l.href, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-body font-semibold text-sm text-white mt-8 mb-4 uppercase tracking-wider",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5",
                                    children: [
                                        {
                                            label: "About Us",
                                            href: "/about"
                                        },
                                        {
                                            label: "Contact",
                                            href: "/contact"
                                        },
                                        {
                                            label: "FAQ",
                                            href: "/#faq"
                                        },
                                        {
                                            label: "Blog",
                                            href: "/blog"
                                        }
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: l.href,
                                                className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors duration-200",
                                                children: l.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.jsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        }, l.href, false, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-body font-semibold text-sm text-white mb-4 uppercase tracking-wider",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 15,
                                                    className: "text-[#4DA5EC] mt-0.5 shrink-0",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:info@medicoyatra.com",
                                                    className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors break-all",
                                                    children: "info@medicoyatra.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 15,
                                                    className: "text-[#4DA5EC] mt-0.5 shrink-0",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+910000000000",
                                                    className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors",
                                                    children: "+91 00000 00000"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "15",
                                                    height: "15",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "text-[#4DA5EC] mt-0.5 shrink-0",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://wa.me/910000000000",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "font-body font-light text-sm text-[#94A3B8] hover:text-[#4DA5EC] transition-colors",
                                                    children: "WhatsApp Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 15,
                                                    className: "text-[#4DA5EC] mt-0.5 shrink-0",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                    className: "font-body font-light text-sm text-[#94A3B8] not-italic leading-relaxed",
                                                    children: [
                                                        "[Office Address]",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.jsx",
                                                            lineNumber: 265,
                                                            columnNumber: 35
                                                        }, this),
                                                        "India"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.jsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.jsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-body font-light text-xs text-[#475569] leading-relaxed max-w-5xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-[#64748B] font-medium",
                                children: "Disclaimer:"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Footer.jsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            " ",
                            "Medico Yatra provides educational guidance and does not guarantee admission, visa, scholarship, examination, job, salary, or PR outcomes. Salary figures shown are illustrative, approximate, and require licensing/registration and immigration eligibility to achieve. The Country Finder tool provides general matching based on self-reported answers, not a personalised assessment — book a free counselling session for guidance tailored to your specific profile. University recognition and regulations change — verify the current NMC-approved list and applicable rules before enrolling. Guidance, not legal advice."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.jsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.jsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-body text-xs text-[#475569]",
                            children: [
                                "© ",
                                year,
                                " Future Yatra Private Limited. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                {
                                    label: "Privacy Policy",
                                    href: "/privacy"
                                },
                                {
                                    label: "Terms of Use",
                                    href: "/terms"
                                },
                                {
                                    label: "Cookie Policy",
                                    href: "/cookies"
                                }
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: l.href,
                                    className: "font-body text-xs text-[#475569] hover:text-[#4DA5EC] transition-colors",
                                    children: l.label
                                }, l.href, false, {
                                    fileName: "[project]/components/layout/Footer.jsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.jsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_c6 = Footer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "LinkedInIcon");
__turbopack_context__.k.register(_c1, "FacebookIcon");
__turbopack_context__.k.register(_c2, "InstagramIcon");
__turbopack_context__.k.register(_c3, "YouTubeIcon");
__turbopack_context__.k.register(_c4, "WhatsAppIcon");
__turbopack_context__.k.register(_c5, "CountrySearch");
__turbopack_context__.k.register(_c6, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/MobileStickyCTA.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileStickyCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        }, void 0, false, {
            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/MobileStickyCTA.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function MobileStickyCTA() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Show after user has scrolled past the hero (approx 400px)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileStickyCTA.useEffect": ()=>{
            const handleScroll = {
                "MobileStickyCTA.useEffect.handleScroll": ()=>setVisible(window.scrollY > 400)
            }["MobileStickyCTA.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "MobileStickyCTA.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MobileStickyCTA.useEffect"];
        }
    }["MobileStickyCTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "navigation",
        "aria-label": "Quick actions",
        className: `md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`,
        style: {
            paddingBottom: "env(safe-area-inset-bottom)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-stretch bg-white border-t border-[#E2E8F0] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/counselling",
                    className: "flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#0263CC] text-white active:bg-[#0251a8] transition-colors",
                    "aria-label": "Book free counselling",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            size: 18,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-body font-medium text-xs",
                            children: "Free Counselling"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-px bg-white/20",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://wa.me/910000000000",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#02A7BB] text-white active:bg-[#0295a7] transition-colors",
                    "aria-label": "Chat on WhatsApp",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {}, void 0, false, {
                            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-body font-medium text-xs",
                            children: "WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileStickyCTA.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/MobileStickyCTA.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/MobileStickyCTA.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(MobileStickyCTA, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c1 = MobileStickyCTA;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "MobileStickyCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0pxybx-._.js.map