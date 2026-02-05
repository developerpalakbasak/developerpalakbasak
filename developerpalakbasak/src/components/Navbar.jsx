"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { useTheme } from "next-themes";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
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
              <p className="dark:text-logo text-base sm:text-xl">
                Developer Palak
              </p>
            </div>

            <nav className="hidden md:flex gap-6">
              {links.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.link)}
                  className="hover:underline"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-1 sm:gap-4 text-xl relative">



              <a
                href="https://drive.google.com/file/d/1xQ_HhZegiBYVnWew9nTaXbixQvYVNq_X/view?usp=sharing"
                className="text-green-600 dark:text-green-600 px-3 py-2 border-green-600 hover:bg-green-600 hover:text-white border-2 rounded-full font-bold transition-colors text-xs sm:text-sm"
              >
                Download CV
              </a>


              {/* Theme toggle */}
              {mounted ? (
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="hidden h-5 w-5 cursor-pointer md:flex justify-center items-center hover:text-yellow-400 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {resolvedTheme === "dark" ? (
                    <FaSun size={20} />
                  ) : (
                    <FaMoon size={20} />
                  )}
                </button>
              ) : (
                <span className="hidden h-5 w-5 md:flex"></span>
              )}

              {/* Mobile Menu */}
              <MobileMenu
                links={links}
                mounted={mounted}
                theme={resolvedTheme}
                scrollToSection={scrollToSection}
                toggleTheme={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              />
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default Navbar;
