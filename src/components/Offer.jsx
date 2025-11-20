"use client";
import React from 'react'
import { FaDatabase } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { MdApi } from "react-icons/md";
import { SiSocketdotio } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Link from 'next/link';
import { motion } from 'framer-motion';



const Offer = () => {

    const offerItems = [
        {
            icon: <MdComputer size={35} />,
            title: "Full Stack Development",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
        {
            icon: <FaDatabase size={35} />,
            title: "Database Management",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
        {
            icon: <MdApi size={35} />,
            title: "API Development",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
        {
            icon: <SiSocketdotio size={35} />,
            title: "Real-time Applications",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
        {
            icon: <GrOptimize size={35} />,
            title: "Performance Optimization",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
        {
            icon: <FaShoppingCart size={35} />,
            title: "E-commerce Solutions",
            description: "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
        },
    ]



    return (
        <div
            className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section rounded">



            <div className='flex flex-col items-center justify-center gap-3'>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    viewport={{ once: true }} 
                    className='text-primary flex gap-0.5 justify-center items-center'
                >
                    <GoDotFill /> What do I offer
                </motion.p>
                <motion.h3
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-3xl'>
                    Designing Solutions{" "}
                    <span className='text-slate-500'>
                        Customized to Meet Your Requirments
                    </span>
                </motion.h3>
            </div>









            <div

                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {offerItems.map((item, index) => (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.40 }}
                        viewport={{ once: true, amount: 0.2 }}

                        key={index} className='rounded border p-5 mt-5 flex flex-col gap-3'>
                        <span>{item.icon}</span>
                        <h4 className='text-2xl'>{item.title}</h4>
                        <p className='text-slate-500'>{item.description}</p>
                    </motion.div>
                ))}

            </div>
            <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
                className='text-center mt-4'> Lets chat about your idea's. <Link href="/" className='text-primary'>Reach Out</Link>
            </motion.p>
        </div>

    )
}

export default Offer