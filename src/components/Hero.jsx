import { useState } from "react";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-tag">
          BACKEND DEVELOPER & DEVOPS ENTHUSIAST
        </span>

        <h1>
          Hi, I'm <span>Manish</span>
        </h1>

        <h2>
          Building backend systems, exploring DevOps,
          and learning cloud infrastructure.
        </h2>

        <p>
          Passionate about Linux, automation, open source,
          and creating reliable software that scales.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href={siteConfig.resume}
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="socials">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <div
            className="email-container"
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
          >
            <Mail size={22} />

            {showEmail && (
              <div className="email-tooltip">
                <div
                  className="email-address"
                  onClick={copyEmail}
                >
                  {siteConfig.email}
                </div>

                <span className="copy-text">
                  {copied
                    ? "✓ Copied!"
                    : "Click email to copy"}
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}