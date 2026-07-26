import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

// Composant pour un avatar 3D simple avec formes géométriques
function Avatar3D() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Tête sphérique avec gradient */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.1}
          roughness={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          emissive="#1d4ed8"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Orbite de neurones / AI */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 1.8;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, 0.5 + Math.sin(i * 0.5) * 0.3, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} />
          </mesh>
        );
      })}

      {/* Anneau orbital */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.4, 1.6, 64]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.4}
          side={2}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <ringGeometry args={[1.6, 1.8, 64]} />
        <meshPhysicalMaterial
          color="#ec4899"
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.3}
          side={2}
        />
      </mesh>
    </group>
  );
}

// Version avec un modèle 3D personnalisé (si vous avez un fichier .glb)
function CustomAvatar() {
  const { scene } = useGLTF("/avatar.glb"); // Placez votre modèle dans public/
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

// Composant principal
function AnimatedAvatar({ customModel = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={["#020617"]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 3, 0]} intensity={0.3} color="#3b82f6" />
        
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          {customModel ? <CustomAvatar /> : <Avatar3D />}
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </motion.div>
  );
}

export default AnimatedAvatar;