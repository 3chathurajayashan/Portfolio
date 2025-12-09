import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronRight, Brain, Cloud, Code2, Phone, MapPin } from "lucide-react";
import profilePic from '../../assets/profile.jpg'; // <-- Add your photo here in src folder

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { title: "AI-Powered Analytics", desc: "Machine learning dashboard for real-time data insights", tech: ["Python", "TensorFlow", "React"], icon: <Brain style={{ width: '24px', height: '24px' }} /> },
    { title: "Cloud Infrastructure", desc: "Scalable microservices architecture on AWS", tech: ["Docker", "Kubernetes", "AWS"], icon: <Cloud style={{ width: '24px', height: '24px' }} /> },
    { title: "E-Commerce Platform", desc: "Full-stack MERN application with payment integration", tech: ["MongoDB", "Express", "React", "Node.js"], icon: <Code2 style={{ width: '24px', height: '24px' }} /> }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Python", "Data Science"] }
  ];

  const portfolioStyles = {
    container: { width: '100%', minHeight: '100vh', fontFamily: "'Inter', sans-serif", background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' },
    nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0', padding: '1rem 0' },
    navLink: (isActive) => ({ color: isActive ? '#2563eb' : '#475569', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', position: 'relative', paddingBottom: '0.5rem' }),
    heroSection: { paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' },
    projectCard: { background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', borderRadius: '1rem', padding: '2rem', transition: 'all 0.3s ease', border: '1px solid #e2e8f0' },
    skillCard: { background: '#ffffff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' },
    profileImage: { width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #2563eb', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }
  };

  return (
    <div style={portfolioStyles.container}>
      {/* Navigation */}
      <nav style={portfolioStyles.nav}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(90deg, #2563eb, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CJ</div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['hero', 'projects', 'skills', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} style={portfolioStyles.navLink(activeSection === section)} onClick={() => setActiveSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #2563eb, #4f46e5)', borderRadius: '2px' }} />}
              </a>
            ))}
            <button style={{ padding: '0.5rem 1.5rem', background: 'linear-gradient(90deg, #2563eb, #4f46e5)', color: 'white', borderRadius: '9999px', border: 'none', fontWeight: 500, cursor: 'pointer' }}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with photo */}
      <section id="hero" style={portfolioStyles.heroSection}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', transform: isVisible ? 'translateX(0)' : 'translateX(-3rem)', opacity: isVisible ? 1 : 0, transition: 'all 1s ease' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500, width: 'fit-content' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', animation: 'pulse 2s infinite' }} />
              Available for new opportunities
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', lineHeight: 1.2 }}>
              Chathura <br />
              <span style={{ background: 'linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Jayashan</span>
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem' }}><ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />BSc (Hons) IT</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem' }}><ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />Specialized in Software Engineering</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.125rem' }}><ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />SLIIT, Sri Lanka</div>
            </div>

            <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6 }}>
              Software Engineer specializing in <span style={{ fontWeight: 600, color: '#1e293b' }}>MERN Stack</span>, <span style={{ fontWeight: 600, color: '#1e293b' }}>DevOps</span>, and <span style={{ fontWeight: 600, color: '#1e293b' }}>AI/ML</span>. Passionate about building scalable and innovative solutions.
            </p>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
              <button style={{ padding: '1rem 2rem', background: 'linear-gradient(90deg, #2563eb, #4f46e5)', color: 'white', borderRadius: '9999px', border: 'none', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Projects <ExternalLink style={{ width: '18px', height: '18px' }} />
              </button>
              <button style={{ padding: '1rem 2rem', background: 'white', color: '#1e293b', borderRadius: '9999px', border: '2px solid #e2e8f0', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Download CV <Download style={{ width: '18px', height: '18px' }} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem' }}>
              {[{ icon: <Github style={{ width: '20px', height: '20px' }} />, label: 'GitHub' },
                { icon: <Linkedin style={{ width: '20px', height: '20px' }} />, label: 'LinkedIn' },
                { icon: <Mail style={{ width: '20px', height: '20px' }} />, label: 'Email' }].map((social, idx) => (
                <a key={idx} href="#" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none' }} title={social.label}>{social.icon}</a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={profilePic} alt="Chathura Jayashan" style={portfolioStyles.profileImage} />
          </div>
        </div>
      </section>

      {/* Projects, Skills, Contact sections remain the same */}

      {/* Add the rest of your existing code for Projects, Skills, Contact, and Footer here */}
      {/* Keep all your project cards, skill cards, and contact info the same */}
    </div>
  );
}
