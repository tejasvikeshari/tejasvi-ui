import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">My Work</p>

          <h2 className="section-title">
            Featured <span className="heading-gradient">Projects</span>
          </h2>

          <p className="mt-5 text-slate-400 leading-7">
            A collection of projects showcasing my journey in Frontend Development,
            Generative AI, and problem-solving through practical applications.
            Each project reflects my passion for building responsive, user-friendly,
            and innovative digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}