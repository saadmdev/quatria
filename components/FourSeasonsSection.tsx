"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ArrowLeft, Wind, Sun, Flame, Snowflake } from "lucide-react";

interface SeasonalPanelData {
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  number: string;
  roman: string;
  poeticTitle: string;
  copy: string;
  mood: string;
  fragranceId: string;
  name: string;
  concentration: string;
  accords: string[];
  accentColor: string;
  accentLight: string;
  accentBorder: string;
  badgeBg: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  atmosphereImage: string;
}

const SEASONAL_PANELS: SeasonalPanelData[] = [
  {
    season: "Spring",
    number: "N° 01",
    roman: "I",
    poeticTitle: "The Awakening",
    copy: "Where nature awakens, and every beginning carries a beautiful promise.",
    mood: "Freshness, renewal & new beginnings",
    fragranceId: "spring-eclosion-etheree",
    name: "Éclosion Éthérée",
    concentration: "26% Pure Extrait",
    accords: ["Lily of the Valley", "Fresh Fig Leaf", "Grasse Centifolia Rose"],
    accentColor: "#7A8F78",
    accentLight: "#F5F8F4",
    accentBorder: "rgba(122, 143, 120, 0.28)",
    badgeBg: "rgba(122, 143, 120, 0.12)",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1200&q=85",
  },
  {
    season: "Summer",
    number: "N° 02",
    roman: "II",
    poeticTitle: "The Radiance",
    copy: "An endless summer captured in golden light, warmth, and effortless freedom.",
    mood: "Freedom, warmth & golden summer evenings",
    fragranceId: "summer-rayon-solaire",
    name: "Rayon Solaire",
    concentration: "28% Pure Extrait",
    accords: ["Calabrian Bergamot", "Solar Neroli", "Warm Amber Salt"],
    accentColor: "#C28E46",
    accentLight: "#FAF5EC",
    accentBorder: "rgba(194, 142, 70, 0.28)",
    badgeBg: "rgba(194, 142, 70, 0.12)",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    season: "Autumn",
    number: "N° 03",
    roman: "III",
    poeticTitle: "The Ember",
    copy: "An intimate expression of warmth, depth, and the beauty of change.",
    mood: "Warmth, depth & sophistication",
    fragranceId: "autumn-feuille-dambre",
    name: "Feuille d'Ambre",
    concentration: "30% Pure Extrait",
    accords: ["Saffron", "Spiced Fig", "Cedarwood"],
    accentColor: "#8B4E2B",
    accentLight: "#F8F2EC",
    accentBorder: "rgba(139, 78, 43, 0.28)",
    badgeBg: "rgba(139, 78, 43, 0.12)",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=85",
  },
  {
    season: "Winter",
    number: "N° 04",
    roman: "IV",
    poeticTitle: "The Stillness",
    copy: "Where silence becomes elegance, and every breath leaves a lasting impression.",
    mood: "Serenity, elegance & quiet luxury",
    fragranceId: "winter-nuit-givree",
    name: "Nuit Givrée",
    concentration: "30% Pure Extrait",
    accords: ["White Musk", "Frosted Iris", "Cashmere Woods"],
    accentColor: "#4C5B67",
    accentLight: "#F0F4F7",
    accentBorder: "rgba(76, 91, 103, 0.28)",
    badgeBg: "rgba(76, 91, 103, 0.12)",
    icon: Snowflake,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function FourSeasonsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { openFragranceModal } = useCart();
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(0);

  // Desktop Pinned Horizontal Scroll with calibrated travel distance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth translation: maps scroll progress cleanly from 0% to -65% so Winter is fully settled before unpinning
  const rawX = useTransform(scrollYProgress, [0, 0.88], ["0%", "-64%"]);
  const smoothX = useSpring(rawX, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Track active season index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.22) setActiveSeasonIndex(0);
      else if (latest < 0.48) setActiveSeasonIndex(1);
      else if (latest < 0.74) setActiveSeasonIndex(2);
      else setActiveSeasonIndex(3);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Jump-to-season smooth scrolling on desktop
  const handleSeasonClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = sectionTop + (index / 3) * scrollDistance * 0.88;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNextSeason = () => {
    const nextIdx = Math.min(activeSeasonIndex + 1, 3);
    handleSeasonClick(nextIdx);
  };

  const handlePrevSeason = () => {
    const prevIdx = Math.max(activeSeasonIndex - 1, 0);
    handleSeasonClick(prevIdx);
  };

  const findFragrance = (id: string): Fragrance => {
    return FRAGRANCES.find((f) => f.id === id) || FRAGRANCES[0];
  };

  return (
    <div id="the-four-seasons" className="relative bg-white text-[#141312]">
      {/* =========================================================================
          1. SECTION HEADER (Monumental Typography & Editorial Narrative)
          ========================================================================= */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-6 lg:px-12 border-b border-[#141312]/6 bg-white">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center">
          {/* Subtle Editorial Label */}
          <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-inter-tight tracking-[0.28em] uppercase text-[#7D766C] mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
            <span>THE SIGNATURE COLLECTION</span>
            <span className="w-8 h-[1px] bg-[#C8A97E]" />
          </div>

          {/* Monumental Headline */}
          <h2 className="font-inter-tight font-bold tracking-tight text-[#111111] text-[42px] sm:text-[68px] md:text-[96px] lg:text-[124px] xl:text-[148px] leading-[0.92] uppercase select-none">
            THE FOUR SEASONS
          </h2>

          {/* Inspirational Description */}
          <p className="font-inter-tight font-light text-[#444444] text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.4] tracking-[-0.015em] max-w-3xl mt-4 sm:mt-6">
            Four seasons. Four emotions. Four fragrances that capture the beauty
            of every moment.
          </p>

          {/* Seasonal Navigation Pills for Direct Jump */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {SEASONAL_PANELS.map((item, idx) => {
              const isActive = activeSeasonIndex === idx;
              return (
                <button
                  key={item.season}
                  onClick={() => handleSeasonClick(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-inter-tight tracking-[0.14em] uppercase transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#111111] text-[#FAF8F5] border-[#111111] shadow-sm"
                      : "bg-[#FAF8F5] text-[#555555] border-[#141312]/10 hover:border-[#111111]/30 hover:text-[#111111]"
                  }`}
                >
                  <span className="text-[10px] opacity-60">{item.number}</span>
                  <span className="font-medium">{item.season}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DESKTOP INTERACTIVE PINNED HORIZONTAL SCROLL EXPERIENCE
          - Pinned container with calibrated h-[260vh] to eliminate trapping
          - Smooth release to Brand Story section upon reaching Winter
          ========================================================================= */}
      <div
        ref={containerRef}
        className="hidden lg:block relative h-[260vh] bg-[#FAF8F5]"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-6 lg:py-8">
          {/* Top Sticky Minimalist HUD Bar */}
          <div className="max-w-[1520px] w-full mx-auto px-8 lg:px-12 flex items-center justify-between text-xs font-inter-tight text-[#7D766C]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#111111] tracking-[0.2em] uppercase text-[11px]">
                QUATRÉA
              </span>
              <span className="text-[#141312]/20">/</span>
              <span className="tracking-[0.16em] uppercase text-[11px]">
                {SEASONAL_PANELS[activeSeasonIndex].number} ·{" "}
                {SEASONAL_PANELS[activeSeasonIndex].season.toUpperCase()} —{" "}
                {SEASONAL_PANELS[activeSeasonIndex].poeticTitle.toUpperCase()}
              </span>
            </div>

            {/* Navigation Controls & Progress */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSeason}
                  disabled={activeSeasonIndex === 0}
                  className="w-7 h-7 rounded-full border border-[#141312]/15 flex items-center justify-center text-[#111111] hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous Season"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNextSeason}
                  disabled={activeSeasonIndex === 3}
                  className="w-7 h-7 rounded-full border border-[#141312]/15 flex items-center justify-center text-[#111111] hover:bg-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next Season"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-widest text-[#888888]">
                  SCROLL TO EXPLORE
                </span>
                <div className="w-24 h-[2px] bg-[#141312]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#111111] transition-all duration-300"
                    style={{ width: `${(activeSeasonIndex + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Track with the 4 Distinct Seasonal Compositions */}
          <motion.div
            ref={horizontalTrackRef}
            style={{ x: shouldReduceMotion ? 0 : smoothX }}
            className="flex gap-10 xl:gap-14 pl-10 xl:pl-16 pr-20 items-center my-auto"
          >
            {/* =================================================================
                PANEL 1: SPRING — The Awakening
                - Soft sage green, ivory, delicate blush tones
                - Title on upper-left, large perfume photography underneath
                - Notes: Lily of the Valley, Fresh Fig Leaf, Grasse Centifolia Rose
                ================================================================= */}
            <article className="w-[64vw] max-w-[960px] h-[68vh] min-h-[500px] max-h-[620px] shrink-0 bg-[#F5F8F4] border border-[#7A8F78]/25 rounded-2xl p-7 xl:p-9 flex flex-col justify-between shadow-[0_12px_40px_-8px_rgba(122,143,120,0.12)] relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-[11px] font-inter-tight tracking-[0.22em] uppercase text-[#7A8F78] mb-2 font-medium">
                    <Wind className="w-3.5 h-3.5" />
                    <span>01 · SPRING · ÉCLOSION ÉTHÉRÉE</span>
                  </div>
                  <h3 className="font-serif italic text-3xl sm:text-4xl xl:text-5xl text-[#141312] font-normal tracking-tight">
                    The Awakening
                  </h3>
                  <p className="font-inter-tight font-light text-[#444444] text-sm xl:text-base leading-relaxed mt-2">
                    &ldquo;Where nature awakens, and every beginning carries a
                    beautiful promise.&rdquo;
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-inter-tight uppercase tracking-widest text-[#7A8F78] font-medium block">
                    26% Pure Extrait
                  </span>
                  <span className="text-[11px] font-inter-tight text-[#888888]">
                    Freshness &amp; Renewal
                  </span>
                </div>
              </div>

              {/* Large Editorial Fragrance Photograph Underneath */}
              <div className="relative w-full h-[58%] rounded-xl overflow-hidden bg-[#E7ECE5] mt-5">
                <img
                  src={SEASONAL_PANELS[0].image}
                  alt="Spring — Éclosion Éthérée"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="text-xs font-inter-tight tracking-wide font-light">
                    Lily of the Valley · Fresh Fig Leaf · Grasse Centifolia Rose
                  </div>
                  <button
                    onClick={() =>
                      openFragranceModal(findFragrance(SEASONAL_PANELS[0].fragranceId))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#111111] text-xs font-inter-tight tracking-wider uppercase transition-colors duration-300 shadow-sm"
                  >
                    <span>Discover Fragrance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>

            {/* =================================================================
                PANEL 2: SUMMER — The Radiance
                - Warm champagne, soft golden, sunlit tones
                - Alternate composition: Large photo on top, text underneath
                - Notes: Calabrian Bergamot, Solar Neroli, Warm Amber Salt
                ================================================================= */}
            <article className="w-[64vw] max-w-[960px] h-[68vh] min-h-[500px] max-h-[620px] shrink-0 bg-[#FAF5EC] border border-[#C28E46]/25 rounded-2xl p-7 xl:p-9 flex flex-col justify-between shadow-[0_12px_40px_-8px_rgba(194,142,70,0.12)] relative overflow-hidden group">
              {/* Large Fragrance Image Towards Upper Portion */}
              <div className="relative w-full h-[58%] rounded-xl overflow-hidden bg-[#EFE7D8]">
                <img
                  src={SEASONAL_PANELS[1].image}
                  alt="Summer — Rayon Solaire"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-inter-tight tracking-[0.2em] uppercase text-[#C28E46] font-medium flex items-center gap-1.5 shadow-sm">
                  <Sun className="w-3 h-3 text-[#C28E46]" />
                  <span>02 · SUMMER · RAYON SOLAIRE</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() =>
                      openFragranceModal(findFragrance(SEASONAL_PANELS[1].fragranceId))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#111111] text-xs font-inter-tight tracking-wider uppercase transition-colors duration-300 shadow-sm"
                  >
                    <span>Discover Fragrance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Description Positioned Underneath */}
              <div className="flex justify-between items-end pt-3">
                <div className="max-w-lg">
                  <h3 className="font-serif italic text-3xl sm:text-4xl xl:text-5xl text-[#141312] font-normal tracking-tight">
                    The Radiance
                  </h3>
                  <p className="font-inter-tight font-light text-[#444444] text-sm xl:text-base leading-relaxed mt-2">
                    &ldquo;An endless summer captured in golden light, warmth,
                    and effortless freedom.&rdquo;
                  </p>
                  <p className="text-xs font-inter-tight text-[#888888] tracking-wide mt-2.5">
                    Calabrian Bergamot · Solar Neroli · Warm Amber Salt
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-inter-tight uppercase tracking-widest text-[#C28E46] font-medium block">
                    28% Pure Extrait
                  </span>
                  <span className="text-[11px] font-inter-tight text-[#888888]">
                    Freedom &amp; Golden Evenings
                  </span>
                </div>
              </div>
            </article>

            {/* =================================================================
                PANEL 3: AUTUMN — The Ember
                - Burnt amber, warm brown, muted terracotta, deep olive
                - Asymmetrical side-by-side split composition
                - Notes: Saffron, Spiced Fig, Cedarwood
                ================================================================= */}
            <article className="w-[64vw] max-w-[960px] h-[68vh] min-h-[500px] max-h-[620px] shrink-0 bg-[#F8F2EC] border border-[#8B4E2B]/25 rounded-2xl p-7 xl:p-9 flex gap-8 items-center justify-between shadow-[0_12px_40px_-8px_rgba(139,78,43,0.12)] relative overflow-hidden group">
              {/* Left Column: Title & Descriptive Text */}
              <div className="w-[48%] flex flex-col justify-between h-full py-1">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-inter-tight tracking-[0.22em] uppercase text-[#8B4E2B] mb-2 font-medium">
                    <Flame className="w-3.5 h-3.5" />
                    <span>03 · AUTUMN · FEUILLE D&apos;AMBRE</span>
                  </div>
                  <h3 className="font-serif italic text-3xl sm:text-4xl xl:text-5xl text-[#141312] font-normal tracking-tight">
                    The Ember
                  </h3>
                  <p className="font-inter-tight font-light text-[#444444] text-sm xl:text-base leading-relaxed mt-2.5">
                    &ldquo;An intimate expression of warmth, depth, and the beauty
                    of change.&rdquo;
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t border-[#8B4E2B]/15 pt-3">
                    <span className="text-[11px] font-inter-tight uppercase tracking-widest text-[#8B4E2B] font-medium block mb-1">
                      Key Accords
                    </span>
                    <p className="text-xs font-inter-tight text-[#666666] leading-relaxed">
                      Saffron · Spiced Fig · Cedarwood
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-inter-tight uppercase tracking-widest text-[#8B4E2B] font-medium block">
                        30% Pure Extrait
                      </span>
                      <span className="text-[11px] font-inter-tight text-[#888888]">
                        Warmth &amp; Sophistication
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        openFragranceModal(
                          findFragrance(SEASONAL_PANELS[2].fragranceId)
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs font-inter-tight tracking-wider uppercase transition-colors duration-300 shadow-sm"
                    >
                      <span>Discover Fragrance</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Visually Rich Fragrance Photograph */}
              <div className="w-[52%] h-full rounded-xl overflow-hidden bg-[#E8DDD4] relative">
                <img
                  src={SEASONAL_PANELS[2].image}
                  alt="Autumn — Feuille d'Ambre"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
              </div>
            </article>

            {/* =================================================================
                PANEL 4: WINTER — The Stillness
                - Cool ivory, muted grey, silver, subtle icy blue
                - Central architectural composition
                - Notes: White Musk, Frosted Iris, Cashmere Woods
                ================================================================= */}
            <article className="w-[64vw] max-w-[960px] h-[68vh] min-h-[500px] max-h-[620px] shrink-0 bg-[#F0F4F7] border border-[#4C5B67]/25 rounded-2xl p-7 xl:p-9 flex flex-col justify-between shadow-[0_12px_40px_-8px_rgba(76,91,103,0.12)] relative overflow-hidden group">
              {/* Large Visually Striking Photograph in Upper Area */}
              <div className="relative w-full h-[58%] rounded-xl overflow-hidden bg-[#DCE3E8]">
                <img
                  src={SEASONAL_PANELS[3].image}
                  alt="Winter — Nuit Givrée"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-inter-tight tracking-[0.2em] uppercase text-[#4C5B67] font-medium flex items-center gap-1.5 shadow-sm">
                  <Snowflake className="w-3 h-3 text-[#4C5B67]" />
                  <span>04 · WINTER · NUIT GIVRÉE</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() =>
                      openFragranceModal(findFragrance(SEASONAL_PANELS[3].fragranceId))
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#111111] text-xs font-inter-tight tracking-wider uppercase transition-colors duration-300 shadow-sm"
                  >
                    <span>Discover Fragrance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title and Description Elegantly Positioned Below */}
              <div className="flex justify-between items-end pt-3">
                <div className="max-w-lg">
                  <h3 className="font-serif italic text-3xl sm:text-4xl xl:text-5xl text-[#141312] font-normal tracking-tight">
                    The Stillness
                  </h3>
                  <p className="font-inter-tight font-light text-[#444444] text-sm xl:text-base leading-relaxed mt-2">
                    &ldquo;Where silence becomes elegance, and every breath leaves
                    a lasting impression.&rdquo;
                  </p>
                  <p className="text-xs font-inter-tight text-[#777777] tracking-wide mt-2.5">
                    White Musk · Frosted Iris · Cashmere Woods
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-inter-tight uppercase tracking-widest text-[#4C5B67] font-medium block">
                    30% Pure Extrait
                  </span>
                  <span className="text-[11px] font-inter-tight text-[#888888]">
                    Serenity &amp; Quiet Luxury
                  </span>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Bottom HUD Bar */}
          <div className="max-w-[1520px] w-full mx-auto px-8 lg:px-12 flex items-center justify-between text-xs font-inter-tight text-[#888888]">
            <span>Four Seasons · Four Emotions · Four Fragrances</span>
            <span className="tracking-wider uppercase text-[11px]">
              QUATRÉA ATELIER
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MOBILE & TABLET TOUCH-FRIENDLY HORIZONTAL SWIPE EXPERIENCE
          - Native frictionless touch swipe with snap-x snap-mandatory
          - 16px rounded corners & beautiful proportions
          ========================================================================= */}
      <div className="block lg:hidden px-4 py-8 bg-[#FAF8F5]">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 no-scrollbar scroll-smooth">
          {SEASONAL_PANELS.map((item) => {
            const frag = findFragrance(item.fragranceId);
            const Icon = item.icon;
            return (
              <div
                key={item.season}
                className="snap-center shrink-0 w-[88vw] max-w-[390px] rounded-2xl border border-[#141312]/10 p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white"
                style={{ backgroundColor: item.accentLight }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-inter-tight mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase flex items-center gap-1.5"
                      style={{
                        backgroundColor: item.badgeBg,
                        color: item.accentColor,
                      }}
                    >
                      <Icon className="w-3 h-3" />
                      {item.number} · {item.season}
                    </span>
                    <span className="text-[11px] text-[#777777]">
                      {item.concentration}
                    </span>
                  </div>

                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[#141312] font-normal">
                    {item.poeticTitle}
                  </h3>
                  <p className="font-inter-tight font-light text-[#555555] text-xs sm:text-sm leading-relaxed mt-1.5 mb-4">
                    &ldquo;{item.copy}&rdquo;
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/5 my-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-3 border-t border-[#141312]/8">
                  <p className="text-[11px] font-inter-tight text-[#666666] mb-3">
                    {item.accords.join(" · ")}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-inter-tight font-semibold text-sm text-[#111111] block">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-inter-tight text-[#777777]">
                        {frag.formattedPrice} · 100ml
                      </span>
                    </div>

                    <button
                      onClick={() => openFragranceModal(frag)}
                      className="px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-inter-tight uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Discover</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-[11px] font-inter-tight text-[#888888] tracking-widest uppercase mt-2">
          ← Swipe to explore the seasons →
        </p>
      </div>
    </div>
  );
}
