"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  User,
  FolderKanban,
  Mail,
  PenLine,
  LayoutDashboard,
} from "lucide-react"; 

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about", icon: <User size={16} /> },
    { title: "Projects", href: "/projects", icon: <FolderKanban size={16} /> },
    { title: "Contact", href: "/contact", icon: <Mail size={16} /> },
    { title: "Blog", href: "/blog", icon: <PenLine size={16} /> },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const maxWidth = useTransform(scrollY, [0, 100], ["100%", "60%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        style={{ y, maxWidth }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 py-2 md:py-4
                   flex items-center justify-between
                   backdrop-blur-3xl
                   shadow-md rounded-md border border-neutral-200 "
      >
        {/* Left icon/logo */}
        <div className="flex items-center gap-2 text-black font-semibold text-sm sm:text-base">
          <LayoutDashboard size={20} />
          <span>YourLogo</span>
        </div>

        {/* Right nav items */}
        <div className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative text-xs sm:text-sm px-2 py-1.5 flex items-center gap-1 text-neutral-500 font-medium transition-colors hover:text-black"
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 w-full h-full bg-neutral-200/80 rounded-md"
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                {item.icon}
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
