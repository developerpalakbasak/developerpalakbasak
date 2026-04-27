"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdMailOpen } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

/**
 * Contact Component
 * Provides direct contact methods (Email, WhatsApp) and location information.
 * Features large interactive icons for quick outreach.
 */
const Contact = () => {
  // Location and identity details
  const contactInfo = [
    {
      title: "Address",
      description: "Raikali, Akkelpur, Joypurhat",
    },
    {
      title: "Division",
      description: "Rajshahi",
    },
    {
      title: "Country",
      description: "Bangladesh",
    },
  ];

  return (
    <div
      id="contact"
      className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-6 md:py-8 lg:py-10 2xl:py-20 p-6 2xl:px-12 bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem]"
    >
      {/* Header: Call to action for building projects */}
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-primary flex gap-0.5 justify-center items-center text-xs sm:text-sm md:text-base 2xl:text-xl">
          <GoDotFill /> Let's Connect
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-6xl text-center font-bold">
          Ready to Build <span className="text-slate-500">Something Amazing?</span>
        </h3>
        <p className="text-xs sm:text-sm 2xl:text-xl text-slate-400 text-center max-w-lg 2xl:max-w-3xl 2xl:leading-loose">
          Drop me a message — I respond fast. Let's discuss your project, timeline, and how I can help bring your vision to life.
        </p>
      </div>

      {/* Primary Contact Channels: Email and WhatsApp */}
      <div className="flex justify-center gap-12 w-full mt-10 py-3 px-4">
        <a
          href="mailto:devpalakbasak@gmail.com?subject=Contact%20from%20portfolio%20website&body=I%20want%20to%20contact%20you."
          className="hover:scale-110 transition-transform text-primary inline-block 2xl:scale-150 origin-center"
          title="Send an Email"
        >
          <IoMdMailOpen size={50} />
        </a>
        <a
          href="https://wa.me/8801761791388?text=Hello!%20I%20found%20you%20through%20your%20portfolio%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform text-green-500 inline-block 2xl:scale-150 origin-center"
          title="Chat on WhatsApp"
        >
          <IoLogoWhatsapp size={50} />
        </a>
      </div>

      {/* Location Information Card */}
      <div className="w-full max-w-2xl 2xl:max-w-4xl mx-auto mt-10 2xl:mt-16 p-1 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem]">
        <div className="border border-card-border bg-card/50 backdrop-blur-sm px-4 sm:px-6 2xl:px-12 py-4 sm:py-6 2xl:py-16 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] flex flex-col gap-2 sm:gap-3 2xl:gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="flex items-center text-sm sm:text-base 2xl:text-2xl border-b pb-2 sm:pb-4 2xl:pb-6 border-card-border last:border-b-0 last:pb-0"
            >
              <p className="font-bold w-24 2xl:w-40 text-primary">{item.title}:</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
