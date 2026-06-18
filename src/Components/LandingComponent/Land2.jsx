import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img5.jpg";

const services = [
  { title: "SaaS Development", desc: "Scalable cloud-based platforms." },
  { title: "Web Development", desc: "High-performance digital experiences." },
  { title: "Project Planning", desc: "Strategic architecture & roadmaps." },
  {
    title: "SEO Optimization",
    desc: "Visibility through technical precision.",
  },
];

const techCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Framer Motion", level: 85 },
      { name: "Vue.js", level: 60 },
      { name: "jQuery", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "NestJS", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "ASP.NET Core", level: 80 },
      { name: "Laravel", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Authentication", level: 85 },
      { name: "Microservices", level: 75 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    category: "Mobile App Development",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 85 },
      { name: "Android Studio", level: 75 },
      { name: "Flutter", level: 65 },
      { name: "Firebase", level: 80 },
      { name: "Push Notifications", level: 75 },
      { name: "Mobile UI/UX", level: 85 },
      { name: "REST API Integration", level: 90 },
      { name: "State Management", level: 80 },
      { name: "App Deployment", level: 75 },
    ],
  },

  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 75 },
      { name: "Firebase Firestore", level: 70 },
      { name: "SQLite", level: 75 },
      { name: "Database Design", level: 80 },
      { name: "Query Optimization", level: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "GitHub Actions", level: 85 },
      { name: "Terraform", level: 70 },
      { name: "Linux", level: 90 },
      { name: "Nginx", level: 85 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Prometheus", level: 65 },
      { name: "Grafana", level: 65 },
      { name: "Ansible", level: 60 },
    ],
  },
  {
    category: "Tools & Productivity",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "Docker Desktop", level: 85 },
      { name: "Swagger / OpenAPI", level: 85 },
      { name: "Linux CLI", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Notion", level: 80 },
    ],
  },
];

function Land2() {
  return (
    <div className="bg-[#0A0A0A] text-[#f5f5f7] selection:bg-yellow-500 selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={img1}
            alt="Hero"
            className="w-full h-full object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 flex flex-col justify-end h-full px-[10%] pb-[10%]">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[8rem] font-semibold tracking-tighter leading-[0.9] mb-8">
              Systemizing <br />
              <span className="text-yellow-500">Complexity.</span>
            </h1>
            <p className="text-xl text-[#f5f5f7]/70 font-light max-w-xl mb-10">
              Crafting scalable ecosystems with minimalist precision.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-[#FACC15] transition-colors">
                View Projects
              </button>
              <button className="px-8 py-3 rounded-full border border-[#f5f5f7]/20 hover:bg-[#f5f5f7]/10 transition-all">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-[10%]">
        <h2 className="text-2xl font-medium tracking-[0.1em]   text-yellow-500 mb-16">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-t border-[#f5f5f7]/10 pt-8"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#f5f5f7]/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categorized Tech Section */}
      <section className="py-12 pb-32 px-[10%]">
        <h2 className="text-2xl font-medium tracking-[0.1em]   text-yellow-500 mb-16">
          Technical Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {techCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-[#f5f5f7]/50 uppercase tracking-widest mb-8">
                {cat.category}
              </h3>
              <div className="space-y-8">
                {cat.skills.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-lg font-medium">{tech.name}</span>
                      <span className="text-[#f5f5f7]/40 text-xs font-mono">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-[#f5f5f7]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-[#EAB308]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Land2;
