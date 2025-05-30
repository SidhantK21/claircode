"use client"

import { motion } from "framer-motion";

export const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col  justify-center gap-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mb-5 max-w-6xl mx-auto"
            >
            <h2 className="lg:text-5xl font-bold text-neutral-700 rowdies-bold tracking-tight ">
                Services that you need
            </h2>
            <p className="text-neutral-600 mt-2">
                To elevate your brands identity, appearance and engage your audience.
            </p>
        </motion.div>


      <div className="w-full max-w-6xl flex flex-row mx-auto gap-2 ">
        {/* Service Card 1 */}
        <div className="w-96 h-96 border border-gray-200 rounded-lg flex flex-col justify-end p-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-neutral-700">Custom Web Solutions</h2>
            <p className="text-neutral-600">We provide custom web solutions for everyone tailored for their niche.</p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="w-96 h-96 border border-gray-200 rounded-lg flex flex-col justify-end p-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-neutral-700">UI/UX Design</h2>
            <p className="text-neutral-600">We make customized designs for everyone that are best of kind.</p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="w-96 h-96 border border-gray-200 rounded-lg flex flex-col justify-end p-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-neutral-700">SEO Optimization</h2>
            <p className="text-neutral-600">We make seo optimized websites that appear on the search at top.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
