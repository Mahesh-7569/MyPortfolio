import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Jr. Software Engineer",
      company: "JRSS Smart Machine",
      period: "Oct 2025 - Present",
      type: "Current Role",
      responsibilities: [
        "Developing REST APIs and backend modules using Java and Spring Boot.",
        "Implementing Controller, Service, Repository, Entity and DTO layers.",
        "Working with Spring Data JPA and Hibernate for database persistence.",
        "Implementing CRUD operations, business logic and request validation.",
        "Working with SQL Server for database operations and relational data management.",
        "Testing REST APIs using Swagger and validating API responses.",
        "Verifying persisted database records to ensure accurate data storage and processing.",
        "Debugging JPA mappings, entity relationships and database constraint issues.",
        "Working with Maven and Docker-based application build and deployment workflows.",
      ],
    },
    {
      role: "Software Engineer Trainee",
      company: "Zeksta Technology Pvt. Ltd.",
      period: "Mar 2025 - Oct 2025",
      type: "Previous Role",
      responsibilities: [
        "Contributed to backend development for an insurance claim management application.",
        "Developed and maintained REST API routes for user and application modules.",
        "Worked with Next.js, Node.js and Prisma ORM for backend functionality.",
        "Implemented JWT-based authentication and role-based login validation.",
        "Worked with bcrypt for secure password validation.",
        "Implemented user creation, input validation and database persistence workflows.",
        "Worked with PostgreSQL for relational data storage and database operations.",
        "Tested APIs and verified request, response and persisted database records.",
        "Used Git and GitHub for source code management and development workflows.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>

        <p className="experience-description">
          Professional experience in backend development, REST API
          implementation, database integration and software application
          development.
        </p>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <div>
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>
              </div>

              <ul className="responsibility-list">
                {experience.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <li key={responsibilityIndex}>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;