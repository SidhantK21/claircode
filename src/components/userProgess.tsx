"use client"
import ExponentialAreaChart from "./Graph";
import { motion } from "framer-motion";

export const UserStatsCard = () => {
  // const sampleData = [10, 30, 20, 50, 40, 60, 80];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          
          <h5 className="text-xl font-bold text-neutral-700">Growth</h5>
        </div>
        <div className="flex items-center px-3 py-1.5 bg-emerald-50 rounded-full">
          <span className="text-sm font-semibold text-emerald-600 ">+100%</span>
          <svg className="w-3 h-3 ms-1 text-emerald-600" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>

      <div className="flex-grow">
        <ExponentialAreaChart  />
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <button
            className="text-sm font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
            type="button"
          >
            Growth Guaranteed
          </button>
          <span className="text-xs text-gray-400">Updated just now</span>
        </div>
      </div>
    </motion.div>
  );
};

