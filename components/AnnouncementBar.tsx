"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const ANNOUNCEMENTS = [
  "Complimentary white-glove worldwide shipping on all Haute Parfumerie orders",
  "Each flacon arrives with a complimentary 2ml seasonal extrait discovery sample",
  "Private olfactory appointments now open at our Paris Salon, 14 Rue de Castiglione",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#141312] text-[#E8E2D8] border-b border-[#2A2724] text-[11px] font-sans tracking-[0.18em] uppercase py-2.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Maison Origin Badge */}
        <div className="hidden md:flex items-center space-x-2 text-[#9A9187] text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-pulse" />
          <span>Maison Quatréa · Grasse &amp; Paris</span>
        </div>

        {/* Center Rotating Message */}
        <div className="flex-1 flex items-center justify-center text-center px-4 overflow-hidden">
          <p
            key={currentIndex}
            className="transition-all duration-700 ease-out transform translate-y-0 opacity-100 text-[#DFD9CE] font-light text-[11px] flex items-center gap-2"
          >
            <Sparkles className="w-3 h-3 text-[#C8A97E] shrink-0" />
            <span>{ANNOUNCEMENTS[currentIndex]}</span>
          </p>
        </div>

        {/* Right Utility */}
        <div className="hidden lg:flex items-center space-x-4 text-[#9A9187] text-[10px]">
          <span className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
            EUR (€)
          </span>
          <span className="text-[#3A3632]">|</span>
          <span className="hover:text-[#FAF8F5] transition-colors cursor-pointer">
            FR / EN
          </span>
        </div>
      </div>
    </div>
  );
}
