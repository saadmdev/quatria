"use client";

import React from "react";

export default function AboutStatementSection() {
  return (
    <section className="w-full bg-white min-h-[65vh] flex flex-col justify-center py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-32">
        <div className="w-full max-w-[1380px]">
          {/* First Section – Bold Heading */}
          <h2 className="font-inter-tight font-semibold text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px] leading-[1.18] tracking-[-0.025em] text-[#111111] mb-8 sm:mb-10 lg:mb-12">
            Great fragrance is not simply worn, it is experienced.
            An art of elegance, crafted to leave a lasting impression.
          </h2>

          {/* Second Section – Light Paragraph with Brand Storytelling */}
          <p className="w-full font-inter-tight font-light text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[35px] 2xl:text-[38px] leading-[1.38] sm:leading-[1.42] tracking-[-0.015em] text-[#222222]">
            Discover a world of exceptional perfumery, where carefully selected
            ingredients meet the art of fine craftsmanship. Every creation tells
            a story through its distinctive notes and character.{" "}
            <strong className="font-semibold text-[#111111]">
              &ldquo;Always inspiring&rdquo;
            </strong>
            ,{" "}
            <strong className="font-semibold text-[#111111]">
              &ldquo;always unforgettable&rdquo;
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
