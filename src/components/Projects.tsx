import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ExternalLink, Github, Star, GitBranch } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
}

interface ProjectCard3DProps {
  project: Project;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  project,
  position,
  rotation,
  scale,
  isHovered,
  onHover,
}) => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (isHovered) {
        meshRef.current.scale.setScalar(scale * 1.1);
      } else {
        meshRef.current.scale.setScalar(scale);
      }
    }
  });

  const color = theme === "dark" ? "#60a5fa" : "#3b82f6";
  const opacity = isHovered ? 0.3 : 0.1;

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
    >
      <boxGeometry args={[3, 2, 0.5]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        wireframe
      />
    </mesh>
  );
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Placeholder projects for demo (replace with actual GitHub API call)
  const placeholderProjects: Project[] = [
    {
      id: 1,
      name: "3D Product Configurator",
      description:
        "Interactive 3D product configurator built with React Three Fiber for furniture and truck customization",
      html_url: "https://github.com/username/3d-configurator",
      homepage: "https://3d-configurator-demo.com",
      stargazers_count: 45,
      forks_count: 12,
      language: "TypeScript",
      topics: ["react", "threejs", "3d", "product-configurator"],
      created_at: "2024-01-15T10:00:00Z",
    },
    {
      id: 2,
      name: "Directory Management System",
      description:
        "Full-stack directory management system with React frontend and Node.js backend",
      html_url: "https://github.com/username/directory-system",
      homepage: "https://directory-system-demo.com",
      stargazers_count: 32,
      forks_count: 8,
      language: "JavaScript",
      topics: ["react", "nodejs", "mysql", "csv-import"],
      created_at: "2023-11-20T14:30:00Z",
    },
    {
      id: 3,
      name: "Health App Admin Portal",
      description:
        "Comprehensive admin portal for health application with drag-drop functionality and analytics",
      html_url: "https://github.com/username/health-admin",
      homepage: "https://health-admin-demo.com",
      stargazers_count: 28,
      forks_count: 6,
      language: "TypeScript",
      topics: ["react", "material-ui", "swr", "analytics"],
      created_at: "2023-09-10T09:15:00Z",
    },
    {
      id: 4,
      name: "3D Asset Management",
      description:
        "Cloud-based 3D asset management system with AWS integration and real-time rendering",
      html_url: "https://github.com/username/3d-assets",
      homepage: "https://3d-assets-demo.com",
      stargazers_count: 67,
      forks_count: 15,
      language: "Python",
      topics: ["python", "aws", "3d", "asset-management"],
      created_at: "2024-03-05T16:45:00Z",
    },
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setProjects(placeholderProjects);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="section"
        style={{
          background: "var(--bg-secondary)",
        }}
      >
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            My latest work and contributions to the developer community
          </p>
          <div
            style={{
              textAlign: "center",
              padding: "4rem 0",
              color: "var(--text-secondary)",
            }}
          >
            Loading projects...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="section"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          My latest work and contributions to the developer community
        </p>

        {/* 3D Project Cards */}
        <div
          style={{
            height: "500px",
            position: "relative",
            marginBottom: "4rem",
          }}
        >
          <Canvas
            camera={{ position: [0, 0, 15], fov: 60 }}
            style={{ background: "transparent" }}
          >
            {projects.map((project, index) => {
              const angle = (index / projects.length) * Math.PI * 2;
              const radius = 8;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;

              return (
                <ProjectCard3D
                  key={project.id}
                  project={project}
                  position={[x, 0, z]}
                  rotation={[0, angle, 0]}
                  scale={1}
                  isHovered={hoveredProject === project.id}
                  onHover={(hovered) =>
                    setHoveredProject(hovered ? project.id : null)
                  }
                />
              );
            })}
          </Canvas>
        </div>

        {/* Project Grid */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="card">
              {/* Project Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {project.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    <Github size={20} />
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--text-secondary)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              {/* Project Stats */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <Star size={16} />
                  <span>{project.stargazers_count}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <GitBranch size={16} />
                  <span>{project.forks_count}</span>
                </div>
                {project.language && (
                  <span
                    style={{
                      background: "var(--bg-tertiary)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.75rem",
                    }}
                  >
                    {project.language}
                  </span>
                )}
              </div>

              {/* Project Topics */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {project.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic}
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--text-secondary)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "1rem",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
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
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
