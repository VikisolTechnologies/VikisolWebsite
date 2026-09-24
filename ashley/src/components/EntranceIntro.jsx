import { useEffect, useState } from "react";

// A first-visit entrance for the homepage only - plays once per browser session (sessionStorage-
// gated), skipped entirely for prefers-reduced-motion or any page other than "/". Replaces the old
// dormant src/layouts/preloader (dead template leftover - its own animation targeted CSS classes
// that didn't even exist in its markup, and its copy was the unmodified ThemeForest demo text).
const LINES = ["A real need.", "The right response.", "Welcome to the Vikisol ecosystem."];
const LINE_MS = 650;
const WORDMARK_HOLD_MS = 850;
const EXIT_MS = 650;

const EntranceIntro = () => {
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState("lines");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem("vikisol-intro-seen");

    if (reducedMotion || alreadySeen || window.location.pathname !== "/") {
      return;
    }

    window.sessionStorage.setItem("vikisol-intro-seen", "1");
    setVisible(true);
    document.documentElement.style.overflow = "hidden";

    const timers = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLineIndex(i), i * LINE_MS));
    });
    const wordmarkAt = LINES.length * LINE_MS;
    const exitAt = wordmarkAt + WORDMARK_HOLD_MS;
    const doneAt = exitAt + EXIT_MS;

    timers.push(setTimeout(() => setPhase("wordmark"), wordmarkAt));
    timers.push(setTimeout(() => setPhase("exit"), exitAt));
    timers.push(
      setTimeout(() => {
        setPhase("done");
        document.documentElement.style.overflow = "";
      }, doneAt)
    );

    return () => {
      timers.forEach(clearTimeout);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!visible || phase === "done") return null;

  return (
    <div className={`mil-entrance${phase === "exit" ? " mil-entrance-exit" : ""}`}>
      {phase === "lines" && (
        <p className="mil-entrance-line" key={lineIndex}>
          {LINES[lineIndex]}
        </p>
      )}
      {(phase === "wordmark" || phase === "exit") && (
        <div className="mil-entrance-wordmark">
          <span>VIKISOL</span>
          <span className="mil-entrance-rule" />
        </div>
      )}
      <style jsx>{`
        .mil-entrance {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0a0a;
          color: #f5f5f4;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity ${EXIT_MS}ms ease, transform ${EXIT_MS}ms ease;
        }
        .mil-entrance-exit {
          opacity: 0;
          transform: scale(1.03);
          pointer-events: none;
        }
        .mil-entrance-line {
          font-family: "Outfit", sans-serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 0.01em;
          margin: 0;
          animation: mil-entrance-line-fade ${LINE_MS}ms ease forwards;
        }
        .mil-entrance-wordmark {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          animation: mil-entrance-wordmark-in 500ms ease forwards;
        }
        .mil-entrance-wordmark span:first-child {
          font-family: "Outfit", sans-serif;
          font-size: 40px;
          font-weight: 700;
          letter-spacing: 6px;
        }
        .mil-entrance-rule {
          width: 0;
          height: 2px;
          background: #ff9800;
          animation: mil-entrance-rule-grow 500ms ease forwards 250ms;
        }
        @keyframes mil-entrance-line-fade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-8px);
          }
        }
        @keyframes mil-entrance-wordmark-in {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes mil-entrance-rule-grow {
          from {
            width: 0;
          }
          to {
            width: 64px;
          }
        }
      `}</style>
    </div>
  );
};

export default EntranceIntro;
