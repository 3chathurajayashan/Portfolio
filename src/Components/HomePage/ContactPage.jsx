import React from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  Github,
  Instagram,
  Linkedin,
  X,
  MapPin,
  ExternalLink,
} from "lucide-react";

function ContactPage() {
  const contactDetails = [
    {
      icon: <Phone size={20} />,
      label: "Mobile",
      value: "076 042 9501",
      link: "tel:0760429501",
    },
    {
      icon: <X size={20} />,
      label: "X",
      value: "chathuraJ",
      link: "https://x.com/chathura_jayash?s=11",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "chathurachamod88@gmail.com",
      link: "mailto:chathurachamod88@gmail.com",
    },
    {
      icon: <Mail size={20} />,
      label: "University Email",
      value: "it23404946@my.sliit.lk",
      link: "mailto:it23404946@my.sliit.lk",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      value: "chathura_jayashan",
      link: "https://www.instagram.com/chathura_jayashan._?igsh=eWtiYXZsc2RqemF5&utm_source=qr",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "3chathurajayashan",
      link: "https://github.com/3chathurajayashan",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Chathura Jayashan",
      link: "https://www.linkedin.com/in/chathura-jayashan-1443a8396",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sans selection:bg-white/20">
      {/* Sticky Smooth Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#000000]/70 border-b border-[#1d1d1f]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[#86868b] hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back</span>
          </button>
          <span className="text-sm font-medium text-[#f5f5f7]">Contact</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 md:py-24">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] mb-8">
            Connect ? I got you :)
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-normal leading-relaxed">
            I’m currently available for new projects and collaborations. Let’s
            create something exceptional together.
          </p>
        </div>

        {/* Contact List */}
        <div className="border-t border-[#1d1d1f] mb-24">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-8 border-b border-[#1d1d1f] hover:bg-[#111111] transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="flex items-center gap-6">
                <div className="text-[#86868b] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-[#86868b] mb-0.5">{item.label}</p>
                  <p className="text-lg font-medium">{item.value}</p>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-[#424245] group-hover:text-white"
              />
            </a>
          ))}
        </div>

        {/* Location Section */}
        <div className="pt-8">
          <h3 className="text-sm font-semibold text-[#86868b] mb-6">
            Location
          </h3>
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-[#1d1d1f] transition-opacity duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.81691245785!2d79.9863!3d6.8436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f54d1d91a97%3A0x62955f2f45c4864b!2sHomagama!5e0!3m2!1sen!2slk!4v1716300000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
