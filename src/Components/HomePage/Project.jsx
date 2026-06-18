import React from "react";

function Project() {
  const projects = [
    {
      title: "EcoStream Platform",
      description:
        "A sustainable energy monitoring dashboard built with real-time data visualization and deep analytics.",
      tech: ["React", "D3.js", "Firebase"],
      liveLink: "#",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "FinTrack Mobile",
      description:
        "A seamless personal finance tracker with automated transaction categorization and AI insights.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      liveLink: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#30D158] selection:text-black">
      {/* Floating Header */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <div className="flex items-center bg-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-full py-2 px-3 gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center pl-3 font-bold text-white text-[17px] tracking-tighter"
          >
            CJ<span className="text-[#30D158]">.</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "About Me", path: "/about" },
              { label: "Projects", path: "#projects" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-[13px] text-zinc-400 hover:text-[#30D158] transition-colors duration-300 font-medium tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <button className="bg-white text-black text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#30D158] transition-all duration-300">
            Hire Me
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Selected <span className="text-[#30D158]">Works.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            Crafting digital experiences with precision, performance, and modern
            aesthetics.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#161617] rounded-3xl p-8 border border-white/5 hover:border-[#30D158]/30 transition-all duration-500"
            >
              <div className="overflow-hidden rounded-2xl mb-8 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-medium px-3 py-1 bg-white/5 rounded-full text-[#30D158]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.liveLink}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#30D158] hover:opacity-80 transition-opacity"
              >
                Learn more <span>&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Project;
