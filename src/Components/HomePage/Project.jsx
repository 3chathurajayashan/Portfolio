import React, { useEffect, useMemo, useRef, useState } from "react";
import s1 from "../../assets/ss1.png";
import s2 from "../../assets/ss2.png";
import s3 from "../../assets/ss3.png";
import ta1 from "../../assets/ta1.png";
import ta2 from "../../assets/ta2.png";

import hc1 from "../../assets/hc1.png";
import hc2 from "../../assets/hc2.png";
import hc3 from "../../assets/hc3.png";
import hc4 from "../../assets/hc4.png";
import hc5 from "../../assets/hc5.png";
import hc6 from "../../assets/hc6.png";
import hc7 from "../../assets/hc7.png";
import hc8 from "../../assets/hc8.png";
import hc9 from "../../assets/hc9.png";
import hc10 from "../../assets/hc10.png";

import st1 from "../../assets/st1.png";
import st2 from "../../assets/st2.png";
import st3 from "../../assets/st3.png";
import st4 from "../../assets/st4.png";
import st5 from "../../assets/st5.png";
import st6 from "../../assets/st6.png";
import st7 from "../../assets/st7.png";
import st8 from "../../assets/st8.png";
import st9 from "../../assets/st9.png";
import st10 from "../../assets/st10.png";

import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";

import md1 from "../../assets/md1.png";
import md2 from "../../assets/md2.png";
import md3 from "../../assets/md3.png";
import md4 from "../../assets/md4.png";
import md5 from "../../assets/md5.png";
import AppleActivityGraph from "../LandingComponent/Contribution";

/* ──────────────────────────────────────────────────────────
   RAW PROJECT DATA — unchanged source of truth.
   All cleanup (typos, casing, tech-name normalization) happens
   in a derivation layer below so the original data stays intact
   and new projects added here automatically inherit the same
   polish without manual editing.
   ────────────────────────────────────────────────────────── */
