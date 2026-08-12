import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Me", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "ongoing Projects", path: "/on-projects" },
    { label: "Contact", path: "/contact" },
    { label: "Experience", path: "/experience" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Container - added flex-wrap to allow the mobile menu to expand underneath */}
      <div className="flex flex-wrap items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-zinc-200 rounded-3xl md:rounded-full py-2 px-3 gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center pl-3 font-bold text-black text-[17px] tracking-tighter"
          >
            CJ<span className="text-[#30D158]">.</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-[13px] text-zinc-600 hover:text-[#30D158] transition-colors duration-300 font-medium tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/ContactPage")}
            className="bg-black text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#30D158] hover:text-black transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav className="md:hidden flex flex-col w-full items-center gap-4 py-4 border-t border-zinc-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-[13px] text-zinc-600 uppercase font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                navigate("/Contact");
                setIsOpen(false);
              }}
              className="bg-black text-white text-[13px] font-semibold px-8 py-2.5 rounded-full"
            >
              HireMe
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
