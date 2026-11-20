"use client";

import React from "react";
import { FRAGRANCES } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { Plus, ArrowUpRight } from "lucide-react";

export default function SignatureCollection() {
  const { addToCart, openFragranceModal } = useCart();

  return (
    <section
      id="collection"
      className="py-24 lg:py-36 bg-[#FAF8F5] border-b border-[#141312]/8 text-[#141312]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#141312]/10 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[11px] sm:text-xs font-inter-tight tracking-[0.26em] uppercase text-[#7D766C] mb-3">
              <span className="w-8 h-[1px] bg-[#C8A97E]" />
              <span>THE COLLECTION · THE FOUR FLACONS</span>
            </div>
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#141312] font-normal tracking-tight">
              The Signature Flacons
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-inter-tight font-light text-[#5E574F] leading-relaxed">
            Four bespoke extraits de parfum, hand-bottled in weighted leadless crystal
            with precision magnetic closures and individual batch seals.
          </p>
        </div>

        {/* 4 Product Cards Grid with 16-18px rounded corners and subtle shadows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FRAGRANCES.map((fragrance) => (
            <div
              key={fragrance.id}
              className="bg-white rounded-2xl border border-[#141312]/8 overflow-hidden flex flex-col justify-between hover:border-[#141312]/25 transition-all duration-500 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/5] bg-[#F4EFEB] overflow-hidden">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Season & Edition Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="bg-[#141312]/85 backdrop-blur-md text-[#FAF8F5] text-[10px] font-inter-tight tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {fragrance.season}
                  </span>
                  <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#141312] text-[9px] font-inter-tight tracking-[0.16em] uppercase px-2 py-0.5 rounded-full w-fit">
                    {fragrance.seasonNumber}
                  </span>
                </div>

                {/* Hover Quick View Overlay Action */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openFragranceModal(fragrance)}
                    className="w-full py-2.5 bg-[#FAF8F5]/95 backdrop-blur-md text-[#141312] hover:bg-[#111111] hover:text-white text-[11px] font-inter-tight tracking-[0.16em] uppercase rounded-full transition-colors duration-300 shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect Flacon</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-inter-tight text-[#7E776E] mb-2 tracking-wider">
                    <span>{fragrance.family}</span>
                    <span>{fragrance.volume}</span>
                  </div>

                  <h3
                    onClick={() => openFragranceModal(fragrance)}
                    className="font-serif italic text-2xl text-[#141312] group-hover:text-[#8B6E4A] transition-colors cursor-pointer"
                  >
                    {fragrance.name}
                  </h3>

                  <p className="text-[#615B53] text-[13px] font-inter-tight font-light leading-relaxed mt-2 line-clamp-2">
                    {fragrance.description}
                  </p>

                  {/* Highlight Notes Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {fragrance.accords.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] font-inter-tight tracking-wider bg-[#F4EFEB] text-[#4E4841] px-2.5 py-1 rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#141312]/8 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-inter-tight uppercase tracking-widest text-[#888177] block">
                      {fragrance.concentration}
                    </span>
                    <span className="font-inter-tight font-semibold text-base text-[#141312]">
                      {fragrance.formattedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(fragrance)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-[11px] font-inter-tight tracking-[0.16em] uppercase transition-colors duration-300 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
