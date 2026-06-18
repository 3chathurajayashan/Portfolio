import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";

// Import your images - Add as many as you need
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/img3.jpg";
import Land2 from "./Land2";
import Linkdin from "./Linkdin";

const images = [img1, img2];

// --- 3D Components ---
const GoldMaterial = () => (
  <meshStandardMaterial
    color="#eab308"
    wireframe
    emissive="#a16207"
    emissiveIntensity={0.5}
    transparent
    opacity={0.6}
  />
);

function FloatingSphere() {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <GoldMaterial />
      </mesh>
    </Float>
  );
}

function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#eab308" intensity={2} />
      <Suspense fallback={null}>
        <FloatingSphere />
      </Suspense>
    </Canvas>
  );
}

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Landing1() {
  const [index, setIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white font-sans selection:bg-yellow-500 selection:text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <ThreeScene />
        </div>

        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-left"
          >
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-semibold tracking-[-0.04em] leading-[0.95]">
              Chathura <br /> <span className="text-yellow-500">Jayashan</span>
            </h1>
            <p className="mt-10 text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              BSC Hons in Information Technology Specialized in Software
              Engineering at SLIIT
            </p>

            <div className="flex gap-6 mt-12">
              <button className="px-10 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-white transition-all duration-300 hover:scale-105">
                View Projects
              </button>
              <button className="px-10 py-4 border border-zinc-800 rounded-full hover:border-yellow-500 transition-all duration-300">
                Contact
              </button>
            </div>
          </motion.div>

          {/* Right Column: Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50" />

            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8"></div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-24 w-full max-w-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-16 items-center justify-center text-zinc-600"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[
              { icon: FaReact, label: "React" },
              { icon: SiTypescript, label: "TypeScript" },
              { icon: FaNodeJs, label: "Node.js" },
              { icon: SiSpringboot, label: "Spring Boot" },
              { icon: FaDocker, label: "Docker" },
              { icon: SiKubernetes, label: "K8s" },
              { icon: SiPostgresql, label: "PostgreSQL" },
              { icon: FaAws, label: "AWS" },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 hover:text-yellow-500 transition-colors duration-300"
              >
                <tech.icon size={28} />
                <span className="text-[10px] uppercase tracking-widest font-medium">
                  {tech.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <Land2 />

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-40 border-t border-zinc-900">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold mb-10 leading-tight">
          Engineering excellence through minimal, scalable design.
        </h2>
        <p className="text-zinc-500 text-2xl font-light leading-relaxed">
          I build systems that bridge the gap between complexity and clarity.
        </p>
      </section>
      <Linkdin />
    </div>
  );
}
