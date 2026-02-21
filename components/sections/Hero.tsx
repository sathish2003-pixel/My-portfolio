"use client";

import { motion } from "framer-motion";
import { Download, Mail, Code2, Layers, Rocket } from "lucide-react";
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
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Desktop: Animated background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large moving gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-950/70 rounded-full blur-[120px] hero-orb-1" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-950/70 rounded-full blur-[120px] hero-orb-2" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-rose-950/60 rounded-full blur-[100px] hero-orb-3" />
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] bg-amber-950/50 rounded-full blur-[100px] hero-orb-4" />

        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 hero-mesh opacity-60" />

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-blue-400/15 hero-particle-1" />
        <div className="absolute top-[60%] left-[70%] w-1.5 h-1.5 rounded-full bg-purple-400/15 hero-particle-2" />
        <div className="absolute top-[80%] left-[30%] w-2.5 h-2.5 rounded-full bg-pink-400/12 hero-particle-3" />
        <div className="absolute top-[25%] left-[80%] w-1.5 h-1.5 rounded-full bg-amber-400/15 hero-particle-4" />
        <div className="absolute top-[45%] left-[15%] w-2 h-2 rounded-full bg-cyan-400/12 hero-particle-5" />
        <div className="absolute top-[70%] left-[55%] w-1 h-1 rounded-full bg-violet-400/15 hero-particle-6" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-48 xl:gap-64">

          {/* Text Content */}
          <div className="flex-1 text-left order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-6 hidden lg:inline-flex"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 bg-clip-text text-transparent">
                  Let's Build Together
                </span>
                <Rocket className="w-4 h-4 text-orange-400" />
              </span>
            </motion.div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white lg:text-foreground"
              style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="inline-block"
              >
                Hi, I'm
              </motion.span>
              <span className="block mt-3">
                {personalInfo.name.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.8 + i * 0.12,
                    }}
                    className={`inline-block name-gradient ${letter === " " ? "w-[0.25em]" : ""}`}
                    style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: 4,
                    delay: 0.8 + personalInfo.name.length * 0.12,
                  }}
                  className="inline-block w-[3px] h-[0.8em] bg-orange-400 ml-1 align-baseline"
                />
              </span>
            </h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-gray-300 lg:text-gray-600 lg:dark:text-gray-400"
            >
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 hidden lg:block" />
              {personalInfo.role}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 lg:text-gray-600 lg:dark:text-gray-400 max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="hidden lg:flex flex-wrap gap-4 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-medium">
                <Layers className="w-4 h-4" />
                Full-Stack Development
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-medium">
                <Code2 className="w-4 h-4" />
                React & Next.js
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-400 text-sm font-medium">
                <Rocket className="w-4 h-4" />
                AI/LLM Integration
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-start items-center flex-wrap">
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              >
                <Button
                  href={personalInfo.resumeUrl}
                  icon={<Download className="w-4 h-4 sm:w-5 sm:h-5" />}
                  variant="primary"
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
              >
                <Button
                  onClick={() => handleScroll("#contact")}
                  icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                  variant="secondary"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>

            {/* Desktop only - Tech quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="hidden lg:flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold gradient-text">1+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Years of<br />Experience</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold gradient-text">10+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Projects<br />Completed</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold gradient-text">100%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Committed to<br />Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Desktop Image - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex-shrink-0 hidden lg:block order-2"
          >
            <div className="relative w-96 h-96">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl rounded-3xl" />
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
