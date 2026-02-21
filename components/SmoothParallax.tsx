"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, ReactNode } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [offset, 0, 0, -offset / 2]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.98, 1, 1, 0.99]);

  // Don't apply parallax until mounted to prevent flash of black
  if (!mounted) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, scale }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
