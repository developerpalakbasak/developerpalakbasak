import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiPostgresql, SiNginx } from "react-icons/si";

const Spiner = () => {
  const icons = [
    { icon: <SiMongodb size={30} className="text-green-500" /> },
    { icon: <SiExpress size={30} className="text-white" /> },
    { icon: <FaReact size={30} className="text-cyan-400" /> },
    { icon: <FaNodeJs size={30} className="text-green-500" /> },
    { icon: <SiPostgresql size={30} className="text-blue-400" /> },
    { icon: <FaDocker size={30} className="text-blue-500" /> },
    { icon: <SiNginx size={30} className="text-green-500" /> },
    { icon: <FaHtml5 size={30} className="text-orange-500" /> },
    { icon: <FaCss3Alt size={30} className="text-blue-500" /> },
    { icon: <SiNextdotjs size={30} className="text-white" /> },
    { icon: <span className="font-bold text-lg text-yellow-400">JS</span> },
  ];

  const containerSize = 300; // spinner size
  const iconWrapperSize = 50; // wrapper around icon
  const radius = containerSize / 2 - iconWrapperSize / 2; // distance from center to icon center

  return (
    <div className="relative flex justify-center items-center my-8 bg-section">




      <div className="relative w-[300px] h-[300px]">

        {/* Spinner circle */}
        <div
          className="absolute top-1/2 left-1/2 h-[90%] w-[90%] border border-slate-400 rounded-full animate-rotateCircle
                  -translate-x-1/2 -translate-y-1/2"
        >

        </div>


        {/* Center label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-slate-500 px-4 py-2 bg-slate-800 rounded-2xl flex items-center justify-center">
          <span>My Expertise</span>
        </div>

        {/* Colored corner glows */}
        <div className="absolute w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#0084FF] blur-2xl" />
          <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-[#07694A] blur-2xl" />
          <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#C13584] blur-2xl" />
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-[#FCAF45] blur-2xl" />
        </div>

        <div className="absolute top-1/2 left-1/2        -translate-x-1/2 -translate-y-1/2 spiner">
          {/* Icons on the circle */}
          {icons.map((item, index) => {
            const totalIcons = icons.length;
            const angle = (360 / totalIcons) * index - 90; // start from top
            const radian = (angle * Math.PI) / 180;

            const x = radius * Math.cos(radian);
            const y = radius * Math.sin(radian);

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div
                  className="w-[50px] h-[50px] p-2 rounded-2xl bg-[linear-gradient(rgb(84,84,84)_20%,rgb(0,0,0)_100%)]          drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]          hover:scale-110 transition-transform duration-300          animate-counterRotate          flex items-center justify-center"
                >
                  {item.icon}
                </div>



              </div>
            );
          })}
        </div>



      </div>



    </div>
  );
};

export default Spiner;
