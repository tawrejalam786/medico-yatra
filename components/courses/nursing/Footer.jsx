import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <b className="text-lg font-black">Medico Yatra</b>
          <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">Helping healthcare students and professionals make confident international education and career decisions.</p>
        </div>
        <div>
          <b className="text-xs uppercase tracking-wider">Quick Links</b>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-500">
            <a href="#salary">Salary Guide</a><a href="#faqs">FAQs</a><a href="#counselling">Counselling</a><a href="#salary">Countries</a>
          </div>
        </div>
        <div>
          <b className="text-xs uppercase tracking-wider">Contact</b>
          <div className="mt-3 space-y-2 text-xs text-slate-500">
            <div className="flex gap-2"><PhoneCall size={14}/> +91 99999 99999</div>
            <div className="flex gap-2"><Mail size={14}/> hello@medicoyatra.com</div>
            <div className="flex gap-2"><MapPin size={14}/> New Delhi, India</div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-[10px] text-slate-400">© {new Date().getFullYear()} Medico Yatra. All rights reserved.</div>
    </footer>
  );
}