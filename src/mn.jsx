import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

// Configuration
const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "React / Next.js", level: 90, cat: "Frontend" },
  { name: "Node.js / Express", level: 85, cat: "Backend" },
  { name: "TypeScript", level: 82, cat: "Language" },
  { name: "Java / Spring Boot", level: 78, cat: "Backend" },
  { name: "Python", level: 75, cat: "Language" },
  { name: "MySQL / PostgreSQL", level: 80, cat: "Database" },
  { name: "Docker / DevOps", level: 68, cat: "DevOps" },
  { name: "Tailwind CSS", level: 92, cat: "Frontend" },
];

const PROJECTS = [
  {
    title: "Studly — Advanced LMS",
    desc: "A learning management system with instructor dashboards, course comparison, and student progress tracking.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Flobit Agency",
    desc: "Digital agency platform delivering smart web solutions and university IT project management.",
    tags: ["Next.js", "Tailwind", "Cloud"],
    link: "#",
  },
  {
    title: "Smart Campus App",
    desc: "Full-stack university management system featuring real-time notifications and role-based access.",
    tags: ["Node.js", "Socket.io", "React"],
    link: "#",
  },
];

/* ─── Components ────────────────────────────────────────── */

function ThreeHero() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const W = mountRef.current.clientWidth;
    const H = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geo = new THREE.BufferGeometry();
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1.3 + Math.random() * 0.4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.015, transparent: true, opacity: 0.7 });
    const sphere = new THREE.Points(geo, mat);
    scene.add(sphere);

    const light = new THREE.PointLight(0x3b82f6, 2, 10);
    light.position.set(2, 2, 2);
    scene.add(light);

    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      sphere.rotation.x += (mouse.current.y * 0.2 - sphere.rotation.x) * 0.05;
      sphere.rotation.y += (mouse.current.x * 0.2 - sphere.rotation.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />;
}

function SkillItem({ name, level, cat }) {
  return (
    <div style={{ padding: "16px", background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>{name}</span>
        <span style={{ fontSize: "12px", color: "#3b82f6", fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div style={{ height: "4px", background: "#1a1a1a", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ width: `${level}%`, height: "100%", background: "#3b82f6", boxShadow: "0 0 10px #3b82f644" }} />
      </div>
    </div>
  );
}

/* ─── Main Application ───────────────────────────────────── */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "#050505", color: "#ededed", minHeight: "100vh", fontFamily: "Inter, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      {/* Navigation */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        transition: "all 0.3s ease", padding: "0 5%",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px",
      }}>
        <div style={{ fontWeight: 800, fontSize: "20px", color: "#fff", display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "14px", height: "14px", background: "#3b82f6", borderRadius: "3px" }} />
          CHATHUU
        </div>
        
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#888", fontSize: "14px", cursor: "pointer", fontWeight: "500", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = "#888"}>{l}</button>
          ))}
          <button style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", cursor: "pointer", transition: "transform 0.2s" }} onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.target.style.transform = "scale(1)"}>Hire Me</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #1a1a1a" }}>
        <div className="bolt-grid" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />
        <ThreeHero />
        
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#111", border: "1px solid #1a1a1a", padding: "6px 14px", borderRadius: "99px", fontSize: "12px", color: "#3b82f6", marginBottom: "32px", fontWeight: "500" }}>
            <span className="pulse-dot" />
            Software Engineering Undergraduate @ SLIIT
          </div>
          <h1 style={{ fontSize: "clamp(3.5rem, 12vw, 6.5rem)", fontWeight: 800, letterSpacing: "-0.05em", color: "#fff", lineHeight: "0.9", marginBottom: "24px" }}>
            Full-Stack<br />
            <span style={{ color: "#3b82f6" }}>Developer.</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#888", maxWidth: "600px", margin: "0 auto 48px", lineHeight: "1.6" }}>
            I build performant digital experiences with a focus on minimal luxury and technical excellence.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <button onClick={() => scrollTo('projects')} style={{ background: "#fff", color: "#000", border: "none", padding: "14px 32px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>View Projects</button>
            <button style={{ background: "#111", color: "#fff", border: "1px solid #1a1a1a", padding: "14px 32px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>GitHub</button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" style={{ padding: "120px 5%", background: "#050505" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px" }}>
            <div>
              <p style={{ color: "#3b82f6", fontFamily: "monospace", fontSize: "14px", marginBottom: "8px" }}>// WORK_HISTORY</p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Selected Projects</h2>
            </div>
            <div style={{ padding: "8px 16px", background: "#111", border: "1px solid #1a1a1a", borderRadius: "8px", fontSize: "13px", color: "#888" }}>
              Sri Lanka, Homagama
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="project-card" style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "16px", padding: "32px", transition: "all 0.3s ease", position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", top: "24px", right: "24px", color: "#3b82f6" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ color: "#888", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: "11px", fontWeight: "600", padding: "4px 10px", background: "#1a1a1a", borderRadius: "6px", color: "#3b82f6", fontFamily: "monospace" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "100px 5%", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "800", marginBottom: "60px" }}>Technical Stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {SKILLS.map(s => <SkillItem key={s.name} {...s} />)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "40px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ color: "#666", fontSize: "14px" }}>© 2026 Chathura Jayashan. Built with React & Three.js</div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["GitHub", "LinkedIn", "Twitter"].map(s => (
            <a key={s} href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>{s}</a>
          ))}
        </div>
      </footer>

      <style>{`
        .bolt-grid {
          background-image: linear-gradient(#1a1a1a 1.5px, transparent 1.5px), linear-gradient(90deg, #1a1a1a 1.5px, transparent 1.5px);
          background-size: 50px 50px;
        }
        .project-card:hover {
          border-color: #3b82f6 !important;
          background: #0d0d0d !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
      `}</style>
    </div>
  );
}