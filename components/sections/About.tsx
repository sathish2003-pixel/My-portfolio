"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/config/content";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: <Briefcase className="w-5 h-5" />, label: "Software Engineer", value: "1+ Year Experience" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Education", value: "Computer Science" },
    { icon: <Heart className="w-5 h-5" />, label: "Passion", value: "Building Products" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm constantly learning and exploring new technologies to stay at
              the forefront of web development. When I'm not coding, you'll find
              me contributing to open-source projects or writing technical
              articles to share knowledge with the developer community.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card text-center p-4"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-500 mb-3">
                  {item.icon}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                <p className="font-semibold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
