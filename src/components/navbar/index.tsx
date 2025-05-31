"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  const y = useTransform(scrollY, [0, 100], [0, 12]);
  const maxWidth = useTransform(scrollY, [0, 100], ["80%", "60%"]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        style={{ y, maxWidth, scale }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`
          mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 py-2 md:py-3
          flex items-center justify-between
          backdrop-blur-3xl
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          pointer-events-auto
          ${scrolled ? "rounded-full border border-neutral-200 bg-white/80 shadow-md" : "rounded-md bg-white/0 border-transparent shadow-none"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
          <Link
            href={"/"}
            className="cursor-pointer text-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-tight"
          >
            claircode
          </Link>
        </div>

        {/* Nav Links */}
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
                  className="absolute inset-0 rounded-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
