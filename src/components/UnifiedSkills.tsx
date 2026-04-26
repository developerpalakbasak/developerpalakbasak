"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaCode,
  FaLayerGroup,
  FaReact,
  FaNodeJs,
  FaApple,
  FaAndroid,
  FaWindows,
  FaLinux
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiElectron } from "react-icons/si";

/**
 * UnifiedSkills Component
 * A high-end, dashboard-style interactive display of technical expertise.
 * Categorizes skills into Web, Mobile, and Desktop tabs with visual feedback.
 */
const skillCategories = [
  {
    id: "web",
    title: "Web Development",
    subtitle: "Modern, Scalable Web Apps",
    icon: <FaGlobe className="text-blue-500" />,
    description: "Building blazing fast, SEO-friendly web applications using the latest technologies.",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    features: ["Responsive Design", "Server-Side Rendering", "Performance Optimization", "Secure Auth"]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Native Cross-Platform Apps",
    icon: <FaMobileAlt className="text-emerald-500" />,
    description: "Crafting fluid mobile experiences for iOS and Android with a single codebase.",
    skills: [
      { name: "React Native", icon: <FaReact /> },
      { name: "Expo", icon: <FaLayerGroup /> },
      { name: "iOS (Swift)", icon: <FaApple /> },
      { name: "Android (Java)", icon: <FaAndroid /> },
    ],
    features: ["Fluid Animations", "Offline Support", "Push Notifications", "App Store Ready"]
  },
  {
    id: "desktop",
    title: "Desktop Development",
    subtitle: "Cross-Platform Desktop Apps",
    icon: <FaDesktop className="text-purple-500" />,
    description: "Powerful desktop applications that run seamlessly on Windows, macOS, and Linux.",
    skills: [
      { name: "Electron", icon: <SiElectron /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "Native APIs", icon: <FaCode /> },
    ],
    features: ["System Integration", "Multi-Window Support", "Auto-Updates", "Native Performance"]
  }
];

