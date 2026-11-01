import { 
  Award, 
  GraduationCap, 
  CheckCircle, 
  BookOpen, 
  Sparkles,
  Trophy,
  Calendar,
  Building
} from "lucide-react";
import "./Certifications.css";

function Certifications() {
  const achievements = [
    {
      title: "Enterprise Delivery",
      desc: "Successfully designed and delivered scalable backend features across ~2 years of enterprise application development.",
    },
    {
      title: "Clean Architecture & Performance",
      desc: "Enhanced application maintainability and performance through clean layered patterns and reusable service components.",
    },
    {
      title: "Real-Time & High-Throughput",
      desc: "Engineered low-latency event pipelines with Apache Kafka, Redis caching, and WebSockets.",
    },
  ];

  const jspidersSkills = [
    "Core Java",
    "Advanced Java",
    "JDBC",
    "Servlets",
    "Spring Framework",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Web Technologies",
  ];

  return (
    <section id="certifications" className="certs-section">
      <div className="certs-container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials & Education</span>
          </div>
          <h2 className="section-title">
            Certifications & <span>Education</span>
          </h2>
          <p className="section-description">
            Strong foundation in software engineering, full-stack Java development,
            and electrical & electronics engineering.
          </p>
        </div>

        <div className="certs-grid">
          {/* Certification Card */}
          <div className="cert-card glass-card theme-amber">
            <div className="cert-header">
              <div className="cert-icon-box amber-glow">
                <Award size={26} className="cert-icon" />
              </div>
              <div className="cert-title-area">
                <span className="cert-badge-type">Professional Certification</span>
                <h3 className="cert-name">Java Full Stack Development</h3>
                <div className="cert-institution">
                  <Building size={15} />
                  <span>JSpiders Training Institute</span>
                </div>
              </div>
            </div>

            <p className="cert-desc">
              Comprehensive full stack engineering program encompassing core-to-advanced Java,
              enterprise frameworks, relational databases, web standards, and application architecture.
            </p>

            <div className="cert-curriculum">
              <span className="curriculum-title">Key Covered Modules:</span>
              <div className="curriculum-pills">
                {jspidersSkills.map((item, idx) => (
                  <span key={idx} className="curriculum-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="cert-card glass-card theme-cyan">
            <div className="cert-header">
              <div className="cert-icon-box cyan-glow">
                <GraduationCap size={26} className="cert-icon" />
              </div>
              <div className="cert-title-area">
                <div className="edu-top-row">
                  <span className="cert-badge-type">Bachelor's Degree</span>
                  <span className="edu-year-pill">2020 – 2024</span>
                </div>
                <h3 className="cert-name">Bachelor of Technology (B.Tech)</h3>
                <span className="degree-major">Electrical and Electronics Engineering</span>
                <div className="cert-institution">
                  <Building size={15} />
                  <span>Annamacharya Institute of Technology and Sciences, Rajampeta</span>
                </div>
              </div>
            </div>

            <p className="cert-desc">
              Rigorous 4-year engineering curriculum cultivating analytical problem-solving,
              control systems, digital electronics, algorithmic reasoning, and software systems.
            </p>

            <div className="edu-highlights">
              <span className="curriculum-title">Core Engineering Foundations:</span>
              <div className="edu-bullets">
                <div className="edu-bullet-item">
                  <CheckCircle size={15} className="edu-bullet-icon" />
                  <span>Analytical thinking, computational logic, and problem solving</span>
                </div>
                <div className="edu-bullet-item">
                  <CheckCircle size={15} className="edu-bullet-icon" />
                  <span>Control systems, digital logic, and embedded microprocessors</span>
                </div>
                <div className="edu-bullet-item">
                  <CheckCircle size={15} className="edu-bullet-icon" />
                  <span>Data structures, software algorithms, and project engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Banner */}
        <div className="achievements-banner glass-card">
          <div className="achievements-header">
            <Trophy size={20} className="trophy-icon" />
            <h3>Key Career Achievements & Impact</h3>
          </div>
          <div className="achievements-grid">
            {achievements.map((ach, idx) => (
              <div key={idx} className="achievement-item">
                <div className="achievement-number">0{idx + 1}</div>
                <div className="achievement-content">
                  <h4>{ach.title}</h4>
                  <p>{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

