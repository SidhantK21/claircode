"use client"

import { useState } from "react";
import { motion } from "motion/react";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState <Number|null> (null);
//   const navigate=useNavigate();

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much time does it take to complete a project?",
      answer:
        "Generally, it takes around 7 days to build a landing page from scratch, including custom UI/UX design, development, and hosting. The overall timeline depends on the complexity of the project."
    },
    {
      question: "What makes us different from others?",
      answer:
        "We offer custom designs with smooth, tasteful animations and an enhanced user experience that effectively attracts and retains users."
    },
    {
      question: "Is the pricing flexible?",
      answer:
        "Yes! Our pricing is flexible. We strive to keep costs as low as possible without compromising on quality."
    },
    {
      question: "Will my website reach a wider audience?",
      answer:
        "Absolutely! We implement SEO optimization to help your website rank higher on Google and reach a broader audience."
    },
    {
      question: "What additional benefits will I get?",
      answer:
        "We provide AI automation tools that give you an extra edge over the competition."
    }
  ];
  
  return (
    <div className="w-full bg-white  sm:py-16 md:py-20 lg:p-1">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-2 sm:mb-2 tracking-tight">
                Questions ?
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
                We are happy to answer !
              </p>
            </div>
           
          </div>

          <div className="space-y-4 sm:space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-3 flex items-center justify-between bg-white hover:bg-emerald-50 transition-colors duration-200 text-left"
                >
                  <span className="font-medium text-base sm:text-lg text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <motion.svg
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-100 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded-xl p-6 md:p-6 mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-700 mb-2">Still some left unanswered ?</h3>
              <p className="text-neutral-600 max-w-md">Reach out to us we will discuss the things</p>
            </div>
            <motion.button
            //   onClick={()=>{
            //     navigate("/write");
            //   }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-emerald-700/50  text-white bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 font-bold tracking-tight rounded-lg "
            >
              Try writing and find out !
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;