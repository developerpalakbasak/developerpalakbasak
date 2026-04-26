"use client";
import React from "react";

/**
 * SingleProject Component
 * Renders a single project showcase item with alternating layout (image left/right).
 * Includes project details, metadata, and external links.
 */
const SingleProject = ({ project, index, islast }) => {
  return (
    <section>
      {/* Container: Alternates direction based on index for visual variety */}
      <div className={`w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-8 2xl:py-16 px-4 2xl:px-12 bg-card/30 border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] flex gap-8 2xl:gap-16 flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

        {/* Project Visual Showcase */}
        <div className="w-full md:w-[40%] flex items-center justify-center">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-auto max-h-[300px] 2xl:max-h-[500px] rounded-2xl 2xl:rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* Project Content & Details */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold leading-tight">
            {project.title}{" - "} <span className="text-primary">{project.titleQute}</span>
          </h2>
          <p className="my-4 2xl:my-8 text-xs sm:text-base lg:text-base xl:text-base 2xl:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed 2xl:leading-loose font-medium">
            {project.description}
          </p>

          <p className="mt-2 mb-2 2xl:mt-4 2xl:mb-6 text-primary text-xs sm:text-sm 2xl:text-xl font-bold uppercase tracking-widest">
            Project Highlights
          </p>

          <div className="text-sm sm:text-base 2xl:text-xl space-y-1 2xl:space-y-4">
            <div className="flex justify-between border-b border-card-border py-2">
              <p className="font-semibold">Project Type</p>
              <p className="text-slate-500 dark:text-slate-400">{project.projectType}</p>
            </div>
            <div className="flex justify-between border-b border-card-border py-2">
              <p className="font-semibold">Completion Time</p>
              <p className="text-slate-500 dark:text-slate-400">{project.completionTime}</p>
            </div>
            <div className="flex justify-between border-b border-card-border py-2">
              <p className="font-semibold">Technologies</p>
              <p className="text-slate-500 dark:text-slate-400">{project.technologies}</p>
            </div>
          </div>

          {/* Action Links: Demo and Repository */}
          <div className="flex gap-6 2xl:gap-10 mt-6 2xl:mt-12 text-sm sm:text-base 2xl:text-xl font-bold">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 flex items-center gap-1"
              >
                Live Preview
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:underline underline-offset-4"
              >
                Github Source
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;