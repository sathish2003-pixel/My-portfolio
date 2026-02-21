"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/config/content";
import { MapPin, Briefcase, GraduationCap, Heart, Zap, Target } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Role", value: "Software Engineer", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: <MapPin className="w-5 h-5" />, label: "Based In", value: "India", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "Computer Science", color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: <Heart className="w-5 h-5" />, label: "Passion", value: "Building Products", color: "text-rose-400", bg: "bg-rose-500/10" },
  ];

  const whatDrivesMe = [
    { icon: <Zap className="w-5 h-5" />, title: "Problem Solver", desc: "I love breaking down complex problems into simple, elegant solutions." },
    { icon: <Target className="w-5 h-5" />, title: "Detail Oriented", desc: "Every pixel matters. I focus on creating polished, pixel-perfect experiences." },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            A glimpse into who I am, what I do, and what fuels my passion for code
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 name-gradient inline-block">My Story</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              I thrive on turning ideas into reality through clean, efficient code.
              Whether it's crafting intuitive user interfaces or architecting robust backend systems,
              I bring dedication and curiosity to every project I take on.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card text-center p-4 sm:p-5"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.bg} ${item.color} mb-3`}>
                  {item.icon}
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider font-medium">{item.label}</p>
                <p className="font-bold text-xs sm:text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What Drives Me */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {whatDrivesMe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
