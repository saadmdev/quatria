"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { ArrowRight, Eye, Wind } from "lucide-react";

export default function FourSeasonsExperience() {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const { addToCart, openFragranceModal } = useCart();

  const currentFragrance = FRAGRANCES[selectedSeasonIndex];

  return (
    <section
      id="seasons"
      className="py-24 lg:py-36 bg-[#FAF8F5] border-b border-[#141312]/8 text-[#141312] relative overflow-hidden"
    >
      {/* Dynamic Seasonal Ambient Aura */}
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 opacity-20"
        style={{ backgroundColor: currentFragrance.colorHex }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#141312]/10 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.24em] uppercase text-[#7D766C] mb-3">
              <span className="w-8 h-[1px] bg-[#C8A97E]" />
              <span>02 · Signature Experience</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141312] font-normal">
              The Four Seasons
            </h2>
            <p className="font-sans text-[#6B655D] text-sm tracking-wider uppercase mt-2">
              Four Emotions. Four Atmospheres. One Essence.
            </p>
          </div>

          {/* Interactive Season Tab Switcher */}
          <div className="flex items-center space-x-2 bg-[#F4EFEB] p-1.5 rounded-full border border-[#141312]/8 overflow-x-auto">
            {FRAGRANCES.map((frag, idx) => {
              const isActive = idx === selectedSeasonIndex;
              return (
                <button
                  key={frag.id}
                  onClick={() => setSelectedSeasonIndex(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-sans tracking-[0.16em] uppercase transition-all duration-500 whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "bg-[#141312] text-[#FAF8F5] shadow-sm font-medium"
                      : "text-[#59534B] hover:text-[#141312] hover:bg-white/50"
                  }`}
                >
                  <span className="text-[10px] opacity-60">{frag.seasonNumber}</span>
                  <span>{frag.season}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Seasonal Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFragrance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Atmospheric Seasonal Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden bg-[#EAE4DC] border border-[#141312]/10 shadow-lg group">
                <img
                  src={currentFragrance.image}
                  alt={currentFragrance.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/60 via-transparent to-transparent pointer-events-none" />

                {/* Scent Atmospheric Details Overlay */}
                <div className="absolute top-5 left-5 bg-[#141312]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#FAF8F5] text-[10px] font-sans tracking-[0.2em] uppercase border border-white/10 flex items-center gap-2">
                  <Wind className="w-3 h-3 text-[#C8A97E]" />
                  <span>{currentFragrance.seasonFrench}</span>
                </div>

                <div className="absolute bottom-6 inset-x-6 bg-[#FAF8F5]/95 backdrop-blur-md p-5 rounded-[4px] border border-white/50 shadow-md">
                  <div className="flex items-center justify-between text-xs text-[#7B7368] mb-1">
                    <span className="font-sans uppercase tracking-widest text-[10px]">
                      Atmospheric Temperature
                    </span>
                    <span className="text-[11px] font-sans text-[#141312]">
                      {currentFragrance.concentration}
                    </span>
                  </div>
                  <p className="font-serif italic text-base text-[#141312]">
                    &ldquo;{currentFragrance.atmosphericAccords}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Olfactory Composition & Story */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: currentFragrance.colorHex }}
                  />
                  <span className="text-xs font-sans tracking-[0.22em] uppercase text-[#7D766C]">
                    {currentFragrance.seasonNumber} · {currentFragrance.seasonFrench}
                  </span>
                </div>

                <h3 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-[#141312] font-normal leading-[1.08]">
                  {currentFragrance.name}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-[#786D5F] mt-1">
                  {currentFragrance.tagline}
                </p>
              </div>

              {/* Emotional Temperature & Family */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#141312]/10">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#888177] block mb-1">
                    Emotional Archetype
                  </span>
                  <span className="font-serif text-base text-[#141312] font-medium">
                    {currentFragrance.emotion}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#888177] block mb-1">
                    Olfactory Family
                  </span>
                  <span className="font-serif text-base text-[#141312] font-medium">
                    {currentFragrance.family}
                  </span>
                </div>
              </div>

              {/* Olfactory Pyramid (Top, Heart, Base) */}
              <div className="space-y-4">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#7D766C] block">
                  Olfactory Pyramid
                </span>

                <div className="space-y-3 bg-[#F4EFEB] p-5 rounded-[4px] border border-[#141312]/8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm">
                    <span className="font-sans font-medium text-xs tracking-wider uppercase text-[#141312] w-24 shrink-0">
                      Top Notes:
                    </span>
                    <span className="text-[#59524A] font-light">
                      {currentFragrance.notes.top.join(" · ")}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm pt-2 border-t border-[#141312]/6">
                    <span className="font-sans font-medium text-xs tracking-wider uppercase text-[#141312] w-24 shrink-0">
                      Heart Notes:
                    </span>
                    <span className="text-[#59524A] font-light">
                      {currentFragrance.notes.heart.join(" · ")}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm pt-2 border-t border-[#141312]/6">
                    <span className="font-sans font-medium text-xs tracking-wider uppercase text-[#141312] w-24 shrink-0">
                      Base Notes:
                    </span>
                    <span className="text-[#59524A] font-light">
                      {currentFragrance.notes.base.join(" · ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing & Actions */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="block text-2xl font-serif text-[#141312]">
                    {currentFragrance.formattedPrice}
                  </span>
                  <span className="text-[11px] font-sans tracking-widest uppercase text-[#888177]">
                    {currentFragrance.volume} · Inclusive of Taxes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openFragranceModal(currentFragrance)}
                    className="p-3.5 border border-[#141312]/20 hover:border-[#141312] text-[#141312] rounded-[4px] transition-colors"
                    title="Examine Olfactory Details"
                    aria-label="View fragrance details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => addToCart(currentFragrance)}
                    className="luxury-btn flex-1 sm:flex-none px-8 py-3.5 bg-[#141312] hover:bg-[#252321] text-[#FAF8F5] text-xs font-sans tracking-[0.18em] uppercase rounded-[4px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Acquire Flacon</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A97E]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail Carousel strip for all 4 Seasons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-[#141312]/10">
          {FRAGRANCES.map((frag, idx) => {
            const isCurrent = idx === selectedSeasonIndex;
            return (
              <div
                key={frag.id}
                onClick={() => setSelectedSeasonIndex(idx)}
                className={`cursor-pointer p-4 rounded-[4px] border transition-all duration-500 group ${
                  isCurrent
                    ? "bg-[#FAF8F5] border-[#141312] shadow-sm"
                    : "bg-[#F4EFEB]/50 border-transparent hover:border-[#141312]/20"
                }`}
              >
                <div className="aspect-[4/3] rounded-[2px] overflow-hidden mb-3 bg-[#EAE4DC]">
                  <img
                    src={frag.image}
                    alt={frag.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-sans tracking-widest uppercase text-[#888177] mb-1">
                  <span>{frag.seasonNumber}</span>
                  <span>{frag.season}</span>
                </div>
                <span className="font-serif text-base text-[#141312] block truncate group-hover:text-[#C8A97E] transition-colors">
                  {frag.name}
                </span>
                <span className="text-xs font-sans text-[#787169] mt-0.5 block">
                  {frag.formattedPrice}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
