import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, Sparkles, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// ====== COULEURS ======
const COLORS = {
  blue: "#3b82f6",
  blueLight: "#60a5fa",
  blueDark: "#1e40af",
  purple: "#8b5cf6",
  purpleLight: "#a78bfa",
  pink: "#ec4899",
  pinkLight: "#f472b6",
  cyan: "#06b6d4",
  white: "#ffffff",
};

// ====== 1. NOYAU PRINCIPAL ======
function NeuralCore() {
  const coreRef = useRef();
  const innerCoreRef = useRef();
  const heartRef = useRef();
  const glowRef = useRef();
  const outerGlowRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (coreRef.current) {
      coreRef.current.rotation.x = Math.sin(t * 0.06) * 0.04;
      coreRef.current.rotation.y = t * 0.08;
      coreRef.current.position.y = Math.sin(t * 0.2) * 0.02;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -t * 0.05;
      innerCoreRef.current.rotation.x = Math.sin(t * 0.04) * 0.03;
    }

    if (heartRef.current) {
      const pulse = 1 + Math.sin(t * 1.5) * 0.08;
      heartRef.current.scale.setScalar(pulse);
      heartRef.current.material.emissiveIntensity = 0.8 + Math.sin(t * 1.8) * 0.4;
    }

    if (glowRef.current) {
      const pulse = 0.85 + Math.sin(t * 0.5) * 0.15;
      glowRef.current.scale.setScalar(pulse);
      glowRef.current.material.opacity = 0.06 + Math.sin(t * 0.4) * 0.03;
    }

    if (outerGlowRef.current) {
      const pulse = 0.9 + Math.sin(t * 0.3) * 0.1;
      outerGlowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={outerGlowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshPhysicalMaterial
          color={COLORS.purple}
          transparent
          opacity={0.03}
          emissive={COLORS.purple}
          emissiveIntensity={0.05}
          wireframe
        />
      </mesh>

      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshPhysicalMaterial
          color={COLORS.blue}
          transparent
          opacity={0.06}
          emissive={COLORS.blue}
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={coreRef} castShadow receiveShadow>
        <sphereGeometry args={[0.95, 64, 64]} />
        <meshPhysicalMaterial
          color="#14161b"
          metalness={0.7}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.85}
          envMapIntensity={0.6}
          emissive={COLORS.blue}
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshPhysicalMaterial
          color={COLORS.blue}
          metalness={0.2}
          roughness={0.1}
          transparent
          opacity={0.08}
          emissive={COLORS.blue}
          emissiveIntensity={0.15}
          wireframe
        />
      </mesh>

      <mesh ref={heartRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial
          color={COLORS.blueLight}
          metalness={0.1}
          roughness={0.05}
          emissive={COLORS.blue}
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshPhysicalMaterial
          color={COLORS.white}
          metalness={0.5}
          roughness={0.05}
          emissive={COLORS.blueLight}
          emissiveIntensity={2}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial
          color={COLORS.white}
          metalness={0.5}
          roughness={0.05}
          emissive={COLORS.purpleLight}
          emissiveIntensity={3}
        />
      </mesh>
    </group>
  );
}

// ====== 2. RÉSEAU NEURONAL ======
function NeuralNetwork() {
  const linesRef = useRef([]);
  const nodesRef = useRef([]);
  
  const numNodes = 30;
  const nodePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 0.3 + Math.random() * 0.5;
      positions.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        color: i % 3 === 0 ? COLORS.blue : i % 3 === 1 ? COLORS.purple : COLORS.pink,
        size: 0.02 + Math.random() * 0.025,
      });
    }
    return positions;
  }, []);

  const connections = useMemo(() => {
    const conns = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = nodePositions[i].x - nodePositions[j].x;
        const dy = nodePositions[i].y - nodePositions[j].y;
        const dz = nodePositions[i].z - nodePositions[j].z;
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < 0.6 && Math.random() < 0.12) {
          conns.push({ i, j, dist });
        }
      }
    }
    return conns;
  }, [nodePositions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    linesRef.current.forEach((line, idx) => {
      if (line) {
        const pulse = 0.1 + Math.sin(t * 0.5 + idx * 0.3) * 0.1;
        line.material.opacity = pulse;
      }
    });

    nodesRef.current.forEach((node, idx) => {
      if (node) {
        const pulse = 0.5 + Math.sin(t * 0.8 + idx * 0.2) * 0.3;
        node.material.emissiveIntensity = pulse;
      }
    });
  });

  return (
    <group>
      {connections.map((conn, idx) => {
        const start = nodePositions[conn.i];
        const end = nodePositions[conn.j];
        return (
          <line key={`line-${idx}`} ref={(el) => (linesRef.current[idx] = el)}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  start.x, start.y, start.z,
                  end.x, end.y, end.z
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={start.color}
              transparent
              opacity={0.15}
            />
          </line>
        );
      })}

      {nodePositions.map((node, i) => (
        <mesh
          key={`node-${i}`}
          ref={(el) => (nodesRef.current[i] = el)}
          position={[node.x, node.y, node.z]}
        >
          <sphereGeometry args={[node.size, 8, 8]} />
          <meshPhysicalMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// ====== 3. ANNEAUX ORBITAUX ======
function OrbitalRings() {
  const ringsRef = useRef([]);
  const particlesRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const speeds = [0.05, -0.07, 0.04, -0.06, 0.05];
        const tilts = [Math.PI / 2.8, Math.PI / 2.3, Math.PI / 2.5, Math.PI / 2.2, Math.PI / 2.6];
        
        ring.rotation.x = tilts[i % tilts.length] + Math.sin(t * 0.04 + i) * 0.03;
        ring.rotation.z = t * 0.01 + i * 0.15;
        ring.rotation.y = t * speeds[i % speeds.length];
        ring.material.opacity = 0.12 + Math.sin(t * 0.3 + i) * 0.06;
      }
    });

    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        const ringIndex = Math.floor(i / 10);
        const radius = 1.2 + ringIndex * 0.2;
        const speed = 0.2 + ringIndex * 0.04;
        const angle = (i % 10 / 10) * Math.PI * 2 + t * speed + ringIndex * 0.3;
        
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle) * 0.4;
        const z = radius * Math.sin(angle) * 0.4;
        particle.position.set(x, y, z);
        
        const twinkle = 0.3 + Math.sin(t * 2 + i) * 0.3;
        particle.material.opacity = twinkle;
      }
    });
  });

  const ringData = [
    { radius: 1.2, color: COLORS.blue, thickness: 0.006 },
    { radius: 1.4, color: COLORS.purple, thickness: 0.005 },
    { radius: 1.6, color: COLORS.pink, thickness: 0.006 },
    { radius: 1.8, color: COLORS.cyan, thickness: 0.004 },
    { radius: 2.0, color: COLORS.blueLight, thickness: 0.005 },
  ];

  const colors = [COLORS.blue, COLORS.purple, COLORS.pink, COLORS.cyan, COLORS.blueLight];
  const count = 50;

  return (
    <>
      {ringData.map((ring, i) => (
        <mesh
          key={`ring-${i}`}
          ref={(el) => (ringsRef.current[i] = el)}
          rotation={[Math.PI / 2.5 + i * 0.1, i * 0.3, 0]}
          position={[0, 0, 0]}
        >
          <torusGeometry args={[ring.radius, ring.thickness, 8, 96]} />
          <meshPhysicalMaterial
            color={ring.color}
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.15}
            emissive={ring.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}

      {[...Array(count)].map((_, i) => {
        const ringIndex = Math.floor(i / 10);
        const radius = 1.2 + ringIndex * 0.2;
        const angle = (i % 10 / 10) * Math.PI * 2 + ringIndex * 0.3;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle) * 0.4;
        const z = radius * Math.sin(angle) * 0.4;
        
        return (
          <mesh
            key={`ring-particle-${i}`}
            ref={(el) => (particlesRef.current[i] = el)}
            position={[x, y, z]}
          >
            <sphereGeometry args={[0.018, 6, 6]} />
            <meshPhysicalMaterial
              color={colors[i % colors.length]}
              emissive={colors[i % colors.length]}
              emissiveIntensity={0.6}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}
    </>
  );
}

// ====== 4. PARTICULES FLOTTANTES ======
function FloatingParticles() {
  const particlesRef = useRef();
  const count = 200;
  
  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colorPalette = [
      new THREE.Color(COLORS.blue),
      new THREE.Color(COLORS.purple),
      new THREE.Color(COLORS.pink),
      new THREE.Color(COLORS.cyan),
      new THREE.Color(COLORS.blueLight),
    ];
    
    for (let i = 0; i < count; i++) {
      const layer = Math.random();
      let radius;
      if (layer < 0.3) radius = 1.0 + Math.random() * 0.8;
      else if (layer < 0.7) radius = 1.8 + Math.random() * 0.8;
      else radius = 2.6 + Math.random() * 0.8;
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      
      const c = colorPalette[i % colorPalette.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      
      sizes[i] = 0.01 + Math.random() * 0.03;
    }
    return { positions: pos, colors: col, sizes };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.012;
      particlesRef.current.rotation.x = Math.sin(t * 0.006) * 0.015;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        transparent
        opacity={0.35}
        vertexColors
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ====== 5. SCÈNE PRINCIPALE ======
function Scene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <Stars radius={8} depth={10} count={2000} factor={1.2} saturation={0} fade />
      <Environment preset="night" background={false} />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#fff8ee" castShadow />
      <directionalLight position={[-4, 3, -3]} intensity={0.5} color={COLORS.blue} />
      <directionalLight position={[-3, -2, -4]} intensity={0.3} color={COLORS.purple} />
      <pointLight position={[0, 2.5, 0]} intensity={0.5} color={COLORS.blue} distance={4} />
      <pointLight position={[2, -1, 2]} intensity={0.25} color={COLORS.pink} distance={3} />

      <Sparkles count={200} scale={6} size={0.035} speed={0.5} color={COLORS.blue} opacity={0.25} />
      <Sparkles count={120} scale={6} size={0.025} speed={0.3} color={COLORS.purple} opacity={0.15} />
      <Sparkles count={60} scale={6} size={0.015} speed={0.2} color={COLORS.pink} opacity={0.1} />

      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.2}>
        <NeuralCore />
        <NeuralNetwork />
        <OrbitalRings />
      </Float>
      
      <FloatingParticles />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]}>
        <circleGeometry args={[2.8, 32]} />
        <meshPhysicalMaterial color="#000000" transparent opacity={0.12} roughness={1} metalness={0} />
      </mesh>

      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.4}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.15}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 4}
        target={[0, 0, 0]}
        dampingFactor={0.05}
        rotateSpeed={0.4}
      />
    </>
  );
}

// ====== COMPOSANT PRINCIPAL - SANS BADGE ======
function PremiumAIAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full min-h-[350px]"
    >
      <div className="w-full h-full min-h-[320px]">
        <Canvas
          camera={{ position: [2.8, 1.2, 4.8], fov: 35 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0
          }}
          shadows
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </div>
    </motion.div>
  );
}

export default PremiumAIAvatar;