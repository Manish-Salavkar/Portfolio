import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            CONTACT
          </span>

          <h2>Let's Connect</h2>

          <p>
            Open to software engineering opportunities,
            internships, collaborations and interesting
            technical conversations.
          </p>
        </div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href={siteConfig.email}
            className="contact-item"
          >
            <Mail size={22} />
            <span>Email</span>
          </a>

          <a
            href={siteConfig.linkedin}
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </a>

          <a
            href={siteConfig.github}
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>

          <a
            href={siteConfig.resume}
            className="contact-item"
          >
            <FileText size={22} />
            <span>Resume</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}