"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdMailOpen, IoLogoWhatsapp } from "react-icons/io";
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCheckCircle } from "react-icons/fa";

/**
 * Contact Component
 * Complete contact section featuring an interactive contact form,
 * direct contact channels (Email, WhatsApp), and location info.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full md:w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1560px] mx-auto bg-card border border-card-border p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm relative overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header: Call to action */}
      <div className="flex flex-col items-center justify-center gap-3 relative z-10 text-center mb-8 sm:mb-12">
        <p className="text-primary flex gap-1 justify-center items-center text-xs sm:text-sm md:text-base font-medium">
          <GoDotFill /> Let&apos;s Connect
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Build <span className="text-primary">Something Amazing?</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl">
          Drop me a message using the form below or reach out directly. I respond promptly and look forward to discussing your project.
        </p>
      </div>

      {/* Main Grid: Contact Info (Left) + Contact Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-start">
        {/* Left Column: Direct Outreach & Location Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Email Card */}
            <a
              href="mailto:developerpalakbasak@gmail.com?subject=Contact%20from%20portfolio%20website&body=I%20want%20to%20contact%20you."
              className="group flex items-center gap-4 p-4 rounded-xl sm:rounded-2xl bg-card-secondary/60 border border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              title="Send an Email"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <IoMdMailOpen size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 font-medium">Email Me</p>
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 break-all leading-snug">
                  developerpalakbasak@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801761791388?text=Hello!%20I%20found%20you%20through%20your%20portfolio%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl sm:rounded-2xl bg-card-secondary/60 border border-card-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-md"
              title="Chat on WhatsApp"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <IoLogoWhatsapp size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 break-words">
                  +880 1761 791388
                </p>
              </div>
            </a>
          </div>

          {/* Location Information Card */}
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card-secondary/60 border border-card-border flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Location
            </h4>
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center text-sm border-b pb-3 border-card-border last:border-b-0 last:pb-0"
              >
                <span className="font-semibold w-24 text-primary shrink-0">{item.title}:</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium break-words">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* Availability Status Badge */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Available for freelance & full-time roles
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-card-secondary/40 border border-card-border p-5 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xs">
          <h3 className="text-xl sm:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100">
            Send a <span className="text-primary">Message</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
            Fill in the details below and I will get back to you shortly.
          </p>

          {isSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
              <FaCheckCircle className="shrink-0 text-lg" />
              <p className="text-xs sm:text-sm font-medium">
                Thank you! Your message has been sent successfully. I&apos;ll be in touch soon.
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-600 dark:text-red-400">
              <p className="text-xs sm:text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FaUser className="text-sm" />
                  </div>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-card border border-card-border rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-card border border-card-border rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <FaTag className="text-sm" />
                </div>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full bg-card border border-card-border rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project, timeline, budget, or ideas..."
                className="w-full bg-card border border-card-border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 w-full py-3 sm:py-3.5 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                isSuccess
                  ? "bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.3)]"
                  : "bg-primary hover:bg-primary/90 shadow-[0_4px_16px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-0.5"
              } disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  <FaCheckCircle /> Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2 group">
                  Send Message
                  <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
