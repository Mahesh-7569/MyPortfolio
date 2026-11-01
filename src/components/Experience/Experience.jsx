import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Jr. Software Engineer",
      company: "JRSS Smart Machine",
      location: "Pune, India",
      period: "Oct 2025 – Present",
      status: "Present Role",
      badgeColor: "emerald",
      summary: "Spearheading enterprise Java and Spring Boot microservices, Kafka asynchronous messaging, Redis caching, and relational database engineering.",
      responsibilities: [
        "Developed enterprise-grade RESTful APIs using Java and Spring Boot following clean architecture principles.",
        "Implemented Controller, Service, Repository, DTO, and Entity layers for clean code organization.",
        "Engineered core backend business logic, integrated Apache Kafka for asynchronous message queuing, Redis caching for performance optimization, and WebSockets for real-time data communication.",
        "Implemented Spring Security with Role-Based Access Control (RBAC) for secure authentication and authorization.",
        "Designed and managed relational database schemas using Spring Data JPA and Hibernate with SQL Server.",
        "Developed reusable CRUD APIs, request validation, global exception handling, and optimized database queries.",
        "Documented APIs via Swagger and conducted integration testing using Postman in an Agile environment.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "Apache Kafka",
        "Redis",
        "WebSockets",
        "SQL Server",
        "REST APIs",
        "Swagger",
        "Maven",
        "Git",
      ],
    },
    {
      role: "Software Engineer Trainee",
      company: "Zeksta Technology Pvt. Ltd",
      location: "Bangalore, India",
      period: "Nov 2024 – Oct 2025",
      status: "Previous Experience",
      badgeColor: "violet",
      summary: "Engineered scalable REST APIs, JWT & RBAC authorization, and cloud document workflows for enterprise insurance management.",
      responsibilities: [
        "Built scalable backend REST APIs using Node.js and Express.js, integrating PostgreSQL via Prisma ORM.",
        "Implemented JWT-based authentication and Role-Based Access Control (RBAC) across Admin, Employee, and User modules.",
        "Developed core functional modules including User Management, Company Management, and Claim Processing workflows.",
        "Integrated AWS S3 for secure cloud document upload and configured SMTP email notifications for system events.",
        "Built performant search, multi-field filtering, and pagination APIs for large data sets.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
        "AWS S3",
        "SMTP",
        "Git",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-description">
            Hands-on software engineering experience delivering scalable backend systems,
            real-time message streaming, high-throughput databases, and enterprise security.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.badgeColor}`}>
              {/* Timeline Node Point */}
              <div className={`timeline-node ${exp.badgeColor}`}>
                <div className="node-inner"></div>
              </div>

              {/* Experience Card */}
              <div className={`experience-card glass-card card-${exp.badgeColor}`}>
                <div className="exp-card-header">
                  <div className="exp-company-info">
                    <div className="role-status-row">
                      <span className={`status-pill ${exp.badgeColor}`}>
                        {exp.status}
                      </span>
                      <span className="location-pill">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="exp-role">{exp.role}</h3>

                    <div className="company-name-row">
                      <Building2 size={16} className="company-icon" />
                      <span className="exp-company">{exp.company}</span>
                    </div>
                  </div>

                  <div className="exp-period-box">
                    <Calendar size={15} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                {/* Key Contributions */}
                <div className="contributions-block">
                  <h4 className="contributions-title">Key Responsibilities & Achievements:</h4>
                  <ul className="contributions-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="contribution-item">
                        <CheckCircle size={16} className={`check-icon ${exp.badgeColor}`} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="exp-tech-stack">
                  <span className="tech-stack-label">Technologies:</span>
                  <div className="tech-pills-wrap">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className={`exp-tech-pill ${exp.badgeColor}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
