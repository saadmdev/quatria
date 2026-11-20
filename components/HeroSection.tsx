"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#EBEBEB] pt-8 sm:pt-12 pb-16 lg:pb-28 overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Collection Tag Line */}
        <div className="flex items-center justify-center text-xs sm:text-[13px] font-sans mb-3 sm:mb-4">
          <span className="font-medium text-[#555555] tracking-[0.2em] uppercase text-[11px] sm:text-xs">
            THE SIGNATURE COLLECTION
          </span>
        </div>

        {/* Massive Headline */}
        <h1 className="font-sans font-bold tracking-tight text-[#111111] text-[52px] sm:text-[84px] md:text-[116px] lg:text-[150px] xl:text-[176px] leading-[0.92] text-center uppercase my-2 sm:my-3 select-none">
          QUATRÉA
        </h1>

        {/* Byline / Author Attribution */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center text-[9px] font-bold tracking-tight">
            Q
          </div>
          <span className="text-xs sm:text-[13px] font-sans font-semibold text-[#111111] underline underline-offset-4 cursor-pointer hover:opacity-75 transition-opacity">
            Maison Quatréa
          </span>
        </div>

        {/* Elegant Tagline Underneath */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#4A443E] text-center mt-3 mb-8 sm:mb-12 tracking-wide max-w-xl mx-auto">
          &ldquo;A Scent for Every Season. An Essence for Every Emotion.&rdquo;
        </p>

        {/* Expanded Large Outer Div Container (Color-matched to deep midnight coat & shadows) */}
        <div className="w-full bg-[#11141A] rounded-t-[16px] sm:rounded-t-[24px] rounded-b-[10px] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-[0_30px_70px_rgba(0,0,0,0.45)] border border-[#222834]/40">
          <div className="relative w-full rounded-[6px] sm:rounded-[12px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-[#0C0E12]">
            <img
              src="/quatrae-hero.jpg"
              alt="Quatréa - The Art of the Seasons"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
