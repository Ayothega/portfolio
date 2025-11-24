"use client"
import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              
              return (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    className={`relative text-sm cursor-pointer transition-all duration-300 group block py-2 ${
                      active
                        ? "bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {item.name}
                    
                    {/* Animated underline with glow effect */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#ec4899] transition-all duration-300 ${
                        active
                          ? "w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                          : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                      }`}
                    />
                    
                    {/* Subtle background highlight on hover */}
                    <span
                      className={`absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500/0 to-pink-500/0 transition-all duration-300 ${
                        !active && "group-hover:from-blue-500/10 group-hover:to-pink-500/10"
                      }`}
                    />
                  </motion.span>
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <Button
                className="relative px-6 py-2 rounded-full border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-white/20 hover:scale-105"
                style={{ letterSpacing: "0.02em" }}
              >
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-6 py-4 space-y-4 border-t border-white/10">
          {navItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ duration: 0.3 }}
                  className={`block text-base cursor-pointer transition-colors duration-300 py-2 px-4 rounded-lg ${
                    active
                      ? "bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent font-semibold bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ letterSpacing: "0.02em" }}
                >
                  {item.name}
                </motion.span>
              </Link>
            );
          })}
          
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button
              className="w-full px-6 py-2 rounded-full border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
              style={{ letterSpacing: "0.02em" }}
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}