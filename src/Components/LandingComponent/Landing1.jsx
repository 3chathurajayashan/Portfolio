import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";

// Import your images
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/img3.jpg";
import Land2 from "./Land2";
import Linkdin from "./Linkdin";

const images = [img1, img2];

/* ---------- Apple-style tokens ----------
   bg:        #ffffff
   bg-alt:    #f5f5f7
   text:      #1d1d1f
   text-dim:  #86868b
   accent:    #0071e3
   accent-hv: #0077ed
------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Landing1() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.96]);

  const stack = [
    { icon: FaReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: FaNodeJs, label: "Node.js" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiKubernetes, label: "Kubernetes" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: FaAws, label: "AWS" },
  ];

  return (
    <div
      className="bg-white text-[#1d1d1f]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Sticky nav */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-tight">
            Chathura Jayashan
          </span>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[#1d1d1f]/80">
            <a href="#about" className="hover:text-[#0071e3] transition-colors">
              About
            </a>
            <a href="#stack" className="hover:text-[#0071e3] transition-colors">
              Stack
            </a>
            <button
              onClick={() => navigate("/projects")}
              className="hover:text-[#0071e3] transition-colors"
            >
              Projects
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-14 bg-[#f5f5f7] overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-4xl w-full text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[15px] font-medium text-[#0071e3] mb-4 tracking-wide"
          >
            Software Engineering Intern @ SilverLine IT PVT Ltd
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,9vw,6.5rem)] font-semibold tracking-[-0.03em] leading-[0.98]"
          >
            Chathura Jayashan
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[19px] md:text-[22px] text-[#86868b] max-w-2xl mx-auto leading-relaxed font-normal"
          >
            BSc (Hons) in Information Technology, specializing in Software
            Engineering at SLIIT. Building clean, scalable systems from frontend
            to infrastructure.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <button
              onClick={() => navigate("/projects")}
              className="px-7 py-3 bg-yellow-500 text-white text-[15px] font-medium rounded-full hover:bg-[#0077ed] transition-all duration-300"
            >
              View Projects →
            </button>
            <button className="px-7 py-3 text-[#0071e3] text-[15px] font-medium hover:underline underline-offset-4 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Product-style image slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 w-full max-w-4xl aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-black/5"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </motion.section>

      <Land2 />

      {/* Tech stack — Apple "specs grid" style */}
      <section id="stack" className="max-w-6xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-center mb-16"
        >
          Built with a modern stack.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stack.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-3 py-10 rounded-2xl bg-[#f5f5f7] hover:bg-[#0071e3]/5 transition-colors duration-300 group"
            >
              <tech.icon
                size={32}
                className="text-[#1d1d1f]/70 group-hover:text-[#0071e3] transition-colors duration-300"
              />
              <span className="text-[13px] font-medium text-[#86868b] group-hover:text-[#1d1d1f] transition-colors duration-300">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About — Apple large statement style */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 py-40 text-center border-t border-black/5"
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="text-[clamp(2.2rem,5vw,3.75rem)] font-semibold tracking-tight leading-[1.1]"
        >
          Engineering excellence through
          <br />
          minimal, scalable design.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 text-[19px] text-[#86868b] leading-relaxed"
        >
          I build systems that bridge the gap between complexity and clarity —
          from frontend interfaces to cloud infrastructure.
        </motion.p>
      </section>

      <Linkdin />
    </div>
  );
}
