"use client";

import { ReactNode } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxText({
  children,
  className = ""
}: ParallaxTextProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
