'use client'
import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ayothega", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akintola-ayomide-1b7107186/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ayothega", label: "Twitter" },
];

export default function Contact() {

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
        </motion.div>


          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email card */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#ec4899] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Email</h3>
                  <p className="text-slate-400">Ayothega@gmail.com</p>
                  <p className="text-slate-500 mt-2">I'll respond within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Message card */}
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Let's Chat</h3>
                  <p className="text-slate-400 mb-4">
                    Prefer a quick chat?
                  </p>

                  <p className="text-white">
                    Schedule a Call: +234 8088813086
                 </p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <div>
              <h3 className="text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-slate-800/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-slate-700/60 hover:shadow-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-slate-800"
        >
          <p className="text-slate-500">
            © 2025 Ayothega. Crafted with passion and code.
          </p>
        </motion.div>
    </section>
  );
}