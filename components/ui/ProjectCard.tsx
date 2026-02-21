"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
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

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="glass-card h-full flex flex-col p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
        {/* Header: Title + Arrow */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-bold group-hover:text-blue-400 transition-colors duration-300 leading-snug">
            {project.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => {
            const color = tagColors[tag] || defaultTag;
            return (
              <span
                key={tag}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium ${color.bg} ${color.text}`}
              >
                {tag}
              </span>
            );
          })}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-gray-500/10 text-gray-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
