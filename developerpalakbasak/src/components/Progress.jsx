"use client";
import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { motion } from 'framer-motion';

const Progress = () => {

    const iconSize = 22;
    const progressItem = [
        {
            icon: <CiCalendar size={iconSize} />,
            title: "4+",
            subtitle: "Years of Experience",
        },
        {
            icon: <RiComputerLine size={iconSize} />,
            title: "35+",
            subtitle: "Projects Completed",
        },
        {
            icon: <BsEmojiSmile size={iconSize} />,
            title: "50+",
            subtitle: "Satisfied Clients",
        },
        {
            icon: <FaAward size={iconSize} />,
            title: "7+",
            subtitle: "Awards Won",
        },
    ]


    return (
        <motion.section
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }} 
            className="max-w-6xl mx-auto mt-5 py-5 p-6 rounded bg-section flex gap-5 flex-col items-baseline md:justify-between md:flex-row">

            {progressItem.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className=" flex flex-col gap-2">
                        <span className='text-primary'>{item.icon}</span>
                        <span>
                            <p className='text-3xl'>{item.title}</p>
                            <p className='text-lg'>{item.subtitle}</p>
                        </span>
                    </div>
                </div>

            ))
            }
        </motion.section >

    )
}

export default Progress