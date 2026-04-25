"use client";
import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    // Detect mobile to reduce star count for performance
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 40 : 120;

    const generatedStars = Array.from({ length: starCount }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 20, // Slower: between 20s and 30s
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="star-section fixed opacity-20 top-0 left-0 w-full h-full overflow-hidden -z-10">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            // animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
