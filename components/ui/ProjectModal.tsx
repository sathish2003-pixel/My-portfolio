"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { projects } from "@/config/content";
import { Button } from "./Button";
import { useEffect } from "react";

interface ProjectModalProps {
  projectId: string | null;
  onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [projectId]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {projectId && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 dark:hover:bg-black/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Image Placeholder */}
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      icon={<Github className="w-5 h-5" />}
                      variant="outline"
                    >
                      View Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      icon={<ExternalLink className="w-5 h-5" />}
                      variant="primary"
                    >
                      View Live
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
