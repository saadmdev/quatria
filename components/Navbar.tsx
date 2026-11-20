"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";

export default function Navbar() {
  const { totalCount, openCart, openQuiz, openFragranceModal } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authSuccess, setAuthSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authEmail) {
      setAuthSuccess(true);
      setTimeout(() => {
        setAuthSuccess(false);
        setAuthModalOpen(false);
        setAuthEmail("");
      }, 2500);
    }
  };

  const filteredFragrances = searchQuery.trim()
    ? FRAGRANCES.filter(
        (f) =>
          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.season.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.notes.heart.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <>
      {/* Awwwards-Exact Full-Width Header Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#EBEBEB] border-b border-[#D8D8D8] ${
          isScrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="w-full px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          {/* LEFT GROUP: Logo + Navigation Links */}
          <div className="flex items-center space-x-6 xl:space-x-8">
            {/* Logo / Brand Mark (Awwwards W. style) */}
            <a href="#" className="flex items-center py-1 group shrink-0">
              <span className="font-serif text-2xl tracking-[0.16em] uppercase font-bold text-[#111111] group-hover:opacity-80 transition-opacity">
                Quatréa
              </span>
            </a>

            {/* Desktop Navigation Links (Immediately next to logo) */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] font-sans font-medium text-[#111111]">
              {/* Collections with Dropdown Chevron */}
              <div
                className="relative"
                onMouseEnter={() => setCollectionsDropdown(true)}
                onMouseLeave={() => setCollectionsDropdown(false)}
              >
                <a
                  href="#collection"
                  className="flex items-center gap-1 hover:text-[#555555] transition-colors py-2"
                >
                  <span>Collections</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#555555] transition-transform duration-200 ${
                      collectionsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {/* Dropdown Menu */}
                {collectionsDropdown && (
                  <div className="absolute left-0 top-full pt-1 w-64 z-50">
                    <div className="bg-white border border-[#E0E0E0] rounded-[8px] p-2 shadow-xl animate-fadeIn">
                      <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#888888] font-bold border-b border-[#EEEEEE]">
                        The Four Seasons
                      </div>
                      {FRAGRANCES.map((frag) => (
                        <div
                          key={frag.id}
                          onClick={() => {
                            setCollectionsDropdown(false);
                            openFragranceModal(frag);
                          }}
                          className="px-3 py-2 hover:bg-[#F5F5F5] rounded-[4px] cursor-pointer transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-serif font-medium text-[#111111] block">
                              {frag.name}
                            </span>
                            <span className="text-[10px] text-[#777777] block">
                              {frag.season} · {frag.formattedPrice}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#A5845E] font-sans font-semibold">
                            {frag.seasonNumber}
                          </span>
                        </div>
                      ))}
                      <div className="pt-1 mt-1 border-t border-[#EEEEEE]">
                        <a
                          href="#collection"
                          onClick={() => setCollectionsDropdown(false)}
                          className="px-3 py-1.5 text-xs text-[#111111] hover:text-[#A5845E] font-medium block"
                        >
                          View All Flacons →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Story */}
              <a
                href="#philosophy"
                className="hover:text-[#555555] transition-colors py-2"
              >
                Our Story
              </a>

              {/* The Four Seasons (with Awwwards "New" Badge) */}
              <a
                href="#seasons"
                className="hover:text-[#555555] transition-colors py-2 flex items-center"
              >
                <span>The Four Seasons</span>
                <span className="bg-[#111111] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] ml-1.5 uppercase tracking-wide">
                  New
                </span>
              </a>

              {/* The Atelier */}
              <a
                href="#campaign"
                className="hover:text-[#555555] transition-colors py-2"
              >
                The Atelier
              </a>
            </nav>
          </div>

          {/* CENTER: Expansive Search Bar (Awwwards Style) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 xl:mx-10 relative">
            <div className="w-full flex items-center bg-[#DFDFDF] hover:bg-[#D7D7D7] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#111111] transition-all rounded-[8px] px-3.5 h-[38px]">
              <Search className="w-4 h-4 text-[#777777] mr-2.5 shrink-0 stroke-[1.75]" />
              <input
                type="text"
                placeholder="Search by Inspiration, notes, seasons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 250)}
                className="bg-transparent border-none outline-none w-full text-[13px] text-[#111111] placeholder-[#777777] font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#777777] hover:text-[#111111] p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Instant Search Results Dropdown */}
            {searchFocused && filteredFragrances.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#E0E0E0] rounded-[8px] p-2 shadow-2xl z-50 animate-fadeIn">
                <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#888888] font-bold">
                  Matched Fragrances
                </div>
                {filteredFragrances.map((f) => (
                  <div
                    key={f.id}
                    onMouseDown={() => openFragranceModal(f)}
                    className="p-2.5 hover:bg-[#F5F5F5] rounded-[4px] cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-serif font-medium text-[#111111] block">
                        {f.name}
                      </span>
                      <span className="text-[11px] text-[#666666] block">
                        {f.season} · {f.family}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#111111]">
                      {f.formattedPrice}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT GROUP: Log in / Sign Up + 2 Pill Action Buttons (Awwwards Style) */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-[13px] font-sans font-medium text-[#111111]">
            {/* Log in */}
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="hover:opacity-75 transition-opacity py-1 whitespace-nowrap"
            >
              Log in
            </button>

            {/* Sign Up */}
            <button
              onClick={() => {
                setAuthMode("signup");
                setAuthModalOpen(true);
              }}
              className="hover:opacity-75 transition-opacity py-1 whitespace-nowrap"
            >
              Sign Up
            </button>

            {/* Solid Black Button (Awwwards "Be Pro" equivalent) */}
            <button
              onClick={openCart}
              aria-label="Open Shopping Bag"
              className="bg-[#111111] hover:bg-[#252525] text-white px-4 py-2 rounded-[6px] text-[13px] font-medium transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[2]" />
              <span>Bag ({totalCount})</span>
            </button>

            {/* Outlined Button (Awwwards "Submit Website" equivalent) */}
            <button
              onClick={openQuiz}
              className="border border-[#111111] bg-transparent hover:bg-[#111111] hover:text-white text-[#111111] px-4 py-2 rounded-[6px] text-[13px] font-medium transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Find Your Season</span>
            </button>
          </div>

          {/* MOBILE CONTROLS (Right) */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Bag Icon on Mobile */}
            <button
              onClick={openCart}
              aria-label="Open Shopping Bag"
              className="p-1.5 text-[#111111] hover:opacity-75 transition-opacity relative"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#111111] text-white text-[9px] font-sans font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="text-[#111111] p-1.5 hover:opacity-75 transition-opacity"
            >
              <Menu className="w-5 h-5 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#111111]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#EBEBEB] p-6 flex flex-col justify-between shadow-2xl z-10 border-l border-[#D8D8D8]">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D8D8]">
                <span className="font-serif text-xl tracking-[0.16em] uppercase font-bold text-[#111111]">
                  Quatréa
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#111111] hover:opacity-75"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5 stroke-[1.75]" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mt-5 flex items-center bg-[#DFDFDF] rounded-[8px] px-3.5 h-[38px]">
                <Search className="w-4 h-4 text-[#777777] mr-2 shrink-0 stroke-[1.75]" />
                <input
                  type="text"
                  placeholder="Search by Inspiration..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-[13px] text-[#111111] placeholder-[#777777] font-sans"
                />
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 flex flex-col space-y-4 text-sm font-sans font-medium text-[#111111]">
                <a
                  href="#collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 flex items-center justify-between hover:text-[#555555] transition-colors"
                >
                  <span>Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#777777]" />
                </a>
                <a
                  href="#philosophy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 flex items-center justify-between hover:text-[#555555] transition-colors"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#777777]" />
                </a>
                <a
                  href="#seasons"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 flex items-center justify-between hover:text-[#555555] transition-colors"
                >
                  <div className="flex items-center">
                    <span>The Four Seasons</span>
                    <span className="bg-[#111111] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] ml-1.5 uppercase">
                      New
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#777777]" />
                </a>
                <a
                  href="#campaign"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 flex items-center justify-between hover:text-[#555555] transition-colors"
                >
                  <span>The Atelier</span>
                  <ArrowRight className="w-4 h-4 text-[#777777]" />
                </a>
              </nav>

              {/* Mobile Action Buttons */}
              <div className="mt-8 pt-6 border-t border-[#D8D8D8] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuiz();
                  }}
                  className="w-full py-2.5 px-4 border border-[#111111] bg-transparent text-[#111111] text-xs font-medium rounded-[6px] transition-colors text-center"
                >
                  Find Your Season
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 bg-[#111111] text-white text-xs font-medium rounded-[6px] transition-colors text-center"
                >
                  Log in / Sign Up
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8D8D8] text-[11px] font-sans text-[#777777] text-center">
              International Luxury Perfumery
            </div>
          </div>
        </div>
      )}

      {/* Login / Sign Up Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#111111]/60 backdrop-blur-sm"
            onClick={() => setAuthModalOpen(false)}
          />

          <div className="relative bg-[#FAF8F5] border border-[#111111]/15 rounded-[8px] p-8 max-w-md w-full shadow-2xl z-10 animate-fadeIn">
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-5 right-5 text-[#111111] hover:opacity-75"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="font-serif text-2xl uppercase tracking-[0.16em] text-[#111111] font-bold block">
                Quatréa
              </span>
              <p className="text-xs font-sans uppercase tracking-widest text-[#777777] mt-1">
                {authMode === "login" ? "Account Access" : "Join The Patron Circle"}
              </p>
            </div>

            {authSuccess ? (
              <div className="p-4 bg-[#EBEBEB] rounded-[6px] text-center text-xs text-[#111111] border border-[#111111]/20">
                Welcome to Quatréa. Your access credentials have been authorized.
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-[#777777] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-[#D8D8D8] rounded-[6px] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-[#777777] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white border border-[#D8D8D8] rounded-[6px] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#111111] hover:bg-[#252525] text-white text-xs font-sans tracking-[0.16em] uppercase rounded-[6px] transition-colors"
                >
                  {authMode === "login" ? "Log in" : "Sign Up"}
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                    className="text-[11px] font-sans text-[#777777] hover:text-[#111111] underline tracking-wider"
                  >
                    {authMode === "login"
                      ? "New to Quatréa? Create an account"
                      : "Already have an account? Log in"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
