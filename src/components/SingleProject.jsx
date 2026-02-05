"use client";
import React from 'react'
import { motion } from 'framer-motion';

const SingleProject = ({ project, index, islast }) => {

    return (
        <motion.section
            
            
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className={`${!islast && "border-b-2"} border-gray-600 pb-5`}>


            <div className={`max-w-6xl mx-auto mt-5 py-8 px-4 rounded bg-section/30 flex gap-5 flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} `}>

                {/* Left */}
                <div className="w-full md:w-[40%] flex items-center justify-center">
                    <img
                        src={project.imageSrc}
                        alt="developerpalak"
                        className="w-full  h-[200] md:h-[300] rounded-2xl object-cover"
                    />
                </div>


                {/* Right */}
                <div className="w-full md:w-[60%] flex flex-col justify-center ">
                    <h2 className="text-xl sm:text-2xl md:text-3xl">
                        {project.title}{" - "} <span className="text-primary">{project.titleQute}</span>
                    </h2>
                    <p className='my-3 text-sm sm:text-base text-gray-500'>
                        {project.description}
                    </p>

                    <p className="my-1 sm:my-2 text-primary text-sm sm:text-base">
                        Project info
                    </p>

                    <div className='text-sm sm:text-base'>
                        <span className='flex gap-10 justify-between border-b-2 border-gray-600 py-1 sm:py-2'>
                            <p>Completion Time</p>
                            <p>{project.completionTime}</p>
                        </span>
                        <span className='flex gap-10 justify-between border-b-2 border-gray-600 py-1 sm:py-2'>
                            <p>Technologies</p>
                            <p>{project.technologies}</p>
                        </span>
                    </div>
                    <div className='flex gap-5 mt-2 sm:mt-5 text-sm sm:text-base text-gray-500'>

                        {project.liveDemo && <a href={project.liveDemo} target='_blank' className='text-primary underline'>Live Demo</a>}

                        {project.github && <a href={project.github} target='_blank' className='underline'>View on Github</a>}

                    </div>
                </div>

            </div>
        </motion.section>

    )
}

export default SingleProject