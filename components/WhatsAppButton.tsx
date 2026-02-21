"use client";

import { personalInfo } from "@/config/content";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href={personalInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}
