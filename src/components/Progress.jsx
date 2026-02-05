"use client";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { motion } from "framer-motion";

const Progress = () => {
  const progressItem = [
    {
      icon: <CiCalendar className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "4+",
      subtitle: "Years of Experience",
    },
    {
      icon: <RiComputerLine className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "35+",
      subtitle: "Projects Completed",
    },
    {
      icon: <BsEmojiSmile className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "50+",
      subtitle: "Satisfied Clients",
    },
    {
      icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "7+",
      subtitle: "Awards Won",
    },
  ];

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mt-5 py-5 p-6 rounded bg-section flex gap-5 flex-col items-baseline md:justify-between md:flex-row"
    >
      {progressItem.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className=" flex flex-col gap-2">
            <span className="flex gap-3">
              <span className="text-primary">{item.icon}</span>
              <p className="text-2xl sm:text-3xl md:text-4xl">{item.title}</p>
            </span>
            <p className="text-lg sm:text-xl md:text-2xl ">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Progress;
