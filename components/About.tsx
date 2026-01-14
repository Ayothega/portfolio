"use client"
import { motion } from "motion/react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const skills = [
  { name: "React & Next.js", level: 95, color: "bg-blue-500" },
  { name: "React Native", level: 85, color: "bg-blue-800"}, 
  { name: "JavaScript", level: 90, color: "bg-yellow-500" },
  { name: "TypeScript", level: 90, color: "bg-cyan-500" },
  { name: "Tailwind CSS", level: 95, color: "bg-cyan-800" },
  { name: "Nodejs & Nestjs", level: 80, color: "bg-pink-500"},
  { name: "SupaBase", level: 85, color: "bg-green-500" },

];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices and modern patterns.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Creating cohesive design languages that scale across products.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency without compromising user experience.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working seamlessly with designers, developers, and stakeholders.",
    gradient: "from-green-500 to-teal-500",
  },
];

export default function AboutSkills() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-6">About Me</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            I'm a passionate frontend focused fullstack developer who believes that great design and great code go hand in hand. 
            With a keen eye for detail and a love for creating seamless user experiences, I transform ideas into 
            beautiful, functional web applications.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4`}
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{highlight.title}</h3>
                <p className="text-slate-400">{highlight.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-center mb-12">Technical Skills</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>

                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}