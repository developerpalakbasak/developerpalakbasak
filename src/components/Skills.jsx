"use client";
import React from 'react'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaSquareJs } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go'
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Skills = () => {


    const imageSrc = 'https://res.cloudinary.com/ddfimjibr/image/upload/v1754016859/mern_nextjs_nodejs_react_reactjs_mongodb_wsh0vy.jpg';

    const Skills = [
        {
            title: 'Front-End',
            description: 'HTML, CSS, JavaScript, React, NextJS',
            icon: <GoDotFill color='green' />
        },
        {
            title: 'Back-End',
            description: 'Node.js, Express, TypeScript, NestJS',
            icon: <GoDotFill color='green' />
        },
        {
            title: 'Databases',
            description: 'MongoDB, MySQL, PostgreSQL',
            icon: <GoDotFill color='green' />
        },
        {
            title: 'DevOps',
            description: 'Docker, Linux CLI, Nginx',
            icon: <GoDotFill color='green' />
        },


        {
            title: 'Authentication',
            description: 'OAuth, NextAuth.js, JWT',
            icon: <GoDotFill color='green' />
        },


    ]




    const secondryIcons = [
        { icon: <SiMongodb size={35} />, name: "MongoDB", bg: "bg-green-600", text: "text-white" },
        { icon: <SiExpress size={35} />, name: "Express", bg: "bg-white", text: "text-black" },
        { icon: <FaReact size={35} />, name: "React", bg: "bg-cyan-500", text: "text-white" },
        { icon: <FaNodeJs size={35} />, name: "Node.js", bg: "bg-green-500", text: "text-white" },
        { icon: <TbBrandNextjs size={35} />, name: "Next.js", bg: "bg-black", text: "text-white dark:text-white" },
    ];

    const primaryIcons = [
        { icon: <FaHtml5 size={35} />, name: "HTML5", bg: "bg-orange-500", text: "text-white" },
        { icon: <FaCss3Alt size={35} />, name: "CSS3", bg: "bg-blue-500", text: "text-white" },
        { icon: <SiTailwindcss size={35} />, name: "Tailwind CSS", bg: "bg-sky-400", text: "text-white" },
        { customIcon: "JS", name: "JavaScript", bg: "bg-amber-300", text: "text-slate-900" },
        { customIcon: "TS", name: "TypeScript", bg: "bg-blue-600", text: "text-white" },
    ];




    return (

        <div className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section rounded">






            <div className='flex flex-col items-center justify-center gap-3'>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    viewport={{ once: true }}
                    className='text-primary flex gap-0.5 justify-center items-center'
                >
                    <GoDotFill /> Skills
                </motion.p>
                <motion.h3
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-3xl'>
                    Mastered
                    <span className='text-slate-500'>
                        {" "} Skills
                    </span>
                </motion.h3>
            </div>





            <div></div>


            <div className="max-w-6xl mx-auto mt-5 py-5 px-4 rounded bg-section flex gap-5 flex-col md:flex-row">
                {/* Left */}

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-[40%] flex items-center justify-center">
                    <div className="">
                        <div className="mt-6 flex flex-col items-center md:items-baseline justify-center md:justify-start">
                            <div className="flex gap-4 flex-wrap">
                                {primaryIcons.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-1 select-none flex justify-center items-center rounded ${item.bg} ${item.text} h-12 w-12`}
                                    >
                                        {!item.customIcon && item.icon}
                                        {item.customIcon && <span className="text-2xl font-extrabold tracking-wider">{item.customIcon}</span>}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 flex-wrap mt-4">
                                {secondryIcons.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`p-1 flex justify-center items-center rounded ${item.bg} ${item.text} h-12 w-12`}
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-[60%] flex flex-col justify-center gap-5 ">

                    <div className='border-2 border-gray-600 px-3 py-4 md:px-5 md:py-6 rounded flex flex-col gap-3'>

                        {Skills.map((skill, index) => (

                            <span key={index} className='flex gap-2items-center text-base border-b-2 border-gray-600 pb-2 border-dashed last:border-b-0'>
                                <span className='flex gap-4'>
                                    <p className='flex justify-center items-center font-bold  '>
                                        {/* <GoDotFill color='green' /> */}
                                        {skill.title}:
                                    </p>
                                    <p className='text-slate-400'>{skill.description}</p>
                                </span>
                            </span>
                        ))}

                    </div>
                </motion.div>
            </div>



        </div>
    )
}

export default Skills