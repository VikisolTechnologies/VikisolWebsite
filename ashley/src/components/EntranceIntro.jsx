import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// A first-visit entrance for the homepage only - plays once per browser session (sessionStorage-
// gated), skipped entirely for prefers-reduced-motion or any page other than "/". Replaces the old
// dormant src/layouts/preloader (dead template leftover - its own animation targeted CSS classes
// that didn't even exist in its markup, and its copy was the unmodified ThemeForest demo text).
//
// Renders unconditionally on "/" from the very first paint (server-rendered, not triggered by a
// client effect) - deciding whether to show it only in an effect meant a ~1s gap where the
// browser painted the real homepage before React hydrated and the overlay appeared, i.e. exactly
// the flash-of-homepage this was meant to prevent. sessionStorage/matchMedia aren't readable
// during SSR, so the route match (router.pathname - identical on server and client, no hydration
// mismatch risk) is what gates rendering; sessionStorage/reduced-motion only decide, post-hydration,
// whether to run the sequence or dismiss it immediately via `skip`.
const LINES = ["A real need.", "The right response.", "Welcome to the Vikisol ecosystem."];
const LINE_MS = 1600;
const WORDMARK_HOLD_MS = 1800;
const EXIT_MS = 700;

const EntranceIntro = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState("lines");
  const [skip, setSkip] = useState(false);
  // Next's reactStrictMode (next.config.js) deliberately double-invokes every effect in dev -
  // mount, run cleanup, mount again - to surface exactly this kind of bug. Without this guard,
  // the first invocation would schedule the timers below and a phantom cleanup would cancel them
  // before the sequence ever got to run. The ref survives the double-invoke (only effects re-run,
  // not state/refs), so the second invocation sees it and skips straight past.
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || startedRef.current || !isHome) return;
    startedRef.current = true;

    const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem("vikisol-intro-seen");

    if (reducedMotion || alreadySeen) {
      setSkip(true);
      return;
    }

    window.sessionStorage.setItem("vikisol-intro-seen", "1");
    document.documentElement.style.overflow = "hidden";

    LINES.forEach((_, i) => {
      setTimeout(() => setLineIndex(i), i * LINE_MS);
    });
    const wordmarkAt = LINES.length * LINE_MS;
    const exitAt = wordmarkAt + WORDMARK_HOLD_MS;
    const doneAt = exitAt + EXIT_MS;

    setTimeout(() => setPhase("wordmark"), wordmarkAt);
    setTimeout(() => setPhase("exit"), exitAt);
    setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, doneAt);

    // Deliberately no cleanup here: this sequence is meant to run to completion once started
    // (sessionStorage already guarantees it only ever starts once for real - see startedRef.
    // above for why the StrictMode phantom mount must not be allowed to cancel it). On a genuine
    // unmount mid-sequence, React 18 safely no-ops the remaining setState calls.
  }, [isHome]);

  if (!isHome || skip || phase === "done") return null;

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
