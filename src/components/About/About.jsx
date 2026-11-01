import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Code2, 
  CheckCircle2, 
  Workflow, 
  Zap,
  Terminal,
  MapPin,
  Mail,
  Phone,
  GraduationCap
} from "lucide-react";
import "./About.css";

function About() {
  const highlights = [
    {
      icon: <Layers size={24} className="icon-cyan" />,
      title: "Clean Layered Architecture",
      desc: "Segregated Controller, Service, Repository, DTO, and Entity layers adhering to clean code and SOLID principles.",
      accent: "cyan",
    },
    {
      icon: <Cpu size={24} className="icon-purple" />,
      title: "Kafka & Redis Pipelines",
      desc: "Engineered asynchronous message queuing with Apache Kafka, Redis caching for fast lookups, and WebSockets for real-time telemetry.",
      accent: "purple",
    },
    {
      icon: <ShieldCheck size={24} className="icon-emerald" />,
      title: "Enterprise RBAC Security",
      desc: "Spring Security and JWT token-based authentication with granular Role-Based Access Control across multi-tier user modules.",
      accent: "emerald",
    },
    {
      icon: <Database size={24} className="icon-amber" />,
      title: "Relational Persistence & ORM",
      desc: "Complex database schema design, JPA/Hibernate mapping, query optimization with SQL Server, PostgreSQL, and Prisma ORM.",
      accent: "amber",
    },
  ];

  const corePillars = [
    "Production-ready RESTful APIs with Swagger/OpenAPI documentation",
    "Global exception handling & robust request validation filters",
    "AWS S3 cloud document management & SMTP automated notifications",
    "Agile sprint delivery, Postman API testing, and Git version control",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <div className="section-badge">
            <Terminal size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-description">
            Dedicated Java Backend Developer passionate about designing resilient,
            scalable, and secure server-side software systems.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative */}
          <div className="about-story glass-card">
            <div className="story-badge">
              <Code2 size={16} />
              <span>Background & Mission</span>
            </div>

            <h3 className="story-heading">
              Building robust backend architectures that power enterprise business workflows
            </h3>

            <p className="story-paragraph">
              I am a <strong>Java Backend Developer with ~2 years of professional experience</strong> 
              delivering end-to-end backend services for enterprise platforms. My primary expertise centers around 
              <strong> Java</strong>, <strong>Spring Boot</strong>, <strong>Spring Security</strong>, 
              <strong>Spring Data JPA</strong>, <strong>Hibernate</strong>, and <strong>SQL Server</strong>.
            </p>

            <p className="story-paragraph">
              Throughout my engineering journey at <strong>JRSS Smart Machine</strong> and 
              <strong> Zeksta Technology</strong>, I have spearheaded the creation of scalable RESTful APIs, 
              integrated <strong>Apache Kafka</strong> for asynchronous event queuing, leveraged <strong>Redis</strong> 
              for high-speed caching, and implemented <strong>WebSockets</strong> for real-time streaming data.
            </p>

            <p className="story-paragraph">
              I place heavy emphasis on clean code, testability, and enterprise security, configuring 
              <strong> Role-Based Access Control (RBAC)</strong> and JWT authentication so that sensitive company 
              and user workflows remain strictly safeguarded.
            </p>

            {/* Core Pillars Bullet Checklist */}
            <div className="pillars-list">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-check" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            {/* Quick Metadata Box */}
            <div className="about-metadata-box">
              <div className="meta-item">
                <span className="meta-label">Location:</span>
                <span className="meta-value">Bangalore, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Experience:</span>
                <span className="meta-value">~2 Years Enterprise</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Education:</span>
                <span className="meta-value">B.Tech in EEE (2020-2024)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Focus:</span>
                <span className="meta-value">Java Backend & Microservices</span>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="about-cards-column">
            {highlights.map((item, index) => (
              <div key={index} className={`highlight-box glass-card border-${item.accent}`}>
                <div className={`highlight-icon-wrapper bg-${item.accent}`}>
                  {item.icon}
                </div>
                <div className="highlight-text">
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
