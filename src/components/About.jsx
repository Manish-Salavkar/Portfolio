import { Server, Terminal, Cloud, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: <Terminal size={28} />,
    title: "Linux",
    desc: "Daily Linux user with strong interest in system administration and tooling.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud & DevOps",
    desc: "Learning cloud infrastructure, CI/CD, Docker and Kubernetes.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    desc: "Building APIs and applications using FastAPI and Python.",
  },
  {
    icon: <GitBranch size={28} />,
    title: "Open Source",
    desc: "Contributing to projects and exploring GNOME ecosystem development.",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">ABOUT</span>

          <h2>Building skills one project at a time.</h2>

          <p>
            I'm a Computer Engineering student with interests in backend
            systems, cloud infrastructure, Linux and DevOps practices.
          </p>

          <p>
            I enjoy building projects that combine software development with
            deployment and automation, while continuously exploring open-source
            technologies.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>Docker</span>
            <span>Linux</span>
            <span>Git</span>
          </div>
        </motion.div>

        <div className="about-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}