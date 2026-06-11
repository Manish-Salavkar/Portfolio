import { motion } from "framer-motion";

const timeline = [

{
title: "Python Developer Intern",
organization: "Pentation Analytics",
period: "May 2025 - Sep 2025",
description: [
"Migrated legacy R-based workflows to FastAPI services, improving accessibility and enabling direct JSON-based integration",
"Eliminated dependency on parsing R outputs by exposing structured API endpoints",
"Developed an automated Excel ingestion pipeline using asynchronous Python processing and scheduled cron-based execution",
"Worked on backend architecture, API development and workflow automation"
]
},


{
title: "Data Annotation Associate (Contract)",
organization: "Innodata",
period: "Sep 2024 - Jan 2025",
description: [
"Worked on data annotation and AI training datasets",
"Performed quality analysis, sentiment evaluation and prompt generation tasks",
"Created and validated bounding box annotations for machine learning workflows",
"Contributed to data quality and model training processes"
]
},

{
    title: "Software Development Intern",
    organization: "Academor Summer Internship",
    period: "Dec 2022 - Jan 2023",
    description: [
      "Developed backend API endpoints using Flask for internal web applications",
      "Learned full-stack integration between backend services and frontend interfaces",
      "Worked with HTML, CSS and JavaScript to consume and display API data",
      "Gained practical experience in client-server architecture and web application development"
    ]
  }
];


export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            EXPERIENCE
          </span>

          <h2>My Journey So Far</h2>

          <p>
            Education, training and experiences that have
            shaped my technical foundation.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.organization}</h4>
                  </div>

                  <span>{item.period}</span>
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