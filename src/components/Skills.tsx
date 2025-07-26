import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Three.js",
        "React Three Fiber",
        "SCSS",
        "MUI",
        "ANTD",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS Lambda", "API Gateway", "S3", "RDS", "EC2", "CI/CD"],
    },
    {
      name: "3D Tools",
      skills: ["3ds Max", "Maxscript", "Blender"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical expertise across frontend, backend, and 3D development
        </p>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card"
              style={{
                background: "var(--bg-secondary)",
                borderRadius: "1.5rem",
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.08)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                {category.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "var(--text-primary)",
                      padding: "0.75rem 1.25rem",
                      borderRadius: "1.5rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(10px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--text-accent)";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              background: "var(--bg-secondary)",
              borderRadius: "1.5rem",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "none",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              What I Bring to the Table
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: "1.6",
              }}
            >
              I combine traditional web development expertise with cutting-edge
              3D technologies to create immersive digital experiences. My
              experience spans from building scalable backend systems to
              crafting interactive 3D interfaces, allowing me to deliver
              end-to-end solutions that push the boundaries of web technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
