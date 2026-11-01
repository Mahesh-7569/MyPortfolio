import { ArrowRight, FileText, Mail, MapPin, Phone, ShieldCheck, Database, Server, Cpu } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "../common/Icons";
import profileImage from "../../assets/images/Myprofile.jpeg";
import "./Home.css";

function Home({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background Glow Elements */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>
      <div className="hero-bg-glow glow-3"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Available for Java Backend Developer Roles</span>
          </div>

          <p className="hero-greeting">
            Hello, World! I am
          </p>

          <h1 className="hero-name">
            Cheerala <span className="gradient-highlight">Mahesh</span>
          </h1>

          <div className="hero-title-box">
            <h2 className="hero-role">Java Backend Developer</h2>
            <div className="role-divider">•</div>
            <span className="hero-subrole">Enterprise Architecture & Microservices</span>
          </div>

          <p className="hero-description">
            Backend Developer with <strong>~2 years of enterprise experience</strong> designing and 
            developing high-performance backend systems using <strong>Java</strong>, <strong>Spring Boot</strong>, 
            <strong>Spring Security (RBAC)</strong>, <strong>Apache Kafka</strong>, <strong>Redis</strong>, 
            <strong>WebSockets</strong>, and <strong>SQL Server / PostgreSQL</strong>. Passionate about 
            clean layered architecture, resilient business workflows, and production-ready APIs.
          </p>

          {/* Quick Contact Chips */}
          <div className="hero-contact-chips">
            <div className="contact-chip">
              <MapPin size={15} className="chip-icon cyan" />
              <span>Bangalore, India</span>
            </div>
            <a href="tel:+917569146309" className="contact-chip clickable">
              <Phone size={15} className="chip-icon green" />
              <span>+91 7569146309</span>
            </a>
            <a href="mailto:cheerlamahesh2002@gmail.com" className="contact-chip clickable">
              <Mail size={15} className="chip-icon purple" />
              <span>cheerlamahesh2002@gmail.com</span>
            </a>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary-btn">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenResume} className="hero-btn resume-hero-btn">
              <FileText size={18} />
              <span>View Resume</span>
            </button>

            <a href="#contact" className="hero-btn secondary-btn">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-links">
            <span className="social-label">Connect:</span>
            <a
              href="https://www.linkedin.com/in/mahesh-cheerala"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn linkedin"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="https://github.com/Mahesh-7569"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn github"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="mailto:cheerlamahesh2002@gmail.com"
              className="social-icon-btn email"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Hero Visual Avatar with Floating Badges */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ring-outer"></div>
            <div className="avatar-ring-middle"></div>
            <div className="avatar-img-box">
              <img src={profileImage} alt="Cheerala Mahesh" className="avatar-img" />
            </div>

            {/* Floating Floating Badges */}
            <div className="floating-badge badge-top">
              <div className="badge-icon-box java-bg">
                <Server size={18} />
              </div>
              <div className="badge-content">
                <span className="badge-title">Java & Spring Boot</span>
                <span className="badge-subtitle">Enterprise Backend</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <div className="badge-icon-box kafka-bg">
                <Cpu size={18} />
              </div>
              <div className="badge-content">
                <span className="badge-title">Kafka & Redis</span>
                <span className="badge-subtitle">Async Queuing & Cache</span>
              </div>
            </div>

            <div className="floating-badge badge-side">
              <div className="badge-icon-box security-bg">
                <ShieldCheck size={18} />
              </div>
              <div className="badge-content">
                <span className="badge-title">Spring Security</span>
                <span className="badge-subtitle">RBAC & JWT Auth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats / Metric Strip */}
      <div className="hero-stats-strip">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-value gradient-text">~2 Years</div>
            <div className="stat-label">Enterprise Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-value gradient-text-emerald">Spring Boot & REST</div>
            <div className="stat-label">Clean Layered Architecture</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-value gradient-text-sunset">Kafka & Redis</div>
            <div className="stat-label">Asynchronous Messaging & Caching</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <div className="stat-value gradient-text">RBAC & Security</div>
            <div className="stat-label">Production-Grade Authorization</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
