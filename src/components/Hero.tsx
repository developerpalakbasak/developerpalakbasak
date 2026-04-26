"use client";
import React, { useEffect, useState } from "react";
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
import SplineScene from "./SplineScene";
import Typewriter from "./TypeWriter";

/**
 * Hero Component
 * The main landing section featuring an interactive 3D scene, social links, and a brief professional summary.
 * Designed with a high-end, futuristic aesthetic using glassmorphism and dynamic animations.
 */
const Hero = () => {
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
    {
      icon: <FaHtml5 size={30} />,
      name: "HTML5",
      bg: "bg-orange-500",
      text: "text-white",
    },
    {
      icon: <FaCss3Alt size={30} />,
      name: "CSS3",
      bg: "bg-blue-500",
      text: "text-white",
    },
    {
      icon: <SiTailwindcss size={30} />,
      name: "Tailwind CSS",
      bg: "bg-sky-400",
      text: "text-white",
    },
    {
      customIcon: "JS",
      name: "JavaScript",
      bg: "bg-amber-300",
      text: "text-slate-900",
    },
    {
      customIcon: "TS",
      name: "TypeScript",
      bg: "bg-blue-600",
      text: "text-white",
    },
    {
      icon: <SiMongodb size={30} />,
      name: "MongoDB",
      bg: "bg-green-600",
      text: "text-white",
    },
    {
      icon: <SiExpress size={30} />,
      name: "Express",
      bg: "bg-slate-200",
      text: "text-black",
    },
    {
      icon: <FaReact size={30} />,
      name: "React",
      bg: "bg-cyan-500",
      text: "text-white",
    },
    {
      icon: <FaNodeJs size={30} />,
      name: "Node.js",
      bg: "bg-green-500",
      text: "text-white",
    },
    {
      icon: <TbBrandNextjs size={30} />,
      name: "Next.js",
      bg: "bg-zinc-800",
      text: "text-white",
    },
    {
      icon: <SiElectron size={30} />,
      name: "Electron.js",
      bg: "bg-[#2b2e3a]",
      text: "text-[#9feaf9]",
    },
    {
      icon: <FaReact size={30} />,
      name: "React Native",
      bg: "bg-cyan-700",
      text: "text-white",
    },
    {
      icon: <FaAndroid size={30} />,
      name: "Android",
      bg: "bg-green-600",
      text: "text-white",
    },
    {
      icon: <FaApple size={30} />,
      name: "iOS",
      bg: "bg-zinc-900",
      text: "text-white",
    },
  ];

  const quotes = ["Web Apps", "Android Apps", "iOS Apps", "Desktop Apps"];

  // Only render Spline on desktop for performance
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="w-full py-8 sm:py-9 2xl:py-16 sm:px-10 2xl:px-16 bg-card sm:bg-card/80 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] flex gap-8 md:gap-12 2xl:gap-20 flex-col md:flex-row items-center shadow-2xl relative"
      style={{ contain: "layout" }}
    >
      {/* Decorative Glow Elements: Disabled on mobile for critical performance gains */}
      <div className="hidden sm:block absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Column: Introduction and Professional Identity */}
      <div className="min-w-full md:min-w-1/2 flex flex-col justify-center relative z-10 px-6">
        {/* Current Role Badge: Eye-catching indicator of professional status */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 group cursor-default shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)] hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)] transition-all duration-500">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </div>
          <p className="text-xs sm:text-sm 2xl:text-lg font-bold tracking-widest text-primary uppercase">
            Working @ <span className="text-foreground">ITScholarbd.com</span>
          </p>
        </div>

        <div>
          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-black mt-1 leading-tight">
            I'm <span className="text-gradient">Palak Basak</span>
            <br />
            <span className="text-gradient">Digital Architect.</span>
          </h1>

          <div className="relative mt-2">
            {/* Visual connector for the typewriter effect */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full hidden md:block opacity-90 animate-glow-cycle" />
            <span className="flex md:ml-6">
              <Typewriter
                quotes={quotes}
                className={
                  "text-base sm:text-4xl md:text-5xl lg:text-3xl 2xl:text-5xl text-primary font-black uppercase tracking-widest"
                }
              />
            </span>
          </div>
        </div>

        <p className="mt-4 sm:mt-6 2xl:mt-10 text-xs sm:text-lg md:text-xl lg:text-lg 2xl:text-2xl leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl 2xl:max-w-2xl font-medium sm:font-normal">
          Currently engineering high-performance ecosystems as a{" "}
          <span className="text-primary font-bold">
            Fullstack JavaScript/TypeScript Developer
          </span>{" "}
          at <span className="text-foreground font-bold">ITScholarBD</span>. I specialize in building scalable
          web and mobile solutions using React, Next.js, and React Native.
        </p>

        {/* Horizontal Tech Stack Grid: Displays core technology proficiency */}
        <div className="mt-8 flex flex-col items-center md:items-start w-full">
          <div className="flex gap-3 2xl:gap-5 flex-wrap justify-center md:justify-start w-full min-w-0 [&>div>svg]:2xl:w-10 [&>div>svg]:2xl:h-10">
            {skillsIcon.map((item, index) => (
              <div
                key={index}
                title={item.name}
                className={`p-1 flex justify-center items-center rounded-xl sm:rounded-2xl 2xl:rounded-3xl ${item.bg} ${item.text} h-11 w-11 2xl:h-16 2xl:w-16 hover:scale-125 transition-all duration-300 cursor-help shadow-lg shrink-0`}
              >
                {!item.customIcon && item.icon}
                {item.customIcon && (
                  <span className="text-xl 2xl:text-3xl font-black">{item.customIcon}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Interactive 3D Spline scene and Social Links */}
      <div className="hidden md:flex md:min-w-1/2 relative z-10 flex-col md:flex-row items-center justify-center gap-4">
        {isDesktop && <SplineScene />}

        {/* Social Icons Strip: Professional network access - Hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-col gap-4 text-xl absolute right-5 top-1/2 -translate-y-1/2">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 2xl:p-5 border-2 border-primary text-primary rounded-full transition-all duration-300 hover:scale-110 2xl:text-3xl"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
