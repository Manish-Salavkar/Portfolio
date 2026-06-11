import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, projects } from "../data/siteConfig";
import { FaGithub, FaLinkedin } from "react-icons/fa";




export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PROJECTS</span>
          <h2>Things I've Built</h2>

          <p>
            Projects that helped me learn software engineering,
            cloud infrastructure and automation.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a href={project.demo}>
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}