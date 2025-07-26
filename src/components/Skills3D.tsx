import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Text3D, Html } from "@react-three/drei";
import { useTheme } from "../contexts/ThemeContext";
import * as THREE from "three";
import helvetiker_regular from "../fonts/helvetiker_regular.typeface.json";

interface SkillTextProps {
  skill: string;
  position: [number, number, number];
  scale: number;
  color: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  velocity: THREE.Vector3;
  onCollision: (skill: string, position: THREE.Vector3) => void;
}

const SkillText: React.FC<SkillTextProps> = ({
  skill,
  position,
  scale,
  color,
  isHovered,
  onHover,
  velocity,
  onCollision,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const currentPosition = useRef(new THREE.Vector3(...position));
  const currentVelocity = useRef(velocity.clone());

  useFrame((state) => {
    if (meshRef.current) {
      // Update position based on velocity
      currentPosition.current.add(
        currentVelocity.current.clone().multiplyScalar(0.05)
      );
      meshRef.current.position.copy(currentPosition.current);

      // Gentle floating animation
      meshRef.current.position.y =
        currentPosition.current.y +
        Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;

      // Scale animation on hover
      if (isHovered) {
        meshRef.current.scale.setScalar(scale * 1.15);
      } else {
        meshRef.current.scale.setScalar(scale);
      }

      // Check boundaries and bounce
      const bounds = 6;
      if (Math.abs(currentPosition.current.x) > bounds) {
        currentVelocity.current.x *= -1;
        currentPosition.current.x =
          Math.sign(currentPosition.current.x) * bounds;
      }
      if (Math.abs(currentPosition.current.z) > bounds) {
        currentVelocity.current.z *= -1;
        currentPosition.current.z =
          Math.sign(currentPosition.current.z) * bounds;
      }
      if (Math.abs(currentPosition.current.y) > bounds * 0.3) {
        currentVelocity.current.y *= -1;
        currentPosition.current.y =
          Math.sign(currentPosition.current.y) * bounds * 0.3;
      }

      // Notify parent of position for collision detection
      onCollision(skill, currentPosition.current.clone());
    }
  });

  return (
    <group>
      <Center>
        <Text3D
          ref={meshRef}
          font={helvetiker_regular as any}
          size={0.5}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.015}
          bevelSize={0.015}
          bevelOffset={0}
          bevelSegments={5}
          onPointerEnter={() => onHover(true)}
          onPointerLeave={() => onHover(false)}
        >
          {skill}
          <meshStandardMaterial
            color={color}
            metalness={0.2}
            roughness={0.6}
            emissive={isHovered ? color : "#ffffff"}
            emissiveIntensity={isHovered ? 0.3 : 0.1}
          />
        </Text3D>
      </Center>
      {/* Removed Html popup on hover */}
    </group>
  );
};

