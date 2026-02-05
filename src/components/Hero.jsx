"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRefinedgithub,
  SiUpwork,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const Hero = () => {
  const icons = [
    {
      icon: <FaLinkedinIn />,
      to: "https://www.linkedin.com/in/palak-basak-a05510208/",
    },
    { icon: <SiRefinedgithub />, to: "https://github.com/developerpalakbasak" },
    {
      icon: <SiUpwork />,
      to: "https://www.upwork.com/freelancers/~01497f6abe72a2a2ac",
    },
  ];

  const imageSrc =
    "https://res.cloudinary.com/ddfimjibr/image/upload/v1754016859/mern_nextjs_nodejs_react_reactjs_mongodb_wsh0vy.jpg";

  const secondryIcons = [
    {
      icon: <SiMongodb size={35} />,
      name: "MongoDB",
      bg: "bg-green-600",
      text: "text-white",
    },
    {
      icon: <SiExpress size={35} />,
      name: "Express",
      bg: "bg-white",
      text: "text-black",
    },
    {
      icon: <FaReact size={35} />,
      name: "React",
      bg: "bg-cyan-500",
      text: "text-white",
    },
    {
      icon: <FaNodeJs size={35} />,
      name: "Node.js",
      bg: "bg-green-500",
      text: "text-white",
    },
    {
      icon: <TbBrandNextjs size={35} />,
      name: "Next.js",
      bg: "bg-black",
      text: "text-white dark:text-white",
    },
  ];

  const primaryIcons = [
    {
      icon: <FaHtml5 size={35} />,
      name: "HTML5",
      bg: "bg-orange-500",
      text: "text-white",
    },
    {
      icon: <FaCss3Alt size={35} />,
      name: "CSS3",
      bg: "bg-blue-500",
      text: "text-white",
    },
    {
      icon: <SiTailwindcss size={35} />,
      name: "Tailwind CSS",
      bg: "bg-sky-400",
      text: "text-white",
    },
    {
      customIcon: "JS",
      name: "JavaScript",
      bg: "bg-amber-300",
      text: "text-slate-900",
    },
    {
      customIcon: "TS",
      name: "TypeScript",
      bg: "bg-blue-600",
      text: "text-white",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-5 py-5 px-4 rounded bg-section flex gap-10 flex-col md:flex-row overflow-hidden">
      {/* Left */}
      

      {/* <div className="absolute inset-0 rounded-full shadow-[0_0_40px_15px_rgba(6,123,86,0.8)] animate-pulse-glow"></div> */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.4,
          delay: 0.05,
          ease: "easeOut",
        }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center"
      >
        {/* Profile with glow */}
        <div className="relative w-[298] h-[298] md:w-[350] md:h-[350] lg:w-[400] lg:h-[400] rounded-full">
          {/* Image */}
          <img
            src={imageSrc}
            width={400}
            height={400}
            alt="developerpalak"
            className="w-full h-full rounded-full object-cover relative z-10"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-xl">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              className="p-2 border-2 border-logo text-logo hover:bg-logo-hover rounded-full"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: 0.05,
            ease: "easeOut",
          }}
          className=" sm:text-base md:text-lg"
        >
          Hey, I'm Palak Basak
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: 0.05,
            ease: "easeOut",
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            Senior
            <span className="text-primary">{`${" "}{ Full-Stack } ${" "}`}</span>
            <span>Developer</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0 }}
          className="mt-2"
        >
          With expertise in cutting-edge technologies such as{" "}
          <span className="text-red-700">MongoDB, Express, React, NodeJS,</span>{" "}
          and <span className="text-red-700">NEXTJS</span> ... I deliver web
          solutions that are both innovative and robust.
        </motion.p>

        {/* Icons */}
        <div className="mt-6 flex flex-col items-center md:items-baseline justify-center md:justify-start">
          <div className="flex gap-4 flex-wrap">
            {primaryIcons.map((item, index) => (
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 + index * 0.05 }}
                viewport={{ once: true, amount: 0 }}
                key={index}
                className={`p-1 select-none flex justify-center items-center rounded ${item.bg} ${item.text} h-12 w-12`}
              >
                {!item.customIcon && item.icon}
                {item.customIcon && (
                  <span className="text-2xl font-extrabold tracking-wider">
                    {item.customIcon}
                  </span>
                )}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap mt-4">
            {secondryIcons.map((item, index) => (
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 + index * 0.05 }}
                viewport={{ once: true, amount: 0 }}
                key={index}
                className={`p-1 flex justify-center items-center rounded ${item.bg} ${item.text} h-12 w-12`}
              >
                {item.icon}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
