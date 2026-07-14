import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <p className="about-label">WHO I AM</p>

          <h3>
            Java Backend Developer focused on building reliable and scalable
            software applications
          </h3>

          <p>
            I am a Java Backend Developer with 1.5+ years of professional
            experience in developing backend applications and REST APIs using
            Java, Spring Boot, Spring Data JPA and Hibernate.
          </p>

          <p>
            I have hands-on experience implementing backend business logic,
            CRUD operations, API validation, DTO and entity mapping, database
            persistence and relational data handling.
          </p>

          <p>
            I work with PostgreSQL, SQL Server and MySQL databases and have
            experience testing REST APIs using Swagger and Postman. I also
            verify API responses and database records to ensure data is stored
            and processed correctly.
          </p>

          <p>
            I focus on writing clean and maintainable code, understanding
            application architecture and debugging backend and database issues.
            I am also familiar with Git, Docker and CI/CD build and deployment
            workflows.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>1.5+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="highlight-card">
            <h3>Java</h3>
            <p>Backend Development</p>
          </div>

          <div className="highlight-card">
            <h3>Spring Boot</h3>
            <p>REST API Development</p>
          </div>

          <div className="highlight-card">
            <h3>SQL</h3>
            <p>Database Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;