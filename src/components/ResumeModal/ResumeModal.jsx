import { X, Printer, Download, MapPin, Phone, Mail, Globe, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "../common/Icons";
import "./ResumeModal.css";

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="modal-header-bar">
          <div className="modal-title-info">
            <span className="modal-tag">Official Resume</span>
            <h3>Cheerala Mahesh — Java Backend Developer</h3>
          </div>
          <div className="modal-actions">
            <button onClick={handlePrint} className="modal-print-btn" title="Print / Save PDF">
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" title="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="r-header">
            <h1 className="r-name">CHEERALA MAHESH</h1>
            <div className="r-contact-line">
              <span>Bangalore, India</span>
              <span className="dot">•</span>
              <a href="tel:+917569146309">+91 7569146309</a>
              <span className="dot">•</span>
              <a href="mailto:cheerlamahesh2002@gmail.com">cheerlamahesh2002@gmail.com</a>
              <span className="dot">•</span>
              <a href="https://linkedin.com/in/mahesh-cheerala" target="_blank" rel="noreferrer">
                linkedin.com/in/mahesh-cheerala
              </a>
              <span className="dot">•</span>
              <a href="https://github.com/Mahesh-7569" target="_blank" rel="noreferrer">
                github.com/Mahesh-7569
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="r-section">
            <h2 className="r-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="r-text">
              Java Backend Developer with <strong>~2 years of professional experience</strong> in designing and developing
              enterprise backend applications using <strong>Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate,
              SQL Server, Apache Kafka, and RESTful APIs</strong>. Experienced in implementing scalable backend solutions,
              message queuing, Role-Based Access Control (RBAC), authentication, business workflows, database design, and API
              development. Proficient in layered architecture, Agile development, and delivering secure, production-ready
              backend applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="r-section">
            <h2 className="r-section-title">TECHNICAL SKILLS</h2>
            <div className="r-skills-grid">
              <div className="r-skill-row">
                <span className="r-skill-label">Languages:</span>
                <span className="r-skill-items">Java, JavaScript, SQL, Node.js</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Backend Frameworks:</span>
                <span className="r-skill-items">Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Messaging & Caching:</span>
                <span className="r-skill-items">Apache Kafka, Redis, WebSockets</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Security:</span>
                <span className="r-skill-items">Spring Security, JWT Authentication, Role-Based Access Control (RBAC)</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">Databases:</span>
                <span className="r-skill-items">SQL Server, PostgreSQL, MySQL, Prisma ORM</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-label">API & DevOps Tools:</span>
                <span className="r-skill-items">Swagger/OpenAPI, Postman, Maven, Git, Docker (Basic)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="r-section">
            <h2 className="r-section-title">PROFESSIONAL EXPERIENCE</h2>

            {/* Experience 1 */}
            <div className="r-exp-entry">
              <div className="r-exp-header">
                <div>
                  <span className="r-role">Jr. Software Engineer</span>
                  <span className="r-company"> – JRSS Smart Machine</span>
                </div>
                <div className="r-exp-meta">
                  <span className="r-date">Oct 2025 – Present</span>
                </div>
              </div>
              <div className="r-location">Pune, India</div>
              <ul className="r-bullet-list">
                <li>Developed enterprise-grade RESTful APIs using Java and Spring Boot following clean architecture principles.</li>
                <li>Implemented Controller, Service, Repository, DTO, and Entity layers for clean code organization.</li>
                <li>Engineered core backend business logic, integrated Apache Kafka for asynchronous message queuing, Redis caching for performance optimization, and WebSockets for real-time data communication.</li>
                <li>Implemented Spring Security with Role-Based Access Control (RBAC) for secure authentication and authorization.</li>
                <li>Designed and managed relational database schemas using Spring Data JPA and Hibernate with SQL Server.</li>
                <li>Developed reusable CRUD APIs, request validation, global exception handling, and optimized database queries.</li>
                <li>Documented APIs via Swagger and conducted integration testing using Postman in an Agile environment.</li>
              </ul>
              <div className="r-tech-line">
                <strong>Technologies:</strong> Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, Apache Kafka, Redis, WebSockets, SQL Server, REST APIs, Swagger, Maven, Git
              </div>
            </div>

            {/* Experience 2 */}
            <div className="r-exp-entry">
              <div className="r-exp-header">
                <div>
                  <span className="r-role">Software Engineer Trainee</span>
                  <span className="r-company"> – Zeksta Technology Pvt. Ltd</span>
                </div>
                <div className="r-exp-meta">
                  <span className="r-date">Nov 2024 – Oct 2025</span>
                </div>
              </div>
              <div className="r-location">Bangalore, India</div>
              <ul className="r-bullet-list">
                <li>Built scalable backend REST APIs using Node.js and Express.js, integrating PostgreSQL via Prisma ORM.</li>
                <li>Implemented JWT-based authentication and Role-Based Access Control (RBAC) across Admin, Employee, and User modules.</li>
                <li>Developed core functional modules including User Management, Company Management, and Claim Processing workflows.</li>
                <li>Integrated AWS S3 for secure cloud document upload and configured SMTP email notifications for system events.</li>
                <li>Built performant search, multi-field filtering, and pagination APIs for large data sets.</li>
              </ul>
              <div className="r-tech-line">
                <strong>Technologies:</strong> Node.js, Express.js, PostgreSQL, Prisma ORM, JWT, AWS S3, SMTP, Git
              </div>
            </div>
          </div>

          {/* Certifications & Key Achievements */}
          <div className="r-section">
            <h2 className="r-section-title">CERTIFICATIONS & KEY ACHIEVEMENTS</h2>
            <ul className="r-bullet-list">
              <li>
                <strong>Java Full Stack Development Certification (JSpiders):</strong> Core Java, Advanced Java, JDBC, Servlets, Spring Framework, Spring Boot, Hibernate, MySQL, HTML, CSS, JavaScript, Web Technologies.
              </li>
              <li>Successfully designed and delivered scalable backend features across ~2 years of enterprise application development.</li>
              <li>Enhanced application maintainability and performance through clean architecture patterns and reusable service components.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="r-section">
            <h2 className="r-section-title">EDUCATION</h2>
            <div className="r-edu-entry">
              <div className="r-exp-header">
                <span className="r-degree">Bachelor of Technology (B.Tech) in Electrical and Electronics Engineering</span>
                <span className="r-date">2020 – 2024</span>
              </div>
              <div className="r-college">Annamacharya Institute of Technology and Sciences, Rajampeta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;

