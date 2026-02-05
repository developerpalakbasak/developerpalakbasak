"use client";
import React from "react";
import { FaDatabase } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { MdApi } from "react-icons/md";
import { SiSocketdotio } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion, animate } from "framer-motion";

const Offer = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    const top = target.offsetTop;

    animate(window.scrollY, top, {
      duration: 0.1,
      ease: "easeInOut",
      onUpdate: (v) => window.scrollTo(0, v),
    });
  };

  const offerItems = [
    {
      icon: <MdComputer className="text-2xl sm:text-3xl md:text-4xl" />,
      title: "Full Stack Development",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
    {
      icon: <FaDatabase className="text-2xl sm:text-3xl md:text-4xl"  />,
      title: "Database Management",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
    {
      icon: <MdApi className="text-2xl sm:text-3xl md:text-4xl"  />,
      title: "API Development",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
    {
      icon: <SiSocketdotio className="text-2xl sm:text-3xl md:text-4xl"  />,
      title: "Real-time Applications",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
    {
      icon: <GrOptimize className="text-2xl sm:text-3xl md:text-4xl"  />,
      title: "Performance Optimization",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
    {
      icon: <FaShoppingCart className="text-2xl sm:text-3xl md:text-4xl"  />,
      title: "E-commerce Solutions",
      description:
        "I specialize in building robust and scalable web applications using the MERN stack, ensuring a seamless user experience from front-end to back-end.",
    },
  ];

  return (
    <div
      id="services"
      className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section rounded"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <p
        
          className="text-primary flex gap-0.5 justify-center items-center text-sm sm:text-base"
        >
          <GoDotFill /> What do I offer
        </p>
        <h3
        
          className="text-xl sm:text-2xl md:text-3xl text-center"
        >
          Designing Solutions{" "}
          <span className="text-slate-500">
            Customized to Meet Your Requirments
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {offerItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: "easeOut",
            }}
           
            className="rounded border p-5 mt-5 flex flex-col gap-3"
          >
            <div className="text-primary">{item.icon}</div>
            <h4 className=" font-bold text-xl sm:text-2xl">{item.title}</h4>
            <p className="leading-relaxed text-sm sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <p
        className="text-center mt-4 text-sm sm:text-base"
      >
        {" "}
        Lets chat about your idea's.{" "}
        <button
          onClick={() => scrollToSection("contact")}
          className="text-primary  cursor-pointer hover:underline"
        >
          Reach Out
        </button>
      </p>
    </div>
  );
};

export default Offer;
