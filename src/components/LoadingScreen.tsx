"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Developers.", "Designers.", "Analytics.", "Optimization."];

export default function LoadingScreen() {
  const [show,     setShow]     = useState(false);
  const [progress, setProgress] = useState(0);
  const [wordIdx,  setWordIdx]  = useState(0);
  const [phase,    setPhase]    = useState<"in" | "out">("in");
  const [exiting,  setExiting]  = useState(false);
  const rafRef  = useRef<number>(0);
  const intRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem("bmv_splash")) return;
    setShow(true);

    // ── Progress bar (ease-in-out cubic, ~3.6 s total) ──
    const TOTAL = 3600;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / TOTAL, 1);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.floor(e * 100));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        // Hold 100% briefly, then exit
        setTimeout(() => setExiting(true), 380);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("bmv_splash", "1");
        }, 1100); // 380 + 720 transition
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    // ── Word cycling (every 900 ms) ──
    intRef.current = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setPhase("in");
      }, 220);
    }, 900);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (intRef.current) clearInterval(intRef.current);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col"
      style={{
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 720ms cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* ── Top bar: logo right ── */}
      <div className="flex items-start justify-end px-8 pt-8">
        <BmvLogoLarge />
      </div>

      {/* ── Center: WE ARE + cycling word ── */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center select-none">
          {/* Static label */}
          <p
            className="font-black uppercase leading-none tracking-[0.08em]"
            style={{ fontSize: "clamp(52px, 9vw, 110px)", color: "rgba(255,255,255,0.18)" }}
          >
            WE ARE
          </p>

          {/* Cycling word */}
          <p
            className="font-black uppercase leading-none tracking-[0.06em] text-[#6EE010]"
            style={{
              fontSize: "clamp(52px, 9vw, 110px)",
              opacity: phase === "in" ? 1 : 0,
              transform: phase === "in" ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity 220ms ease, transform 220ms ease",
            }}
          >
            {WORDS[wordIdx]}
          </p>
        </div>
      </div>

      {/* ── Bottom: loading bar + counter ── */}
      <div className="px-8 md:px-16 pb-8 md:pb-10">
        {/* Label + percentage */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="uppercase tracking-[0.25em] text-white/30"
            style={{ fontSize: "10px" }}
          >
            Loading
          </span>
          <span
            className="font-mono text-white/50 tabular-nums"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            ({progress})
          </span>
        </div>

        {/* Track */}
        <div className="relative h-[2px] w-full bg-white/8 overflow-hidden rounded-full">
          {/* Fill */}
          <div
            className="absolute inset-y-0 left-0 bg-[#6EE010] rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 80ms linear",
              boxShadow: "0 0 12px rgba(110,224,16,0.5)",
            }}
          />
          {/* Shimmer */}
          <div
            className="absolute inset-y-0 rounded-full"
            style={{
              left: `${progress - 6}%`,
              width: "6%",
              background: "linear-gradient(90deg, transparent, rgba(110,224,16,0.7), transparent)",
              opacity: progress > 0 && progress < 100 ? 1 : 0,
              transition: "left 80ms linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Logo sized up for loading screen visibility
function BmvLogoLarge() {
  return (
    <svg
      width="200"
      height="65"
      viewBox="0 0 110 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(16,16)">
        <ellipse cx="0" cy="0" rx="13" ry="5" stroke="#6EE010" strokeWidth="2" fill="none" transform="rotate(-35)" />
        <ellipse cx="0" cy="0" rx="13" ry="5" stroke="white" strokeWidth="1.5" fill="none" transform="rotate(35)" />
        <circle cx="0" cy="0" r="2.5" fill="#6EE010" />
      </g>
      <text x="34" y="20" fill="white" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">BMV</text>
      <text x="34" y="32" fill="white" fontSize="8" fontWeight="400" fontFamily="sans-serif" letterSpacing="4">DIGITAL</text>
    </svg>
  );
}
