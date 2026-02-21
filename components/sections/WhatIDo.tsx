"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Bot, Database, Cloud, Zap, Rocket, Globe } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Web Development",
    description: "Building responsive, high-performance web apps using React, Next.js, and TypeScript.",
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10",
    color: "text-blue-400",
    hover: "group-hover:text-blue-400",
  },
  {
    icon: <Bot className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "AI Automation",
    description: "Building intelligent systems with LLMs, multi-agent workflows, and automated pipelines.",
    gradient: "from-purple-500 to-pink-400",
    bg: "bg-purple-500/10",
    color: "text-purple-400",
    hover: "group-hover:text-purple-400",
  },
  {
    icon: <Database className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Backend Development",
    description: "Architecting scalable server-side systems with Node.js, FastAPI, and modern databases.",
    gradient: "from-green-500 to-emerald-400",
    bg: "bg-green-500/10",
    color: "text-green-400",
    hover: "group-hover:text-green-400",
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Performance & SEO",
    description: "Optimizing load times, Core Web Vitals, and search engine rankings for maximum reach.",
    gradient: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-500/10",
    color: "text-yellow-400",
    hover: "group-hover:text-yellow-400",
  },
  {
    icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Deployment & CI/CD",
    description: "End-to-end deployment with Docker, AWS Lambda, serverless functions, and automated pipelines.",
    gradient: "from-orange-500 to-red-400",
    bg: "bg-orange-500/10",
    color: "text-orange-400",
    hover: "group-hover:text-orange-400",
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Web Scraping",
    description: "Automated data extraction at scale using Selenium, headless browsers, and Dockerized scrapers.",
    gradient: "from-cyan-500 to-teal-400",
    bg: "bg-cyan-500/10",
    color: "text-cyan-400",
    hover: "group-hover:text-cyan-400",
  },
];

export function WhatIDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-padding relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            From concept to deployment — the services I bring to the table
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="glass-card h-full flex flex-col hover:shadow-xl transition-all duration-300">
                {/* Top row: icon + title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold ${service.hover} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Bottom gradient line */}
                <div className={`mt-4 sm:mt-5 h-0.5 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
