import { useState } from "react";
import { 
  Code, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Wrench, 
  Sparkles,
  Layers
} from "lucide-react";
import "./Skills.css";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = [
    {
      id: "backend",
      category: "Backend Frameworks",
      icon: <Server size={22} className="cat-icon green" />,
      colorTheme: "green",
      badgeColor: "emerald-glow",
      description: "Robust enterprise services, layered architecture & RESTful contracts",
      skills: [
        { name: "Spring Boot", level: "Advanced", desc: "Production Microservices" },
        { name: "Spring MVC", level: "Proficient", desc: "Layered Controller/Service" },
        { name: "Spring Data JPA", level: "Advanced", desc: "Data Persistence & Repos" },
        { name: "Hibernate ORM", level: "Advanced", desc: "Entity Relational Mapping" },
        { name: "RESTful APIs", level: "Expert", desc: "Clean REST Architecture" },
      ],
    },
    {
      id: "messaging",
      category: "Messaging, Caching & Realtime",
      icon: <Cpu size={22} className="cat-icon violet" />,
      colorTheme: "violet",
      badgeColor: "violet-glow",
      description: "High-throughput asynchronous event streaming & low-latency caching",
      skills: [
        { name: "Apache Kafka", level: "Proficient", desc: "Event Queuing & Pub/Sub" },
        { name: "Redis", level: "Proficient", desc: "In-memory Fast Caching" },
        { name: "WebSockets", level: "Proficient", desc: "Bi-directional Real-Time Data" },
      ],
    },
    {
      id: "security",
      category: "Security & Authentication",
      icon: <ShieldCheck size={22} className="cat-icon amber" />,
      colorTheme: "amber",
      badgeColor: "amber-glow",
      description: "Enterprise protection, tokens, encryption & access hierarchies",
      skills: [
        { name: "Spring Security", level: "Advanced", desc: "Filter Chains & Config" },
        { name: "JWT Authentication", level: "Advanced", desc: "Stateless Token Claims" },
        { name: "RBAC", level: "Advanced", desc: "Role-Based Access Control" },
      ],
    },
    {
      id: "languages",
      category: "Programming Languages",
      icon: <Code size={22} className="cat-icon cyan" />,
      colorTheme: "cyan",
      badgeColor: "cyan-glow",
      description: "Object-oriented, functional & relational database languages",
      skills: [
        { name: "Java (Core & Adv)", level: "Advanced", desc: "OOP, Streams, Collections, Multithreading" },
        { name: "SQL", level: "Advanced", desc: "Complex Queries, Joins, Indexing" },
        { name: "JavaScript", level: "Intermediate", desc: "ES6+, Async/Await, Web logic" },
        { name: "Node.js", level: "Intermediate", desc: "REST APIs & Express services" },
      ],
    },
    {
      id: "databases",
      category: "Databases & ORM",
      icon: <Database size={22} className="cat-icon blue" />,
      colorTheme: "blue",
      badgeColor: "blue-glow",
      description: "Relational persistence, schema modeling & database management",
      skills: [
        { name: "SQL Server", level: "Advanced", desc: "Enterprise Relational DB" },
        { name: "PostgreSQL", level: "Advanced", desc: "ACID Transactions & Indexing" },
        { name: "MySQL", level: "Proficient", desc: "Relational Data Management" },
        { name: "Prisma ORM", level: "Proficient", desc: "Type-safe Database Access" },
      ],
    },
    {
      id: "devops",
      category: "API & DevOps Tools",
      icon: <Wrench size={22} className="cat-icon pink" />,
      colorTheme: "pink",
      badgeColor: "pink-glow",
      description: "API testing, continuous delivery, build automation & containerization",
      skills: [
        { name: "Swagger / OpenAPI", level: "Advanced", desc: "Interactive API Documentation" },
        { name: "Postman", level: "Advanced", desc: "Integration Testing & Validation" },
        { name: "Maven", level: "Advanced", desc: "Dependency & Build Automation" },
        { name: "Git & GitHub", level: "Advanced", desc: "Version Control & Branching" },
        { name: "Docker (Basic)", level: "Working Knowledge", desc: "Containerized Environments" },
      ],
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend & Frameworks" },
    { id: "messaging", label: "Kafka & Redis" },
    { id: "security", label: "Security & RBAC" },
    { id: "languages", label: "Languages" },
    { id: "databases", label: "Databases" },
    { id: "devops", label: "DevOps & Tools" },
  ];

  const filteredGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Technical Competence</span>
          </div>
          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>
          <p className="section-description">
            Comprehensive backend tech stack mastered through hands-on enterprise development, 
            building scalable microservices, secure authentication, and resilient data layers.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="filter-tabs-container">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-tab-btn ${activeCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {filteredGroups.map((group) => (
            <div key={group.id} className={`skill-category-card glass-card theme-${group.colorTheme}`}>
              <div className="category-header">
                <div className="category-icon-box">
                  {group.icon}
                </div>
                <div className="category-title-info">
                  <h3 className="category-title">{group.category}</h3>
                  <p className="category-desc">{group.description}</p>
                </div>
              </div>

              <div className="skills-items-grid">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-pill">
                    <div className="skill-item-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-tag">{skill.level}</span>
                    </div>
                    <span className="skill-subtext">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner Highlights */}
        <div className="tech-banner glass-card">
          <div className="banner-title">
            <Layers size={18} className="banner-icon" />
            <span>Core Enterprise Stack:</span>
          </div>
          <div className="banner-tags">
            <span className="tech-chip java">Java 21</span>
            <span className="tech-chip spring">Spring Boot 3</span>
            <span className="tech-chip kafka">Apache Kafka</span>
            <span className="tech-chip redis">Redis Cache</span>
            <span className="tech-chip security">Spring Security (RBAC)</span>
            <span className="tech-chip sql">SQL Server</span>
            <span className="tech-chip postgres">PostgreSQL</span>
            <span className="tech-chip swagger">Swagger</span>
            <span className="tech-chip docker">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
