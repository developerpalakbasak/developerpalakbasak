"use client";
import React, { Suspense, useState } from "react";
import {
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaLinkedinIn,
  FaAndroid,
  FaApple,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRefinedgithub,
  SiUpwork,
  SiElectron,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import dynamic from "next/dynamic";
import SplineLoader from "./SplineLoader";
import Typewriter from "./TypeWriter";

/**
 * Dynamically import Spline to avoid SSR issues and improve initial page load performance.
 */
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

/**
 * Hero Component
 * The main landing section featuring an interactive 3D scene, social links, and a brief professional summary.
 * Designed with a high-end, futuristic aesthetic using glassmorphism and dynamic animations.
 */
const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  // Social media links and icons for professional outreach
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      to: "https://www.linkedin.com/in/palak-basak-a05510208/",
      label: "LinkedIn",
    },
    {
      icon: <SiRefinedgithub />,
      to: "https://github.com/developerpalakbasak",
      label: "GitHub",
    },
    {
      icon: <SiUpwork />,
      to: "https://www.upwork.com/freelancers/~01497f6abe72a2a2ac",
      label: "Upwork",
    },
  ];

  // Tech stack icons for the hero section: Visual representation of core skills
  const skillsIcon = [
    { icon: <FaHtml5 size={30} />, name: "HTML5", bg: "bg-orange-500", text: "text-white" },
    { icon: <FaCss3Alt size={30} />, name: "CSS3", bg: "bg-blue-500", text: "text-white" },
    { icon: <SiTailwindcss size={30} />, name: "Tailwind CSS", bg: "bg-sky-400", text: "text-white" },
    { customIcon: "JS", name: "JavaScript", bg: "bg-amber-300", text: "text-slate-900" },
    { customIcon: "TS", name: "TypeScript", bg: "bg-blue-600", text: "text-white" },
    { icon: <SiMongodb size={30} />, name: "MongoDB", bg: "bg-green-600", text: "text-white" },
    { icon: <SiExpress size={30} />, name: "Express", bg: "bg-slate-200", text: "text-black" },
    { icon: <FaReact size={30} />, name: "React", bg: "bg-cyan-500", text: "text-white" },
    { icon: <FaNodeJs size={30} />, name: "Node.js", bg: "bg-green-500", text: "text-white" },
    { icon: <TbBrandNextjs size={30} />, name: "Next.js", bg: "bg-zinc-800", text: "text-white" },
    { icon: <SiElectron size={30} />, name: "Electron.js", bg: "bg-[#2b2e3a]", text: "text-[#9feaf9]" },
    { icon: <FaReact size={30} />, name: "React Native", bg: "bg-cyan-700", text: "text-white" },
    { icon: <FaAndroid size={30} />, name: "Android", bg: "bg-green-600", text: "text-white" },
    { icon: <FaApple size={30} />, name: "iOS", bg: "bg-zinc-900", text: "text-white" },
  ];

  const quotes = ["Web Apps", "Android Apps", "iOS Apps", "Desktop Apps"];

  return (
    <div className="w-full py-8 px-6 sm:py-10 sm:px-12 bg-card/80 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl flex gap-8 md:gap-12 flex-col md:flex-row items-center overflow-hidden shadow-2xl relative">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Column: Interactive 3D Spline scene and Social Links */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative z-10">
        <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-square rounded-3xl overflow-hidden">
          {!isSplineLoaded && (
            <div className="absolute inset-0 z-20 bg-background/50 backdrop-blur-md flex items-center justify-center">
              <SplineLoader />
            </div>
          )}
          <Suspense fallback={<SplineLoader />}>
            <Spline
              scene="/scene.splinecode"
              className="w-full h-full ml-6"
              onLoad={() => {
                setIsSplineLoaded(true);
                window.dispatchEvent(new CustomEvent("spline-loaded"));
              }}
            />
          </Suspense>
        </div>

        {/* Social Icons Strip: Professional network access */}
        <div className="flex gap-4 mt-6 text-xl">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 border-2 border-primary text-primary hover:text-white hover:bg-primary rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/10"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Column: Introduction and Professional Identity */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
        <p className="text-xs sm:text-base lg:text-lg font-bold tracking-widest text-primary uppercase mb-2">
          👋 Welcome to my universe
        </p>

        <div>
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black mt-1 leading-tight">
            I'm <span className="text-gradient">Palak Basak</span>
            <br />
            <span className="text-gradient">Digital Architect.</span>
          </h1>

          <div className="relative mt-2">
            {/* Visual connector for the typewriter effect */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full hidden md:block opacity-90 animate-glow-cycle" />
            <span className="flex md:ml-6">
              <Typewriter quotes={quotes} className={"text-base sm:text-3xl text-primary font-black uppercase tracking-widest"} />
            </span>
          </div>
        </div>

        <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl font-medium sm:font-normal">
          Engineering <span className="text-primary font-bold">high-performance ecosystems</span> where design meets functionality. I specialize in building scalable web and mobile solutions for Android & iOS.
        </p>

        {/* Horizontal Tech Stack Grid: Displays core technology proficiency */}
        <div className="mt-8 flex flex-col items-center md:items-start">
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {skillsIcon.map((item, index) => (
              <div
                key={index}
                title={item.name}
                className={`p-1 flex justify-center items-center rounded-xl ${item.bg} ${item.text} h-11 w-11 hover:scale-125 transition-all duration-300 cursor-help shadow-lg`}
              >
                {!item.customIcon && item.icon}
                {item.customIcon && (
                  <span className="text-xl font-black">
                    {item.customIcon}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
