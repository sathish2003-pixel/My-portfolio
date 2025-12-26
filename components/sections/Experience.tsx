"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/config/content";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { ParallaxText } from "@/components/ParallaxText";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experience.map((exp, index) => (
            <ParallaxText key={exp.id} speed={0.2 + index * 0.1}>
              <motion.div
                variants={item}
                className="relative pl-8 pb-12 last:pb-0"
              >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              )}

              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50"
              >
                <Briefcase className="w-4 h-4 text-white" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-500 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.4 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
            </ParallaxText>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
