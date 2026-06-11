import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Intermediate" },
      { name: "Vite", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
      { name: "Authentication", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: "Intermediate" },
      { name: "GitHub Actions", level: "Intermediate" },
      { name: "Linux", level: "Advanced" },
      { name: "Nginx", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", level: "Learning" },
      { name: "EC2", level: "Learning" },
      { name: "S3", level: "Learning" },
      { name: "Terraform", level: "Learning" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Learning" },
      { name: "Database Design", level: "Intermediate" },
      { name: "ORM", level: "Intermediate" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SKILLS</span>

          <h2>Technologies I Work With</h2>

          <p>
            Technologies I've used across projects, internships,
            self-learning and experimentation.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{group.title}</h3>

              <div className="skill-divider" />

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span>{skill.name}</span>
                    <span className="skill-level">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}