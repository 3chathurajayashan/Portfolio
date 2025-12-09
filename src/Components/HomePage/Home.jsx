import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Cloud, ChevronRight, Download, Phone, MapPin } from "lucide-react";

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
    {
      title: "AI-Powered Analytics",
      desc: "Machine learning dashboard for real-time data insights",
      tech: ["Python", "TensorFlow", "React"],
      icon: <Brain style={{ width: '24px', height: '24px' }} />
    },
    {
      title: "Cloud Infrastructure",
      desc: "Scalable microservices architecture on AWS",
      tech: ["Docker", "Kubernetes", "AWS"],
      icon: <Cloud style={{ width: '24px', height: '24px' }} />
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN application with payment integration",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <Code2 style={{ width: '24px', height: '24px' }} />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Python", "Data Science"] }
  ];

  const portfolioStyles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 0'
    },
    navLink: (isActive) => ({
      color: isActive ? '#2563eb' : '#475569',
      fontWeight: 500,
      fontSize: '0.875rem',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: '0.5rem'
    }),
    heroSection: {
      paddingTop: '8rem',
      paddingBottom: '5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem'
    },
    projectCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '1rem',
      padding: '2rem',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0'
    },
    skillCard: {
      background: '#ffffff',
      borderRadius: '1rem',
      padding: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    }
  };

  return (
    <div style={portfolioStyles.container}>
      {/* Navigation */}
      <nav style={portfolioStyles.nav}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            CJ
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['hero', 'projects', 'skills', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                style={portfolioStyles.navLink(activeSection === section)}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
                    borderRadius: '2px'
                  }} />
                )}
              </a>
            ))}
            <button style={{
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
              color: 'white',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={portfolioStyles.heroSection}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transform: isVisible ? 'translateX(0)' : 'translateX(-3rem)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#dbeafe',
              color: '#1e40af',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500,
              width: 'fit-content'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3b82f6',
                animation: 'pulse 2s infinite'
              }} />
              Available for new opportunities
            </div>

            <h1 style={{
              fontSize: '3.75rem',
              fontWeight: 'bold',
              color: '#1e293b',
              lineHeight: 1.2
            }}>
              Chathura
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Jayashan
              </span>
            </h1>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              color: '#475569'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem'
              }}>
                <ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />
                <span style={{ fontWeight: 600, color: '#1e293b' }}>
                  Bachelor of Science (Honours) in Information Technology
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem'
              }}>
                <ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />
                Specialized in Software Engineering
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.125rem'
              }}>
                <ChevronRight style={{ width: '18px', height: '18px', color: '#3b82f6' }} />
                Sri Lanka Institute of Information Technology (SLIIT)
              </div>
            </div>

            <p style={{
              fontSize: '1.25rem',
              color: '#64748b',
              lineHeight: 1.6
            }}>
              Software Engineer specializing in <span style={{ fontWeight: 600, color: '#1e293b' }}>MERN Stack</span>, 
              <span style={{ fontWeight: 600, color: '#1e293b' }}> DevOps</span>, and 
              <span style={{ fontWeight: 600, color: '#1e293b' }}> AI/ML</span>. 
              Passionate about building scalable solutions that drive innovation and efficiency.
            </p>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
              <button style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
                color: 'white',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                View Projects
                <ExternalLink style={{ width: '18px', height: '18px' }} />
              </button>
              <button style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#1e293b',
                borderRadius: '9999px',
                border: '2px solid #e2e8f0',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                Download CV
                <Download style={{ width: '18px', height: '18px' }} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1.5rem' }}>
              {[
                { icon: <Github style={{ width: '20px', height: '20px' }} />, label: 'GitHub' },
                { icon: <Linkedin style={{ width: '20px', height: '20px' }} />, label: 'LinkedIn' },
                { icon: <Mail style={{ width: '20px', height: '20px' }} />, label: 'Email' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '5rem 1.5rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Featured Projects
            </h2>
            <p style={{
              color: '#64748b',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.125rem'
            }}>
              A showcase of my technical projects demonstrating expertise in full-stack development, 
              cloud infrastructure, and artificial intelligence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                style={{
                  ...portfolioStyles.projectCard,
                  transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease ${idx * 0.1}s`
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem'
                }}>
                  {project.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '0.75rem'
                }}>
                  {project.title}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: '#f1f5f9',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        color: '#475569',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button style={{
                  color: '#2563eb',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}>
                  View Project Details
                  <ExternalLink style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Technical Expertise
            </h2>
            <p style={{
              color: '#64748b',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.125rem'
            }}>
              Comprehensive skill set across modern web technologies, cloud platforms, 
              and machine learning frameworks.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  ...portfolioStyles.skillCard,
                  transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease ${idx * 0.1}s`
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '1rem'
                }}>
                  {skill.category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skill.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(90deg, #2563eb, #4f46e5)'
                      }} />
                      <span style={{ color: '#475569' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '5rem 1.5rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Get In Touch
            </h2>
            <p style={{
              color: '#64748b',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.125rem'
            }}>
              Interested in collaborating or discussing opportunities? Feel free to reach out.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0'
            }}>
              <Mail style={{ width: '24px', height: '24px', color: '#2563eb', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
                Email
              </h3>
              <p style={{ color: '#64748b' }}>chathura.j@example.com</p>
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0'
            }}>
              <Phone style={{ width: '24px', height: '24px', color: '#2563eb', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
                Phone
              </h3>
              <p style={{ color: '#64748b' }}>+94 77 123 4567</p>
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e2e8f0'
            }}>
              <MapPin style={{ width: '24px', height: '24px', color: '#2563eb', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>
                Location
              </h3>
              <p style={{ color: '#64748b' }}>Colombo, Sri Lanka</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={{
              padding: '1rem 3rem',
              background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
              color: 'white',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 1.5rem',
        background: '#0f172a',
        color: 'white'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Chathura Jayashan
            </div>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              Software Engineer • MERN Stack • DevOps • AI/ML
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              {['GitHub', 'LinkedIn', 'Email'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid #1e293b',
            color: '#64748b',
            fontSize: '0.875rem'
          }}>
            © {new Date().getFullYear()} Chathura Jayashan. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          scroll-behavior: smooth;
        }
        
        button, a {
          transition: all 0.3s ease;
        }
        
        button:hover, a:hover {
          transform: translateY(-2px);
        }
        
        button:active, a:active {
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}