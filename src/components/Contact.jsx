"use client";

import { motion } from 'framer-motion';
import { GoDotFill } from 'react-icons/go';
import { IoMdMailOpen } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";


const Contact = () => {




    const contactInfo = [
        {
            title: 'Address',
            description: 'Raikali, Akkelpur, Joypurhat',
        },
        {
            title: 'Division',
            description: 'Rajshahi',
        },
        {
            title: 'Country',
            description: 'Bangladesh',
        },
    ]



    return (

        <div className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section rounded">

            <div className='flex flex-col items-center justify-center gap-3'
            >

                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-primary flex gap-0.5 justify-center items-center'>
                    <GoDotFill />                 Contact
                </motion.p>

                <motion.h3
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true, amount: 0.3 }}


                    className='text-3xl'>Contact <span className='text-slate-500'> With</span>
                </motion.h3>
            </div>


            <div className='flex justify-center gap-15 max-w-6xl mx-auto mt-5 py-3 px-4'>
                <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <a href="mailto:devpalakbasak@gmail.com?subject=Contact%20from%20portfolio%20website&body=I%20want%20to%20contact%20you.">
                        <IoMdMailOpen size={50} /></a>
                </motion.span>
                <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <a
                        href="https://wa.me/8801761791388?text=Hello!%20I%20found%20you%20through%20your%20portfolio%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoWhatsapp size={50} />
                    </a>
                </motion.span>
            </div>

            <div className="max-w-6xl mx-auto mt-5 py-3 px-4 rounded bg-section flex gap-5 flex-col items-center justify-center md:flex-row">

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full max-w-2xl flex flex-col justify-center gap-5 "
                >
                    <div className='border-2 border-gray-600 px-3 py-4 md:px-5 md:py-6 rounded flex flex-col gap-3'>

                        {contactInfo.map((item) => (

                            <span key={item.title} className='flex gap-2items-center text-base border-b-2 border-gray-600 pb-2 border-dashed last:border-b-0'>
                                <span className='flex w-full gap-4'>
                                    <p className='flex w-[30%] md:w-[20%] justify-center items-center font-bold  '>
                                        {item.title}:
                                    </p>
                                    <p className='text-slate-400 w-[70%] md:w-[80%]'>{item.description}</p>
                                </span>
                            </span>
                        ))}

                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Contact
