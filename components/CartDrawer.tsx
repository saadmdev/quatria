"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ArrowRight, Sparkles, Gift } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalCount,
    subtotal,
    selectedSample,
    setSelectedSample,
  } = useCart();

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      closeCart();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141312]/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#141312]/10 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#141312]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-[#141312]">
                Your Shopping Bag
              </span>
              <span className="text-xs font-sans text-[#7D766C]">
                ({totalCount})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-[#141312] hover:text-[#C8A97E] transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#141312] text-[#C8A97E] flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#141312]">
                  Allocation Reserved
                </h3>
                <p className="text-sm text-[#5D574F] max-w-xs font-light">
                  Merci for your patronage. Your flacons are being hand-packaged in our Parisian atelier.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <p className="font-serif text-2xl text-[#141312]">
                  Your bag is empty.
                </p>
                <p className="text-xs text-[#7B7368] font-light max-w-xs">
                  Discover our four seasonal extraits de parfum and select your signature essence.
                </p>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#141312] text-[#FAF8F5] text-[11px] font-sans tracking-[0.16em] uppercase rounded-[2px]"
                >
                  Explore Fragrances
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Alert */}
                <div className="bg-[#F4EFEB] p-3 rounded-[3px] border border-[#C8A97E]/30 flex items-center gap-2.5 text-xs text-[#5D574F]">
                  <Sparkles className="w-4 h-4 text-[#C8A97E] shrink-0" />
                  <span>Complimentary white-glove courier shipping applied.</span>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.fragrance.id}
                      className="flex gap-4 p-4 bg-white rounded-[3px] border border-[#141312]/8 shadow-sm"
                    >
                      <div className="w-20 h-24 bg-[#EAE4DC] rounded-[2px] overflow-hidden shrink-0">
                        <img
                          src={item.fragrance.image}
                          alt={item.fragrance.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-sans text-[#888177] uppercase tracking-wider">
                            <span>{item.fragrance.season}</span>
                            <span>{item.fragrance.volume}</span>
                          </div>
                          <h4 className="font-serif text-lg text-[#141312]">
                            {item.fragrance.name}
                          </h4>
                          <span className="text-xs font-sans text-[#141312] font-medium block mt-0.5">
                            {item.fragrance.formattedPrice}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#141312]/6">
                          <div className="flex items-center space-x-2 border border-[#141312]/15 px-2 py-0.5 rounded-[2px]">
                            <button
                              onClick={() =>
                                updateQuantity(item.fragrance.id, item.quantity - 1)
                              }
                              className="text-[#141312] hover:text-[#C8A97E] p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-sans px-2">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.fragrance.id, item.quantity + 1)
                              }
                              className="text-[#141312] hover:text-[#C8A97E] p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.fragrance.id)}
                            className="text-[#9E968B] hover:text-[#141312] transition-colors p-1"
                            title="Remove flacon"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complimentary 2ml Discovery Sample Selection */}
                <div className="bg-[#F4EFEB] p-4 rounded-[4px] border border-[#141312]/8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#141312]">
                    <Gift className="w-4 h-4 text-[#C8A97E]" />
                    <span>Complimentary 2ml Extrait Sample</span>
                  </div>
                  <p className="text-[11px] text-[#615B53] font-light">
                    Every order includes a 2ml glass vial to test before unsealing your 100ml bottle.
                  </p>
                  <select
                    value={selectedSample}
                    onChange={(e) => setSelectedSample(e.target.value)}
                    className="w-full bg-white border border-[#141312]/15 rounded-[2px] p-2 text-xs text-[#141312] focus:outline-none focus:border-[#C8A97E]"
                  >
                    {FRAGRANCES.map((f) => (
                      <option key={f.id} value={`${f.season} - ${f.name}`}>
                        Sample: {f.season} — {f.name} (2ml Extrait)
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && !checkoutComplete && (
            <div className="p-6 border-t border-[#141312]/10 bg-white space-y-4">
              <div className="flex items-center justify-between text-xs font-sans text-[#7D766C]">
                <span>Worldwide Courier Shipping</span>
                <span className="text-[#141312] uppercase tracking-wider">
                  Complimentary
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-sans text-[#141312]">
                <span className="font-serif text-xl">Subtotal</span>
                <span className="font-serif text-2xl font-normal">
                  €{subtotal}
                </span>
              </div>
              <p className="text-[10px] text-[#8C857B] font-light text-center">
                Hand-bottled and inspected in Paris. All local taxes &amp; duties included.
              </p>
              <button
                onClick={handleCheckout}
                className="luxury-btn w-full py-4 bg-[#141312] hover:bg-[#252321] text-[#FAF8F5] text-xs font-sans tracking-[0.2em] uppercase rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Proceed To Secure Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#C8A97E]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
