"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { ParallaxSection } from "@/components/ParallaxSection";

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager",
    company: "Tech Solutions Inc",
    content: "Working with Sathish was an absolute pleasure. His attention to detail and technical expertise delivered results beyond our expectations.",
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    role: "CEO",
    company: "StartupXYZ",
    content: "Sathish's ability to transform complex requirements into elegant solutions is remarkable. Highly recommend for any web development project.",
    avatar: "SS",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    company: "Digital Agency",
    content: "A talented developer with great problem-solving skills. Sathish consistently delivers high-quality code and meets tight deadlines.",
    avatar: "MJ",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-purple-500/5 to-transparent relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've worked with
          </p>
        </motion.div>

        <ParallaxSection speed={0.35}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass-card group relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="pt-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
