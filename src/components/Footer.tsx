"use client";
import React from "react";

/**
 * Footer Component
 * A minimalist footer that reinforces the brand's commitment to quality.
 */
const Footer = () => {
  return (
    <div className="w-[95%] md:w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mb-5 p-3 sm:p-4 md:p-5 lg:p-6 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col justify-center items-center gap-1 bg-card/80">

      {/* Brand Tagline: Professional commitment statement with a gradient effect */}
      <p className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-primary via-emerald-500 to-cyan-500 bg-clip-text text-transparent italic tracking-wide text-center">
        "Committed to Delivering Excellence and High-Quality Digital Products"
      </p>
      
      {/* Copyright or Branding notice */}
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} DeveloperPalak. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
