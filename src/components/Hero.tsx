import React from "react";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Greeting */}
          <div
            style={{
              fontSize: "1.125rem",
              color: "var(--text-accent)",
              fontWeight: "500",
              marginBottom: "1rem",
            }}
          >
            Hello, I'm
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "1rem",
              lineHeight: "1.1",
            }}
          >
            Ain e Muhammad
          </h1>

          {/* Title */}
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Senior Software Engineer
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              marginBottom: "3rem",
              lineHeight: "1.6",
            }}
          >
            Specializing in React, Three.js, and 3D development. I build
            immersive web experiences and scalable applications that push the
            boundaries of what's possible on the web.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "4rem",
            }}
          >
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              download
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              padding: "1rem",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              animation: "bounce 2s infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-accent)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
