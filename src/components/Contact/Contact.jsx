import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "../common/Icons";
import "./Contact.css";

function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as fallback to open default email client with user input
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:cheerlamahesh2002@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-description">
            Looking for a skilled Java Backend Developer to build scalable APIs, event streaming
            pipelines, and secure enterprise systems? I'm available for full-time opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-col">
            <h3 className="col-title">Direct Channels</h3>

            {/* Email Card */}
            <div className="contact-channel-card glass-card theme-cyan">
              <div className="channel-icon-box cyan-bg">
                <Mail size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email Address</span>
                <a href="mailto:cheerlamahesh2002@gmail.com" className="channel-value">
                  cheerlamahesh2002@gmail.com
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy("cheerlamahesh2002@gmail.com", "email")}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedType === "email" ? (
                  <Check size={16} className="text-emerald" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-channel-card glass-card theme-emerald">
              <div className="channel-icon-box emerald-bg">
                <Phone size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Phone & WhatsApp</span>
                <a href="tel:+917569146309" className="channel-value">
                  +91 7569146309
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy("+917569146309", "phone")}
                title="Copy phone number to clipboard"
                aria-label="Copy phone number"
              >
                {copiedType === "phone" ? (
                  <Check size={16} className="text-emerald" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-channel-card glass-card theme-amber">
              <div className="channel-icon-box amber-bg">
                <MapPin size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Location</span>
                <span className="channel-value">Bangalore, India</span>
                <span className="location-note">Open to Hybrid / Onsite / Remote</span>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div className="social-profiles-grid">
              <a
                href="https://www.linkedin.com/in/mahesh-cheerala"
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card linkedin-card"
              >
                <div className="soc-left">
                  <LinkedInIcon size={22} />
                  <div className="soc-meta">
                    <span className="soc-platform">LinkedIn</span>
                    <span className="soc-handle">/in/mahesh-cheerala</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="soc-arrow" />
              </a>

              <a
                href="https://github.com/Mahesh-7569"
                target="_blank"
                rel="noopener noreferrer"
                className="social-profile-card github-card"
              >
                <div className="soc-left">
                  <GitHubIcon size={22} />
                  <div className="soc-meta">
                    <span className="soc-platform">GitHub</span>
                    <span className="soc-handle">/Mahesh-7569</span>
                  </div>
                </div>
                <ArrowUpRight size={18} className="soc-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Send Inquiry Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Quick Message</h3>
              <p className="form-subtitle">
                Have an open position or project? Drop your message and I will reply within 24 hours.
              </p>

              {formSubmitted && (
                <div className="form-success-banner">
                  <Check size={18} />
                  <span>Thank you! Opening your email client to dispatch the message.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="inquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Java Backend Developer Role / Opportunity"
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi Mahesh, we came across your backend profile and would love to discuss an opportunity..."
                    value={formData.message}
                    onChange={handleFormChange}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <Send size={18} />
                  <span>Send Message Directly</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
