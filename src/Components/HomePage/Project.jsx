import React, { useEffect, useRef, useState } from "react";
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

const projects = [
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
    ],
    liveLink: "https://github.com/3chathurajayashan/Integrate.git",
    images: [s1, s2, s3],
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
    ],
    liveLink: "https://github.com/3chathurajayashan/TravelFrontEnd.git",
    images: [ta1, ta2],
  },
];

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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
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
              className={`relative rounded-lg overflow-hidden w-full aspect-[4/3] border-2 transition-all duration-300 ${
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

function ProjectCard({ project, idx }) {
  const cardRef = useRef(null);
  const isEven = idx % 2 !== 0;
  const hasLiveLink = project.liveLink && project.liveLink !== "#";

  useEffect(() => {
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
        transition: `opacity 0.7s ease ${idx * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.12}s`,
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
        <div className="flex items-center gap-2.5 mb-5">
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30">
            {project.year}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[10px] font-bold tracking-tight uppercase text-yellow-500">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <Description text={project.description} />

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-9">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full bg-yellow-500/[0.08] text-yellow-500 border border-yellow-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        {hasLiveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white hover:text-yellow-500 transition-colors duration-300 group/cta"
          >
            View live demo
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
            Built with
            <br />
            <span className="text-yellow-500">purpose.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-md leading-relaxed font-light">
            Digital experiences crafted with precision — where performance meets
            modern aesthetics.
          </p>
        </section>

        {/* ── Project Cards ── */}
        <div className="mt-20" id="projects">
          {projects.map((project, idx) => (
            <ProjectCard key={project.index} project={project} idx={idx} />
          ))}
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
