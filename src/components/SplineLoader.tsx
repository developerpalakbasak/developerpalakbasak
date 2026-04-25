"use client";
import React from "react";

/**
 * SplineLoader Component
 * A high-end visual placeholder displayed while complex 3D Spline scenes are loading.
 * Features multi-layered rotating rings and centered branding.
 */
const SplineLoader = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-transparent">
      <div className="relative w-24 h-24">
        {/* Multi-layered Animated Rings: Creates a sophisticated loading effect */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-b-violet-500 animate-spin" />
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-l-emerald-500 border-r-rose-500 animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-amber-500 border-b-sky-500 animate-[spin_2s_linear_infinite]" />

        {/* Center Branding/Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-foreground font-black text-xl tracking-tighter">
            PB
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplineLoader;
