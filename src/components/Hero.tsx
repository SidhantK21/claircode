"use client";

import { cn } from "@/libs/utils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Marquee from "react-fast-marquee";

export const Hero = () => {
  const words: string[] = ["perform", "impress", "convert", "dominate"];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<Boolean | false>(false);

  const client: string[] = [
    "jagechasmewala",
    "nepaltravels",
    "pdfreader",
    "rentalcarz",
    "houseify",
    "vnboitque",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white overflow-hidden md:5 lg:mt-10 px-4 sm:px-6 lg:px-12 py-10">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:10px_10px]",
          "[background-image:radial-gradient(circle,_rgb(220,220,220)_1px,_transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-5xl">
        <h1 className="text-5xl  md:text-7xl lg:text-8xl font-bold rowdies-bold tracking-tighter text-gray-900">
          CLAIRCODE
        </h1>

        <div className="mt-4 w-full max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500 leading-relaxed">
          <p className="px-2 sm:px-4">
            I build custom websites that{" "}
            <span className="align-middle relative inline-flex w-[110px] h-[1.8em] justify-center items-center font-bold text-emerald-600">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 font-bold text-emerald-600"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            , leave lasting impressions, and drive measurable growth.
          </p>
        </div>

        {/* CTA Button */}
        <motion.button 
          className="mt-10 relative w-52 h-12 rounded-xl overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileTap={{scale:0.98}}
        >
          {/* Button Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-xl" />
          
          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-xl opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{
              x: isHovered ? "100%" : "-100%"
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          {/* Button Text */}
          <span className="relative z-10 text-white font-bold text-base">
            Let's connect
          </span>
          
          {/* Border */}
          <div className="absolute inset-0 rounded-xl border border-emerald-700/50" />
        </motion.button>

        {/* Marquee Section */}
        <div className="w-full max-w-xl mx-auto mt-16 sm:mt-20 text-center  ">
          <h2 className="text-sm sm:text-md font-mono text-gray-700 mb-4 sm:mb-5">
            Trusted by
          </h2>

          <div className="relative overflow-hidden h-10 
            [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] 
            dark:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee
              speed={28}
              pauseOnHover
              className="text-sm sm:text-base flex items-center font-sm text-neutral-400"
            >
              {client.map((val, idx) => (
                <span key={idx} className="mx-6 sm:mx-8">
                  {val}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
