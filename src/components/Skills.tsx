"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";

/**
 * Skills Component
 * Categorized list of technical expertise across different domains (Web, Mobile, DevOps, etc.).
 * Designed for readability and quick scanning of the developer's tech stack.
 */
const Skills = () => {
  // Categorized skill data: Centralized list for easy maintenance
  const SkillsData = [
    {
      title: "Front-End",
      description: "HTML, CSS, JavaScript, React, NextJS",
      icon: <GoDotFill className="text-primary" />,
    },
    {
      title: "Back-End",
      description: "Node.js, Express, TypeScript, NestJS",
      icon: <GoDotFill className="text-primary" />,
    },
    {
      title: "Mobile",
      description: "React Native, Expo",
      icon: <GoDotFill className="text-cyan-500" />,
    },
    {
      title: "Databases",
      description: "MongoDB, MySQL, PostgreSQL",
      icon: <GoDotFill className="text-primary" />,
    },
    {
      title: "DevOps",
      description: "Docker, Linux CLI, Nginx",
      icon: <GoDotFill className="text-primary" />,
    },
    {
      title: "Authentication",
      description: "OAuth, NextAuth.js, JWT",
      icon: <GoDotFill className="text-primary" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-6 md:py-8 lg:py-10 2xl:py-20 p-6 2xl:px-12 bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] shadow-sm">
      {/* Header: Skill context and value proposition */}
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-primary flex gap-0.5 justify-center items-center text-xs sm:text-sm md:text-base 2xl:text-2xl font-bold">
          <GoDotFill className="animate-pulse" /> My Expertise
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-6xl text-center font-black">
          Battle-Tested <span className="text-slate-500">Skills That Ship</span>
        </h3>
        <p className="text-xs sm:text-sm 2xl:text-xl text-slate-400 text-center max-w-lg 2xl:max-w-3xl">
          From server to screen — web & mobile — I cover the full spectrum of modern application development.
        </p>
      </div>

      {/* Skills Container: List of categorized skills with detailed descriptions */}
      <div className="w-full max-w-2xl 2xl:max-w-4xl mx-auto mt-10 2xl:mt-16 py-5 2xl:py-10 px-4 2xl:px-8 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] bg-card/50 backdrop-blur-sm border border-card-border flex flex-col gap-5 2xl:gap-8">
        <div className="w-full flex flex-col justify-center gap-4">
          {SkillsData.map((skill) => (
            <div
              key={skill.title}
              className="flex items-start gap-4 2xl:gap-6 text-sm md:text-base 2xl:text-2xl border-b border-card-border pb-4 2xl:pb-8 last:border-b-0 last:pb-0"
            >
              <div className="mt-1 2xl:mt-2">{skill.icon}</div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <p className="font-bold text-slate-900 dark:text-white min-w-[110px]">
                  {skill.title}:
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
