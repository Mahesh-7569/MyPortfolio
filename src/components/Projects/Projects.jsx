import { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Server,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { GitHubIcon } from "../common/Icons";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "smart-machine",
      title: "Smart Machine Enterprise Backend & Real-Time Pipeline",
      category: "Enterprise Microservices",
      type: "java",
      context: "JRSS Smart Machine",
      accent: "cyan",
      description:
        "High-performance enterprise backend system powering industrial machine operations, Kafka asynchronous event streaming, Redis caching, and real-time WebSocket telemetry.",
      contributions: [
        "Architected clean layered structure (Controller, Service, Repository, DTO, Entity) adhering to SOLID principles.",
        "Integrated Apache Kafka for asynchronous telemetry message queuing and event decoupling.",
        "Implemented Redis caching layer to accelerate state queries and minimize SQL Server database workload.",
        "Engineered WebSockets channel for live bi-directional machine status streaming to client consoles.",
        "Implemented Spring Security with Role-Based Access Control (RBAC) across Operator and Admin privileges.",
        "Documented all endpoints using Swagger / OpenAPI and validated through automated Postman collections.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Apache Kafka",
        "Redis",
        "WebSockets",
        "Spring Security (RBAC)",
        "Spring Data JPA",
        "Hibernate",
        "SQL Server",
        "Swagger",
      ],
      githubUrl: "https://github.com/Mahesh-7569",
    },
    {
      id: "insurance-platform",
      title: "Insurance Claim Management & Multi-Role Workflow Platform",
      category: "Workflow & Cloud Storage",
      type: "node",
      context: "Zeksta Technology Pvt. Ltd",
      accent: "violet",
      description:
        "End-to-end backend platform handling insurance claims, customer policies, employee role delegations, AWS S3 document storage, and SMTP alerts.",
      contributions: [
        "Built robust REST APIs using Node.js & Express.js with Prisma ORM querying PostgreSQL.",
        "Implemented JWT-based authentication and Role-Based Access Control (RBAC) across Admin, Employee, and User modules.",
        "Integrated AWS S3 for secure, encrypted cloud upload of claim documents, receipts, and proofs.",
        "Engineered performant search, multi-field filtering, and cursor/offset pagination APIs for massive claim datasets.",
        "Configured SMTP email notification triggers for automatic credential delivery and status milestone updates.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "AWS S3",
        "JWT Auth",
        "SMTP",
        "REST APIs",
        "Git",
      ],
      githubUrl: "https://github.com/Mahesh-7569",
    },
    {
      id: "event-logger",
      title: "Delay Tracking & Event History Audit Microservice",
      category: "Backend Event Logging",
      type: "java",
      context: "Enterprise Service",
      accent: "amber",
      description:
        "Transactional backend microservice dedicated to tracking event life-cycles, state machine transitions (OPEN/CLOSED), and immutable audit history logging.",
      contributions: [
        "Implemented status-based OPEN and CLOSED state machine logic with zero race conditions.",
        "Developed backend constraint validators to prohibit concurrent duplicate active delay incidents.",
        "Created an immutable historical change-log capturing timestamps, operator IDs, and state transitions.",
        "Utilized Spring @Transactional boundaries to guarantee atomic persistence to SQL Server.",
        "Exposed REST APIs with comprehensive DTO projections to maximize serialization performance.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "SQL Server",
        "Swagger OpenAPI",
        "Maven",
      ],
      githubUrl: "https://github.com/Mahesh-7569",
    },
    {
      id: "security-engine",
      title: "Enterprise RBAC Authentication & Authorization Engine",
      category: "Security Microservice",
      type: "security",
      context: "Core Security Framework",
      accent: "emerald",
      description:
        "Centralized authentication framework delivering stateless JWT validation, bcrypt credential encryption, and fine-grained authorization filters for microservices.",
      contributions: [
        "Designed custom OncePerRequestFilter for intercepting and validating Bearer JWT claims.",
        "Implemented encrypted password hashing and validation using bcrypt.",
        "Configured role authority hierarchies ensuring strict isolation between system roles.",
        "Implemented global exception handler catching authentication and access-denied anomalies into uniform JSON responses.",
      ],
      technologies: [
        "Java 21",
        "Spring Security",
        "JWT",
        "REST APIs",
        "SQL Server",
        "PostgreSQL",
      ],
      githubUrl: "https://github.com/Mahesh-7569",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Key Backend <span>Projects</span>
          </h2>
          <p className="section-description">
            Production-grade software systems highlighting my capability to deliver scalable APIs,
            asynchronous message queuing, secure authorization, and resilient database workflows.
          </p>

          {/* Filter Pills */}
          <div className="project-filters">
            <button 
              className={`p-filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </button>
            <button 
              className={`p-filter-btn ${filter === "java" ? "active" : ""}`}
              onClick={() => setFilter("java")}
            >
              Java & Spring Boot
            </button>
            <button 
              className={`p-filter-btn ${filter === "node" ? "active" : ""}`}
              onClick={() => setFilter("node")}
            >
              Node.js & Cloud
            </button>
            <button 
              className={`p-filter-btn ${filter === "security" ? "active" : ""}`}
              onClick={() => setFilter("security")}
            >
              Security & RBAC
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`project-card glass-card accent-${project.accent}`}>
              {/* Card Header Top */}
              <div className="card-top-bar">
                <div className="card-identity">
                  <span className="project-index">0{index + 1}</span>
                  <span className={`project-category-tag tag-${project.accent}`}>
                    {project.category}
                  </span>
                </div>
                <div className="project-context-tag">
                  {project.context}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="project-heading">{project.title}</h3>
              <p className="project-summary">{project.description}</p>

              {/* Key Highlights */}
              <div className="project-contributions-box">
                <span className="contributions-header">Key Engineering Contributions:</span>
                <ul className="contributions-items">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="contrib-item">
                      <CheckCircle2 size={15} className={`contrib-icon ${project.accent}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="project-tech-container">
                <div className="tech-tags-list">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className={`project-tech-tag ${project.accent}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="project-actions-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    <GitHubIcon size={16} />
                    <span>View Repository</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
