"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  icon,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden cursor-pointer touch-manipulation min-h-[48px] text-sm sm:text-base select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95",
    secondary:
      "bg-white/10 dark:bg-white/5 backdrop-blur-sm text-foreground border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 active:scale-95",
    outline:
      "border-2 border-current hover:bg-white/10 dark:hover:bg-black/10 active:scale-95",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && (
        <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
}
