import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Float, 
  Environment, 
  Sparkles,
  Stars
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Composant Robot 3D simplifié mais élégant
function RobotAvatar() {
  const groupRef = useRef();
  const headRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.05;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 0.3) * 0.04;
      headRef.current.rotation.z = Math.sin(t * 0.2) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lumières */}
      <pointLight position={[0, 1.5, 0]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, -0.5, 0]} intensity={0.3} color="#8b5cf6" />

      {/* Corps */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[1.2, 0.9, 0.7]} />
        <meshPhysicalMaterial
          color="#1e293b"
          metalness={0.8}
          roughness={0.2}
          clearcoat={0.5}
          emissive="#0f172a"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Panneau lumineux central */}
      <mesh position={[0, 0, 0.36]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.03]} />
        <meshPhysicalMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Tête */}
      <group ref={headRef} position={[0, 0.65, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 0.7, 0.8]} />
          <meshPhysicalMaterial
            color="#1e293b"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.6}
            emissive="#0f172a"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Visière */}
        <mesh position={[0, 0.05, 0.41]} castShadow>
          <boxGeometry args={[0.6, 0.3, 0.04]} />
          <meshPhysicalMaterial
            color="#0ea5e9"
            emissive="#0ea5e9"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Yeux */}
        <mesh position={[-0.2, 0.1, 0.42]} castShadow>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshPhysicalMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0.2, 0.1, 0.42]} castShadow>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshPhysicalMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Antenne */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 0.25, 8]} />
          <meshPhysicalMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
          <mesh position={[0, 0.15, 0]} castShadow>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshPhysicalMaterial
              color="#a78bfa"
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
            />
          </mesh>
        </mesh>
      </group>

      {/* Bras */}
      <group position={[-0.7, 0.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshPhysicalMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.3, 0]} castShadow>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshPhysicalMaterial color="#2d3748" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      <group position={[0.7, 0.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshPhysicalMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.3, 0]} castShadow>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshPhysicalMaterial color="#2d3748" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Anneaux orbitaux */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.3, 1.5, 64]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.25}
          side={2}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <ringGeometry args={[1.5, 1.7, 64]} />
        <meshPhysicalMaterial
          color="#ec4899"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.2}
          side={2}
        />
      </mesh>

      {/* Particules simples */}
      {[...Array(15)].map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 1.6 + Math.random() * 0.3;
        const height = (Math.random() - 0.5) * 1.5;
        const colors = ["#3b82f6", "#8b5cf6", "#ec4899"];
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle + i * 0.2) * radius,
              height,
              Math.sin(angle + i * 0.2) * radius
            ]}
          >
            <sphereGeometry args={[0.02 + Math.random() * 0.02, 6, 6]} />
            <meshPhysicalMaterial
              color={colors[i % 3]}
              emissive={colors[i % 3]}
              emissiveIntensity={0.5}
              transparent
              opacity={0.3 + Math.random() * 0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Version avec modèle 3D (optionnel)
function AdvancedRobot() {
  try {
    const { scene } = useGLTF("/robot.glb");
    const groupRef = useRef();

    useFrame(() => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
      }
    });

    return (
      <group ref={groupRef}>
        <primitive object={scene} scale={1.5} />
      </group>
    );
  } catch (error) {
    return <RobotAvatar />;
  }
}

// Composant principal
function AIRobotAvatar({ advanced = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full h-full min-h-[400px]"
    >
      <Canvas
        camera={{ position: [2.5, 1, 4.5], fov: 40 }}
        gl={{ antialias: true }}
        shadows
      >
        {/* Fond */}
        <color attach="background" args={["#020617"]} />
        
        {/* Étoiles */}
        <Stars radius={4} depth={6} count={500} factor={0.5} saturation={0} fade />
        
        {/* Environnement */}
        <Environment preset="city" />
        
        {/* Lumières */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[4, 5, 4]}
          intensity={0.8}
          angle={0.3}
          penumbra={0.5}
          castShadow
        />
        <spotLight
          position={[-4, 3, 4]}
          intensity={0.4}
          color="#8b5cf6"
          angle={0.3}
          penumbra={0.5}
        />
        <pointLight position={[0, 2, 0]} intensity={0.3} color="#3b82f6" />
        
        {/* Particules */}
        <Sparkles count={80} scale={4} size={0.03} speed={0.5} color="#3b82f6" opacity={0.3} />
        <Sparkles count={40} scale={4} size={0.02} speed={0.3} color="#8b5cf6" opacity={0.2} />

        {/* Robot */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          {advanced ? <AdvancedRobot /> : <RobotAvatar />}
        </Float>

        {/* Contrôles */}
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.5}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3.5}
          target={[0, 0.1, 0]}
          dampingFactor={0.05}
        />
      </Canvas>
    </motion.div>
  );
}

export default AIRobotAvatar;