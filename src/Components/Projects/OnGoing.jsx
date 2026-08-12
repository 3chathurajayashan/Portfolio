import React, { useState, useEffect } from "react";
// Import your header component here (adjust path if needed)
import Header from "../HeaderComponent/Header";

// Pulls "owner/repo" out of any github.com URL, with or without .git / trailing slash
function parseGithubRepo(githubUrl) {
  if (!githubUrl) return null;
  const match = githubUrl.match(
    /github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/i,
  );
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
}

function formatRelativeDate(dateString) {
  if (!dateString) return null;
  const diffMs = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const BASE_PROJECTS = [
  {
    title: "Portfolio",
    subtitle: "Apple.com Styled Professional Portfolio",
    category: "Frontend • Design Systems",
    completion: 95,
    description:
      "A high-end, minimalist portfolio website engineered with React and Tailwind CSS, capturing the precise visual luxury and typography of Apple's ecosystem.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/3chathurajayashan/Portfolio.git",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
  },
  {
    title: "MediLink LK",
    subtitle: "Smart Healthcare & Telemedicine Platform",
    category: "Distributed Systems • Microservices",
    completion: 75,
    description:
      "A robust microservices-based healthcare platform built for modern telemedicine needs. Features secure consultation channels, real-time doctor availability, and automated diagnostic workflows.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/yourusername/medilink-lk",
    techStack: ["React", "Node.js", "Docker", "Kubernetes", "Spring Boot"],
  },
  {
    title: "Studly LMS",
    subtitle: "Next-Generation Learning Management System",
    category: "Full-Stack EdTech",
    completion: 90,
    description:
      "An intuitive, high-performance learning management system designed for seamless course administration, interactive student reviews, and automated institutional notice boards.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/yourusername/studly-lms",
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Central Yard",
    subtitle: "Central Yard — Frontend Application",
    category: "Frontend • Web Application",
    completion: 60,
    description:
      "The customer-facing frontend for Central Yard, built to be paired with its backend services. Live stats and details below are pulled directly from the repository.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/3chathurajayashan/Central_Yard-FrontEnd.git",
    techStack: ["React"],
  },
];

// Build initial state: derive repoApi from each github URL, seed empty stats
function buildInitialProjects() {
  return BASE_PROJECTS.map((project) => {
    const parsed = parseGithubRepo(project.github);
    const repoApi = parsed
      ? `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`
      : null;
    return {
      ...project,
      repoApi,
      stats: {
        stars: 0,
        forks: 0,
        issues: 0,
        language: null,
        updatedAt: null,
        liveDescription: null,
        loading: !!repoApi,
        error: null,
      },
    };
  });
}

function OnGoing() {
  const [projects, setProjects] = useState(buildInitialProjects);

  useEffect(() => {
    projects.forEach((project, index) => {
      if (!project.repoApi) return;

      fetch(project.repoApi)
        .then(async (res) => {
          if (!res.ok) {
            const isRateLimited = res.status === 403;
            throw new Error(
              isRateLimited
                ? "GitHub API rate limit reached"
                : `GitHub API error (${res.status})`,
            );
          }
          return res.json();
        })
        .then((data) => {
          setProjects((prev) => {
            const updated = [...prev];
            updated[index] = {
              ...updated[index],
              stats: {
                stars: data.stargazers_count ?? 0,
                forks: data.forks_count ?? 0,
                issues: data.open_issues_count ?? 0,
                language: data.language || null,
                updatedAt: data.pushed_at || data.updated_at || null,
                liveDescription: data.description || null,
                loading: false,
                error: null,
              },
            };
            return updated;
          });
        })
        .catch((err) => {
          setProjects((prev) => {
            const updated = [...prev];
            updated[index] = {
              ...updated[index],
              stats: {
                ...updated[index].stats,
                loading: false,
                error: err.message,
              },
            };
            return updated;
          });
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#acbed8] text-[#f5f5f7] font-sans antialiased selection:bg-[#2997ff] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#003399] leading-none mb-6">
          Latest Updates to be released. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] via-[#f5f5f7] to-[#ffcc00]">
            In progress!
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto font-normal">
          A transparent look at the systems, platforms, and applications
          currently taking shape in my development ecosystem.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1d1d1f]/60 border border-[#333336] rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-[#86868b]/50 hover:shadow-2xl hover:shadow-black/80 flex flex-col lg:flex-row"
            >
              {/* Project Image Container */}
              <div className="lg:w-1/2 relative overflow-hidden min-h-[320px] lg:min-h-[450px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] lg:bg-gradient-to-r lg:from-transparent lg:to-[#1d1d1f]/80" />

                {/* Completion Badge */}
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34c759] animate-pulse" />
                  <span className="text-xs font-medium tracking-wide text-white uppercase">
                    {project.completion}% Completed
                  </span>
                </div>

                {/* Last commit badge, once loaded */}
                {project.stats.updatedAt && (
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs text-[#86868b]">
                    Updated {formatRelativeDate(project.stats.updatedAt)}
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-y-2">
                    <span className="text-xs font-semibold tracking-wider text-[#2997ff] uppercase">
                      {project.category}
                    </span>

                    {/* Live GitHub Stats Tag */}
                    {project.repoApi && (
                      <div className="flex items-center space-x-3 text-xs text-[#86868b] bg-[#2c2c2e]/80 px-3 py-1 rounded-full border border-white/5">
                        {project.stats.loading ? (
                          <span className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full border-2 border-[#86868b] border-t-transparent animate-spin" />
                            <span>Loading stats…</span>
                          </span>
                        ) : project.stats.error ? (
                          <span className="text-[#ff6b6b]">
                            {project.stats.error}
                          </span>
                        ) : (
                          <>
                            <span className="flex items-center space-x-1">
                              <span>⭐</span>
                              <span>{project.stats.stars}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <span>🔀</span>
                              <span>{project.stats.forks}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <span>🐛</span>
                              <span>{project.stats.issues}</span>
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-2 mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-lg text-[#86868b] font-medium mb-6">
                    {project.subtitle}
                  </h4>
                  <p className="text-[#86868b] text-base sm:text-lg leading-relaxed mb-8">
                    {project.stats.liveDescription || project.description}
                  </p>

                  {/* Tech Stack Badges — merges hand-picked stack with GitHub's detected primary language */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stats.language &&
                      !project.techStack.includes(project.stats.language) && (
                        <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/30">
                          {project.stats.language}
                        </span>
                      )}
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#2c2c2e] text-[#f5f5f7] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions / GitHub Link */}
                <div className="pt-6 border-t border-[#333336] flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white font-medium hover:text-[#2997ff] transition-colors group/link"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>View Repository</span>
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* Progress bar visual indicator */}
                  <div className="w-28 bg-[#3a3a3c] h-1.5 rounded-full overflow-hidden hidden sm:block">
                    <div
                      className="bg-gradient-to-r from-[#2997ff] to-[#34c759] h-full rounded-full"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OnGoing;
