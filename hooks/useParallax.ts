import { useRef, RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseParallaxReturn {
  ref: RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
}

export function useParallax(distance: number = 100): UseParallaxReturn {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, y };
}
