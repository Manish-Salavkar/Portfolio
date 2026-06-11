import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../data/siteConfig";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3>Manish Salavkar</h3>

        <p>
          Building software, exploring Linux,
          and learning cloud infrastructure.
        </p>

        <div className="footer-links">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="footer-divider" />

        <span>
          © {new Date().getFullYear()} Manish Salavkar.
          Built with React & Vite.
        </span>

      </div>
    </footer>
  );
}