const rawProjects = [
  {
    index: "03",
    year: "2026",
    category: "Fully functional MERN application",
    title: "HayCarb PLC proposed Lab System(in used)",
    description:
      "Laboratory Management System (LMS) is a comprehensive full-stack web application designed to streamline laboratory operations, sample management, and customer report handling. The platform enables laboratory staff to efficiently register and manage samples, generate unique QR codes for sample tracking, and process laboratory workflows from sample collection to final report delivery.The system features secure role-based authentication and authorization using JWT, allowing administrators, laboratory technicians, and staff members to access functionality based on their assigned roles. Users can generate and download professional PDF reports, manage customer records, monitor laboratory activities through interactive dashboards, and track sample statuses in real time.To enhance document management, customer reports and related files are securely stored and managed using Cloudinary. QR code scanning capabilities enable fast sample identification and retrieval, reducing manual errors and improving operational efficiency. The platform also provides analytical dashboards that offer insights into laboratory performance, sample processing, customer activity, and report generation metrics.",
    tech: [
      "React JS",
      "MONGO DB",
      "Figma",
      "Cloudinary",
      "QR code scanning & generation",
      "PDF downloading",
      "WorkFlow management",
      "JWT authentication",
      "Email js",
      "Real Time updating",
      "Tailwind css",
      "Framer motion",
    ],
    liveLink: "https://hay-card-front-ends-nine.vercel.app/",
    images: [hc1, hc2, hc3, hc4, hc5, hc6, hc7, hc8, hc9, hc10],
  },
  {
    index: "04",
    year: "2026",
    category: "Student Learning Management System",
    title: " Studly  LMS(in used)",
    description:
      " Studly is a modern Learning Management System (LMS) built with the MERN stack, designed to provide a complete online learning experience for students, instructors, and administrators. The platform enables instructors to create and manage courses, upload educational content, organize lessons, and track student progress through an intuitive and responsive interface.Students can browse available courses, enroll in learning programs, access video lectures and study materials, and monitor their learning journey through personalized dashboards. The system incorporates secure JWT-based authentication and authorization to protect user data and ensure role-based access control across different user types.To support scalable content management, media assets such as course thumbnails, documents, and learning resources are stored and managed through Cloudinary, while Supabase is utilized for additional backend services, storage, and real-time capabilities where required. The platform offers a seamless learning environment with efficient course management, user-friendly navigation, and optimized performance across desktop and mobile devices.",
    tech: [
      "React JS",
      "MONGO DB",
      "Figma",
      "Vercel",
      "Cloudinary",
      "Real Time voice recognition Engine",
      "Supabase DB",
      "WorkFlow management",
      "JWT authentication",
      "Email js",
      "Real Time updating",
      "Tailwind css",
    ],
    liveLink: "https://studly-seven.vercel.app/",
    images: [st1, st2, st3, st4, st5, st6, st7, st8, st9, st10],
  },
  {
    index: "01",
    year: "2026",
    category: "E-COMMERCE MERN WEB APPLICATION",
    title: "Nancee.lk",
    description:
      "Developed a full-featured E-Commerce Platform using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), providing a seamless online shopping experience for customers and efficient product management for administrators. The platform includes secure user authentication and authorization using JWT (JSON Web Tokens), allowing users to register, log in, manage profiles, and access protected resources securely. State management is handled with Zustand, ensuring a lightweight and scalable frontend architecture. Product images are uploaded and managed through Cloudinary, enabling optimized image storage, transformation, and delivery. Customers can browse products, search and filter items, add products to the shopping cart, manage orders, and complete purchases through an intuitive user interface.",
    tech: [
      "React js",
      "Express js",
      "Mongo DB",
      "Cloudinary",
      "Node js",
      "JWT security",
      "Zustand",
      "Context API",
      "Tailwind css",
    ],
    liveLink: "https://github.com/3chathurajayashan/Integrate.git",
    images: [s1, s2, s3],
  },
  {
    index: "07",
    year: "2026",
    category: "SpringBoot java",
    title: "Medicare Lanka Java Springboot microservices platform",
    description:
      "A online medicare platform built using java springboot. docket channelings, patient management, AI integrations, Online meeting facility with docker and patients",
    tech: [
      "JAVA",
      "MICROSERVICES",
      "OOP",
      "REACT JS",
      "DOCKER",
      "K8S",
      "SWAGEER",
      "RABBITMQ",
    ],
    liveLink: "https://github.com/3chathurajayashan/medicare-lanka.git",
    images: [md1, md2, md3, md4, md5],
  },
  {
    index: "02",
    year: "2026",
    category: "Tracel Advisory , Mern Stack",
    title: "Safe Travel",
    description:
      "Travel Advisory Platform is a full-stack MERN application that provides real-time travel information and safety advisories for countries around the world. Users can search for any country and instantly access comprehensive travel insights, including safety levels, entry requirements, health advisories, local regulations, weather conditions, emergency contacts, and important travel recommendations. The platform integrates multiple external APIs to deliver accurate and up-to-date information through an intuitive and responsive dashboard.Built with MongoDB, Express.js, React.js, and Node.js, the application features dynamic country search, state management, secure API integration, and a modern user interface designed to help travelers make informed decisions before and during their journeys. The platform emphasizes usability, real-time data accessibility, and a seamless user experience across desktop and mobile devices.",
    tech: [
      "React Js",
      "Node.js",
      "Open Weather API",
      "Express js",
      "Mongo DB",
      "JWT",
      "Tailwind css",
    ],
    liveLink: "https://github.com/3chathurajayashan/TravelFrontEnd.git",
    images: [ta1, ta2],
  },
  {
    index: "05",
    year: "2026",
    category: "NEXT JS",
    title: " ITask Sheduling Next js application",
    description:
      "A simple task sheduling application built using next js + tailwind css",
    tech: ["Next js", "Type Script", "tailwind csss"],
    liveLink: "#",
    images: [t1, t2, t3],
  },
];

/* ──────────────────────────────────────────────────────────
   DATA DERIVATION LAYER
   ────────────────────────────────────────────────────────── */

// Canonical tech names — fixes inconsistent casing/typos so the
// same technology never appears as two different filter chips
// (e.g. "React JS" / "React Js" / "REACT JS" → "React.js").
const TECH_NORMALIZE = {
  "react js": "React.js",
  "react js application": "React.js",
  "mongo db": "MongoDB",
  mongodb: "MongoDB",
  "express js": "Express.js",
  "node js": "Node.js",
  "node.js": "Node.js",
  "tailwind css": "Tailwind CSS",
  "tailwind csss": "Tailwind CSS",
  "jwt authentication": "JWT Authentication",
  "jwt security": "JWT Authentication",
  jwt: "JWT Authentication",
  "qr code scanning & generation": "QR Code Generation & Scanning",
  "pdf downloading": "PDF Generation",
  "workflow management": "Workflow Management",
  "email js": "EmailJS",
  "real time updating": "Real-Time Updates",
  "framer motion": "Framer Motion",
  "real time voice recognition engine": "Real-Time Voice Recognition",
  "supabase db": "Supabase",
  "next js": "Next.js",
  "type script": "TypeScript",
  java: "Java",
  microservices: "Microservices",
  oop: "OOP",
  docker: "Docker",
  k8s: "Kubernetes",
  swageer: "Swagger",
  rabbitmq: "RabbitMQ",
  "open weather api": "Open Weather API",
  "context api": "Context API",
  zustand: "Zustand",
  vercel: "Vercel",
  figma: "Figma",
  cloudinary: "Cloudinary",
};

