"use client";

import { motion } from "framer-motion";

export const Pricing = () => {
  const Kickoff = [
    "Good for personal brands",
    "Includes 3 round revision",
    "Custom animations",
    "Mobile-Optimized",
    "1 month support after launch"
  ];

  const LongRun = [
    "SEO optimization",
    "Monthly website maintenance",
    "Overall Optimization",
    "Google ranking improvements",
    "AI Automation"
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
    <div className="w-full min-h-screen flex flex-col justify-center gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-3 sm:mb-5 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-700 rowdies-bold tracking-tight">
          Services at minimal cost
        </h2>
        <p className="text-neutral-600 mt-2 text-sm sm:text-base">
          We offer two plans and prices are negotiable according to the requirements
        </p>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row mx-auto gap-4 sm:gap-6 lg:gap-2">
        {/* Plan Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-1/2 border border-gray-200 rounded-xl bg-white p-4 sm:p-6 flex flex-col justify-between "
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-800">Small-Step</h2>
            <ul className="space-y-3">
              {Kickoff.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base"
                >
                  <TickIcon />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow duration-300"
            >
              Get Quote
            </motion.button>
          </div>
        </motion.div>

        {/* Plan Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 border border-gray-200 rounded-xl bg-white p-4 sm:p-6 flex flex-col justify-between s"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-700">Long-Run</h2>
            <ul className="space-y-3">
              {LongRun.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base"
                >
                  <TickIcon />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow duration-300"
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};