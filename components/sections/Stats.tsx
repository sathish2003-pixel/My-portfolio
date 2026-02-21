"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Briefcase, BookOpen, GitBranch } from "lucide-react";

const stats = [
  {
    icon: <Code className="w-7 h-7" />,
    value: 10,
    label: "Projects Delivered",
    suffix: "+",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    value: 1,
    label: "Year Experience",
    suffix: "+",
    color: "from-purple-500 to-violet-400",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    value: 500,
    label: "Git Contributions",
    suffix: "+",
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    value: 24,
    label: "Always Learning",
    suffix: "/7",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
  },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Stats
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that define my journey as a developer
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="glass-card text-center h-full flex flex-col items-center justify-center py-8 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bg} ${stat.text} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className={`text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
