"use client"
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import GlassmorphicOrb from "@/components/GlassmorphicOrb";
import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen overflow-y-auto lg:h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center py-6 relative z-10">
        {/* Left Side - Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 lg:pl-22 mt-15"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1
              className="text-6xl md:text-7xl lg:text-7xl font-bold bg-gradient-to-r from-[#f8fafc] to-[#22d3ee] bg-clip-text text-transparent mb-4 leading-tight"
            >
              AKINTOLA AYOMIDE JONATHAN
            </h1>
            <p className="text-3xl md:text-4xl lg:text-3xl font-semibold text-yellow-300 max-w-xl">
              Frontend & Fullstack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              className="bg-gradient-to-r from-[#3b82f6] to-[#ec4899] hover:from-[#2563eb] hover:to-[#db2777] text-white px-8 py-6 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              <Link href="/projects">
              View My Work
              </Link>
              <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            <Button
              variant="outline"
              className="cursor-pointer border-2 border-slate-600 hover:border-slate-500 px-8 py-6 rounded-full backdrop-blur-sm bg-slate-800/50 hover:bg-slate-700/50 text-white transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
             {/* <a href="https://drive.google.com/your-resume-link" target="_blank" rel="noopener noreferrer">*/}
              <a href="/resume/resume.docx" download="Akintola_Ayomide_Resume.docx">
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute left-0 top-1/2 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: [0, 100, 150],
                  y: [0, -50 + i * 20, -100 + i * 30],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side - 3D Glassmorphic Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <GlassmorphicOrb />
        </motion.div>
      </div>
    </section>
  );
}