// Manual content fixes keyed by project index — only touches the
// handful of fields that had typos/stray whitespace in the source.
const CONTENT_OVERRIDES = {
  "01": { category: "E-Commerce · MERN Stack" },
  "02": { category: "Travel Advisory · MERN Stack" },
  "03": { title: "HayCarb PLC — Laboratory Management System" },
  "04": { title: "Studly LMS" },
  "05": {
    title: "iTask — Scheduling App",
    category: "Next.js Application",
    description:
      "A lightweight task scheduling application built with Next.js and Tailwind CSS, designed for clean, fast task and deadline management.",
  },
  "07": {
    category: "Java · Spring Boot Microservices",
    description:
      "An online medicare platform built with Java Spring Boot microservices, featuring doctor channeling, patient management, AI-powered integrations, and secure online consultations — containerized with Docker for scalable deployment.",
  },
};

function normalizeTechList(list) {
  const seen = new Set();
  const out = [];
  list.forEach((raw) => {
    const clean = TECH_NORMALIZE[raw.trim().toLowerCase()] || raw.trim();
    const key = clean.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(clean);
    }
  });
  return out;
}

function getProjectStatus(liveLink) {
  if (!liveLink || liveLink === "#") return "In Development";
  if (liveLink.includes("github.com")) return "Source Code";
  return "Live";
}

function getCtaLabel(status) {
  if (status === "Live") return "View live demo";
  if (status === "Source Code") return "View source code";
  return "Live demo coming soon";
}

const STATUS_STYLES = {
  Live: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "Source Code": "text-sky-300 border-sky-400/30 bg-sky-400/10",
  "In Development": "text-white/40 border-white/15 bg-white/5",
};

// Final, display-ready project list — normalized tech, fixed copy,
// derived status, sorted into a clean reading order (01 → 07).
const projects = rawProjects
  .map((p) => {
    const overrides = CONTENT_OVERRIDES[p.index] || {};
    return {
      ...p,
      ...overrides,
      title: (overrides.title || p.title).trim(),
      tech: normalizeTechList(p.tech),
      status: getProjectStatus(p.liveLink),
    };
  })
  .sort((a, b) => Number(a.index) - Number(b.index));

function getPopularTags(list, limit = 8) {
  const freq = {};
  list.forEach((p) => p.tech.forEach((t) => (freq[t] = (freq[t] || 0) + 1)));
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag]) => tag);
}
const POPULAR_TAGS = getPopularTags(projects, 8);

function projectMatches(project, query) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    project.title.toLowerCase().includes(q) ||
    project.category.toLowerCase().includes(q) ||
    project.tech.some((t) => t.toLowerCase().includes(q))
  );
}

