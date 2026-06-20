import React from "react";

function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div className="flex items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-200 rounded-full py-2 px-3 gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center pl-3 font-bold text-black text-[17px] tracking-tighter"
        >
          CJ<span className="text-[#30D158]">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: "About Me", path: "/about" },
            { label: "Projects", path: "/projects" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-[13px] text-zinc-600 hover:text-[#30D158] transition-colors duration-300 font-medium tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <button className="bg-black text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#30D158] hover:text-black transition-all duration-300">
          Hire Me
        </button>
      </div>
    </header>
  );
}

export default Header;