const Skills3D: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { theme } = useTheme();
  const skillPositions = useRef<Map<string, THREE.Vector3>>(new Map());
  const skillVelocities = useRef<Map<string, THREE.Vector3>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);

  const skillTexts = useMemo(
    () => [
      // Frontend
      {
        skill: "React",
        position: [-3, 2, 0] as [number, number, number],
        scale: 0.8,
        color: "#61dafb",
        velocity: new THREE.Vector3(0.15, 0.05, 0.1),
      },
      {
        skill: "Next.js",
        position: [-2, 1.5, 0.5] as [number, number, number],
        scale: 0.7,
        color: "#000000",
        velocity: new THREE.Vector3(-0.1, 0.1, -0.05),
      },
      {
        skill: "Three.js",
        position: [-1, 1, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#00ff88",
        velocity: new THREE.Vector3(0.05, -0.1, 0.15),
      },
      {
        skill: "R3F",
        position: [0, 1.5, 0.5] as [number, number, number],
        scale: 0.7,
        color: "#ff6b6b",
        velocity: new THREE.Vector3(-0.15, 0.05, -0.15),
      },
      {
        skill: "SCSS",
        position: [1, 1, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#cf649a",
        velocity: new THREE.Vector3(0.1, 0.1, 0.05),
      },
      {
        skill: "MUI",
        position: [2, 1.5, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#007fff",
        velocity: new THREE.Vector3(-0.05, -0.05, 0.1),
      },
      {
        skill: "ANTD",
        position: [3, 1, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#1890ff",
        velocity: new THREE.Vector3(0.15, 0.05, 0.1),
      },

      // Backend
      {
        skill: "Node.js",
        position: [-2.5, -0.5, 0.5] as [number, number, number],
        scale: 0.7,
        color: "#68a063",
        velocity: new THREE.Vector3(-0.1, 0.1, -0.05),
      },
      {
        skill: "Python",
        position: [-1.5, -1, 0.5] as [number, number, number],
        scale: 0.8,
        color: "#ffd700",
        velocity: new THREE.Vector3(0.05, -0.1, 0.15),
      },

      // Cloud & DevOps
      {
        skill: "AWS",
        position: [-0.5, 1.5, 0.5] as [number, number, number],
        scale: 0.9,
        color: "#ff9900",
        velocity: new THREE.Vector3(-0.15, 0.05, -0.15),
      },
      {
        skill: "Lambda",
        position: [0.5, -1, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff6b35",
        velocity: new THREE.Vector3(0.1, 0.1, 0.05),
      },
      {
        skill: "API Gateway",
        position: [1.5, -1, 1] as [number, number, number],
        scale: 0.5,
        color: "#ff6b6b",
        velocity: new THREE.Vector3(-0.1, -0.075, 0.1),
      },
      {
        skill: "S3",
        position: [2.5, -1, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff9900",
        velocity: new THREE.Vector3(0.15, 0.05, 0.1),
      },
      {
        skill: "RDS",
        position: [-2, -2, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff9900",
        velocity: new THREE.Vector3(-0.1, 0.1, -0.05),
      },
      {
        skill: "EC2",
        position: [-1, -2.5, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff9900",
        velocity: new THREE.Vector3(0.05, -0.1, 0.15),
      },
      {
        skill: "CI/CD",
        position: [0, -2, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff6b6b",
        velocity: new THREE.Vector3(-0.15, 0.05, -0.15),
      },
      {
        skill: "GCP",
        position: [1, -2.5, 0.5] as [number, number, number],
        scale: 0.7,
        color: "#34a853",
        velocity: new THREE.Vector3(0.1, 0.1, 0.05),
      },

      // 3D Tools
      {
        skill: "3ds Max",
        position: [2, -2, 0.5] as [number, number, number],
        scale: 0.5,
        color: "#ff6b6b",
        velocity: new THREE.Vector3(-0.05, -0.05, 0.1),
      },
      {
        skill: "Maxscript",
        position: [3, -2.5, 0.5] as [number, number, number],
        scale: 0.5,
        color: "#ff6b6b",
        velocity: new THREE.Vector3(0.15, 0.05, 0.1),
      },
      {
        skill: "Blender",
        position: [2.5, -1.5, 0.5] as [number, number, number],
        scale: 0.6,
        color: "#ff6b35",
        velocity: new THREE.Vector3(-0.1, 0.1, -0.05),
      },
    ],
    []
  );

  // Handle collision detection
  const handleCollision = (skill: string, position: THREE.Vector3) => {
    skillPositions.current.set(skill, position);

    // Check collision with other skills
    skillPositions.current.forEach((otherPos, otherSkill) => {
      if (skill !== otherSkill) {
        const distance = position.distanceTo(otherPos);
        const collisionDistance = 1.5; // Reduced collision distance

        if (distance < collisionDistance) {
          // Bounce off each other
          const skillVel = skillVelocities.current.get(skill);
          const otherVel = skillVelocities.current.get(otherSkill);

          if (skillVel && otherVel) {
            // Simple elastic collision
            const direction = position.clone().sub(otherPos).normalize();

            // Reverse velocities in collision direction
            skillVel.add(direction.clone().multiplyScalar(0.1));
            otherVel.sub(direction.clone().multiplyScalar(0.1));

            // Normalize velocities to maintain consistent speed
            skillVel.normalize().multiplyScalar(0.3);
            otherVel.normalize().multiplyScalar(0.3);
          }
        }
      }
    });
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills3d"
      className="section skills-section"
      style={{ position: "relative", overflow: "hidden", width: "98vw" }}
    >
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div
          style={{ height: "600px", position: "relative", marginTop: "2rem" }}
        >
          <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            style={{ background: "transparent" }}
          >
            {/* Bright, even lighting for readability */}
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} intensity={1.0} color="#ffffff" />
            <pointLight position={[-5, 5, 5]} intensity={1.0} color="#ffffff" />
            <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
            <pointLight position={[0, 5, 0]} intensity={0.6} color="#ffffff" />

            {/* Skill Text Objects */}
            {skillTexts.map((skillText, index) => {
              if (!skillVelocities.current.has(skillText.skill)) {
                skillVelocities.current.set(
                  skillText.skill,
                  skillText.velocity
                );
              }
              return (
                <SkillText
                  key={index}
                  skill={skillText.skill}
                  position={skillText.position}
                  scale={skillText.scale}
                  color={skillText.color}
                  isHovered={hoveredSkill === skillText.skill}
                  onHover={(hovered) =>
                    setHoveredSkill(hovered ? skillText.skill : null)
                  }
                  velocity={skillVelocities.current.get(skillText.skill)!}
                  onCollision={handleCollision}
                />
              );
            })}

            {/* Subtle background elements */}
            <group position={[0, 0, -3]}>
              {[...Array(8)].map((_, i) => (
                <mesh
                  key={i}
                  position={[
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 6,
                  ]}
                  scale={Math.random() * 0.02 + 0.01}
                >
                  <sphereGeometry args={[1, 8, 8]} />
                  <meshBasicMaterial
                    color={theme === "dark" ? "#60a5fa" : "#3b82f6"}
                    transparent
                    opacity={0.05}
                  />
                </mesh>
              ))}
            </group>
          </Canvas>
        </div>

        {/* Skills Carousel */}
        <div style={{ marginTop: "4rem" }}>
          <h3 className="skills-section-title">Technical Expertise</h3>

          <div className="carousel-container">
            <div className="skills-carousel" ref={carouselRef}>
              {skillTexts.map((skill, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    background:
                      "linear-gradient(135deg, #233a5f 0%, #3b256b 100%)",
                    color: "#e0e7ef",
                    border: "1px solid rgba(80, 120, 255, 0.18)",
                    borderRadius: "1.5rem",
                    boxShadow:
                      "0 12px 40px 0 rgba(0,0,0,0.22), 0 2px 8px 0 rgba(60,80,120,0.08), inset 0 1px 0 rgba(255,255,255,0.08)",
                    padding: "2.5rem 2rem",
                    position: "relative",
                    overflow: "hidden",
                    backdropFilter: "blur(20px) saturate(130%)",
                    WebkitBackdropFilter: "blur(20px) saturate(130%)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 24px 80px 0 rgba(0,0,0,0.3), 0 4px 16px 0 rgba(60,80,120,0.12), inset 0 1px 0 rgba(255,255,255,0.12)";
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.border =
                      "1px solid rgba(80,120,255,0.25)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #2a4170 0%, #4a2c8c 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px 0 rgba(0,0,0,0.22), 0 2px 8px 0 rgba(60,80,120,0.08), inset 0 1px 0 rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.border =
                      "1px solid rgba(80, 120, 255, 0.18)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #233a5f 0%, #3b256b 100%)";
                  }}
                >
                  <h3
                    style={{
                      color: "#e0e7ef",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: "0.75rem",
                      zIndex: 1,
                      position: "relative",
                      textShadow: "0 1px 3px rgba(0,0,0,0.15)",
                    }}
                  >
                    {skill.skill === "R3F" ? "React Three Fiber" : skill.skill}
                  </h3>
                  <div
                    className="desc"
                    style={{
                      color: "#b6bedc",
                      fontSize: "1rem",
                      zIndex: 1,
                      position: "relative",
                      lineHeight: 1.7,
                    }}
                  >
                    {skill.skill === "React" && "Frontend Development"}
                    {skill.skill === "Next.js" && "Full-Stack Framework"}
                    {skill.skill === "Three.js" && "3D Graphics & Animation"}
                    {skill.skill === "R3F" && "3D Web Development"}
                    {skill.skill === "SCSS" && "Advanced Styling"}
                    {skill.skill === "MUI" && "Material Design UI"}
                    {skill.skill === "ANTD" && "Ant Design UI"}
                    {skill.skill === "Node.js" && "Backend Runtime"}
                    {skill.skill === "Python" && "Backend Development"}
                    {skill.skill === "AWS" && "Cloud Infrastructure"}
                    {skill.skill === "Lambda" && "Serverless Functions"}
                    {skill.skill === "API Gateway" && "API Management"}
                    {skill.skill === "S3" && "Cloud Storage"}
                    {skill.skill === "RDS" && "Database Service"}
                    {skill.skill === "EC2" && "Cloud Computing"}
                    {skill.skill === "CI/CD" && "DevOps Pipeline"}
                    {skill.skill === "GCP" && "Google Cloud Platform"}
                    {skill.skill === "3ds Max" && "3D Modeling"}
                    {skill.skill === "Maxscript" && "3D Scripting"}
                    {skill.skill === "Blender" && "3D Creation Suite"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="carousel-nav">
            <button onClick={() => scrollCarousel("left")}>← Previous</button>
            <button onClick={() => scrollCarousel("right")}>Next →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
