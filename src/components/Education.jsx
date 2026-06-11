import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    period: "2025 - Present",
    description: [
      "Focused on software engineering, backend development and modern application architecture",
      "Building projects using React, FastAPI and SQL databases",
      "Exploring Linux, DevOps and cloud technologies"
    ]
  },

  {
    title: "Data Analytics Program",
    institution: "Livewire DIYGuru",
    period: "2024 - Feb 2025",
    description: [
      "Learned Python, NumPy, Pandas, MySQL, Excel and Power BI",
      "Worked on data cleaning, transformation and visualization",
      "Built dashboards and reporting solutions using business intelligence tools"
    ]
  },

  {
    title: "Bachelor of Engineering - Automobile Engineering",
    institution: "Pillai HOC College of Engineering and Technology",
    period: "2019 - 2023",
    description: [
      "Studied Vehicle Dynamics, Automotive Electronics (Autotronics) and MATLAB",
      "Designed and developed a Smart Active Spoiler prototype inspired by the Zenvo TSR-S",
      "Used ANSYS and SolidWorks Flow Simulation for aerodynamic airfoil design",
      "Implemented Arduino-based control logic using rotary encoders, PCA9685 drivers and linear actuators"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">EDUCATION</span>

          <h2>Academic Background</h2>

          <p>
            Education and specialized programs that shaped my
            transition from engineering to software development.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              className="education-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="education-icon">
                <GraduationCap size={22} />
              </div>

              <div className="education-content">
                <div className="education-header">
                <div className="education-info">
                    <h3>{item.title}</h3>
                    <h4>{item.institution}</h4>
                </div>

                <span className="education-period">
                    {item.period}
                </span>
                </div>

                <ul>
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}