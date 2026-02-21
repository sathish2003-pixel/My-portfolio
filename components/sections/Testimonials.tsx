"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    color: "from-blue-500 to-cyan-400",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    color: "from-purple-500 to-violet-400",
  },
  {
    text: "The best way to predict the future is to implement it.",
    author: "David Heinemeier Hansson",
    color: "from-orange-500 to-amber-400",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden w-full">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Words I <span className="gradient-text">Live By</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Quotes that inspire my approach to code and craft
          </p>
        </motion.div>

        {/* Quotes */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className="glass-card flex items-start gap-4 sm:gap-5 p-4 sm:p-6"
            >
              {/* Quote icon */}
              <div className={`flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${quote.color} flex items-center justify-center`}>
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-300 lg:text-gray-600 lg:dark:text-gray-300 leading-relaxed italic mb-2">
                  "{quote.text}"
                </p>
                <span className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${quote.color} bg-clip-text text-transparent`}>
                  — {quote.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
