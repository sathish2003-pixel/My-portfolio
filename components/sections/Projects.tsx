"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/config/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ParallaxSection } from "@/components/ParallaxSection";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <section id="projects" ref={ref} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Featured Projects */}
          <ParallaxSection speed={0.3}>
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </ParallaxSection>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
              >
                More Projects
              </motion.h3>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {otherProjects.map((project) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
