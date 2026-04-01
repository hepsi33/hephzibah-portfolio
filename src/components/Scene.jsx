import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Mouse Parallax
const CameraParallax = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    // Smoothly interpolate the camera position based on mouse position
    // This gives the "quantumconsulting.ai" parallax effect
    camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const Planet = () => {
  const planetRef = useRef();

  useFrame((state) => {
    planetRef.current.rotation.y += 0.002;
    planetRef.current.rotation.x += 0.001;
  });

  return (
    <group ref={planetRef} position={[0, 0, -1]}>
      {/* Core glowing sphere */}
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#2a0a5e"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#1a0033"
          emissiveIntensity={0.5}
        />
      </Sphere>
      {/* Outer atmospheric aura */}
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial
          color="#9d4edd"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const FloatingRocks = () => {
  // Generate asteroids with varying depths for strong parallax
  const rocks = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15 - 5 // Push some way back, bring some close
      ],
      scale: Math.random() * 0.4 + 0.1,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      speed: Math.random() * 2 + 0.5
    }));
  }, []);

  return (
    <>
      {rocks.map((rock, i) => (
        <Float
          key={i}
          speed={rock.speed}
          rotationIntensity={2}
          floatIntensity={2}
          position={rock.position}
        >
          <mesh rotation={rock.rotation} scale={rock.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#0f0c29"
              roughness={0.8}
              metalness={0.2}
            />
            {/* Outline/Wireframe for a technical look */}
            <mesh scale={1.02}>
              <icosahedronGeometry args={[1, 0]} />
              <meshBasicMaterial color="#9d4edd" wireframe transparent opacity={0.15} />
            </mesh>
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Scene = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      {/* 
        We use gl={{ antialias: true }} and dpr for crisp rendering 
      */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        {/* Colorful directional lights for the nebula vibe */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#4facfe" />
        <pointLight position={[-10, -10, -5]} intensity={3} color="#9d4edd" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#00f2fe" />

        <Suspense fallback={null}>
          <Planet />
          <FloatingRocks />
          <Stars depth={100} count={6000} factor={5} saturation={1} fade speed={1.5} />
          <CameraParallax />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
