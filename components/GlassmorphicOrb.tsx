"use client"
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function GlassmorphicOrb() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Outer glow effect for 3D depth */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          filter: "blur(60px)",
          opacity: 0.6,
        }}
      >
        <div className="w-96 h-96 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] rounded-full" />
      </div>

      {/* Main glassmorphic orb */}
      <motion.div
        className="relative w-80 h-80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-10"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(236, 72, 153, 0.5) 100%)",
          backdropFilter: "blur(40px)",
          boxShadow: "0 8px 32px 0 rgba(59, 130, 246, 0.4), inset 0 0 60px 0 rgba(255, 255, 255, 0.15), 0 0 80px 20px rgba(236, 72, 153, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Inner glow core */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.8) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient layer */}
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: "linear-gradient(225deg, rgba(236, 72, 153, 0.6) 0%, transparent 60%)",
          }}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Light reflections */}
        <div
          className="absolute top-8 left-8 w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div
          className="absolute bottom-12 right-12 w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        />
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#ec4899]"
          style={{
            top: "50%",
            left: "50%",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.6)",
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI * 2) / 8) * 200],
            y: [0, Math.sin((i * Math.PI * 2) / 8) * 200],
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wireframe rings */}
      <motion.div
        className="absolute w-96 h-96 border border-blue-400/40 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-[28rem] h-[28rem] border border-pink-400/30 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating code brackets */}
      <motion.div
        className="absolute top-10 right-10 text-blue-400/60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </motion.div>
    </div>
  );
}