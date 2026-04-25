"use client";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Navbar Component
 * Main navigation header with sticky positioning, theme toggling, and responsive design.
 * Features a dynamic underline for the active route and a glassmorphism design.
 */
const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensures theme is correctly resolved before rendering to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Services", link: "/services" },
    { name: "Review", link: "/review" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-2 pt-1">
      <div className="w-full md:w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto">
        <header className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-card border border-card-border rounded-3xl shadow-xl backdrop-blur-none sm:backdrop-blur-md">

          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link href="/" className="text-xl select-none cursor-pointer font-bold flex gap-1 items-center justify-center">
              <IoMdCode className="text-primary" size={25} />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-tight">
                Developer <span className="text-primary">Palak</span>
              </p>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-8">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`text-xs sm:text-sm font-bold transition-all duration-300 hover:text-primary ${pathname === item.link ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Area: Theme Toggle & CV Download */}
            <div className="flex items-center justify-center gap-1 sm:gap-4 text-xl relative">
              <a
                href="https://drive.google.com/file/d/1xQ_HhZegiBYVnWew9nTaXbixQvYVNq_X/view?usp=sharing"
                className="glass-button-yellow px-5 py-2 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>

              {/* Theme toggle: Switches between light and dark modes */}
              {mounted ? (
                <button
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="hidden h-8 w-8 cursor-pointer md:flex justify-center items-center hover:bg-primary/10 rounded-full transition-colors"
                  aria-label="Toggle Theme"
                >
                  {resolvedTheme === "dark" ? (
                    <FaSun className="text-yellow-400" size={18} />
                  ) : (
                    <FaMoon className="text-slate-700" size={18} />
                  )}
                </button>
              ) : (
                <span className="hidden h-8 w-8 md:flex"></span>
              )}

              {/* Mobile Menu Trigger & Dropdown */}
              <MobileMenu
                links={links}
                mounted={mounted}
                theme={resolvedTheme}
                pathname={pathname}
                toggleTheme={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
