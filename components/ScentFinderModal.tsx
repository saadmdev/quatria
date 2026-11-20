"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";
import { X, Sparkles, Compass, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  prompt: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    season: "Spring" | "Summer" | "Autumn" | "Winter";
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "Which natural atmosphere resonates most deeply with your spirit?",
    subtitle: "Select the landscape that evokes your truest peace.",
    options: [
      {
        label: "Grasse Dawn & Dewy Petals",
        description: "Cool morning mist evaporating over fresh May roses and wet green foliage.",
        season: "Spring",
      },
      {
        label: "Golden Hour on the Côte d'Azur",
        description: "Sun-drenched sea rocks, bitter orange groves, and warm salt breezes.",
        season: "Summer",
      },
      {
        label: "Parisian Autumn Twilight",
        description: "Golden leaves falling onto wet cobblestones, curls of chimney smoke, and cashmere.",
        season: "Autumn",
      },
      {
        label: "Midnight Alpine Silence",
        description: "Frost crystals clinging to dark silver pine boughs under a cold canopy of stars.",
        season: "Winter",
      },
    ],
  },
  {
    id: 2,
    prompt: "What emotional state do you wish your fragrance to embody?",
    subtitle: "A perfume is an emotional talisman worn upon the skin.",
    options: [
      {
        label: "Awakening & Luminous Rebirth",
        description: "A tender, dewy clarity filled with youthful anticipation and morning light.",
        season: "Spring",
      },
      {
        label: "Radiant Freedom & Solar Warmth",
        description: "An intoxicating, sensual vitality that beams like midsummer sunlight.",
        season: "Summer",
      },
      {
        label: "Intimate Nostalgia & Contemplation",
        description: "A reassuring, deeply textured warmth reminiscent of old library books and fires.",
        season: "Autumn",
      },
      {
        label: "Serene Mystery & Transcendence",
        description: "An architectural, quiet elevation that brings stillness to the mind.",
        season: "Winter",
      },
    ],
  },
  {
    id: 3,
    prompt: "Which aromatic accords naturally draw you in?",
    subtitle: "The tactile textures of raw botanical perfumery.",
    options: [
      {
        label: "Dew-Kissed Lily, Fig Leaf & Iris",
        description: "Fresh, crystalline, delicately powdered floral green notes.",
        season: "Spring",
      },
      {
        label: "Calabrian Bergamot, Neroli & Golden Amber",
        description: "Solar citrus blossoms, sea salt spray, and warm honeyed resins.",
        season: "Summer",
      },
      {
        label: "Smoked Cedar, Cardamom & Tonka Bean",
        description: "Rich woody ambers, exotic spices, and sweet comforting balms.",
        season: "Autumn",
      },
      {
        label: "Frosted Juniper, Silver Pine & Frankincense",
        description: "Chilled mineral air, sacred conifer resins, and pale smoke.",
        season: "Winter",
      },
    ],
  },
];

export default function ScentFinderModal() {
  const { isQuizOpen, closeQuiz, addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<"Spring" | "Summer" | "Autumn" | "Winter", number>>({
    Spring: 0,
    Summer: 0,
    Autumn: 0,
    Winter: 0,
  });
  const [matchedFragrance, setMatchedFragrance] = useState<Fragrance | null>(null);

  if (!isQuizOpen) return null;

  const handleSelectOption = (season: "Spring" | "Summer" | "Autumn" | "Winter") => {
    const newScores = { ...scores, [season]: scores[season] + 1 };
    setScores(newScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine winner
      let highestSeason: "Spring" | "Summer" | "Autumn" | "Winter" = "Spring";
      let maxScore = -1;
      const entries = Object.entries(newScores) as [("Spring" | "Summer" | "Autumn" | "Winter"), number][];
      for (const [s, count] of entries) {
        if (count > maxScore) {
          maxScore = count;
          highestSeason = s;
        }
      }
      const match = FRAGRANCES.find((f) => f.season === highestSeason) || FRAGRANCES[0];
      setMatchedFragrance(match);
      setCurrentStep(QUESTIONS.length);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ Spring: 0, Summer: 0, Autumn: 0, Winter: 0 });
    setMatchedFragrance(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141312]/80 backdrop-blur-md transition-opacity"
        onClick={closeQuiz}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-[6px] shadow-2xl border border-[#141312]/15 p-8 lg:p-10 z-10 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeQuiz}
            className="absolute top-5 right-5 p-2 text-[#141312] hover:text-[#C8A97E] transition-colors"
            aria-label="Close Quiz"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Quiz Header */}
          <div className="text-center mb-8 pb-6 border-b border-[#141312]/10">
            <div className="inline-flex items-center gap-2 mb-2">
              <Compass className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-[#7D766C]">
                L&apos;Oracle des Saisons
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#141312]">
              Find Your Seasonal Essence
            </h3>
            {currentStep < QUESTIONS.length && (
              <span className="text-[11px] font-sans text-[#888177] tracking-widest uppercase block mt-1">
                Question {currentStep + 1} of {QUESTIONS.length}
              </span>
            )}
          </div>

          {/* Step Questions */}
          {currentStep < QUESTIONS.length ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#141312] mb-1">
                  {QUESTIONS[currentStep].prompt}
                </h4>
                <p className="text-xs text-[#6B655D] font-light">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleSelectOption(option.season)}
                    className="p-4 rounded-[4px] bg-[#F4EFEB] hover:bg-white border border-[#141312]/8 hover:border-[#C8A97E] text-left transition-all duration-300 group flex items-start justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-serif text-lg text-[#141312] group-hover:text-[#8B6E4A] transition-colors block">
                        {option.label}
                      </span>
                      <span className="text-xs text-[#5D574F] font-light mt-1 block">
                        {option.description}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888177] group-hover:text-[#C8A97E] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : matchedFragrance ? (
            /* Results Step */
            <div className="text-center space-y-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A97E]/20 text-[#141312] text-xs font-sans tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Your Olfactory Signature</span>
              </div>

              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#7D766C] block">
                  {matchedFragrance.seasonNumber} · {matchedFragrance.season}
                </span>
                <h4 className="font-serif text-4xl sm:text-5xl text-[#141312] mt-1">
                  {matchedFragrance.name}
                </h4>
                <p className="font-serif italic text-lg text-[#786D5F] mt-1">
                  &ldquo;{matchedFragrance.tagline}&rdquo;
                </p>
              </div>

              <div className="aspect-[16/9] max-w-sm mx-auto rounded-[4px] overflow-hidden bg-[#EAE4DC] border border-[#141312]/10 shadow-md">
                <img
                  src={matchedFragrance.image}
                  alt={matchedFragrance.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-light text-[#59524A] max-w-md mx-auto leading-relaxed">
                Your responses reveal an innate resonance with{" "}
                <strong className="font-medium text-[#141312]">
                  {matchedFragrance.emotion.toLowerCase()}
                </strong>
                . This extrait features {matchedFragrance.notes.heart.join(", ")}.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#141312]/10">
                <button
                  onClick={() => {
                    addToCart(matchedFragrance);
                    closeQuiz();
                  }}
                  className="luxury-btn w-full sm:w-auto px-8 py-3.5 bg-[#141312] hover:bg-[#252321] text-[#FAF8F5] text-xs font-sans tracking-[0.18em] uppercase rounded-[2px] transition-colors"
                >
                  Acquire {matchedFragrance.name} ({matchedFragrance.formattedPrice})
                </button>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#7D766C] hover:text-[#141312] py-2 px-4"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
