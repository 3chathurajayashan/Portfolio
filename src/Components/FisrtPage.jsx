import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Standard Apple Font Stack
const appleFont =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif";

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.3 + 0.1,
  speed: Math.random() * 0.2 + 0.1,
  drift: (Math.random() - 0.5) * 0.2,
}));

function Particle({ x, y, size, opacity, speed, drift }) {
  const style = {
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    borderRadius: "50%",
    background: "#0A84FF",
    opacity,
    animation: `floatUp ${6 / speed}s linear infinite`,
    animationDelay: `${Math.random() * 6}s`,
    willChange: "transform, opacity",
    "--drift": `${drift * 60}px`,
  };
  return <div style={style} />;
}

function GridLines() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.035,
        pointerEvents: "none",
      }}
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#0A84FF"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function GlowOrb() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(10,132,255,0.06) 0%, rgba(10,132,255,0.02) 40%, transparent 70%)",
        pointerEvents: "none",
        animation: "orbPulse 4s ease-in-out infinite",
      }}
    />
  );
}

function CornerDecor() {
  const style = (top, left, right, bottom) => ({
    position: "absolute",
    width: 40,
    height: 40,
    top,
    left,
    right,
    bottom,
    borderTop: top !== undefined ? "1px solid rgba(10,132,255,0.3)" : "none",
    borderBottom:
      bottom !== undefined ? "1px solid rgba(10,132,255,0.3)" : "none",
    borderLeft: left !== undefined ? "1px solid rgba(10,132,255,0.3)" : "none",
    borderRight:
      right !== undefined ? "1px solid rgba(10,132,255,0.3)" : "none",
  });
  return (
    <>
      <div style={style(32, 32, undefined, undefined)} />
      <div style={style(32, undefined, 32, undefined)} />
      <div style={style(undefined, 32, undefined, 32)} />
      <div style={style(undefined, undefined, 32, 32)} />
    </>
  );
}

function TypewriterTag() {
  const phrases = ["Undergraduate", "DEVELOPER", "Software Engineer", "SLIIT"];
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting && displayed.length < target.length)
          setDisplayed(target.slice(0, displayed.length + 1));
        else if (!deleting && displayed.length === target.length)
          setTimeout(() => setDeleting(true), 1500);
        else if (deleting && displayed.length > 0)
          setDisplayed(displayed.slice(0, -1));
        else if (deleting && displayed.length === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      },
      deleting ? 50 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.24em",
        color: "rgba(10,132,255,0.8)",
        fontFamily: "'SF Mono', monospace",
        textTransform: "uppercase",
      }}
    >
      {displayed}
      <span style={{ animation: "blink 0.8s step-end infinite" }}>|</span>
    </div>
  );
}

function CustomCursor({ hovered, leaving }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#0A84FF",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          opacity: leaving ? 0 : 1,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(10,132,255,0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
          opacity: leaving ? 0 : 1,
        }}
      />
    </>
  );
}

export default function EntranceSplash({ onEnter }) {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => {
      onEnter?.();
      navigate("/home");
    }, 700);
  };

  return (
    <div
      onClick={handleEnter}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9998,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        cursor: "none",
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.7s",
      }}
    >
      <GridLines />
      <GlowOrb />
      <CornerDecor />
      {PARTICLES.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      <div style={{ textAlign: "center", zIndex: 2 }}>
        <h1
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#f5f5f7",
            fontFamily: appleFont,
            margin: 0,
          }}
        >
          CJ<span style={{ color: "#0A84FF" }}>.</span>
        </h1>
      </div>
      <TypewriterTag />
      <div
        style={{
          marginTop: "40px",
          fontSize: "13px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: appleFont,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Click to enter
      </div>

      <CustomCursor leaving={leaving} />

      <style>{`
        @keyframes floatUp { to { transform: translateY(-100vh); opacity: 0; } }
        @keyframes orbPulse { 0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); } }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
