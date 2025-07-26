import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "ALL3D",
      location: "San Francisco (Remote)",
      position: "Senior Software Engineer",
      period: "January 2025 - August 2025",
      achievements: [
        "Built 3D product configurators for trucks and furniture using React Three Fiber",
        "Developed scalable frontend architectures with React and Three.js",
        "Engineered serverless APIs using AWS Lambda, API Gateway, RDS (PostgreSQL), and Python",
        "Integrated unit testing pipelines into Lambda functions",
        "Optimized real-time 3D rendering and interactions",
        "Managed 3D assets using cloud-based storage and asset management systems",
      ],
    },
    {
      company: "Tintash",
      location: "Islamabad",
      position: "Senior Software Engineer",
      period: "January 2024 - December 2024",
      achievements: [
        "Developed UIs using React, SCSS, Ant Design; backend services using Python",
        "Built 3D experiences for product configuration using Three.js",
        "Deployed scalable backend systems on AWS serverless stack",
        "Edited and optimized 3D models with 3ds Max and Maxscript",
      ],
    },
    {
      company: "Tintash",
      location: "Islamabad",
      position: "Software Engineer",
      period: "May 2021 - December 2023",
      achievements: [
        "Improved performance through frontend asset optimization",
        "Participated in code reviews and debugging to ensure code quality",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey in software development and 3D technologies
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card experience-card"
              style={{
                position: "relative",
                borderLeft: "4px solid var(--text-accent)",
                paddingLeft: "2rem",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-8px",
                  top: "2rem",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "var(--text-accent)",
                  border: "4px solid var(--bg-secondary)",
                }}
              />

              {/* Header */}
              <div
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.position}
                  </h3>
                  <span
                    style={{
                      color: "var(--text-accent)",
                      fontWeight: "500",
                      fontSize: "0.875rem",
                      padding: "0.25rem 0.75rem",
                      background: "var(--bg-tertiary)",
                      borderRadius: "1rem",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text-secondary)",
                    fontSize: "1.125rem",
                    fontWeight: "500",
                  }}
                >
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Achievements */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    style={{
                      position: "relative",
                      paddingLeft: "1.5rem",
                      marginBottom: "0.75rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5rem",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--text-accent)",
                      }}
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Resume Download CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              fontSize: "1.125rem",
            }}
          >
            Want to see more details about my experience?
          </p>
          <a
            href="/resume.pdf"
            className="btn btn-primary"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
