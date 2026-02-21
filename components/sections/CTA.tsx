"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bot, Zap, Code2, Brain, Mail, Rocket, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/config/content";

const offerings = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Integration", desc: "LLM-powered apps & multi-agent systems", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: <Bot className="w-5 h-5" />, title: "Smart Automation", desc: "Web scraping, workflows & pipelines", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: <Code2 className="w-5 h-5" />, title: "Modern Web Apps", desc: "Scalable full-stack applications", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: <Cpu className="w-5 h-5" />, title: "Cloud Architecture", desc: "Serverless, microservices & DevOps", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden w-full">
      {/* Background matching app theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 mb-4 sm:mb-5">
              <Rocket className="w-4 h-4 text-orange-400" />
              Ready to level up?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I'll Automate, Build & Scale
              <span className="block mt-2">
                <span className="name-gradient">Your Next Big Idea</span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Whether you need an AI-powered product, automated business workflows,
            or a modern web application — I bring the tools, the expertise, and the
            drive to take your project to the next level.
          </motion.p>

          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-3.5 sm:p-5 text-center border ${item.border} hover:shadow-lg transition-all`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-2.5 sm:mb-3`}>
                  {item.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-bold mb-1">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
          >
            <Button
              onClick={() => handleScroll("#contact")}
              icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              variant="primary"
            >
              Let's Talk
            </Button>
            <Button
              href={`mailto:${personalInfo.email}`}
              icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
              variant="secondary"
            >
              Email Me
            </Button>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available now
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Fast delivery
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" />
              AI-first approach
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
