import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Formspree
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and exciting projects.
        </p>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out if you'd like to discuss potential
              collaborations, opportunities, or just want to say hello!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>ainemuhammad903@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <h4>Phone</h4>
                  <p>+92 3365596394</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <h4>Location</h4>
                  <p>Albany, New York</p>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="resume-download">
              <h4>Download Resume</h4>
              <a
                href="/resume.pdf"
                download
                className="download-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "#ffffff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(37, 99, 235, 0.2)",
                }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a
                  href="https://github.com/AineMuhammad"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(80, 120, 255, 0.1)",
                    color: "#60a5fa",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(80, 120, 255, 0.2)",
                  }}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ain-e-muhammad-a32a401a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(80, 120, 255, 0.1)",
                    color: "#60a5fa",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(80, 120, 255, 0.2)",
                  }}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Message</h3>
            <form
              action="https://formspree.io/f/xpwldode"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
