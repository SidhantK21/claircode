"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const [, setHovered] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

   


  const y = useTransform(scrollY, [0, 100], [0, 12]);
  const maxWidth = useTransform(scrollY, [0, 100], ["80%", "60%"]);
  const maxWidthS = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  return (
    <div className="fixed mt-1 top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        style={{
          y,
          maxWidth: isMobile ? maxWidthS : maxWidth,
          scale,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`
          mx-auto w-full px-4 sm:px-6 md:px-8 py-2 md:py-3
          flex items-center justify-between
          backdrop-blur-3xl
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          pointer-events-auto
          ${scrolled
            ? "rounded-full shadow-custom backdrop-blur-2xl"
            : "rounded-md bg-white/0 border-transparent shadow-none"}
        `}
      >
      
        <Link
          href="/"
          className="text-xl  bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent font-semibold tracking-tight"
        >
          claircode
        </Link>


        <div className="hidden sm:flex flex-1 justify-center">
          <div className="flex items-center gap-3">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative text-sm px-2 py-1.5 text-neutral-500 hover:text-black transition-colors font-medium"
              >
                <span className="relative z-10 font-semibold text-neutral-700 hover:text-neutral-900">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            className="text-neutral-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden sm:block">
          <Link
            href="/meeting"
            className="text-sm px-3 py-1.5 rounded-md font-bold border border-emerald-700/50 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white "
          >
            Call
          </Link>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden mt-4 mx-4 rounded-lg bg-white shadow-lg border border-neutral-200 p-4 z-40"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-700 font-medium hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 text-center px-3 py-2 rounded-md font-bold bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};
