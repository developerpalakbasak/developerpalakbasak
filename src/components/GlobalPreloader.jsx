"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      // Add a slight delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 100);
    };

    window.addEventListener("spline-loaded", handleLoad);
    
    // Fallback: Reveal the site after 3 seconds even if Spline is still loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      window.removeEventListener("spline-loaded", handleLoad);
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-zinc-950 backdrop-blur-md"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated Rings */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-b-violet-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-l-emerald-500 border-r-rose-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
              <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-amber-500 border-b-sky-500 animate-[spin_2s_linear_infinite]"></div>
              
              {/* Center Logo/Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="text-white font-black text-xl tracking-tighter"
                >
                  PB
                </motion.span>
              </div>
            </div>

            {/* Loading Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-cyan-400 text-sm md:text-base font-bold tracking-[0.3em] uppercase">
                Initializing
              </p>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
