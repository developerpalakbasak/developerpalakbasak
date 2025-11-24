"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];



const scrollToSection = (id) => {
  const target = document.getElementById(id);
  const top = target.offsetTop;

  animate(window.scrollY, top, {
    duration: 0.1,
    ease: "easeInOut",
    onUpdate: (v) => window.scrollTo(0, v),
  });
};


  return (


    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}



      className="px-2"

    >
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center ">
        <header className="w-full px-3 sm:px-4 py-2 sm:py-3 shadow bg-navbar border border-primary rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="text-xl select-none cursor-pointer font-bold flex gap-1 items-center justify-center ">
              <IoMdCode color="#077a57" size={25} />
              <p className="dark:text-logo text-base sm:text-xl">Developer Palak</p>
            </div>

            <nav className="hidden md:flex gap-6">
              {links.map((item) => (
                <button key={item.name} 
                onClick={()=> scrollToSection(item.link)}
                className="hover:underline">
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-1 sm:gap-4 text-xl relative">
              <a
                href="https://drive.google.com/uc?export=download&id=1YFg6U21P_nxZfeIcVmaAF6YPcV6aWQJW"
                className="px-3 py-2 border-green-600 border-2 rounded-full dark:text-green-600 text-black hover:text-white font-bold hover:bg-green-600 transition-colors text-xs sm:text-sm"
              >
                Download CV
              </a>

              {/* Only render toggle after mount */}
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="hidden h-5 w-5 cursor-pointer md:flex justify-center items-center hover:text-yellow-400 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
              ) : (
                <span
                  className="hidden h-5 w-5 cursor-pointer md:flex justify-center items-center hover:text-yellow-400 transition-colors"
                  aria-label="Toggle Theme"
                ></span>
              )}

              {/* Pass mounted check into MobileMenu too */}
              <MobileMenu
                links={links}
                mounted={mounted}
                theme={theme}
                scrollToSection={scrollToSection}
                toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default Navbar;
