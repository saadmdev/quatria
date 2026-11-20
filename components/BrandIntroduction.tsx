"use client";

import React from "react";
import { PHILOSOPHY_PILLARS } from "@/data/fragrances";

export default function BrandIntroduction() {
  return (
    <section
      id="brand-story"
      className="py-24 lg:py-36 bg-[#F4EFEB] border-b border-[#141312]/8 text-[#141312] relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Label */}
        <div className="flex items-center gap-3 text-[11px] sm:text-xs font-inter-tight tracking-[0.26em] uppercase text-[#7D766C] mb-8 sm:mb-12">
          <span className="w-8 h-[1px] bg-[#C8A97E]" />
          <span>BRAND STORY · OUR PHILOSOPHY</span>
        </div>

        {/* Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.16] font-normal text-[#141312] tracking-tight">
              &ldquo;Fragrance is the most intimate form of memory. Every season
              leaves an indelible emotional presence upon the spirit.&rdquo;
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-4 pt-2">
            <p className="text-[#554F47] text-[15px] sm:text-base font-light leading-relaxed">
              Founded on the belief that a truly great perfume cannot be static,
              Quatréa was conceived around the cyclical rhythm of nature. Our four
              signature extraits honor the emotional cadence of the year —
              translating ephemeral moments into permanent sensory monuments.
            </p>
            <div className="pt-2 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#E6DFD4] border border-[#C8A97E]/30 flex items-center justify-center font-serif italic text-xl text-[#141312] shadow-sm">
                Q
              </div>
              <div>
                <span className="block text-xs font-inter-tight tracking-widest uppercase font-semibold text-[#141312]">
                  Quatréa Atelier
                </span>
                <span className="block text-[10px] font-inter-tight tracking-[0.18em] uppercase text-[#888177]">
                  Independent Haute Parfumerie
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillar Cards with 16px rounded corners & subtle shadows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 sm:mt-20 pt-14 border-t border-[#141312]/10">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#FAF8F5] p-8 lg:p-10 rounded-2xl border border-[#141312]/8 flex flex-col justify-between hover:border-[#C8A97E]/60 transition-all duration-500 group shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-[#8E867B] mb-6">
                  <span className="font-serif italic text-2xl text-[#C8A97E]">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-inter-tight tracking-[0.2em] uppercase font-medium">
                    {pillar.frenchTitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#141312] mb-3 group-hover:text-[#8B6E4A] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-[#5A544C] text-[14px] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#141312]/6 flex items-center justify-between text-[11px] font-inter-tight tracking-widest uppercase text-[#888177]">
                <span>Artisanal Purity</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]/50 group-hover:bg-[#C8A97E] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
