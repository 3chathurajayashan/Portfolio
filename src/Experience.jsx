import React from "react";
import Header from "./Components/HeaderComponent/Header";
import sit from "../src/assets/sit.jpeg";

function Experience() {
  return (
    <div
      className="min-h-screen bg-white text-[#1d1d1f]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <Header />

      {/* Hero Section */}
      <section className="pt-40 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-500 text-base md:text-lg font-semibold mb-4 tracking-tight">
            Experience of Chathura Jayashan ? There you go!
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Building software
            <br />
            that makes an impact.
          </h1>

          <p className="mt-6 text-[#86868b] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-normal">
            Currently a Software Engineering Intern at Silverline IT, working
            across backend development, frontend engineering, and modern
            software architecture.
          </p>
        </div>
      </section>

      {/* Company Card */}
      <section className="px-6 md:px-20 mt-24">
        <div className="max-w-5xl mx-auto">
          <div
            className="
              bg-[#f5f5f7]
              rounded-[28px]
              p-8 md:p-16
              flex flex-col md:flex-row
              gap-12
              items-start
            "
          >
            {/* Company Logo */}
            <div
              className="
                w-32 h-32 md:w-40 md:h-40
                rounded-3xl
                bg-white
                shadow-[0_2px_20px_rgba(0,0,0,0.06)]
                flex
                items-center
                justify-center
                p-6
                shrink-0
              "
            >
              <img
                src={sit}
                alt="Silverline IT"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Company Details */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Silverline IT PVT(LTD)
              </h2>

              <p className="text-yellow-500  text-lg mt-2 font-medium">
                Software Engineering Intern
              </p>

              <p className="text-[#424245] mt-6 leading-relaxed text-lg max-w-2xl">
                Working with modern technologies to design, develop, and
                maintain scalable applications. Collaborating with experienced
                engineers to build production-ready software solutions.
              </p>

              {/* Internship Information */}
              <div className="grid sm:grid-cols-3 gap-8 mt-10">
                <div>
                  <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium">
                    Duration
                  </p>
                  <p className="text-[#1d1d1f] mt-2 font-medium">
                    2026 &ndash; Present
                  </p>
                </div>

                <div>
                  <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium">
                    Position
                  </p>
                  <p className="text-[#1d1d1f] mt-2 font-medium">
                    Software Engineer Intern
                  </p>
                </div>

                <div>
                  <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium">
                    Location
                  </p>
                  <p className="text-[#1d1d1f] mt-2 font-medium">Sri Lanka</p>
                </div>
              </div>

              {/* Company Information */}
              <div className="mt-12 pt-10 border-t border-[#d2d2d7]">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Silverline IT (Pvt) Ltd
                </h3>

                <div className="grid sm:grid-cols-2 gap-10 mt-8">
                  {/* Address */}
                  <div>
                    <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium">
                      Address
                    </p>
                    <p className="text-[#1d1d1f] mt-3 leading-relaxed">
                      52 Mahabage Rd,
                      <br />
                      Ragama 11010,
                      <br />
                      Sri Lanka
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium">
                      Phone
                    </p>
                    <p className="text-[#1d1d1f] mt-3">076 744 0288</p>

                    <p className="text-[#86868b] text-xs uppercase tracking-wide font-medium mt-6">
                      Working Hours
                    </p>
                    <p className="text-[#1d1d1f] mt-3">
                      Opens 8:00 AM Wednesday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-6 md:px-20 mt-32 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Technologies I work with
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="
                    bg-[#f5f5f7]
                    rounded-2xl
                    p-6
                    text-center
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                  "
                >
                  <p className="text-lg font-medium text-[#1d1d1f]">{tech}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="pb-32 px-6 text-center bg-[#f5f5f7] pt-32">
        <h2
          className="
            text-4xl
            md:text-7xl
            font-semibold
            tracking-tight
            max-w-4xl
            mx-auto
            leading-[1.1]
          "
        >
          Learning. <span className="text-yellow-500 ">Building.</span> Growing.
        </h2>

        <p className="text-[#86868b] mt-6 max-w-xl mx-auto text-xl leading-relaxed">
          Every project is an opportunity to create better experiences through
          technology.
        </p>
      </section>
    </div>
  );
}

export default Experience;