/* ── Image gallery: main image + thumbnail strip + arrow nav ── */
function ImageGallery({ images, title }) {
  const [active, setActive] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = (e) => {
    e.stopPropagation();
    setActive((p) => (p - 1 + images.length) % images.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setActive((p) => (p + 1) % images.length);
  };

  return (
    <div className="w-full">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/[0.03]">
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1}`}
          className="w-full h-full object-cover brightness-[0.85] saturate-90 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
            >
              ›
            </button>

            <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/70 border border-white/10">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex gap-2 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActive(i);
              }}
              aria-label={`Show screenshot ${i + 1}`}
              className={`relative rounded-lg overflow-hidden w-full aspect-[4/3] border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 ${
                active === i
                  ? "border-yellow-500 opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Description with read more / show less toggle ── */
function Description({ text }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 170;
  const isLong = text.length > LIMIT;
  const shown =
    expanded || !isLong ? text : text.slice(0, LIMIT).trimEnd() + "…";

  return (
    <div className="mb-8 max-w-sm">
      <p className="text-[15px] text-white/50 leading-relaxed">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-[12px] font-semibold tracking-wide text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project, idx, onTagClick, activeFilter }) {
  const cardRef = useRef(null);
  const isEven = idx % 2 !== 0;
  const hasLiveLink = project.liveLink && project.liveLink !== "#";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      if (cardRef.current) {
        cardRef.current.style.opacity = "1";
        cardRef.current.style.transform = "none";
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.7s ease ${idx * 0.08}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.08}s`,
      }}
      className="group relative bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start overflow-hidden mb-4 hover:border-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,179,8,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Ghost index number */}
      <span className="absolute -top-4 right-8 text-[140px] md:text-[180px] font-black tracking-tighter leading-none text-yellow-500/[0.04] group-hover:text-yellow-500/[0.07] transition-colors duration-500 select-none pointer-events-none">
        {project.index}
      </span>

      {/* Content — swap order on even cards */}
      <div className={`relative z-10 ${isEven ? "md:order-2" : ""}`}>
        {/* Meta */}
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30">
            {project.year}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[10px] font-bold tracking-tight uppercase text-yellow-500">
            {project.category}
          </span>
          <span
            className={`inline-flex items-center text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${STATUS_STYLES[project.status]}`}
          >
            {project.status === "Live" && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
            )}
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <Description text={project.description} />

        {/* Tech tags — clickable, filter the project list */}
        <div className="flex flex-wrap gap-2 mb-9">
          {project.tech.map((t) => {
            const isActive = activeFilter.toLowerCase() === t.toLowerCase();
            return (
              <button
                key={t}
                onClick={() => onTagClick(t)}
                title={`Filter projects using ${t}`}
                className={`text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 ${
                  isActive
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-yellow-500/[0.08] text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        {hasLiveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white hover:text-yellow-500 transition-colors duration-300 group/cta"
          >
            {getCtaLabel(project.status)}
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-sm group-hover/cta:bg-yellow-500 group-hover/cta:border-yellow-500 group-hover/cta:text-black transition-all duration-300">
              ↗
            </span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white/30">
            Live demo coming soon
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-sm">
              ↗
            </span>
          </span>
        )}
      </div>

      {/* Image gallery */}
      <div className={`relative z-10 ${isEven ? "md:order-1" : ""}`}>
        <ImageGallery images={project.images} title={project.title} />
      </div>
    </div>
  );
}

function Project() {
  const [filter, setFilter] = useState("");
  const filterBarRef = useRef(null);

  const handleTagClick = (tag) => {
    setFilter((prev) => (prev.toLowerCase() === tag.toLowerCase() ? "" : tag));
    filterBarRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredProjects = useMemo(
    () => projects.filter((p) => projectMatches(p, filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      {/* ── Floating Header (preserved) ── */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <div className="flex items-center bg-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-full py-2 px-3 gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
          <a
            href="/"
            className="flex items-center pl-3 font-bold text-white text-[17px] tracking-tighter"
          >
            CJ<span className="text-yellow-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", path: "/home" },
              { label: "Projects", path: "#projects" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="text-[13px] text-zinc-400 hover:text-yellow-500 transition-colors duration-300 font-medium tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="bg-white text-black text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-500 transition-all duration-300">
            Hire Me
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-32">
        {/* ── Hero ── */}
        <section className="pt-40 pb-20 border-b border-white/[0.07]">
          <div className="flex items-center gap-3 mb-7"></div>
          <h1 className="text-[clamp(52px,8vw,96px)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-8 text-white">
            Real World Applications
            <br />
            <span className="text-yellow-500">Check out here ;)</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-md leading-relaxed font-light">
            Current Projects are built with SpringBoot , Mern Stack ,Next js ,
            React js ,Docker , Kubernets, ASP.NET CORE technologies.
          </p>
        </section>
        <AppleActivityGraph />

        {/* ── Filter bar ── */}
        <div ref={filterBarRef} className="pt-20 pb-2" id="projects">
          <div className="relative max-w-md mb-5">
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by tech — React, MongoDB, Docker…"
              aria-label="Search projects by technology or category"
              className="w-full bg-white/[0.04] border border-white/10 rounded-full py-3.5 pl-5 pr-11 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 focus:border-yellow-500/50 transition-colors duration-300"
            />
            {filter && (
              <button
                onClick={() => setFilter("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-yellow-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 rounded-full"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            <button
              onClick={() => setFilter("")}
              className={`text-[11px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 ${
                !filter
                  ? "bg-white text-black border-white"
                  : "bg-white/[0.04] text-white/50 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              All
            </button>
            {POPULAR_TAGS.map((tag) => {
              const isActive = filter.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`text-[11px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 ${
                    isActive
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-white/[0.04] text-white/50 border-white/10 hover:border-yellow-500/40 hover:text-yellow-500"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <p className="text-[12px] text-white/30 tracking-wide">
            Showing{" "}
            <span className="text-yellow-500 font-semibold">
              {filteredProjects.length}
            </span>{" "}
            of {projects.length} projects
            {filter && (
              <>
                {" "}
                matching “<span className="text-white/60">{filter}</span>”
              </>
            )}
          </p>
        </div>

        {/* ── Project Cards ── */}
        <div className="mt-12">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center border border-white/[0.07] rounded-3xl">
              <p className="text-white/40 text-[15px] mb-4">
                No projects match “{filter}” yet.
              </p>
              <button
                onClick={() => setFilter("")}
                className="text-[13px] font-semibold text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
              >
                Clear filter and view all projects
              </button>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.index}
                project={project}
                idx={idx}
                onTagClick={handleTagClick}
                activeFilter={filter}
              />
            ))
          )}
        </div>

        {/* ── Bottom Strip ── */}
        <div className="mt-20 pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/30 tracking-wide">
            <span className="text-yellow-500">{projects.length}</span> projects
            · always building more
          </p>
          <button className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white bg-white/5 border border-white/[0.07] px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
            Get in touch ↗
          </button>
        </div>
      </main>
    </div>
  );
}

export default Project;
