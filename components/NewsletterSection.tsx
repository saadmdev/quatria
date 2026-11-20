"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles, Compass } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { openQuiz } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      id="find-your-season"
      className="py-24 lg:py-36 bg-[#FAF8F5] border-b border-[#141312]/8 text-[#141312] relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-white rounded-3xl border border-[#141312]/8 p-8 sm:p-14 lg:p-16 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C8A97E]/10 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Emblem / Label */}
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
              <span className="text-[11px] sm:text-xs font-inter-tight tracking-[0.28em] uppercase text-[#7D766C] font-medium">
                FIND YOUR SEASON · BESPOKE DISCOVERY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            </div>

            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#141312] tracking-tight">
              Find Your Seasonal Signature
            </h2>

            <p className="mt-5 text-[#5A544C] text-base sm:text-lg font-inter-tight font-light leading-relaxed max-w-2xl mx-auto">
              Not certain which season reflects your essence? Take our interactive
              fragrance concierge quiz to discover your personal signature, or
              request our complimentary Discovery Set correspondence.
            </p>

            {/* Two Action Routes */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openQuiz}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs font-inter-tight tracking-[0.18em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 group"
              >
                <Compass className="w-4 h-4 text-[#C8A97E] group-hover:rotate-45 transition-transform duration-500" />
                <span>Take The Scent Quiz</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Email Dispatch Input */}
            <div className="mt-10 pt-10 border-t border-[#141312]/8 max-w-md mx-auto">
              <span className="text-[11px] font-inter-tight uppercase tracking-widest text-[#7D766C] block mb-3">
                Or join the Quatréa Seasonal Dispatch
              </span>

              {subscribed ? (
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#C8A97E]/30 text-center animate-fadeIn">
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-[#C8A97E] mx-auto flex items-center justify-center mb-2 shadow-sm">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif italic text-lg text-[#141312]">
                    Welcome to Quatréa
                  </h3>
                  <p className="text-xs text-[#666666] font-inter-tight font-light mt-1">
                    Your correspondence has been registered. You will receive
                    our seasonal allocation dispatch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 bg-[#FAF8F5] rounded-full border border-[#141312]/15 text-xs font-inter-tight text-[#141312] placeholder-[#999999] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs font-inter-tight tracking-wider uppercase transition-colors shrink-0 shadow-sm"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
