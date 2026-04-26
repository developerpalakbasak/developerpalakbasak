"use client";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

/**
 * Progress Component
 * Displays key professional metrics and achievements in a responsive grid.
 */
const Progress = () => {
  // Metric data: experience, completed projects, client satisfaction, and accolades
  const progressItem = [
    {
      icon: <CiCalendar className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl" />,
      title: "4+",
      subtitle: "Years of Experience",
    },
    {
      icon: <RiComputerLine className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl" />,
      title: "35+",
      subtitle: "Projects Completed",
    },
    {
      icon: <BsEmojiSmile className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl" />,
      title: "50+",
      subtitle: "Satisfied Clients",
    },
    {
      icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl" />,
      title: "7+",
      subtitle: "Awards Won",
    },
  ];

  return (
    <section className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-5 2xl:py-10 p-6 2xl:px-12 bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] flex gap-5 flex-col items-baseline md:justify-between md:flex-row">
      {progressItem.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <span className="flex gap-3">
              <span className="text-primary">{item.icon}</span>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold">{item.title}</p>
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-muted-foreground">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Progress;
