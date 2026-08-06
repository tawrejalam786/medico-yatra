"use client";

import Image from "next/image";

export default function SignatureCard() {
  return (
    <div className="rounded-[28px] border border-white bg-white/80 backdrop-blur-xl shadow-xl p-6">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <Image
          src="/images/signature.png"
          alt="Signature"
          width={180}
          height={70}
        />

        <div className="hidden h-12 w-px bg-slate-200 md:block" />

        <div>

          <h4 className="text-xl font-bold text-slate-900">
            Kashif Qamar Siddiqui
          </h4>

          <p className="mt-1 text-slate-500">
            Founder & CEO,
            <span className="font-semibold text-[#0263CC]">
              {" "}Medico Yatra
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}