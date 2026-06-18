import React from "react";
import { motion } from "framer-motion";
import link from "../../assets/linnk.jpeg";

function Linkdin() {
  const profileUrl = "https://www.linkedin.com/in/chathura-jayashan-1443a8396";

  return (
    <div className="w-full bg-black min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="max-w-4xl w-full flex items-center gap-12 cursor-pointer group"
      >
        {/* Profile Image with subtle glow */}
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-zinc-800 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:border-yellow-400/50">
            <img
              src={link}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-semibold tracking-tight text-white">
            Chathura Jayashan
          </h1>
          <h2 className="text-2xl font-medium text-yellow-400 tracking-wide">
            Full-Stack Developer & DevOps Enthusiast
          </h2>
          <p className="text-zinc-500 text-lg mt-2 font-light flex items-center gap-2">
            Systemizing businesses through high-performance web architecture.
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 border-b border-white">
              View Profile →
            </span>
          </p>
        </div>
      </motion.a>
    </div>
  );
}

export default Linkdin;
