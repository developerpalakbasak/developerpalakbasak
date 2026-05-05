"use client";
import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

/**
 * FAQ Component
 * An accordion-style section addressing common client inquiries.
 * Designed with a modern, high-contrast look suitable for both light and dark modes.
 */

// FAQ Data: Centralized list of questions and detailed answers
const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js), Next.js for high-performance web apps, and React Native/Expo for cross-platform mobile development (iOS & Android). I also have experience with Electron for desktop apps."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A landing page might take 1-2 weeks, while a full-scale web or mobile application usually takes 4-8 weeks. I prioritize quality and follow agile methodologies to deliver results in phases."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, I offer various maintenance and support packages. Whether it's bug fixes, performance monitoring, or adding new features, I ensure your application stays up-to-date and scales with your business needs."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely. I am comfortable diving into existing projects to refactor code, fix persistent bugs, or implement new features. I follow industry-standard practices to ensure maintainability and clean architecture."
  },
  {
    question: "How do you handle project communication?",
    answer: "I believe in transparency. I provide regular updates through your preferred channel (Slack, WhatsApp, or Email) and hold weekly progress meetings. You'll have access to a staging environment to track development in real-time."
  }
];

const FAQ = () => {
  // State to track the currently expanded accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 py-8 sm:py-12 md:py-16 2xl:py-24 bg-card/80 backdrop-blur-sm border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] relative overflow-hidden shadow-sm">
      {/* Visual background element: Decorative Glow: Optimized for mobile */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-primary/15 blur-2xl sm:blur-[100px] rounded-full pointer-events-none" />

      {/* Header Section: Component context and visual title */}
      <div className="relative z-10 flex flex-col items-center mb-6 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
          <GoDotFill className="text-primary animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Got Questions?</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-7xl font-black text-center mb-4 2xl:mb-8">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Questions</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl 2xl:max-w-4xl text-sm sm:text-lg md:text-xl 2xl:text-3xl 2xl:leading-loose">
          Everything you need to know about working with me and the development process.
        </p>
      </div>

      {/* Accordion List: Iterates through FAQ items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`group border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-card shadow-2xl border-primary/30" : "bg-card/40 hover:border-primary/20"
              }`}
          >
            {/* Question Trigger: Handles click to toggle expansion */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8 2xl:p-12 text-left transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 2xl:w-16 2xl:h-16 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2rem] border border-card-border mt-0.5 transition-all duration-300 ${openIndex === index ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-card-secondary text-primary"
                  }`}>
                  <FaQuestionCircle className="text-base sm:text-xl 2xl:text-3xl" />
                </div>
                <span className={`text-base md:text-xl 2xl:text-3xl font-bold transition-colors ${openIndex === index ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}>
                  {faq.question}
                </span>
              </div>
              <div className={`transition-transform duration-300 2xl:text-2xl ${openIndex === index ? "rotate-180 text-primary" : "text-slate-500"}`}>
                <FaChevronDown />
              </div>
            </button>

            {/* Answer Panel: Collapsible content section */}
            <div
              className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="px-5 sm:px-8 2xl:px-12 pb-6 sm:pb-8 2xl:pb-12 pt-2">
                <div className="h-[1px] w-full bg-card-border mb-4 sm:mb-6" />
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-loose md:pl-14 2xl:pl-20">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA: Link to contact page for further inquiries */}
      <div className="mt-6 sm:mt-10 text-center">
        <p className="text-slate-500 dark:text-slate-400 mb-4">Still have questions?</p>
        <a
          href="/contact"
          className="text-primary font-bold hover:underline underline-offset-4 flex items-center justify-center gap-2 group"
        >
          Feel free to reach out directly
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
};

export default FAQ;
