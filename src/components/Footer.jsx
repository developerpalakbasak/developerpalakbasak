"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoMdCode } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  const icons = [
    {
      icon: <FaLinkedin className="w-full h-full" />,
      to: "https://www.linkedin.com/in/palak-basak-a05510208/",
    },
    { icon: <FaGithub className="w-full h-full" />, to: "https://github.com/developerpalakbasak" },
    {
      icon: <FaSquareUpwork className="w-full h-full" />,
      to: "https://www.upwork.com/freelancers/~01497f6abe72a2a2ac",
    },
  ];

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-6xl mx-auto mt-5 p-3 sm:p-4 md:p-5 lg:p-6 bg-section flex flex-col justify-center items-center gap-4 rounded"
    >
      <div className="text-xl font-bold flex gap-1 items-center justify-center ">
        <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
          <IoMdCode color="#077a57" className="w-full h-full" />
        </span>
        <p className="dark:text-logo text-sm sm:text-base md:text-lg ">
          Developer Palak
        </p>
      </div>

      <div className="flex items-center gap-4 text-xl ">
        {/* Social Icons */}
        {icons.map((item, index) => (
          <span key={index} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
            <a
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors
      block w-full h-full
    "
            >
              {item.icon}
            </a>
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Footer;
