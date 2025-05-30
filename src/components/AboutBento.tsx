"use client"

import { Award, Code, Database, Globe, Heart, Target, Users, Zap } from "lucide-react"
import UserStatsCard from "./userProgess"
import { motion } from "motion/react";
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
      <div className="w-full min-h-screen  p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
          
          {/* Who we are - Enhanced with icon and gradient */}
          <div className="group p-8 rounded-xl bg-white border border-gray-200 md:col-span-1  relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We're a passionate team of developers and designers creating innovative solutions that bridge the gap between technology and human experience. Our mission is to build products that not only function beautifully but also make a meaningful impact on people's lives.
              </p>
            </div>
          </div>
  
          {/* User Stats - Enhanced container */}
          <div className="rounded-xl overflow-hidden border border-gray-200 md:col-span-2 bg-white">
            <UserStatsCard />
          </div>
  
          {/* VALUE ADD */}
          <div className="group bg-white border border-gray-200 p-8 rounded-xl md:col-span-1 md:row-span-2 relative overflow-hidden">
            <div className="text-xl font-bold text-neutral-700 mb-4">Value Provided</div>

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
                        className="w-48 text-center cursor-pointer flex items-center justify-center border border-emerald-700/50 rounded-lg px-4 py-2 bg-white text-neutral-700 font-medium text-sm hover:bg-emerald-50 transition-colors duration-300"
                        whileDrag={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                    >
                        {item}
                    </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>




  
          {/* Our Mission - Enhanced with gradient and icon */}
          <div className="group bg-white border border-gray-200 p-8 rounded-xl  md:col-span-3 relative overflow-hidden">
            <div className="relative ">
              <div className="flex items-center gap-3 mb-4">
               
                <h2 className="text-xl font-bold text-neutral-700">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize technology and make powerful tools accessible to everyone. We believe in creating solutions that are not just functional, but delightful to use. Our commitment extends beyond code – we're building a community where innovation thrives and every user feels empowered to achieve their goals.
              </p>
              
            </div>
          </div>
  
        </div>
      </div>

    );

}