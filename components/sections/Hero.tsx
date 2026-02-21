"use client";

import { motion } from "framer-motion";
import { Download, Mail, Code2, Braces, Bot, Cloud, Terminal, Rocket } from "lucide-react";
import { personalInfo } from "@/config/content";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Mobile: Background image with gradient overlay */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/profile.jpg"
          alt={personalInfo.name}
          fill
          className="object-cover object-top scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
      </div>

      {/* Desktop: Animated background - dark */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark moving gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-950/40 rounded-full blur-[150px] hero-orb-1" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-950/40 rounded-full blur-[150px] hero-orb-2" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 hero-grid opacity-[0.03]" />

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-purple-400/10 hero-particle-1" />
        <div className="absolute top-[60%] left-[70%] w-1 h-1 rounded-full bg-blue-400/10 hero-particle-2" />
        <div className="absolute top-[80%] left-[30%] w-2 h-2 rounded-full bg-purple-400/8 hero-particle-3" />
        <div className="absolute top-[25%] left-[80%] w-1 h-1 rounded-full bg-blue-400/10 hero-particle-4" />

        {/* Animated lines */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-[30%] left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        />
        <motion.div
          initial={{ x: "200%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute top-[70%] right-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent"
        />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "200%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          className="absolute top-0 left-[25%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-purple-500/15 to-transparent"
        />
        <motion.div
          initial={{ y: "200%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute bottom-0 right-[30%] w-[1px] h-[250px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-48 xl:gap-64">

          {/* Text Content */}
          <div className="flex-1 text-left order-1">
            {/* Badge */}
            <div className="mb-6 hidden lg:inline-flex">
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                  Let's Build Together
                </span>
                <Rocket className="w-4 h-4 text-orange-400" />
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 lg:mb-4 tracking-tight text-white lg:text-foreground"
              style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)" }}
            >
              Hi, I'm
              <span className="block mt-2 lg:mt-3">
                <span className="name-gradient" style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}>
                  {personalInfo.name}
                </span>
              </span>
            </h1>

            {/* Role - mobile below name, desktop inline */}
            <div className="lg:hidden flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gradient-to-r from-amber-400 to-rose-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60">{personalInfo.role}</span>
            </div>
            <h2 className="hidden lg:flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-gray-700 dark:text-gray-400">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-500" />
              {personalInfo.role}
            </h2>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-base mb-5 text-white/70 lg:text-gray-700 lg:dark:text-gray-400 max-w-xl leading-relaxed">
              <span className="lg:hidden">{personalInfo.tagline}</span>
              <span className="hidden lg:inline">{personalInfo.taglineShort}</span>
            </p>

            {/* Mobile only - Skill chips */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-5">
              {[
                { icon: <Terminal className="w-3 h-3" />, label: "Full-Stack", color: "border-blue-400/30 text-blue-300" },
                { icon: <Bot className="w-3 h-3" />, label: "AI & LLM", color: "border-purple-400/30 text-purple-300" },
                { icon: <Cloud className="w-3 h-3" />, label: "Cloud", color: "border-orange-400/30 text-orange-300" },
              ].map((chip, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border ${chip.color} text-xs font-medium`}
                >
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </div>

            {/* Mobile stats row */}
            <div className="lg:hidden flex items-center gap-5 mb-6"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-white">1+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Year Exp</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-xl font-bold text-white">10+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Dedication</div>
              </div>
            </div>

            {/* Desktop Highlights */}
            <div className="hidden lg:flex gap-3 mb-8">
              {[
                { icon: <Terminal className="w-4 h-4" />, label: "Web & Cloud Apps", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <Bot className="w-4 h-4" />, label: "AI Automation", color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                { icon: <Cloud className="w-4 h-4" />, label: "Serverless & DevOps", color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
              ].map((tag, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${tag.bg} border ${tag.border} ${tag.color} text-sm font-medium cursor-default hover:scale-105 hover:-translate-y-0.5 transition-all`}
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={() => handleScroll("#contact")}
                icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                variant="primary"
                className="lg:py-2.5 lg:px-6 lg:text-sm lg:min-h-[40px]"
              >
                Get in Touch
              </Button>
            </div>

            {/* Desktop only - Stats */}
            <div className="hidden lg:flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { value: "1+", label: "Years of\nExperience" },
                { value: "10+", label: "Projects\nCompleted" },
                { value: "100%", label: "Committed to\nExcellence" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-10 bg-white/10 -ml-2 mr-2" />}
                  <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight whitespace-pre">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image - hidden on mobile */}
          <div className="flex-shrink-0 hidden lg:block order-2">
            <div className="relative w-96 h-96">
              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.15), transparent, rgba(59,130,246,0.15), transparent)",
                }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-purple-500/15 blur-2xl rounded-3xl" />
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accents */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500/30 rounded-tr-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
