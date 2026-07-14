import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        "Core Java",
        "Java 21",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "JDBC",
        "Servlets",
        "REST APIs",
      ],
    },
    {
      title: "Database Technologies",
      skills: [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "SQL",
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Tools & Integration",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Swagger",
        "Docker",
        "MQTT",
        "OPC UA",
      ],
    },
    {
      title: "Additional Technologies",
      skills: [
        "Node.js",
        "Industrial Automation",
        "PLC Integration",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <p className="skills-description">
          Technologies and tools I use to build backend, database-driven
          and industrial automation applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;