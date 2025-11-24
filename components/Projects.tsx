"use client"
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image"
const projects = [
  {
    id: 1,
    title: "Qline",
    description: "AI-Powered Queue management system.",
    image: "/images/project1.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCss", "Prisma", "PostgreSQL", "Groq AI"],
    gradient: "from-blue-500/10 to-purple-500/10",
    git: "https://github.com/Ayothega/Qline-app.git",
    link: "https://qline.vercel.app/"
  },
  {
    id: 2,
    title: "Focus FLow",
    description: "A web app to manage focus sessions, track habits, and visualize your productivityanagement.",
    image: "/images/project2.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCss", "Supabase"],
    gradient: "from-cyan-500/10 to-blue-500/10",
    git: "https://github.com/Ayothega/Focus-Flow.git",
    link: "https://focus-flow-brown-five.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="featured-work" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">My Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in creating beautiful and functional softwares.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className={`group relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500`}
                whileHover={{ y: -8 }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <Image
                      width= {1000}
                      height={1000}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
  <ExternalLink className="cursor-pointer w-5 h-5 text-white" />
</a>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                     <a href={project.git} target="_blank" rel="noopener noreferrer">
  <Github className="cursor-pointer w-5 h-5 text-white" />
</a>

                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-slate-900/60 backdrop-blur-md">
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-300 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}