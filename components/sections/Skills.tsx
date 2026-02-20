"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { skills } from "@/config/content";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";

// Real brand icons for each skill
const skillIcons: Record<string, ReactNode> = {
  React: <SiReact className="w-8 h-8" />,
  "Next.js": <SiNextdotjs className="w-8 h-8" />,
  Angular: <SiAngular className="w-8 h-8" />,
  TypeScript: <SiTypescript className="w-8 h-8" />,
  Python: <SiPython className="w-8 h-8" />,
  MongoDB: <SiMongodb className="w-8 h-8" />,
  MySQL: <SiMysql className="w-8 h-8" />,
  AWS: <SiAmazonwebservices className="w-8 h-8" />,
  Docker: <SiDocker className="w-8 h-8" />,
  Git: <SiGit className="w-8 h-8" />,
  "AI/LLM": <BiBrain className="w-8 h-8" />,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="glass-card flex flex-col items-center justify-center p-4 sm:p-6 h-full min-h-[120px] hover:shadow-xl transition-all duration-300 cursor-default">
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Icon */}
                <div
                  className="mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skillIcons[skill.name] || (
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Skill name */}
                <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {skill.name}
                </span>

                {/* Category badge */}
                <span
                  className="mt-2 text-[10px] px-2 py-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
