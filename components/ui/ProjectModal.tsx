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

const tagColors: Record<string, { bg: string; text: string }> = {
  React: { bg: "bg-cyan-500/10", text: "text-cyan-400" },
  "Next.js": { bg: "bg-gray-500/10", text: "text-gray-400" },
  TypeScript: { bg: "bg-blue-500/10", text: "text-blue-400" },
  JavaScript: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  "Tailwind CSS": { bg: "bg-teal-500/10", text: "text-teal-400" },
  MongoDB: { bg: "bg-green-500/10", text: "text-green-400" },
  PHP: { bg: "bg-indigo-500/10", text: "text-indigo-400" },
  MySQL: { bg: "bg-orange-500/10", text: "text-orange-400" },
  HTML5: { bg: "bg-orange-500/10", text: "text-orange-400" },
  CSS3: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Bootstrap: { bg: "bg-purple-500/10", text: "text-purple-400" },
};

const defaultTag = { bg: "bg-gray-500/10", text: "text-gray-400" };

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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto p-5 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 pr-10">{project.title}</h2>

                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription || project.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold mb-3 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => {
                      const color = tagColors[tag] || defaultTag;
                      return (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium ${color.bg} ${color.text}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      icon={<Github className="w-4 h-4 sm:w-5 sm:h-5" />}
                      variant="secondary"
                    >
                      View Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      icon={<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />}
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
