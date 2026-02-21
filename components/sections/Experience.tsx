"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/config/content";
import { MapPin, Calendar, ExternalLink, Brain, Globe, Blocks, Sparkles } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  blocks: <Blocks className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
};

const projectColors = [
  { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", gradient: "from-blue-500 to-cyan-400" },
  { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", gradient: "from-orange-500 to-amber-400" },
  { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", gradient: "from-purple-500 to-violet-400" },
  { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", gradient: "from-rose-500 to-pink-400" },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Where I've worked and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Company Card */}
              <div className="glass-card p-3.5 sm:p-7 md:p-8 mb-4 sm:mb-6">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Logo */}
                  <a
                    href="https://skillrank.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 overflow-hidden hover:scale-105 transition-transform"
                  >
                    <Image
                      src="/skillrank-icon.png"
                      alt="SkillRank"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                    <a
                      href="https://skillrank.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-3"
                    >
                      {exp.company}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs sm:text-sm text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs sm:text-sm text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-5">
                  {exp.description}
                </p>
              </div>

              {/* Projects Grid */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-xs font-semibold mb-4 text-gray-500 dark:text-gray-400 uppercase tracking-wider px-1">
                    Key Projects
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                    {exp.projects.map((project: { name: string; description: string; icon: string }, i: number) => {
                      const color = projectColors[i % projectColors.length];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.12 }}
                          whileHover={{ y: -4 }}
                          className={`glass-card p-3 sm:p-5 border ${color.border} hover:shadow-lg transition-all duration-300`}
                        >
                          <div className="flex items-start gap-3 sm:block">
                            <div className={`flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${color.bg} ${color.text} flex items-center justify-center sm:mb-3`}>
                              {iconMap[project.icon]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">{project.name}</h5>
                              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
