import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import TiltCard from '../utils/TiltCard'
import LazyImage from '../utils/LazyImage'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <TiltCard className="glass-card group overflow-hidden h-full flex flex-col hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-500">

        {/* Project Image */}
        <div className="relative h-72 overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full"
            fit="contain"
            imgClassName="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-700"/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">

          <h3 className="text-xl font-bold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-slate-400 leading-7 mb-5">
            {project.description}
          </p>

          {project.features?.length > 0 && (
            <ul className="space-y-2 mb-5">
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-400"
                >
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-white hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              <FaGithub />
              Code
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 text-white hover:scale-105 transition-all"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            ) : (
              <span className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-slate-500">
                <FaExternalLinkAlt />
                Coming Soon
              </span>
            )}

          </div>

        </div>

      </TiltCard>
    </motion.div>
  )
}