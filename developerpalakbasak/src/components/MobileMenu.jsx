"use client";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { HiOutlineBars3 } from 'react-icons/hi2'

const MobileMenu = ({ links, toggleTheme, theme, scrollToSection }) => {

    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {

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
        }
    }, [mobileMenuToggle]);




    return (
        <div ref={mobileMenuRef} className='md:hidden flex items-center'>
            {/* Hamburger Menu Icon */}
            <button className="text-2xl cursor-pointer" onClick={() => setMobileMenuToggle(!mobileMenuToggle)} aria-label="Toggle Mobile Menu">
                <HiOutlineBars3 size={30} />
            </button>

            {/* Dropdown Menu */}
            {mobileMenuToggle && (
                <div className="flex flex-col gap-3 absolute top-12 sm:top-14 -right-4 bg-navbar p-4 rounded-lg shadow-lg z-50 border-1 border-primary">
                    {links.map((item) => (
                        <button key={item.name} 
                            onClick={() => scrollToSection(item.link)}
                            className="hover:underline text-base">
                            {item.name}
                        </button>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className={`flex items-center ${theme === "dark" ? "justify-end" : "justify-start"} px-1 py-0.5 mx-2 bg-slate-500 rounded-full text-white transition font-bold`}
                        aria-label="Toggle Theme"
                    >
                        <span className="relative w-6 h-6">
                            <span className="relative w-6 h-6 flex items-center justify-center">
                                <FaSun
                                    className={`absolute  transition-opacity duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'
                                        } text-yellow-400`}
                                />
                                <FaMoon
                                    className={`absolute transition-opacity duration-300 ease-in-out ${theme !== 'dark' ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            </span>

                        </span>
                    </button>

                </div>
            )}

        </div>
    )
}

export default MobileMenu
