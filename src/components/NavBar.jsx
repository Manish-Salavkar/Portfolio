import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { siteConfig } from "../data/siteConfig";

const links = [
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500}>
          <img
            src="/initial_logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>

        <div className="nav-links desktop-nav">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              activeClass="active-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href={siteConfig.resume}
          className="resume-btn desktop-nav"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="mobile-menu">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}