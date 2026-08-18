import React, { useEffect, useRef, useState } from "react";

const LANGUAGES = [
  {
    name: "TypeScript",
    time: "12 hrs 15 mins",
    percentage: 48.2,
    color: "#0071e3",
  },
  { name: "Java", time: "7 hrs 30 mins", percentage: 29.5, color: "#f89820" },
  { name: "Python", time: "3 hrs 45 mins", percentage: 14.8, color: "#3572A5" },
  { name: "YAML", time: "1 hr 10 mins", percentage: 4.6, color: "#cb171e" },
  { name: "Other", time: "45 mins", percentage: 2.9, color: "#86868b" },
];

const AppleLanguageStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  const fontStack =
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

  return (
    <div
      style={{
        width: "100%",
        display: "block",
        padding: "24px",
        background: "#ffffff",
        fontFamily: fontStack,
        WebkitFontSmoothing: "antialiased",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .als-reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
        .als-card {
          transition: box-shadow 400ms cubic-bezier(0.28,0.11,0.32,1);
        }
        .als-card:hover {
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.14);
        }
        .als-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 900ms cubic-bezier(0.28,0.11,0.32,1),
                      transform 900ms cubic-bezier(0.28,0.11,0.32,1);
        }
        .als-reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div
        ref={rootRef}
        className="als-card"
        style={{
          width: "100%",
          background: "#ffffff",
          border: "1px solid #d2d2d7",
          borderRadius: "22px",
          padding: "40px 32px",
          boxShadow: "0 20px 45px -25px rgba(0,0,0,0.12)",
          boxSizing: "border-box",
        }}
      >
        {/* Eyebrow */}
        <div
          className={`als-reveal ${isVisible ? "visible" : ""}`}
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#86868b",
            marginBottom: "10px",
          }}
        ></div>

        {/* Headline row */}
        <div
          className={`als-reveal ${isVisible ? "visible" : ""}`}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "32px",
            transitionDelay: "80ms",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#1d1d1f",
            }}
          >
            Languages & Time from GitHub Contributions
          </h2>
          <div
            style={{
              fontSize: "14px",
              color: "#6e6e73",
              fontWeight: 500,
            }}
          >
            Past Week
          </div>
        </div>

        {/* Language List */}
        <div
          className={`als-reveal ${isVisible ? "visible" : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            transitionDelay: "160ms",
          }}
        >
          {LANGUAGES.map((lang, index) => (
            <div
              key={lang.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Top row: Name & Time/Percentage */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#1d1d1f",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: lang.color,
                      display: "inline-block",
                    }}
                  />
                  {lang.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: "#6e6e73", fontSize: "14px" }}>
                    {lang.time}
                  </span>
                  <span
                    style={{
                      color: "#1d1d1f",
                      fontWeight: 600,
                      minWidth: "48px",
                      textAlign: "right",
                    }}
                  >
                    {lang.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress bar container */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#f5f5f7",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: isVisible ? `${lang.percentage}%` : "0%",
                    height: "100%",
                    backgroundColor: lang.color,
                    borderRadius: "999px",
                    transition: `width 1200ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleLanguageStats;
