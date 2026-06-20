import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const appleFont =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif";

/* ── Canvas background: grid + drifting particles ── */
function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 38 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        o: Math.random() * 0.22 + 0.05,
        vy: -(Math.random() * 0.28 + 0.08),
        vx: (Math.random() - 0.5) * 0.1,
      }));
    };

    const drawGrid = () => {
      const { width: W, height: H } = canvas;
      const step = 64;
      ctx.strokeStyle = "rgba(234,179,8,0.028)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      drawGrid();

      // Soft center glow
      const g = ctx.createRadialGradient(
        W / 2,
        H / 2,
        0,
        W / 2,
        H / 2,
        Math.min(W, H) * 0.44,
      );
      g.addColorStop(0, "rgba(234,179,8,0.032)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234,179,8,${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = H + 4;
          p.x = Math.random() * W;
        }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
      });

      raf = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* ── Corner bracket decorations ── */
function CornerDecor() {
  const corners = [
    { top: 32, left: 32 },
    { top: 32, right: 32 },
    { bottom: 32, left: 32 },
    { bottom: 32, right: 32 },
  ];

  return (
    <>
      {corners.map((pos, i) => {
        const isRight = pos.right !== undefined;
        const isBottom = pos.bottom !== undefined;
        return (
          <div
            key={i}
            style={{
              position: "fixed",
              width: 28,
              height: 28,
              zIndex: 1,
              pointerEvents: "none",
              ...pos,
              borderTop: !isBottom ? "1px solid rgba(234,179,8,0.35)" : "none",
              borderBottom: isBottom
                ? "1px solid rgba(234,179,8,0.35)"
                : "none",
              borderLeft: !isRight ? "1px solid rgba(234,179,8,0.35)" : "none",
              borderRight: isRight ? "1px solid rgba(234,179,8,0.35)" : "none",
            }}
          />
        );
      })}
    </>
  );
}

/* ── Typewriter ── */
function TypewriterTag() {
  const phrases = ["Undergraduate", "Developer", "Software Engineer", "SLIIT"];
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting && displayed.length < target.length) {
          setDisplayed(target.slice(0, displayed.length + 1));
        } else if (!deleting && displayed.length === target.length) {
          setTimeout(() => setDeleting(true), 1600);
        } else if (deleting && displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else if (deleting && displayed.length === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      },
      deleting ? 45 : 85,
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 22,
        marginTop: 20,
        fontFamily: "'SF Mono', 'Fira Mono', monospace",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.26em",
        color: "rgba(234,179,8,0.85)",
        textTransform: "uppercase",
        animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both",
      }}
    >
      {displayed}
      <span style={{ animation: "blink 0.9s step-end infinite" }}>|</span>
    </div>
  );
}

/* ── Custom cursor ── */
function CustomCursor({ leaving }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
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

  const base = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
    opacity: leaving ? 0 : 1,
    transition: "opacity 0.3s",
  };

  return (
    <>
      <div
        ref={dotRef}
        style={{
          ...base,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#EAB308",
        }}
      />
      <div
        ref={ringRef}
        style={{
          ...base,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "1px solid rgba(234,179,8,0.5)",
          transition: "opacity 0.3s, width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}

/* ── Main component ── */
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
        cursor: "none",
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.7s ease",
        fontFamily: appleFont,
      }}
    >
      <Background />
      <CornerDecor />

      {/* ── Scene ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Top vertical rule */}
        <div
          style={{
            width: 1,
            height: 56,
            background:
              "linear-gradient(to bottom, transparent, rgba(234,179,8,0.45), transparent)",
            marginBottom: 40,
            animation: "fadeIn 1s ease 0.1s both",
          }}
        />

        {/* Monogram */}
        <h1
          style={{
            fontSize: "clamp(80px, 14vw, 140px)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1,
            animation: "fadeDown 1s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        >
          CJ<span style={{ color: "#EAB308" }}>.</span>
        </h1>

        {/* Typewriter */}
        <TypewriterTag />

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 44,
            animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s both",
          }}
        >
          <span
            style={{
              display: "block",
              width: 36,
              height: 1,
              background: "rgba(255,255,255,0.1)",
            }}
          />
          <span
            style={{
              display: "block",
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#EAB308",
              opacity: 0.55,
            }}
          />
          <span
            style={{
              display: "block",
              width: 36,
              height: 1,
              background: "rgba(255,255,255,0.1)",
            }}
          />
        </div>

        {/* Enter label */}
        <p
          style={{
            marginTop: 44,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
            animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s both",
          }}
        >
          Click anywhere to enter
        </p>

        {/* Bottom vertical rule */}
        <div
          style={{
            width: 1,
            height: 56,
            background:
              "linear-gradient(to bottom, transparent, rgba(234,179,8,0.45), transparent)",
            marginTop: 40,
            animation: "fadeIn 1s ease 0.1s both",
          }}
        />
      </div>

      <CustomCursor leaving={leaving} />

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