const UnifiedSkills = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto py-4 sm:py-2 lg:py-4 p-4 sm:p-2 lg:p-2 bg-card/80 backdrop-blur-none sm:backdrop-blur-xl border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/10">
      {/* Dynamic Background Gradients: Optimized for mobile performance */}
      <div className="absolute -top-24 -right-24 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-primary/10 blur-[50px] sm:blur-[120px] rounded-full pointer-events-none" />
      {/* <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-blue-600/10 blur-[50px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" /> */}

      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-primary/15 blur-2xl sm:blur-[100px] rounded-full pointer-events-none" />

      {/* Header Section: Component title and mission statement */}
      <div className="relative z-10 flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 group cursor-default">
          <GoDotFill className="text-primary animate-pulse group-hover:scale-125 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Comprehensive Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-black text-center mb-6 2xl:mb-10 leading-tight">
          Mastering the <span className="text-gradient">Digital Realm</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-center max-w-3xl 2xl:max-w-5xl text-lg md:text-xl 2xl:text-2xl 2xl:leading-loose leading-relaxed">
          From the core of the server to the palm of your hand, I build integrated
          ecosystems that are fast, secure, and beautiful across every device.
        </p>
      </div>

      {/* Segmented Tab Control: Navigates between Web, Mobile, and Desktop categories */}
      <div className="flex flex-row w-[95%] sm:w-fit p-1.5 bg-card-secondary/50 backdrop-blur-md border border-card-border rounded-full mx-auto mb-8 sm:mb-16 shadow-inner overflow-hidden">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 md:gap-3 2xl:gap-5 px-4 md:px-10 2xl:px-16 py-2.5 md:py-4 2xl:py-6 rounded-full font-extrabold text-xs md:text-base 2xl:text-2xl transition-all duration-500 ${activeTab === cat.id
              ? "bg-primary text-white shadow-[0_8px_20px_rgba(var(--primary-rgb),0.3)] scale-105"
              : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/5"
              }`}
          >
            <span className="text-xl sm:text-2xl 2xl:text-4xl">{cat.icon}</span>
            <span className="hidden sm:inline">{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Content Grid: Displays details, skills, and features for the active tab */}
      <div className="p-0 sm:p-2 md:p-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Detail & Capability List */}
        <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
          {skillCategories.filter(c => c.id === activeTab).map(cat => (
            <div key={cat.id} className="space-y-8">
              <div className="space-y-4">
                <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                <h3 className="text-xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">{cat.subtitle}</h3>
                <p className="text-xs sm:text-base lg:text-lg xl:text-lg 2xl:text-2xl 2xl:leading-loose text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {cat.description}
                </p>
              </div>

              {/* Skill Pill Grid: Individual technology badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 2xl:gap-8 p-2 sm:p-5 2xl:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] bg-card border border-card-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-primary/5"
                  >
                    <div className="w-12 h-12 2xl:w-20 2xl:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2rem] bg-card-secondary border border-card-border text-2xl 2xl:text-4xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                      {skill.icon}
                    </div>
                    <span className="font-bold 2xl:text-2xl text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Capabilities Checklist: Key value adds for the category */}
              <div className="p-6 2xl:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-4 2xl:space-y-8">
                <h4 className="font-bold text-primary flex items-center gap-2 uppercase tracking-widest text-xs 2xl:text-xl">
                  <FaCode className="text-lg" /> Core Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {cat.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      <span className="text-sm md:text-base 2xl:text-xl font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-square flex items-center justify-center">
            {/* Layered background glows for depth */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-110" />
            <div className="absolute inset-10 bg-blue-500/5 blur-2xl rounded-full animate-pulse" />

            {/* Rotating Outer Ring: Hardware accelerated for mobile smoothness */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite] will-change-transform" />
            <div className="absolute inset-8 border border-dashed border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse] will-change-transform" />

            {/* Floating Satellites: Minimalist tech nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40 blur-[1px] animate-bounce" />
            <div className="absolute bottom-10 right-0 w-2 h-2 rounded-full bg-blue-500/40 blur-[1px] animate-pulse delay-700" />

            {/* Central Icon Portal: High-contrast focus area */}
            <div className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 2xl:w-80 2xl:h-80 rounded-full bg-card border-2 border-card-border flex flex-col items-center justify-center group hover:border-primary/40 transition-all duration-700 shadow-2xl overflow-hidden">
              {/* Inner glow pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="text-6xl sm:text-8xl 2xl:text-[10rem] text-primary mb-3 2xl:mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                {skillCategories.find(c => c.id === activeTab)?.icon}
              </div>

              <div className="text-center relative z-10">
                <p className="font-black text-xl sm:text-2xl 2xl:text-4xl uppercase tracking-[0.3em] text-slate-900 dark:text-white group-hover:tracking-[0.4em] transition-all duration-700">
                  {activeTab}
                </p>
                <div className="h-0.5 w-8 bg-primary mx-auto mt-2 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section: Cross-platform commitment and contact link */}
      <div className="mt-8 p-4 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            {[FaGlobe, FaMobileAlt, FaDesktop].map((Icon, i) => (
              <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-20 2xl:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2rem] bg-card-secondary border border-card-border flex items-center justify-center text-xl sm:text-2xl 2xl:text-4xl text-primary shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <Icon />
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl 2xl:text-3xl font-bold text-slate-900 dark:text-white leading-tight">Universal Architecture</p>
            <p className="text-xs sm:text-sm md:text-base 2xl:text-xl text-slate-600 dark:text-slate-400">One solution for every screen, built to scale.</p>
          </div>
        </div>

        <a
          href="#contact"
          className="w-full sm:w-auto group relative px-8 sm:px-10 2xl:px-16 py-3 sm:py-4 2xl:py-8 bg-primary text-white font-black rounded-xl sm:rounded-2xl 2xl:rounded-3xl shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_15px_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center text-sm sm:text-base 2xl:text-2xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            Let's Collaborate <FaCode className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </a>
      </div>
    </section>
  );
};

export default UnifiedSkills;
