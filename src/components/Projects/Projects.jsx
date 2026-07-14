import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Insurance Claim Management Platform",
      category: "Backend & Web Application",
      description:
        "Contributed to a role-based insurance claim management application for managing users, insurance workflows and claim-related operations.",
      features: [
        "Developed and maintained REST API routes for user and application modules.",
        "Implemented JWT-based authentication and role-based login validation.",
        "Implemented secure password validation using bcrypt.",
        "Worked with Prisma ORM for database queries and relational data handling.",
        "Developed user creation logic with dynamic employee and company-based user IDs.",
        "Implemented multipart form-data handling and file upload workflows.",
        "Integrated email notifications for automatically generated login credentials.",
        "Validated API responses, request data and database persistence.",
      ],
      technologies: [
        "Next.js",
        "Node.js",
        "JavaScript",
        "Prisma ORM",
        "PostgreSQL",
        "JWT",
        "bcrypt",
        "REST APIs",
      ],
    },
    {
      title: "Enterprise Backend API System",
      category: "Java Backend Development",
      description:
        "Developed and tested backend modules for a large-scale REST API application using Java and Spring Boot with structured service and persistence layers.",
      features: [
        "Developed REST APIs using Java and Spring Boot.",
        "Implemented Controller, Service, Repository, Entity and DTO layers.",
        "Used Spring Data JPA and Hibernate for database persistence.",
        "Implemented CRUD operations and backend business validation.",
        "Worked with entity relationships and relational database mappings.",
        "Tested REST endpoints using Swagger OpenAPI.",
        "Verified API request and response data against database records.",
        "Debugged persistence, entity mapping and database constraint issues.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "SQL Server",
        "Swagger",
        "Maven",
      ],
    },
    {
      title: "Delay Tracking & Event Logging Service",
      category: "Backend Business Logic",
      description:
        "Implemented a backend service for tracking application events, status transitions and complete event history using Spring Boot.",
      features: [
        "Implemented APIs for creating, updating and retrieving tracking records.",
        "Developed status-based OPEN and CLOSED workflow logic.",
        "Prevented duplicate active records using backend validation.",
        "Implemented category and reason management APIs.",
        "Created event history logging for tracking record changes.",
        "Used transactional service methods for consistent database operations.",
        "Implemented DTO and entity mapping for API responses.",
        "Tested APIs and verified persisted records in SQL Server.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "SQL Server",
        "Swagger",
        "REST APIs",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-description">
          Backend projects focused on REST API development, business logic,
          database persistence, authentication and application deployment.
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div>
                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <h4>Key Contributions</h4>

              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <div className="technology-list">
                {project.technologies.map((technology, technologyIndex) => (
                  <span key={technologyIndex}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;