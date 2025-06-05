"use client"

import Link from "next/link";
import {  IconBrandGithub, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { motion } from "motion/react";

export const Footer = () => {

    const socialLinks = [
        {
          href: "https://github.com/your-profile",
          icon: <IconBrandGithub className="w-5 h-5" />,
        },
        {
          href: "https://instagram.com/your-profile",
          icon: <IconBrandInstagram className="w-5 h-5" />,
        },
        {
          href: "https://x.com/your-profile",
          icon: <IconBrandX className="w-5 h-5" />,
        },
      ];

  return (
    <div className="w-full border-neutral-300 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4">
        <div className="flex flex-col md:items-start items-center">

          <motion.h2
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.3}}
          className="rowdies-bold text-3xl font-bold tracking-tight bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            claircode
          </motion.h2>
          <p className="text-xs text-neutral-400 mt-1">
            © {new Date().getFullYear()} ClairCode. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.4 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link href={link.href} target="_blank">
                <span className="text-neutral-500 hover:text-emerald-500 transition-colors cursor-pointer">
                  {link.icon}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
