"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
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

      {/* Desktop: Static gradient blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-20 xl:px-40 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-left order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="mb-5 hidden lg:block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Available for opportunities
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
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-gray-300 lg:text-gray-600 lg:dark:text-gray-400"
            >
              {personalInfo.role}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 lg:text-gray-600 lg:dark:text-gray-400 max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

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
                <span className="text-3xl font-bold gradient-text">20+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Projects<br />Completed</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold gradient-text">100%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 leading-tight">Passion for<br />Clean Code</span>
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
