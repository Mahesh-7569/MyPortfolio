import "./Home.css";
import profileImage from "../../assets/images/Myprofile.jpeg";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="hello">Hello, I'm</p>

        <h1>
          Mehesh <span>Cheerla</span>
        </h1>

        {/* <h2>Java Backend Developer</h2> */}

        <p className="description">
          Java Backend Developer with 1.5+ years of experience in building REST
          APIs and database-driven applications using Java, Spring Boot, Spring
          Data JPA and Hibernate. Skilled in backend development, business logic
          implementation, API testing and relational database integration.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profileImage} alt="Mehesh Cheerla" />
      </div>
    </section>
  );
}

export default Home;
