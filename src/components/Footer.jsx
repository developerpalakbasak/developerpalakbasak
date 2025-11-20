"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareUpwork } from 'react-icons/fa6';
import { IoMdCode } from 'react-icons/io'
import { motion } from 'framer-motion';

const Footer = () => {


  const icons = [
    { icon: <FaLinkedin />, to: 'https://www.linkedin.com/in/palak-basak-a05510208/' },
    { icon: <FaGithub />, to: 'https://github.com/developerpalakbasak' },
    { icon: <FaSquareUpwork />, to: 'https://www.upwork.com/freelancers/~01497f6abe72a2a2ac' },
  ];




  return (


    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      
      className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section flex flex-col justify-center items-center gap-4 rounded">
      <div className="text-xl font-bold flex gap-1 items-center justify-center ">

        
        <IoMdCode color="#077a57" size={25} />
        <p className='dark:text-logo'>Developer Palak</p>
      </div>


      <div className="flex items-center gap-4 text-xl">
        {/* Social Icons */}
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.to}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {item.icon}
          </a>
        ))}


      </div>
    </motion.div>
  )
}

export default Footer