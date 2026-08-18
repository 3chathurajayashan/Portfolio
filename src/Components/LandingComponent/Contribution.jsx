import React, { useEffect, useRef, useState } from "react";

// Apple-style spring-out easing for counters
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const useAnimatedCounter = (end, duration = 1600, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTime = null;
    let frame;

    const step = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, trigger]);

  return count;
};

const STATS = [
  { label: "Total Commits", value: 1248, suffix: "+" },
  { label: "Current Streak", value: 42, suffix: " Days" },
  { label: "Active Days", value: 315, suffix: "" },
];

const AppleActivityGraph = ({ username = "3chathurajayashan" }) => {
  const src = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=minimal&hide_border=true&area=true&color=1d1d1f&point=1d1d1f&line=1d1d1f&hide_title=true`;

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

  const counters = STATS.map((s) =>
    useAnimatedCounter(s.value, 1700, isVisible),
  );

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
          .aag-reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
        .aag-card {
          transition: box-shadow 400ms cubic-bezier(0.28,0.11,0.32,1);
        }
        .aag-card:hover {
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.14);
        }
        .aag-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 900ms cubic-bezier(0.28,0.11,0.32,1),
                      transform 900ms cubic-bezier(0.28,0.11,0.32,1);
        }
        .aag-reveal.visible { opacity: 1; transform: translateY(0); }
        .aag-scrollarea {
          -webkit-mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
        }
        .aag-scrollarea::-webkit-scrollbar { height: 6px; }
        .aag-scrollarea::-webkit-scrollbar-thumb { background: #d2d2d7; border-radius: 999px; }
        .aag-scrollarea::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <div
        ref={rootRef}
        className="aag-card"
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
          className={`aag-reveal ${isVisible ? "visible" : ""}`}
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
          className={`aag-reveal ${isVisible ? "visible" : ""}`}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "28px",
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
            Contribution history
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#6e6e73",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#1db954",
                display: "inline-block",
              }}
            />
            @{username}
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`aag-reveal ${isVisible ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            marginBottom: "32px",
            transitionDelay: "160ms",
            gap: "16px",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "0 16px",
                borderLeft: i === 0 ? "none" : "1px solid #d2d2d7",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(30px, 4vw, 42px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#1d1d1f",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {counters[i]}
                {s.suffix}
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#86868b",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div
          className={`aag-reveal ${isVisible ? "visible" : ""}`}
          style={{
            borderRadius: "16px",
            border: "1px solid #e5e5e7",
            background: "#fbfbfd",
            padding: "20px",
            transitionDelay: "240ms",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className="aag-scrollarea"
            style={{ width: "100%", overflowX: "auto" }}
          >
            <img
              src={src}
              alt={`${username}'s GitHub contribution graph`}
              style={{
                width: "100%",
                minWidth: "640px",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleActivityGraph;
