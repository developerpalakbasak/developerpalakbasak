"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiNginx,
} from "react-icons/si";

/**
 * Spiner Component
 * An interactive, rotating skill wheel that showcases a variety of technical expertise.
 * Features orbiting icons with counter-rotation to maintain orientation.
 */
const Spiner = () => {
  // Collection of tech stack icons with specific brand colors
  const icons = [
    { icon: <SiMongodb size={35} className="text-green-500" /> },
    { icon: <SiExpress size={35} className="custom-icon-color" /> },
    { icon: <FaReact size={35} className="text-cyan-400" /> },
    { icon: <FaNodeJs size={35} className="text-green-500" /> },
    { icon: <SiPostgresql size={35} className="text-blue-400" /> },
    { icon: <FaDocker size={35} className="text-blue-500" /> },
    { icon: <FaAndroid size={35} className="text-green-400" /> },
    { icon: <FaApple size={35} className="custom-icon-color" /> },
    { icon: <SiNginx size={35} className="text-green-500" /> },
    { icon: <FaHtml5 size={35} className="text-orange-500" /> },
    { icon: <FaCss3Alt size={35} className="text-blue-500" /> },
    { icon: <SiNextdotjs size={35} className="custom-icon-color" /> },
    { icon: <span className="font-bold text-xl text-yellow-600">JS</span> },
    { icon: <span className="font-bold text-xl text-blue-600">TS</span> },
  ];

  // Mathematical constants for orbital positioning
  const containerSize = 450; 
  const iconWrapperSize = 65; 
  const radius = containerSize / 2 - iconWrapperSize / 2 - 10; 

  return (
    <div className="relative flex justify-center items-center py-10">
      <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]">
        
        {/* Background Rotating Orbit Path */}
        <div className="absolute top-1/2 left-1/2 h-[82%] w-[82%] border border-slate-400/20 rounded-full animate-rotateCircle -translate-x-1/2 -translate-y-1/2" />

        {/* Central Component Label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border-2 border-primary/50 px-6 py-3 rounded-2xl flex items-center justify-center shadow-xl z-20">
          <span className="font-black uppercase tracking-widest text-xs sm:text-sm">My Expertise</span>
        </div>

        {/* Ambient Corner Glows: Optimized for mobile performance */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-blue-500 blur-[30px] sm:blur-[80px] opacity-10" />
          <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-emerald-500 blur-[30px] sm:blur-[80px] opacity-10" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-pink-500 blur-[30px] sm:blur-[80px] opacity-10" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-yellow-500 blur-[30px] sm:blur-[80px] opacity-10" />

        </div>

        {/* Orbiting Icons Container: Animated via 'spiner' class in globals.css */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 spiner w-full h-full">
          {icons.map((item, index) => {
            const totalIcons = icons.length;
            const angle = (360 / totalIcons) * index - 90;
            const radian = (angle * Math.PI) / 180;
            const x = Number((radius * Math.cos(radian)).toFixed(3));
            const y = Number((radius * Math.sin(radian)).toFixed(3));

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Individual Icon Wrapper: Counter-rotates to stay upright */}
                <div className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] p-2 rounded-2xl spiner-icon-bg shadow-xl hover:scale-125 transition-transform duration-300 flex items-center justify-center border border-card-border">
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Spiner;
