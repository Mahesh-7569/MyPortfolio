import { ArrowUp, Mail, Phone, Heart, Terminal } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "../common/Icons";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo & Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="code-tag">&lt;</span>
              <span className="logo-name">Cheerala Mahesh</span>
              <span className="code-tag">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Java Backend Developer specializing in scalable enterprise applications,
              Spring Boot microservices, Kafka message queuing, and resilient database architectures.
            </p>
            <div className="footer-location-badge">
              <span>📍 Bangalore, India • +91 7569146309</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Tech</a></li>
              <li><a href="#experience">Work Experience</a></li>
              <li><a href="#projects">Key Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Tech Specialization */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Core Competencies</h4>
            <ul className="footer-links-list">
              <li><span>Java 21 & Spring Boot 3</span></li>
              <li><span>Spring Security & RBAC</span></li>
              <li><span>Apache Kafka & Redis</span></li>
              <li><span>Spring Data JPA & Hibernate</span></li>
              <li><span>SQL Server & PostgreSQL</span></li>
              <li><span>REST APIs & Swagger OpenAPI</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Cheerala Mahesh</strong>. Built with React & Vite. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/mahesh-cheerala"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="https://github.com/Mahesh-7569"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-link"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="mailto:cheerlamahesh2002@gmail.com"
              className="footer-soc-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+917569146309"
              className="footer-soc-link"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
