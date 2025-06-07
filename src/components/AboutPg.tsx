"use client"

import { motion } from "framer-motion"

export const AboutP = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const processItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="w-full  bg-white text-black px-6 py-20">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-2 sm:mb-2 tracking-tight"
          >
            About Claircode
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-neutral-600 max-w-2xl ">
            Building seamless digital experiences with clean code and beautiful design.
          </motion.p>
        </motion.div>

        {/* Who We Are */}
        <motion.section variants={itemVariants} className="mb-12">
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-neutral-700">
            Who We Are
          </motion.h3>
          <motion.p variants={itemVariants} className="text-neutral-600 leading-relaxed">
            We are a Web design agency , we build custom websites and other solutions for startups and business to help them with the business.
          </motion.p>
        </motion.section>

        {/* Our Process */}
        <motion.section variants={itemVariants}>
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-neutral-700">
            Our Process
          </motion.h3>
          <motion.ol
            variants={containerVariants}
            className="space-y-6 list-decimal list-inside text-neutral-600 leading-relaxed"
          >
            {[
              {
                title: "Discovery Call:",
                description: "Understanding your goals, brand, and product vision.",
              },
              {
                title: "Planning & Design:",
                description: "We map out user flows and design intuitive interfaces tailored to your audience.",
              },
              {
                title: "Development:",
                description:
                  "Using modern stacks like React, Next.js, and Tailwind CSS, we build responsive, performant web products.",
              },
              {
                title: "Testing & Launch:",
                description: "Rigorous testing ensures everything works perfectly across devices before deployment.",
              },
              {
                title: "Support & Growth:",
                description: "Post-launch support and iterations help you scale and refine your digital product.",
              },
            ].map((step, index) => (
              <motion.li
                key={index}
                variants={processItemVariants}
                
                className="hover:text-neutral-700 transition-colors duration-100 cursor-default"
              >
                <strong className="text-neutral-700">{step.title}</strong> {step.description}
              </motion.li>
            ))}
          </motion.ol>
        </motion.section>

        <motion.div variants={itemVariants} className="mt-12 mb-12">
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 text-neutral-700">
            What makes us different
          </motion.h3>
          <motion.p variants={itemVariants} className="text-neutral-600 leading-relaxed">
            At Claircode, we integrate the power of AI with modern web development to deliver smart, scalable digital solutions.
            Our approach is deeply rooted in strong UI/UX principles — ensuring every product we build is not only functional, but also intuitive, accessible, and visually compelling.
          </motion.p>
        </motion.div>
        
        <div className="border w-full border-gray-300/30"/>
        <motion.div
            variants={itemVariants}
            className="mt-10 border border-emerald-700/80 bg-emerald-700 text-white px-6 py-8 rounded-2xl shadow-md"
            >
            <motion.h4 variants={itemVariants} className="text-xl sm:text-2xl font-semibold mb-2">
                Ready to bring your idea to life?
            </motion.h4>
            <motion.p variants={itemVariants} className="mb-4 text-white/90">
                Let&rsquo;s build something amazing together. Get in touch and let&apos;s discuss your next big project.

            </motion.p>
            <motion.a
                variants={itemVariants}
                href="/contact"
                className="inline-block mt-2 px-6 py-2 bg-white text-emerald-700 font-bold rounded-lg "
            >
                Contact Us
            </motion.a>
        </motion.div>

      </motion.div>
    </div>
  )
}
