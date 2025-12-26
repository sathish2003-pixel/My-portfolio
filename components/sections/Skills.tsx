"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { skills } from "@/config/content";

// SVG icons for each skill
const skillIcons: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
      <path d="M12 21.35c-1.17 0-2.28-.1-3.3-.28-.15.93-.42 1.71-.8 2.28-.5.75-1.12 1.15-1.9 1.15-.55 0-1.06-.2-1.52-.58-.93-.78-1.48-2.2-1.48-4.02 0-.57.05-1.17.15-1.8C1.53 16.83.5 15.03.5 13s1.03-3.83 2.65-5.1c-.1-.63-.15-1.23-.15-1.8 0-1.82.55-3.24 1.48-4.02.46-.38.97-.58 1.52-.58.78 0 1.4.4 1.9 1.15.38.57.65 1.35.8 2.28 1.02-.18 2.13-.28 3.3-.28s2.28.1 3.3.28c.15-.93.42-1.71.8-2.28.5-.75 1.12-1.15 1.9-1.15.55 0 1.06.2 1.52.58.93.78 1.48 2.2 1.48 4.02 0 .57-.05 1.17-.15 1.8 1.62 1.27 2.65 3.07 2.65 5.1s-1.03 3.83-2.65 5.1c.1.63.15 1.23.15 1.8 0 1.82-.55 3.24-1.48 4.02-.46.38-.97.58-1.52.58-.78 0-1.4-.4-1.9-1.15-.38-.57-.65-1.35-.8-2.28-1.02.18-2.13.28-3.3.28Zm0-2c3.87 0 7-1.79 7-4s-3.13-4-7-4-7 1.79-7 4 3.13 4 7 4Z"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5V8l7 4.5-7 4Z"/>
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2L2 6.5l1.5 11L12 22l8.5-4.5 1.5-11L12 2Zm0 2.5 6.5 3L12 18.5 5.5 7.5 12 4.5Zm0 3-3.5 7h1.75l.7-1.75h2.1l.7 1.75h1.75L12 7.5Zm0 2.5.7 1.75h-1.4l.7-1.75Z"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12Z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm10.5 10.5v-1.8h-3v6.3h1.8v-4.5h1.2v4.5h1.8v-4.5h.6c.33 0 .6.27.6.6v3.9h1.8v-3.9c0-1.32-1.08-2.4-2.4-2.4h-2.4Zm-5.1-1.8H6.6v6.3h1.8v-6.3Z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm4.5 13.5c0 1.38 1.12 2.5 2.5 2.5h1.5v-1.5H8.5c-.55 0-1-.45-1-1s.45-1 1-1h1c1.38 0 2.5-1.12 2.5-2.5S10.88 10.5 9.5 10.5H8v1.5h1.5c.55 0 1 .45 1 1s-.45 1-1 1h-1c-1.38 0-2.5 1.12-2.5 2.5Zm8.5-3h-1.5v4.5c0 .83-.67 1.5-1.5 1.5v1.5c1.66 0 3-1.34 3-3V13.5Z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2c-1.66 0-3 .9-3 2v2h6V5h2c1.66 0 3 .9 3 2v4c0 1.1-.9 2-2 2h-6c-1.66 0-3 .9-3 2v3c0 1.1.9 2 2 2h2v-2c0-1.66 1.34-3 3-3h4c1.1 0 2-.9 2-2V7c0-2.76-3.13-5-7-5h-3Zm-1 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
      <path d="M12 22c1.66 0 3-.9 3-2v-2H9v1H7c-1.66 0-3-.9-3-2v-4c0-1.1.9-2 2-2h6c1.66 0 3-.9 3-2V6c0-1.1-.9-2-2-2h-2v2c0 1.66-1.34 3-3 3H4c-1.1 0-2 .9-2 2v6c0 2.76 3.13 5 7 5h3Zm1-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Zm0 2.18 6.5 3.6v7.23L12 18.65l-6.5-3.64V7.78L12 4.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
    </svg>
  ),
  GraphQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Zm0 2.5 6 3.33v6.34l-6 3.33-6-3.33V7.83l6-3.33ZM12 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-4 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C8.13 2 5 4.69 5 8v8c0 3.31 3.13 6 7 6s7-2.69 7-6V8c0-3.31-3.13-6-7-6Zm0 2c2.76 0 5 1.79 5 4v1c-1.27.63-3.04 1-5 1s-3.73-.37-5-1V8c0-2.21 2.24-4 5-4Zm0 16c-2.76 0-5-1.79-5-4v-5c1.27.63 3.04 1 5 1s3.73-.37 5-1v5c0 2.21-2.24 4-5 4Z"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C9.24 2 7 5.58 7 10c0 3.5 1.67 6.5 4 8v2h2v-2c2.33-1.5 4-4.5 4-8 0-4.42-2.24-8-5-8Zm0 2c1.66 0 3 2.69 3 6s-1.34 6-3 6-3-2.69-3-6 1.34-6 3-6Zm-.5 2v8h1V6h-1Z"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C8.13 2 5 4.69 5 8v8c0 3.31 3.13 6 7 6s7-2.69 7-6V8c0-3.31-3.13-6-7-6Zm0 2c2.76 0 5 1.79 5 4v1c-1.27.63-3.04 1-5 1s-3.73-.37-5-1V8c0-2.21 2.24-4 5-4Zm0 16c-2.76 0-5-1.79-5-4v-5c1.27.63 3.04 1 5 1s3.73-.37 5-1v5c0 2.21-2.24 4-5 4Z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M6.5 9h2l1 4 1-4h2l-2 6h-2l-2-6Zm7 0h2l1 4 1-4h2l-2 6h-2l-2-6ZM4 16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4ZM3 7c0-.55.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1Z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M13 3h2v2h-2V3Zm-3 0h2v2h-2V3ZM7 3h2v2H7V3Zm6 3h2v2h-2V6Zm-3 0h2v2h-2V6ZM7 6h2v2H7V6ZM4 6h2v2H4V6Zm9 3h2v2h-2V9Zm-3 0h2v2h-2V9ZM7 9h2v2H7V9ZM4 9h2v2H4V9Zm-2 3c0 3.5 2.5 6.5 6 7.45V21h2v-1.55c3.5-.95 6-3.95 6-7.45H2Zm2 0h12c0 2.76-2.24 5-5 5h-2c-2.76 0-5-2.24-5-5Z"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 0 0-1.78 0L9.2 4.29l2.25 2.25a1.54 1.54 0 0 1 1.94 1.94l2.17 2.17a1.54 1.54 0 1 1-.92.86l-2.02-2.02v5.33a1.54 1.54 0 1 1-1.27-.07V9.35a1.54 1.54 0 0 1-.84-2.02L8.26 5.08l-5.88 5.88a1.3 1.3 0 0 0 0 1.78l8.73 8.73a1.3 1.3 0 0 0 1.78 0l8.73-8.73a1.3 1.3 0 0 0 0-1.63Z"/>
    </svg>
  ),
  "AI/LLM": (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1.27c.34-.6.99-1 1.73-1a2 2 0 0 1 0 4c-.74 0-1.39-.4-1.73-1H20a7 7 0 0 1-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-4 0c0-.74.4-1.39 1-1.73V17a7 7 0 0 1-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 0 1 0-4c.74 0 1.39.4 1.73 1H4a7 7 0 0 1 7-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Zm0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4Zm13.5 5H8l.25 3h9l-.75 8.5-4.5 1.5-4.5-1.5-.25-3.5h2.5l.1 1.5 2.15.6 2.15-.6.25-2.5H7.5l-.75-7h10.5l-.25 2Z"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4Zm13.5 5H8.25l.25 3h8.75l-.75 8.5-4.5 1.5-4.5-1.5-.25-3.5h2.5l.1 1.5 2.15.6 2.15-.6.25-2.5H8l-.5-7h10.25l-.25 2Z"/>
    </svg>
  ),
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
