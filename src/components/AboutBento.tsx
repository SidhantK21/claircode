"use client"

import { UserStatsCard } from "./userProgess"
import { motion } from "motion/react";
import { IconBellOff } from '@tabler/icons-react';
import { Reorder } from "motion/react"
import { useState } from "react";

export const About = () => {
    
    const valueAdd:string[] = [
        "Scalable Solutions",
        "SEO Optimized",
        "Marketing",
        "Pitch Decks",
        "Responsive Design",
        "UI/UX Design",
        "Website Maintainence",
        "Custom Websites",
        "Landing Pages",
        "Logo Designing"
    ];
    const [items, setItems] = useState(valueAdd);

    return (

      <div className="w-full min-h-screen p-4 sm:p-16">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-10 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-2 sm:mb-2 tracking-tight">Glimpse of offerings</h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">From AI automation to responsive UI/UX — tailored solutions for modern businesses</p>
        </motion.div>

        <div className="max-w-6xl mx-auto block md:hidden space-y-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group p-6 rounded-xl bg-white border border-gray-200 relative overflow-hidden"
          >
            <h2 className="text-lg font-bold text-neutral-700 mb-4">Smooth Animations</h2>
            <div className="w-full h-32 border border-emerald-700/30 bg-gradient-to-b from-emerald-50 to-white rounded-3xl shadow-inner p-3">
              <div className="w-full h-full border border-emerald-700/30 rounded-2xl bg-white shadow-sm p-3">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="w-24 h-6 flex border border-gray-300 justify-between rounded-full items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, -15, 15, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="flex items-center ml-2"
                  >
                    <IconBellOff stroke={1.5} size={12} className="text-emerald-600" />
                  </motion.div>
                  <h2 className="text-xs text-neutral-700 font-medium mr-2">silent</h2>
                </motion.div>
                <div className="mt-2">
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Custom tasteful animations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <UserStatsCard />
          </div>

          <div className="group bg-white border border-gray-200 p-6 rounded-xl relative overflow-hidden">
            <div className="text-lg font-bold text-neutral-700 mb-6">Value Being Provided</div>
            <Reorder.Group
              axis="y"
              values={items}
              onReorder={setItems}
              className="flex flex-col items-center gap-2"
            >
              {items.map((item) => (
                <Reorder.Item
                  key={item}
                  value={item}
                  as="div"
                  className="w-full max-w-48 text-center cursor-pointer flex items-center justify-center border border-emerald-700/50 rounded-lg px-3 py-2 bg-white text-neutral-600 text-sm hover:bg-emerald-50 transition-colors duration-300"
                  whileDrag={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                >
                  {item}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>

          <div className="group bg-white border border-gray-200 p-6 rounded-xl relative overflow-hidden">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-bold text-neutral-700">AI Automation</h2>
              </div>

              <div className="w-full h-48 rounded-xl border border-gray-300 bg-neutral-900 font-mono text-xs text-white overflow-hidden shadow-inner">

                <div className="flex items-center px-3 py-2 bg-neutral-800 border-b border-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-neutral-400 text-xs">zsh — POWERED BY AI</span>
                </div>

                {/* Terminal Body */}
                <div className="px-3 py-2 space-y-1">
                  <div>
                    <span className="text-emerald-400">AI</span>:~$ <span className="text-white">npm run automate</span>
                  </div>
                  <div className="text-neutral-400">▶ Running smart automation scripts...</div>
                  <div className="text-neutral-400">✓ Custom AI agents</div>
                  <div className="text-neutral-400">✓ Workflow optimization</div>
                  <div className="text-neutral-400">✓ Personalization enabled</div>
                  <div>
                    <span className="text-emerald-400">AI</span>:~$ <span className="animate-pulse">█</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto hidden md:grid grid-cols-4 gap-2">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group p-8 rounded-xl bg-white border border-gray-200 col-span-1 relative overflow-hidden"
          >
            <h2 className="text-xl font-bold text-neutral-700 mb-4">Smooth Animations</h2>
            <div className="absolute bottom-0 top-20 left-20 right-0 w-full h-5/6 border border-emerald-700/30 bg-gradient-to-b from-emerald-50 to-white rounded-t-3xl shadow-inner">
              <div className="w-[90%] h-[100%] mx-auto my-3 p-4 border border-emerald-700/30 rounded-2xl bg-white shadow-sm">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="w-32 h-8 ml-5 flex border border-gray-300 justify-between rounded-full items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, -15, 15, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="flex items-center ml-3"
                  >
                    <IconBellOff stroke={1.5} size={16} className="text-emerald-600" />
                  </motion.div>
                  <h2 className="text-sm text-neutral-700 font-medium mr-3">silent</h2>
                </motion.div>

                <div className="flex w-32 items-center justify-center ml-5 mt-8">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Custom tasteful animations designed to be optimized and enhance user experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
  
          <div className="rounded-xl overflow-hidden border border-gray-200 col-span-2 bg-white">
            <UserStatsCard />
          </div>
  
          <div className="group bg-white border border-gray-200 p-8 rounded-xl col-span-1 row-span-2 relative overflow-hidden">
            <div className="text-xl font-bold text-neutral-700 mb-10">Value Being Provided</div>

            <Reorder.Group
              axis="y"
              values={items}
              onReorder={setItems}
              className="flex flex-col items-center gap-3"
            >
              {items.map((item) => (
                <Reorder.Item
                  key={item}
                  value={item}
                  as="div"
                  className="w-48 text-center cursor-pointer flex items-center justify-center border border-emerald-700/50 rounded-lg px-4 py-2 bg-white text-neutral-600 text-sm hover:bg-emerald-50 transition-colors duration-300"
                  whileDrag={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                >
                  {item}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>

          <div className="group bg-white border border-gray-200 p-8 rounded-xl col-span-3 relative overflow-hidden">
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-neutral-700">AI Automation</h2>
              </div>

              <div className="w-full h-60 rounded-xl border border-gray-300 bg-neutral-900 font-mono text-sm text-white overflow-hidden shadow-inner">

                <div className="flex items-center px-4 py-2 bg-neutral-800 border-b border-gray-700">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  <span className="text-neutral-400 text-xs">zsh — POWERED BY AI</span>
                </div>

                <div className="px-4 py-3 space-y-1">
                  <div>
                    <span className="text-emerald-400">AI</span>:~$ <span className="text-white">npm run automate</span>
                  </div>
                  <div className="text-neutral-400">▶ Running smart automation scripts...</div>
                  <div className="text-neutral-400">✓ Custom AI agents</div>
                  <div className="text-neutral-400">✓ Workflow optimization</div>
                  <div className="text-neutral-400">✓ Personalization enabled</div>
                  <div>
                    <span className="text-emerald-400">AI</span>:~$ <span className="animate-pulse">█</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}