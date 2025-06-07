"use client"
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandVue,
  IconBrandAngular,
  IconBrandSvelte,
  IconBrandFirebase,
  IconBrandMongodb,
  IconBrandDocker,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Image from "next/image"

const techIcons = {
  react: IconBrandReact,
  nextjs: IconBrandNextjs,
  tailwind: IconBrandTailwind,
  typescript: IconBrandTypescript,
  nodejs: IconBrandNodejs,
  python: IconBrandPython,
  vue: IconBrandVue,
  angular: IconBrandAngular,
  svelte: IconBrandSvelte,
  firebase: IconBrandFirebase,
  mongodb: IconBrandMongodb,
  docker: IconBrandDocker,
}

export const Projects = () => {
  const projects = [
    {
      title: "Claircode Portfolio",
      description: "A sleek developer portfolio showcasing Claircode's UI/UX skills and projects.",
      imageUrl: "/prj1.avif",
      link: "https://claircode.dev",
      techStack: ["react", "nextjs", "tailwind", "typescript"],
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce store with custom CMS and dynamic product rendering.",
      imageUrl: "/prj2.avif",
      link: "https://clairshop.dev",
      techStack: ["nextjs", "nodejs", "mongodb", "tailwind"],
    },
    {
      title: "AI Landing Page",
      description: "Landing page for an AI SaaS tool with animations and responsive layout.",
      imageUrl: "/prj3.avif",
      link: "https://clairai.dev",
      techStack: ["react", "tailwind", "python", "firebase"],
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white py-10 sm:py-12 md:py-16 lg:py-5">

      <div className="max-w-7xl mx-auto px-4 sm:px-14 md:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="inline-block ml-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-2 sm:mb-2 tracking-tight">
              Previous Work
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Showcase of carefully crafted projects that demonstrate our expertise
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-3 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group cursor-pointer"
            >
              
              <div className="border border-emerald-700/30 bg-gradient-to-b from-emerald-50 to-white rounded-2xl lg:rounded-3xl shadow-inner p-1 lg:p-2 md:p-2">

                <div className="border border-emerald-700/30 rounded-xl lg:rounded-2xl  bg-white shadow-sm overflow-hidden">

                  <div className="relative w-full h-48 sm:h-52 md:h-56 bg-gray-100">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>


                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-700 mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                      {project.techStack.map((tech, techIndex) => {
                        const IconComponent = techIcons[tech as keyof typeof techIcons]
                        return IconComponent ? (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + techIndex * 0.05,
                            }}
                            className="p-1.5 sm:p-2 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"
                          >
                            <IconComponent size={18} className="text-emerald-600" />
                          </motion.div>
                        ) : null
                      })}
                    </div>
                  </div>
                </div>
              </div>
                      
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
