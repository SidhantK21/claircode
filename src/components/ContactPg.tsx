"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    setTimeout(() => {
      setStatus({ type: "success", message: "Thank you! I will get back to soon" });
      setSubmitting(false);
      setEmail("");
    }, 1200);
  };

  return (
    <div className="w-full  mx-auto border border-emerald-700/80  p-6 rounded-md mt-10 bg-emerald-50 space-y-6 shadow-custom">
      <div className="space-y-1">
        <h2 className="font-bold text-2xl text-neural-700 ">
          Want to work with us ? Let&apos;s discuss.
        </h2>
        <p className="tracking-tight text-neutral-600 ">
            Drop your message and let&apos;s discuss about your project.
        </p>
      </div>

      <a
        href="https://wa.me/7607010648"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <button className="w-full sm:w-48 h-10 border border-emerald-700/80 mt-2 mb-3 rounded-lg bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700  font-bold tracking-tight  text-white transition-all">
          Chat on WhatsApp
        </button>
      </a>

      <div className="w-full border-t border-gray-300 " />

      <div className="space-y-1">
        <h2 className="tracking-tight text-netral-600 ">
          Drop in your email ID and I will get back to you.
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="abc@gmail.com"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          className="px-4 py-2 block w-full rounded-md bg-white  pr-32 border border-gray-300  text-gray-900  outline-none transition"
          disabled={submitting}
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={submitting}
          className="absolute right-1 top-1.5 px-4 h-8 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 border border-emerald-700/80 text-white rounded w-24 sm:w-28 font-semibold"
        >
          {submitting ? "Sending..." : "Send"}
        </motion.button>
        {status.message && (
          <div
            className={`mt-8 text-sm ${
              status.type === "success"
                ? "text-neutral-600"
                : "text-red-600 dark:text-red-400"
            }`}
            role="alert"
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};
