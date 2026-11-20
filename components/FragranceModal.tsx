"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Plus } from "lucide-react";

export default function FragranceModal() {
  const { activeFragranceModal, closeFragranceModal, addToCart } = useCart();

  if (!activeFragranceModal) return null;

  const fragrance = activeFragranceModal;

  const handleAddAndClose = () => {
    addToCart(fragrance);
    closeFragranceModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141312]/75 backdrop-blur-md transition-opacity"
        onClick={closeFragranceModal}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-[6px] shadow-2xl border border-[#141312]/15 overflow-hidden z-10 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeFragranceModal}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5]/80 hover:bg-[#141312] hover:text-[#FAF8F5] text-[#141312] transition-colors z-20"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Image Column */}
            <div className="md:col-span-5 relative bg-[#E8E2D8] min-h-[340px] md:min-h-full">
              <img
                src={fragrance.image}
                alt={fragrance.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5]">
                <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-[#C8A97E] block mb-1">
                  Batch: {fragrance.batchNumber}
                </span>
                <span className="font-serif italic text-lg block">
                  {fragrance.bottleDetail}
                </span>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="md:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase text-[#7D766C] mb-2">
                  <span>{fragrance.seasonNumber}</span>
                  <span>·</span>
                  <span>{fragrance.seasonFrench}</span>
                  <span>·</span>
                  <span className="text-[#C8A97E]">{fragrance.concentration}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#141312]">
                  {fragrance.name}
                </h3>
                <p className="font-serif italic text-lg text-[#7A6F62] mt-1">
                  {fragrance.tagline}
                </p>

                <p className="text-sm font-light text-[#59524A] leading-relaxed mt-4">
                  {fragrance.description}
                </p>

                {/* Scent Accord Notes */}
                <div className="mt-6 pt-6 border-t border-[#141312]/10 space-y-3">
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#888177] block">
                    Olfactory Composition
                  </span>

                  <div className="space-y-2 text-xs bg-[#F4EFEB] p-4 rounded-[4px]">
                    <div className="flex items-start gap-2">
                      <span className="font-sans font-medium uppercase tracking-wider text-[#141312] w-16 shrink-0">
                        Top:
                      </span>
                      <span className="text-[#5A544C] font-light">
                        {fragrance.notes.top.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-[#141312]/6">
                      <span className="font-sans font-medium uppercase tracking-wider text-[#141312] w-16 shrink-0">
                        Heart:
                      </span>
                      <span className="text-[#5A544C] font-light">
                        {fragrance.notes.heart.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-[#141312]/6">
                      <span className="font-sans font-medium uppercase tracking-wider text-[#141312] w-16 shrink-0">
                        Base:
                      </span>
                      <span className="text-[#5A544C] font-light">
                        {fragrance.notes.base.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story narrative */}
                <p className="text-xs text-[#787168] italic font-serif leading-relaxed mt-4">
                  &ldquo;{fragrance.story}&rdquo;
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#141312]/10 flex items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-2xl text-[#141312] block">
                    {fragrance.formattedPrice}
                  </span>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#888177]">
                    {fragrance.volume} · Hand-Numbered
                  </span>
                </div>

                <button
                  onClick={handleAddAndClose}
                  className="luxury-btn px-8 py-3.5 bg-[#141312] hover:bg-[#252321] text-[#FAF8F5] text-xs font-sans tracking-[0.18em] uppercase rounded-[2px] transition-colors flex items-center gap-2 shadow-md"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>Acquire Flacon</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
