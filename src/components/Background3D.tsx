import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "../contexts/ThemeContext";
import * as THREE from "three";

// StarField with more, smaller, dimmer, and slightly colored stars
const StarField: React.FC<{ groupRef?: React.RefObject<THREE.Group> }> = ({
  groupRef,
}) => {
  const starCount = 800;
  const mesh = useRef<THREE.Points>(null);
  const colors = [
    "#b6b6ff",
    "#a3c9f9",
    "#e0b3ff",
    "#ffffff",
    "#7c3aed",
    "#60a5fa",
  ];
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < starCount; i++) {
      arr.push((Math.random() - 0.5) * 80);
      arr.push((Math.random() - 0.5) * 80);
      arr.push((Math.random() - 0.5) * 80);
    }
    return new Float32Array(arr);
  }, []);
  const colorArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < starCount; i++) {
      const color = new THREE.Color(
        colors[Math.floor(Math.random() * colors.length)]
      );
      arr.push(color.r, color.g, color.b);
    }
    return new Float32Array(arr);
  }, []);
  const [twinkle, setTwinkle] = React.useState(0.7);
  useFrame(({ clock }) => {
    setTwinkle(0.7 + Math.sin(clock.elapsedTime * 0.7) * 0.08);
    if (groupRef && groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.02;
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.1) * 0.03;
    }
  });
  return (
    <group ref={groupRef}>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colorArray.length / 3}
            array={colorArray}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          size={0.18}
          sizeAttenuation
          transparent
          opacity={twinkle}
        />
      </points>
    </group>
  );
};

// Nebula: large, faint, colored clouds
const Nebula: React.FC<{
  position: [number, number, number];
  color: string;
  scale: number;
  opacity: number;
}> = ({ position, color, scale, opacity }) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.z = Math.sin(clock.elapsedTime * 0.07) * 0.2;
      mesh.current.rotation.y = clock.elapsedTime * 0.08;
    }
  });
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </mesh>
  );
};

const Background3D: React.FC = () => {
  const starGroup = React.useRef<THREE.Group>(null);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "#070a13", // Deeper, almost-black
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 18], fov: 60 }}
        style={{ background: "transparent" }}
      >
        {/* Dimmer, cooler lighting */}
        <ambientLight intensity={0.08} />
        <pointLight position={[0, 0, 0]} intensity={0.06} color="#60a5fa" />
        <StarField groupRef={starGroup} />
        {/* Nebula clouds with more color and scale */}
        <Nebula
          position={[-14, 7, -30]}
          color="#7c3aed"
          scale={11}
          opacity={0.1}
        />
        <Nebula
          position={[16, -6, -28]}
          color="#06b6d4"
          scale={8}
          opacity={0.09}
        />
        <Nebula
          position={[0, 13, -35]}
          color="#f472b6"
          scale={13}
          opacity={0.07}
        />
        <Nebula
          position={[-18, -10, -38]}
          color="#f59e42"
          scale={9}
          opacity={0.07}
        />
        <Nebula
          position={[10, 10, -32]}
          color="#60a5fa"
          scale={7}
          opacity={0.08}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
