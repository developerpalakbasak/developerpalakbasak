"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
  FaDatabase,
  FaBolt,
  FaLayerGroup,
  FaPaintBrush,
  FaShoppingCart,
  FaMobileAlt,
  FaDesktop,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo,
  SiElectron,
  SiVite,
} from "react-icons/si";
import {
  MdApi,
  MdOutlineSpeed,
  MdComputer,
  MdPhoneIphone,
} from "react-icons/md";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

/**
 * Offer Component
 * Detailed service breakdown with platform-specific tabs (Web, Mobile, Desktop).
 * Features rich capability lists and direct call-to-action buttons for each category.
 */

/* ─── Tab Configuration ────────────────────────────────────── */
const tabs = [
  { id: "web", label: "Web", icon: <MdComputer size={18} /> },
  { id: "mobile", label: "Mobile", icon: <FaMobileAlt size={16} /> },
  { id: "desktop", label: "Desktop", icon: <FaDesktop size={16} /> },
] as const;
type TabId = (typeof tabs)[number]["id"];

/* ─── Content Data ─────────────────────────────────────────── */
const content: Record<
  TabId,
  {
    glow1: string;
    glow2: string;
    tagline: string;
    heading: string;
    highlight: string;
    sub: string;
    platforms: { icon: React.ReactNode; label: string; color: string; bg: string }[];
    features: { icon: React.ReactNode; title: string; description: string }[];
    cta: { icon: React.ReactNode; title: string; body: string; link: string; btn: string };
  }
