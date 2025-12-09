import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Cloud } from "lucide-react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "AI-Powered Analytics",
      desc: "Machine learning dashboard for real-time data insights",
      tech: ["Python", "TensorFlow", "React"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cloud Infrastructure",
      desc: "Scalable microservices architecture on AWS",
      tech: ["Docker", "Kubernetes", "AWS"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN application with payment integration",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Python", "Data Science"] }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CJ
          </div>
          <div className="flex gap-8 items-center">
            <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Skills</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Available for new opportunities
            </div>
            <h1 className="text-6xl font-bold text-slate-900 leading-tight">
              Chathura
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Jayashan
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Software Engineer specializing in <span className="font-semibold text-slate-800">MERN Stack</span>, 
              <span className="font-semibold text-slate-800"> DevOps</span>, and 
              <span className="font-semibold text-slate-800"> AI/ML</span>
            </p>
            <p className="text-lg text-slate-500">
              Building scalable web applications, cloud infrastructure, and intelligent solutions 
              that solve real-world problems.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-800 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all border-2 border-slate-200">
                Download CV
              </button>
            </div>
            <div className="flex gap-4 pt-6">
              <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=1000&fit=crop" 
                alt="Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A selection of recent work showcasing expertise across full-stack development, cloud architecture, and AI integration
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Technical Expertise</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive skill set across modern web technologies, cloud platforms, and machine learning frameworks
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="text-slate-400 mb-8">Open to exciting opportunities and collaborations</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
            Get In Touch
          </button>
          <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            © 2024 Chathura Jayashan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}