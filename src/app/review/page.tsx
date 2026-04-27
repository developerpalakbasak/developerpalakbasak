"use client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

/**
 * Review Page Component
 * Displays professional testimonials and client feedback in a responsive grid.
 * Reinforces credibility through high-quality visual representation of reviews.
 */

// Testimonial Data: Collection of client feedback across various projects
const reviews = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "CEO at Fintech Solutions",
    message: "Working with Palak was a game-changer for our mobile app. The React Native implementation is flawless, and the performance is beyond our expectations. Truly a senior-level talent.",
    rating: 5,
    date: "March 2024",
    avatar: "AW"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Lead at CloudScale",
    message: "The attention to detail in the Next.js frontend is remarkable. Our conversion rate increased by 40% after the redesign. Palak doesn't just write code; they build business value.",
    rating: 5,
    date: "February 2024",
    avatar: "SC"
  },
  {
    id: 3,
    name: "James Miller",
    role: "Founder of Creative Pulse",
    message: "Fast, reliable, and incredibly skilled. The MERN stack architecture Palak designed for us is robust and scales effortlessly. I highly recommend them for any complex web project.",
    rating: 5,
    date: "January 2024",
    avatar: "JM"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "CTO at HealthSync",
    message: "Palak's ability to bridge the gap between web and mobile is unique. We needed a unified ecosystem, and they delivered a masterpiece across all platforms. A pleasure to work with.",
    rating: 5,
    date: "December 2023",
    avatar: "ER"
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Director at EduTech",
    message: "Pixel-perfect UI and rock-solid backend. The integration of real-time features was handled with absolute precision. One of the best developers I've collaborated with.",
    rating: 4,
    date: "November 2023",
    avatar: "DT"
  },
  {
    id: 6,
    name: "Sophia Lee",
    role: "Senior Designer at Pixel Labs",
    message: "As a designer, I'm very picky about implementation. Palak brought my designs to life with pixel-perfect accuracy and smooth animations that truly delight the user.",
    rating: 5,
    date: "October 2023",
    avatar: "SL"
  }
];

const ReviewPage = () => {
  return (
    <div className="page-fade-in space-y-8 min-h-screen pb-20">
      {/* Header Section: Standardized across all top-level pages */}
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto p-2 sm:px-6 pt-8 sm:pt-12 md:pt-16 2xl:pt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 italic border-b-4 border-primary inline-block text-center text-gradient">
          Client Reviews
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-3xl text-muted-foreground leading-relaxed">
          Don't just take my word for it. Here's what my clients and partners have 
          to say about our collaboration and the results we achieved.
        </p>
      </div>

      {/* Reviews Grid: Interactive cards featuring client testimonials */}
      <div className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto p-2 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="group relative bg-card border border-card-border p-2 sm:p-4 md:p-6 lg:p-8 2xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden shadow-sm"
          >
            {/* Visual background accent for depth */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                {/* Rating Display: Visual representation of satisfaction */}
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? "fill-current" : "text-slate-600/30"} />
                  ))}
                </div>
                <FaQuoteLeft className="text-3xl text-primary/20 group-hover:text-primary/40 transition-colors" />
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed mb-6 sm:mb-8 italic">
                "{review.message}"
              </p>
            </div>

            {/* Reviewer Meta: Identity and role details */}
            <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-card-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {review.avatar}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{review.name}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge Section: Conversion-focused call to action */}
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto p-2 sm:px-6 mt-16 sm:mt-24 text-center">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-16 rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem] bg-card border border-card-border relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-bold mb-4">Ready to start your next project?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Join these satisfied clients and let's build something extraordinary together.</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-white font-black hover:bg-primary/80 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Get In Touch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
