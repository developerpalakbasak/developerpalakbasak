"use client";
import React from "react";

/**
 * Footer Component
 * A minimalist footer that reinforces the brand's commitment to quality.
 */
const Footer = () => {
  return (
    <div className="px-2">
<<<<<<< HEAD
  <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mb-5 p-2 sm:p-4 md:p-5 lg:p-6 2xl:p-12 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] flex flex-col justify-center items-center gap-1 bg-card/80 shadow-sm">
=======
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-5 p-2 sm:p-4 md:p-5 lg:p-6 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col justify-center items-center gap-1 bg-card/80">
>>>>>>> c45f7d51bed25a314f2c5db1b3ddf6d36ec32e20

      {/* Brand Tagline: Professional commitment statement with a gradient effect */}
      <p className="text-sm sm:text-base md:text-lg 2xl:text-3xl font-semibold bg-gradient-to-r from-primary via-emerald-500 to-cyan-500 bg-clip-text text-transparent italic tracking-wide text-center">
        "Committed to Delivering Excellence and High-Quality Digital Products"
      </p>

      {/* Copyright or Branding notice */}
      <p className="text-xs 2xl:text-xl text-muted-foreground mt-2">
        © {new Date().getFullYear()} DeveloperPalak. All rights reserved.
      </p>
    </div>
  </div>
  );
};

export default Footer;
