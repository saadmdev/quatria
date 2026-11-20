"use client";

import React, { useState } from "react";
import { MapPin, Clock, Check, ArrowRight } from "lucide-react";

export default function BrandCampaignSection() {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientEmail && clientName) {
      setBookingSuccess(true);
      setTimeout(() => {
        setShowBookingForm(false);
      }, 4000);
    }
  };

  return (
    <section
      id="campaign"
      className="py-28 lg:py-40 bg-[#121110] text-[#FAF8F5] relative overflow-hidden border-b border-white/10"
    >
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1800&q=85"
          alt="Parisian Salon Fragrance Campaign"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110]/85 to-[#121110]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Editorial Message */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.24em] uppercase text-[#C8A97E]">
              <span className="w-8 h-[1px] bg-[#C8A97E]" />
              <span>05 · Le Salon Privé</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] tracking-tight">
              Time is the <br />
              <span className="italic font-light text-[#D8C3A5]">
                Ultimate Luxury.
              </span>
            </h2>

            <p className="max-w-xl text-[#B3ACA2] text-base lg:text-lg font-light leading-relaxed">
              Step beyond the bustling avenues of Place Vendôme into our private
              olfactory sanctuary. Experience the raw botanical extraits before
              they are blended, guided personally by our resident parfumeur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs font-sans text-[#A8A196]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#FAF8F5] font-medium">
                    14 Rue de Castiglione
                  </span>
                  <span>75001 Paris, France</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#FAF8F5] font-medium">
                    Mardi — Samedi
                  </span>
                  <span>10:30 — 19:30 · By Appointment</span>
                </div>
              </div>
            </div>

            {/* Appointment Booking Toggle */}
            <div className="pt-4">
              {!showBookingForm ? (
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="luxury-btn inline-flex items-center gap-3 bg-[#FAF8F5] hover:bg-[#EAE4DC] text-[#121110] px-8 py-4 rounded-[4px] text-xs font-sans tracking-[0.18em] uppercase transition-all duration-300 shadow-lg group"
                >
                  <span>Request Private Olfactory Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A97E] group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <div className="bg-[#1C1A18] p-6 rounded-[4px] border border-white/15 max-w-md">
                  {bookingSuccess ? (
                    <div className="flex items-center gap-3 text-sm text-[#C8A97E]">
                      <Check className="w-5 h-5 text-[#C8A97E]" />
                      <span>
                        Merci. Our Paris Concierge will confirm your private
                        appointment within 24 hours.
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleBooking} className="space-y-4">
                      <span className="block text-xs font-sans tracking-widest uppercase text-[#D8C3A5]">
                        Paris Salon Appointment Request
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-[#121110] border border-white/20 rounded-[2px] px-4 py-2.5 text-xs text-[#FAF8F5] placeholder-[#787169] focus:outline-none focus:border-[#C8A97E]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-[#121110] border border-white/20 rounded-[2px] px-4 py-2.5 text-xs text-[#FAF8F5] placeholder-[#787169] focus:outline-none focus:border-[#C8A97E]"
                      />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="flex-1 py-2.5 bg-[#C8A97E] hover:bg-[#B5966B] text-[#121110] text-[11px] font-sans tracking-[0.16em] uppercase rounded-[2px] font-medium transition-colors"
                        >
                          Confirm Invitation
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowBookingForm(false)}
                          className="px-4 py-2.5 border border-white/20 text-[11px] text-[#A8A196] hover:text-[#FAF8F5]"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Editorial Campaign Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85"
                alt="Quatréa Parisian Flacon Architecture"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-center border-t border-white/15 pt-4">
                <span className="font-serif italic text-lg text-[#FAF8F5]">
                  &ldquo;L&apos;Essence Pure de Paris&rdquo;
                </span>
                <span className="block font-sans text-[10px] tracking-[0.24em] uppercase text-[#C8A97E] mt-1">
                  14 Rue de Castiglione · Paris 1er
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
