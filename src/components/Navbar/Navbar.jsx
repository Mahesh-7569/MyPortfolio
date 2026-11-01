<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
>>>>>>> cc61760435e60e8c56555727bcea11f4a2eca62d
import "./Navbar.css";

function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
<<<<<<< HEAD
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <div className="logo-badge">
            <span className="logo-symbol">&lt;</span>
            <span className="logo-initials">CM</span>
            <span className="logo-symbol">/&gt;</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">Mahesh</span>
            <span className="logo-surname">Cheerala</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button onClick={onOpenResume} className="nav-resume-btn" title="View Full Resume">
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a href="#contact" className="nav-cta-btn">
            <Send size={15} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-cta-item">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mobile-resume-btn"
            >
              <FileText size={16} />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              className="mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Send size={16} />
              <span>Get in Touch</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
=======
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand logo" href="#home">
          Mehesh <span>Cheerla</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
>>>>>>> cc61760435e60e8c56555727bcea11f4a2eca62d
  );
}

export default Navbar;