"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{ duration: .3 }}
      className="group overflow-hidden rounded-[28px] border border-[#0263CC]/10 bg-white shadow-[0_15px_40px_rgba(2,99,204,.08)] hover:shadow-[0_30px_70px_rgba(2,99,204,.16)] transition-all duration-300"
    >
      {/* Image */}

      <div className="relative h-[260px] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">

        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* Content */}

      <div className="p-6 text-center">

        <h3 className="text-2xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-2 text-[16px] text-slate-500">
          {member.role}
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">

        <a
  href="#"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0263CC]/10 bg-[#F8FBFF] text-[#0263CC] transition hover:bg-[#0263CC] hover:text-white"
>
  <FontAwesomeIcon icon={faLinkedinIn} className="text-[18px]" />
</a>

          <a
            href="#"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0263CC]/10 bg-[#F8FBFF] text-[#0263CC] transition hover:bg-[#0263CC] hover:text-white"
          >
            <Mail size={18} />
          </a>

        </div>
      </div>
    </motion.div>
  );
}