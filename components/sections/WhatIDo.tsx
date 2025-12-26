"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Cloud, Palette, Zap } from "lucide-react";
import { ParallaxSection } from "@/components/ParallaxSection";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks like React and Next.js.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Developing robust server-side applications with Node.js, Python, and database management.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Deploying and managing applications on AWS with EC2, Lambda, and other cloud services.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Systems",
    description: "Building scalable design systems and component libraries for consistent user experiences.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, efficiency, and best practices in web performance.",
    gradient: "from-yellow-500 to-orange-500",
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
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-padding relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized services I offer to bring your ideas to life
          </p>
        </motion.div>

        <ParallaxSection speed={0.4}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass-card group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-white`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
