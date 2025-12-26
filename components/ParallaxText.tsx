"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({
  children,
  speed = 0.3,
  className = ""
}: ParallaxTextProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false // Performance optimization
  });

  const y = useTransform(scrollYProgress, [0, 1], [30 * speed, -30 * speed]);
  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
      data-parallax="true"
    >
      {children}
    </motion.div>
  );
}
