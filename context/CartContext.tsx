"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Fragrance } from "@/data/fragrances";

export interface CartItem {
  fragrance: Fragrance;
  quantity: number;
  sampleSeason?: string;
  engraving?: string;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (fragrance: Fragrance, engraving?: string) => void;
  removeFromCart: (fragranceId: string) => void;
  updateQuantity: (fragranceId: string, quantity: number) => void;
  totalCount: number;
  subtotal: number;
  selectedSample: string;
  setSelectedSample: (season: string) => void;

  // Fragrance quick view modal
  activeFragranceModal: Fragrance | null;
  openFragranceModal: (fragrance: Fragrance) => void;
  closeFragranceModal: () => void;

  // Scent Finder Concierge Quiz
  isQuizOpen: boolean;
  openQuiz: () => void;
  closeQuiz: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("quatrae_cart");
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<string>("Spring - Éclosion Éthérée");
  const [activeFragranceModal, setActiveFragranceModal] = useState<Fragrance | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("quatrae_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (fragrance: Fragrance, engraving?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.fragrance.id === fragrance.id);
      if (existing) {
        return prev.map((item) =>
          item.fragrance.id === fragrance.id
            ? { ...item, quantity: item.quantity + 1, engraving: engraving || item.engraving }
            : item
        );
      }
      return [...prev, { fragrance, quantity: 1, engraving }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (fragranceId: string) => {
    setCart((prev) => prev.filter((item) => item.fragrance.id !== fragranceId));
  };

  const updateQuantity = (fragranceId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(fragranceId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.fragrance.id === fragranceId ? { ...item, quantity } : item
      )
    );
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.fragrance.price * item.quantity,
    0
  );

  const openFragranceModal = (fragrance: Fragrance) => {
    setActiveFragranceModal(fragrance);
  };

  const closeFragranceModal = () => {
    setActiveFragranceModal(null);
  };

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCount,
        subtotal,
        selectedSample,
        setSelectedSample,
        activeFragranceModal,
        openFragranceModal,
        closeFragranceModal,
        isQuizOpen,
        openQuiz,
        closeQuiz,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
