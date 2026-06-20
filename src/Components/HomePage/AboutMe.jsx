import React, { useEffect, useRef } from "react";
// Place your CV file at src/assets/se.pdf (rename the extension below
// if your file isn't a PDF, e.g. "../../assets/se.docx").
import se from "../../assets/se.pdf";

/* ──────────────────────────────────────────────────────────
   CONTENT
   ────────────────────────────────────────────────────────── */
const stats = [
  { label: "Current Year", value: "3rd Year" },
  { label: "GPA", value: "2.9+" },
  { label: "Specialization", value: "Software Engineering" },
];

const education = [
  {
    id: "01",
    type: "Secondary Education · O/Level",
    title: "Panagoda Sri Parakrama Vidyalaya",
    status: "Completed",
  },
  {
    id: "02",
    type: "Secondary Education · A/Level",
    title: "Athurugiriya Mahamathya Vidyalaya",
    status: "Completed",
  },
  {
    id: "03",
    type: "Diploma",
    title: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus",
    status: "Completed",
  },
  {
    id: "04",
    type: "Undergraduate Degree",
    title: "BSc (Hons) in Information Technology — Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "3rd Year Undergraduate",
    status: "In Progress",
    meta: "GPA 2.9+",
  },
];

const certifications = [
  {
    title: "E-Certificate in Spoken & Written English",
    institution: "Guideway Institute, Panagoda",
  },
];

const involvement = [
  {
    title: "SLIIT Leo Club",
    role: "Member",
    description:
      "Part of the SLIIT chapter of Leo Club International, contributing to community service and leadership-driven initiatives.",
  },
  {
    title: "SLIIT Student Community",
    role: "Member",
    description:
      "Active participant in student-led activities and community programs within the SLIIT student body.",
  },
];

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about", active: true },
  { label: "Contact", path: "/contact" },
];

/* ──────────────────────────────────────────────────────────
   REVEAL-ON-SCROLL WRAPPER (mirrors the project cards' motion,
   respects prefers-reduced-motion)
   ────────────────────────────────────────────────────────── */
function Reveal({ children, idx = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.style.opacity = "1";
        ref.current.style.transform = "none";
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease ${idx * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${idx * 0.08}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   EDUCATION TIMELINE ITEM
   ────────────────────────────────────────────────────────── */
function TimelineItem({ item, idx }) {
  const isCurrent = item.status === "In Progress";

  return (
    <Reveal idx={idx} className="relative sm:pl-[60px]">
      <span
        className={`hidden sm:flex absolute left-0 top-1 w-[55px] h-[55px] rounded-full border items-center justify-center text-[12px] font-bold transition-colors duration-500 ${
          isCurrent
            ? "bg-yellow-500 text-black border-yellow-500"
            : "bg-[#0d0d0d] text-white/40 border-white/10"
        }`}
      >
        {item.id}
      </span>

      <div
        className={`bg-[#0d0d0d] border rounded-2xl p-7 transition-all duration-500 hover:-translate-y-0.5 ${
          isCurrent
            ? "border-yellow-500/30 hover:border-yellow-500/50"
            : "border-white/[0.07] hover:border-white/20"
        }`}
      >
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30">
            {item.type}
          </span>
          {item.period && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-semibold tracking-wide uppercase text-white/30">
                {item.period}
              </span>
            </>
          )}
          <span
            className={`inline-flex items-center text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${
              isCurrent
                ? "text-white border-red-500/30 bg-emerald-500/10"
                : "text-white/40 border-white/15 bg-white/5"
            }`}
          >
            {isCurrent && (
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
            )}
            {item.status}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1.5">
          {item.title}
        </h3>
        {item.institution && (
          <p className="text-[14px] text-white/50">{item.institution}</p>
        )}
        {item.meta && (
          <p className="mt-3 text-[12px] font-semibold tracking-wide text-yellow-500 uppercase">
            {item.meta}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────────────────── */
function AboutMe() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      {/* ── Back button ── */}
      <button
        onClick={() => window.history.back()}
        aria-label="Go back"
        className="fixed top-6 left-6 z-50 w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
      >
        ←
      </button>

      {/* ── Floating Header ── */}
      <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-6">
        <div className="flex items-center bg-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-full py-2 px-3 gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
          <a
            href="/"
            className="flex items-center pl-3 font-bold text-white text-[17px] tracking-tighter"
          >
            CJ<span className="text-yellow-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  item.active
                    ? "text-yellow-500"
                    : "text-zinc-400 hover:text-yellow-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={se}
            download="Chathura_Jayashan_CV.pdf"
            className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Download CV
            <span>↓</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-32">
        {/* ── Hero ── */}
        <section className="pt-40 pb-20 border-b border-white/[0.07]">
          <h1 className="text-[clamp(44px,7vw,84px)] font-extrabold tracking-[-0.04em] leading-[0.98] mb-8 text-white">
            Hi, I'm
            <br />
            <span className="text-yellow-500">Chathura Jayashan.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed font-light mb-10">
            A 3rd-year Software Engineering undergraduate at SLIIT, building
            full-stack products end to end — from database design to deployment
            — while staying active in student leadership and community
            initiatives.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
              >
                <p className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-1">
                  {stat.label}
                </p>
                <p className="text-[15px] font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={se}
              download="Chathura_Jayashan_CV.pdf"
              className="inline-flex items-center gap-2.5 bg-yellow-500 text-black text-[13px] font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300"
            >
              Download CV
              <span>↓</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white hover:text-yellow-500 transition-colors duration-300 group/cta"
            >
              View my projects
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-sm group-hover/cta:bg-yellow-500 group-hover/cta:border-yellow-500 group-hover/cta:text-black transition-all duration-300">
                ↗
              </span>
            </a>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="py-20 border-b border-white/[0.07]">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-12">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/[0.07] hidden sm:block" />
            <div className="space-y-6">
              {education.map((item, idx) => (
                <TimelineItem key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="py-20 border-b border-white/[0.07]">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-12">
            Certifications
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.title} idx={idx}>
                <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-7 hover:border-yellow-500/30 hover:-translate-y-0.5 transition-all duration-500 h-full">
                  <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-yellow-500 mb-3">
                    Certificate
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-[14px] text-white/50">
                    {cert.institution}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Leadership & Involvement ── */}
        <section className="py-20">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-12">
            Leadership &amp; Involvement
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {involvement.map((item, idx) => (
              <Reveal key={item.title} idx={idx}>
                <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-7 hover:border-yellow-500/30 hover:-translate-y-0.5 transition-all duration-500 h-full">
                  <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-yellow-500 mb-3">
                    {item.role}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Bottom Strip ── */}
        <div className="pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-white/30 tracking-wide">
            Open to internship &amp; junior developer opportunities
          </p>
          <a
            href={se}
            download="Chathura_Jayashan_CV.pdf"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-white bg-white/5 border border-white/[0.07] px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
          >
            Download CV ↓
          </a>
        </div>
      </main>
    </div>
  );
}

export default AboutMe;
