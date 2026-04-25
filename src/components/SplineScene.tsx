'use client';

import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import SplineLoader from './SplineLoader';

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback to hide loader if it takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.warn("Spline loading timed out, forcing loader hidden.");
        setIsLoading(false);
      }
    }, 15000); // 15 seconds timeout
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] min-h-[300px] rounded-3xl bg-transparent transition-all duration-700">
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10 rounded-3xl mr-7 sm:mr-7.5">
          <SplineLoader />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 backdrop-blur-md z-10 rounded-3xl text-red-500 font-medium">
          Failed to load 3D Universe
        </div>
      )}

      <Spline
        scene="/scene.splinecode"
        onLoad={() => {
          console.log("Spline loaded successfully");
          setIsLoading(false);
        }}
        onError={() => {
          console.error("Spline failed to load");
          setError(true);
          setIsLoading(false);
        }}
        className="w-full h-full ml-7 sm:ml-7.5 "
      />
    </div>
  );
}
