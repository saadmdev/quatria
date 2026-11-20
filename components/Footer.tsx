"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141312] text-[#FAF8F5] pt-20 pb-12 border-t border-[#252321] text-xs font-inter-tight">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Brand Crest & Large Wordmark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <span className="font-serif text-3xl lg:text-4xl tracking-[0.22em] uppercase font-light text-[#FAF8F5] block">
              QUATRÉA
            </span>
            <span className="font-inter-tight text-[10px] tracking-[0.32em] uppercase text-[#C8A97E] block mt-1.5 font-medium">
              Haute Parfumerie · The Four Seasons
            </span>
            <p className="font-serif italic text-[#9B9489] text-base mt-3 max-w-md">
              &ldquo;Four Seasons. Four Emotions. One Essence.&rdquo;
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] font-inter-tight tracking-[0.18em] uppercase text-[#B3ACA2] hover:text-[#FAF8F5] transition-colors py-2 border-b border-white/20 hover:border-[#C8A97E] w-fit"
          >
            <span>Return To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8A97E]" />
          </button>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Col 1: Fragrances */}
          <div className="space-y-4">
            <span className="font-inter-tight text-[11px] tracking-[0.22em] uppercase text-[#FAF8F5] font-medium block">
              The Four Fragrances
            </span>
            <ul className="space-y-2.5 text-[#9E968B] text-xs font-light">
              <li>
                <a href="#the-four-seasons" className="hover:text-[#C8A97E] transition-colors">
                  N° 01 — Éclosion Éthérée (Spring)
                </a>
              </li>
              <li>
                <a href="#the-four-seasons" className="hover:text-[#C8A97E] transition-colors">
                  N° 02 — Rayon Solaire (Summer)
                </a>
              </li>
              <li>
                <a href="#the-four-seasons" className="hover:text-[#C8A97E] transition-colors">
                  N° 03 — Feuille d&apos;Ambre (Autumn)
                </a>
              </li>
              <li>
                <a href="#the-four-seasons" className="hover:text-[#C8A97E] transition-colors">
                  N° 04 — Nuit Givrée (Winter)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#C8A97E] transition-colors">
                  The Complete Seasonal Discovery Set
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: The Atelier */}
          <div className="space-y-4">
            <span className="font-inter-tight text-[11px] tracking-[0.22em] uppercase text-[#FAF8F5] font-medium block">
              The Atelier
            </span>
            <ul className="space-y-2.5 text-[#9E968B] text-xs font-light">
              <li>
                <a href="#brand-story" className="hover:text-[#C8A97E] transition-colors">
                  Our Philosophy &amp; Story
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C8A97E] transition-colors">
                  The Art of Haute Parfumerie
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C8A97E] transition-colors">
                  Cold-Maceration Craft
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#C8A97E] transition-colors">
                  Numbered Crystal Flaconnage
                </a>
              </li>
              <li>
                <a href="#find-your-season" className="hover:text-[#C8A97E] transition-colors">
                  Bespoke Scent Finder
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Services */}
          <div className="space-y-4">
            <span className="font-inter-tight text-[11px] tracking-[0.22em] uppercase text-[#FAF8F5] font-medium block">
              Client Care
            </span>
            <ul className="space-y-2.5 text-[#9E968B] text-xs font-light">
              <li>
                <span className="hover:text-[#C8A97E] transition-colors cursor-pointer">
                  Complimentary Shipping &amp; Samples
                </span>
              </li>
              <li>
                <span className="hover:text-[#C8A97E] transition-colors cursor-pointer">
                  Bespoke Bottle Engraving
                </span>
              </li>
              <li>
                <span className="hover:text-[#C8A97E] transition-colors cursor-pointer">
                  Batch Seal Authentication
                </span>
              </li>
              <li>
                <span className="hover:text-[#C8A97E] transition-colors cursor-pointer">
                  Flacon Care &amp; Aging Guide
                </span>
              </li>
              <li>
                <span className="hover:text-[#C8A97E] transition-colors cursor-pointer">
                  Contact The Atelier Concierge
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: International Salons */}
          <div className="space-y-4">
            <span className="font-inter-tight text-[11px] tracking-[0.22em] uppercase text-[#FAF8F5] font-medium block">
              International Salons
            </span>
            <div className="space-y-3 text-[#9E968B] text-xs font-light">
              <div>
                <span className="block text-[#FAF8F5] font-medium text-[11px]">
                  London Salon
                </span>
                <span>28 Burlington Arcade, Mayfair</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5] font-medium text-[11px]">
                  New York Salon
                </span>
                <span>740 Madison Avenue, Manhattan</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5] font-medium text-[11px]">
                  Tokyo Salon
                </span>
                <span>6 Chome Ginza, Chuo City</span>
              </div>
              <div>
                <span className="block text-[#FAF8F5] font-medium text-[11px]">
                  Zurich Salon
                </span>
                <span>Bahnhofstrasse 45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights, Socials & Legal */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A7368] gap-4">
          <div className="flex items-center gap-6">
            <span>© 2026 Quatréa Parfumerie. All rights reserved.</span>
            <span className="hidden md:inline">Independent Haute Parfumerie</span>
          </div>

          <div className="flex items-center space-x-6 text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-[#C8A97E] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#C8A97E] transition-colors">
              Journal
            </a>
            <a href="#" className="hover:text-[#C8A97E] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#C8A97E] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
