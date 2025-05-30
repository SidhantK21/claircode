"use client";

import { motion } from "framer-motion";

export const Pricing = () => {
  const Kickoff = [
    "Good for personal brands",
    "Includes 3 round revision",
    "Custom animations",
    "Mobile-Optimized"
  ];

  const LongRun = [
    "SEO optimization",
    "Monthly website maintenance",
    "Overall Optimization",
    "Google ranking improvements"
  ];

  const TickIcon = () => (
    <svg
      className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-[2px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="w-full min-h-screen flex flex-col justify-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-5  max-w-6xl mx-auto"
      >
        <h2 className="lg:text-5xl font-bold text-neutral-700 rowdies-bold tracking-tight">
          Services at minimal cost
        </h2>
        <p className="text-neutral-600 mt-2">
          We offer two plans and prices are negotiable according to the requirements
        </p>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row mx-auto gap-2">
        {/* Plan Card 1 */}
        <div className="w-full lg:w-1/2 border border-gray-200 rounded-xl bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">Custom Web Solutions</h2>
            <ul className="space-y-3">
              {Kickoff.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-neutral-700 text-base">
                  <TickIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <button className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white px-5 py-2 rounded-lg font-bold ">
              Get Quote
            </button>
          </div>
        </div>

        {/* Plan Card 2 */}
        <div className="w-full lg:w-1/2 border border-gray-200 rounded-xl bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-700">Long-Run</h2>
            <ul className="space-y-3">
              {LongRun.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-neutral-700 text-base">
                  <TickIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <button className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white px-5 py-2 rounded-lg font-bold">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
