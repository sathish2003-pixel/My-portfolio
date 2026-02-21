"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SmoothParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function SmoothParallax({
  children,
  offset = 60,
  className = "",
}: SmoothParallaxProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // Sections slide up smoothly as they enter, settle in place, then slide up as they leave
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [offset, 0, 0, -offset / 2]);
  // Gentle scale: slightly smaller when entering, full size in view
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.97, 1, 1, 0.99]);
  // Smooth fade: visible quickly, stays visible, gentle fade on exit
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, scale, opacity }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
