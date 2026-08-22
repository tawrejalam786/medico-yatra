import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2.5 shadow-[0_-12px_30px_rgba(15,23,42,.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href="tel:" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#EAF3FF] text-sm font-black text-[#0263CC]"><Phone className="h-4 w-4" />Talk to us</a>
        <a href="#lead" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#178BE5] text-sm font-black text-white"><MessageCircle className="h-4 w-4" />Free counselling</a>
      </div>
    </div>
  );
}
