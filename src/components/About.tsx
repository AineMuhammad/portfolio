import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate software engineer with expertise in 3D development and
          modern web technologies
        </p>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left Column - Text Content */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Who I Am
            </h3>

            <div
              style={{
                color: "var(--text-secondary)",
                lineHeight: "1.8",
                fontSize: "1.125rem",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                I'm a Senior Software Engineer with over 4 years of experience
                in building cutting-edge web applications and immersive 3D
                experiences. My passion lies in creating interactive,
                performant, and scalable solutions that push the boundaries of
                what's possible on the web.
              </p>

              <p style={{ marginBottom: "1.5rem" }}>
                I specialize in React, Three.js, and React Three Fiber, bringing
                3D experiences to life in the browser. From product
                configurators to interactive visualizations, I've built
                solutions that bridge the gap between traditional web
                development and 3D graphics.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>

          {/* Right Column - Stats/Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Education */}
            <div className="card">
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Education
              </h4>
              <div
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                }}
              >
                <div
                  style={{ fontWeight: "600", color: "var(--text-primary)" }}
                >
                  SUNY Albany
                </div>
                <p>
                  <strong>SUNY Albany</strong> — Masters in Computer Science (AI
                  Major)
                </p>
                <p>August 2024 - Present</p>
                <p>
                  <strong>NUST, Islamabad</strong> — Bachelors of Software
                  Engineering
                </p>
                <p>OCT 2017 - JULY 2021</p>
                <p>GPA - 3.60</p>
              </div>
            </div>

            {/* Languages */}
            <div className="card">
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Languages
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {["English", "Urdu", "German"].map((language) => (
                  <span
                    key={language}
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--text-primary)",
                      padding: "0.5rem 1rem",
                      borderRadius: "2rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Quick Stats
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "var(--text-accent)",
                    }}
                  >
                    4+
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Years Experience
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "var(--text-accent)",
                    }}
                  >
                    10+
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
