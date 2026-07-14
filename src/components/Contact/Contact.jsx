import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <p className="contact-description">
          Interested in working together or discussing Java backend
          development opportunities? Feel free to contact me.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>

            <a href="mailto:cheerlamahe...@gmail.com">
              cheerlamahe...@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/mahesh-cheerala"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>

            <a
              href="https://github.com/Mahesh-7569"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;