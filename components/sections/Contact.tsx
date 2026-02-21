"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/config/content";
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: <SiWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+91 9025893381",
      href: personalInfo.whatsapp,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      href: null,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: personalInfo.github, label: "GitHub", color: "hover:text-gray-300" },
    { icon: <Linkedin className="w-5 h-5" />, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <SiWhatsapp className="w-5 h-5" />, href: personalInfo.whatsapp, label: "WhatsApp", color: "hover:text-green-400" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Got a project, question, or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {contactMethods.map((method, i) => {
              const Wrapper = method.href ? "a" : "div";
              const linkProps = method.href
                ? { href: method.href, target: "_blank" as const, rel: "noopener noreferrer" as const }
                : {};
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <Wrapper
                    {...linkProps}
                    className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group cursor-pointer hover:shadow-lg transition-all h-full"
                  >
                    <div className={`flex-shrink-0 w-11 h-11 sm:w-11 sm:h-11 rounded-xl ${method.bg} ${method.color} flex items-center justify-center`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">{method.label}</p>
                      <p className="text-sm sm:text-sm font-semibold whitespace-nowrap">{method.value}</p>
                    </div>
                    {method.href && (
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0 hidden sm:block" />
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form + Socials Row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/5 border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } focus:outline-none focus:border-blue-500 transition-colors text-sm placeholder:text-gray-500`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/5 border ${
                          errors.email ? "border-red-500" : "border-white/10"
                        } focus:outline-none focus:border-blue-500 transition-colors text-sm placeholder:text-gray-500`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-white/10"
                      } focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none placeholder:text-gray-500`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-green-500/10 text-green-400 text-xs sm:text-sm"
                    >
                      Message sent! I'll get back to you soon.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    variant="primary"
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Connect Card */}
              <div className="glass-card p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-3">Connect With Me</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  Follow me on social media for updates on projects, tech insights, and more.
                </p>
                <div className="flex gap-2.5">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 ${social.color} hover:border-white/20 transition-all`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-card p-4 sm:p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold">Available Now</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Currently open to freelance projects, full-time roles, and exciting collaborations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Designed & Developed by <span className="name-gradient font-semibold">{personalInfo.name}</span>
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
