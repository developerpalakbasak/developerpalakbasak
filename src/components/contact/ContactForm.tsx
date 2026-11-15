"use client";
import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaCheckCircle } from "react-icons/fa";

/**
 * ContactForm Component
 * A modern, beautifully designed contact form matching the website's aesthetics,
 * fully connected to MongoDB via /api/contact.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    <div className="w-full bg-card border border-card-border p-6 sm:p-8 md:p-10 rounded-2xl lg:rounded-3xl shadow-sm relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900 dark:text-slate-100">
          Send a <span className="text-primary">Message</span>
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-8">
          I&apos;m currently available for freelance projects and full-time roles.
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-card-secondary/50 border border-card-border rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="form-email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-card-secondary/50 border border-card-border rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Subject Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <FaTag />
              </div>
              <input
                type="text"
                id="form-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full bg-card-secondary/50 border border-card-border rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="form-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project, timeline, and goals..."
              className="w-full bg-card-secondary/50 border border-card-border rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 w-full py-3.5 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
              isSuccess 
                ? "bg-emerald-500 hover:bg-emerald-600 shadow-[0_5px_20px_rgba(16,185,129,0.3)]" 
                : "bg-primary hover:bg-primary/90 shadow-[0_5px_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_8px_25px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-0.5"
            } disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending Message...
              </span>
            ) : isSuccess ? (
              <span className="flex items-center gap-2">
                <FaCheckCircle /> Message Sent!
              </span>
            ) : (
              <span className="flex items-center gap-2 group">
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