> = {
  web: {
    glow1: "bg-primary/10",
    glow2: "bg-blue-500/10",
    tagline: "Full-Stack Web Development",
    heading: "Ship Powerful",
    highlight: "Web Experiences",
    sub: "From pixel-perfect frontends to bulletproof Node.js backends — I build production-grade web apps that scale with your business.",
    platforms: [
      { icon: <FaReact size={28} />, label: "React", color: "text-cyan-500", bg: "bg-cyan-500/10 border-cyan-500/30" },
      { icon: <TbBrandNextjs size={28} />, label: "Next.js", color: "text-zinc-700 dark:text-zinc-100", bg: "bg-zinc-500/10 border-zinc-500/30" },
      { icon: <FaNodeJs size={28} />, label: "Node.js", color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
      { icon: <SiMongodb size={28} />, label: "MongoDB", color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30" },
      { icon: <SiTailwindcss size={28} />, label: "Tailwind", color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/30" },
    ],
    features: [
      { icon: <MdComputer size={22} className="text-primary" />, title: "Full-Stack MERN Apps", description: "End-to-end web apps with MongoDB, Express, React and Node.js — architected for maintainability and built to handle real-world traffic." },
      { icon: <SiNextdotjs size={22} className="text-zinc-700 dark:text-zinc-200" />, title: "Next.js & SSR/SSG", description: "SEO-first, lightning-fast web applications with server-side rendering, static generation, and App Router for modern React." },
      { icon: <MdApi size={22} className="text-blue-400" />, title: "REST & GraphQL APIs", description: "Secure, well-documented APIs designed to scale — versioned endpoints, middleware layers, and seamless third-party integrations." },
      { icon: <SiSocketdotio size={22} className="text-green-400" />, title: "Real-Time Applications", description: "Chat platforms, live dashboards, and collaborative tools powered by WebSockets & Socket.io — instant data, zero lag." },
      { icon: <FaShoppingCart size={22} className="text-amber-400" />, title: "E-Commerce Platforms", description: "Full-featured online stores with secure checkout, admin panels, inventory tracking, and payment gateway integrations." },
      { icon: <FaDatabase size={22} className="text-indigo-400" />, title: "Database Architecture", description: "Schema design, query optimisation, and data modelling for MongoDB, PostgreSQL & MySQL — built for scale and reliability." },
    ],
    cta: {
      icon: <MdComputer size={36} className="text-primary flex-shrink-0" />,
      title: "Have a web app idea?",
      body: "Let's build a scalable, production-ready product that your users will love.",
      link: "https://wa.me/8801761791388?text=Hello!%20I%20want%20to%20build%20a%20web%20app%20with%20you.",
      btn: "Let's Build It →",
    },
  },
  mobile: {
    glow1: "bg-cyan-500/10",
    glow2: "bg-primary/10",
    tagline: "Mobile App Development",
    heading: "Your App,",
    highlight: "On Every Platform",
    sub: "I build cross-platform mobile apps with React Native — apps that users can't put down, and clients can't stop talking about.",
    platforms: [
      { icon: <FaAndroid size={28} />, label: "Android", color: "text-green-400", bg: "bg-green-400/10 border-green-400/30" },
      { icon: <FaApple size={28} />, label: "iOS", color: "text-zinc-600 dark:text-slate-300", bg: "bg-slate-400/10 border-slate-400/30" },
      { icon: <FaReact size={28} />, label: "React Native", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
      { icon: <SiExpo size={28} />, label: "Expo", color: "text-zinc-600 dark:text-zinc-100", bg: "bg-zinc-400/10 border-zinc-400/30" },
    ],
    features: [
      { icon: <FaReact size={22} className="text-cyan-400" />, title: "React Native Expert", description: "One codebase — two platforms. I build React Native apps that feel truly native on both Android and iOS with zero compromise." },
      { icon: <FaPaintBrush size={22} className="text-pink-400" />, title: "Pixel-Perfect UI", description: "Smooth 60fps animations, gesture-driven navigation, and custom UI components that delight users every time they open your app." },
      { icon: <MdOutlineSpeed size={22} className="text-amber-400" />, title: "Optimised Performance", description: "Lazy loading, memoization, FlatList tuning, and Hermes engine optimisations — your app launches fast and stays fast." },
      { icon: <FaLayerGroup size={22} className="text-primary" />, title: "Full-Stack Integration", description: "Seamlessly connect your mobile app to any REST or GraphQL API, push notifications, or cloud storage with clean code." },
      { icon: <FaBolt size={22} className="text-yellow-400" />, title: "Fast Delivery", description: "From concept to App Store / Play Store — I move fast. Agile sprints, daily updates, transparent communication throughout." },
      { icon: <SiExpo size={22} className="text-zinc-500 dark:text-zinc-300" />, title: "Expo & Bare Workflow", description: "Comfortable with both Expo managed workflow for rapid prototyping and bare React Native for full native module access." },
    ],
    cta: {
      icon: <MdPhoneIphone size={36} className="text-primary flex-shrink-0" />,
      title: "Have a mobile app idea?",
      body: "Let's turn it into a product people download, use, and love.",
      link: "https://wa.me/8801761791388?text=Hello!%20I%20want%20to%20build%20a%20mobile%20app%20with%20you.",
      btn: "Let's Build It →",
    },
  },
  desktop: {
    glow1: "bg-violet-500/10",
    glow2: "bg-indigo-500/10",
    tagline: "Desktop App Development",
    heading: "Native-Grade",
    highlight: "Desktop Apps",
    sub: "Cross-platform desktop apps built with Electron.js — the same JavaScript you love, packaged into a powerful native experience on Windows, Mac, and Linux.",
    platforms: [
      { icon: <SiElectron size={28} />, label: "Electron.js", color: "text-[#9feaf9]", bg: "bg-[#9feaf9]/10 border-[#9feaf9]/30" },
      { icon: <FaReact size={28} />, label: "React", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
      { icon: <SiVite size={28} />, label: "Vite", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/30" },
      { icon: <FaNodeJs size={28} />, label: "Node.js", color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
    ],
    features: [
      { icon: <SiElectron size={22} className="text-[#9feaf9]" />, title: "Electron.js Expert", description: "Cross-platform desktop apps that look native on Windows, macOS, and Linux — all from a single JavaScript codebase." },
      { icon: <MdComputer size={22} className="text-violet-400" />, title: "Native OS Integration", description: "System tray, file system access, notifications, auto-updater, and deep OS API access — your app feels like it belongs on the desktop." },
      { icon: <FaPaintBrush size={22} className="text-pink-400" />, title: "Polished UI/UX", description: "Beautiful, responsive interfaces built with React — the same premium quality web UI, wrapped in a performant desktop shell." },
      { icon: <FaBolt size={22} className="text-yellow-400" />, title: "Performance First", description: "Optimised renderer & main process communication, lazy loading, and efficient IPC patterns to keep your app snappy and responsive." },
      { icon: <FaLayerGroup size={22} className="text-primary" />, title: "Backend Integration", description: "Easily connect to REST APIs, local databases (SQLite), or cloud backends — the best of web and native in one product." },
      { icon: <FaDatabase size={22} className="text-indigo-400" />, title: "Offline-First Support", description: "Local data persistence with SQLite or IndexedDB, with smart sync strategies so users are never blocked by poor connectivity." },
    ],
    cta: {
      icon: <FaDesktop size={32} className="text-primary flex-shrink-0" />,
      title: "Need a desktop app?",
      body: "I'll build you a cross-platform native experience that runs beautifully on every OS.",
      link: "https://wa.me/8801761791388?text=Hello!%20I%20want%20to%20build%20a%20desktop%20app%20with%20you.",
      btn: "Let's Build It →",
    },
  },
};

/* ─── Component Implementation ─────────────────────────────── */
const Offer = () => {
  const [active, setActive] = useState<TabId>("web");
  const c = content[active];

  return (
    <section
      id="services"
      className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-8 md:py-10 2xl:py-20 p-6 2xl:px-12 bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] relative overflow-hidden shadow-sm"
    >
      {/* Ambient background glows: Dynamic color switching per active tab */}
      <div
        key={active + "g1"}
        className={`pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full ${c.glow1} blur-[80px] transition-all duration-700`}
      />
      <div
        key={active + "g2"}
        className={`pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full ${c.glow2} blur-[80px] transition-all duration-700`}
      />

      {/* Header Section: Descriptive tagline and category heading */}
      <div className="relative flex flex-col items-center justify-center gap-3 text-center">
        <p className="text-primary flex gap-0.5 justify-center items-center text-xs sm:text-sm md:text-base 2xl:text-xl font-semibold">
          <GoDotFill className="animate-pulse" /> {c.tagline}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-6xl font-bold leading-tight 2xl:leading-tight">
          {c.heading}{" "}
          <span className="text-slate-500">{c.highlight}</span>
        </h2>
        <p className="text-xs sm:text-sm 2xl:text-2xl text-slate-400 dark:text-slate-500 max-w-xl 2xl:max-w-4xl mx-auto 2xl:leading-loose 2xl:mt-4">
          {c.sub}
        </p>
      </div>

      {/* Tab Controls: Segmented navigation for category selection */}
      <div className="relative flex justify-center mt-10 2xl:mt-16">
        <div className="inline-flex gap-1 p-1 2xl:p-2 rounded-2xl 2xl:rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 2xl:gap-4 px-6 2xl:px-10 py-2.5 2xl:py-4 rounded-xl 2xl:rounded-2xl text-sm 2xl:text-xl font-bold transition-all duration-300 cursor-pointer
                ${
                  active === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Badges: Visual representation of supported technologies */}
      <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4 2xl:gap-6 mt-10 2xl:mt-16">
        {c.platforms.map((p) => (
          <div
            key={p.label}
            className={`flex items-center gap-2 2xl:gap-4 px-4 2xl:px-8 py-2 2xl:py-4 rounded-2xl 2xl:rounded-[2rem] border ${p.bg} ${p.color} hover:scale-105 transition-transform duration-200`}
          >
            <span className="2xl:scale-150 transform transition-transform origin-center">{p.icon}</span>
            <span className="font-bold text-sm sm:text-base 2xl:text-2xl">{p.label}</span>
          </div>
        ))}
      </div>

      {/* Feature Grid: Detailed value propositions for the active category */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-8 mt-10 2xl:mt-16">
        {c.features.map((feat, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 p-6 2xl:p-10 rounded-2xl 2xl:rounded-[2.5rem] border border-card-border bg-card/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 2xl:w-20 2xl:h-20 flex items-center justify-center rounded-xl 2xl:rounded-2xl bg-card border border-card-border group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
              <span className="2xl:scale-150 origin-center">{feat.icon}</span>
            </div>
            <h4 className="font-bold text-sm sm:text-base 2xl:text-2xl text-zinc-800 dark:text-zinc-100">{feat.title}</h4>
            <p className="text-xs sm:text-sm 2xl:text-xl text-slate-500 dark:text-slate-400 leading-relaxed 2xl:leading-loose">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Strip: Direct link to start a project conversation */}
      <div className="relative mt-10 2xl:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 2xl:p-12 rounded-2xl 2xl:rounded-[2.5rem] border border-primary/20 bg-primary/5 shadow-inner">
        <div className="flex items-center gap-4 2xl:gap-8">
          <div className="hidden sm:block p-3 2xl:p-5 rounded-full bg-white dark:bg-zinc-800 shadow-sm">
            <span className="2xl:scale-150 inline-block origin-center">{c.cta.icon}</span>
          </div>
          <div>
            <p className="font-bold text-sm sm:text-base 2xl:text-2xl text-zinc-800 dark:text-zinc-100">
              {c.cta.title}
            </p>
            <p className="text-xs sm:text-sm 2xl:text-xl text-slate-500 dark:text-slate-400">
              {c.cta.body}
            </p>
          </div>
        </div>
        <a
          href={c.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-8 2xl:px-12 py-3 2xl:py-5 rounded-full bg-primary text-white font-black text-sm 2xl:text-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
        >
          {c.cta.btn}
        </a>
      </div>
    </section>
  );
};

export default Offer;
