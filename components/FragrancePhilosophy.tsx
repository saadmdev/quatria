"use client";

import React, { useState } from "react";
import { OLFACTORY_ACCORDS_EXPLORER } from "@/data/fragrances";
import { CheckCircle2, Sparkles, Droplets, Compass } from "lucide-react";

export default function FragrancePhilosophy() {
  const [activeAccordIndex, setActiveAccordIndex] = useState(0);
  const activeAccord = OLFACTORY_ACCORDS_EXPLORER[activeAccordIndex];

  return (
    <section
      id="experience"
      className="py-24 lg:py-36 bg-[#F4EFEB] border-b border-[#141312]/8 text-[#141312]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-inter-tight tracking-[0.26em] uppercase text-[#7D766C] mb-3">
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
            <span>SIGNATURE EXPERIENCE · THE ATELIER CRAFT</span>
          </div>
          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#141312] font-normal leading-[1.1] tracking-tight">
            The Art of Haute Parfumerie
          </h2>
          <p className="mt-4 text-[#5D574F] text-base sm:text-lg font-inter-tight font-light leading-relaxed">
            In our independent atelier, time is treated as our most precious ingredient.
            Every botanical extract macerates slowly for ninety days in leadless glass
            vessels before bottling, ensuring uncompromised purity and depth.
          </p>
        </div>

        {/* Two-Column Interactive Layout with 16-18px rounded cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Olfactory Accord Family Selector */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-[#141312]/10 pb-4 flex items-center justify-between text-xs font-inter-tight tracking-widest uppercase text-[#888177]">
              <span>Explore Olfactory Accords</span>
              <span>4 Seasonal Families</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {OLFACTORY_ACCORDS_EXPLORER.map((accord, idx) => {
                const isActive = idx === activeAccordIndex;
                return (
                  <button
                    key={accord.family}
                    onClick={() => setActiveAccordIndex(idx)}
                    className={`p-5 rounded-2xl text-left border transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-[#111111] text-[#FAF8F5] border-[#111111] shadow-md"
                        : "bg-white text-[#141312] border-[#141312]/8 hover:border-[#C8A97E]/60 hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-inter-tight tracking-[0.2em] uppercase block mb-1 font-medium ${
                        isActive ? "text-[#C8A97E]" : "text-[#7B7368]"
                      }`}
                    >
                      {accord.frenchName}
                    </span>
                    <span className="font-serif italic text-xl sm:text-2xl block font-normal">
                      {accord.family}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Accord Deep Dive */}
            <div className="bg-white p-7 lg:p-9 rounded-2xl border border-[#141312]/8 space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-inter-tight tracking-[0.2em] uppercase text-[#7D766C] font-medium">
                  Sensory Atmosphere
                </span>
                <span className="font-serif italic text-base text-[#C8A97E]">
                  {activeAccord.character}
                </span>
              </div>

              <p className="text-[#4E4841] text-sm sm:text-base leading-relaxed font-inter-tight font-light">
                {activeAccord.description}
              </p>

              <div className="pt-4 border-t border-[#141312]/8">
                <span className="text-[10px] font-inter-tight tracking-[0.2em] uppercase text-[#888177] block mb-1">
                  Primary Botanical Notes
                </span>
                <span className="font-serif italic text-lg sm:text-xl text-[#141312]">
                  {activeAccord.ingredients}
                </span>
              </div>
            </div>

            {/* Atelier Quality Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-[11px] font-inter-tight text-[#787169]">
              <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-[#141312]/5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <span>Zero Synthetic Stabilizers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-[#141312]/5">
                <Droplets className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <span>90-Day Cold Maceration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-[#141312]/5">
                <Sparkles className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <span>Numbered Crystal Flacons</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Craft Imagery with 18px rounded corners */}
          <div className="lg:col-span-6 h-full flex flex-col justify-between space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#141312]/10 bg-[#E8E2D8] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85"
                alt="Quatréa Parfumerie Atelier"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] font-inter-tight tracking-[0.24em] uppercase text-[#D8C3A5] block mb-1">
                  The Atelier Methodology
                </span>
                <p className="font-serif italic text-lg sm:text-xl font-light">
                  &ldquo;A symphony of nature, captured at the precise inflection of the solstice.&rdquo;
                </p>
              </div>
            </div>

            {/* Supporting Atelier Callout Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#141312]/8 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
              <div>
                <span className="text-xs font-inter-tight font-semibold text-[#111111] uppercase tracking-wider block">
                  Individual Batch Numbering
                </span>
                <span className="text-xs font-inter-tight text-[#7D766C]">
                  Each flacon carries an archival batch stamp and artisan seal.
                </span>
              </div>
              <span className="font-serif italic text-2xl text-[#C8A97E]">
                100ml
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
