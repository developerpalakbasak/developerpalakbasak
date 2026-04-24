"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineBars3 } from 'react-icons/hi2';

/**
 * MobileMenu Component
 * Handles the responsive navigation for smaller screens.
 * Features a slide-in/fade-in dropdown, a backdrop, and a dedicated theme toggle.
 */
const MobileMenu = ({ links, toggleTheme, theme, pathname, mounted }: any) => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Effect to close the menu when clicking outside or scrolling
    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenuToggle(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("wheel", handleOutsideClick);
        document.addEventListener("touchmove", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("wheel", handleOutsideClick);
            document.removeEventListener("touchmove", handleOutsideClick);
        };
    }, [mobileMenuToggle]);

    return (
        <div ref={mobileMenuRef} className="md:hidden flex items-center">
            {/* Hamburger Menu Icon: Trigger for the dropdown */}
            <button className="text-2xl cursor-pointer hover:text-primary transition-colors" onClick={() => setMobileMenuToggle(!mobileMenuToggle)} aria-label="Toggle Mobile Menu">
                <HiOutlineBars3 size={30} />
            </button>

            {/* Dropdown Menu & Overlay */}
            {mobileMenuToggle && (
                <>
                    {/* Backdrop: Darkens the background and provides an extra close trigger */}
                    <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
                        onClick={() => setMobileMenuToggle(false)}
                    />
                    
                    {/* Menu Content: Absolute positioned container with navigation links */}
                    <div className="flex flex-col gap-5 absolute top-14 right-0 w-[240px] sm:w-[280px] bg-background/95 backdrop-blur-md border border-card-border p-6 rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
                        <div className="flex flex-col gap-4">
                            {links.map((item: any) => (
                                <Link key={item.name} 
                                    href={item.link}
                                    onClick={() => setMobileMenuToggle(false)}
                                    className={`text-lg sm:text-xl font-bold transition-all duration-300 hover:text-primary hover:translate-x-1 ${
                                        pathname === item.link ? "text-primary flex items-center gap-2" : "text-foreground/80"
                                    }`}>
                                    {pathname === item.link && <span className="w-2 h-2 rounded-full bg-primary" />}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="h-[1px] bg-card-border my-1" />
                        
                        {/* Theme Toggle Section within Mobile Menu */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-foreground/60 uppercase tracking-tighter">Theme</span>
                            <button
                                onClick={toggleTheme}
                                className="relative flex items-center w-12 h-7 px-1 bg-muted rounded-full transition-colors hover:bg-muted/80 border border-card-border"
                                aria-label="Toggle Theme"
                            >
                                <div className={`flex items-center justify-center w-5 h-5 bg-primary rounded-full shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}>
                                    {theme === 'dark' ? <FaSun size={10} className="text-white" /> : <FaMoon size={10} className="text-white" />}
                                </div>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MobileMenu;
